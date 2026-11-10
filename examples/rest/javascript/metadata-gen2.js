/**
 * Inserts a new aspect into the repository.
 * The aspect object is assigned to the package level specified by the `level` parameter.
 * 
 * @param {PackageData} packageData Package data containing levels and namespace. See package-gen2.js for the structure of PackageData.
 * @param {number} level The package level number to which the aspect will be assigned, see package-gen2.js for package levels suitable to the AdminConsole.
 * @param {string} name The name of the aspect to be created. It will be prefixed with the package namespace and converted to uppercase.
 * @param {string} nameEN The English name of the aspect to be displayed.
 * @param {string} nameDE The German name of the aspect to be displayed.
 * @param {Array<AspectLine>} aspectLines The lines defining the aspect's structure.
 * @param {Array<TranslateTerm>} translateTerms Array to collect translation terms for later check-in. Output parameter.
 * @returns {Promise<Aspect>} The checked-out aspect object after creation and check-in.
 */
async function createAspectGen2(packageData, level, name, nameEN, nameDE, aspectLines, translateTerms) {

    // Get the package level corresponding to the specified level number.
    var packageLevel = packageData.levels.find(l => l.level === level);
    if (!packageLevel) {
        throw new Error('Package does not have the required level: ' + level);
    }

    var nameUpper = name.toUpperCase();
    var aspectName = packageData.namespace + '.' + nameUpper;
    var aspect = await xhr.restcall('IXServicePortIF/createAspect', {
        name: aspectName,
        lines: aspectLines
    });

    // Always use the package level GUID as the package name for an aspect.
    aspect.packageName = packageLevel.guid;

    aspect.translationKey = packageData.namespace + '.ASPECT.' + nameUpper;
    var translateTerm = makeTranslateTerm(
        aspect.translationKey,
        nameEN,
        nameDE,
        packageData,
        level
    );
    translateTerms.push(translateTerm);

    var aspectId = await xhr.restcall('IXServicePortIF/checkinAspect', {
        aspect: aspect,
        aspectZ: CONST.ASPECT.mbAll,
        unlockZ: CONST.LOCK.NO
    });
    return await xhr.restcall('IXServicePortIF/checkoutAspect', {
        aspectId: String(aspectId),
        aspectZ: CONST.ASPECT.mbAll,
        lockZ: CONST.LOCK.NO
    });
}


/**
 * Create aspects and an aspect mask with generation 2 metadata.
 * Requires login.js, xhr, and constants loaded into CONST.
 * Creating aspects and masks requires the corresponding administrative rights.
 *
 * @param {PackageData} packageData Package data containing levels and namespace.
 * @param {string} maskName A unique mask name. It will be prefixed with the package namespace and converted to uppercase.
 * @returns {Promise<DocMask>} The persisted DocMask object with aspects and aspect associations.
 */
