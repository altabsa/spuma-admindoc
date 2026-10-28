---
sidebar_position: 4
---

# Attributes Tab

The **Attributes** tab is used to define the fields available for documents of this class.

Attributes are divided into:

- **Header Attributes** - define the fields displayed in the document attributes section,
- **Line Attributes** - define the columns available in document lines.

The set of attributes is defined separately for each class.

For classes of type **Other**, the attribute list is empty and requires manual configuration.

For classes of type **Invoice**, **Correction**, and **Down Payment Invoice**, the system adds system attributes. Custom attributes can also be added to both sections.

---

## Properties

- `Name` - Attribute code. The name must be unique within the class.

:::note
The name does not have to be unique across the entire database. Using the same name for corresponding attributes in different classes makes searching easier. For example, use the code `PH` for the Business Partner attribute.
:::

- `Required` - Specifies when an attribute value is required.

| Option | Description |
| --- | --- |
| None | The attribute value is not required. |
| Always in company | The value is required before the document leaves the **Secretary**. |
| Approved | The value is required before the document is approved. |

- `Description` - Attribute description displayed only in the administration application.

- `Label` - Field or column name displayed in the web application.

- `Order` - Specifies the display order of the attribute in the web application.

- `Visibility` - Specifies whether the attribute is visible in the web application.

- `OCR field` - Name of the OCR schema field whose value is copied to the attribute after document recognition. Available values depend on the OCR schema used.

Commonly used header fields:

| OCR Field | Content |
| --- | --- |
| `INVOICENUMBER` | Invoice number. |
| `INVOICEDATE` | Invoice issue date. |
| `DUEDATE` | Payment due date. |
| `NIP` | Seller's tax identification number. |
| `TOTALAMOUNT` | Gross invoice amount. |
| `TOTALAMOUNTBEFTAX` | Net invoice amount. |
| `ACCOUNT` | Seller's bank account. |
| `REFNUMBER` | Reference number. |

Commonly used line fields:

| OCR Field | Content |
| --- | --- |
| `CODE` | Item code. |
| `NAME` | Item description. |
| `PRICE` | Net price. |
| `PRICEBEFDISC` | Net price before discount. |
| `PRICEAFDISC` | Net price after discount. |
| `QTY` | Quantity. |
| `UNIT` | Unit of measure. |
| `TAXPERCENT` | Tax percentage. |
| `TAX` | Tax amount. |
| `TOTAL` | Gross amount. |
| `TOTALNET` | Net amount. |
| `TOTALBEFDISC` | Gross amount before discount. |
| `TOTALBEFNET` | Net amount before discount. |

- `ERP field` - Name of the field in the ERP system to which the attribute value is copied. This field is used by ERP applications and integration add-ons, such as SPUMA4SBO, including the **Send to SAP** mechanism for system classes.

- `Format` - A regular expression (`regex`) used to validate the attribute value.

  This field enforces a specific data structure, such as a postal code format.

  > **Example:** *Postal code format `00-000`:*

  ```regex
  ^[0-9]{2}-[0-9]{3}$
  ```

- `Algorithm` - An expression or JavaScript code executed for the attribute. This mechanism can be used for both header and line attributes.

  An algorithm can be used to:
  - calculate values,
  - recalculate data,
  - automatically set values based on document data.

  The algorithm can reference document data:

  - header fields: `DOCNAME`, `DOCNUM`, `DOCDATE`, `ENTERDATE`,
  - additional header fields: `_[Additional field name]`,
  - line fields: `L[Line ID][Column name]`,
  - aggregation of line values: `SUM([Start index],[Count],[Line selection operator])`.

  A JavaScript expression can be entered directly in the `Algorithm` field.

  > **Example:** *Setting a value based on the currently logged-in user.*

  ```js
  'Entered by: ' + USERNAME;
  ```

- `Type` - Type of data stored in the attribute. A detailed description of the available types is provided in the [**Data Types**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/typy-danych.md) section.

  Additional properties are available for selected types:

  - `Business Partner` - provides the `BP filtering` property, which specifies the range of Business Partners available for selection.
  - dictionary types - provide the following properties:
    - `List view` - specifies how dictionary values are displayed,
    - `Any values` - allows values that are not included in the dictionary to be entered.

<!--
- `Type` - Specifies the type of data stored in the attribute.

| Type | Description |
| --- | --- |
| Integer (Int) | Stores integer values. |
| Real Number (Float) | Stores real numbers. |
| Text (Text) | Stores text. |
| Time (DateTime) | Stores a date. A calendar is available for date selection. |
| Business Partner | Provides a list of Business Partners retrieved from SAP Business One. The `BP filtering` field is available for this type:<ul><li>All active Business Partners</li><li>All active vendors</li><li>All active customers</li><li>All active leads</li></ul> |
| System Dictionary | A drop-down list field. Values are retrieved from a system dictionary defined for the company. After selecting this type, use `Assign` to select the dictionary. For details, see [System Dictionaries](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-systemowe/systemowe.md). |
| User Dictionary | A drop-down list field. Values are retrieved from a dictionary defined directly in the attribute configuration. After selecting this type, use `Define` to open the dictionary configuration. Enter `Value` and `Description` for each item. |
| Interactive Dictionary | A drop-down list field. Values are retrieved from the selected interactive dictionary. For details, see [Dynamic Dictionaries](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-dynamiczne/dynamiczne.md). |
| Fixed Dictionary | A drop-down list field. Values are retrieved from the selected static dictionary. For details, see [Static Dictionaries](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-statystyczne/statyczne.md). |
| Long Text | A memo field that allows long text to be entered. In the web application, it opens a separate window for editing and viewing the content. |

---

### Additional Settings for Dictionary Types

Additional settings are available for dictionary types:

- `List view` - Specifies how values are displayed.

| Option | Description |
| --- | --- |
| Auto | The system automatically selects how the list is displayed. |
| Drop-down list | Values are displayed as a drop-down list. |
| Interactive list | Values are displayed as a searchable list. |

- `Any values` - Allows values that are not included in the selected dictionary to be entered.
-->

---

### Additional Properties of Line Attributes

Additional fields are available for line attributes:

- `Width` - Specifies the width of the attribute column in the web application. A value of `0` means the width is adjusted automatically.

- `Total` - Enables summation of the attribute values across all document lines. This option is available for numeric attributes.

- `Comparison field` - Specifies the header attribute against which the sum calculated using `Total` is compared.