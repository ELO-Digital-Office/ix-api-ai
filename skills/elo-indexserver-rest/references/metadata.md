# Metadata

Examples: `examples/rest/javascript/metadata-gen1.js`, `metadata-gen2.js`.
Details: `knowledge/concepts/metadata-generations.md`,
`knowledge/guides/metadata-gen1.md`, `knowledge/guides/metadata-gen2.md`.

Use the generation of the object's mask. Never mix `objKeys` and `aspects`.

## Generation 1: `Sord.objKeys`

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
	parentId: String(parentId), maskId: maskNameOrId, editInfoZ: CONST.EDIT_INFO.mbSord
});
var sord = editInfo.sord;
sord.objKeys.find(k => k.name === 'INVOICE_NO').data = ['4711'];   // always string[]
await xhr.restcall('IXServicePortIF/checkinSord', {
	sord: sord, sordZ: CONST.SORD.mbAll, unlockZ: CONST.LOCK.NO
});
```

- `objKeys` is pre-filled with one entry per mask line after `createSord`.
- File name line: `CONST.DOC_MASK_LINE.ID_FILENAME` / `NAME_FILENAME`.
- Read a mask: `checkoutDocMask({ maskId, docMaskZ: CONST.DOC_MASK.mbAll, lockZ: CONST.LOCK.NO })`;
  `NOT_FOUND` if missing.
- Create a mask (needs `FLAG_EDITMASK`): `createDocMask({ maskId: CONST.DOC_MASK.GUID_FOLDER })`,
  set unique `name`, `details.folderMask`/`documentMask`, `lines`
  (`{ name, key, type: CONST.DOC_MASK_LINE.TYPE_TEXT }`), then
  `checkinDocMask({ docMask, docMaskZ: CONST.DOC_MASK.mbAll, unlockZ: CONST.LOCK.NO })`.

## Generation 2: `Sord.aspects`

`sord.aspects[associationName]` is an array of aspect objects keyed by field
key. Each value is a typed `IndexValue`:

```javascript
sord.aspects.KUNDENADRESSE[0].NAME.stringValue = 'Huber';
sord.aspects.RECHNUNGSPOSITION = [{
	POS:   { type: CONST.INDEXVALUE.TYPE_INT,    intValue: 1 },
	PREIS: { type: CONST.INDEXVALUE.TYPE_DOUBLE, doubleValue: 9.99 }
}];
```

- Set `type` from `CONST.INDEXVALUE` and the matching `stringValue`,
  `intValue`, or `doubleValue`.
- Aspect line types are `CONST.ASPECT_LINE.TYPE_*`, a different constant set.
- Cardinality strings: `MANDATORY` creates one initial object (with line
  defaults); `OPTIONAL_MANY` requires adding objects explicitly.

### Create aspect model (administrative rights)

1. `createAspect({ name, lines: [{ key, displayName, type, defaultValue }] })`
   -> `checkinAspect({ aspect, aspectZ: CONST.ASPECT.mbAll, unlockZ: CONST.LOCK.NO })`
   -> `checkoutAspect({ aspectId: String(id), ... })`.
2. `createAspectAssoc({ name, aspectId: String(id), cardinality })`.
3. `createAspectMask({ name, aspectAssocs })`, set
   `details.folderMask`/`documentMask`, `checkinDocMask`.
4. `createSord` with the new mask ID, fill `aspects`, `checkinSord`.

Cleanup order: Sord -> mask (with associations) -> aspects.
