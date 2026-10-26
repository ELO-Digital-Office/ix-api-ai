# Authentication

Example: [login.js](../../examples/rest/javascript/login.js),
request helper: [rest-call.js](../../examples/rest/javascript/rest-call.js).

The Indexserver REST API supports three authentication methods.

| Method | Use for | How |
| --- | --- | --- |
| Session cookie (`API Key`) | Browser applications | `login` sets the `JSESSIONID` cookie and returns an `ELO-Approved` value |
| Bearer ticket | Services | `login` with an empty `ci.ticket` returns a ticket; send `Authorization: Bearer <ticket>` |
| Basic | Services, scripts | Send `Authorization: Basic <base64(user:password)>` with each request; no login call |

Only send credentials over HTTPS.

## Browser applications: session cookie

The `JSESSIONID` cookie together with the `ELO-Approved` header authenticates
requests. Both must be sent with each request. The `ELO-Approved` header protects
against CSRF; the server only accepts it as a header, even if it also sets it as
a cookie.

Create the session with `login` (or `loginAdmin`). Do not send a `ticket` in
`ClientInfo`; the server then returns the placeholder ticket
`de.elo.ix.client.ticket_from_cookie`:

```json
POST /IXServicePortIF/login
{
  "ci": { "language": "de", "country": "DE", "timeZone": "UTC" },
  "userName": "Administrator",
  "userPwd": "...",
  "clientComputer": "REST Client",
  "runAs": ""
}
```

The response sets the cookies and the `ELO-Approved` header:

```http
HTTP/1.1 200
Set-Cookie: JSESSIONID=65934F6BC05C0CB725FFE2870F9EEA3.ELO-1; Path=/ix-elo200; HttpOnly
Set-Cookie: ELO-Approved=616FABF4E701805574A4A3013192F545; Path=/ix-elo200
ELO-Approved: 616FABF4E701805574A4A3013192F545
Content-Type: application/json;charset=UTF-8

{"result":{"clientInfo":{"ticket":"de.elo.ix.client.ticket_from_cookie", ...},"ticketLifetime":486,"user":{...}}}
```

Sessions are invalidated after 10 minutes of idle time. An unknown session
causes `[ELOIX:2001]` (`INVALID_SESSION`).

## Services: Bearer and Basic

Basic and Bearer authentication are discouraged in browsers because they have no
CSRF protection.

If an `Authorization` header is sent, the first call checks the credentials or
ticket and creates a connection that the Indexserver caches internally. It is
reused for subsequent calls from the same client IP address with the same
header. An explicit `login` is not required for Basic, and `ClientInfo` can be
omitted; the default is `language=en`, `country=US`, `timeZone=UTC`.

For Bearer, call `login` with `ci.ticket = ''` and use
`loginResult.clientInfo.ticket` as the Bearer token.

## Sequence

```javascript
// 1. Provide credentials and method ('API Key', 'Bearer', or 'Basic').
await login(user, password, 'Bearer');

// 2. login() calls IXServicePortIF/login (not for Basic) and stores the ticket.

// 3. login() reads the constants once.
// CONST = await xhr.restcall('IXServicePortIF/getConstants');

// 4. All further calls go through xhr.restcall(), which sets the header.
```

## Logout

Call `IXServicePortIF/logout` when a session is no longer needed, especially for
cookie and Bearer sessions.

## RunAs

`login` accepts a `runAs` user name. An administrator can open a session in the
name of another user, for example to read that user's workflow tasks.

## CORS

To call the REST API from a web page of another origin, add
`Access-Control-Allow-*` entries to the Indexserver `config.xml`. At least
`Access-Control-Allow-Origin` is required:

```xml
<entry key="Access-Control-Allow-Origin">https://app.example.com</entry>
```

Avoid `*` in production.

## Security

- Never commit credentials, tickets, or session IDs.
- Load credentials from environment variables or a secret store.
- Prefer Bearer over Basic for services so the password is sent only once.
