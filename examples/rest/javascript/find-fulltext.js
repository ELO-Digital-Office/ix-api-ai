/**
 * Simple search for terms over title, fulltext, etc.
 * 
 * Arguments:
 * 
 * query - The search terms.
 * searchIn - Where to search for the given terms. Can be specified as integer value with a combination of ESearchParamsC values.
 *            Furthermore, a comma separated list of ESearchParamsC values is accepted too.
 * 
 * Returns:
 *   An array of Sords matching the search criteria.
 */
async function fulltextSearch(query, searchIn) {

	// Where to search for the given terms.
	// Can be specified as integer value with a combination of ESearchParamsC values.
	// Furthermore, a comma separated list of ESearchParamsC values is accepted too.
	if (!searchIn) {
		searchIn = CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_TITLE + 
			CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT + 
			CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_INDEX_FIELDS + 
			CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_EXTRA_TEXT + 
			CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FEED;
	}

	var findInfo = {

		// FindByESearch
		findByESearch: {

			// ESearchOptions
			searchOptions: {
			},

			// ESearchParams
			searchParams: {
				query: query,
				searchIn: searchIn
			}
		}
	};

	// Invoke find loop defined in find_loop.js
	return await findSords(findInfo, CONST.SORD.mbMin);
}

/**
 * Search over fulltext and index fields.
 * 
 * Arguments:
 * 
 * query - The search terms.
 * mailFrom - The sender of the mail.
 * mailTo - The recipient of the mail.
 * 
 * Returns:
 *   An array of Sords matching the search criteria.
 */
async function fulltextSearchMails(query, mailFrom, mailTo) {

	// Search criteria

	var findInfo = {
		findByESearch: {

			// ESearchOptions
			searchOptions: {
			},

			// ESearchParams
			searchParams: {

				query: query,
				searchIn: CONST.E_SEARCH_PARAMS.CONST_SEARCH_PARAMS_FULLTEXT,

				// QueryOperator
				queryOperator: {

					// Element operatorType helps to decide which class has to be deserialized on the server side:
					// AndOperator, OrOperator, or NotOperator. This element is not declared in the API and is only required for REST calls.
					operatorType: 'AND',

					// List<QueryObject> queryObjectList
					queryObjectList: [

						// QueryFilter for mailFrom
						{
							searchField: "INDEXFIELD",   // SearchFieldE  
							indexFieldKey: "ELOOUTL1",   // Index field name
							fieldType: "tokenized",      // FieldTypeE
							value: { value: mailFrom }  // FilterValue, here: deserialized as StringSingleValue
						}
						,
						// QueryFilter for mailTo
						{
							searchField: "INDEXFIELD",
							indexFieldKey: "ELOOUTL2",
							fieldType: "tokenized",
							value: { value: mailTo }
						}
					]
				}

			}

		}
	};

	// Invoke find loop defined in find_loop.js
	return await findSords(findInfo, CONST.SORD.mbMin);
}
