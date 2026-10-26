/**
 * This example demonstrates how to move an archive entry into another folder
 * with refSord.
 *
 * refSord moves an object if oldParentId is set: the object is removed from
 * oldParentId and inserted into newParentId. Pass the main parent as
 * oldParentId to move the original; pass a reference parent to move only that
 * reference. IDs, GUIDs and "ARCPATH:" paths are accepted.
 *
 * Structure created below config.parentId:
 *
 *   moveExample-<timestamp>
 *     - source
 *       - object      <- moved to target
 *     - target
 */
async function moveSordExample() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

	var testFolderId = await insertFolder(config.parentId, 'moveExample-' + Date.now());
	try {
		var sourceId = await insertFolder(testFolderId, 'source');
		var targetId = await insertFolder(testFolderId, 'target');
		var objId = await insertFolder(sourceId, 'object');

		// Move the object from source to target.
		// manSortIdx: -1 appends it at the end of the target's child list,
		// 0 inserts it at the beginning, n > 0 at position n (manual sort order).
		// With oldParentId == newParentId only the manual sort position changes.
		await xhr.restcall('IXServicePortIF/refSord', {
			oldParentId: String(sourceId),
			newParentId: String(targetId),
			objId: String(objId),
			manSortIdx: -1
		});

		// Alternative: copySord with CopySordC.MOVE. To move a reference instead
		// of the original, set copyInfo.oldParentId to the reference parent.
		// await xhr.restcall('IXServicePortIF/copySord', {
		//	newParentId: String(targetId),
		//	objId: String(objId),
		//	copyInfo: { manSortIdx: -1 },
		//	copySordZ: CONST.COPY_SORD.MOVE
		// });

		// Verify the new main parent.
		var editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
			objId: String(objId),
			editInfoZ: CONST.EDIT_INFO.mbSord,
			lockZ: CONST.LOCK.NO
		});
		var sord = editInfo.sord;
		if (String(sord.parentId) !== String(targetId)) {
			throw new Error('Object was not moved, parentId=' + sord.parentId);
		}
		console.log('moved object', sord.id, 'to', sord.refPaths[0].pathAsString);

		return sord;
	}
	finally {
		// Remove the whole example structure.
		await xhr.purgeSord(testFolderId);
	}
}

/**
 * Create a folder below the given parent.
 * @param parentId Parent ID, GUID or ARCPATH.
 * @param name Folder name.
 * @return Object ID of the new folder.
 */
async function insertFolder(parentId, name) {
	var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
		parentId: String(parentId),
		maskId: CONST.DOC_MASK.GUID_FOLDER,
		editInfoZ: CONST.EDIT_INFO.mbSord
	});
	var sord = editInfo.sord;
	sord.name = name;
	return await xhr.restcall('IXServicePortIF/checkinSord', {
		sord: sord,
		sordZ: CONST.SORD.mbAll,
		unlockZ: CONST.LOCK.NO
	});
}
