async function onInsertPath() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.



	// Split given path at forward slashes into an array.
	// Create a Sord object for each path element.
	var pathNames = document.getElementById('insertPath.path').value;
	var sords = [];
	pathNames.split('/').forEach(name => {
		sords.push({ name : name });
	});
	
	// Create the path.
	var ids = await	xhr.restcall('IXServicePortIF/checkinSordPath', {
		parentId : 1,
		sords,
		sordZ : CONST.EDIT_INFO.mbSord
	});

	// Get the last object ID of the created path.
	var objId = ids[ids.length-1];

	// Read Sord object.
	var editInfoR = await xhr.restcall('IXServicePortIF/checkoutSord', {
		objId : objId,
		editInfoZ : CONST.EDIT_INFO.mbSord,
	});

	// Show values of the last Sord in the path on website.
	var sordR = editInfoR.sord;
	console.dir(sordR);
	document.getElementById('insertPath.objId').value = sordR.id;
	document.getElementById('insertPath.objName').value = sordR.name;
	document.getElementById('insertPath.pathR').value = sordR.refPaths[0].pathAsString;

  // Delete Sord object 
  await xhr.purgeSord(objId);

	// Logout.
	await
	xhr.restcall('IXServicePortIF/logout', {});

}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("insertPath.bnInsertPath").addEventListener("click", onInsertPath);
});
