---
sidebar_position: 3
---

# Zakładka - OCR

Zakładka **OCR** zawiera globalne ustawienia usługi OCR wykorzystywanej przez SPUMA.

---

## Właściwości

- `SOS address` - Adres usługi OCR.

- `SOS port` - Port używany do komunikacji z usługą OCR.

- `Poziom regionów OCR` - Poziom szczegółowości regionów zwracanych przez OCR.

  Dostępne wartości:

  | Wartość | Opis |
  | --- | --- |
  | `Paragraf` | Regiony OCR są zwracane na poziomie paragrafów. |
  | `Linia` | Regiony OCR są zwracane na poziomie linii tekstu. |
  | `Słowo` | Regiony OCR są zwracane na poziomie pojedynczych słów. |

- `Max. czas w ocrservice (min)` - Maksymalny czas przetwarzania dokumentu przez usługę OCR, wyrażony w minutach.