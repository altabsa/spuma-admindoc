---
sidebar_position: 1
---

# Raporty

**Raporty** służą do definiowania zestawień danych pobieranych z bazy SPUMA, systemu ERP lub innych źródeł danych.

Raport jest generowany na podstawie zapytania SQL i może wykorzystywać parametry wejściowe, konfigurację kolumn oraz odnośniki do innych obiektów.

Raporty mogą być również łączone hierarchicznie poprzez mechanizm podraportów.

## Konfiguracja raportu

Konfiguracja raportu jest podzielona na zakładki:

- [**Ogólne**](./ogolne),
- [**Parametry**](./parametry),
- [**Ustawienia kolumn**](./ustawienie-kolumn),
- [**Uprawnienia**](./uprawnienia).

## Duplikowanie raportu

Funkcja **Duplikuj** umożliwia utworzenie nowego raportu na podstawie konfiguracji istniejącego raportu. Pozwala uniknąć ręcznego odtwarzania ustawień lub korzystania z importu i eksportu.

Aby zduplikować raport:

1. otwórz wybrany raport,
2. kliknij menu operacji po prawej stronie paska zakładek,
3. wybierz **Duplikuj**,
4. zmodyfikuj wymagane ustawienia,
5. zapisz nowy raport.

Nowy raport otrzymuje konfigurację skopiowaną z raportu źródłowego. Jego kod jest generowany automatycznie z dopiskiem `_1`, `_2` itd., np.:

`Raport_faktur` → `Raport_faktur_1`

Kolejne kopie otrzymają odpowiednio `_2`, `_3` itd.

:::note
Duplikowanie dotyczy jednego aktualnie otwartego obiektu. Raport źródłowy nie jest modyfikowany.
:::