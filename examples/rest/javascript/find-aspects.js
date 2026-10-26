/**
 * Build generation 2 metadata searches for the mask from metadata-gen2.js.
 * Requires login, xhr, and constants loaded into CONST.
 * maskId - Existing mask ID or name, used to scope every example.
 * invoiceAspectId - Optional invoice-position aspect ID, GUID, or name.
 * Returns named FindInfo objects; pass one to findSordsByAspects.
 */
function createAspectSearchExamples(maskId, invoiceAspectId) {
    function key(association, aspect, line) {
        return [association, aspect, line].join('\u00b6');
    }

    function query(aspects, aspectSortOrder = []) {
        return {
            findByIndex: {
                maskId: String(maskId),
                aspects: aspects,
                aspectSortOrder: aspectSortOrder
            },
            findOptions: { searchMode: CONST.SEARCH_MODE.AND }
        };
    }

    var customerKey = key('KUNDENADRESSE', '', 'NAME');
    var articleKey = key('RECHNUNGSPOSITION', '', 'ARTIKELNAME');
    var quantityKey = key('RECHNUNGSPOSITION', '', 'ANZAHL');
    var priceKey = key('RECHNUNGSPOSITION', '', 'PREIS');
    var examples = {
        customerAndPosition: query({
            [customerKey]: {
                condition: { stringValue: { operator: 'EQUALS', operand: 'Huber' } }
            },
            [articleKey]: {
                condition: { stringValue: { operator: 'EQUALS', operand: 'Hammer 500g' } }
            },
            [quantityKey]: {
                condition: { intValue: { operator: 'EQUALS', operand: 10 } }
            }
        }, [
            { key: priceKey, sortOrderSequence: 'DESCENDING_NULLS_LAST' },
            { key: customerKey, sortOrderSequence: 'ASCENDING' }
        ]),
        priceRange: query({
            [priceKey]: {
                condition: {
                    doubleValues: [
                        { operator: 'GREATER', operand: 1 },
                        { operator: 'LOWER', operand: 20 }
                    ]
                }
            }
        }),
        alternativePrices: query({
            [priceKey]: {
                disjunctConditions: [
                    { doubleValue: { operator: 'EQUALS', operand: 0.14 } },
                    { doubleValue: { operator: 'EQUALS', operand: 11.99 } }
                ]
            }
        }),
        articlePrefix: query({
            [articleKey]: {
                condition: { stringValue: { operator: 'LIKE', operand: 'Hammer*' } }
            }
        }),
        missingArticle: query({
            [articleKey]: {
                condition: { stringValue: { operator: 'ISNULL' } }
            }
        }),
        fieldAcrossAspects: query({
            [key('', '', 'ARTIKELNAME')]: {
                condition: { stringValue: { operator: 'EQUALS', operand: 'Hammer 500g' } }
            }
        })
    };

    if (invoiceAspectId !== undefined) {
        examples.fieldAcrossAssociations = query({
            [key('', String(invoiceAspectId), 'ARTIKELNAME')]: {
                condition: { stringValue: { operator: 'EQUALS', operand: 'Hammer 500g' } }
            }
        });
    }
    return examples;
}

/**
 * Execute one aspect search and return all matching Sords.
 * Uses the schema-defined Sord endpoints and closes the search on failure too.
 * sordZ defaults to mbAll so the returned Sords include their aspect metadata.
 */
async function findSordsByAspects(findInfo, sordZ = CONST.SORD.mbAll) {
    return this.findSords(findInfo, sordZ);
}