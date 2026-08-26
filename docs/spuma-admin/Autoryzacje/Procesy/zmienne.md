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

- `Kod JS` - Kod JavaScript inicjujący zmienną.

---

## Nieużywane zmienne

Przycisk **Zaznacz nieużywane** wyszukuje i zaznacza zmienne, które nie są wykorzystywane w procesie autoryzacji.

Funkcja ułatwia usunięcie niepotrzebnych zmiennych i uporządkowanie definicji procesu.

Po zaznaczeniu nieużywanych zmiennych można je usunąć przyciskiem **Usuń**.