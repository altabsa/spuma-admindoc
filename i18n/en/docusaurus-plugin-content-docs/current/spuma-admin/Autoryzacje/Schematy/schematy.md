---
sidebar_position: 1
---

# Authorization Schemas

**Authorization Schemas** define a fixed document approval path.

The document passes through consecutive stages sequentially until it reaches the `Approved` status.

The schema is defined in advance and does not change its structure during authorization.

Schema stages can include:

- users,
- user groups,
- other authorization schemas.

---

## Schema Configuration

Schema configuration is divided into the following tabs:

- [**General**](./ogolne),
- [**Recipients**](./odbiorcy),
- [**Permissions**](./uprawnienia),
- [**Classes**](./klasy).

## Duplicating a Schema

The **Duplicate** function allows you to create a new schema based on the configuration of an existing schema. This avoids manually recreating settings or using import and export.

To duplicate a schema:

1. open the selected schema,
2. click the operations menu on the right side of the tab bar,
3. select **Duplicate**,
4. modify the required settings,
5. save the new schema.

The new schema receives the configuration copied from the source schema. Its code is generated automatically with the `_1`, `_2`, etc. suffix, for example:

`Schemat_faktury` → `Schemat_faktury_1`

Subsequent copies will receive `_2`, `_3`, etc.

:::note
Duplication applies to one currently open object. The source schema is not modified.
:::