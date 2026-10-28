---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic algorithm configuration.

## Properties

- `Name` - Algorithm code.

:::warning
The name must be unique across the entire database. National and special characters must not be used. Allowed characters are `A-Z`, `_`, and `-`.
:::

- `Description` - Algorithm description displayed in the administration application.

- `Class` - Optional relationship between the algorithm and a document class.

  - `(All)` - the algorithm can be used independently of the document class,
  - selected class - the algorithm is associated with a specific document class.

- `Database` - Name of the database available for SQL operations executed by the algorithm.