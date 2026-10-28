---
sidebar_position: 3
---

# SQL Parameters Tab

The **SQL Parameters** tab is used to define parameters passed to the query in the `SQL Report` field.

---

## Properties

- `Name` - Parameter name used in the SQL query.

- `Required` - Specifies whether the parameter must have a value.

- `Description` - Parameter description displayed in the administration application.

- `Label` - Parameter name displayed in the web application.

- `Order` - Parameter order.

- `Visibility` - Specifies whether the parameter is visible in the web application.

- `Type` - Parameter data type. A detailed description of the available types is provided in the [**Data Types**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/typy-danych.md) section.

  Additional properties are available for selected types:

  - `Business Partner` - provides the `BP filtering` property, which defines the range of Business Partners available for selection.
  - dictionary types - provide the following properties:
    - `List view` - defines how dictionary values are displayed,
    - `Any values` - allows entering values that are not included in the dictionary.

- `Format` - Regular expression (`regex`) used to validate the parameter value.

- `Algorithm` - JavaScript code used to retrieve or calculate the parameter value.

  The algorithm can reference, among other things:

  - header fields: `DOCNAME`, `DOCNUM`, `DOCDATE`, `ENTERDATE`,
  - additional header fields: `_[Additional field name]`,
  - line fields: `L[item id][Column name]`,
  - the `SUM(...)` function used to aggregate line values.