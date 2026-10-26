# Pagination

Searches (`findFirstSords`, `findFirstTasks`, ...) return results in pages and
keep a server-side search context until `findClose` is called.

## Sequence

1. `findFirst*` with `findInfo` and `max` (page size). The result contains the
   first page, `searchId`, and `moreResults`.
2. While `moreResults` is true: `findNext*` with `searchId`, `idx` (number of
   entries already received), and `max`.
3. `findClose` with `searchId` in a `finally` block, also after the last page.

```javascript
async function findSords(findInfo, sordZ) {
	var maxPerBatch = 100;
	var sords = [];
	var findResult = await xhr.restcall('IXServicePortIF/findFirstSords', {
		findInfo: findInfo, max: maxPerBatch, sordZ: sordZ
	});
	var searchId = findResult.searchId;
	try {
		var index = 0;
		while (true) {
			sords.push(...findResult.sords);
			if (!findResult.moreResults) break;
			index += findResult.sords.length;
			findResult = await xhr.restcall('IXServicePortIF/findNextSords', {
				searchId: searchId, idx: index, max: maxPerBatch, sordZ: sordZ
			});
		}
	} finally {
		await xhr.restcall('IXServicePortIF/findClose', { searchId: searchId });
	}
	return sords;
}
```

Source: [find-loop.js](../../examples/rest/javascript/find-loop.js).

## Rules

- `idx` is the absolute start index of the next page, not a page number.
- Keep the page size moderate (about 100); large pages increase response size
  and memory usage.
- Pass `sordZ` again in each `findNextSords` call.
- Check `breakTotalCount` (more hits than `findOptions.totalCount`, default
  10000) and `breakTimeout` (search exceeded `findOptions.timeoutSeconds`,
  default 300) in the last result and report incomplete results.
- For very large result sets, process each page instead of collecting all
  results in memory.
- Do not keep a search open across user interactions; the context consumes
  server resources and expires with the session.
