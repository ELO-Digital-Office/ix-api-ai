# Metadata Generation 2 (Aspects)

Example: [metadata-gen2.js](../../examples/rest/javascript/metadata-gen2.js).
Background: [Metadata generations](../concepts/metadata-generations.md).

## Prerequisites

Creating aspects and aspect masks requires:
- Administrative rights
- An existing package with configured package levels

Create a package first with [package-gen2.js](../../examples/rest/javascript/package-gen2.js):

```javascript
var packageData = await createPackage('MY_NAMESPACE', 'MyPackageName');
```

The package provides the namespace and levels into which aspects are organized.

## Usage

After login, loading `CONST`, setting `config.parentId`, and having a package:

```javascript
var packageData = await createPackage('MY_NAMESPACE', 'MyPackage');
var docMask = await createMaskWithMetadataGen2(packageData, 'MyMaskName');
var sord = await createSordWithMetadataGen2(docMask);
console.log(sord.id, sord.aspects.RECHNUNGSPOSITION[1].PREIS.doubleValue);
```

## Steps in the example

### Step 1: Create a package (one-time)

```javascript
var packageData = await createPackage('INVOICE', 'InvoicePackage');
```

The package provides the namespace and predefined package levels (100, 400, 500, 900)
into which aspects are organized.

### Step 2: Create the mask and aspects

```javascript
var docMask = await createMaskWithMetadataGen2(packageData, 'InvoiceMask_' + Date.now());
```

The `createMaskWithMetadataGen2` function:

1. Creates aspects with `createAspect` and `checkinAspect`:
   - `ADRESSE` with fields `NAME`, `PLZ`, `ORT`
   - `RECHNUNGSPOSITION` with fields `POS`, `ARTIKELNUMMER`, `ARTIKELNAME`, `ANZAHL`, `PREIS`
2. Creates aspect associations with `createAspectAssoc`:
   - `KUNDENADRESSE` (`MANDATORY`) — one customer address per Sord
   - `RECHNUNGSPOSITION` (`OPTIONAL_MANY`) — multiple invoice positions per Sord
3. Creates the mask with `createAspectMask` and stores it with `checkinDocMask`.

### Step 3: Create a Sord using the mask

```javascript
var sord = await createSordWithMetadataGen2(docMask);
```

The `createSordWithMetadataGen2` function:

1. Creates a Sord using `createSord` with the mask ID.
2. Fills `sord.aspects` with customer address and invoice position data.
3. Checks in the Sord with `checkinSord`.
4. Checks out with `CONST.LOCK.YES`, updates a price, checks in with
   `unlockZ: CONST.LOCK.YES`, and verifies the updated value `11.99`.

## Rules

- Use `Sord.aspects[associationName]`, an array of aspect objects keyed by
  field key, instead of `Sord.objKeys`.
- Pass cardinalities as strings. `MANDATORY` creates an initial aspect object;
  with defaults on the aspect lines, its values are initialized too.
  `OPTIONAL_MANY` requires adding the aspect objects explicitly.
- Set `IndexValue.type` from `CONST.INDEXVALUE` and fill the matching
  `stringValue`, `intValue`, or `doubleValue`. Aspect line types come from
  `CONST.ASPECT_LINE`, a different set of constants.
- REST `createSord` returns `EditInfo`; use its `sord` property.
- Pass IDs as strings (`String(aspectId)`).

```javascript
var address = sord.aspects.KUNDENADRESSE[0];
address.NAME.stringValue = 'Huber';

sord.aspects.RECHNUNGSPOSITION = [{
	POS:         { type: CONST.INDEXVALUE.TYPE_INT,    intValue: 1 },
	ARTIKELNAME: { type: CONST.INDEXVALUE.TYPE_STRING, stringValue: 'Hammer 500g' },
	ANZAHL:      { type: CONST.INDEXVALUE.TYPE_INT,    intValue: 10 },
	PREIS:       { type: CONST.INDEXVALUE.TYPE_DOUBLE, doubleValue: 9.99 }
}];
```

## Cleanup

The example leaves the Sord, mask, and aspects in the repository for
inspection, also when an error occurs. To remove demo data, delete in this
order:

1. the Sord,
2. the mask (and its associations),
3. the aspects, which must no longer be referenced by a mask.

## Search

See [Search](search.md#generation-2-aspect-search) and
[find-aspects.js](../../examples/rest/javascript/find-aspects.js).
