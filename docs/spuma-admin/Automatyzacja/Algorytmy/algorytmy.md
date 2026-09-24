---
sidebar_position: 1
---

# Algorytmy

**Algorytmy** definiują logikę wykonywaną w SPUMA w reakcji na zdarzenia związane z dokumentem. 

Algorytmy mogą być wykorzystywane m.in. do:

- obliczania wartości atrybutów,
- walidacji i modyfikacji danych dokumentu,
- sterowania przebiegiem operacji na dokumencie,
- wykonywania zapytań SQL,
- wymiany danych z systemami zewnętrznymi.

Algorytm jest definiowany jako diagram składający się z punktów startu, instrukcji, warunków przejścia i punktów końcowych. Może korzystać ze zmiennych dostępnych w ramach całego przebiegu. 

Algorytm może być powiązany z konkretną klasą lub działać niezależnie od klasy. 

## Konfiguracja algorytmu

Konfiguracja jest podzielona na zakładki:

- [**Ogólne**](./ogolne),
- [**Proces**](./proces),
- [**Zmienne**](./zmienne).

## Duplikowanie algorytmu

Funkcja **Duplikuj** umożliwia utworzenie nowego algorytmu na podstawie konfiguracji istniejącego algorytmu. Pozwala uniknąć ręcznego odtwarzania ustawień lub korzystania z importu i eksportu.

Aby zduplikować algorytm:

1. otwórz wybrany algorytm,
2. kliknij menu operacji po prawej stronie paska zakładek,
3. wybierz **Duplikuj**,
4. zmodyfikuj wymagane ustawienia,
5. zapisz nowy algorytm.

Nowy algorytm otrzymuje konfigurację skopiowaną z algorytmu źródłowego. Jego kod jest generowany automatycznie z dopiskiem `_1`, `_2` itd., np.:

`Algorytm_faktury` → `Algorytm_faktury_1`

Kolejne kopie otrzymają odpowiednio `_2`, `_3` itd.

:::note
Duplikowanie dotyczy jednego aktualnie otwartego obiektu. Algorytm źródłowy nie jest modyfikowany.
:::