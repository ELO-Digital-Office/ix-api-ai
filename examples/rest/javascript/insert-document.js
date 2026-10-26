async function onInsertDocument() {
	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.


	// File to be uploaded.
	var files = document.getElementById('insertDocument.file').files;
	var versionFile = files[0];
	if (!versionFile) {
		alert('Select a file to upload');
		return;
	}

	// Initialize Sord with given parent ID and default document mask.
	var editInfo = await
	xhr.restcall('IXServicePortIF/createDoc', {
		parentId : parentId,
		maskId : '',
		editInfoZ : CONST.EDIT_INFO.mbSord // Hint: CONST.EDIT_INFO.mbSord is of Type EditInfoZ
	});

	// Assign Sord properties.
	var sord = editInfo.sord;
	sord.name = 'New Document ' + new Date().toISOString();
	sord.XDateIso = new Date().toISOString();
	
	// Assign original file name.
	var okeyFName = { 
		id : CONST.DOC_MASK_LINE.ID_FILENAME, 
		name : CONST.DOC_MASK_LINE.NAME_FILENAME,
		data : [versionFile.name]
	};
	sord.objKeys.push(okeyFName);
	
	// Provide a DocVersion object and assign the stream reference.
	var version = {
		version : '1.0',
		comment : 'Version uploaded via REST call.',
		contentType : versionFile.type,
		fileData : {}
	};

		
	// Reference the file by the field name used in the FormData object (see restcallWithStreams).
	version.fileData.stream = { streamId : 'files[0]' };
	
	// Checkin document.
	var doc = await
	xhr.restcallWithStreams('IXServicePortIF/checkinDocEnd', {
		sord : sord,
		sordZ : CONST.SORD.mbAll,
		document : {
			docs : [ version ]
		},
		unlockZ : CONST.LOCK.NO
	}, files); 					// pass files here
	
	objId = doc.objId;
		
	// Read Sord object.
	var editInfoR = await xhr.restcall('IXServicePortIF/checkoutSord', {
		objId : objId,
		editInfoZ : CONST.EDIT_INFO.mbSordContentStream,
	});
	console.dir(editInfoR);
	
	// Download file into blob to be able to view it in an IFRAME
	// afte the sord has been deleted.
	var fileBlob = await xhr.download(editInfoR.sord.docVersion.fileData.stream.url);
	var fileUrl = URL.createObjectURL(fileBlob);
	document.getElementById('insertDocument.fileContent').src = fileUrl;
	
	// Object ID of the newly created Sord object.
	var sordR = editInfoR.sord;
	document.getElementById('insertDocument.objId').value = sordR.id;

}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("insertDocument.bnInsertDocument").addEventListener("click", onInsertDocument);
});
