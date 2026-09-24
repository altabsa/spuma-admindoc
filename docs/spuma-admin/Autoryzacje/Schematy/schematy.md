---
sidebar_position: 1
---

# Schematy autoryzacji

**Schematy autoryzacji** definiują stałą ścieżkę zatwierdzania dokumentu.

Dokument przechodzi przez kolejne etapy sekwencyjnie, aż do uzyskania statusu `Zatwierdzony`.

Schemat jest definiowany z góry i nie zmienia swojej struktury w trakcie autoryzacji.

Etapami schematu mogą być:

- użytkownicy,
- grupy użytkowników,
- inne schematy autoryzacji.

---

## Konfiguracja schematu

Konfiguracja schematu jest podzielona na zakładki:

- [**Ogólne**](./ogolne),
- [**Odbiorcy**](./odbiorcy),
- [**Uprawnienia**](./uprawnienia),
- [**Klasy**](./klasy).

## Duplikowanie schematu

Funkcja **Duplikuj** umożliwia utworzenie nowego schematu na podstawie konfiguracji istniejącego schematu. Pozwala uniknąć ręcznego odtwarzania ustawień lub korzystania z importu i eksportu.

Aby zduplikować schemat:

1. otwórz wybrany schemat,
2. kliknij menu operacji po prawej stronie paska zakładek,
3. wybierz **Duplikuj**,
4. zmodyfikuj wymagane ustawienia,
5. zapisz nowy schemat.

Nowy schemat otrzymuje konfigurację skopiowaną ze schematu źródłowego. Jego kod jest generowany automatycznie z dopiskiem `_1`, `_2` itd., np.:

`Schemat_faktury` → `Schemat_faktury_1`

Kolejne kopie otrzymają odpowiednio `_2`, `_3` itd.

:::note
Duplikowanie dotyczy jednego aktualnie otwartego obiektu. Schemat źródłowy nie jest modyfikowany.
:::