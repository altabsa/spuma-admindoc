---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic OCR profile configuration.

## Properties

- `Name` - OCR profile name.

- `Description` - Profile description displayed in the administration application.

- `Type` - Mechanism used for document recognition.

  Available values:

  | Value | Description |
  | --- | --- |
  | `OCR Service` | Document recognition using the configured OCR service. |
  | `Chat GPT` | Document recognition using a GPT model. |

- `GPT Model` - GPT model used by the profile. This field applies to the `Chat GPT` type.

- `Prompt` - Instruction passed to the GPT model during document processing. This field applies to the `Chat GPT` type.