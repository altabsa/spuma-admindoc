---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawowe ustawienia grupy użytkowników.

---

## Właściwości

- `Nazwa` - Kod grupy.

:::warning
Kod musi być unikatowy w całej bazie danych. Nie używaj znaków narodowych ani znaków specjalnych. Dozwolone są znaki `A-Z`, `a-z`, `_` oraz `-`.
:::

- `Opis` - Opis grupy widoczny wyłącznie w panelu administracyjnym.

- `Rola` - Rola przypisana do grupy. Dostępne role:

| Rola | Opis |
| --- | --- |
| Ogólna | Domyślna rola grupy, używana m.in. przy definiowaniu uprawnień. |
| Twórcy | Grupa techniczna. Nie jest używana do definiowania uprawnień. Członkowie grupy mogą widzieć nawzajem dokumenty opuszczające sekretariat oraz dzielą uprawnienie typu `(owner)`. |
| Administratorzy | Nadaje członkom grupy uprawnienia administracyjne do danych aplikacji, w tym możliwość odczytu wszystkich dokumentów w repozytorium. |

> ***Przykład:*** *Użytkownicy `A` i `B` należą do grupy `sekretariat` z rolą **Twórcy**. Użytkownik `A` dodaje dokument i przekazuje go do obiegu. Dokument pozostaje widoczny dla użytkowników `A` i `B`. Po odrzuceniu dokument może poprawić zarówno użytkownik `A`, jak i `B`.*

:::warning
Rola **Administratorzy** jest niezależna od pola `Administrator` ustawianego na użytkowniku. Pole `Administrator` umożliwia logowanie do aplikacji administracyjnej, natomiast rola **Administratorzy** rozszerza dostęp użytkownika do danych systemu.

Rolę należy przypisywać wyłącznie kontom administracyjnym i nadzorczym. Dla grup biznesowych, np. księgowości lub zarządu, dostęp należy definiować przez standardowy mechanizm uprawnień.
:::