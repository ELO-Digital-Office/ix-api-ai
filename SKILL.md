# REST API Examples for ELO Indexserver

This directory contains practical code examples demonstrating how to interact with the ELO Indexserver REST API using JavaScript and Java.

## Purpose

These examples provide working implementations for common API operations including:
- User authentication and session management
- Document and folder operations (create, read, update)
- Metadata handling for business objects
- REST API communication patterns
- File upload and processing

## When to Use These Examples

**Use these examples when:**
- Implementing REST API integration with ELO Indexserver
- Building document management workflows
- Setting up authentication for API clients
- Handling file uploads to the repository
- Working with folder hierarchies and metadata
- Implementing search queries (esearch)
- Learning REST API patterns and best practices
- Debugging API integration issues

**Do NOT use when:**
- Working with SOAP or legacy APIs
- Building client-side UI components unrelated to API calls
- Implementing database operations outside the ELO system

## Directory Structure

### `/rest/javascript/`
JavaScript examples for browser and Node.js environments:
- **login.js** - Authentication methods (API Key, Bearer Token, Basic Auth)
- **rest-call.js** - HTTP request utilities with proper authorization headers
- **insert-document.js** - Creating and uploading documents with metadata
- **insert-folder.js** - Creating folder hierarchies
- **insert-path.js** - Working with path-based operations
- **metadata-gen1.js** - Generation 1 metadata masks and index fields (`Sord.objKeys`)
- **metadata-gen2.js** - Generation 2 aspects, aspect masks, and typed values (`Sord.aspects`)
- **invoke-rf.js** - Invoking registered functions
- **find-fulltext.js** - Full-text and index-field search queries
- **find-aspects.js** - Generation 2 aspect searches, typed filters, sorting, and paging
- **find-children.js** - Finding the direct children of a folder
- **find-descendants.js** - Finding all descendants below a folder
- **find-loop.js** - Paging through and closing Sord searches
- **write-map.js** - Map/collection data structures
- **base64.js** - Base64 encoding utilities
- **config.js** - Configuration management
- **insert-doc-att.js** - Document attachments handling
- **create-reference.js** - Creating and deleting a logical reference (`refSord`, `deleteSord`)
- **move-sord.js** - Moving an object into another folder (`refSord`)
- **workflow.js** - Starting standard, ad hoc, and user-defined workflows; listing, taking, and forwarding workflow tasks

### Documentation and HTML Files
- **index.md** - Main REST API documentation and usage reference
- **examples.html** - Interactive examples demonstration
- **esearch.html** - Search interface examples

## Key Patterns

### Authentication Flow
```javascript
// 1. Provide credentials
config.loginUser = username;
config.loginPwd = password;
config.authenticationMethod = 'Bearer'; // or 'API Key', 'Basic'

// 2. Login to obtain session ticket
var clientInfo = await xhr.restcall('IXServicePortIF/login', {...});

// 3. Use ticket for subsequent API calls
config.clientInfo.ticket = clientInfo.ticket;

// 4. Read CONST object into a global variable
var CONST = await xhr.restcall('IXServicePortIF/getConstants');
```

### Read API constants, SordZ, EditInfoZ, LockZ, and other configuration values
```javascript
// Read API constants once and store them in a global variable
var CONST = await xhr.restcall('IXServicePortIF/getConstants');
```

### Document Upload
```javascript
// 1. Create document structure
var editInfo = await xhr.restcall('IXServicePortIF/createDoc', {...});

// 2. Populate metadata
var sord = editInfo.sord;
sord.name = 'Document Name';

// 3. Check in the document 
	var doc = await
	xhr.restcallWithStreams('IXServicePortIF/checkinDocEnd', {
		sord : sord,
		sordZ : CONST.SORD.mbAll,
		document : {
			docs : [ version ]
		},
		unlockZ : CONST.LOCK.NO
	}, files); 					// pass files here
```

### Generation 2 Metadata With Aspects

Use [metadata-gen2.js](examples/rest/javascript/metadata-gen2.js) as a 
template for creating a Sord with generation 2 metadata. After logging in,
loading `CONST` with `getConstants`, and setting `config.parentId`, call:

```javascript
var sord = await createSordWithMetadataGen2();
console.log(sord.id, sord.aspects.RECHNUNGSPOSITION[1].PREIS.doubleValue);
```

