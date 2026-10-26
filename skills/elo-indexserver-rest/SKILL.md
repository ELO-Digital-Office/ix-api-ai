---
name: elo-indexserver-rest
description: Write, review, and debug code that calls the ELO Indexserver (IX) REST API - login and session tickets, Sord folders and documents, file upload and download, Generation 1 index values (objKeys) and Generation 2 aspects, searches with findFirstSords/findNextSords, references, and workflows. Use when a task mentions ELO, Indexserver, IXServicePortIF, Sord, EditInfo, checkinSord, ELO repository, or ELO workflow.
---

# ELO Indexserver REST API

Use this skill to build clients for an ELO repository through the Indexserver
REST API (`http://server:port/ix-<repository>/rest`). Not in scope: SOAP or
legacy APIs, ELO UI development, direct database access.

## Core rules

1. Every operation is `POST <rest>/<Interface>/<function>` with one JSON object
   whose members are the parameter names, e.g. `IXServicePortIF/createSord`
   with `{ "parentId": "1", "maskId": "...", "editInfoZ": ... }`. `ci` is optional.
2. The response is `{ "result": ... }` or `{ "exception": "...[ELOIX:code]..." }`.
   Always check `exception`.
3. Authenticate first, then load constants once:
   `CONST = await xhr.restcall('IXServicePortIF/getConstants')`. Use `CONST.*`
   for selectors, lock modes, mask GUIDs, and error codes. Never hard-code
   numeric constants.
4. Create objects in two steps: `createSord`/`createDoc` returns an `EditInfo`
   (use `editInfo.sord`), then `checkinSord`/`checkinDocEnd` persists it.
5. Pass IDs as strings. IDs accept numeric IDs, GUIDs, `ARCPATH:` paths, and for
   masks also names.
6. Close every search with `findClose` and release every lock in `finally`.
7. Use the smallest selector that contains the needed members
   (`CONST.SORD.mbMin` for lists, `mbAll` to write).
8. Never write real credentials, tickets, or session IDs into code or logs.

## Workflow for a task

1. Pick the matching reference below and the example it names.
2. Copy the example pattern from `examples/rest/javascript/`; it uses the
   `xhr` helper from `rest-call.js` and `config` from `config.js`.
3. Verify every operation name, parameter name, and type in
   `api/v25.0.1.5/generated/operations.md` and `schemas.md` (search for
   ``## `TypeName` `` or `` `/IXServicePortIF/function` ``). Do not invent
   parameters.
4. Adapt to the target environment (Node.js or browser) and Indexserver version.

## References

| Task | Reference | Examples |
| --- | --- | --- |
| Login, sessions, Bearer/Basic/cookie, constants | [authentication.md](references/authentication.md) | `login.js`, `rest-call.js`, `config.js` |
| Folders, documents, upload/download, references, move, map data | [documents.md](references/documents.md) | `insert-folder.js`, `insert-document.js`, `insert-doc-att.js`, `insert-path.js`, `create-reference.js`, `move-sord.js`, `write-map.js` |
| Gen1 masks and `objKeys`, Gen2 aspects | [metadata.md](references/metadata.md) | `metadata-gen1.js`, `metadata-gen2.js` |
| Find children/descendants, full text, index, aspects | [search.md](references/search.md) | `find-loop.js`, `find-children.js`, `find-descendants.js`, `find-fulltext.js`, `find-metadata.js`, `find-aspects.js` |
| Start workflows, find and forward tasks | [workflows.md](references/workflows.md) | `workflow.js` |

Other: `invoke-rf.js` calls a registered function
(`executeRegisteredFunctionString` with a JSON string parameter).

## Request helper

```javascript
var result = await xhr.restcall('IXServicePortIF/checkoutSord', {
	objId: String(objId),
	editInfoZ: CONST.EDIT_INFO.mbSord,
	lockZ: CONST.LOCK.NO
});
// multipart/form-data with files referenced as files[0], files[1], ...
var doc = await xhr.restcallWithStreams('IXServicePortIF/checkinDocEnd', params, files);
```

## Error codes

Parse `[ELOIX:(\d+)]` from the exception text and compare with
`CONST.IXEXCEPTION`: `INVALID_PARAM`, `INVALID_SESSION` (re-login),
`NOT_FOUND`, `LOCKED`, `ALREADY_EXISTS`, `ACCESS_DENIED`.

## Further knowledge

Detailed explanations live in the repository's `knowledge/` directory:
concepts (Indexserver, Sord, metadata generations, permissions), guides,
patterns (pagination, error handling, resource cleanup), and
`knowledge/troubleshooting/common-errors.md`.
