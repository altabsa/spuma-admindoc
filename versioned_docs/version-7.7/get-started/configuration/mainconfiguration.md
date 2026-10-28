---
sidebar_position: 3
sidebar_label: Konfiguracja główna
---

# Konfiguracja główna systemu

System SPUMA działa w oparciu o usługę **SPUMA DataService**, która odpowiada za obsługę modelu danych, kontrolę uprawnień oraz działanie aplikacji klienckiej i administracyjnej.

W pierwszej kolejności należy skonfigurować parametry modułu **DATASERVICE**, w szczególności port aplikacji WWW oraz sposób komunikacji HTTP.

## 1. Sprawdzenie portu aplikacji WWW

Domyślnie aplikacja WWW SPUMA działa na porcie:

```text
4800
```

Sprawdź, czy port `4800`:

- jest dostępny na serwerze,
- nie jest wykorzystywany przez inną usługę,
- może być używany w danym środowisku.

Jeżeli na serwerze działa firewall, zezwól na komunikację na wybranym porcie.

Jeżeli port `4800` jest dostępny, nie ma potrzeby jego zmiany.

## 2. Zmiana portu

Jeżeli port `4800` jest zajęty lub środowisko wymaga użycia innego portu, ustaw odpowiednią wartość `HTTPPORT`.

#### Zmiana portu przez SPUMA Admin

Jeżeli aplikacja **SPUMA Admin** jest dostępna:

1. przejdź do **Konfiguracja → Moduły → DATASERVICE**,
2. ustaw odpowiednią wartość `HTTPPORT`,
3. zapisz konfigurację,
4. zmień port w plikach:
   - `\Client\assets\config.json`,
   - `\Admin\assets\config.json`,
5. uruchom ponownie usługę **SPUMA DataService**.

#### Zmiana portu bezpośrednio w bazie danych

Jeżeli port `4800` jest zajęty podczas pierwszego uruchomienia i aplikacja **SPUMA Admin** nie jest dostępna:

1. otwórz tabelę `MODULECONFIG`,
2. znajdź wpis:
   - `module = DATASERVICE`,
   - `property = HTTPPORT`,
3. w polu `value` ustaw wybrany port,
4. zmień port w plikach:
   - `\Client\assets\config.json`,
   - `\Admin\assets\config.json`,
5. uruchom ponownie usługę **SPUMA DataService**.

:::warning
Port ustawiony w `MODULECONFIG` oraz w plikach `config.json` musi być taki sam.
:::

## 3. Konfiguracja SSL

Usługa **SPUMA DataService** umożliwia komunikację z aplikacjami SPUMA Client i SPUMA Admin za pomocą protokołu HTTPS.

###  Konfiguracja SPUMA DataService
Przejdź do:

**Konfiguracja → Moduły → DATASERVICE**

Sprawdź wartość `HTTPUSESSL`.

Parametr określa, czy aplikacja WWW SPUMA ma korzystać z komunikacji przez HTTPS.

- wyłączone — komunikacja bez SSL,
- włączone — komunikacja z wykorzystaniem SSL.

Jeżeli włączasz SSL:

1. ustaw `HTTPUSESSL`,
2. otwórz pliki:
   - `\Client\assets\config.json`,
   - `\Admin\assets\config.json`,
3. ustaw parametr `UseRSA` zgodnie z konfiguracją HTTPS,
4. zapisz zmiany,
5. uruchom ponownie usługę **SPUMA DataService**.

:::warning
Wartości `HTTPUSESSL` oraz `UseRSA` muszą być zgodne z konfiguracją środowiska.
:::
### Przypisanie certyfikatu SSL 

Aby umożliwić bezpieczne połączenia HTTPS, należy przypisać certyfikat SSL do portu TCP, na którym nasłuchuje usługa SPUMA DataService.

Przypisanie certyfikatu jest realizowane na poziomie systemu Windows Server za pomocą narzędzia `netsh` (HTTP.sys).
:::info
W poniższych przykładach zastosowano port **4000**.
:::
#### Wymagania

