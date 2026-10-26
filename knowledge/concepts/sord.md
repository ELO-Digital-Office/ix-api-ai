# Sord: Repository Entries

A `Sord` holds the indexing information (metadata) of a repository entry. Folders
and documents are both `Sord` objects. A document additionally has document
versions and optionally attachment versions (`DocVersion`).

## Important members

| Member | Meaning |
| --- | --- |
| `id`, `guid` | Numeric ID and GUID. `id` is `-1` for objects not yet checked in. |
| `name` | Short description shown in clients. |
| `type` | Folder or document type; see below. |
| `parentId` | Main parent (physical location). Read-only; change it with `refSord`. |
| `refPaths` | `refPaths[0]` is the path to the original, further entries are references. |
| `parentIds` | GUIDs of all folders that contain the object, main parent first. |
| `mask`, `maskName` | Metadata mask (keywording form). |
| `objKeys` | Generation 1 index values. |
| `aspects` | Generation 2 aspect values. |
| `acl`, `aclItems`, `access` | Access control; see [Permissions](permissions.md). |
| `XDateIso`, `IDateIso` | User-defined (external) and internal date, ISO encoded. |
| `docVersion`, `attVersion` | Current document and attachment work version. |
| `details` | Flags such as `folderMask`, `sortOrder`, `fulltext`. |
| `lockId`, `lockIdSord`, `lockIdDoc` | Users who hold locks. Read-only. |

All members are listed in [schemas.md](../../api/v25.0.1.5/generated/schemas.md)
under `Sord`.

## Folders and documents

`Sord.type` distinguishes folders and documents. Types between 1 and
`SordC.LBT_DOCUMENT - 1` are folders, types from `LBT_DOCUMENT` to
`LBT_DOCUMENT_MAX` are documents. The repository root has ID `1` and type
`LBT_ARCHIVE`.

## Life cycle: create, check in, check out

The Indexserver uses a two-step pattern for creating and updating objects.

1. **Create** an in-memory object with defaults derived from the parent and mask:
   `createSord` for folders, `createDoc` for documents. Both return an
   `EditInfo`; the new object is in `editInfo.sord`. Nothing is stored yet.
2. **Modify** the returned object (`name`, `objKeys`, `aspects`, `aclItems`, ...).
3. **Check in** to persist: `checkinSord` for metadata, `checkinDocEnd` for a
   document with file content. `checkinSord` returns the new object ID.
4. **Check out** to read: `checkoutSord` with an `EditInfoZ` selector, or
   `checkoutDoc` for documents including versions.

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
	parentId: '1',
	maskId: CONST.DOC_MASK.GUID_FOLDER,
	editInfoZ: CONST.EDIT_INFO.mbSord
});
editInfo.sord.name = 'Project A';
var objId = await xhr.restcall('IXServicePortIF/checkinSord', {
	sord: editInfo.sord,
	sordZ: CONST.SORD.mbAll,
	unlockZ: CONST.LOCK.NO
});
```

## Element selectors

Selectors (`SordZ`, `EditInfoZ`, ...) define which members are read or written.

- When **reading**, select only what you need: `CONST.SORD.mbMin` for lists,
  `mbLean` with index values, `mbAll` for complete objects.
- When **writing** with `checkinSord`, only the selected members are stored.
  `CONST.SORD.mbAll` writes all writable members.

## Locks

`checkoutSord` with `lockZ: CONST.LOCK.YES` locks the object for the current
user. Release the lock with `unlockZ: CONST.LOCK.YES` in the subsequent
check-in. To release it without storing changes, call `checkinSord` with
`sordZ: CONST.SORD.mbOnlyUnlock` and `unlockZ: CONST.LOCK.YES`. A lock held by
another user causes `[ELOIX:5022]` (`LOCKED`). See
[Resource cleanup](../patterns/resource-cleanup.md).

## References

An object has exactly one main parent but can be visible in further folders
through logical references. References are created and moved with `refSord`
and removed with `deleteSord`. See [Folders](../guides/folders.md).

## Deleting

`deleteSord` marks an object as deleted (logical delete). Calling it again with
`deleteOptions.deleteFinally: true` purges an already deleted object. The
`purgeSord` helper in [rest-call.js](../../examples/rest/javascript/rest-call.js)
performs both steps.
