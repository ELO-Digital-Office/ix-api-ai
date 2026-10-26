# Resource Cleanup

Several operations allocate server resources that the client must release.

| Resource | Allocated by | Release with |
| --- | --- | --- |
| Search context | `findFirstSords`, `findFirstTasks`, ... | `findClose` with `searchId` |
| Sord lock | `checkoutSord`/`checkoutDoc` with `lockZ: CONST.LOCK.YES` | `checkinSord`/`checkinDocEnd` with `unlockZ: CONST.LOCK.YES` |
| Workflow lock | `beginEditWorkFlowNode` with `CONST.LOCK.YES` | `endEditWorkFlowNode` (forward, or `bCancel: true`) |
| Mask/aspect lock | `checkout*` with `lockZ: CONST.LOCK.YES` | `checkin*` with `unlockZ: CONST.LOCK.YES` |
| Session | `login` | `logout` |
| Temporary upload | `BUtility/upload` | Consumed by the next check-in |
| Demo objects | Examples, tests | `deleteSord`, then `deleteFinally: true` |

## Always use `finally`

```javascript
var searchId = findResult.searchId;
try {
	// read pages
} finally {
	await xhr.restcall('IXServicePortIF/findClose', { searchId: searchId });
}
```

```javascript
var editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
	objId: objId, editInfoZ: CONST.EDIT_INFO.mbSord, lockZ: CONST.LOCK.YES
});
var saved = false;
try {
	editInfo.sord.name = 'New name';
	await xhr.restcall('IXServicePortIF/checkinSord', {
		sord: editInfo.sord, sordZ: CONST.SORD.mbAll, unlockZ: CONST.LOCK.YES
	});
	saved = true;
} finally {
	if (!saved) {
		await xhr.restcall('IXServicePortIF/checkinSord', {
			sord: editInfo.sord, sordZ: CONST.SORD.mbOnlyUnlock, unlockZ: CONST.LOCK.YES
		});
	}
}
```

## Deleting test data

- `deleteSord` deletes logically. A second call with
  `deleteOptions.deleteFinally: true` purges the object; `xhr.purgeSord(objId)`
  in [rest-call.js](../../examples/rest/javascript/rest-call.js) does both.
- Delete in dependency order: Sord, then mask (with associations), then
  aspects.
- Delete only objects your code created. Never purge objects selected by a
  search without explicit confirmation.

## Sessions

- Cookie and Bearer sessions expire after 10 minutes of inactivity; call
  `logout` when done.
- Basic authentication connections are cached by the server; no logout needed.
