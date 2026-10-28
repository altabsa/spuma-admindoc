---
sidebar_position: 1
---

# Class List

The **Class List** contains all classes defined in the system.

From the list, you can:

- add a new class,
- delete the selected class,
- delete multiple selected classes at once,
- search for a class,
- sort the class list.

Options for adding and deleting classes are available in the menu in the upper-right corner. Search and sorting mechanisms are available at the bottom of the list.

---

## Class

A **Class** (used interchangeably with **Type**) is the basic element used to classify documents in the system.

Using a class, you can define how documents of a given type are handled, including:

- defining the permission policy,
- specifying a set of custom attributes and triggers,
- assigning authorization paths,
- assigning numbering in a specific format,
- allocating documents in the repository,
- and more.

---

## Class Configuration

Class configuration is divided into the following tabs:

- [**General**](./ogolne),
- [**Authorizations**](./autoryzacje),
- [**Attributes**](./atrybuty),
- [**Triggers**](./wyzwalacze),
- [**Permissions**](./uprawnienia),
- [**Algorithms**](./algorytmy).

## Duplicating a Class

The **Duplicate** function allows you to create a new class based on the configuration of an existing class. This avoids manually recreating settings or using import and export.

To duplicate a class:

1. open the selected class,
2. click the operations menu on the right side of the tab bar,
3. select **Duplicate**,
4. modify the required settings,
5. save the new class.

The new class receives the configuration copied from the source class. Its code is generated automatically with the `_1`, `_2`, etc. suffix, for example:

`Faktura_kosztowa` → `Faktura_kosztowa_1`

Subsequent copies will receive `_2`, `_3`, etc.

:::note
Duplication applies to one currently open object. The source class is not modified.
:::