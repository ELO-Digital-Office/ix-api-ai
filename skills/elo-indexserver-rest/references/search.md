# Search

Examples in `examples/rest/javascript/`: `find-loop.js` (helper
`findSords(findInfo, sordZ)`), `find-children.js`, `find-descendants.js`,
`find-fulltext.js`, `find-metadata.js`, `find-aspects.js`.
Details: `knowledge/guides/search.md`, `knowledge/patterns/pagination.md`.

## Find loop (mandatory pattern)

```javascript
var r = await xhr.restcall('IXServicePortIF/findFirstSords', { findInfo, max: 100, sordZ });
var searchId = r.searchId, idx = 0, all = [];
try {
	while (true) {
		all.push(...r.sords);
		if (!r.moreResults) break;
		idx += r.sords.length;                                  // absolute index
		r = await xhr.restcall('IXServicePortIF/findNextSords', { searchId, idx, max: 100, sordZ });
	}
} finally {
	await xhr.restcall('IXServicePortIF/findClose', { searchId });
}
```

Check `breakTotalCount` (default limit `findOptions.totalCount` = 10000) and
`breakTimeout` (`findOptions.timeoutSeconds`, default 300).

## FindInfo variants

```javascript
// Direct children / all descendants
{ findChildren: { parentId: '1' } }
{ findChildren: { parentId: '1', endLevel: -1 } }

// Title, full text, index fields
{ findByESearch: { searchOptions: {}, searchParams: {
	query: 'project plan',
	searchIn: CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_TITLE +
		CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT +
		CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_INDEX_FIELDS
} } }

// ESearch with index field filter: operatorType is required for REST
searchParams.queryOperator = { operatorType: 'AND', queryObjectList: [{
	searchField: 'INDEXFIELD', indexFieldKey: 'ELOOUTL1',
	fieldType: 'tokenized', value: { value: 'sender@example.com' }
}] };

// Gen1 name, mask, index values
{ findByIndex: { name: 'Invoice*', maskId: 'Invoice', objKeys: [{ name: 'INVOICE_NO', data: ['4711'] }] } }
```

## Gen2 aspect search: `findByIndex.aspects`

- Key: `[association, aspectNameIdOrGuid, lineKey].join('\u00b6')`; empty
  components are wildcards. All empty = full scan, avoid.
- Value: `{ condition: { doubleValue: { operator: 'EQUALS', operand: 11.99 } } }`.
  Types `intValue`, `doubleValue`, `stringValue`, `fixedPointNumberValue`
  (operand as decimal string). Plural (`doubleValues: [...]`) = AND, e.g. range.
  `disjunctConditions: [...]` = OR.
- Operators: `EQUALS`, `GREATER`, `GREATER_THAN`, `LOWER`, `LOWER_THAN`,
  `LIKE` (`*`), `ISNULL` (null values are not found with `EQUALS`).
- `findOptions.searchMode`: `CONST.SEARCH_MODE.AND`/`OR` across map entries.
  Under AND, fields of the same repeated association must match the same object.
- Restrict with `findByIndex.maskId`/`maskIds` (+ `includeChildMasks`),
  `findChildren`, `findOptions.objIds`.
- Sort: `findByIndex.aspectSortOrder: [{ key, sortOrderSequence: 'ASCENDING' }]`.
- Errors: unknown names -> `NOT_FOUND`; malformed conditions -> `INVALID_PARAM`.

## Selectors

`CONST.SORD.mbMin` for lists, `mbLean` with index values, `mbAll` if aspect
values or all members are needed.
