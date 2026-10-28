---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic settings of the authorization schema.

---

## Properties

- `Name` - Name (code) of the authorization schema.

:::warning
The name must be unique across the entire database. Keep in mind that the system may also contain schemas created automatically for user groups.
:::

- `Description` - Schema description displayed when selecting the schema in the web application.

- `Additional information` - Text displayed during document authorization. This field is used when the schema is a stage of another authorization schema or process.

- `Type` - Specifies the number of required approvals within the schema.

| Type | Description |
| --- | --- |
| All of | All defined stages must be approved. |
| One of | Approval of one stage is sufficient. |
| (N) of | A specified number of stages must be approved. |

For the `(N) of` type, you must additionally specify the required number of approvals.