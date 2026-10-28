---
sidebar_position: 1
---

# Algorithms

**Algorithms** define logic executed in SPUMA in response to events related to a document.

Algorithms can be used, among other things, to:

- calculate attribute values,
- validate and modify document data,
- control the flow of document operations,
- execute SQL queries,
- exchange data with external systems.

An algorithm is defined as a diagram consisting of start points, instructions, transition conditions, and end points. It can use variables available throughout the entire flow.

An algorithm can be associated with a specific class or operate independently of a class.

## Algorithm Configuration

The configuration is divided into the following tabs:

- [**General**](./ogolne),
- [**Process**](./proces),
- [**Variables**](./zmienne).

## Duplicating an Algorithm

The **Duplicate** function allows you to create a new algorithm based on the configuration of an existing algorithm. This avoids manually recreating settings or using import and export.

To duplicate an algorithm:

1. open the selected algorithm,
2. click the operations menu on the right side of the tab bar,
3. select **Duplicate**,
4. modify the required settings,
5. save the new algorithm.

The new algorithm receives the configuration copied from the source algorithm. Its code is generated automatically with the `_1`, `_2`, etc. suffix, for example:

`Algorytm_faktury` → `Algorytm_faktury_1`

Subsequent copies will receive `_2`, `_3`, etc.

:::note
Duplication applies to one currently open object. The source algorithm is not modified.
:::