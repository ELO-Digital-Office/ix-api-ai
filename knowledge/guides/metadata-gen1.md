# Metadata Generation 1

Example: [metadata-gen1.js](../../examples/rest/javascript/metadata-gen1.js).
Background: [Metadata generations](../concepts/metadata-generations.md).

## Fill index values of an existing mask

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
	parentId: config.parentId,
	maskId: maskNameOrId,
	editInfoZ: CONST.EDIT_INFO.mbSord
});

var sord = editInfo.sord;
sord.name = 'Invoice 4711';
sord.objKeys[0].data = ['value of line 1'];
sord.objKeys[1].data = ['value of line 2'];

var objId = await xhr.restcall('IXServicePortIF/checkinSord', {
	sord: sord,
	sordZ: CONST.SORD.mbAll,
	unlockZ: CONST.LOCK.NO
});
```

- `objKeys` follows the order of the mask lines. Look up entries by `name`
  (line key) instead of index when the mask may change:
  `sord.objKeys.find(k => k.name === 'INVOICE_NO').data = ['4711']`.
- `ObjKey.data` is always an array of strings, also for numbers and dates.
- To update an existing object, `checkoutSord` with `lockZ: CONST.LOCK.YES`,
  change the values, and check in with `unlockZ: CONST.LOCK.YES`.

## Read a mask

```javascript
var docMask = await xhr.restcall('IXServicePortIF/checkoutDocMask', {
	maskId: maskName,
	docMaskZ: CONST.DOC_MASK.mbAll,
	lockZ: CONST.LOCK.NO
});
```

`checkoutDocMask` throws `NOT_FOUND` if the mask does not exist.

## Create a mask (administrative right `FLAG_EDITMASK`)

```javascript
var docMask = await xhr.restcall('IXServicePortIF/createDocMask', {
	maskId: CONST.DOC_MASK.GUID_FOLDER    // template
});
docMask.name = maskName;                  // must be unique
docMask.details.folderMask = true;
docMask.details.documentMask = true;
docMask.lines = [
	{ name: 'Line 1', key: 'KEY1', type: CONST.DOC_MASK_LINE.TYPE_TEXT },
	{ name: 'Line 2', key: 'KEY2', type: CONST.DOC_MASK_LINE.TYPE_TEXT }
];

var maskId = await xhr.restcall('IXServicePortIF/checkinDocMask', {
	docMask: docMask,
	docMaskZ: CONST.DOC_MASK.mbAll,
	unlockZ: CONST.LOCK.NO
});
```

## Search

Use `findByIndex` with `maskId` and `objKeys`, or `findByESearch` with index
field filters. See [Search](search.md) and
[find-metadata.js](../../examples/rest/javascript/find-metadata.js).
