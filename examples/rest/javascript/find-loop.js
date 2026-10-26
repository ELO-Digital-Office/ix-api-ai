// Function to find Sords using a loop to handle pagination.
// 
// Parameters:
//   findInfo - The search criteria for finding Sords.
//   sordZ - The level of detail to fetch for each Sord.
// Returns:
//   An array of Sords matching the search criteria.
//
async function findSords(findInfo, sordZ) {

	// Max database rows to be fetched at all can be set in 
	// findInfo.findOptions.totalCount = 2 * 1000 * 1000 * 1000;
	// Default is 10000.

	// Max search time in seconds.
	// findInfo.findOptions.timeoutSeconds = 60;
	// Default is 300 seconds.

	// Sort order can be specified in 
	// findInfo.findOptions.sortOrder = CONST.SORT_ORDER.ASCENDING;
	// There is no explicitly defined default sort order.
	
    // Max Sord objects per batch.
    var maxPerBatch = 100;
	// Array to store the fetched child objects.
	var sords = [];

	// Execute the search for child objects.
	var findResult = await xhr.restcall('IXServicePortIF/findFirstSords', {
		findInfo: findInfo,
		max: maxPerBatch,
		sordZ: sordZ
	});

	var searchId = findResult.searchId;
	try {
		// Loop to fetch all child objects.
		var index = 0;
		while (true) {

			// Add the found children to the sords array.
			sords.push(...findResult.sords);

			// No more children?
			if (!findResult.moreResults) {
				break;
			}

			// Next index for fetching more results
			index += findResult.sords.length;

			// Fetch the next set of results if available.
			findResult = await xhr.restcall('IXServicePortIF/findNextSords', {
				searchId: searchId,
				idx: index,
				max: maxPerBatch,
				sordZ: sordZ
			});
		}
	} finally {
		// Always close the find operation to release resources.
		await xhr.restcall('IXServicePortIF/findClose', {
			searchId: searchId
		});
	}

	// Check if there are more results than findInfo.findOptions.totalCount
	if (findResult.breakTotalCount) {
		console.warn('There are more results than the specified totalCount.');
	}

	// Check if the search was interrupted due to a timeout
	if (findResult.breakTimeout) {
		console.warn('The search was interrupted due to a timeout.');
	}

	// Debug output
	console.dir(sords);

    return sords;
}
