# Authentication and Session

Examples: `examples/rest/javascript/login.js`, `rest-call.js`, `config.js`.
Details: `knowledge/guides/authentication.md`.

## Methods

| `config.authenticationMethod` | Mechanism | Login call |
| --- | --- | --- |
| `'Basic'` | `Authorization: Basic base64(user:pwd)` on every request | None; the server caches the connection per client IP and header |
| `'Bearer'` | `login` with `ci.ticket = ''`, then `Authorization: Bearer <loginResult.clientInfo.ticket>` | Yes |
| `'API Key'` | `login` without `ci.ticket`; server sets `JSESSIONID` cookie and returns `ELO-Approved`, which must be sent as header | Yes (browser only) |

- Use cookie authentication in browsers (CSRF protection via `ELO-Approved`).
  Basic and Bearer are for services.
- Use HTTPS; `login` transmits the password in plain text.
- Sessions expire after 10 minutes idle -> `[ELOIX:2001]` `INVALID_SESSION`.
  Re-login and retry once.

## Login

```javascript
var loginResult = await xhr.restcall('IXServicePortIF/login', {
	ci: { language: 'en', country: 'US', timeZone: 'UTC', ticket: '' },
	userName: user,
	userPwd: password,
	clientComputer: 'REST Client',
	runAs: ''                      // admin: open the session as another user
});
config.ticket = loginResult.clientInfo.ticket;   // Bearer
CONST = await xhr.restcall('IXServicePortIF/getConstants');
```

`LoginResult` contains `clientInfo`, `ticketLifetime`, and `user` (`UserInfo`
with rights in `flags`/`flags2`).

## Constants

`getConstants` works without login, returns about 60 KB, and never changes for
an installation. Load once, store in `CONST`, reuse. Key groups: `SORD`,
`EDIT_INFO`, `LOCK`, `DOC_MASK`, `DOC_MASK_LINE`, `ASPECT`, `ASPECT_LINE`,
`INDEXVALUE`, `E_SEARCH_PARAMS`, `SEARCH_MODE`, `ACCESS`, `USER_INFO`,
`WORKFLOW_TYPE`, `WORKFLOW_NODE`, `IXEXCEPTION`.

## ClientInfo

`ci` is optional. Without it, the server uses `language=en`, `country=US`,
`timeZone=UTC`. Send it to localize mask names and messages or to set the time
zone for date values.

## Logout

`IXServicePortIF/logout` ends cookie and Bearer sessions.

## Rules

- Load credentials from the environment or a secret store; never hard-code
  them. The demo values in `config.js` are placeholders.
- Do not log tickets; exception texts contain `[TICKET:...]`.
- CORS for browser apps from another origin: `Access-Control-Allow-Origin`
  entry in the Indexserver `config.xml`.
