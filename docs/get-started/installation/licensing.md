---
id: licensing
title: Pozyskanie i aktywacja licencji
sidebar_label: Licencja
sidebar_position: 4
description: Pozyskanie i aktywacja licencji
---
# Pozyskanie i aktywacja licencji

Do uruchomienia systemu SPUMA wymagana jest licencja nadawana przez serwer licencyjny Altab. Proces składa się z przygotowania pliku z numerem seryjnym, automatycznego wysłania prośby o licencję oraz pobrania nadanej licencji w aplikacji SPUMA Admin.

## 1. Zatrzymanie usługi

Przed rozpoczęciem konfiguracji licencji zatrzymaj usługę Windows:

```text
SPUMA Data Service
```

## 2. Uzyskanie pliku `licconf.ini`

Plik `licconf.ini` zawiera numer seryjny wykorzystywany do identyfikacji instalacji. Można go uzyskać na jeden z poniższych sposobów.

#### Istniejący serwer licencji AltabLicensing

Jeżeli w środowisku działają już inne produkty Altab:

1. znajdź plik `conf.ini` w katalogu istniejącego serwera licencji **AltabLicensing**,
2. skopiuj plik,
3. zmień nazwę kopii na:

```text
licconf.ini
```

#### Nowa instalacja bez innych produktów Altab

Jeżeli w środowisku nie ma jeszcze serwera licencji ani innych produktów Altab, skontaktuj się z producentem w celu uzyskania właściwego pliku `licconf.ini`.

> **Ważne**
> Nie należy samodzielnie modyfikować zawartości pliku `licconf.ini`.

## 3. Wgranie pliku

Skopiuj plik:

```text
licconf.ini
```

do katalogu głównego usługi **SPUMA Data Service**.

## 4. Wysłanie prośby o licencję

Uruchom ponownie usługę:

```text
SPUMA Data Service
```

Po uruchomieniu usługa automatycznie połączy się z serwerem licencyjnym Altab i wyśle prośbę o nadanie licencji.

Na tym etapie należy poczekać, aż Altab przypisze odpowiednią licencję do numeru seryjnego instalacji.

## 5. Pobranie licencji

Po otrzymaniu potwierdzenia nadania licencji:

1. zaloguj się do aplikacji **SPUMA Admin**,
2. otwórz **Menu użytkownika**,
3. wybierz **Sprawdź licencję**,
4. kliknij **Pobierz**.

System pobierze aktualną licencję z serwera licencyjnego Altab.

## 6. Weryfikacja

Po pobraniu licencji sprawdź, czy:

* aplikacja nie wyświetla komunikatu o braku licencji,
* widoczne są właściwe moduły i funkcje,
* zakres licencji odpowiada zamówionej konfiguracji.

Jeżeli licencja nie jest dostępna, upewnij się, że Altab zakończył proces jej nadawania, a serwer SPUMA ma dostęp sieciowy do serwera licencyjnego.
