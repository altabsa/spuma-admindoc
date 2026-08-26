---
sidebar_position: 5
---

# Zakładka - Atrybuty

Zakładka **Atrybuty** służy do definiowania dodatkowych pól dla wpisów dziennika.

Dziennik może korzystać ze standardowych pól systemowych oraz własnych atrybutów. Własne atrybuty należy stosować tylko wtedy, gdy standardowa struktura wpisu jest niewystarczająca.

:::note
Zalecane jest korzystanie ze standardowych pól dziennika. Dodanie własnych atrybutów komplikuje późniejsze zapytania raportowe, ponieważ wartości należy pobierać przez odpowiednie powiązanie z tabelami atrybutów.
:::

## Właściwości

- `Nazwa` - Kod atrybutu.

- `Wymagany` - Określa, czy wartość atrybutu jest wymagana.

- `Opis` - Opis atrybutu widoczny w panelu administracyjnym.

- `Etykieta` - Nazwa pola wyświetlana w aplikacji W&#87;W.

- `Kolejność` - Kolejność wyświetlania atrybutu.

- `Widoczność` - Określa, czy atrybut jest widoczny w aplikacji W&#87;W.

- `Typ` - Typ danych atrybutu. Szczegółowy opis dostępnych typów znajduje się w sekcji [**Typy danych**](/docs/Zaawansowane/typy-danych).

- `Format` - Wyrażenie regularne (regex) używane do walidacji wartości.

- `Algorytm` - Kod JavaScript używany do pobrania lub wyliczenia wartości atrybutu.