The example creates address and invoice-position aspects using `createAspect`
and `checkinAspect`, then builds and persists an aspect mask using
`createAspectAssoc`, `createAspectMask`, and `checkinDocMask`. Creating aspects
and masks requires the corresponding administrative rights. An optional
`maskName` argument must be unique; the default uses a timestamp.

- Use `Sord.aspects[associationName]`, an array of aspect objects keyed by field
	key, instead of generation 1 `Sord.objKeys`.
- Pass cardinalities as strings: `MANDATORY` creates an initial aspect object;
	with defaults on the aspect lines, its index values are initialized too.
	`OPTIONAL_MANY` requires explicitly adding the desired aspect objects.
- Set `IndexValue.type` using `CONST.INDEXVALUE` and populate the matching
	`stringValue`, `intValue`, or `doubleValue`. Aspect line types come from
	`CONST.ASPECT_LINE`, a different set of constants.
- REST `createSord` returns `EditInfo`; access its `sord` property.
- The example reads back the Sord, locks it for a price update, checks it in
	with `unlockZ: CONST.LOCK.YES`, and verifies the persisted price is `11.99`.

Unlike the Java test's cleanup, this example leaves the Sord, mask, and aspects
in the repository for inspection, including resources created before an error.
For demo cleanup, remove the Sord first, then the mask (and its associations),
and finally the aspects, which must no longer be referenced by a mask.

### Search Generation 2 Metadata

[find-aspects.js](examples/rest/javascript/find-aspects.js) translates patterns
from `TestFindByAspectResult` into REST queries. It uses the invoice mask and
fields created by [metadata-gen2.js](examples/rest/javascript/metadata-gen2.js).
After logging in and loading `CONST`, build the examples with an existing mask
ID or name and execute one query:

```javascript
var queries = createAspectSearchExamples(maskId);
var matches = await findSordsByAspects(queries.customerAndPosition);
var priceMatches = await findSordsByAspects(queries.priceRange);
```

The searches are read-only. `customerAndPosition` finds Huber invoices with a
Hammer 500g position of quantity 10, sorted by price and then customer name.
Other queries demonstrate alternative prices, a wildcard article prefix,
missing article values, and a field searched across aspects. Optionally pass an
invoice-position aspect ID, GUID, or name as the second builder argument to
add `fieldAcrossAssociations`.

#### Keys and Typed Conditions

Use `findInfo.findByIndex.aspects`, a map from search keys to
`FindByAspectValue` objects. A key has exactly three components separated by
two pilcrows (`\u00b6` in JavaScript): association name, aspect name/ID/GUID,
and aspect-line key. Empty components act as wildcards.

```javascript
var fieldKey = ['RECHNUNGSPOSITION', '', 'PREIS'].join('\u00b6');
var filter = {
		[fieldKey]: {
				condition: { doubleValue: { operator: 'EQUALS', operand: 11.99 } }
		}
};
```

- An association plus field limits the search to that association; an aspect
	plus field searches all its associations. A field-only key searches matching
	field keys across aspects. All three components empty searches every aspect
	field and can cause expensive full-table scans.
- Use `condition.intValue`, `doubleValue`, `stringValue`, or
	`fixedPointNumberValue`, each with `operator` and `operand`. Fixed-point
	operands are decimal strings, not JavaScript floating-point numbers.
- Use the corresponding plural property, such as `doubleValues`, for multiple
	comparisons that must all hold, for example a lower and upper bound.
	`disjunctConditions` contains alternative `IndexSearchValue` objects (OR),
	each of which may itself contain a range (AND).
- Supported comparison operators include `EQUALS`, `GREATER`, `GREATER_THAN`,
	`LOWER`, `LOWER_THAN`, and `LIKE`. The tests use `LIKE` with `*` wildcards.
	Use `ISNULL` for null values; `EQUALS` with a null operand does not find them.

#### Combinations and Scope

- Set `findOptions.searchMode` to `CONST.SEARCH_MODE.AND` or
	`CONST.SEARCH_MODE.OR` to combine aspect-map entries. This does not change
	the internal AND/OR grouping of each `FindByAspectValue`.
- Under AND, conditions on different fields of the same repeated association
	must match the same aspect object, not separate invoice positions.
	Conditions on different associations can match their respective objects.
- Other restrictions still apply under aspect OR: the tests demonstrate that
	a Sord name filter must still match even when either aspect condition matches.
