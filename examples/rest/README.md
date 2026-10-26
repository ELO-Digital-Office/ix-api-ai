# REST API Examples

JavaScript examples for the ELO Indexserver REST API. They run in the browser
(with HTML pages that provide the referenced input elements) or, after
adaptation, in Node.js 18+ (`fetch`/`FormData` instead of `XMLHttpRequest`).

## Conventions

- `config.js` defines the connection (`ixUrl`, `authenticationMethod`,
  `clientInfo`, `parentId`). The credentials are demo placeholders; load real
  values from the environment.
- `rest-call.js` defines the global `xhr` helper: `restcall(path, params)`,
  `restcallWithStreams(path, params, files)`, `upload(file)`, `download(url)`,
  `purgeSord(objId)`.
- `login.js` authenticates and loads the constants into the global `CONST`.
  All other examples assume this has happened.
- `find-loop.js` defines `findSords(findInfo, sordZ)`, used by the search
  examples.

## Catalog

| File | Topic | Main operations | Guide |
| --- | --- | --- | --- |
| [config.js](javascript/config.js) | Configuration | | [Authentication](../../knowledge/guides/authentication.md) |
| [login.js](javascript/login.js) | API Key, Bearer, Basic login; constants | `login`, `getConstants` | [Authentication](../../knowledge/guides/authentication.md) |
| [rest-call.js](javascript/rest-call.js) | Request helper, upload, download, purge | `BUtility/upload`, `deleteSord` | [Indexserver](../../knowledge/concepts/indexserver.md) |
| [base64.js](javascript/base64.js) | UTF-8 safe Base64 | | [Documents](../../knowledge/guides/documents.md) |
| [insert-folder.js](javascript/insert-folder.js) | Create a folder | `createSord`, `checkinSord`, `checkoutSord` | [Folders](../../knowledge/guides/folders.md) |
| [insert-path.js](javascript/insert-path.js) | Create a folder path | `checkinSordPath` | [Folders](../../knowledge/guides/folders.md) |
| [insert-document.js](javascript/insert-document.js) | Upload and download a document | `createDoc`, `checkinDocEnd` | [Documents](../../knowledge/guides/documents.md) |
| [insert-doc-att.js](javascript/insert-doc-att.js) | Document with attachment | `checkinDocEnd`, `checkoutDoc` | [Documents](../../knowledge/guides/documents.md) |
| [write-map.js](javascript/write-map.js) | Map values, BLOBs, streams | `checkinMap`, `checkoutMap` | [Documents](../../knowledge/guides/documents.md) |
| [metadata-gen1.js](javascript/metadata-gen1.js) | Gen1 mask and `objKeys` | `createDocMask`, `checkinDocMask` | [Metadata Gen1](../../knowledge/guides/metadata-gen1.md) |
| [metadata-gen2.js](javascript/metadata-gen2.js) | Gen2 aspects and aspect mask | `createAspect`, `createAspectAssoc`, `createAspectMask` | [Metadata Gen2](../../knowledge/guides/metadata-gen2.md) |
| [find-loop.js](javascript/find-loop.js) | Paged search helper | `findFirstSords`, `findNextSords`, `findClose` | [Pagination](../../knowledge/patterns/pagination.md) |
| [find-children.js](javascript/find-children.js) | Direct children | `findChildren` | [Search](../../knowledge/guides/search.md) |
| [find-descendants.js](javascript/find-descendants.js) | All descendants | `findChildren.endLevel` | [Search](../../knowledge/guides/search.md) |
| [find-fulltext.js](javascript/find-fulltext.js) | Full text and index field search | `findByESearch` | [Search](../../knowledge/guides/search.md) |
| [find-metadata.js](javascript/find-metadata.js) | Gen1 index search | `findByIndex` | [Search](../../knowledge/guides/search.md) |
| [find-aspects.js](javascript/find-aspects.js) | Gen2 aspect search | `findByIndex.aspects` | [Search](../../knowledge/guides/search.md) |
| [create-reference.js](javascript/create-reference.js) | Create and delete a reference | `refSord`, `deleteSord` | [Folders](../../knowledge/guides/folders.md) |
| [move-sord.js](javascript/move-sord.js) | Move an object | `refSord` | [Folders](../../knowledge/guides/folders.md) |
| [workflow.js](javascript/workflow.js) | Start workflows, find and forward tasks | `startWorkFlow`, `startAdHocWorkFlow`, `beginEditWorkFlowNode`, `endEditWorkFlowNode` | [Workflows](../../knowledge/guides/workflows.md) |
| [invoke-rf.js](javascript/invoke-rf.js) | Call a registered function | `executeRegisteredFunctionString` | |

## Running

### Browser

1. Load `config.js`, `rest-call.js`, `login.js`, and the example in an HTML page
   served from the Indexserver origin or with CORS enabled.
2. Adjust `config.ixUrl` and the credentials.
3. Call `login(user, password, method)`, then the example function.
4. Check the browser console for results.

### Node.js

Replace `XMLHttpRequest` in `rest-call.js` with `fetch` and `FormData`/`Blob`,
remove DOM access (`document.getElementById`), and call the example functions
from an async main function.

## Validation

```bash
scripts/validate-examples.sh
```

checks the syntax of all examples with `node --check`.
