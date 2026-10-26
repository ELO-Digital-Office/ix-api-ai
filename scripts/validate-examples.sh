#!/usr/bin/env bash
# Syntax check of all JavaScript examples with `node --check`.
set -euo pipefail

cd "$(dirname "$0")/.."

if ! command -v node >/dev/null 2>&1; then
	echo "ERROR node is not installed" >&2
	exit 1
fi

failed=0
count=0
while IFS= read -r -d '' file; do
	count=$((count + 1))
	if ! node --check "$file"; then
		echo "ERROR syntax: $file" >&2
		failed=$((failed + 1))
	fi
done < <(find examples -name '*.js' -print0 | sort -z)

echo "$count example(s) checked, $failed error(s)"
[[ $failed -eq 0 ]]
