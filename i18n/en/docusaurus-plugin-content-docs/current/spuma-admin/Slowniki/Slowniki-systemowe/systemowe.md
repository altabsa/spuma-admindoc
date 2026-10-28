---
sidebar_position: 6
---

# System Dictionaries

**System Dictionaries** are interactive dictionaries whose values are retrieved by an SQL query executed through the `APR_DICTIONARYVALUES` procedure.

System dictionary data is loaded when logging in to SPUMA and stored in cache. This makes the values available without executing the query again each time the dictionary is used.

System dictionaries can be used:

- as a source of values for attributes,
- as suggestions when editing comments and descriptions.

:::note
System dictionary values are refreshed when logging in to the system.
:::