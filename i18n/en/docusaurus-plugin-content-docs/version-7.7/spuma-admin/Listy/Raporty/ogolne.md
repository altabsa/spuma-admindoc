---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic report configuration and the SQL query used to generate data.

---

## Properties

- `Name` - Report code.

:::warning
The report name must be unique across the entire database. National and special characters must not be used. Allowed characters are `A-Z`, `_`, and `-`.
:::

- `Description` - Report description displayed in the administration application.

- `Label` - Report name displayed in the web application.

- `Visibility` - Specifies whether the report is visible in the web application.

  :::note
  Reports used only as subreports can be hidden.
  :::

- `Type` - Database connection type.

- `DBName` - Database name available in the query as `$DBNAME`.

- `Connection string` - Database connection string. A detailed description is available in the [**Connection String**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/Zaawansowane/ciag-polaczenia.md) section.

- `Script` - SQL query used to generate report data. The query can use parameters defined in the [**Parameters**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/Listy/Raporty/parametry.md) tab.

  Columns returned by the query can be additionally configured by assigning an alias in the following format:

  ```text
  column_name$xyz
  ```

  where:

  - `x` - column visibility:
    - `1` - column visible,
    - `0` - column hidden,
  - `y` - grouping level:
    - `0` - no grouping,
    - `1` - first grouping level,
    - `2` - second grouping level,
  - `z` - default sorting of the grouped column:
    - `0` - descending,
    - `1` - ascending.

  > **Example:** *A query returning a list of Business Partners from SAP Business One.*

  ```sql
  select
      CardCode,
      CardName,
      Address + ' ' + ZipCode + ' ' + City as Adres,
      CardType as Typ$010,
      City as Miasto$121
  from [$DBNAME]..OCRD
  ```

  In this example:

  - `Typ$010` - the `Typ` column is hidden, grouped at the first level, and sorted in descending order,
  - `Miasto$121` - the `Miasto` column is visible, grouped at the second level, and sorted in ascending order.

  Grouping is performed first by `CardType`, and then by `City`.