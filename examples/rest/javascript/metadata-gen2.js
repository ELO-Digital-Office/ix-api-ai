/**
 * Create aspects, an aspect mask, and a Sord with generation 2 metadata.
 * Requires login.js, xhr, config.parentId, and constants loaded into CONST.
 *
 * maskName - A unique mask name; defaults to a timestamp-based demo name.
 * Returns the persisted Sord after updating and verifying an invoice price.
 * The Sord, mask, and aspects remain in the repository for inspection.
 * Creating aspects and masks requires the corresponding administrative rights.
 */
async function createSordWithMetadataGen2(maskName = 'Metadata Gen2 ' + Date.now()) {
    function aspectLine(key, type, defaultValue) {
        return {
            key: key,
            displayName: key,
            type: type,
            defaultValue: defaultValue
        };
    }

    async function createAndCheckinAspect(name, lines) {
        var aspect = await xhr.restcall('IXServicePortIF/createAspect', {
            name: name,
            lines: lines
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

    var address = await createAndCheckinAspect(maskName + ' Adresse', [
        aspectLine('NAME', CONST.ASPECT_LINE.TYPE_TEXT, 'default'),
        aspectLine('PLZ', CONST.ASPECT_LINE.TYPE_TEXT, '00000'),
        aspectLine('ORT', CONST.ASPECT_LINE.TYPE_TEXT, 'default')
    ]);
    var invoicePosition = await createAndCheckinAspect(maskName + ' Rechnungsposition', [
        aspectLine('POS', CONST.ASPECT_LINE.TYPE_INTEGER, '0'),
        aspectLine('ARTIKELNUMMER', CONST.ASPECT_LINE.TYPE_INTEGER, '0'),
        aspectLine('ARTIKELNAME', CONST.ASPECT_LINE.TYPE_TEXT, 'default'),
        aspectLine('ANZAHL', CONST.ASPECT_LINE.TYPE_INTEGER, '0'),
        aspectLine('PREIS', CONST.ASPECT_LINE.TYPE_DOUBLE, '0')
    ]);

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
    var docMask = await xhr.restcall('IXServicePortIF/createAspectMask', {
        name: maskName,
        aspectAssocs: [addressAssoc, invoicePositionAssoc]
    });
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