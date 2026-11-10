# Code Documentation Conventions

Document all public classes, interfaces, functions, methods, and non-obvious data structures with your language's standard conventions:

- **JavaScript:** JSDoc (for examples)
- **Python:** docstrings (for scripts)
- **Other languages:** applicable standard format (Javadoc, C#/F# XML docs, etc.)

## Doc comments

Include doc comments for:
- **Parameters:** name, type, and purpose; constraints or valid ranges if applicable.
- **Return values:** type and purpose; null/undefined conditions if relevant.
- **Exceptions or error conditions:** what can fail and why.
- **Side effects:** state changes, persistence, or resource usage that is not obvious from the signature.

## Indexserver-specific behavior and workarounds

Use meaningful comments to explain non-obvious implementation decisions and Indexserver quirks:

- **Translation key nulls:** The `commentTranslationKey` field crashes if it is `null`; pass an empty string or omit it. Example:
  ```javascript
  return {
    key: key,
    type: type,
    nameTranslationKey: translateName.translationKey,
    commentTranslationKey: ''  // Never null; crashes otherwise
  };
  ```

- **Unknown language tags:** Translation terms for unknown language tags (outside `CONST.LANGUAGE`) are silently dropped without error during `saveTranslationTerms`. No exception is raised. Example:
  ```javascript
  // Only use CONST.LANGUAGE.* for language tags; custom tags are discarded silently
  languageTag: CONST.LANGUAGE.EN  // Not 'en-US' or custom codes
  ```

- **Package and package-level GUIDs:** The naming is confusing—all GUID associations are named `packageName`:
  - `Aspect`, `AspectAssoc` and `DocMask` objects are associated with a **package-level GUID** (the package at a specific level).
  - `TranslationTerm` objects are optionally associated with a **package GUID** (the package itself), combined with a level.

## Identifiers and messages

- **English identifiers:** Use English names for classes, interfaces, functions, methods, variables, and other identifiers, regardless of the language of the user's request. Keep them consistent with the existing codebase and the OpenAPI definition.

- **English log and error messages:** All log output and error messages must be in English so they can be tracked and debugged by any team member.

- **Comment language:** Write new code comments in the language of the user's request, unless the user specifies another language. If it cannot be determined, fall back to English. Markdown documentation stays in English.

## Error logging

- **Errors that abort the program or operation:** Log the full error object with its stack trace (e.g., `console.error(error)`), not just the message. This aids debugging.
  ```javascript
  // Abort: log stack trace
  console.error('Failed to create document:', error);
  throw error;
  ```

- **Errors that are caught and handled intentionally:** No stack trace needed. Log the outcome and recovery:
  ```javascript
  // Handled: no stack trace required
  if (error.code === 'NOT_FOUND') {
    console.log('Document not found; creating a new one');
  }
  ```

## Code quality

- **Avoid redundant comments:** Do not comment code that clearly expresses its intent.
- **Prioritize documentation quality and maintainability over a fixed comment-to-code ratio.**
- **Preserve existing documentation language** when modifying code unless the user requests a change.
