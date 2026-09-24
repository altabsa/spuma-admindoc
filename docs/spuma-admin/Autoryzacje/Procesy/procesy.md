---
sidebar_position: 1
---

# Procesy autoryzacji

**Procesy autoryzacji** definiują dynamiczną ścieżkę zatwierdzania dokumentu.

W przeciwieństwie do schematów autoryzacji, kolejne etapy procesu mogą zależeć od:

- wartości atrybutów dokumentu,
- decyzji użytkowników,
- parametrów podanych podczas autoryzacji,
- przebiegu wcześniejszych etapów.

Proces jest definiowany jako diagram złożony z punktów startu, etapów autoryzacji, warunków przejścia oraz punktów końca.

---

## Konfiguracja procesu

Konfiguracja procesu jest podzielona na zakładki:

- [**Ogólne**](./ogolne),
- [**Proces**](./proces),
- [**Uprawnienia**](./uprawnienia),
- [**Zmienne**](./zmienne),
- [**Klasy**](./klasy).

## Duplikowanie procesu

Funkcja **Duplikuj** umożliwia utworzenie nowego procesu na podstawie konfiguracji istniejącego procesu. Pozwala uniknąć ręcznego odtwarzania ustawień lub korzystania z importu i eksportu.

Aby zduplikować proces:

1. otwórz wybrany proces,
2. kliknij menu operacji po prawej stronie paska zakładek,
3. wybierz **Duplikuj**,
4. zmodyfikuj wymagane ustawienia,
5. zapisz nowy proces.

Nowy proces otrzymuje konfigurację skopiowaną z procesu źródłowego. Jego kod jest generowany automatycznie z dopiskiem `_1`, `_2` itd., np.:

`Proces_faktury` → `Proces_faktury_1`

Kolejne kopie otrzymają odpowiednio `_2`, `_3` itd.

:::note
Duplikowanie dotyczy jednego aktualnie otwartego obiektu. Proces źródłowy nie jest modyfikowany.
:::