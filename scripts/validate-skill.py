#!/usr/bin/env python3
"""Validate agent skills and Markdown links.

Checks:
- every skills/<name>/SKILL.md has YAML front matter with `name` (equal to the
  directory name, lowercase letters, digits, hyphens) and `description`
  (non-empty, at most 1024 characters),
- example files (`*.js`) mentioned in a skill exist in examples/rest/javascript,
- relative Markdown links in all non-generated *.md files resolve.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EXAMPLES = ROOT / "examples" / "rest" / "javascript"
NAME_RE = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
LINK_RE = re.compile(r"(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+\"[^\"]*\")?\)")
JS_RE = re.compile(r"\b([a-z][a-z0-9-]*\.js)\b")
SKIP_DIRS = {".git", "node_modules", "generated"}
MAX_DESCRIPTION = 1024

errors = []


def error(path, message):
    errors.append(f"{path.relative_to(ROOT)}: {message}")


def front_matter(path, text):
    if not text.startswith("---\n"):
        error(path, "missing YAML front matter")
        return {}
    end = text.find("\n---", 4)
    if end < 0:
        error(path, "unterminated YAML front matter")
        return {}
    fields = {}
    for line in text[4:end].splitlines():
        if not line.strip() or line.startswith((" ", "\t", "#")):
            continue
        key, sep, value = line.partition(":")
        if not sep:
            error(path, f"invalid front matter line: {line!r}")
            continue
        fields[key.strip()] = value.strip().strip("\"'")
    return fields


def validate_skill(skill_md):
    text = skill_md.read_text(encoding="utf-8")
    fields = front_matter(skill_md, text)
    name = fields.get("name", "")
    description = fields.get("description", "")
    if not name:
        error(skill_md, "front matter lacks `name`")
    elif not NAME_RE.match(name):
        error(skill_md, f"invalid name {name!r}")
    elif name != skill_md.parent.name:
        error(skill_md, f"name {name!r} differs from directory {skill_md.parent.name!r}")
    if not description:
        error(skill_md, "front matter lacks `description`")
    elif len(description) > MAX_DESCRIPTION:
        error(skill_md, f"description has {len(description)} characters (max {MAX_DESCRIPTION})")

    for md in skill_md.parent.rglob("*.md"):
        for js in sorted(set(JS_RE.findall(md.read_text(encoding="utf-8")))):
            if not (EXAMPLES / js).exists():
                error(md, f"mentions missing example {js}")


def strip_code(text):
    text = re.sub(r"^(```|~~~).*?^\1", "", text, flags=re.S | re.M)
    return re.sub(r"`[^`\n]*`", "", text)


def anchors(path):
    result = set()
    for line in path.read_text(encoding="utf-8").splitlines():
        match = re.match(r"^#{1,6}\s+(.*)$", line)
        if match:
            slug = re.sub(r"[^\w\- ]", "", match.group(1).strip().lower()).replace(" ", "-")
            result.add(slug)
    return result


def validate_links(md):
    for target in LINK_RE.findall(strip_code(md.read_text(encoding="utf-8"))):
        if re.match(r"^[a-z][a-z0-9+.-]*:", target, re.I):
            continue
        file_part, _, fragment = target.partition("#")
        dest = (md.parent / file_part).resolve() if file_part else md
        if not dest.exists():
            error(md, f"broken link {target}")
        elif fragment and dest.suffix == ".md" and fragment.lower() not in anchors(dest):
            error(md, f"missing anchor {target}")


def main():
    skills = sorted((ROOT / "skills").glob("*/SKILL.md"))
    if not skills:
        errors.append("no skills/*/SKILL.md found")
    for skill_md in skills:
        validate_skill(skill_md)

    for md in sorted(ROOT.rglob("*.md")):
        if SKIP_DIRS.isdisjoint(md.relative_to(ROOT).parts):
            validate_links(md)

    for message in errors:
        print(f"ERROR {message}")
    print(f"{len(skills)} skill(s) checked, {len(errors)} error(s)")
    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
