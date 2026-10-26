/**
 * This example demonstrates how to find the children of a given parent folder.
 * 
 * The example uses the findSords function defined in find_loop.js to handle pagination.
 */
async function findChildren() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

	// The parent folder ID
	var parentId = 1;

	// Define the search criteria.
	var findInfo = {
		findChildren: {
			parentId: parentId
		}
	};

	// Invoke find loop defined in find_loop.js
	var sords = await this.findSords(findInfo, CONST.SORD.mbMin);

}