Przed rozpoczęciem konfiguracji upewnij się, że:

- Certyfikat SSL został zainstalowany w magazynie certyfikatów komputera lokalnego (**Local Computer → Personal → Certificates**).
- Certyfikat posiada klucz prywatny.
- Certyfikat jest ważny i odpowiada nazwie DNS, pod którą dostępna będzie usługa SPUMA.
- Port TCP 4000 jest skonfigurowany jako port HTTPS usługi SPUMA DataService.
- Port TCP 4000 jest dopuszczony w zaporze sieciowej, jeżeli wymagany jest dostęp z innych komputerów.
- Polecenia są uruchamiane z uprawnieniami administratora systemu Windows.

#### 1. Sprawdzenie zainstalowanego certyfikatu

Uruchom konsolę PowerShell jako administrator i wykonaj:

```powershell
Get-ChildItem Cert:\LocalMachine\My |
    Select-Object Subject, Thumbprint, NotAfter, HasPrivateKey
```

Polecenie wyświetli certyfikaty znajdujące się w osobistym magazynie certyfikatów komputera.

Odszukaj certyfikat przeznaczony dla SPUMA i skopiuj wartość **Thumbprint** (odcisk certyfikatu).

Certyfikaty można również przeglądać w interfejsie graficznym Windows:

1. Uruchom `certlm.msc`.
2. Przejdź do **Personal → Certificates** (Osobisty → Certyfikaty).
3. Otwórz wybrany certyfikat.
4. W zakładce **Details (Szczegóły)** odczytaj pole **Thumbprint (Odcisk palca)**.

#### 2. Sprawdzenie istniejącego powiązania certyfikatu

Uruchom CMD lub PowerShell jako administrator.

Aby wyświetlić aktualne powiązanie certyfikatu z portem 4000, wykonaj:

```cmd
netsh http show sslcert ipport=0.0.0.0:4000
```

Aby wyświetlić wszystkie powiązania certyfikatów HTTP.sys:

```cmd
netsh http show sslcert
```

W konfiguracji powiązania można sprawdzić m.in.:

- **Certificate Hash** – odcisk przypisanego certyfikatu.
- **Application ID** – identyfikator aplikacji.
- **Certificate Store Name** – nazwa magazynu certyfikatów.

Identyfikator aplikacji SPUMA DataService (`appid`) ma stałą wartość:

```text
{25074b78-c0bd-46e7-9317-5d5fedacb517}
```

#### 3. Dodanie powiązania certyfikatu

Jeżeli port 4000 nie ma jeszcze przypisanego certyfikatu, wykonaj:

```cmd
netsh http add sslcert ipport=0.0.0.0:4000 certhash=THUMBPRINT appid="{25074b78-c0bd-46e7-9317-5d5fedacb517}" certstorename=MY
```

Zastąp `THUMBPRINT` rzeczywistym odciskiem certyfikatu, bez spacji.

Parametry polecenia:

| Parametr | Opis |
|---|---|
| `ipport=0.0.0.0:4000` | Przypisanie certyfikatu do portu 4000 dla wszystkich lokalnych adresów IPv4. |
| `certhash` | Odcisk certyfikatu SSL. |
| `appid` | Stały identyfikator aplikacji SPUMA DataService. |
| `certstorename=MY` | Osobisty magazyn certyfikatów komputera lokalnego. |

#### 4. Zmiana przypisanego certyfikatu

Jeżeli port 4000 ma już przypisany certyfikat, można zaktualizować powiązanie poleceniem:

```cmd
netsh http update sslcert ipport=0.0.0.0:4000 certhash=NOWY_THUMBPRINT appid="{25074b78-c0bd-46e7-9317-5d5fedacb517}" certstorename=MY
```

Zastąp `NOWY_THUMBPRINT` odciskiem nowego certyfikatu.

Alternatywnie można usunąć dotychczasowe powiązanie:

```cmd
netsh http delete sslcert ipport=0.0.0.0:4000
```

