---
sidebar_position: 4
sidebar_label: Konfiguracja firmy
---

# Konfiguracja firmy

Firma w SPUMA określa środowisko, w ramach którego użytkownicy pracują z dokumentami, klasami oraz słownikami systemowymi.

Po skonfigurowaniu podstawowych parametrów **SPUMA DataService** utwórz firmę i uzupełnij ustawienia wymagane dla danego wdrożenia.

Konfigurację wykonaj w aplikacji **SPUMA Admin** w sekcji **Firmy**.

## 1. Utworzenie firmy

Przejdź do sekcji **Firmy** i dodaj nową firmę.

W zakładce **Ogólne** uzupełnij:

- `Nazwa` — nazwa firmy wyświetlana w SPUMA,
- `Baza` — nazwa bazy danych SAP Business One powiązanej z firmą.

Pola `Nazwa` i `Baza` są wymagane.

Po uzupełnieniu danych zapisz firmę.

Pozostałe pola w zakładce **Ogólne** uzupełnij tylko wtedy, gdy są wykorzystywane w danym wdrożeniu.

## 2. Konfiguracja ustawień firmy

Otwórz utworzoną firmę i przejdź przez dostępne sekcje konfiguracji.

W zależności od wdrożenia konfiguracja może obejmować:

- **Ogólne**,
- **Klasy**,
- **Słowniki**,
- **Integrację SAP**,
- **Konfigurację BP**.

Nie wszystkie elementy muszą być wykorzystywane w każdym środowisku.

## 3. Przypisanie klas

Po utworzeniu klas należy przypisać je do firmy. Klasy, które nie zostały przypisane do firmy, nie będą widoczne w aplikacji WWW SPUMA.

Po dodaniu nowych klas:

1. otwórz sekcję **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Klasy**,
4. wybierz klasę, którą chcesz przypisać do firmy,
5. kliknij `+`,
6. zapisz zmiany.

Po przeładowaniu aplikacji WWW SPUMA przypisane klasy będą widoczne dla danej firmy.

:::note
Jeżeli wymagane klasy nie zostały jeszcze utworzone, skonfiguruj je podczas etapu **Konfiguracja obiegów dokumentów**, a następnie przypisz je do firmy.
:::

## 4. Konfiguracja słowników systemowych

Jeżeli firma ma wykorzystywać słowniki systemowe:

1. otwórz sekcję **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Słowniki**,
4. kliknij `+`, aby dodać nowy słownik,
5. uzupełnij `Nazwa`,
6. w razie potrzeby uzupełnij pozostałe pola,
7. zapisz zmiany.
8. sprawdź identyfikator utworzonego słownika w tabeli `COMPANIESDICTS`, np.:

```sql
SELECT *
FROM COMPANIESDICTS
```

9. odczytaj `id` utworzonego słownika,
10. otwórz procedurę `APR_DICTIONARYVALUES`,
11. dodaj obsługę słownika dla odczytanego `id`,
12. zdefiniuj zapytanie zwracające wartości słownika,
13. zapisz zmiany w procedurze.

Szczegółowy opis procedury znajduje się w dokumentacji:

[**APR_DICTIONARYVALUES**](/versioned_docs/version-7.7/database/Procedures/procedures-descr.md#procedura-apr_dictionaryvalues)

:::note
Słownik systemowy jest poprawnie skonfigurowany, gdy:

- został dodany do firmy w zakładce **Słowniki**,
- ma zdefiniowaną obsługę w procedurze `APR_DICTIONARYVALUES`.
:::



## 5. Konfiguracja integracji firmy

Jeżeli firma korzysta z integracji z systemem zewnętrznym, uzupełnij odpowiednie ustawienia firmy.

Dotyczy to w szczególności:

- **Integracji SAP**,
- **Konfiguracji BP**.

Szczegółową konfigurację połączeń z systemami zewnętrznymi wykonaj zgodnie z instrukcją odpowiedniej [integracji](/versioned_docs/version-7.7/get-started/configuration/integrations-conf.md).

## 6. Weryfikacja

Po zapisaniu konfiguracji sprawdź, czy:

- firma jest widoczna na liście **Firmy**,
- zapisane dane firmy są poprawne,
- do firmy przypisane są wymagane klasy,
- skonfigurowane są wymagane słowniki systemowe,
- ustawienia integracyjne odpowiadają danemu środowisku,
- możesz poprawnie zalogować się do aplikacji WWW SPUMA,
- po zalogowaniu masz dostęp do skonfigurowanej firmy.

Po poprawnym skonfigurowaniu firmy przejdź do definiowania **Użytkowników i grup**.