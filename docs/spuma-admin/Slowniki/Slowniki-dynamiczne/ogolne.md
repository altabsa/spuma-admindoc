---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawowe ustawienia słownika dynamicznego oraz konfigurację źródła danych.

---

## Właściwości

- `Nazwa` - Nazwa słownika.

- `Opis` - Opis słownika widoczny w panelu administracyjnym.

- `Typ` - Określa typ źródła danych używanego przez słownik.

- `DBName` - Nazwa bazy danych używanej przez zapytanie.

- `Ciąg połączenia` - Opcjonalny ciąg połączeniowy do zewnętrznej bazy danych. Jeżeli pole jest puste, używane jest bieżące połączenie systemowe SPUMA. Szczegółowy opis znajduje się w sekcji [Ciąg połączenia](/docs/zaawansowane/ciag-polaczenia/).

- `Skrypt` - Zapytanie SQL pobierające wartości słownika. Zapytanie powinno zwracać dwie kolumny:
    - `value` - wartość pozycji słownika,
    - `descr` - opis pozycji słownika.

  W skrypcie można używać:
  - parametrów zdefiniowanych w zakładce [**Parametry**](/docs/spuma-admin/Slowniki/Slowniki-dynamiczne/parametry.md),
  - zmiennych systemowych związanych z aktualnym kontekstem użytkownika i firmy.

  Dostępne zmienne systemowe:

  - `@user_id` - identyfikator aktualnie zalogowanego użytkownika,
  - `@company_id` - identyfikator firmy aktualnie wybranej w SPUMA.

  Zmienne systemowe są dostępne bez definiowania ich w zakładce **Parametry**].

  > ***Przykład:*** *Użycie zmiennych systemowych w zapytaniu SQL.*

  ```sql
  SELECT
      @user_id AS 'user',
      @company_id AS 'firma'