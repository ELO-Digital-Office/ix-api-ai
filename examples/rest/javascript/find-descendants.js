/**
 * This example demonstrates how to find the descendants of a given parent folder.
 * 
 * The example uses the findSords function defined in find_loop.js to handle pagination.
 */
async function findDescendants() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.


	// The parent folder ID
	var parentId = 1;

	// Define the search criteria.
	var findInfo = {
		findChildren: {
			parentId: parentId,
			endLevel: -1
		}
	};

	// Invoke find loop defined in find_loop.js
	var sords = await this.findSords(findInfo, CONST.SORD.mbMin);

}
