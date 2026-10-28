---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic company settings.

---

## Properties

- `Name` - Company name displayed in the system.

- `Database` - Name of the ERP database associated with the company. This value is used, among other things, in SQL queries and can be substituted for the `$DBNAME` variable.

- `Default directory` - Specifies the default repository directory to which company documents are assigned after leaving the **Secretary**. This setting can be overridden by the `Default path` defined for the class.

:::note
If `Default directory` is not set, documents are placed in the company's root directory.
:::

- `VAT ID` - Company tax identification number used for KSeF integration.

- `Currency` - Default currency assigned to company documents.

- `KSeF. Certificate Thumbprint` - Thumbprint of the certificate used for KSeF integration.