- Combine with `findByIndex.maskId` or `maskIds`; `maskId` is added to the
	`maskIds` selection when both are supplied. Set `includeChildMasks: true`
	to include inheriting masks. Mask selection is OR across the selected masks.
- Further scope with `findChildren.parentId` (and `endLevel: -1` for a subtree),
	`findOptions.objIds` (IDs or GUIDs), `findByIndex.spaceGuids`, or legacy
	`findByIndex.objKeys`. Association access rights affect which matches are
	visible to the current user.

#### Sorting and Validation

- Add ordered `{ key, sortOrderSequence }` entries to
	`findByIndex.aspectSortOrder` for single or multi-field sorting. Sequences
	include `ASCENDING`, `DESCENDING`, `ASCENDING_NULLS_FIRST`, and
	`DESCENDING_NULLS_LAST`. Aspect sorting also works without aspect filters
	and takes precedence over the classic `findOptions.sortOrder`.
- Tests also cover searching aspect extensions and disambiguating duplicate
	association names with the aspect component of the key.
- Unknown aspects, associations, or fields produce `NOT_FOUND`. Mixed or
	incompatible typed alternatives and malformed fixed-point operands can
	produce `INVALID_PARAM`. The tests allow integer conditions to match double
	and fixed-point fields, but prefer conditions matching the actual line type.
- The example uses `findFirstSords`, `findNextSords` with `searchId` and `idx`,
	and `findClose` in `finally`. Select a smaller `sordZ` if aspect values are
	not needed in the response; the default is `CONST.SORD.mbAll`.

### Find Loop Pattern
```javascript
// Define the search criteria, example:
var findInfo = {
	findChildren: {
		parentId: 1
	}
};

// Invoke the find loop
var sords = await this.findSords(findInfo, CONST.SORD.mbMin);
```

### Use Cases for Finding Objects

Use the `findSords` helper from `find-loop.js` for searches that can return more
than one Sord. It wraps the `findFirstSords`/`findNextSords`/`findClose` sequence and
returns one array containing all matching objects. Select the smallest
appropriate `sordZ` member set to reduce response size.

#### Find direct children of a folder

Use `findChildren` when a view or workflow needs the immediate contents of a
folder. It does not include objects in nested folders.

```javascript
var findInfo = {
	findChildren: {
		parentId: '1'
	}
};

var children = await findSords(findInfo, CONST.SORD.mbMin);
```

See [find-children.js](examples/rest/javascript/find-children.js).

#### Find all descendants below a folder

Set `endLevel` to `-1` when a repository tree, folder audit, or bulk operation
must include every nested level below the parent.

```javascript
var findInfo = {
	findChildren: {
		parentId: '1',
		endLevel: -1
	}
};

var descendants = await findSords(findInfo, CONST.SORD.mbMin);
```

See [find-descendants.js](examples/rest/javascript/find-descendants.js).

#### Search by title, full text, or index fields

Use `findByESearch` for user-entered search terms. Build `searchIn` from the
`CONST.E_SEARCH_PARAMS` values rather than hard-coding numeric flags. The
default search in `find-fulltext.js` covers titles, full text, index fields,
extra text, and feeds.

```javascript
var findInfo = {
	findByESearch: {
		searchOptions: {},
		searchParams: {
			query: 'project plan',
			searchIn: CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_TITLE +
				CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT +
				CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_INDEX_FIELDS
		}
	}
};

var matches = await findSords(findInfo, CONST.SORD.mbMin);
```

See [find-fulltext.js](examples/rest/javascript/find-fulltext.js).

#### Search with index-field filters

Add `queryOperator.operatorType` and `queryObjectList` to combine structured
filters with a full-text search. For REST requests, include `operatorType`
(`AND`, `OR`, or `NOT`) so the server can deserialize the operator correctly.
Each index-field filter identifies the field by `indexFieldKey` and supplies
its value through `value.value`.

```javascript
var findInfo = {
	findByESearch: {
		searchOptions: {},
		searchParams: {
			query: 'invoice',
			searchIn: CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT,
			queryOperator: {
				operatorType: 'AND',
				queryObjectList: [
					{
						searchField: 'INDEXFIELD',
						indexFieldKey: 'ELOOUTL1',
						fieldType: 'tokenized',
						value: { value: 'sender@example.com' }
					}
				]
			}
		}
	}
};

var filteredMatches = await findSords(findInfo, CONST.SORD.mbMin);
```

