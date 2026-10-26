# Metadata Generation 2 (Aspects)

Example: [metadata-gen2.js](../../examples/rest/javascript/metadata-gen2.js).
Background: [Metadata generations](../concepts/metadata-generations.md).

After login, loading `CONST`, and setting `config.parentId`:

```javascript
var sord = await createSordWithMetadataGen2();
console.log(sord.id, sord.aspects.RECHNUNGSPOSITION[1].PREIS.doubleValue);
```

## Steps in the example

1. Create aspects with `createAspect` and `checkinAspect` (address with
   `NAME`, `PLZ`, `ORT`; invoice position with `POS`, `ARTIKELNUMMER`,
   `ARTIKELNAME`, `ANZAHL`, `PREIS`).
2. Create associations with `createAspectAssoc`: `KUNDENADRESSE`
   (`MANDATORY`) and `RECHNUNGSPOSITION` (`OPTIONAL_MANY`).
3. Create the mask with `createAspectMask` and store it with `checkinDocMask`.
4. `createSord` with the mask, fill `sord.aspects`, `checkinSord`.
5. Check out with `CONST.LOCK.YES`, change a price, check in with
   `unlockZ: CONST.LOCK.YES`, and verify the value `11.99`.

Creating aspects and masks requires administrative rights. The optional
`maskName` argument must be unique; the default uses a timestamp.

## Rules

- Use `Sord.aspects[associationName]`, an array of aspect objects keyed by
  field key, instead of `Sord.objKeys`.
- Pass cardinalities as strings. `MANDATORY` creates an initial aspect object;
  with defaults on the aspect lines, its values are initialized too.
  `OPTIONAL_MANY` requires adding the aspect objects explicitly.
- Set `IndexValue.type` from `CONST.INDEXVALUE` and fill the matching
  `stringValue`, `intValue`, or `doubleValue`. Aspect line types come from
  `CONST.ASPECT_LINE`, a different set of constants.
- REST `createSord` returns `EditInfo`; use its `sord` property.
- Pass IDs as strings (`String(aspectId)`).

```javascript
var address = sord.aspects.KUNDENADRESSE[0];
address.NAME.stringValue = 'Huber';

sord.aspects.RECHNUNGSPOSITION = [{
	POS:         { type: CONST.INDEXVALUE.TYPE_INT,    intValue: 1 },
	ARTIKELNAME: { type: CONST.INDEXVALUE.TYPE_STRING, stringValue: 'Hammer 500g' },
	ANZAHL:      { type: CONST.INDEXVALUE.TYPE_INT,    intValue: 10 },
	PREIS:       { type: CONST.INDEXVALUE.TYPE_DOUBLE, doubleValue: 9.99 }
}];
```

## Cleanup

The example leaves the Sord, mask, and aspects in the repository for
inspection, also when an error occurs. To remove demo data, delete in this
order:

1. the Sord,
2. the mask (and its associations),
3. the aspects, which must no longer be referenced by a mask.

## Search

See [Search](search.md#generation-2-aspect-search) and
[find-aspects.js](../../examples/rest/javascript/find-aspects.js).
