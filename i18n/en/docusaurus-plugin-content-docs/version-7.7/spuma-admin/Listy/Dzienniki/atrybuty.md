---
sidebar_position: 5
---

# Attributes Tab

The **Attributes** tab is used to define additional fields for correspondence log entries.

A correspondence log can use standard system fields and custom attributes. Custom attributes should be used only when the standard entry structure is insufficient.

:::note
Using the standard correspondence log fields is recommended. Adding custom attributes makes later report queries more complex because the values must be retrieved through the appropriate joins with the attribute tables.
:::

## Properties

- `Name` - Attribute code.

- `Required` - Specifies whether the attribute value is required.

- `Description` - Attribute description displayed in the administration application.

- `Label` - Field name displayed in the web application.

- `Order` - Attribute display order.

- `Visibility` - Specifies whether the attribute is visible in the web application.

- `Type` - Attribute data type. A detailed description of the available types is provided in the [**Data Types**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/typy-danych) section.

- `Format` - Regular expression (`regex`) used to validate the value.

- `Algorithm` - JavaScript code used to retrieve or calculate the attribute value.