For large result sets, keep the batch size controlled in `find-loop.js`,
always continue while `moreResults` is true, and close the search even after
the last page so server-side search resources are released.

### References and Moving Objects

A logical reference (relation) makes an existing object visible in another
folder without copying it. The object keeps exactly one main parent
(`Sord.parentId`); `Sord.refPaths[0]` is always the path to the original and
further entries are reference paths. Use `CONST.EDIT_INFO.mbSord` or a SordZ
containing `mbRefPaths` / `mbParentIds` to read them. Patterns are taken from
the Java test `TestRefSord`.

| Function | Parameters | Purpose |
|----------|-----------|---------|
| `refSord` | `oldParentId`, `newParentId`, `objId`, `manSortIdx` | Create a reference (empty `oldParentId`) or move (`oldParentId` set) |
| `deleteSord` | `parentId`, `objId`, `unlockZ`, `deleteOptions` | Delete a reference (`parentId` = reference parent) or the object (`parentId` empty or main parent) |
| `copySord` | `newParentId`, `objId`, `copyInfo`, `copySordZ` | Alternative: `CONST.COPY_SORD.REFERENCE` creates a reference, `CONST.COPY_SORD.MOVE` moves; `copyInfo.oldParentId` moves a reference, `copyInfo.manSortIdx` sets the position |

#### `refSord` semantics

- All ID parameters accept object IDs, GUIDs, or `ARCPATH:` paths.
- **Create reference:** `oldParentId` is `null` or `''`. Creating a reference
	that already exists, or one in the main parent, does not throw; with
	`manSortIdx >= 0` an existing reference is moved to that position.
- **Move:** `oldParentId` is the current parent. Passing the main parent moves
	the original (`Sord.parentId` changes); passing a reference parent moves only
	that reference. Moving a reference into the folder of the original deletes
	the reference without error. Child counts of both folders are adjusted.
- **Reorder:** `oldParentId == newParentId` changes only the manual sort
	position inside a folder whose `details.sortOrder` is `MANUAL`.
- **`manSortIdx`:** `-1` appends at the end (fastest), `0` inserts at the
	beginning, `n > 0` inserts at position `n`; values beyond the list end append.
- `oldParentId: '0'` moves an object out of the chaos area (objects without
	parent) into `newParentId`.

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

#### Deleting references

- A reference is deleted if `parentId` is not the main parent of `objId`.
	References are never deleted physically and are not returned in `refPaths`
	afterwards.
- `parentId` empty or equal to the main parent deletes the object itself
	(logically; `deleteOptions.deleteFinally: true` purges already deleted objects).
- A user may delete a reference in a folder they can edit even without read
	or delete rights on the referenced object; deleting the object itself fails
	with `ACCESS_DENIED` in that case.
- Reference paths respect access rights: path segments the user cannot read
	are replaced by `--`; a reference on the top level has the path `¶`.

See [create-reference.js](examples/rest/javascript/create-reference.js) and
[move-sord.js](examples/rest/javascript/move-sord.js).

### Workflows

[workflow.js](examples/rest/javascript/workflow.js) shows how to start
workflows and forward workflow tasks. `workflowExample()` creates a folder,
sends it to the current user in an ad hoc workflow, finds the task, and
forwards it.

| Function | Parameters | Purpose |
|----------|-----------|---------|
| `startWorkFlow` | `templFlowId`, `flowName`, `objId` | Start a standard workflow from a template (ID, GUID or name); returns the workflow ID |
| `startAdHocWorkFlow` | `name`, `objId`, `arrUserIds`, `nodeName`, `forValidation`, `serialFlow`, `cancelUserId`, `cancelMessage`, `finishedUserId`, `finishedMessage`, `finishedScript` | Start an ad hoc workflow |
| `checkoutWorkFlow` / `checkinWorkFlow` | `flowId`, `typeZ`, `workFlowDiagramZ`, `lockZ` / `wf`, `workFlowDiagramZ`, `unlockZ` | Start a user-defined workflow from a `WFDiagram` |
| `findFirstTasks` / `findNextTasks` / `findClose` | `findInfo`, `max` / `searchId`, `idx`, `max` | Collect tasks of the current user (`FindResult.tasks[].wfNode`) |
| `takeWorkFlowNode` | `nFlowId`, `nNodeId`, `sUserId`, `nFlags`, `lockZ` | Take a group or deputy task before forwarding |
| `beginEditWorkFlowNode` | `nFlowId`, `nNodeId`, `lockZ` | Read a task (`WFEditNode`) and its successors, lock the workflow |
| `endEditWorkFlowNode` | `nFlowId`, `nNodeId`, `bTerminate`, `bCancel`, `sName`, `sComment`, `arrEnterNodesIds` | Forward to the given successors, or only release the lock with `bCancel: true` |

