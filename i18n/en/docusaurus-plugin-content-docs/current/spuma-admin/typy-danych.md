---
sidebar_position: 30
---

# Data Types

The **Data Types** section describes value types shared by various SPUMA configuration elements, including:

- class attributes,
- SQL parameters,
- report parameters,
- process parameters.

| Type | Description |
| --- | --- |
| `Integer` | Integer value. |
| `Float` | Floating-point value. |
| `Text` | Text value. |
| `Date/Time` | Date and time value. |
| `Business Partner` | Provides a list of Business Partners retrieved from SAP Business One. The `BP filtering` field is available for this type:<ul><li>All active BPs</li><li>All active suppliers</li><li>All active customers</li><li>All active leads</li></ul> |
| `System Dictionary` | Drop-down list field. The value is selected from a [System Dictionary](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-systemowe/systemowe.md). |
| `User Dictionary` | Drop-down list field. Values are retrieved from a dictionary defined directly in the attribute configuration. After selecting this type, use the `Define` option to open the dictionary configuration. For each entry, specify `Total` and `Description`. |
| `Interactive Dictionary` | Drop-down list field. Data is retrieved from the selected [Interactive Dictionary](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-dynamiczne/dynamiczne.md). |
| `Static Dictionary` | Drop-down list field. Data is retrieved from the selected [Static Dictionary](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Slowniki/Slowniki-statystyczne/statyczne.md). |
| `Long Text` | Multi-line text value. |

---

### Additional Dictionary Type Settings

Additional settings are available for dictionary types:

- `List view` - Specifies how values are displayed.

| Option | Description |
| --- | --- |
| Auto | The system automatically selects how the list is displayed. |
| Drop-down list | Values are displayed as a drop-down list. |
| Interactive list | Values are displayed as a searchable list. |

- `Any values` - Allows entering values that are not included in the selected dictionary.