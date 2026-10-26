# Permissions

The Indexserver checks two kinds of permissions: **user rights** (what a user
may do in general) and **access control lists** (what a user may do with a
specific object). All REST calls run with the rights of the authenticated user.

## User rights

User rights are bit flags in `UserInfo.flags` and `UserInfo.flags2`. Read the
values from `CONST.ACCESS` (`AccessC`). Examples:

| Flag | Allows |
| --- | --- |
| `FLAG_ADMIN` | Main administrator |
| `FLAG_EDITSTRUCTURE` | Create, edit, move repository entries |
| `FLAG_EDITDOCS` | Check in and check out documents |
| `FLAG_DELSTRUC`, `FLAG_DELDOC` | Delete entries and documents |
| `FLAG_EDITMASK` | Create, edit, delete masks |
| `FLAG_STARTWF`, `FLAG_EDITWF` | Start and edit workflows |
| `FLAG_EDITACL` | Change security settings |
| `FLAG_IGNOREACL` | Ignore access control lists |

The login result (`LoginResult.user`) contains the flags of the current user.

## Access control lists

Each `Sord` has an ACL. It can be read and written in two forms:

- `Sord.aclItems`: readable `AclItem` objects with `id` (user, group, or key),
  `type` (`CONST.ACL_ITEM.TYPE_*`), and `access` (bit set of `LUR_*`).
- `Sord.acl`: coded string form. If both are set on check-in, `aclItems` wins.

ACL access bits (`CONST.ACCESS`):

| Bit | Meaning |
| --- | --- |
| `LUR_READ` | Read the entry |
| `LUR_WRITE` | Change the metadata |
| `LUR_EDIT` | Check in a new document version |
| `LUR_DELETE` | Delete the entry |
| `LUR_LIST` | Add or remove entries in a folder |
| `LUR_PERMISSION` | Change the ACL |
| `LUR_ALL` | All of the above |

New objects inherit the ACL of their parent when created with `createSord` or
`createDoc`. Example: grant full access to everyone.

```javascript
sord.aclItems = [{ id: CONST.USER_INFO.ID_EVERYONE, access: CONST.ACCESS.LUR_ALL }];
```

`Sord.access` is read-only and contains the effective `LUR_*` rights of the
current user for the object.

## Effects on API calls

- Missing rights cause an exception with code `ACCESS_DENIED`
  (`CONST.IXEXCEPTION.ACCESS_DENIED`).
- Searches return only objects the user can read. Associations of Gen2
  aspects can have their own rights that limit visible matches.
- Reference paths: segments the user cannot read are shown as `--`.
- A user may delete a reference in a folder they can edit even without rights
  on the referenced object; deleting the object itself requires them.
- Creating masks, aspects, and aspect masks requires administrative rights.
- Tasks of other users can only be read after logging in as that user (for
  example with `runAs` in `login`).

## Recommendations

- Use a dedicated technical user with the minimum rights the integration
  needs. Do not use the main administrator for production integrations.
- Do not grant `LUR_ALL` to everyone in production code; the examples do it
  only for demonstration.
