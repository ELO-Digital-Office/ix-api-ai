/**
 * Stores the translation of the given terms for multiple languages.
 * 
 * A translation key for a Gen.2 entity should be prefixed at least by the package namespace.
 * The AdminConsole uses a convention for naming translation keys:
 * Mask: <package-namespace>.DOCMASK.<mask-name>
 * Aspect: <package-namespace>.ASPECT.<aspect-name>
 * Aspect line: <package-namespace>.FIELD.<aspect-name>.<line-key>
 * Aspect line comment: <package-namespace>.FIELD_HINT.<aspect-name>.<line-key>
 * Aspect association: <package-namespace>.ASPECTASSOC.<aspect-name>
 * 
 * @param {string} translationKey - The key for the translation term.
 * @param {string} termEn - The term in English.
 * @param {string} termDe - The term in German.
 * @param {PackageData} packageData - The package data if the term shall be associated with a specific package.
 * @param {number} level - The package level for the translation term if the term shall be associated with a specific package level.
 * @returns {Promise<string>} The ID of the created translation term.
 */
async function createTranslationTerm(translationKey, termEn, termDe, packageData, level) {
    var translateTerm = makeTranslateTerm(translationKey, termEn, termDe, packageData, level);

    var ids = await xhr.restcall('IXServicePortIF/checkinTranslateTerms', {
        tterms: [translateTerm],
        unlockZ: CONST.LOCK.NO
    });

    return ids[0];
}

/**
 * Initialize a translation term object.
 * @param {string} translationKey The key for the translation term.
 * @param {string} termEn The term in English.
 * @param {string} termDe The term in German.
 * @param {PackageData} packageData The package data if the term shall be associated with a specific package.
 * @param {number} level The package level for the translation term if the term shall be associated with a specific package level.
 * @returns {Object} The initialized translation term object.
 */
function makeTranslateTerm(translationKey, termEn, termDe, packageData, level) {
    var translateTerm = {
        translationKey: translationKey,
        langs: ['en', 'de'],
        termLangs: [termEn, termDe]
    };

    if (packageData) {
        translateTerm.packageName = packageData.guid;
    }
    if (level) {
        translateTerm.level = level;
    }

    return translateTerm;
}

/**
 * Find the translations for the given translation keys and language.
 * 
 * @param {Array<string>} translationKeys The translation keys to search for. The function finds also the keys that start with the given values.
 * @param {string} lang The language code to search for.
 * @returns {Promise<Object>} A map of translation keys to found terms.
 */
async function findTranslations(translationKeys, lang) {
    var translationMap = {};

    var findInfo = {
        translationKeyPrefixes: translationKeys,
        langs: [lang]
    };
    var findResult = await xhr.restcall('IXServicePortIF/findFirstTranslateTerms', {
        findInfo: findInfo,
        max: 1000
    });

    var searchId = findResult.searchId;
    try {
        // Loop to fetch all result pages.
        var index = 0;
        while (true) {

            // Add the translation terms 
            var terms = findResult.translateTerms || [];
            for (var term of terms) {
                translationMap[term.translationKey] = term.termLangs[0];
            }

            // No more results?
            if (!findResult.moreResults) {
                break;
            }

            // Next index for fetching more results
            index += terms.length;

            // Fetch the next set of results if available.
            findResult = await xhr.restcall('IXServicePortIF/findNextTranslateTerms', {
                searchId: searchId,
                idx: index,
                max: 1000
            });
        }
    } finally {
        // Always close the find operation to release resources.
        await xhr.restcall('IXServicePortIF/findClose', {
            searchId: searchId
        });
    }

    return translationMap;
}