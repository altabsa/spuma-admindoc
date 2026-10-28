---
sidebar_position: 6
---

# Authorization Schema Examples

The following examples show typical ways to configure authorization schemas. Stages are executed according to the `Stage` number, and the way the schema is completed depends on the `Type` value.

---

## Example 1 - approval by the entire group

**Goal:** the document must be approved by all users in the `DZIAL1` group.

### Variant 1 - users added directly

`Type`: `All of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | User | `user1` |
| 0 | User | `user2` |
| 0 | User | `user3` |

### Variant 2 - group

`Type`: `All of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | User group | `DZIAL1` |

In both cases, approval is required from all specified users.

:::note
In variant 2, the schema `Type` value (`One of` or `All of`) does not matter because the schema contains only one stage with a recipient of type `User group`. In this case, the system requires approval from all users in the group.
:::

---

## Example 2 - user, then one person from the group

**Goal:** the document must first be approved by `user1`, and then by one person from the `KSIEGOWOSC` group.

`Type`: `All of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | User | `user1` |
| 1 | Authorization schema | `KSIEGOWOSC` |

:::note
- `All of` means that the authorization must pass through all defined stages. If `One of` were used, the document would be approved after completing stage `0`.
- At stage `1`, the system schema `KSIEGOWOSC` of type **One of** is used. It is created automatically together with the `KSIEGOWOSC` group.
- If the `KSIEGOWOSC` group is selected directly at stage `1` instead of the `KSIEGOWOSC` schema, the document will require approval from all users in that group.
:::

---

## Example 3 - user, then one person from one of two groups

**Goal:** the document must first be approved by `user1`. Then approval by one person from either the `KSIEGOWOSC` group or the `HR` group is sufficient.

First, create a helper schema.

### `Helper` Schema

`Type`: `One of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | Authorization schema | `KSIEGOWOSC` |
| 0 | Authorization schema | `HR` |

Then create the main schema.

### Main Schema

`Type`: `All of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | User | `user1` |
| 1 | Authorization schema | `Helper` |

The `Helper` schema is completed after one of its stages is approved.

:::note
If, at stage `1`, the document must be approved by one person from the `KSIEGOWOSC` group and one person from the `HR` group, creating a helper schema is not necessary.

In this case, the configuration can be as follows:

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | User | `user1` |
| 1 | Authorization schema | `KSIEGOWOSC` |
| 1 | Authorization schema | `HR` |
:::

---

## Example 4 - entire group, then user

**Goal:** the document must be approved by all users in the `HR` group, and then by `user1`.

### Variant 1 - group

`Type`: `All of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | User group | `HR` |
| 1 | User | `user1` |

### Variant 2 - group schema

`Type`: `All of`

| Stage | Recipient type | Recipient |
| --- | --- | --- |
| 0 | Authorization schema | `*HR` |
| 1 | User | `user1` |

The `*HR` schema is created automatically for the `HR` group and corresponds to the **All of** variant.