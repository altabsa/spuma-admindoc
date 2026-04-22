---
id: ciag-polaczenia
position: 3
title:  Ciąg połączenia
---

# Tworzenie ciągu połączeniowego dla zapytań SQL
## 1. Do czego służy to pole?

W definicji zapytania SQL można wskazać własny ciąg połączeniowy do zewnętrznej bazy danych. Mechanizm ten pozwala uruchamiać zapytania zarówno na:

- **Microsoft SQL Server**
- **SAP HANA DB**

Jeżeli pole ciągu połączeniowego jest puste, zapytanie wykonywane jest z użyciem bieżącego połączenia systemowego SPUMA.

---
## Sposób rozpoznawania typu połączenia

Typ połączenia jest rozpoznawany na podstawie zawartości pola:

- **wartość pusta**  
  używane jest aktualne połączenie systemowe SPUMA,

- **wartość niepusta, bez prefiksu `HANA:`**  
  połączenie traktowane jest jako **MS SQL Server**,

- **wartość niepusta, rozpoczynająca się od prefiksu `HANA:`**  
  połączenie traktowane jest jako **SAP HANA DB**.

Z technicznego punktu widzenia logika testu działa według następującej zasady:

- dla **MS SQL** wykorzystywany jest provider `SqlConnection`,
- dla **HANA** wykorzystywany jest provider `OdbcConnection`.

Oznacza to, że sposób zapisu ciągu powinien być zgodny z wymaganiami odpowiedniego sterownika.

---
## Zachowanie mechanizmu testującego

Podczas testu poprawności system:

1. sprawdza, czy zdefiniowano własny ciąg połączeniowy,
2. wybiera typ połączenia na podstawie prefiksu `HANA:`,
3. otwiera połączenie do wskazanej bazy,
4. uruchamia próbę pobrania danych,
5. wykonuje operację w transakcji testowej,
6. wycofuje transakcję (`Rollback`),
7. zamyka połączenie, jeżeli zostało otwarte jako połączenie zewnętrzne.

### Konsekwencje praktyczne

- test służy do weryfikacji poprawności połączenia i możliwości wykonania zapytania,
- test **nie zapisuje zmian** w bazie danych,
- błąd może wynikać zarówno z niepoprawnego connection stringu, jak i z:
  - braku dostępu do serwera,
  - błędnych danych logowania,
  - braku wymaganego sterownika,
  - braku uprawnień do obiektów używanych w zapytaniu,
  - błędnej składni samego zapytania.

---

## Wymagania dla Microsoft SQL Server

Dla MS SQL należy podać standardowy ciąg połączeniowy zgodny z `SqlConnection`.

### Przykład 1 — uwierzytelnienie SQL Server

```text
Server=SQL01;Database=SPUMA_EXT;User Id=spuma_user;Password=Haslo123!;
```

### Przykład 2 — wskazanie instancji i parametrów dodatkowych

```text
Server=SQL01\PROD;Database=SPUMA_EXT;User Id=spuma_user;Password=Haslo123!;TrustServerCertificate=True;Encrypt=True;
```

### Przykład 3 — uwierzytelnienie zintegrowane Windows

```text
Server=SQL01;Database=SPUMA_EXT;Integrated Security=True;
```

### Uwagi dla MS SQL

- dla połączeń MS SQL **nie należy** dodawać prefiksu `HANA:`,
- connection string musi być zgodny ze składnią `SqlConnection`,
- jeżeli serwer wymaga szyfrowania, należy uwzględnić parametry takie jak `Encrypt` i `TrustServerCertificate`,
- w przypadku połączeń do nazwanej instancji należy użyć formatu `Serwer\Instancja`.

---

## Wymagania dla SAP HANA DB

Dla SAP HANA należy podać ciąg połączeniowy w stylu **ODBC** oraz poprzedzić go prefiksem:

```text
HANA:
```

Prefiks ten jest wymagany do rozpoznania typu połączenia przez system.

### Przykład 1 — podstawowy connection string HANA

```text
HANA:Driver={HDBODBC};ServerNode=hanaserver:30015;UID=SYSTEM;PWD=Haslo123!;
```

### Przykład 2 — connection string z nazwą bazy / tenantem

```text
HANA:Driver={HDBODBC};ServerNode=hanaserver:30015;UID=spuma_user;PWD=Haslo123!;DATABASE=SPUMA;
```

### Przykład 3 — connection string z dodatkowymi parametrami ODBC

```text
HANA:Driver={HDBODBC};ServerNode=hanaserver.company.local:30015;UID=spuma_user;PWD=Haslo123!;CHAR_AS_UTF8=1;
```

### Uwagi dla HANA

- prefiks `HANA:` jest wymagany, aby system wybrał tryb połączenia HANA,
- dalsza część ciągu powinna odpowiadać składni używanego sterownika ODBC,
- na serwerze musi być dostępny właściwy sterownik ODBC dla SAP HANA,
- nazwy parametrów mogą zależeć od wersji sterownika i środowiska.

:::info 
> Ponieważ połączenie HANA realizowane jest przez `OdbcConnection`, poprawność finalnego ciągu zależy od zainstalowanego sterownika ODBC i jego obsługiwanych parametrów.
:::

---
## Najczęstsze błędy

### Błąd 1 — prefiks `HANA:` pominięty dla HANA

Przykład błędny:

```text
Driver={HDBODBC};ServerNode=hana01:30015;UID=user;PWD=pass;
```

Skutek:

- system spróbuje potraktować ciąg jako połączenie **MS SQL**, co zakończy się błędem.

### Błąd 2 — użycie prefiksu `HANA:` dla ciągu MS SQL

Przykład błędny:

```text
HANA:Server=SQL01;Database=SPUMA_EXT;User Id=user;Password=pass;
```

Skutek:

- system spróbuje użyć mechanizmu ODBC dla HANA, a połączenie nie powiedzie się.

### Błąd 3 — brak sterownika ODBC dla HANA

Objaw:

- błąd już na etapie otwierania połączenia.

### Błąd 4 — poprawny connection string, ale brak uprawnień

Objaw:

- połączenie zostaje otwarte,
- błąd pojawia się dopiero w trakcie wykonywania zapytania testowego.

---