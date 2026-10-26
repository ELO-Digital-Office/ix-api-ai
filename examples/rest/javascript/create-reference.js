/**
 * This example demonstrates how to create and delete a logical reference
 * (relation) of an archive entry with refSord and deleteSord.
 *
 * A reference makes an existing object visible in an additional folder. The
 * object keeps its main parent; no copy is created. Sord.refPaths[0] always
 * contains the path to the original, further entries contain reference paths.
 *
 * Structure created below config.parentId:
 *
 *   refExample-<timestamp>
 *     - original      <- main parent of "object"
 *       - object
 *     - refFolder     <- receives a reference to "object"
 */
async function createReferenceExample() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

	var testFolderId = await insertFolder(config.parentId, 'refExample-' + Date.now());
	try {
		var originalFolderId = await insertFolder(testFolderId, 'original');
		var refFolderId = await insertFolder(testFolderId, 'refFolder');
		var objId = await insertFolder(originalFolderId, 'object');

		// Create the reference in refFolder.
		// oldParentId must be empty (null or '') to create a reference instead of moving.
		// manSortIdx: -1 appends the reference at the end of the child list (fastest),
		// 0 inserts it at the beginning, n > 0 at position n (manual sort order).
		await xhr.restcall('IXServicePortIF/refSord', {
			oldParentId: '',
			newParentId: String(refFolderId),
			objId: String(objId),
			manSortIdx: -1
		});

		// Alternative: copySord with CopySordC.REFERENCE.
		// await xhr.restcall('IXServicePortIF/copySord', {
		//	newParentId: String(refFolderId),
		//	objId: String(objId),
		//	copyInfo: { manSortIdx: -1 },
		//	copySordZ: CONST.COPY_SORD.REFERENCE
		// });

		// Read the object including its reference paths.
		var editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
			objId: String(objId),
			editInfoZ: CONST.EDIT_INFO.mbSord,
			lockZ: CONST.LOCK.NO
		});
		var sord = editInfo.sord;
		console.log('main parent:', sord.parentId);
		sord.refPaths.forEach(function (refPath, i) {
			console.log('refPaths[' + i + ']:', refPath.pathAsString);
		});
		if (sord.refPaths.length !== 2) {
			throw new Error('Expected 2 reference paths, got ' + sord.refPaths.length);
		}

		// Delete the reference only. A reference is deleted if parentId is not the
		// main parent of the object. The original object remains untouched.
		await xhr.restcall('IXServicePortIF/deleteSord', {
			parentId: String(refFolderId),
			objId: String(objId),
			unlockZ: CONST.LOCK.NO
		});

		editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
			objId: String(objId),
			editInfoZ: CONST.EDIT_INFO.mbSord,
			lockZ: CONST.LOCK.NO
		});
		console.log('refPaths after deleting the reference:', editInfo.sord.refPaths.length);

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
