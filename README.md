# ELO Indexserver REST API: AI Coding Agent Guide and Examples

This repository provides **ELO Indexserver REST API** documentation, schema
references, and practical **ELO API examples** for developers and **ELO AI
coding agents**. Use it to build or troubleshoot applications that communicate
with an ELO repository through the Indexserver REST API.

## Project scope

- **Product:** ELO Indexserver (IX), the REST API for accessing an ELO repository.
- **API:** Indexserver REST endpoints and JSON data models; the included OpenAPI
  reference is version **25.0.1.5**.
- **Examples:** JavaScript examples for browser and Node.js usage.
- **Not in scope:** SOAP/legacy APIs, ELO product UI development, or database
  access that bypasses the Indexserver.

## Start here

AI coding agents: read [SKILL.md](SKILL.md) before using the API references or
writing code. It explains the repository's API patterns, authentication,
metadata, searches, document uploads, and example conventions.

For a specific task, find a matching example in
[examples/rest/javascript](examples/rest/javascript/). Check the API signature
and data types in the references, then adapt the example to the target
Indexserver version and environment.

## Repository contents

| Resource | Description |
| --- | --- |
| [SKILL.md](SKILL.md) | Instructions and practical patterns for AI coding agents working with the Indexserver REST API. |
| [JavaScript REST examples](examples/rest/javascript/) | Runnable patterns for login, REST calls, documents, folders, metadata, search, references, and workflows. |
| [REST API examples guide](examples/rest/index.md) | Example catalog, use cases, and guidance on when to use the examples. |
| [OpenAPI reference](references/openapi.json) | Structured endpoint and operation definitions for the Indexserver REST API. |
| [API operations](api.md) | Human-readable endpoint reference generated from the OpenAPI definition. |
| [Data schemas](schema.md) | Human-readable Indexserver data type and schema reference. |

## Common tasks and examples

- **Authentication and session tickets:** [login.js](examples/rest/javascript/login.js)
- **REST request patterns:** [rest-call.js](examples/rest/javascript/rest-call.js)
- **Create and upload a document:** [insert-document.js](examples/rest/javascript/insert-document.js)
- **Create a folder:** [insert-folder.js](examples/rest/javascript/insert-folder.js)
- **Set Generation 1 metadata:** [metadata-gen1.js](examples/rest/javascript/metadata-gen1.js)
- **Set Generation 2 metadata and aspects:** [metadata-gen2.js](examples/rest/javascript/metadata-gen2.js)
- **Search documents and metadata:** [find-fulltext.js](examples/rest/javascript/find-fulltext.js), [find-metadata.js](examples/rest/javascript/find-metadata.js), and [find-aspects.js](examples/rest/javascript/find-aspects.js)
- **List folder contents or descendants:** [find-children.js](examples/rest/javascript/find-children.js) and [find-descendants.js](examples/rest/javascript/find-descendants.js)
- **Move or reference repository objects:** [move-sord.js](examples/rest/javascript/move-sord.js) and [create-reference.js](examples/rest/javascript/create-reference.js)
- **Start workflows, list and forward workflow tasks:** [workflow.js](examples/rest/javascript/workflow.js)

## Search terms

ELO Indexserver REST API, ELO REST API, ELO API examples, ELO AI coding
agent, ELO Indexserver client, ELO repository, Indexserver authentication,
document upload, Sord metadata, Generation 1 metadata, Generation 2 aspects,
Indexserver search, ELO workflow, start workflow, forward workflow task,
JavaScript REST client.

## Version and correctness

The generated API and schema references describe the version identified in
those files. Indexserver installations may expose different versions or
configuration-dependent behavior. Confirm endpoint availability, permissions,
authentication settings, and data types against the target system before
deploying an integration. Treat the examples as starting points and never
commit real credentials or session tickets.
