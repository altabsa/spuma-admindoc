---
sidebar_position: 5
---

# Zakładka - Zmienne

Zakładka **Zmienne** zawiera zmienne wykorzystywane w procesie autoryzacji.

Na liście znajdują się:

- zmienne utworzone w poszczególnych etapach procesu,
- zmienne utworzone ręcznie.

Zmienne utworzone w etapach procesu mogą przechowywać m.in. wartości parametrów, użytkownika kończącego dany etap lub wybrany schemat autoryzacji. Mogą być wykorzystywane w kolejnych etapach oraz warunkach procesu.

Z poziomu zakładki można również ręcznie utworzyć nową zmienną i wykorzystać ją w procesie autoryzacji.

---

## Właściwości

- `Nazwa` - Nazwa zmiennej.

- `Opis` - Opis zmiennej widoczny w panelu administracyjnym.

- `Typ` - Typ danych przechowywanych w zmiennej. Dostępne typy:

| Typ | Opis |
| --- | --- |
| `Text` | Wartość tekstowa. |
| `Int` | Liczba całkowita. |
| `Float` | Liczba rzeczywista. |
| `Data` | Data. |
| `Tabela` | Dane tabelaryczne. |

- `Kod JS` - Kod JavaScript inicjujący zmienną. Kod JavaScript inicjujący zmienną. Umożliwia dynamiczne pobranie lub wyliczenie wartości, która może być następnie wykorzystana w kolejnych etapach oraz warunkach procesu.

 ## Przykłady Kod JS

Kod JS można wykorzystać m.in. do:

- pobierania wartości niestandardowych atrybutów dokumentu,
- pobierania właściwości systemowych dokumentu,
- wykonywania własnych wyrażeń JavaScript,
- wywoływania procedur za pomocą `callDS`.

**Przykład 1:**

Do wartości niestandardowego atrybutu dokumentu można odwołać się przez jego nazwę.

```text
{NAZWA_ATRYBUTU}
```
**Przykład 2:**

Kod JS może zostać wykorzystany np. do wyznaczenia wartości zależnej od waluty dokumentu. 

Dla zmiennej typu `Float`:

```js
[['PLN',36900],['EUR',8730],['USD',10245]].find((t)=> t[0]== _WALUTA)[1]
```

Kod odczytuje wartość atrybutu `_WALUTA` i zwraca odpowiednią wartość:

- `PLN` - `36900`,
- `EUR` - `8730`,
- `USD` - `10245`.

Zwrócona wartość zostaje zapisana do zmiennej i może być wykorzystana w warunku procesu, np. do porównania wartości dokumentu z odpowiednim progiem zależnym od waluty.


**Przykład 3:**

Możliwe jest również pobranie wartości z procedury za pomocą `callDS`.

```js
(await callDS('APR_PROGI','PR',[SYS_ID,SYS_CLASSID,'ET1']))[0].C0
```

W przykładzie do procedury `APR_PROGI` przekazywane są:

- `SYS_ID` - ID dokumentu,
- `SYS_CLASSID` - ID klasy dokumentu,
- `'ET1'` - dodatkowy parametr.

Z wyniku procedury pobierana jest wartość `[0].C0`, która zostaje zapisana do zmiennej.

Dzięki temu logika wyliczania wartości lub progów może zostać zdefiniowana w procedurze, a zwrócony wynik wykorzystany w warunkach procesu autoryzacji.



---

## Nieużywane zmienne

Przycisk **Zaznacz nieużywane** wyszukuje i zaznacza zmienne, które nie są wykorzystywane w procesie autoryzacji.

Funkcja ułatwia usunięcie niepotrzebnych zmiennych i uporządkowanie definicji procesu.

Po zaznaczeniu nieużywanych zmiennych można je usunąć przyciskiem **Usuń**.