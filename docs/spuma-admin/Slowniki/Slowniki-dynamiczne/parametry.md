---
sidebar_position: 3
---

# Zakładka - Parametry

Zakładka **Parametry** służy do definiowania parametrów wykorzystywanych w zapytaniu SQL słownika dynamicznego.

Parametry są tego samego typu co atrybuty i mogą pobierać wartości z właściwości lub atrybutów obiektu nadrzędnego.

W zapytaniu SQL parametr jest używany w postaci:

```text
@nazwa
```

---

## Właściwości

- `Nazwa` - Nazwa parametru. W zapytaniu SQL parametr jest dostępny jako `@nazwa`.

- `Opis` - Opis parametru widoczny w panelu administracyjnym.

- `Widoczność` - Określa, czy parametr jest widoczny.

- `Typ` - Określa typ danych parametru. Szczegółowy opis dostępnych typów znajduje się w sekcji [**Typy danych**](/docs/spuma-admin/typy-danych.md).

- `Format` - Wyrażenie regularne określające poprawny format wartości parametru. Pole opcjonalne.

- `Algorytm` - Określa sposób pobrania lub wyliczenia wartości parametru. Może wskazywać właściwość systemową, atrybut zdefiniowany w klasie lub zawierać bardziej złożony algorytm JavaScript.

Dla właściwości systemowych i atrybutów klasy stosowana jest składnia:

```text
_NAZWA
```

---

## Przykład

Słownik zamówień zakupu z SAP może pobierać zamówienia dla partnera handlowego wskazanego w dokumencie.

```sql
select '' as value, 'brak' as descr
union all
select
    distinct a.DocEntry,
    'ZZ ' + cast(b.DocNum as nvarchar) + ' z dnia ' + CONVERT(nvarchar, b.DocDate, 105)
from [$DBNAME].dbo.POR1 a
join [$DBNAME].dbo.OPOR b on a.DocEntry = b.DocEntry
where b.CardCode = @ph
```

Konfiguracja parametru:

| Właściwość | Wartość |
| --- | --- |
| `Nazwa` | `ph` |
| `Typ` | `Text` |
| `Algorytm` | `_PH` |

W tym przykładzie `_PH` wskazuje właściwość systemową, z którego pobierana jest wartość. Wartość ta jest następnie przekazywana do zapytania SQL jako parametr `@ph`.

### Właściwości systemowe

Poniżej znajduje się lista właściwości systemowych, które mogą być wykorzystywane w polu `Algorytm`.

<!-- TODO: Uzupełnić listę właściwości systemowych. -->