A następnie dodać nowe, korzystając z polecenia opisanego w punkcie 3.

**Uwaga:** Usunięcie powiązania może spowodować czasową niedostępność komunikacji HTTPS. Zalecane jest użycie polecenia `update` zamiast usuwania i ponownego dodawania powiązania.

#### 5. Weryfikacja konfiguracji

Po dodaniu lub zmianie certyfikatu wykonaj:

```cmd
netsh http show sslcert ipport=0.0.0.0:4000
```

Sprawdź, czy:

- `Certificate Hash` odpowiada właściwemu certyfikatowi.
- `Application ID` ma wartość `{25074b78-c0bd-46e7-9317-5d5fedacb517}`.
- `Certificate Store Name` ma wartość `MY`.

Następnie sprawdź połączenie HTTPS z usługą SPUMA, otwierając adres:

```text
https://nazwa-serwera:4000/
```

Zastąp `nazwa-serwera` nazwą DNS zgodną z certyfikatem.

Prawidłowa konfiguracja TLS powinna umożliwiać nawiązanie bezpiecznego połączenia bez błędów certyfikatu. Odpowiedź HTTP zależy od konfiguracji dostępnych endpointów usługi.

#### 6. Rozwiązywanie problemów

| Problem | Możliwa przyczyna lub rozwiązanie |
|---|---|
| Nie znaleziono certyfikatu | Sprawdź, czy certyfikat został zainstalowany w magazynie `LocalMachine\My`. |
| `SSL Certificate add failed, Error: 183` | Port ma już przypisany certyfikat. Użyj polecenia `update`. |
| Błąd dostępu | Uruchom konsolę z uprawnieniami administratora. |
| Błąd certyfikatu w przeglądarce | Sprawdź ważność certyfikatu, nazwę DNS oraz zaufanie do wystawcy. |
| Brak połączenia HTTPS | Sprawdź konfigurację portu usługi SPUMA DataService, nasłuchiwanie i reguły zapory Windows. |
| Certyfikat jest widoczny, ale nie działa | Sprawdź obecność klucza prywatnego oraz poprawność odcisku certyfikatu. |

**Ważne:** Przypisanie certyfikatu do portu nie powoduje automatycznej zmiany konfiguracji SPUMA DataService. Port HTTPS skonfigurowany w usłudze musi być zgodny z portem przypisanym w HTTP.sys.

W przypadku powiązań z konkretnym adresem IP lub nazwą hosta należy odpowiednio dostosować polecenia `netsh`. Powiązania typu `hostnameport` są zarządzane odrębnie od `ipport`.

## 4. Sprawdzenie pozostałych parametrów DATASERVICE

W sekcji **Konfiguracja → Moduły → DATASERVICE** sprawdź również pozostałe parametry.

#### SPUMAHOSTIPC

Sprawdź wartość `SPUMAHOSTIPC`.

Parametr określa port IPC używany do komunikacji z usługą odpowiedzialną za wywoływanie funkcji z zewnętrznych bibliotek DLL.

Zmień wartość tylko wtedy, gdy wymaga tego konfiguracja środowiska.

#### FORCEPREVQUALITY

Sprawdź wartość `FORCEPREVQUALITY`.

Parametr określa poziom jakości podglądu dokumentu generowanego dla aplikacji WWW.

Dostępny zakres:

```text
0-100
```

Wartość `100` oznacza najwyższą jakość podglądu.

Zmniejsz wartość tylko wtedy, gdy wymagane jest ograniczenie rozmiaru przesyłanych danych.

## 5. Weryfikacja konfiguracji

Po zapisaniu konfiguracji należy sprawdzić:

- czy usługa **SPUMA DataService** uruchamia się poprawnie,
- czy skonfigurowany `HTTPPORT` jest dostępny,
- czy użytkownik może otworzyć aplikację SPUMA,
- czy aplikacja **SPUMA Admin** działa poprawnie,
- czy konfiguracja SSL jest zgodna z konfiguracją środowiska.