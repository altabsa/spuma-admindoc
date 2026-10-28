---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic correspondence log configuration and the SQL query used to generate the list of entries.

## Properties

- `Name` - Correspondence log code.

:::warning
The name must be unique across the entire database. National and special characters must not be used. Allowed characters are `A-Z`, `_`, and `-`.
:::

- `Description` - Correspondence log description displayed in the web application on the list of available correspondence logs.

- `Active` - Specifies whether the correspondence log is available in SPUMA.

- `Prefix` - Two-character prefix used when generating correspondence log entry identifiers.

:::note
Changing the `Prefix` does not change the identifiers of existing entries.
:::

- `DBName` - Name of the database used by the correspondence log SQL query.

- `SQL Report` - SQL query that generates the list of correspondence log entries. If the field is left empty, the default report is used.