# Documents

Examples:
[insert-document.js](../../examples/rest/javascript/insert-document.js),
[insert-doc-att.js](../../examples/rest/javascript/insert-doc-att.js),
[write-map.js](../../examples/rest/javascript/write-map.js).

## Create a document with content

1. `createDoc` initializes a document `Sord` below a parent with a mask.
2. Set metadata on `editInfo.sord`.
3. Describe the version in a `DocVersion` and reference the uploaded stream.
4. `checkinDocEnd` stores the Sord and the file in one request.

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createDoc', {
	parentId: parentId,
	maskId: '',                         // default document mask
	editInfoZ: CONST.EDIT_INFO.mbSord
});

var sord = editInfo.sord;
sord.name = 'Contract';
sord.objKeys.push({
	id: CONST.DOC_MASK_LINE.ID_FILENAME,
	name: CONST.DOC_MASK_LINE.NAME_FILENAME,
	data: [file.name]
});

var version = {
	version: '1.0',
	comment: 'Uploaded via REST',
	contentType: file.type,
	fileData: { stream: { streamId: 'files[0]' } }
};

var doc = await xhr.restcallWithStreams('IXServicePortIF/checkinDocEnd', {
	sord: sord,
	sordZ: CONST.SORD.mbAll,
	document: { docs: [version] },
	unlockZ: CONST.LOCK.NO
}, [file]);

var objId = doc.objId;
```

## Uploading file content

There are three ways to transfer file content.

### multipart/form-data (recommended)

Send the parameter object in a form field named `data` and the files in further
fields. Reference each file by field name and index. With two files in field
`files`, the version uses `files[0]` and the attachment `files[1]`:

```json
{
  "sord": { "...": "..." },
  "sordZ": { "...": "..." },
  "document": {
    "docs": [{ "version": "1.0", "contentType": "text/plain",
               "fileData": { "stream": { "streamId": "files[0]" } } }],
    "atts": [{ "version": "1.0", "contentType": "text/plain",
               "fileData": { "stream": { "streamId": "files[1]" } } }]
  },
  "unlockZ": { "...": "..." }
}
```

```http
POST /ix-dev/rest/IXServicePortIF/checkinDocEnd HTTP/1.1
Content-Type: multipart/form-data; boundary=----X

------X
Content-Disposition: form-data; name="data"

{"sord":{...},"document":{...}}
------X
Content-Disposition: form-data; name="files"; filename="contract.txt"
Content-Type: text/plain

... first file ...
------X
Content-Disposition: form-data; name="files"; filename="readme.txt"
Content-Type: text/plain

... second file ...
------X--
```

`xhr.restcallWithStreams(path, params, files)` builds this request.

### Temporary upload

If multipart is not possible, upload the file first to
`POST /BUtility/upload` (body: raw bytes). The response contains a stream ID:

```json
{ "result": { "streamId": "6596943602124994030" } }
```

Use it in the following check-in: `"fileData": { "stream": { "streamId": "6596943602124994030" } }`.
`xhr.upload(file, contentType)` performs this call.

### Base64 in the JSON body

Small BLOBs can be sent Base64 encoded in `FileData.data`, e.g. for map values:

```json
{ "key": "bufferValue", "blobValue": { "contentType": "text/plain", "data": "U23DuHJyZWJyw7hkIGZvciAw4oKs" } }
```

Encode strings as UTF-8 before Base64; see
[base64.js](../../examples/rest/javascript/base64.js). Results never contain
Base64 data; read BLOBs with a download request.

## Attachments

Pass attachment versions in `document.atts` next to `document.docs`. Read them
with `checkoutDoc`. See [insert-doc-att.js](../../examples/rest/javascript/insert-doc-att.js).

## Download

`FileData.stream.url` in a result contains a URL relative to the REST endpoint:

```json
"docVersion": {
  "contentType": "text/plain",
  "fileData": { "stream": { "url": "getstream?serverid=0&messageid=0&streamid=3625747495282349347" } },
  "url": "http://localhost:8084/ix-dev/ix?cmd=readdoc1&id=233&objid=429..."
}
```

```http
GET /ix-dev/rest/getstream?serverid=0&messageid=0&streamid=3625747495282349347
```

- Stream URLs are valid for one minute by default and can be downloaded once.
- `DocVersion.url` stays valid for 10 minutes (Indexserver option
  `documentUrlLifetimeSeconds`) as long as the session is valid.
- Request a stream with `editInfoZ: CONST.EDIT_INFO.mbSordContentStream`.
- A failed download is reported by the HTTP status code, not by an
  `exception` member.

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
	objId: objId,
	editInfoZ: CONST.EDIT_INFO.mbSordContentStream
});
var blob = await xhr.download(editInfo.sord.docVersion.fileData.stream.url);
```

## Map data

`checkinMap` and `checkoutMap` store key-value data at a Sord
(`domainName: CONST.MAP_DOMAIN.DOMAIN_SORD`). Values up to
`CONST.MAP_DATA.lnValue` go into `MapValue.value`; larger values into
`blobValue` (max. `CONST.FILE_DATA.MAX_BLOB_LENGTH`), either Base64 or as stream.
See [write-map.js](../../examples/rest/javascript/write-map.js).

## Related

- [Sord](../concepts/sord.md)
- [Folders](folders.md)
- [Resource cleanup](../patterns/resource-cleanup.md)
