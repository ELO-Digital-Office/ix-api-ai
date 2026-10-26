var config = {
   // Indexserver URL
   baseUrl: "http://localhost:8084/ix-dev",
   ixUrl: "http://localhost:8084/ix-dev" + "/ix",
   restUrl: "http://localhost:8084/ix-dev" + "/rest/",

   // Testuser
   loginUser: 'Administrator',
   loginPwd: 'elo',

   // Authentication method. Possible values: 'API Key', 'Bearer', 'Basic'
   authenticationMethod: 'Basic', // 'API Key', 'Bearer', 'Basic'

   // Ticket for Bearer Authentication. 
   // The ticket is received from the login request if clientInfo.ticket is set to an empty string.
   ticket: '',

   // ClientInfo object with session attributes.
   clientInfo: {
      language : 'de',
      country : 'DE',
      timeZone : '' // 'UTC'
   },

   // ID of the parent folder where the objects will be created. The parent folder must exist in the ELO repository.
   parentId: 1,
}; 

// Constant values assigned in login.js by a call to IXServicePortIF/getConstants. 
// This object should be read only once since it does not change and contains a large number of items.
var CONST = {};
