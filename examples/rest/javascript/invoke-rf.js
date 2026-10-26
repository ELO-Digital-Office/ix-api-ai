// Invoke a registered function.
async function onInvokeRF() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.



	// Store the received clientInfo object.
	// The clientInfo object has to be supplied as parameter 'ci' in every request.
	clientInfo = loginResult.clientInfo;
	
	// This object is sent to the Registered Function
	var paramObject = {
		member1 : 123,
		member2 : "ABC",
		now: new Date().toISOString()
	};
	
	// Object has to be serialized into a JSON String before it can be sent.
	var paramString = JSON.stringify(paramObject);

	// Invoke the Registered Function
	try {
		var functionName = document.getElementById('invokeRF.rfname').value;
		var resultString = await xhr.restcall('IXServicePortIF/executeRegisteredFunctionString', {
			functionName : functionName,
			param : paramString
		});
		
		// Deserialize the result object.
		var resultObject = JSON.parse(resultString);
		
		// Pretty-print the result
		document.getElementById('resultObject').value = JSON.stringify(resultObject, null, 2);
	}
	catch (ex) {
		console.error(ex);
		alert(ex.message);
	}

	// Logout.
	await
	xhr.restcall('IXServicePortIF/logout', {
		ci : clientInfo
	});

}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("invokeRF.bnInvokeRF").addEventListener("click", onInvokeRF);
});
