---
sidebar_position: 1
---

# User Groups

The **Group List** contains all user groups defined in the system.

:::important
User groups are an important part of the permissions mechanism. They allow access to be managed at the group level instead of for individual users. This means that personnel changes require only updating group membership, without rebuilding the permissions configuration.
:::

A user can belong to multiple groups at the same time.

From the list, you can:

- add a new group,
- delete the selected group,
- search for a group,
- select a group for editing,
- check the number of users assigned to the group.

---

## User Group

When a new group is created, the system automatically creates two authorization schemas associated with the group:

- `GROUP_NAME` - schema of type **One of**,
- `*GROUP_NAME` - schema of type **All of**.

> **Example:** *For the `SERWIS` group, the system creates the `SERWIS` schema of type **One of** and the `*SERWIS` schema of type **All of**.*

---

## Group Configuration

Group configuration is divided into the following tabs:

- [**General**](./ogolne),
- [**Users**](./uzytkownicy).