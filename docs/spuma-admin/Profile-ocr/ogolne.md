---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawową konfigurację profilu OCR.

## Właściwości

- `Nazwa` - Nazwa profilu OCR.

- `Opis` - Opis profilu widoczny w panelu administracyjnym.

- `Typ` - Mechanizm używany do rozpoznawania dokumentów.

  Dostępne wartości:

  | Wartość | Opis |
  | --- | --- |
  | `Serwis OCR` | Rozpoznawanie dokumentu przez skonfigurowaną usługę OCR. |
  | `Chat GPT` | Rozpoznawanie dokumentu z wykorzystaniem modelu GPT. |

- `Model GPT` - Model GPT używany przez profil. Pole ma zastosowanie dla typu `Chat GPT`.

- `Zapytanie` - Instrukcja przekazywana do modelu GPT podczas przetwarzania dokumentu. Pole ma zastosowanie dla typu `Chat GPT`.