- Ad hoc workflows: `serialFlow` sends the task to the users one after another,
	otherwise in parallel. `forValidation: true` adds a return path to the
	initiator if a user rejects the task; `false` is "for information".
- User-defined workflow: check out a template with
	`typeZ: CONST.WORKFLOW_TYPE.TEMPLATE`, set `wf.type = CONST.WORKFLOW_TYPE.ACTIVE`,
	`wf.id = -1`, `wf.name`, `wf.objId`, optionally modify nodes, then
	`checkinWorkFlow` starts it.
- Task search: set `inclWorkflows`, `inclGroup`, `inclDeputy` and the priority
	range (`CONST.USER_TASK_PRIORITY`) in `FindTasksInfo`. Tasks of other users
	require a login as that user (e.g. RunAs).
- Forwarding: `beginEditWorkFlowNode` with `CONST.LOCK.YES` locks the whole
	workflow. Always call `endEditWorkFlowNode` afterwards, with `bCancel: true`
	on errors, to release the lock. If `node.flags` contains
	`CONST.WORKFLOW_NODE.FLAG_ONE_SUCCESSOR`, pass exactly one successor ID.
- Group tasks and tasks of a substituted user must first be taken with
	`takeWorkFlowNode` (`CONST.TAKE_NODE.RESET_IN_USE_DATE`, `CONST.LOCK.IF_FREE`;
	main administrators may use `CONST.LOCK.FORCE`).

```javascript
var flowId = await startWorkflow('Hotel Reservation', objId, 'Hotel Reservation for ' + objId);
var tasks = await findWorkflowTasks();
await forwardWorkflowTask(tasks[0].flowId, tasks[0].nodeId, 'Done');
```

### REST API Call Pattern
```javascript
// Make authenticated REST calls with proper headers
var response = await xhr.restcall(endpoint, data);
```

### REST API With Streams Call Pattern 
```javascript
// Make authenticated REST calls with proper headers and streams
var response = await xhr.restcallWithStreams(endpoint, data, files); 
```

## API Reference

See the main documentation files for API details:
- **api.md** - OpenAPI specification and endpoint overview
- **schema.md** - Data model schemas
- **references/openapi.json** - Full OpenAPI specification

## Configuration

Edit `config.js` to set:
- `ixUrl` - Base URL of ELO Indexserver
- `loginUser` - Default username
- `loginPwd` - Default password
- `authenticationMethod` - Authentication type (API Key, Bearer, Basic)
- `clientInfo` - Client identification and timezone

## Running Examples

### Browser
1. Open the relevant HTML example in a web browser
2. Configure connection settings (server URL, credentials)
3. Click on example buttons to execute operations
4. Monitor the console for output and debugging

### Node.js
1. Import required modules from the examples
2. Initialize config with your server details
3. Call example functions directly
4. Handle async/await properly in your wrapper code

## Error Handling

All examples demonstrate proper error handling patterns:
- Validation of input parameters
- Checking file selection before upload
- Handling authentication failures
- Graceful error messages to users

## Best Practices

1. **Always authenticate first** - Obtain a valid ticket before making API calls
2. **Use the XHR utility** - rest-call.js provides proper header management and encoding
3. **Handle metadata properly** - Use constants from config for document mask fields
4. **Set client info** - Provide language, country, and timezone in ClientInfo
5. **Async/await patterns** - All examples use async functions for HTTP operations
6. **File validation** - Always check file exists and is readable before upload

## Security Notes

- Never hardcode credentials; use config management
- Use Bearer tokens instead of Basic Auth when possible
- Session tickets should be kept secure
- The API Key method uses session cookies (JSESSIONID) for security

## Related Documentation

- See `api.md` for full API endpoint listing
- See `schema.md` for data structure definitions
- Check `README.md` for project overview
