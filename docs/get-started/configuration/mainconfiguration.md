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

## 2. Weryfikacja konfiguracji

Po zapisaniu konfiguracji należy sprawdzić:

- czy usługa **SPUMA DataService** uruchamia się poprawnie,
- czy skonfigurowany `HTTPPORT` jest dostępny,
- czy użytkownik może otworzyć aplikację SPUMA,
- czy aplikacja **SPUMA Admin** działa poprawnie,
- czy konfiguracja SSL jest zgodna z konfiguracją środowiska.