# AGENTS.md

Instructions for AI coding agents working in this repository.

## Purpose

This repository teaches AI agents and developers to use the ELO Indexserver
REST API. It contains an agent skill, a knowledge base, the OpenAPI definition
with generated references, and JavaScript examples.

## Using the API (writing client code)

1. Read [skills/elo-indexserver-rest/SKILL.md](skills/elo-indexserver-rest/SKILL.md)
   and the reference file for the task.
2. Start from the matching example in [examples/rest/javascript](examples/rest/javascript/).
3. Verify operation and parameter names in
   [operations.md](api/v25.0.1.5/generated/operations.md) and types in
   [schemas.md](api/v25.0.1.5/generated/schemas.md). Search them with grep;
   they are too large to read completely.
4. Consult [knowledge/](knowledge/README.md) for background and troubleshooting.

## Layout

| Path | Rules |
| --- | --- |
| `skills/elo-indexserver-rest/` | `SKILL.md` keeps YAML front matter (`name` = directory name, `description` ≤ 1024 characters) and stays short; details go into `references/`. |
| `knowledge/` | `concepts/` explain, `guides/` show tasks, `patterns/` describe cross-cutting practices, `troubleshooting/` maps symptoms to fixes. Update [knowledge/README.md](knowledge/README.md) when adding files. |
| `api/<version>/openapi.json` | Source of truth for the API. Do not edit by hand. |
| `api/<version>/generated/` | Generated. Never edit; run `python3 scripts/generate-api-docs.py`. |
| `examples/rest/javascript/` | One topic per file. Update the catalog in [examples/rest/README.md](examples/rest/README.md). |
| `scripts/` | Generator and validators; Python 3 standard library and Bash only. |

## Conventions

- Examples assume `config`, `xhr` (from `rest-call.js`), and `CONST` (loaded by
  `login.js`). Use `CONST.*` instead of numeric constants.
- Use `async`/`await`, close searches with `findClose`, and release locks in
  `finally`.
- Pass IDs as strings. `createSord`/`createDoc`/`checkoutSord` return
  `EditInfo`; use `.sord`.
- Every API statement in the docs must be verifiable in the OpenAPI definition,
  an example, or ELO documentation. Do not invent operations or parameters.
- Keep skill references and knowledge guides consistent when changing
  behavior descriptions.
- Never commit real credentials, tickets, session IDs, or host names.
- Always log errors that abort the program or the current operation with
  their stack trace (e.g. `console.error(error)`, not only `error.message`).
  Errors that are caught and handled intentionally need no stack trace.

## Code documentation

- Document all public classes, interfaces, functions, methods, and non-obvious
  data structures with the language's conventions (JSDoc for the JavaScript
  examples, docstrings for Python scripts).
- Document parameters, return values, exceptions, and relevant side effects
  where applicable.
- Document properties and data fields when their purpose, constraints, or
  semantics are not self-explanatory.
- Explain non-obvious implementation decisions, business rules,
  Indexserver-specific behavior, and workarounds with meaningful comments.
- Avoid redundant comments that merely repeat what the code already expresses.
- Prioritize documentation quality and maintainability over a fixed
  comment-to-code ratio.
- Use English names for classes, interfaces, functions, methods, variables,
  and other identifiers, regardless of the language of the user's request.
  Keep them consistent with the existing codebase and the OpenAPI definition.
- Write log and error messages in English.
- Write new code comments in the language of the user's request unless the
  user specifies another language; fall back to English if it cannot be
  determined. Markdown documentation stays in English.
- Preserve the existing documentation language when modifying code unless the
  user requests a change.

## Validation

Run before committing:

```bash
python3 scripts/generate-api-docs.py --check
python3 scripts/validate-skill.py
scripts/validate-examples.sh
```