async function createMaskWithMetadataGen2(packageData, maskName) {

    var level = 100;
    var translateTerms = [];

    // Get the package level corresponding to the specified level number.
    var packageLevel = packageData.levels.find(l => l.level === level);
    if (!packageLevel) {
        throw new Error('Package does not have the required level: ' + level);
    }

    // --------------

    // Create aspect ADRESSE
    var addressAspect = await createAspectGen2(packageData, level, 'ADRESSE', 'Address', 'Adresse', [
        makeAspectLine(packageData, level, 'ADRESSE', 'NAME', ASPECT_LINE_UI_TYPE_TEXT, 'default', 'Name', 'Name', translateTerms),
        makeAspectLine(packageData, level, 'ADRESSE', 'PLZ', ASPECT_LINE_UI_TYPE_TEXT, '00000', 'Postleitzahl', 'Postal code', translateTerms),
        makeAspectLine(packageData, level, 'ADRESSE', 'ORT', ASPECT_LINE_UI_TYPE_TEXT, 'default', 'Ort', 'City', translateTerms)
    ], translateTerms);

    // Create aspect RECHNUNGSPOSITION
    var positionAspect = await createAspectGen2(packageData, level, 'RECHNUNGSPOSITION', 'Invoice Position', 'Rechnungsposition', [
        makeAspectLine(packageData, level, 'RECHNUNGSPOSITION', 'POS', ASPECT_LINE_UI_TYPE_INTEGER, '0', 'POS', 'POS', translateTerms),
        makeAspectLine(packageData, level, 'RECHNUNGSPOSITION', 'ARTIKELNUMMER', ASPECT_LINE_UI_TYPE_INTEGER, '0', 'Artikelnummer', 'Article number', translateTerms),
        makeAspectLine(packageData, level, 'RECHNUNGSPOSITION', 'ARTIKELNAME', ASPECT_LINE_UI_TYPE_TEXT, 'default', 'Artikelname', 'Article name', translateTerms),
        makeAspectLine(packageData, level, 'RECHNUNGSPOSITION', 'ANZAHL', ASPECT_LINE_UI_TYPE_INTEGER, '0', 'Anzahl', 'Quantity', translateTerms),
        makeAspectLine(packageData, level, 'RECHNUNGSPOSITION', 'PREIS', ASPECT_LINE_UI_TYPE_NUMBER, '0', 'Preis', 'Price', translateTerms)
    ], translateTerms);

    // --------------
    // Create aspect associations for the ADRESSE and RECHNUNGSPOSITION aspects.

    var addressAssoc = await xhr.restcall('IXServicePortIF/createAspectAssoc', {
        name: 'KUNDENADRESSE',
        aspectId: String(addressAspect.id),
        cardinality: 'MANDATORY'
    });

    addressAssoc.packageName = packageLevel.guid;
    addressAssoc.translationKey = packageData.namespace + '.ASPECTASSOC.' + addressAspect.name;
    var translateTerm = makeTranslateTerm(
        addressAssoc.translationKey,
        'Customer address',
        'Kundenadresse',
        packageData,
        level
    );
    translateTerms.push(translateTerm);

    var positionAssoc = await xhr.restcall('IXServicePortIF/createAspectAssoc', {
        name: 'RECHNUNGSPOSITION',
        aspectId: String(positionAspect.id),
        cardinality: 'OPTIONAL_MANY'
    });

    positionAssoc.packageName = packageLevel.guid;
    positionAssoc.translationKey = packageData.namespace + '.ASPECTASSOC.' + positionAspect.name;
    translateTerm = makeTranslateTerm(
        positionAssoc.translationKey,
        'Invoice position',
        'Rechnungsposition',
        packageData,
        level
    );
    translateTerms.push(translateTerm);

    // --------------
    // Create the mask.

    // Create the mask with the associated aspects.
    var docMask = await xhr.restcall('IXServicePortIF/createAspectMask', {
        name: packageData.namespace + '.' + maskName.toUpperCase(),
        aspectAssocs: [addressAssoc, positionAssoc],
    });

    // The mask can be used for folders and documents.
    docMask.details.folderMask = true;
    docMask.details.documentMask = true;
    docMask.packageName = packageLevel.guid;

    // Create a translation term for the mask name.
    docMask.nameTranslationKey = packageData.namespace + '.DOCMASK.' + maskName.toUpperCase();
    translateTerm = makeTranslateTerm(
        docMask.nameTranslationKey,
        'Invoice',
        'Rechnung',
        packageData,
        level
    );
    translateTerms.push(translateTerm);

    var maskId = await xhr.restcall('IXServicePortIF/checkinDocMask', {
        docMask: docMask,
        docMaskZ: CONST.DOC_MASK.mbAll,
        unlockZ: CONST.LOCK.NO
    });

    // ---------------
    // Insert translation terms
    await xhr.restcall('IXServicePortIF/checkinTranslateTerms', {
        tterms: translateTerms,
        unlockZ: CONST.LOCK.NO
    });

    // --------------
    // Read and return the mask.

    docMask = await xhr.restcall('IXServicePortIF/checkoutDocMask', {
        maskId: String(maskId),
        docMaskZ: CONST.DOC_MASK.mbAll,
        lockZ: CONST.LOCK.NO
    });

    return docMask;
}

/**
 * Represents a UI type for an aspect line, including the Indexserver type constant
 * and the ELO base subType for metadata generation.
 */
class AspectLineUIType {
    /**
     * @param {string} subType The ELO base subType (e.g., 'elo.base.Text')
     * @param {string} label Human-readable label for the UI type
     * @param {number} ixTypeConstant The Indexserver type constant (e.g., CONST.ASPECT_LINE.TYPE_TEXT)
     */
    constructor(subType, label, ixTypeConstant) {
        this.subType = subType;
        this.label = label;
        this.ixTypeConstant = ixTypeConstant;
    }
}

