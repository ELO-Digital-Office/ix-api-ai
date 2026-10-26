/**
 * Insert a new metadata mask, Gen1.
 * 
 * Arguments:
 * 
 * maskName - The name of the new metadata mask.
 * key1 - The key for the first index field.
 * key2 - The key for the second index field.
 * 
 * Returns:
 *   The created metadata mask object.
 */
async function createDocMask(maskName, key1, key2) {

   	// Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

    // Prepare a new mask object.
    // Just initializes an object and does not store anything in the ELO repository.
    var docMask = await xhr.restcall('IXServicePortIF/createDocMask', {
        maskId: CONST.DOC_MASK.GUID_FOLDER,
    });

    // Assign a name to the mask. The name must be unique in the ELO repository.
    docMask.name = maskName;

    // Mask can be used for folders and documents. 
    docMask.details.folderMask = true;
    docMask.details.documentMask = true;

    // Add two index lines to the mask.
    docMask.lines = [
        {
            name: 'Line 1',
            key: key1,
            type: CONST.DOC_MASK_LINE.TYPE_TEXT
        },
        {
            name: 'Line 2',
            key: key2,
            type: CONST.DOC_MASK_LINE.TYPE_TEXT
        }
    ];

    // Store the mask object in the ELO repository.
    var maskId = await xhr.restcall('IXServicePortIF/checkinDocMask', {
        docMask: docMask,
        docMaskZ: CONST.DOC_MASK.mbAll,
        unlockZ: CONST.LOCK.NO
    });

    // Read the mask object from the ELO repository to verify that it was created successfully.
    docMask = await xhr.restcall('IXServicePortIF/checkoutDocMask', {
        maskId: maskId,
        docMaskZ: CONST.DOC_MASK.mbAll,
        lockZ: CONST.LOCK.NO
    });

    return docMask;
}

/**
 * Create a new Sord object with metadata, Gen1.
 * 
 * Arguments:
 * 
 * maskName - The name of the metadata mask to use.
 * key1 - The key for the first index field.
 * value1 - The value for the first index field.
 * key2 - The key for the second index field.
 * value2 - The value for the second index field.
 * 
 * Returns:
 *   The objId of the newly created Sord object with metadata.
 */
async function createSordWithMetadataGen1(maskName, key1, value1, key2, value2) {
    // Login, see login.js for details.
	// Make sure you have already read the constants into a global variable.

    // Check if the mask already exists. If not, create a new mask with the given name and description.
    var docMask;

    try {
        docMask = await xhr.restcall('IXServicePortIF/checkoutDocMask', {
            maskId: maskName,
            docMaskZ: CONST.DOC_MASK.mbAll,
            lockZ: CONST.LOCK.NO
        });
    } catch (error) {
        // If checkoutDocMask fails, create a new mask
        docMask = await createDocMask(maskName, key1, key2);
    }

    // Create a Sord object with the mask.
    var editInfo = await xhr.restcall('IXServicePortIF/createSord', {
        parentId: config.parentId,
        maskId: docMask.id,
        editInfoZ: CONST.EDIT_INFO.mbSord
    });

    // Assign values to the index fields.
    var sord = editInfo.sord;
    sord.name = 'Document with Metadata ' + new Date().toISOString();
    sord.objKeys[0].data = [value1];
    sord.objKeys[1].data = [value2];

    // Checkin the Sord object to store it in the ELO repository.
    var objId = await xhr.restcall('IXServicePortIF/checkinSord', {
        sord: sord,
        sordZ: CONST.SORD.mbAll,
        unlockZ: CONST.LOCK.NO
    });

    return objId;
}
