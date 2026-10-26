# Error Handling

## Response envelope

Every operation returns HTTP 200 with a JSON body that contains either `result`
or `exception`:

```json
{ "exception": "[TICKET:de.elo...][ELOIX:5023]Object not found ...[NO-DETAILS]" }
```

- Check `exception` before using `result`.
- A `result` may be absent or `null` for `void` operations.
- HTTP 4xx/5xx means the request could not be parsed or processed; the body is
  undefined.
- File downloads (`GET .../getstream?...`) report errors only by HTTP status.

`xhr._parseResponse` in [rest-call.js](../../examples/rest/javascript/rest-call.js)
throws an `Error` with the exception text.

## Error codes

The number after `ELOIX:` is the error code. Compare it with
`CONST.IXEXCEPTION`, never with literal numbers:

```javascript
function ixErrorCode(error) {
	var match = /\[ELOIX:(\d+)\]/.exec(error.message || '');
	return match ? Number(match[1]) : null;
}

try {
	docMask = await xhr.restcall('IXServicePortIF/checkoutDocMask', { maskId: name, docMaskZ: CONST.DOC_MASK.mbAll, lockZ: CONST.LOCK.NO });
} catch (e) {
	if (ixErrorCode(e) !== CONST.IXEXCEPTION.NOT_FOUND) throw e;
	docMask = await createDocMask(name);
}
```

| Constant | Typical value | Meaning | Reaction |
| --- | --- | --- | --- |
| `INVALID_PARAM` | 2000 | Invalid parameter | Fix request; check types and names |
| `INVALID_SESSION` | 2001 | Session unknown or expired | Log in again, retry once |
| `TEMP_PROBLEM` | 2003 | Temporary problem | Retry later with backoff |
| `SYNTAX_ERROR` | 2007 | Syntax error, e.g. in a search | Fix query |
| `ALREADY_EXISTS` | 5005 | Object exists | Read existing object or choose another name |
| `LOCKED` | 5022 | Locked by another user | Report; retry later |
| `NOT_FOUND` | 5023 | Object, mask, or field not found | Check ID, GUID, name |
| `ACCESS_DENIED` | | Missing rights | See [Permissions](../concepts/permissions.md) |
| `SCRIPT_ERROR` | 6000 | Error thrown by a server script | Show message |
| `INVALID_LICENSE` | 1002 | License problem | Administrator |

Values can differ between versions; read them from `CONST.IXEXCEPTION`.

## Guidelines

- Only catch errors you can handle; rethrow others.
- Do not swallow exceptions in examples or production code without logging.
- Release locks and close searches in `finally`; see
  [Resource cleanup](resource-cleanup.md).
- Retry only idempotent reads or after `INVALID_SESSION`/`TEMP_PROBLEM`. Do not
  blindly retry check-ins, which may create duplicates.
- Do not log credentials or tickets. Exception texts contain a `[TICKET:...]`
  part; mask it before writing logs.