const ASPECT_LINE_UI_TYPE_TEXT = new AspectLineUIType(
    "elo.base.Text",
    "General text",
    3100 // CONST.ASPECT_LINE.TYPE_TEXT
);

const ASPECT_LINE_UI_TYPE_INTEGER = new AspectLineUIType(
    "elo.base.Integer",
    "Integer",
    3113 // CONST.ASPECT_LINE.TYPE_INTEGER
);

const ASPECT_LINE_UI_TYPE_NUMBER = new AspectLineUIType(
    "elo.base.Number",
    "Floating-point number",
    3116 // CONST.ASPECT_LINE.TYPE_DOUBLE
);

const ASPECT_LINE_UI_TYPE_DATE = new AspectLineUIType(
    "elo.base.Date",
    "Date",
    3130 // CONST.ASPECT_LINE.TYPE_ISO_DATE_ONLY
);

const ASPECT_LINE_UI_TYPE_DATETIME = new AspectLineUIType(
    "elo.base.DateTime",
    "Date and time",
    3131 // CONST.ASPECT_LINE.TYPE_ISO_DATE_TIME
);

const ASPECT_LINE_UI_TYPE_CHOICE = new AspectLineUIType(
    "elo.base.Choice",
    "Pick list",
    3132 // CONST.ASPECT_LINE.TYPE_STATUS
);

const ASPECT_LINE_UI_TYPE_RELATION = new AspectLineUIType(
    "elo.base.Relation",
    "Relation",
    3118 // CONST.ASPECT_LINE.TYPE_RELATION
);

const ASPECT_LINE_UI_TYPE_USER = new AspectLineUIType(
    "elo.base.User",
    "User",
    3106 // CONST.ASPECT_LINE.TYPE_USER
);

const ASPECT_LINE_UI_TYPE_MAIL = new AspectLineUIType(
    "elo.base.Mail",
    "E-mail address",
    3100 // CONST.ASPECT_LINE.TYPE_TEXT
);

const ASPECT_LINE_UI_TYPE_URL = new AspectLineUIType(
    "elo.base.Url",
    "URL",
    3100 // CONST.ASPECT_LINE.TYPE_TEXT
);

const ASPECT_LINE_UI_TYPE_CHECKBOX = new AspectLineUIType(
    "elo.base.Checkbox",
    "Check box",
    3113 // CONST.ASPECT_LINE.TYPE_INTEGER
);

const ASPECT_LINE_UI_TYPE_LONGTEXT = new AspectLineUIType(
    "elo.base.LongText",
    "Long text",
    3100 // CONST.ASPECT_LINE.TYPE_TEXT
);

const ASPECT_LINE_UI_TYPE_TIME = new AspectLineUIType(
    "elo.base.Time",
    "Time",
    3133 // CONST.ASPECT_LINE.TYPE_TIME
);

const ASPECT_LINE_UI_TYPE_FIXEDPOINTNUMBER = new AspectLineUIType(
    "elo.base.FixedPointNumber",
    "Large decimal number",
    3134 // CONST.ASPECT_LINE.TYPE_FIXED_POINT_NUMBER
);

const ASPECT_LINE_UI_TYPE_TEL = new AspectLineUIType(
    "elo.base.Tel",
    "Phone number",
    3100 // CONST.ASPECT_LINE.TYPE_TEXT
);

/**
 * Create an aspect line object with the specified key, UI type, and default value.
 * @param {PackageData} packageData Gen2 package data.
 * @param {number} level The package level for the aspect line.
 * @param {string} aspectName The name of the aspect. This name might include the package namespace as a prefix.
 * @param {string} key The key for the aspect line.
 * @param {AspectLineUIType} uiType The UI type for the aspect line.
 * @param {string|number|null} defaultValue The default value for the aspect line.
 * @param {string} nameEn The English translation for the aspect line name.
 * @param {string} nameDe The German translation for the aspect line name.
 * @param {Array<Object>} translateTerms The array to store translation terms.
 * @returns {Object} The initialized aspect line object.
 */
