---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic class settings.

---

## Properties

- `Name` - Class code (name).

:::note
The code must be unique across the entire database. Do not use language-specific or special characters. Allowed characters are `A-Z`, `_`, and `-`.
:::

- `Type` - Specifies the base configuration of the class. Available types:

| Type | Description |
| --- | --- |
| Other | A class without a predefined set of attributes. |
| Invoice | A system type with a predefined set of attributes for an AP invoice. |
| Correction | A system type with a predefined set of attributes for a correction invoice. |

- `Description` - Class description displayed in the administration application and the web application.

- `Default path` - Defines the repository directory path to which a document of this class is assigned after leaving the **Secretary**. A detailed description is available in the [Default Path](/i18n/en/docusaurus-plugin-content-docs/version-7.7/Zaawansowane/sciezka-domyslna.md) section.

- `Matching` - A regular expression (regex) evaluated against the text layer of the recognized document. If the expression matches, the document is automatically assigned to this class when its status changes from **Recognizing** to **To Be Checked**.

  The class can also be assigned directly to a recognition template based on the `OCRSCHEMA` field, which identifies the schema used to recognize the document. This mechanism can be used for both documents processed by OCR and documents received from KSeF.

  The assignment rule can be further restricted using an appropriate regular expression.

> **Example:** *The `faktura kosztowa` class has the regular expression `\bfaktura\b` defined in the `Matching` field. Any document whose text layer contains the word `faktura` after OCR recognition will be assigned to the `faktura kosztowa` class.*

- `Attachment class` - Specifies the class of documents registered in the web application as attachments to the main document.

- `Attachment for OCR` - If selected, attachments belonging to the class specified in the `Attachment class` field are automatically sent through a workflow together with the main document, provided they are in the **Secretary** at the time of sending.

  Attachments are sent through the workflow according to the default authorization configured for the attachment class.

- `Copy permissions` - A setting historically used in mechanisms based on custom authorization.

:::note
The `Copy permissions` option is not used in the current version of the system.
:::

- `Color` - Specifies the class color. Used to highlight documents in the list in the web application.

- `Name format` - A string that defines how the document name (registration number) is generated for this class. A detailed description is available in the [Name Format](/i18n/en/docusaurus-plugin-content-docs/version-7.7/Zaawansowane/format-nazwy.md) section.

- `Name validation` - Specifies how the document name is generated:

| Option | Description |
| --- | --- |
| Automatically | The name is generated automatically and cannot be edited. |
| Edit | The name is generated after clicking a button and can be edited, but must match the format specified in the `Name format` field. |
| Do not check | The name is generated after clicking a button and can be edited freely. |

- `Name uniqueness check` - Checks whether the document name is unique across the entire database.

- `Number uniqueness check` - Checks whether the document number is unique across the entire database.

- `Number required` - Documents in this class require a document number.

- `Always as draft in SAP` - Always saves documents to SAP as drafts.