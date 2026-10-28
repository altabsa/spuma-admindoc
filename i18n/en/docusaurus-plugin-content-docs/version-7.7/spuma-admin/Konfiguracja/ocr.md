---
sidebar_position: 3
---

# OCR Tab

The **OCR** tab contains global settings for the OCR service used by SPUMA.

---

## Properties

- `SOS address` - Address of the OCR service.

- `SOS port` - Port used for communication with the OCR service.

- `OCR region level` - Specifies the level of detail for regions returned by OCR.

  Available values:

  | Value | Description |
  | --- | --- |
  | `Paragraph` | OCR regions are returned at paragraph level. |
  | `Line` | OCR regions are returned at text line level. |
  | `Word` | OCR regions are returned at individual word level. |

- `Max. time in OCR service (min)` - Maximum document processing time in the OCR service, expressed in minutes.