# Folders, References, and Moving Objects

Examples:
[insert-folder.js](../../examples/rest/javascript/insert-folder.js),
[insert-path.js](../../examples/rest/javascript/insert-path.js),
[create-reference.js](../../examples/rest/javascript/create-reference.js),
[move-sord.js](../../examples/rest/javascript/move-sord.js).

## Create a folder

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
	parentId: config.parentId,
	maskId: CONST.DOC_MASK.GUID_FOLDER,
	editInfoZ: CONST.EDIT_INFO.mbSord
});

var sord = editInfo.sord;
sord.name = 'Project A';
sord.XDateIso = new Date().toISOString();

var objId = await xhr.restcall('IXServicePortIF/checkinSord', {
	sord: sord,
	sordZ: CONST.SORD.mbAll
});
```

`createSord` returns an `EditInfo`; the Sord is in `editInfo.sord`.
`checkinSord` returns the new object ID.

## Create a folder path

`checkinSordPath` creates all missing folders of a path in one call and returns
the IDs of all path elements:

```javascript
var sords = 'Customers/Huber/2026'.split('/').map(name => ({ name: name }));
var ids = await xhr.restcall('IXServicePortIF/checkinSordPath', {
	parentId: '1',
	sords: sords,
	sordZ: CONST.SORD.mbAll
});
var lastId = ids[ids.length - 1];
```

## List folder contents

See [Search](search.md): `findChildren` for direct children, `endLevel: -1`
for all descendants.

## References and moving

A logical reference makes an existing object visible in another folder without
copying it. The object keeps exactly one main parent (`Sord.parentId`).
`Sord.refPaths[0]` is the path to the original; further entries are reference
paths. Read them with `CONST.EDIT_INFO.mbSord` or a `SordZ` containing
`mbRefPaths` / `mbParentIds`.

| Function | Parameters | Purpose |
| --- | --- | --- |
| `refSord` | `oldParentId`, `newParentId`, `objId`, `manSortIdx` | Create a reference (empty `oldParentId`) or move (`oldParentId` set) |
| `deleteSord` | `parentId`, `objId`, `unlockZ`, `deleteOptions` | Delete a reference (`parentId` = reference parent) or the object (`parentId` empty or main parent) |
| `copySord` | `newParentId`, `objId`, `copyInfo`, `copySordZ` | Alternative: `CONST.COPY_SORD.REFERENCE` creates a reference, `CONST.COPY_SORD.MOVE` moves |

### `refSord` semantics

- ID parameters accept object IDs, GUIDs, or `ARCPATH:` paths.
- **Create reference:** `oldParentId` is `null` or `''`. Creating an existing
  reference, or one in the main parent, does not throw. With
  `manSortIdx >= 0` an existing reference is moved to that position.
- **Move:** `oldParentId` is the current parent. The main parent moves the
  original (`Sord.parentId` changes); a reference parent moves only that
  reference. Moving a reference into the folder of the original deletes the
  reference without error.
- **Reorder:** `oldParentId == newParentId` changes only the manual sort
  position inside a folder whose `details.sortOrder` is `MANUAL`.
- **`manSortIdx`:** `-1` appends (fastest), `0` inserts at the beginning,
  `n > 0` inserts at position `n`; values beyond the end append.
- `oldParentId: '0'` moves an object without parent (chaos area) into
  `newParentId`.

```javascript
// Create a reference of objId in refFolderId
await xhr.restcall('IXServicePortIF/refSord', {
	oldParentId: '', newParentId: refFolderId, objId: objId, manSortIdx: -1
});

// Move objId from sourceId to targetId
await xhr.restcall('IXServicePortIF/refSord', {
	oldParentId: sourceId, newParentId: targetId, objId: objId, manSortIdx: -1
});

// Delete only the reference in refFolderId
await xhr.restcall('IXServicePortIF/deleteSord', {
	parentId: refFolderId, objId: objId, unlockZ: CONST.LOCK.NO
});
```

### Deleting references

- A reference is deleted if `parentId` is not the main parent of `objId`.
  References are not deleted physically and no longer appear in `refPaths`.
- `parentId` empty or equal to the main parent deletes the object itself
  (logically; `deleteOptions.deleteFinally: true` purges an already deleted
  object).
- A user may delete a reference in a folder they can edit even without rights
  on the referenced object; deleting the object fails with `ACCESS_DENIED`.
- Reference paths respect access rights: unreadable segments are shown as
  `--`; a reference on the top level has the path `¶`.
