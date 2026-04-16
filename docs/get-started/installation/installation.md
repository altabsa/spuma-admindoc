---
id: instalacja
title: Procedura instalacji
sidebar_label: Procedura instalacji
sidebar_position: 3
description: Procedura instalacji systemu SPUMA.
---

# Instalacja lokalna systemu SPUMA (v7)

## Krok 1 — utworzenie bazy danych

Na serwerze bazy danych należy utworzyć nową bazę danych dla systemu SPUMA poprzez uruchomienie skryptu `SPUMA7_NEWDB.sql`

#### Zalecenia

- utworzyć bazę na docelowym serwerze SQL przed uruchomieniem usługi,
- upewnić się, że konto używane przez SPUMA posiada odpowiednie uprawnienia do odczytu i zapisu w bazie,
- zanotować nazwę serwera, nazwę bazy, login oraz hasło, które zostaną użyte w konfiguracji pliku `spuma.ini`.

---

## Krok 2 — skopiowanie plików aplikacji

Należy przekopiować komplet plików SPUMA na docelowy serwer aplikacyjny.

> **Uwaga**  
> Należy bezwzględnie zachować oryginalną strukturę katalogów.

---

## Krok 3 — konfiguracja plików

Po skopiowaniu plików należy zmodyfikować wymagane pliki konfiguracyjne.

### Plik `spuma.ini`

**Zastosowanie:** konfiguracja połączenia do bazy danych  
**Lokalizacja:** katalog główny aplikacji

Przykładowa zawartość:

```ini
DataSource=serwerSql
UserID=idUzytkownika
Password=haslo
DBName=nazwaBazy
DSTYPE=MsSQL
```

#### Opis parametrów

- `DataSource` — nazwa lub adres serwera SQL,
- `UserID` — login użytkownika bazy danych,
- `Password` — hasło użytkownika bazy danych,
- `DBName` — nazwa bazy danych SPUMA,
- `DSTYPE` — typ bazy danych. Dla Microsoft SQL Server należy ustawić `MsSQL` W przypadku wdrożenia na HANA:  `HANA`.


---

### Plik `config.json`

**Zastosowanie:** konfiguracja połączenia aplikacji klienckiej i administracyjnej z serwerem SPUMA  
**Lokalizacja:**

- `\Client\assets\config.json`
- `\Admin\assets\config.json`

Przykładowa zawartość:

```json
{
  "EndPointAddress": "4810",
  "UseRSA": true,
  "O365_SSO": {
    "Enabled": false,
    "AppId": "AaAaAaA-11aa-AaAa-1111-AsAs12344",
    "TenantId": "BbBbBbB-11bb-BbBb-1111-BsBs12344"
  }
}
```

#### Opis parametrów

- `EndPointAddress` — port komunikacyjny serwera SPUMA ustawiony w konfiguracji systemu,

- `UseRSA` — określa, czy komunikacja ma odbywać się przez HTTPS,
- `O365_SSO.Enabled` — włączenie lub wyłączenie logowania przez Microsoft 365,
- `O365_SSO.AppId` — identyfikator aplikacji zarejestrowanej w Microsoft Authentication Library,
- `O365_SSO.TenantId` — identyfikator katalogu Azure AD / Entra ID.

### Uwagi konfiguracyjne

- port powinien być zgodny z konfiguracją serwera SPUMA DataService,
:::tip 
Po instalacji domyślne ustawienie portu to `4810`. Upewnij się, że ten port jest otwarty na firewall'u.
:::
  
- plik `config.json` należy skonfigurować osobno w katalogu aplikacji klienckiej i administracyjnej,
- jeśli logowanie Microsoft 365 nie jest używane, parametr `Enabled` powinien pozostać ustawiony na `false`.
- Ustawienia `O365_SSO` nie maja zastosowania w aplikacji administracyjnej

---

## Krok 4 — instalacja serwera SPUMA DataService

Na serwerze aplikacyjnym należy wykonać następujące czynności:

### Instalacja .NET 9 Runtime

Zainstalować środowisko uruchomieniowe .NET 9 Runtime wymagane przez usługę SPUMA DataService.

### Instalacja usługi Windows

Zainstalować SPUMA DataService jako usługę Windows.

Sposób rejestracji usługi zależy od przyjętego standardu administracyjnego w organizacji. Można użyć standardowych mechanizmów systemu Windows do rejestracji usługi.

### Uruchomienie usługi

Po zainstalowaniu należy uruchomić usługę:

**SPUMA DataService**

### Zalecenia

Po uruchomieniu usługi należy sprawdzić:

- czy usługa uruchamia się poprawnie,
- czy port komunikacyjny jest nasłuchiwany,
- czy usługa ma dostęp do bazy danych,
- czy ewentualne reguły zapory systemowej umożliwiają dostęp do wskazanego portu.

## Krok 5 - Weryfikacja poprawności instalacji
Po zakończeniu instalacji należy przeprowadzić test działania systemu.

### Uruchomienie aplikacji klienta oraz aplikacji administracyjnej

Zgodnie z przekazanymi ustawieniami domyślny adres testowy aplikacji klienta to:

```text
http://domena:4810/client/
```

Domyślny adres testowy aplikacji administracyjnej to:

```text
http://domena:4810/admin/
```


### Dane logowania domyślnego

```text
login: admin
hasło: admin
```

### Zakres testu

Należy potwierdzić, że:

- strona aplikacji otwiera się poprawnie,
- aplikacja nawiązuje połączenie z usługą SPUMA DataService,
- logowanie użytkownika `admin` działa poprawnie,
- dane z bazy są odczytywane prawidłowo.

---

## Dalsze kroki po instalacji

Po potwierdzeniu poprawności instalacji należy przejść do etapu wstępnej konfiguracji systemu, obejmującego między innymi:

- konfigurację główną systemu,
- konfigurację firm,
- definiowanie użytkowników i grup,
- nadawanie uprawnień,
- konfigurację obiegów dokumentów,
- konfigurację integracji z systemami zewnętrznymi.

Szczegóły tych działań powinny zostać opisane w osobnym rozdziale: **Wstępna konfiguracja**.
