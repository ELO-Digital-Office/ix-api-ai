/**
 * This example demonstrates how to find objects by metadata.
 * 
 * The example uses the findSords function defined in find_loop.js to handle pagination.
 */
async function findMetadata() {

	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

	// Define the search criteria. Each member is optional.
	var findInfo = {
		findByIndex: {
			name: "exampleName", 
			maskId: "exampleMaskId", 
			objKeys: [{
				name: "key1",
				data: ["value1"]
			}]
		}
	};

	// Invoke find loop defined in find_loop.js
	var sords = await this.findSords(findInfo, CONST.SORD.mbMin);

}
