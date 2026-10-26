# Metadata Generations

ELO stores metadata (index values) of a `Sord` according to its mask
(`DocMask`). Two generations exist. The mask's `dataOrganisation` determines
which one an object uses.

| | Generation 1 | Generation 2 |
| --- | --- | --- |
| Mask | `DocMask` with `lines` (`DocMaskLine`) | Aspect mask: `DocMask` with aspect associations |
| Values on the Sord | `Sord.objKeys` (`ObjKey[]`) | `Sord.aspects` (map of association name to aspect objects) |
| Value type | Strings in `ObjKey.data` (array) | Typed `IndexValue` (`stringValue`, `intValue`, `doubleValue`, ...) |
| Repeating groups | Not supported (multi-value lines only) | Associations with cardinality `OPTIONAL_MANY` |
| Line type constants | `CONST.DOC_MASK_LINE.TYPE_*` | `CONST.ASPECT_LINE.TYPE_*` (aspect lines) and `CONST.INDEXVALUE.TYPE_*` (values) |
| Create mask | `createDocMask`, `checkinDocMask` | `createAspect`/`checkinAspect`, `createAspectAssoc`, `createAspectMask`, `checkinDocMask` |
| Search | `findByIndex.objKeys`, `findByESearch` | `findByIndex.aspects` |
| Example | [metadata-gen1.js](../../examples/rest/javascript/metadata-gen1.js) | [metadata-gen2.js](../../examples/rest/javascript/metadata-gen2.js) |

## Generation 1

`Sord.objKeys` is an array of `ObjKey` objects in the order of the mask lines.
Each `ObjKey` has an `id`, a `name` (the line key), and a `data` array of strings.
After `createSord` or `createDoc` with a Gen1 mask, `objKeys` already contains
one entry per mask line. Assign values with `sord.objKeys[i].data = ['value']`.

Some lines exist on every mask, e.g. the original file name
(`CONST.DOC_MASK_LINE.ID_FILENAME`, `NAME_FILENAME`).

## Generation 2

An *aspect* defines a set of typed fields (aspect lines). An aspect mask binds
aspects through *associations*; each association has a name and a cardinality
(`MANDATORY`, `OPTIONAL_MANY`, ...). On the Sord, `sord.aspects[associationName]`
is an array of aspect objects keyed by field key:

```javascript
sord.aspects.RECHNUNGSPOSITION[1].PREIS = {
	type: CONST.INDEXVALUE.TYPE_DOUBLE,
	doubleValue: 11.99
};
```

## Choosing a generation

- Use the generation of the existing mask. Do not mix `objKeys` and `aspects`
  on one object.
- Prefer Gen2 for new models that need typed values or repeating groups and
  when the target Indexserver supports aspects.
- Creating masks and aspects requires administrative rights; applications
  usually only fill values of existing masks.

## Guides

- [Metadata generation 1](../guides/metadata-gen1.md)
- [Metadata generation 2](../guides/metadata-gen2.md)
- [Search](../guides/search.md)
