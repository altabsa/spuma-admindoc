---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic settings of the dynamic dictionary and the data source configuration.

---

## Properties

- `Name` - Dictionary name.

- `Description` - Dictionary description displayed in the administration application.

- `Type` - Specifies the type of data source used by the dictionary.

- `DBName` - Name of the database used by the query.

- `Connection string` - Optional connection string to an external database. If the field is empty, the current SPUMA system connection is used. A detailed description is available in the [Connection String](/i18n/en/docusaurus-plugin-content-docs/current/Zaawansowane/ciag-polaczenia.md) section.

- `Script` - SQL query used to retrieve dictionary values. The query should return two columns:
  - `value` - dictionary entry value,
  - `descr` - dictionary entry description.

  The script can use:
  - parameters defined in the [**Parameters**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-dynamiczne/parametry.md) tab,
  - system variables related to the current user and company context.

  Available system variables:

  - `@user_id` - identifier of the currently logged-in user,
  - `@company_id` - identifier of the company currently selected in SPUMA.

  System variables are available without defining them in the **Parameters** tab.

  > **Example:** *Using system variables in an SQL query.*

  ```sql
  SELECT
      @user_id AS 'user',
      @company_id AS 'company'