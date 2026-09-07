---
sidebar_position: 6
---

# Szczegółowy opis Funkcji

## Funkcja AFN_FIND_DOCUMENTS

### Działanie

Wyszukiwanie dokumentów według słów kluczowych z poziomu aplikacji WWW.

### Obowiązkowa

Tak.

### Opis

Funkcja `AFN_FIND_DOCUMENTS` jest wywoływana podczas wyszukiwania dokumentów w aplikacji WWW.

Wyszukuje dane m.in. w tabeli `RESOURCES`, w kolumnie `keywords`, na podstawie tekstu wpisanego w polu wyszukiwania.

Obsługuje również specjalne słowa kluczowe w formacie:

```text
?nazwa_atrybutu:tekst_szukany
```

### Parametry wejściowe

- `@keywords` - tekst wpisany w polu wyszukiwania.
- `@indocname` - wyszukiwanie w nazwie dokumentu:
  - `Y` - tak,
  - `N` - nie.
- `@indocdesc` - wyszukiwanie w opisie dokumentu:
  - `Y` - tak,
  - `N` - nie.
- `@indocnum` - wyszukiwanie w numerze dokumentu:
  - `Y` - tak,
  - `N` - nie.
- `@inkeywords` - wyszukiwanie w tekście:
  - `Y` - tak,
  - `N` - nie.
- `@incomments` - wyszukiwanie w komentarzach:
  - `Y` - tak,
  - `N` - nie.

### Oczekiwane wyjście

Tabela zawierająca:

- `docid` - ID dokumentu.
- `frac` - trafność wyszukiwania w zakresie od `0` do `1`.

### Uwagi

:::warning
Funkcja jest tworzona podczas instalacji systemu. Jej modyfikacja nie jest zalecana i wymaga dobrej znajomości mechanizmów SQL oraz struktury bazy danych SPUMA.
:::

