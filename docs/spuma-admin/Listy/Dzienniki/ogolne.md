---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawową konfigurację dziennika oraz zapytanie SQL używane do generowania listy wpisów.

## Właściwości

- `Nazwa` - Kod dziennika.

:::warning
Nazwa musi być unikatowa w ramach całej bazy. Nie wolno stosować znaków narodowych i specjalnych. Dozwolone są znaki `A-Z`, `_` i `-`.
:::

- `Opis` - Opis dziennika widoczny w aplikacji WWW na liście dostępnych dzienników.

- `Aktywny` - Określa, czy dziennik jest dostępny w SPUMA.

- `Prefix` - Dwuznakowy prefiks używany przy generowaniu identyfikatorów wpisów dziennika.

:::note
Zmiana `Prefix` nie zmienia identyfikatorów istniejących wpisów.
:::

- `DBName` - Nazwa bazy danych używanej przez zapytanie SQL dziennika.

- `Raport SQL` - Zapytanie SQL generujące listę wpisów dziennika Jeżeli pole pozostanie puste, używany jest raport domyślny.