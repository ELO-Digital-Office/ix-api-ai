async function onInsertFolder() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.



	// Initialize Sord with given parent ID and default folder mask.
	var editInfo = await
		xhr.restcall('IXServicePortIF/createSord', {
			parentId: config.parentId,
			maskId: CONST.DOC_MASK.GUID_FOLDER,
			editInfoZ: CONST.EDIT_INFO.mbSord
		});

	// Assign Sord properties.
	var sord = editInfo.sord;
	{
		// Name and date
		sord.name = document.getElementById('insertFolder.name').value;
		sord.XDateIso = new Date().toISOString();

		// e.g. assign full access to everyone.
		sord.aclItems = [
			{
				id: CONST.USER_INFO.ID_EVERYONE,
				access: CONST.ACCESS.LUR_ALL
			}];

		// Index fields
		sord.objKeys[0].data = ['elo-index-123'];
	}

	// Store Sord object.
	var objId = await
		xhr.restcall('IXServicePortIF/checkinSord', {
			sord: sord,
			sordZ: CONST.SORD.mbAll
		});

	// Read Sord object.
	var editInfoR = await
		xhr.restcall('IXServicePortIF/checkoutSord', {
			objId: objId,
			editInfoZ: CONST.EDIT_INFO.mbSordLean,
		});

	// Show Sord values on website.
	var sordR = editInfoR.sord;
	console.dir(sordR);
	document.getElementById('insertFolder.objId').value = sordR.id;

	// Delete Sord object 
	var deleteFinally = document.getElementById('insertFolder.deleteFinally').checked;
	if (deleteFinally) {
		await xhr.purgeSord(sordR.id);
	}

}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("insertFolder.bnInsertFolder").addEventListener("click", onInsertFolder);
});
