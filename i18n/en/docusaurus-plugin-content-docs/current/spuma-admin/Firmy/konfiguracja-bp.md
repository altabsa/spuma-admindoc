---
sidebar_position: 7
---

# BP Configuration Tab

The **BP Configuration** tab is used to define document processing settings for Business Partners.

The configuration can be defined globally for the company and individually for selected Business Partners.

A Business Partner can be recognized automatically based on the VAT ID detected in the document. After matching the Business Partner, the system can apply the configuration from the **Profile per BP** section.

---

## Properties

- `OCR Profile` - Specifies the OCR profile used for document recognition.

- `Class` - Specifies the class assigned to documents.

- `GPT Model` - Specifies the GPT model used during document processing. An empty value uses the default model.

- `GPT Prompt` - Additional instructions passed to the GPT agent.

- `SAP Item Filter` - A regular expression used to filter items retrieved from SAP.

- `SAP property filter` - A regular expression used to filter items based on SAP characteristics.

---

## Profile per BP

The **Profile per BP** section allows you to define a separate configuration for a selected Business Partner.

The configuration can be applied automatically after the Business Partner's VAT ID is detected in the processed document.

To add a configuration, click the **+** icon.

The following additional properties are available for a Business Partner profile:

- `Matching` - Specifies the field used to identify the Business Partner.

- `Code/Value` - Value used for matching.

- `OCR Profile` - OCR profile used for documents of the selected Business Partner.

- `Match` - Specifies the field used to identify the class type.

- `Class` - Class assigned to documents of the selected Business Partner.

- `Line Grouping` - Specifies how document lines are grouped.

- `GPT Model` - GPT model used for documents of the selected Business Partner.

- `GPT Prompt` - Additional instructions passed to the GPT agent.

- `SAP Item Filter` - A regular expression used to filter SAP items.

- `SAP property filter` - A regular expression used to filter items by SAP characteristics.

- `Automatically Add from KSeF` - Specifies whether a document can be added automatically from KSeF after recognizing the Business Partner's Tax ID.

- `Owner` - Specifies the owner of a document created automatically from KSeF.

- `Authorization Schema` - Specifies the authorization schema assigned to a document created automatically from KSeF.

:::note
The configuration in the **Profile per BP** section allows you to override the company's general settings for a specific Business Partner.
:::

