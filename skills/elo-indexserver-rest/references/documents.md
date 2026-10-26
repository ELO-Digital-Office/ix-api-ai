# Folders and Documents

Examples in `examples/rest/javascript/`: `insert-folder.js`, `insert-path.js`,
`insert-document.js`, `insert-doc-att.js`, `create-reference.js`,
`move-sord.js`, `write-map.js`.
Details: `knowledge/concepts/sord.md`, `knowledge/guides/folders.md`,
`knowledge/guides/documents.md`.

## Create a folder

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
	parentId: String(parentId),
	maskId: CONST.DOC_MASK.GUID_FOLDER,
	editInfoZ: CONST.EDIT_INFO.mbSord
});
editInfo.sord.name = 'Project A';
var objId = await xhr.restcall('IXServicePortIF/checkinSord', {
	sord: editInfo.sord, sordZ: CONST.SORD.mbAll, unlockZ: CONST.LOCK.NO
});
```

Folder path in one call: `checkinSordPath` with `parentId`, `sords`
(`[{ name: 'A' }, { name: 'B' }]`), `sordZ`; returns the IDs of all elements.

## Create a document with a file

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createDoc', {
	parentId: String(parentId), maskId: '', editInfoZ: CONST.EDIT_INFO.mbSord
});
var sord = editInfo.sord;
sord.name = 'Contract';
var version = {
	version: '1.0', comment: 'Uploaded via REST', contentType: file.type,
	fileData: { stream: { streamId: 'files[0]' } }
};
var doc = await xhr.restcallWithStreams('IXServicePortIF/checkinDocEnd', {
	sord: sord, sordZ: CONST.SORD.mbAll,
	document: { docs: [version] },          // attachments: atts: [...]
	unlockZ: CONST.LOCK.NO
}, [file]);
var objId = doc.objId;
```

Upload options:

1. `multipart/form-data` (preferred): parameters in form field `data`, files in
   field `files`; reference them as `files[0]`, `files[1]`, ...
2. `POST BUtility/upload` with raw bytes -> `{ streamId }`; use that ID in the
   check-in.
3. Small BLOBs only: Base64 in `FileData.data` (UTF-8 encode strings first).

## Read and download

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
	objId: String(objId), editInfoZ: CONST.EDIT_INFO.mbSordContentStream
});
var blob = await xhr.download(editInfo.sord.docVersion.fileData.stream.url);
```

- Stream URLs are relative to `/rest/`, valid for one minute, single use.
- Download errors are reported via HTTP status only.
- `checkoutDoc` returns versions and attachments.

## Update metadata

`checkoutSord` with `lockZ: CONST.LOCK.YES` -> modify -> `checkinSord` with
`unlockZ: CONST.LOCK.YES`. On failure release with
`sordZ: CONST.SORD.mbOnlyUnlock, unlockZ: CONST.LOCK.YES`.

## References and move

| Call | Effect |
| --- | --- |
| `refSord({ oldParentId: '', newParentId, objId, manSortIdx: -1 })` | Create reference |
| `refSord({ oldParentId: currentParent, newParentId, objId, manSortIdx: -1 })` | Move (main parent moves the original, reference parent moves the reference) |
| `refSord` with `oldParentId == newParentId` | Reorder in a `MANUAL` sorted folder |
| `deleteSord({ parentId: refParent, objId, unlockZ: CONST.LOCK.NO })` | Delete only the reference |
| `deleteSord({ parentId: '', objId, ... })` | Delete the object (logical) |
| `copySord` with `CONST.COPY_SORD.REFERENCE` / `MOVE` | Alternative |

`Sord.parentId` is the single main parent; `refPaths[0]` is the original path,
further entries are references.

## Delete

`deleteSord` deletes logically; a second call with
`deleteOptions: { deleteFinally: true }` purges. `xhr.purgeSord(objId)` does
both. Only purge objects your code created.

## Map data

`checkinMap` / `checkoutMap` with `domainName: CONST.MAP_DOMAIN.DOMAIN_SORD`,
`id: objId`. Short values in `value` (max `CONST.MAP_DATA.lnValue`), larger in
`blobValue` (max `CONST.FILE_DATA.MAX_BLOB_LENGTH`).
