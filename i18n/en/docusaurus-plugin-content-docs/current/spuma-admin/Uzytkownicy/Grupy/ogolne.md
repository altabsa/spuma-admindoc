---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic settings of the user group.

---

## Properties

- `Name` - Group code.

:::warning
The code must be unique across the entire database. Do not use language-specific or special characters. Allowed characters are `A-Z`, `a-z`, `_`, and `-`.
:::

- `Description` - Group description displayed only in the administration application.

- `Role` - Role assigned to the group. Available roles:

| Role | Description |
| --- | --- |
| General | Default group role, used among other things when defining permissions. |
| Creators | Technical group. It is not used to define permissions. Group members can see each other's documents after they leave the **Secretary** and share the `(owner)` permission. |
| Administrators | Grants group members administrative permissions to application data, including the ability to read all documents in the repository. |

> **Example:** *Users `A` and `B` belong to the `sekretariat` group with the **Creators** role. User `A` adds a document and sends it through the workflow. The document remains visible to users `A` and `B`. If the document is rejected, either user `A` or user `B` can correct it.*

:::warning
The **Administrators** role is independent of the `Administrator` field configured for the user. The `Administrator` field allows the user to log in to the administration application, while the **Administrators** role extends the user's access to system data.

Assign this role only to administrative and supervisory accounts. For business groups, such as accounting or management, access should be defined using the standard permissions mechanism.
:::