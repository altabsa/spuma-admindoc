---
sidebar_position: 1
---

# Lista klas

**Lista klas** zawiera wszystkie klasy zdefiniowane w systemie.

Z poziomu listy możesz:

- dodać nową klasę,
- usunąć wybraną klasę,
- usunąć jednocześnie kilka zaznaczonych klas,
- wyszukać klasę,
- posortować listę klas.

Opcje dodawania i usuwania klas znajdują się w menu w prawym górnym rogu. Mechanizmy wyszukiwania i sortowania znajdują się w dolnej części listy.

---

## Klasa

**Klasa** (używane zamiennie ze słowem **Typ**) jest podstawowym elementem służącym do klasyfikowania dokumentów w systemie.

Za pomocą klasy możesz określić sposób obsługi dokumentów danego typu, w tym:

- definiować politykę uprawnień,
- określać zestaw atrybutów własnych i wyzwalaczy,
- przypisywać ścieżki autoryzacji,
- nadawać numerację w określonym formacie,
- alokować dokumenty w repozytorium,
- i wiele innych.

---

## Konfiguracja klasy

Konfiguracja klasy jest podzielona na zakładki:

- [**Ogólne**](./ogolne),
- [**Autoryzacje**](./autoryzacje),
- [**Atrybuty**](./atrybuty),
- [**Wyzwalacze**](./wyzwalacze),
- [**Uprawnienia**](./uprawnienia),
- [**Algorytmy**](./algorytmy).


## Duplikowanie klasy

Funkcja **Duplikuj** umożliwia utworzenie nowej klasy na podstawie konfiguracji istniejącej klasy. Pozwala uniknąć ręcznego odtwarzania ustawień lub korzystania z importu i eksportu.

Aby zduplikować klasę:

1. otwórz wybraną klasę,
2. kliknij menu operacji po prawej stronie paska zakładek,
3. wybierz **Duplikuj**,
4. zmodyfikuj wymagane ustawienia,
5. zapisz nową klasę.

Nowa klasa otrzymuje konfigurację skopiowaną z klasy źródłowej. Jej kod jest generowany automatycznie z dopiskiem `_1`, `_2` itd., np.:

`Faktura_kosztowa` → `Faktura_kosztowa_1`

Kolejne kopie otrzymają odpowiednio `_2`, `_3` itd.

:::note
Duplikowanie dotyczy jednego aktualnie otwartego obiektu. Klasa źródłowa nie jest modyfikowana.
:::