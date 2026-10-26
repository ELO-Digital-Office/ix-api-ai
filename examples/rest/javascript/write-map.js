/**
 * Writes map data including a simple value, a buffer value, and a file value.
 * 
 * Arguments:
 *   simpleValue - A simple string value to be stored in the map.
 *   bufferValue - A string value to be stored as a Base64 encoded BLOB.
 *   fileValue - A file object from an HTML form to be stored as a stream.
 */
async function writeMap(simpleValue, bufferValue, fileValue) {
	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

	// Maximum length of a map value if not stored as BLOB
	var maxValueLength = CONST.MAP_DATA.lnValue;
	
	// Maximum length of a map value stored as BLOB
	var maxBlobLength = CONST.FILE_DATA.MAX_BLOB_LENGTH;
	
	// Get the values to be used as map data from the input fields
	
	// The simpleValue will be passed in String member MapValue.value 
	if (simpleValue.length >= maxValueLength) {
		throw new Error('simpleValue exceeds ' + maxValueLength);	
	}
	
	// The bufferValue will be passed as Base64 encoded BLOB value.
	// Before encoding to Base64, String values used in BLOBs should be encoded 
	// to UTF-8 to retain accented characters.
	var bufferBase64 = Base64.encode(bufferValue); // converts String -> UTF-8 -> Base64
	var bufferUtf8Length = bufferBase64.length * 2 / 3; 
	if (bufferUtf8Length * 2 / 3 > maxBlobLength) {
		throw new Error("bufferValue exceeds " + maxBlobLength);
	}

	// The fileValue from a HTML form will be passed as stream. 
	if (!fileValue) {
		alert('Select a file to upload');
		return;
	}
	if (fileValue.size > maxBlobLength) {
		throw new Error("fileValue exceeds " + maxBlobLength);
	}
	
	// Insert a Sord to which the map data will be associated.
	var objId = await xhr.restcall('IXServicePortIF/createSord', {
		parentId : config.parentId,
		maskId : CONST.DOC_MASK.GUID_FOLDER,
		editInfoZ : CONST.EDIT_INFO.mbSord
	}).then(editInfo => {
		editInfo.sord.name = 'Write Map ' + new Date();
		return xhr.restcall('IXServicePortIF/checkinSord', {
			sord : editInfo.sord,
			sordZ : CONST.SORD.mbAll,
			unlockZ : CONST.LOCK.NO
		});
	});
	document.getElementById('writeMap.objId').value = objId;
	
	// Create a MapValue object for each value, blob, stream to be stored.
	var mapValues = [
		{
			key : 'simpleValue',
			value : simpleValue,
		},
		{
			key : 'bufferValue',
			blobValue : {
				contentType : 'text/plain',
				data : bufferBase64
			}
		},
		{
			key : 'fileValue',
			blobValue : {
				contentType : fileValue.type,
				stream : { streamId : 'files[0]' }
			}
		},
	];
	
	// Insert the map data
	await xhr.restcallWithStreams('IXServicePortIF/checkinMap', {
		domainName : CONST.MAP_DOMAIN.DOMAIN_SORD,
		id : objId,
		objId : objId,
		data : mapValues
	}, [fileValue]);
	
	// Read the map data
	var mapData = await xhr.restcall('IXServicePortIF/checkoutMap', {
		domainName : CONST.MAP_DOMAIN.DOMAIN_SORD,
		id : objId,
		keyNames : ['simpleValue', 'bufferValue', 'fileValue']
	});

	// Display simpleValue
	var simpleValueR = mapData.mapItems['simpleValue'].value;

	// Download the BLOB value for bufferValue. 
	var bufferStream = mapData.mapItems['bufferValue'].blobValue.stream;
	var bufferBlob = await xhr.download(bufferStream.url);
	var bufferValueR = await bufferBlob.text();

	// Download the BLOB value for fileValue.
	var fileStream = mapData.mapItems['fileValue'].blobValue.stream;
	var fileBlob = await xhr.download(fileStream.url);
	var fileUrl = URL.createObjectURL(fileBlob);

	console.log("simpleValue: " + simpleValueR);
	console.log("bufferValue: " + bufferValueR);
	console.log("fileUrl: " + fileUrl);

	// Cleanup Sord
	xhr.purgeSord(objId);
}
