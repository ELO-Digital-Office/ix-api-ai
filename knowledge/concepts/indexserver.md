# ELO Indexserver and Its REST API

The ELO Indexserver (IX) is the server component that provides access to an ELO
repository. Its REST API exposes the same interfaces as the Java, JavaScript,
and .NET client libraries, so it can be used from any environment that can send
HTTP requests.

## Endpoint

```text
http://server:port/ix-<repository>/rest
```

The OpenAPI definition of an installation is available at
`http://server:port/ix-<repository>/resources/openapi.json`; the definition for
version 25.0.1.5 is stored in [api/v25.0.1.5/openapi.json](../../api/v25.0.1.5/openapi.json).

## Paths

The URL path of an operation contains the interface name and the function name,
separated by a slash:

```text
http://server:port/ix-repository/rest/IXServicePortIF/checkoutSord
http://server:port/ix-repository/rest/FeedService/findFirstActions
```

Most document management functions belong to `IXServicePortIF`. See
[operations.md](../../api/v25.0.1.5/generated/operations.md) for all interfaces.

## HTTP methods and content types

Every operation is invoked with a POST request. The parameters are wrapped in a
single JSON object in the request body. The member names must match the
parameter names in the API reference. The character encoding must be UTF-8.

The OpenAPI document only declares `application/json`, but requests can also be
sent as `multipart/form-data` to transmit the parameter object and file streams
in one request; see [Documents](../guides/documents.md).

Example: the Java signature

```java
EditInfo createSord(ClientInfo ci, String parentId, String maskId, EditInfoZ editInfoZ)
```

is called as `POST /IXServicePortIF/createSord` with:

```json
{
  "parentId": "1",
  "maskId": "0",
  "editInfoZ": "sord.lean,maskName,mask"
}
```

- The `ci` (`ClientInfo`) parameter can be omitted. If sent, it carries
  `language`, `country`, `timeZone`, and optionally a `ticket`.
- Element selectors (types ending in `Z`, such as `EditInfoZ`, `SordZ`,
  `LockZ`) can be passed as the predefined objects from the constants
  (`CONST.EDIT_INFO.mbSord`) or as comma-separated member names.

## Return values

An operation returns a JSON object with either a `result` or an `exception`
member:

```json
{ "result": { "clientInfo": { "...": "..." }, "ticketLifetime": 486 } }
```

```json
{ "exception": "[TICKET:de.elo...][ELOIX:1002]Keine Lizenz für den Indexserver vorhanden.[NO-DETAILS]" }
```

If the server cannot parse a request, the body is undefined and the HTTP status
is 4xx or 5xx. See [Error handling](../patterns/error-handling.md).

## Constants

Many parameters take constant values: lock modes, element selectors, mask GUIDs,
search flags, error codes. `IXServicePortIF/getConstants` returns all of them and
can be called without authentication. The response is about 60 KB and does not
change for an installation, so read it once and keep it in a global variable,
by convention `CONST`:

```javascript
var CONST = await xhr.restcall('IXServicePortIF/getConstants');
```

Frequently used groups:

| Group | Use |
| --- | --- |
| `CONST.SORD` | `SordZ` selectors such as `mbMin`, `mbLean`, `mbAll` |
| `CONST.EDIT_INFO` | `EditInfoZ` selectors such as `mbSord`, `mbSordLean`, `mbSordContentStream` |
| `CONST.LOCK` | `NO`, `YES`, `IF_FREE`, `FORCE` |
| `CONST.DOC_MASK` | Mask GUIDs (`GUID_BASIC`, `GUID_FOLDER`, ...) and selectors |
| `CONST.DOC_MASK_LINE` | Gen1 index line types and well-known lines (`ID_FILENAME`) |
| `CONST.ASPECT`, `CONST.ASPECT_LINE`, `CONST.INDEXVALUE` | Gen2 metadata |
| `CONST.E_SEARCH_PARAMS`, `CONST.SEARCH_MODE` | Searches |
| `CONST.ACCESS`, `CONST.USER_INFO` | Rights and well-known user IDs |
| `CONST.IXEXCEPTION` | Error codes |

Never hard-code numeric constant values.

## Object identifiers

Parameters such as `objId`, `parentId`, or `maskId` are strings and usually
accept:

- a numeric ID (`"123"`),
- a GUID (`"(E10E1000-E100-E100-E100-E10E10E10E30)"`),
- an archive path (`"ARCPATH:/Folder/Subfolder"`),
- an index value lookup (`"OKEY:ELOINDEX=..."`),
- and for masks also the mask name.

## Related

- [Sord](sord.md)
- [Metadata generations](metadata-generations.md)
- [Permissions](permissions.md)
- [Authentication](../guides/authentication.md)
