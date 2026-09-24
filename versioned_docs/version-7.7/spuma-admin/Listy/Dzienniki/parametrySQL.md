---
sidebar_position: 3
---

# Zakładka - Parametry SQL

Zakładka **Parametry SQL** służy do definiowania parametrów przekazywanych do zapytania w polu `Raport SQL`.

---

## Właściwości

- `Nazwa` - Nazwa parametru używana w zapytaniu SQL.

- `Wymagany` - Określa, czy parametr musi posiadać wartość.

- `Opis` - Opis parametru widoczny w panelu administracyjnym.

- `Etykieta` - Nazwa parametru wyświetlana w aplikacji WWW.

- `Kolejność` - Kolejność parametru.

- `Widoczność` - Określa, czy parametr jest widoczny w aplikacji WWW.

- `Typ` - Typ danych parametru. Szczegółowy opis dostępnych typów znajduje się w sekcji [**Typy danych**](/docs/spuma-admin/typy-danych.md).

  Dla wybranych typów dostępne są dodatkowe właściwości:

  - `Partner handlowy` - udostępnia właściwość `Filtrowanie PH`, która określa zakres partnerów handlowych dostępnych do wyboru.
  - typy słownikowe - udostępniają właściwości:
    - `Widok listy` - określa sposób prezentacji wartości słownika,
    - `Dowolne wartości` - pozwala na wprowadzanie wartości spoza słownika.

- `Format` - Wyrażenie regularne (`regex`) używane do walidacji wartości parametru.

- `Algorytm` - Kod JavaScript używany do pobrania lub wyliczenia wartości parametru.

  W algorytmie można odwoływać się m.in. do:

  - pól nagłówka: `DOCNAME`, `DOCNUM`, `DOCDATE`, `ENTERDATE`,
  - dodatkowych pól nagłówka: `_[Nazwa pola dodatkowego]`,
  - pól linii: `L[id pozycji][Nazwa kolumny]`,
  - funkcji `SUM(...)` służącej do agregacji wartości linii.