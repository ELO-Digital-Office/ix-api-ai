# Indexserver REST API

The Indexserver REST API allows you to call the Indexserver API in environments other than Java, JavaScript, or .NET. This documentation describes how to achieve that and demonstrates its usage with examples.

## Contents

- [Endpoint](#endpoint)
- [OpenAPI Definition](#openapi-definition)
- [Design Principles](#design-principles)
  - [Paths](#paths)
  - [HTTP Methods and Content Types](#http-methods-and-content-types)
  - [POST with application/json](#post-with-applicationjson)
  - [POST with application/json to upload streams (files)](#post-with-applicationjson-to-upload-streams-files)
  - [POST with application/json inclusive BLOB data](#post-with-applicationjson-inclusive-blob-data)
  - [POST with multipart/form-data](#post-with-multipartform-data)
  - [Read file and BLOB data](#read-file-and-blob-data)
  - [Return values and Errors](#return-values-and-errors)
  - [Constants](#constants)
- [Authentication for Browser-Based Applications](#authentication-for-browser-based-applications)
- [Authentication for Services](#authentication-for-services)
- [Enable CORS](#enable-cors)
- [Examples](examples.html)
- [Migrate from ELOrest service to Indexserver REST API](rest-war-migration.html)

## Endpoint

The Indexserver REST API is available at:

`http://server:port/ix-repository/rest`

## OpenAPI Definition

An [OpenAPI](../../rest/openapi.json) document is available at:

`http://server:port/ix-repository/resources/openapi.json`

Open in [Swagger UI](../../rest/doc).

## Design Principles

### Paths

The URL path of a REST operation contains the interface name and the function name separated by a slash. Examples:

```text
http://server:port/ix-repository/rest/IXServicePortIF/checkoutSord
http://server:port/ix-repository/rest/FeedService/findFirstActions
```

### HTTP Methods and Content Types

To invoke an operation, send a POST request to the destination path and pass the parameters encapsulated in a JSON object in the request body.

While the OpenAPI document declares the operations only with `application/json`, requests can also be sent as `multipart/form-data`. This allows you to send objects and streams in a single request.

The character encoding of the JSON data must be UTF-8.

#### POST with application/json

A POST request with `application/json` sends the interface and function name as path parameters in the URI. The function parameters are sent in a single JSON object in the request body. The element names in this parameter object must match the parameter names declared in the reference documentation.

For example, the function [`createSord`](http://localhost:9090/ix-Repository1/doc/EloixClient-javadoc.jar/de/elo/ix/client/IXServicePortIF.html#createSord(de.elo.ix.client.ClientInfo,java.lang.String,java.lang.String,de.elo.ix.client.EditInfoZ)) is declared as:

```java
EditInfo createSord(ClientInfo ci, java.lang.String parentId, java.lang.String maskId, EditInfoZ editInfoZ) throws byps.RemoteException
```

The invocation path is:

```text
/IXServicePortIF/createSord
```

The parameters must be wrapped by a JSON object. To simplify usage, the `ci` parameter can be omitted. Furthermore, the element selector `editInfoZ` can be specified as comma-separated field names in a list. Example:

```json
{
  "parentId": "1",
  "maskId": "0",
  "editInfoZ": "sord.lean,maskName,mask"
}
```

The entire HTTP request is as follows:

```http
POST /ix-elo200/rest/IXServicePortIF/createSord HTTP/1.1
Host: localhost:8084
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
elo-approved: D5510B368C3081DA8D9529C200E93986
Content-Type: application/json
Content-Length: 105
Origin: http://localhost:8084
Connection: keep-alive
Referer: http://localhost:8084/ix-elo200/js-api-examples/rest/insert-folder.html
Cookie: JSESSIONID=7428BF67CEB824DCF3C72B6EDAA05C40.ELO-PCIMIGELO21-1; ELO-Approved=D5510B368C3081DA8D9529C200E93986
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin

{"parentId":"1","maskId":"(E10E1000-E100-E100-E100-E10E10E10E31)","editInfoZ":"sord.lean,maskNames,mask"}
```

#### POST with application/json to upload streams (files)

To check in a document or write BLOB data into map values, a POST request encoded as `multipart/form-data` is recommended. See [POST with multipart/form-data](#post-with-multipartform-data).

If this is not possible, file or BLOB data can be uploaded into temporary storage on the server before a subsequent check-in request attaches the temporary file to the repository object. The destination path for the POST request is:

```text
/BUtility/upload
```

The server returns a JSON object with a random stream ID:

```json
{
  "result": {
    "streamId": "6596943602124994030"
  }
}
```

Use this stream ID in the following check-in request, such as `checkinDocEnd`:

```json
/IXServicePortIF/checkinDocEnd
...
"document": {
  "docs": [
    {
      "version": "1.0",
      "comment": "Version uploaded via REST call.",
      "contentType": "text/plain",
      "fileData": {
        "stream": {
          "streamId": "6596943602124994030"
        }
      }
    }
  ]
},
...
```

#### POST with application/json inclusive BLOB data

Files or large byte arrays can be sent as Base64-encoded data within a check-in call. Set the Base64 string in the `data` element of the [`FileData`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/FileData.html) object.

```json
/IXServicePortIF/checkinMap
...
{
  "key": "bufferValue",
  "blobValue": {
    "contentType": "text/plain",
    "data": "U23DuHJyZWJyw7hkIGZvciAw4oKs"
  }
},
...
```

While a BLOB can be written as Base64-encoded data along with the parameter object, it cannot be returned in a result object this way. To read a BLOB, a separate GET request is required; see [Read file and BLOB data](#read-file-and-blob-data).

#### POST with multipart/form-data

The content type `multipart/form-data` allows you to send the parameter object and streams (files to upload) in a single request. The parameter object must be sent as a form field named `data`. Streams can be sent with any other field name, which need not be unique. When multiple streams use the same field name, their order is important when referencing them in the parameter object.

The following example shows how a [`checkinDocEnd`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/IXServicePortIF.html#checkinDocEnd(de.elo.ix.client.ClientInfo,de.elo.ix.client.Sord,de.elo.ix.client.SordZ,de.elo.ix.client.Document,de.elo.ix.client.LockZ)) request uploads a document version and an attachment, and how to reference the streams in the parameter object. Both streams use the field name `files`, so their references include an index. The first stream is assigned to the document version at `"streamId": "files[0]"`; the attachment is bound to the second stream at `"streamId": "files[1]"`.

```json
{
  "ci": { ... },
  "sord": { ... },
  "sordZ": { ... },
  "document": {
    "docs": [
      {
        "version": "1.0",
        "comment": "Version uploaded via REST call.",
        "contentType": "text/plain",
        "fileData": {
          "stream": {
            "streamId": "files[0]"
          }
        }
      }
    ],
    "atts": [
      {
        "version": "1.0",
        "comment": "Attachment uploaded via REST call.",
        "contentType": "text/plain",
        "fileData": {
          "stream": {
            "streamId": "files[1]"
          }
        }
      }
    ]
  },
  "unlockZ": { ... }
}
```

The HTTP request with `multipart/form-data` is as follows:

```http
POST /ix-dev/rest/IXServicePortIF/checkinDocEnd HTTP/1.1
Host: localhost:8084
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
elo-approved: E222F2145581E9C07AC5CC6804166BAA
Content-Type: multipart/form-data; boundary=---------------------------25448331454609589423533115698
Content-Length: 6308
Origin: http://localhost:8080
Connection: keep-alive
Referer: http://localhost:8080/ix-dev/js-api-examples/rest/insert-doc-att.html
Cookie: JSESSIONID=E8C5E7051D88837961C7D55E4544B3F3.ELO-PCIMIGELO21-1; ELO-Approved=E222F2145581E9C07AC5CC6804166BAA
Pragma: no-cache
Cache-Control: no-cache

-----------------------------25448331454609589423533115698
Content-Disposition: form-data; name="data"

{"ci":{"country":"DE","language":"de","ticket":"de.elo.ix.client.ticket_from_cookie","timeZone":"UTC","options":0},"sord":{"acl":"2-7A+PYJA","att":0,"childCount":0,"doc":0,"guid":"(65368C89-8D3E-503E-8522-34622DD9E8DC)","histCount":0,"id":-1,"info":0,"key":0,"kind":0,"lockId":-1,"mask":0,"ownerId":0,"parentId":1,"path":1,"type":254,"vtRep":0,"IDateIso":"","XDateIso":"","access":127,"aclItems":[{"access":63,"id":9999,"name":"Everyone","type":0}],"delDateIso":"","deleted":false,"details":{"archivingMode":2001,"encryptionSet":0,"fulltext":false,"sortOrder":1999,"arcReplEnabled":false,"fulltextDone":false,"replRoot":false,"linked":false,"incomplete":false,"limitedReleaseDocument":false,"linkedPermanent":false,"documentContainer":false,"translateSordName":false,"inheritAclDisabled":false,"workspace":false},"lockName":"","objKeys":[],"ownerName":"Administrator","maskName":"Basic entry","lockIdSord":-1,"lockIdDoc":-1,"lockNameSord":"","lockNameDoc":"","deleteUser":-1,"regionId":-1,"name":"Smørrebrød"},"sordZ":{"bset":"2196631817761587199"},"document":{"docs":[{"version":"1.0","comment":"Version uploaded via REST call.","contentType":"text/plain","fileData":{"stream":{"streamId":"files[0]"}}}],"atts":[{"version":"1.0","comment":"Attachment uploaded via REST call.","contentType":"text/plain","fileData":{"stream":{"streamId":"files[1]"}}}]},"unlockZ":{"bset":"0"}}
-----------------------------25448331454609589423533115698
Content-Disposition: form-data; name="files"; filename="APACHE_LICENSE.txt"
Content-Type: text/plain

... first file content ...
-----------------------------25448331454609589423533115698
Content-Disposition: form-data; name="files"; filename="readme.txt"
Content-Type: text/plain

... second file content ...
-----------------------------25448331454609589423533115698--
```

#### Read file and BLOB data

File and BLOB data can be read by sending a GET request to the relative URL received in a [`FileData`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/FileData.html) object. These URLs are valid for one minute by default and can be downloaded only once. For BLOBs provided by `checkoutMap`, `checkoutNotes`, `processOcr`, and similar operations, these restrictions are negligible. For document versions or attachments provided in [`DocVersion`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/DocVersion.html) objects, there is also a URL element that provides access to the content for 10 minutes, as defined by the Indexserver option `documentUrlLifetimeSeconds`, as long as the session is valid.

Example:

```json
/IXServicePortIF/checkoutSord Response

...
"docVersion": {
  "accessDateIso": "20210418101911",
  "comment": "Version uploaded via REST call.",
  "createDateIso": "20210418101900",
  "deleted": false,
  "ext": "txt",
  "contentType": "text/plain",
  "fileData": {
    "stream": {
      "url": "getstream?serverid=0&messageid=0&streamid=3625747495282349347"
    }
  },
  ...
  "url": "http://localhost:8084/ix-dev/ix?cmd=readdoc1&id=233&objid=429...",
  ...
},
...
```

The stream URL is relative to the REST API endpoint. A GET request to download the file can look like:

```http
GET /ix-dev/rest/getstream?serverid=0&messageid=0&streamid=3625747495282349347 HTTP/1.1
Host: localhost:8084
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
elo-approved: 672DBD1CF4BE7646015B9C5C64EB632D
Connection: keep-alive
Referer: http://localhost:8080/ix-dev/js-api-examples/rest/insert-document.html
Cookie: JSESSIONID=1186F3AEA08E2F309018F8A73190FC7D.ELO-PCIMIGELO21-1; ELO-Approved=672DBD1CF4BE7646015B9C5C64EB632D
```

#### Return values and Errors

An operation returns a JSON object either with a member named `result` or one named `exception`. On success, the `result` member is set and contains the operation's return value. If an error occurs, the `exception` element is set to a string containing an error code in the form `[ELOIX:errorcode]`.

Error codes are defined in [`IXExceptionC`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/IXExceptionC.html). They are provided in the [constants object](#constants) in the `IXEXCEPTION` element.

If the operation cannot be parsed by the server, the response body is undefined and an HTTP status code is set to an error value (4xx or 5xx).

An exception to this rule is a GET request to download a file or BLOB. If this download request fails, the error is always defined by an HTTP status code.

Success response example:

```json
{
  "result": {
    "clientInfo": {
      "country": "DE",
      "language": "de",
      "ticket": "de.elo.ix.client.ticket_from_cookie",
      "timeZone": "UTC",
      "options": 0
    },
    "ticketLifetime": 486,
    "user": {
      "desc": "",
      "flags": 2013265919,
      "groupList": [9998, 9999],
      ...
    }
  }
}
```

Error response example:

```json
{
  "exception": "[TICKET:de.elo...][ELOIX:1002]Keine Lizenz für den Indexserver vorhanden.[NO-DETAILS]"
}
```

#### Constants

Many operations use constants in their parameters. To get the definition of these constants, call `/IXServicePort/getConstants`. This function can be called without authentication.

Since the response is quite large (60 KB of JSON text) and its values do not change for an installation, it should be cached by the client.

```json
{
  "result": {
    "STREAM_VERSION": "21.00.000.015",
    "ACCESS": {
      "FLAG_ADMIN": 1,
      "FLAG_EDITCONFIG": 2,
      "FLAG_EDITSTRUCTURE": 4,
      "FLAG_EDITDOCS": 8,
      "FLAG_CHANGEPW": 16,
      ...
    },
    "DOC_MASK": {
      "GUID_BASIC": "(E10E1000-E100-E100-E100-E10E10E10E30)",
      "GUID_EMAIL": "(E10E1000-E100-E100-E100-E10E10E10E32)",
      "GUID_STRUCTURE_ELEMENT": "(E10E1000-E100-E100-E100-E10E10E10E31)",
      ...
      "mbName": "2",
      "lnName": 40,
      ...
    },
    ...
    "IXEXCEPTION": {
      "SERVER_ERROR": 1000,
      "UNSUPPORTED_PROTOCOL_VERSION": 1001,
      "INVALID_LICENSE": 1002,
      "INVALID_PARAM": 2000,
      "INVALID_SESSION": 2001,
      "TEMP_PROBLEM_OLD": 2002,
      "TEMP_PROBLEM": 2003,
      "INVALID_CRYPT_KEY": 2004,
      "SYNTAX_ERROR": 2007,
      "PASSWORD_DENIED": 3007,
      "ALREADY_EXISTS": 5005,
      "LOCKED": 5022,
      "NOT_FOUND": 5023,
      ...
    }
  }
}
```

## Authentication for Browser-Based Applications

The `JSESSIONID` session cookie, together with the `ELO-Approved` header, is used to authenticate requests and maintain session information. Both values must be sent with each request. The `ELO-Approved` header protects the server from CSRF attacks. Although the server also returns the `ELO-Approved` value as a cookie for some clients, it is accepted only when sent as a header value.

Sessions are automatically invalidated after 10 minutes of idle time. The server returns error code `[EIX:2001]` if the session is unknown.

A session can be created by calling [`login`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/IXServicePortIF.html#login(de.elo.ix.client.ClientInfo,java.lang.String,java.lang.String,java.lang.String,java.lang.String)) or [`loginAdmin`](../../doc/EloixClient-javadoc.jar/de/elo/ix/client/IXServicePortIF.html#loginAdmin(de.elo.ix.client.ClientInfo,java.lang.String,java.lang.String,java.lang.String,java.lang.String)).

Because passwords are transmitted in plain text, these functions should only be used over HTTPS connections.

Login example:

```json
/IXServicePortIF/login

{
  "ci": {
    "language": "de",
    "country": "DE",
    "timeZone": "UTC",
    "ticket": "de.elo.ix.client.ticket_from_cookie"
  },
  "userName": "Administrator",
  "userPwd": "elo",
  "clientComputer": "REST Client",
  "runAs": ""
}
```

Response:

```http
HTTP/1.1 200
Access-Control-Allow-Origin: *
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: OPTIONS, HEAD, GET, POST, PUT
Access-Control-Allow-Headers: Authorization, Content-Type, Content-Length, Content-Disposition
Set-Cookie: JSESSIONID=65934F6BC05C0CB725FFE2870F9EEA3.ELO-PCIMIGELO21-1; Path=/ix-elo200; HttpOnly
Set-Cookie: ELO-Approved=616FABF4E701805574A4A3013192F545; Path=/ix-elo200
ELO-Approved: 616FABF4E701805574A4A3013192F545
Content-Type: application/json;charset=UTF-8
Content-Length: 1473
Date: Mon, 20 Dec 2021 22:56:33 GMT
Keep-Alive: timeout=20
Connection: keep-alive

{"result":{"clientInfo":{"callId":"","country":"DE","language":"de","ticket":"de.elo.ix.client.ticket_from_cookie","timeZone":"UTC","options":0},"ticketLifetime":486,"user":{"desc":"","flags":2013265919,"groupList":[9998,9999],"id":0,"keylist":[
```

## Authentication for Services

Authentication can also be performed by sending a Basic Authorization header or a Bearer header containing a session ticket. These authentication methods are discouraged in a browser because there is no CSRF protection. If an Authorization header is provided, the first call checks the credentials or ticket and creates a connection that is internally cached in IX. The connection is reused for all subsequent calls from the same client IP address and with the same Authorization header. An explicit login can be omitted. It is also not required to send a `ClientInfo` parameter with each call. A `ClientInfo` for `language=en`, `country=US`, and `timezone=UTC` is used by default.

## Enable CORS

To enable CORS, add the `Access-Control-Allow-*` headers as entries in the Indexserver `config.xml`. At least `Access-Control-Allow-Origin` is required. Example:

```xml
<entry key="Access-Control-Allow-Origin">*</entry>
```