function makeAspectLine(packageData, level, aspectName, key, uiType, defaultValue, nameEn, nameDe, translateTerms) {

    // Remove the package namespace from the aspect name if it is present.
    var cleanAspectName = aspectName.startsWith(packageData.namespace + '.') ? aspectName.substring(packageData.namespace.length + 1) : aspectName;

    var translateName = makeTranslateTerm(
        packageData.namespace + '.FIELD.' + cleanAspectName + '.' + key,
        nameEn || '',
        nameDe || '',
        packageData,
        level
    );
    translateTerms.push(translateName);

    var translateComment = makeTranslateTerm(
        packageData.namespace + '.FIELD_HINT.' + cleanAspectName + '.' + key,
        '',
        '',
        packageData,
        level
    );
    translateTerms.push(translateComment);

    return {
        key: key,
        type: uiType.ixTypeConstant,
        subType: uiType.subType,
        defaultValue: defaultValue,
        nameTranslationKey: translateName.translationKey,
        commentTranslationKey: translateComment.translationKey
    };
}


/**
 * Create and populate a Sord with generation 2 metadata using an existing mask.
 * Requires login.js, xhr, config.parentId, and constants loaded into CONST.
 *
 * @param {DocMask} docMask The mask created by createMaskWithMetadataGen2.
 * @returns {Promise<Sord>} The persisted Sord after updating and verifying an invoice price.
 *         The Sord and its aspects remain in the repository for inspection.
 */
async function createSordWithMetadataGen2(docMask) {

    var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
        parentId: String(config.parentId),
        maskId: String(docMask.id),
        editInfoZ: CONST.EDIT_INFO.mbSord
    });
    var sord = editInfo.sord;
    sord.name = 'Invoice with generation 2 metadata';

    var customerAddress = sord.aspects.KUNDENADRESSE[0];
    customerAddress.NAME.stringValue = 'Huber';
    customerAddress.PLZ.stringValue = '70178';
    customerAddress.ORT.stringValue = 'Stuttgart';

    sord.aspects.RECHNUNGSPOSITION = [
        {
            POS: { type: CONST.INDEXVALUE.TYPE_INT, intValue: 1 },
            ARTIKELNUMMER: { type: CONST.INDEXVALUE.TYPE_INT, intValue: 450000 },
            ARTIKELNAME: { type: CONST.INDEXVALUE.TYPE_STRING, stringValue: 'Schraube M5' },
            ANZAHL: { type: CONST.INDEXVALUE.TYPE_INT, intValue: 500 },
            PREIS: { type: CONST.INDEXVALUE.TYPE_DOUBLE, doubleValue: 0.14 }
        },
        {
            POS: { type: CONST.INDEXVALUE.TYPE_INT, intValue: 2 },
            ARTIKELNUMMER: { type: CONST.INDEXVALUE.TYPE_INT, intValue: 6000 },
            ARTIKELNAME: { type: CONST.INDEXVALUE.TYPE_STRING, stringValue: 'Hammer 500g' },
            ANZAHL: { type: CONST.INDEXVALUE.TYPE_INT, intValue: 10 },
            PREIS: { type: CONST.INDEXVALUE.TYPE_DOUBLE, doubleValue: 9.99 }
        }
    ];

    var objId = await xhr.restcall('IXServicePortIF/checkinSord', {
        sord: sord,
        sordZ: CONST.SORD.mbAll,
        unlockZ: CONST.LOCK.NO
    });
    editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
        objId: String(objId),
        editInfoZ: CONST.EDIT_INFO.mbSord,
        lockZ: CONST.LOCK.YES
    });
    sord = editInfo.sord;
    sord.aspects.RECHNUNGSPOSITION[1].PREIS = {
        type: CONST.INDEXVALUE.TYPE_DOUBLE,
        doubleValue: 11.99
    };
    await xhr.restcall('IXServicePortIF/checkinSord', {
        sord: sord,
        sordZ: CONST.SORD.mbAll,
        unlockZ: CONST.LOCK.YES
    });
    editInfo = await xhr.restcall('IXServicePortIF/checkoutSord', {
        objId: String(objId),
        editInfoZ: CONST.EDIT_INFO.mbSord,
        lockZ: CONST.LOCK.NO
    });
    sord = editInfo.sord;
    if (sord.aspects.RECHNUNGSPOSITION[1].PREIS.doubleValue !== 11.99) {
        throw new Error('The invoice position price was not updated.');
    }
    return sord;
}