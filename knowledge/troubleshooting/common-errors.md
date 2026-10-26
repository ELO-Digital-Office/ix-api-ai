# Common Errors

| Symptom | Cause | Fix |
| --- | --- | --- |
| `[ELOIX:2001]` (`INVALID_SESSION`) | Session expired (10 min idle), cookie or `ELO-Approved` header missing, wrong Bearer ticket | Log in again; send `JSESSIONID` cookie and `ELO-Approved` header together; for Bearer, log in with `ci.ticket = ''` |
| Authentication fails on the first call | Wrong credentials, wrong authentication method, or missing `Authorization` header | Check user, password, and `config.authenticationMethod` |
| HTTP 4xx/5xx without JSON body | Request could not be parsed: wrong path, invalid JSON, wrong content type | Check `/<Interface>/<function>` path and JSON syntax; send UTF-8 |
| `[ELOIX:2000]` (`INVALID_PARAM`) | Wrong parameter name or type, number instead of string ID, invalid selector | Compare with [operations.md](../../api/v25.0.1.5/generated/operations.md); pass IDs as strings |
| Parameter has no effect | Misspelled member name in the request object | Member names must match the API exactly (case-sensitive) |
| `[ELOIX:5023]` (`NOT_FOUND`) | Unknown ID, GUID, mask name, aspect, or field | Check identifiers; masks are looked up by name, ID, or GUID |
| `[ELOIX:5022]` (`LOCKED`) | Object or workflow locked by another user or a previous failed call | Release locks in `finally`; administrators can use `CONST.LOCK.FORCE` |
| `ACCESS_DENIED` | Missing user right or ACL entry | See [Permissions](../concepts/permissions.md) |
| `[ELOIX:5005]` (`ALREADY_EXISTS`) | Unique name (mask, aspect) already used | Use a unique name or read the existing object |
| `TypeError: Cannot read properties of undefined (reading 'mbAll')` | `CONST` not loaded | Call `getConstants` after login and store the result in `CONST` |
| `editInfo.name` is undefined | `createSord`/`createDoc`/`checkoutSord` return `EditInfo`, not `Sord` | Use `editInfo.sord` |
| Gen1 values not stored | Values assigned as string instead of array, or `sordZ` without `mbObjKeys` | `objKeys[i].data = ['value']`; use `CONST.SORD.mbAll` |
| Gen2 values not stored | `IndexValue.type` missing or wrong value property | Set `type` from `CONST.INDEXVALUE` and the matching `*Value` |
| Aspect search fails with `INVALID_PARAM` | Malformed key or typed condition | Key = three components joined by two `\u00b6`; fixed-point operands as strings |
| ESearch filter ignored or fails | `queryOperator.operatorType` missing | Set `operatorType: 'AND'`, `'OR'`, or `'NOT'` |
| Search returns at most 10000 hits | `findOptions.totalCount` default | Check `breakTotalCount`; narrow the search or raise `totalCount` |
| Server resources grow, searches slow | Searches not closed | Call `findClose` in `finally` |
| Uploaded file missing in document | `streamId` does not match the form field (`files[0]`) or file not appended | Use the same field name and index in `FormData` and `streamId` |
| Download fails with an HTTP error status | Stream URL expired (1 min) or already used | Read the Sord again and download immediately |
| CORS error in browser | `Access-Control-Allow-Origin` not configured | Add it to Indexserver `config.xml` |
| Workflow task not forwarded, workflow stays locked | `endEditWorkFlowNode` not called after an error | Call it with `bCancel: true` in `finally` |
| `endEditWorkFlowNode` fails for decision | Several successors passed for a node with `FLAG_ONE_SUCCESSOR` | Pass exactly one successor ID |
| Group task cannot be forwarded | Task not taken | Call `takeWorkFlowNode` first |

See also [Error handling](../patterns/error-handling.md).
