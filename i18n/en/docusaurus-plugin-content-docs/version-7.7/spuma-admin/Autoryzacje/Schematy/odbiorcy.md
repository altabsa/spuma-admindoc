---
sidebar_position: 3
---

# Recipients Tab

The **Recipients** tab is used to define the stages of the authorization schema and the recipients assigned to individual stages.

Stages are executed sequentially according to the number specified in the `Stage` field.

---

## Properties

- `Stage` - Authorization stage number. Stages with a lower number are executed before stages with a higher number.

- `Recipient type` - Specifies the type of recipient assigned to the stage. Available types:
  - `User` - selected system user,
  - `User group` - selected user group,
  - `Authorization schema` - selected authorization schema.

- `Recipient` - Object assigned to the selected recipient type.

- `Additional info` - Text displayed to the user in the authorization window for the given stage.

For the `Authorization schema` type, the list contains:

- schemas created automatically for user groups,
- schemas created manually in the **Authorization Schemas** section.

Schemas created automatically for groups are available in two variants:

- `GROUP_NAME` - schema of type **One of**,
- `*GROUP_NAME` - schema of type **All of**.

:::warning
When selecting `User group` or `Authorization schema`, take into account the schema `Type` defined in the **General** tab.

If the schema type is `All of`, selecting a group as the recipient means that the stage must be approved by all users in that group.

If approval should be performed by only one user from the group, it is recommended to use the schema created automatically for that group, e.g. `GROUP_NAME` of type **One of**, or another appropriately configured authorization schema.
:::