# Localization

Examples: `examples/rest/javascript/localization.js`, `metadata-gen2.js`.

Display names of masks, fields, aspects, keyword lists, and Sord types are
not stored per language on the object. The object stores a *translation key*;
the Indexserver resolves it to the client's language.

## How resolution works

- The client language comes from `ci.language` (see
  [authentication.md](authentication.md)). Without `ci`, `en` is used.
- Read-only `displayName`/`displayComment` members contain the resolved text,
  e.g. `Aspect.displayName` from `Aspect.translationKey`. Never write them.
- Languages are IETF tags (`de`, `de-DE`, `de-CH`). Lookup order for `de-CH`:
  `de-CH` -> `de` -> first tag with language `de` -> first system language.
- Two sources are searched; database terms are returned first:
  - database table `translations`, written with `checkinTranslateTerms`
    (effective immediately),
  - property files under `/Administration/Localization` in the repository
    (changed only by checkin/checkout, effective after Indexserver restart).

## Translation key members

| Object | Members |
| --- | --- |
| `Aspect` | `translationKey` |
| `AspectAssoc` | `translationKey` |
| `AspectLine` | `nameTranslationKey`, `commentTranslationKey` |
| `DocMask` | `nameTranslationKey`, `textTranslationKey` (tab captions) |
| `DocMaskLine` | `nameTranslationKey`, `commentTranslationKey` |
| `KeywordList` | `nameTranslationKey` |
| `SordType` | `nameTranslationKey` |

These members take the key string, not a `TranslateTerm` object.

Key naming convention of the AdminConsole for Gen2 entities (prefix with the
package namespace):

| Entity | Key |
| --- | --- |
| Mask | `<namespace>.DOCMASK.<mask-name>` |
| Aspect | `<namespace>.ASPECT.<aspect-name>` |
| Aspect line | `<namespace>.FIELD.<aspect-name>.<line-key>` |
| Aspect line comment | `<namespace>.FIELD_HINT.<aspect-name>.<line-key>` |
| Aspect association | `<namespace>.ASPECTASSOC.<aspect-name>` |

Allowed key characters (`CONST.TRANSLATE_TERM.TRANSLATION_KEY_REGEX`):
`[a-zA-Z0-9/\-_.:]*`. Dots are allowed, although the API description omits
them.

## `TranslateTerm`

`langs` and `termLangs` are parallel arrays: `termLangs[i]` is the text for
`langs[i]`. `packageName` (package GUID) and `level` (int) assign the term to
a package level.

```javascript
var ids = await xhr.restcall('IXServicePortIF/checkinTranslateTerms', {
	tterms: [{
		translationKey: 'MYPKG.ASPECT.MYPKG.ADDRESS',
		langs: ['en', 'de-DE'],
		termLangs: ['Address', 'Adresse'],
		packageName: packageData.guid,
		level: 100
	}],
	unlockZ: CONST.LOCK.NO
});
```

## Operations

| Operation | Parameters | Result |
| --- | --- | --- |
| `checkinTranslateTerms` | `tterms`, `unlockZ` | term IDs (`string[]`) |
| `checkoutTranslateTerms` | `termIds`, `lockZ` | `TranslateTerm[]` |
| `deleteTranslateTerms` | `termIds`, `unlockZ` | - |
| `findFirstTranslateTerms` | `findInfo: FindTranslateTermInfo`, `max` | `FindResult.translateTerms` |
| `findNextTranslateTerms` | `searchId`, `idx`, `max` | `FindResult.translateTerms` |

`FindTranslateTermInfo`: `translationKeyPrefixes` (prefix match), `langs`,
`terms`, `packageName`, `level`, `disableFallback`. Page with
`moreResults`/`searchId` and always call `findClose` (see `localization.js`).
`translateTerms` can be missing on an empty page.

## Pitfalls

- Create the terms together with the objects that reference them. A missing
  term shows the key (or the technical name) in the client.
- Set `AspectLine.commentTranslationKey` to `''` if unused; `null` can cause
  a server-side exception when creating aspects.
- A prefix search can return more terms than keys passed; do not size `max`
  by the number of keys.
