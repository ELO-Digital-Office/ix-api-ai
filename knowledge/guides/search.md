# Search

Examples:
[find-loop.js](../../examples/rest/javascript/find-loop.js),
[find-children.js](../../examples/rest/javascript/find-children.js),
[find-descendants.js](../../examples/rest/javascript/find-descendants.js),
[find-fulltext.js](../../examples/rest/javascript/find-fulltext.js),
[find-metadata.js](../../examples/rest/javascript/find-metadata.js),
[find-aspects.js](../../examples/rest/javascript/find-aspects.js).

All Sord searches use `findFirstSords`, `findNextSords`, and `findClose` with a
`FindInfo` object. The `findSords(findInfo, sordZ)` helper in `find-loop.js`
wraps this sequence and returns all matches; see
[Pagination](../patterns/pagination.md). Select the smallest `sordZ` that
contains the members you need.

| Goal | `FindInfo` member |
| --- | --- |
| Direct children of a folder | `findChildren.parentId` |
| All descendants | `findChildren.parentId` + `endLevel: -1` |
| Title, full text, index fields | `findByESearch` |
| Name, mask, Gen1 index values | `findByIndex` (`name`, `maskId`, `objKeys`) |
| Gen2 aspect values | `findByIndex.aspects` |
| Restrict to IDs/GUIDs, sort, limits | `findOptions` |

## Direct children

```javascript
var children = await findSords({ findChildren: { parentId: '1' } }, CONST.SORD.mbMin);
```

## All descendants

```javascript
var descendants = await findSords({
	findChildren: { parentId: '1', endLevel: -1 }
}, CONST.SORD.mbMin);
```

## Full text, title, and index fields (ESearch)

Build `searchIn` from `CONST.E_SEARCH_PARAMS` values; do not hard-code numbers.
A comma-separated list of the constant names is also accepted.

```javascript
var matches = await findSords({
	findByESearch: {
		searchOptions: {},
		searchParams: {
			query: 'project plan',
			searchIn: CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_TITLE +
				CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT +
				CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_INDEX_FIELDS
		}
	}
}, CONST.SORD.mbMin);
```

### With index field filters

Add `queryOperator` with `operatorType` (`AND`, `OR`, or `NOT`) and a
`queryObjectList`. `operatorType` is not declared in the API; it is required for
REST so the server can choose the operator class.

```javascript
var findInfo = {
	findByESearch: {
		searchOptions: {},
		searchParams: {
			query: 'invoice',
			searchIn: CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT,
			queryOperator: {
				operatorType: 'AND',
				queryObjectList: [{
					searchField: 'INDEXFIELD',
					indexFieldKey: 'ELOOUTL1',
					fieldType: 'tokenized',
					value: { value: 'sender@example.com' }
				}]
			}
		}
	}
};
```

## Generation 1 index values

```javascript
var sords = await findSords({
	findByIndex: {
		name: 'Invoice*',
		maskId: 'Invoice',
		objKeys: [{ name: 'INVOICE_NO', data: ['4711'] }]
	}
}, CONST.SORD.mbMin);
```

## Generation 2 aspect search

`findByIndex.aspects` maps search keys to `FindByAspectValue` objects. After
login and loading `CONST`:

```javascript
var queries = createAspectSearchExamples(maskId);
var matches = await findSordsByAspects(queries.customerAndPosition);
```

The example queries are read-only and use the mask created by
[metadata-gen2.js](../../examples/rest/javascript/metadata-gen2.js).

### Keys

A key has three components separated by two pilcrows (`\u00b6`): association
name, aspect name/ID/GUID, and aspect line key. Empty components are wildcards.

```javascript
var fieldKey = ['RECHNUNGSPOSITION', '', 'PREIS'].join('\u00b6');
var aspects = {
	[fieldKey]: { condition: { doubleValue: { operator: 'EQUALS', operand: 11.99 } } }
};
```

- Association + field: only that association. Aspect + field: all its
  associations. Field only: matching field keys across aspects. All empty:
  every aspect field, which can cause expensive full table scans.

### Conditions

- `condition.intValue`, `doubleValue`, `stringValue`, or
  `fixedPointNumberValue`, each with `operator` and `operand`. Fixed-point
  operands are decimal strings.
- Plural properties (`doubleValues`, ...) hold several comparisons that must all
  hold, e.g. a range.
- `disjunctConditions` holds alternative `IndexSearchValue` objects (OR).
- Operators: `EQUALS`, `GREATER`, `GREATER_THAN`, `LOWER`, `LOWER_THAN`, `LIKE`
  (with `*`), `ISNULL`. `EQUALS` with a null operand does not find null values.

### Combination and scope

- `findOptions.searchMode` (`CONST.SEARCH_MODE.AND` / `OR`) combines the map
  entries; it does not change the grouping inside one `FindByAspectValue`.
- Under AND, conditions on different fields of the same repeated association
  must match the same aspect object.
- Other restrictions still apply under OR, e.g. a Sord name filter.
- Combine with `findByIndex.maskId` or `maskIds`; `includeChildMasks: true`
  adds inheriting masks.
- Further scope: `findChildren.parentId` (+ `endLevel: -1`),
  `findOptions.objIds`, `findByIndex.spaceGuids`.

### Sorting and errors

- `findByIndex.aspectSortOrder`: ordered `{ key, sortOrderSequence }` entries
  (`ASCENDING`, `DESCENDING`, `ASCENDING_NULLS_FIRST`, `DESCENDING_NULLS_LAST`).
  Takes precedence over `findOptions.sortOrder`.
- Unknown aspects, associations, or fields: `NOT_FOUND`. Incompatible typed
  alternatives or malformed fixed-point operands: `INVALID_PARAM`.

## Search options

| `findOptions` member | Default | Meaning |
| --- | --- | --- |
| `totalCount` | 10000 | Maximum rows fetched; `breakTotalCount` in the result signals truncation |
| `timeoutSeconds` | 300 | Maximum search time; `breakTimeout` signals interruption |
| `sortOrder` | none | `CONST.SORT_ORDER.*` |
| `objIds` | | Restrict to IDs or GUIDs |
| `searchMode` | | `CONST.SEARCH_MODE.AND` / `OR` for aspect searches |
