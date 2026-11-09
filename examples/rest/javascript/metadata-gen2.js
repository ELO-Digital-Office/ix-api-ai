/**
 * Inserts a new aspect into the repository.
 * The aspect object is assigned to the package level specified by the `level` parameter.
 * 
 * @param {PackageData} packageData Package data containing levels and namespace. See package-gen2.js for the structure of PackageData.
 * @param {number} level The package level number to which the aspect will be assigned, see package-gen2.js for package levels suitable to the AdminConsole.
 * @param {string} name The name of the aspect to be created. It will be prefixed with the package namespace and converted to uppercase.
 * @param {Array<AspectLine>} aspectLines The lines defining the aspect's structure.
 * @returns {Promise<Aspect>} The checked-out aspect object after creation and check-in.
 */
async function createAspectGen2(packageData, level, name, aspectLines) {

    // Get the package level corresponding to the specified level number.
    var packageLevel = packageData.levels.find(l => l.level === level);
    if (!packageLevel) {
        throw new Error('Package does not have the required level: ' + level);
    }

    var aspect = await xhr.restcall('IXServicePortIF/createAspect', {
        name: packageData.namespace + '.' + name.toUpperCase(),
        lines: aspectLines,
        packageName: packageLevel.guid // Always use the package level GUID as the package name for an aspect.
    });
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

    // Creates an aspect line object with the specified key, type, and default value.
    function aspectLine(key, type, defaultValue) {
        return {
            key: key,
            displayName: key,
            type: type,
            defaultValue: defaultValue,
            nameTranslationKey: '',
            commentTranslationKey: ''
        };
    }

    // Create aspect ADRESSE
    var address = await createAspectGen2(packageData, 100, 'ADRESSE', [
        aspectLine('NAME', CONST.ASPECT_LINE.TYPE_TEXT, 'default'),
        aspectLine('PLZ', CONST.ASPECT_LINE.TYPE_TEXT, '00000'),
        aspectLine('ORT', CONST.ASPECT_LINE.TYPE_TEXT, 'default')
    ]);

    // Create aspect RECHNUNGSPOSITION
    var invoicePosition = await createAspectGen2(packageData, 100, 'RECHNUNGSPOSITION', [
        aspectLine('POS', CONST.ASPECT_LINE.TYPE_INTEGER, '0'),
        aspectLine('ARTIKELNUMMER', CONST.ASPECT_LINE.TYPE_INTEGER, '0'),
        aspectLine('ARTIKELNAME', CONST.ASPECT_LINE.TYPE_TEXT, 'default'),
        aspectLine('ANZAHL', CONST.ASPECT_LINE.TYPE_INTEGER, '0'),
        aspectLine('PREIS', CONST.ASPECT_LINE.TYPE_DOUBLE, '0')
    ]);

    // Create aspect associations for the ADRESSE and RECHNUNGSPOSITION aspects.
    var addressAssoc = await xhr.restcall('IXServicePortIF/createAspectAssoc', {
        name: 'KUNDENADRESSE',
        aspectId: String(address.id),
        cardinality: 'MANDATORY'
    });
    var invoicePositionAssoc = await xhr.restcall('IXServicePortIF/createAspectAssoc', {
        name: 'RECHNUNGSPOSITION',
        aspectId: String(invoicePosition.id),
        cardinality: 'OPTIONAL_MANY'
    });

    // Create the mask with the associated aspects.
    var docMask = await xhr.restcall('IXServicePortIF/createAspectMask', {
        name: packageData.namespace + '.' + maskName.toUpperCase(),
        aspectAssocs: [addressAssoc, invoicePositionAssoc]
    });

    // The mask can be used for folders and documents.
    docMask.details.folderMask = true;
    docMask.details.documentMask = true;

    var maskId = await xhr.restcall('IXServicePortIF/checkinDocMask', {
        docMask: docMask,
        docMaskZ: CONST.DOC_MASK.mbAll,
        unlockZ: CONST.LOCK.NO
    });
    docMask = await xhr.restcall('IXServicePortIF/checkoutDocMask', {
        maskId: String(maskId),
        docMaskZ: CONST.DOC_MASK.mbAll,
        lockZ: CONST.LOCK.NO
    });

    return docMask;
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