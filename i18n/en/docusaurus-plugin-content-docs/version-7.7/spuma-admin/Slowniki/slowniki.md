---
sidebar_position: 1
---

# Dictionaries

**Dictionaries** are used to define sets of values used in the system when entering and selecting data.

Dictionaries can be used, among other things:

- in definitions of class, line, and correspondence log attributes,
- in report parameters,
- as suggestions when editing descriptions and comments,
- in authorization process parameters.

Dictionaries are divided into:

- [**Static Dictionaries**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/Slowniki/Slowniki-statystyczne/statyczne.md) - contain fixed values defined in the administration application,
- [**Interactive Dictionaries**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/Slowniki/Slowniki-dynamiczne/dynamiczne.md) - retrieve values dynamically from a specified data source, e.g. the SPUMA database, ERP system, or another database,
- [**System Dictionaries**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/Slowniki/Slowniki-systemowe/systemowe.md) - retrieve values using the `APR_DICTIONARYVALUES` procedure; values are loaded when logging in to SPUMA and stored in cache,
- [**User Dictionaries**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/Slowniki/Slowniki-uzytkownika.md) - are defined directly in the configuration of a specific class attribute and work locally for that attribute.

> **Example:** *A static dictionary can contain a list of company departments, while a dynamic dictionary can contain a list of item codes retrieved from the ERP system.*