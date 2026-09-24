---
sidebar_position: 4
---

# Zakładka - Format kolumn

Zakładka **Format kolumn** służy do dodatkowej konfiguracji kolumn zwracanych przez dziennik.

Konfiguracja jest opcjonalna i może nadpisać domyślne zachowanie kolumn wynikające ze skryptu SQL.

---

## Właściwości

- `Nazwa kolumny` - Nazwa kolumny zwracanej przez zapytanie SQL.

- `Typ` - Określa zakres zastosowania konfiguracji kolumny.
  - `Raport`,
  - `Wydruk`.

- `Etykieta` - Nazwa kolumny wyświetlana w aplikacji WWW.

- `Sortowanie` - Włącza możliwość sortowania po kolumnie.

- `Sortowanie rosnąco` - Ustawia domyślny kierunek sortowania rosnąco.

- `Typ odnośnika` - Określa, czy wartość kolumny ma działać jako odnośnik do innego obiektu.

| Opcja | Opis |
| --- | --- |
| `Brak` | Kolumna nie jest odnośnikiem. |
| `Podraport` | Tworzy odnośnik do innego raportu. |
| `Dokument` | Tworzy odnośnik do dokumentu SPUMA. |
| `Wpis dziennika` | Tworzy odnośnik do wpisu dziennika. |
| `Wpis dostępu` | Tworzy odnośnik do wpisu zatwierdzenia dostępu. |

- `Szerokość` - Szerokość kolumny:
  - `-1` - kolumna niewidoczna,
  - `0` - szerokość automatyczna,
  - wartość `> 0` - szerokość w pikselach.

- `Grupowanie` - Poziom grupowania:
  - `0` - brak grupowania,
  - wartość `> 0` - kolejność grupowania.

- `Skala` - Liczba miejsc po przecinku:
  - `-1` - wartość automatyczna,
  - wartość `>= 0` - liczba zer po przecinku.

- `Wyrównaj do prawej` - Wyrównuje zawartość kolumny do prawej strony.

- `Sumator` - Włącza sumowanie wartości kolumny.