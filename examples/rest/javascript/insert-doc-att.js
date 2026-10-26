async function onInsertDocumentAndAttachment() {
	
	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.



	// Files to be uploaded.
	var versionFile = document.getElementById('insertDocAtt.versionFile').files[0];
	var attachmentFile = document.getElementById('insertDocAtt.attachmentFile').files[0];
	var files = [versionFile, attachmentFile];
	if (!versionFile || !attachmentFile) {
		alert('Select files to upload');
		return;
	}

	// Initialize Sord with given parent ID and default document mask.
	var editInfo = await
	xhr.restcall('IXServicePortIF/createDoc', {
		parentId : config.parentId,
		maskId : '',
		editInfoZ : CONST.EDIT_INFO.mbSord // Hint: CONST.EDIT_INFO.mbSord is of Type EditInfoZ
	});

	// Assign Sord properties.
	var sord = editInfo.sord;
	sord.name = "New Document and Attachment " + new Date().toISOString();
	
	// Provide DocVersion objects with stream reference
	var version = {
		version : '1.0',
		comment : 'Version uploaded via REST call.',
		contentType : versionFile.type,
		fileData : {
			stream : { streamId : 'files[0]' }
		}
	};
	var attachment = {
		version : '1.0',
		comment : 'Attachment uploaded via REST call.',
		contentType : attachmentFile.type,
		fileData : {
			stream : { streamId : 'files[1]' }
		}
	};

	// Checkin document.
	var doc = await
	xhr.restcallWithStreams('IXServicePortIF/checkinDocEnd', {
		sord : sord,
		sordZ : CONST.SORD.mbAll,
		document : {
			docs : [ version ],
			atts : [ attachment ]
		},
		unlockZ : CONST.LOCK.NO
	}, files); 					// pass files here
	
	objId = doc.objId;
		
	// Read Sord object.
	var editInfoR = await xhr.restcall('IXServicePortIF/checkoutDoc', {
		objId : objId,
		editInfoZ : CONST.EDIT_INFO.mbSordDocAtt,
		lockZ : CONST.LOCK.NO
	});
	console.dir(editInfoR);

	// Show Sord values on website.
	document.getElementById('insertDocAtt.objId').value = editInfoR.sord.id;
	document.getElementById('insertDocAtt.fileSizeDocument').value = editInfoR.document.docs[0].size
	document.getElementById('insertDocAtt.fileSizeAttachment').value = editInfoR.document.atts[0].size;
	
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("insertDocAtt.bnInsertDocumentAndAttachment").addEventListener("click", onInsertDocumentAndAttachment);
});
