---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawową konfigurację raportu oraz zapytanie SQL używane do generowania danych.

---

## Właściwości

- `Nazwa` - Kod raportu.

:::warning
Nazwa raportu musi być unikatowa w ramach całej bazy. Nie wolno stosować znaków narodowych i specjalnych. Zakres dozwolony to A-Z i znaki _-.
:::

- `Opis` - Opis raportu widoczny w panelu administracyjnym.

- `Etykieta` - Nazwa raportu wyświetlana w aplikacji WWW.

- `Widoczność` - Określa, czy raport jest widoczny w aplikacji WWW.

  :::note
  Raporty używane wyłącznie jako podraporty mogą być ukryte.
  :::

- `Typ` - Typ połączenia z bazą danych.

- `DBName` - Nazwa bazy danych dostępna w zapytaniu jako `$DBNAME`.

- `Ciąg połączenia` - Ciąg połączenia z bazą danych. Szczegółowy opis znajduje się w sekcji [**Ciąg połączenia**](/docs/Zaawansowane/ciag-polaczenia.md).

- `Skrypt` - Zapytanie SQL generujące dane raportu. W zapytaniu można używać parametrów zdefiniowanych w zakładce [**Parametry**](/docs/spuma-admin/Listy/Raporty/parametry.md).

  Kolumny zwracane przez zapytanie mogą być dodatkowo konfigurowane przez nadanie aliasu w formacie:

  ```text
  nazwa_kolumny$xyz
  ```

  gdzie:

  - `x` - widoczność kolumny:
    - `1` - kolumna widoczna,
    - `0` - kolumna ukryta,
  - `y` - poziom grupowania:
    - `0` - brak grupowania,
    - `1` - pierwszy poziom grupowania,
    - `2` - drugi poziom grupowania,
  - `z` - domyślne sortowanie kolumny grupowanej:
    - `0` - malejąco,
    - `1` - rosnąco.

  > ***Przykład:*** *Zapytanie zwracające listę partnerów handlowych z SAP Business One.*

  ```sql
  select
      CardCode,
      CardName,
      Address + ' ' + ZipCode + ' ' + City as Adres,
      CardType as Typ$010,
      City as Miasto$121
  from [$DBNAME]..OCRD
  ```

  W przykładzie:

  - `Typ$010` - kolumna `Typ` jest ukryta, grupowana na pierwszym poziomie i sortowana malejąco,
  - `Miasto$121` - kolumna `Miasto` jest widoczna, grupowana na drugim poziomie i sortowana rosnąco.

  Grupowanie wykonywane jest najpierw po `CardType`, a następnie po `City`.