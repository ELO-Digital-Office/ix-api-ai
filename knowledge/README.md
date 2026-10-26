# Knowledge Base

Background knowledge, task guides, and patterns for the ELO Indexserver REST
API. The skill in [skills/elo-indexserver-rest](../skills/elo-indexserver-rest/SKILL.md)
is the compact entry point for AI coding agents; this directory contains the
detailed explanations it refers to.

## Concepts

| Document | Content |
| --- | --- |
| [indexserver.md](concepts/indexserver.md) | Endpoint, paths, request and response format, constants, object identifiers |
| [sord.md](concepts/sord.md) | Repository entries, create/check-in/check-out, selectors, locks |
| [metadata-generations.md](concepts/metadata-generations.md) | Generation 1 index values vs. generation 2 aspects |
| [permissions.md](concepts/permissions.md) | User rights, ACLs, effects on API calls |

## Guides

| Document | Task |
| --- | --- |
| [authentication.md](guides/authentication.md) | Session cookie, Bearer, Basic, logout, CORS |
| [documents.md](guides/documents.md) | Upload, attachments, download, map data |
| [folders.md](guides/folders.md) | Folders, paths, references, moving |
| [metadata-gen1.md](guides/metadata-gen1.md) | Masks and `objKeys` |
| [metadata-gen2.md](guides/metadata-gen2.md) | Aspects, aspect masks, typed values |
| [search.md](guides/search.md) | Children, descendants, ESearch, index and aspect search |
| [workflows.md](guides/workflows.md) | Start workflows, find and forward tasks |

## Patterns

| Document | Content |
| --- | --- |
| [pagination.md](patterns/pagination.md) | `findFirst*`/`findNext*`/`findClose` loop |
| [error-handling.md](patterns/error-handling.md) | `result`/`exception` envelope, error codes, retries |
| [resource-cleanup.md](patterns/resource-cleanup.md) | Searches, locks, sessions, test data |

## Troubleshooting

- [common-errors.md](troubleshooting/common-errors.md)

## API reference

Generated from the OpenAPI definition:
[operations.md](../api/v25.0.1.5/generated/operations.md),
[schemas.md](../api/v25.0.1.5/generated/schemas.md),
[openapi.json](../api/v25.0.1.5/openapi.json).
