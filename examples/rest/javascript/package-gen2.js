/**
 * Creates a new package with the specified namespace and name.
 * Adds one package level object on level 100.
 * @param {string} packageNamespace - The namespace of the package.
 * @param {string} packageName - The name of the package.
 * @returns {Promise<Object>} The created package object.
 */
async function createPackage(packageNamespace, packageName) {

    // ----------------

    // Create the package with the specified name.
    // Maximum name length = 255 characters.
    var packageData = await xhr.restcall('PackageService/createPackage', {
        nameOrGuid: packageName
    });

    // Convention: Namespaces should be uppercase.
    // Maximum length = 40 characters.
    packageData.setNamespace(packageNamespace.toUpperCase());

    // Set the package description to indicate it was created programmatically.
    packageData.setDescription('This package was created programmatically.');

    // Set the package maintainer to indicate who is responsible for this package.
    // Maximum length = 255 characters.
    packageData.setMaintainer('Maintainer or ' + packageNamespace);

    // Set the initial package version.
    // This value is for documentation purposes and is not evaluated by the system.
    // Maximum length = 30 characters.
    packageData.setPkgVersion('1.0');

    // ----------------

    // Add the predefined package levels used in the AdminConsole.
    packageData.levels = [{
        name: 'Basic',
        level: 100
    }, {
        name: 'Enhancement',
        level: 400
    }, {
        name: 'Custom',
        level: 500
    }, {
        name: 'Staging',
        level: 900
    }];

    // ----------------

    // Save the package with the updated levels.
    var packageGuid = await xhr.restcall('PackageService/checkinPackage', {
        data: packageData,
        packageZ: CONST.PACKAGE.mbAll,
        unlockZ: CONST.LOCK.NO
    });

    // Read the package to get the data added by Indexserver.
    var packageResult = await xhr.restcall('PackageService/checkoutPackages', {
        checkoutInfo: {
            nameOrGuids: [packageGuid]
        },
        packageZ: CONST.PACKAGE.mbAll,
        lockZ: CONST.LOCK.NO
    });

    return packageResult.packageDataList[0];
}