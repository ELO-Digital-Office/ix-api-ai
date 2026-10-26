// Configuration object for the ELO REST API client.
var config = {
	// Indexserver URL
	ixUrl: 'http://localhost:8080/ix-Repository1/ix',
	
	// User name and password for Basic Authentication
	loginUser: 'Administrator',
	loginPwd: 'elo',

	// Authentication method
	// Possible values: 'Basic', 'Bearer', 'API Key'
	authenticationMethod: 'Basic',

	// ClientInfo object that can be sent with each request to pass language, country, and time zone.
	clientInfo: {
		language: 'en', // Can include country, e.g., 'en_US'
		country: 'US',
		timeZone: 'Europe/Berlin',
		ticket: ''
	}
};

// Global variable to hold constant values read from the ELO repository.
var CONST = {};

// This function shows how to login and logout.
async function login(user, password, authMethod) {

	config.loginUser = user;
	config.loginPwd = password;
	config.authenticationMethod = authMethod;

	if (config.authenticationMethod === 'API Key') {
		// Copy ClientInfo since it shall not send a member 'ticket' to prevent IX from returning
		// a real ticket in the login response. 
		// IX will send a fake ticket with the value 'de.elo.ix.client.ticket_from_cookie' which 
		// indicates that the JSESSIONID cookie will be used for authentication.
		config.clientInfo = { language: config.clientInfo.language, country: config.clientInfo.country, timeZone: config.clientInfo.timeZone };
	}
	else if (config.authenticationMethod === 'Bearer') {
		// Set the clientInfo.ticket to an empty string. This causes the server to return a real ticket in the login response which can be used for Bearer Authentication.
		config.clientInfo.ticket = '';
	}
	else if (config.authenticationMethod === 'Basic') {
		// Nothing to do here. XHR object in rest-call.js will use Basic Authentication with the provided user name and password.

		// Read constant values into global variable CONST.
		// This object should be read only once since it does not change and contains a large number of items.
		CONST = await
			xhr.restcall('IXServicePortIF/getConstants');

		return;
	}

	// Login 
	try {
		var loginResult = await xhr.restcall('IXServicePortIF/login', {
			ci: config.clientInfo,
			userName: config.loginUser,
			userPwd: config.loginPwd,
			clientComputer: 'REST Client',
			runAs: ''
		});

		// Show login result in the browser's console.
		console.dir(loginResult);

		// Store the received ticket for Bearer Authentication.
		if (config.authenticationMethod === 'Bearer') {
			config.ticket = loginResult.clientInfo.ticket;
		}

		// Read constant values into global variable CONST.
		// This object should be read only once since it does not change and contains a large number of items.
		CONST = await
			xhr.restcall('IXServicePortIF/getConstants');

	}
	catch (exception) {
		console.error(exception);
		document.getElementById('login.ticket').value = exception.message;
	}

	// Logout
	// await xhr.restcall('IXServicePortIF/logout', {
	// 	ci: config.clientInfo
	// });

}
