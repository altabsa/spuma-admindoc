---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawową konfigurację algorytmu.

## Właściwości

- `Nazwa` - Kod algorytmu.

:::warning
Nazwa musi być unikatowa w ramach całej bazy. Nie wolno stosować znaków narodowych i specjalnych. Dozwolone są znaki `A-Z`, `_` i `-`.
:::

- `Opis` - Opis algorytmu widoczny w panelu administracyjnym.

- `Klasa` - Opcjonalne powiązanie algorytmu z klasą dokumentu.

  - (Wszystkie) - algorytm może być używany niezależnie od klasy dokumentu,
  - wybrana klasa - algorytm jest powiązany z konkretną klasą dokumentu.

- `Baza danych` - Nazwa bazy danych dostępna dla operacji SQL wykonywanych w algorytmie.