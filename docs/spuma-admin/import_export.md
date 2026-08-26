---
sidebar_position: 13
---

# Import/eksport

Sekcja **Import/eksport** umożliwia przenoszenie konfiguracji SPUMA pomiędzy instalacjami za pomocą plików `JSON`.

Mechanizm może być używany m.in. do kopiowania podobnych klas, schematów autoryzacji, słowników oraz innych elementów konfiguracji.

---

## Eksport

Zakładka **Eksport** umożliwia wybór obiektów, które mają zostać zapisane do pliku `JSON`.

Mechanizm analizuje zależności pomiędzy obiektami i wskazuje elementy wymagane do zachowania spójności eksportowanej konfiguracji.

`Eksport danych organizacji` - Dołącza do eksportu dane organizacji powiązane z wybranymi obiektami.

---

## Import

Zakładka **Import** umożliwia wczytanie konfiguracji z wcześniej wygenerowanego pliku `JSON`.

Podczas importu system przetwarza obiekty zapisane w pliku oraz raportuje wynik operacji.

`Rozwiązywanie id z pliku` - Włącza mechanizm mapowania identyfikatorów obiektów zapisanych w importowanym pliku.

:::warning
Import może tworzyć lub modyfikować powiązane elementy konfiguracji. Przed importem należy zweryfikować zakres danych zapisanych w pliku `JSON` oraz zależności pomiędzy obiektami.
:::