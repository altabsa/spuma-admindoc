---
id: upgrade-manual
position: 5
title:  Instrukcja upgrade’u
---
## 1. Cel dokumentu

Celem dokumentu jest opisanie procedury aktualizacji systemu SPUMA DMS do nowszej wersji. Instrukcja przeznaczona jest dla administratorów systemów oraz pracowników działu IT odpowiedzialnych za utrzymanie środowiska aplikacyjnego i bazodanowego.

---

## 2. Warunki wykonania upgrade’u

Upgrade systemu należy wykonywać wyłącznie w zaplanowanym oknie serwisowym.

> **Ważne**  
> Przed rozpoczęciem aktualizacji należy bezwzględnie upewnić się, że **żaden użytkownik nie pracuje w systemie SPUMA**.  
> W czasie wykonywania upgrade’u system musi być wyłączony z normalnego użytkowania.

> **Krytyczne wymaganie**  
> Przed wykonaniem jakichkolwiek zmian należy wykonać **pełny backup plików oraz backup bazy danych**.  
> Brak aktualnej kopii zapasowej uniemożliwia bezpieczne wycofanie zmian w przypadku niepowodzenia aktualizacji.

---

## 3. Zasada wykonywania upgrade’u

Upgrade systemu SPUMA DMS należy wykonywać **wyłącznie wersja po wersji**. Nie należy pomijać wersji pośrednich.

Oznacza to, że jeżeli środowisko działa na wersji **7.4**, a wersją docelową jest **7.6**, aktualizację należy przeprowadzić etapowo:

1. wykonać upgrade z wersji **7.4 do 7.5 (w najwyższej wersji)**,
2. uruchomić system i sprawdzić poprawność działania,
3. wykonać upgrade z wersji **7.5 do 7.6**,
4. ponownie uruchomić system i sprawdzić poprawność działania.

> **Ważne**  
> Każdy etap upgrade’u powinien zakończyć się uruchomieniem systemu oraz weryfikacją poprawności działania przed przejściem do kolejnej wersji.

---

## 4. Zakres upgrade’u

Standardowy upgrade SPUMA DMS obejmuje:

- zatrzymanie usługi `SPUMA_DataService`,
- wykonanie kopii obecnej wersji plików,
- podmianę plików aplikacji na nowe,
- wykonanie kopii bazy danych,
- uruchomienie skryptów aktualizujących bazę,
- uruchomienie usługi `SPUMA_DataService`,
- weryfikację działania aplikacji WWW oraz aplikacji administracyjnej.

---

## 5. Procedura upgrade’u

### 5.1. Przygotowanie okna serwisowego

Przed rozpoczęciem prac należy:

- poinformować użytkowników o planowanej przerwie,
- upewnić się, że nikt nie jest zalogowany do systemu,
- potwierdzić dostęp do:
  - serwera aplikacyjnego,
  - serwera bazy danych,
  - pakietu z nową wersją plików,
  - skryptów aktualizacyjnych bazy danych,
- zweryfikować możliwość wykonania i odtworzenia backupu.

---

### 5.2. Zatrzymanie usługi SPUMA

Na serwerze aplikacyjnym należy zatrzymać usługę:

```text
SPUMA_DataService
```

Po zatrzymaniu usługi należy upewnić się, że proces został całkowicie zakończony i żadne pliki aplikacji nie są zablokowane przez system.

---

### 5.3. Wykonanie kopii obecnej wersji plików

Przed podmianą plików należy wykonać pełną kopię aktualnej wersji katalogu aplikacji.

Zaleca się:

- wykonanie backupu całego katalogu instalacyjnego,
- zapisanie kopii w osobnej lokalizacji,
- oznaczenie kopii numerem wersji i datą wykonania.

Przykład nazewnictwa katalogu kopii:

```text
SPUMA_backup_2026-05-25_preupgrade
```

> **Ważne**  
> Backup plików jest wymagany, aby umożliwić szybki rollback w przypadku błędu po aktualizacji.

---

### 5.4. Podmiana plików na nowe

Należy przekopiować pliki nowej wersji do katalogu instalacyjnego SPUMA, zachowując strukturę katalogów.

#### Uwagi do tego kroku

Nie należy nadpisywać poniższych plików konfiguracyjnych:

- `spuma.ini` w katalogu głównym,
- `ksef_ocrres.xsl` — jeżeli plik był modyfikowany lokalnie,
- `config.json` w katalogu `\Admin\assets\`,
- `config.json` w katalogu `\Client\assets\`.

#### Dodatkowe zalecenie

Po skopiowaniu nowej wersji należy porównać aktualne pliki konfiguracyjne z wersją dostarczoną w pakiecie instalacyjnym i sprawdzić, czy nie pojawiły się nowe parametry konfiguracyjne wymagające uzupełnienia w używanym środowisku.

> **Ważne**  
> Pliki konfiguracyjne powinny zostać zachowane z dotychczasowego środowiska, chyba że dokumentacja wersji wskazuje inaczej.

---

### 5.5. Wykonanie kopii bazy danych

Przed uruchomieniem skryptów aktualizujących należy wykonać pełną kopię bazy danych SPUMA.

Backup bazy powinien zostać wykonany bezpośrednio przed podniesieniem struktury bazy, aby w razie problemów możliwy był powrót do stanu sprzed upgrade’u.

> **Krytyczne wymaganie**  
> Nie należy uruchamiać skryptów aktualizacyjnych bez aktualnej kopii bazy danych.

---

### 5.6. Uruchomienie skryptów podnoszących bazę

Po wykonaniu backupu należy uruchomić skrypty aktualizujące strukturę i dane bazy do wersji wymaganej przez nową wersję SPUMA DMS.

Zalecenia:

- wykonywać skrypty we właściwej kolejności,
- monitorować komunikaty błędów,
- potwierdzić poprawne zakończenie każdego skryptu,
- przerwać proces w przypadku błędu i nie kontynuować bez analizy problemu.

Jeżeli aktualizacja obejmuje wiele skryptów, należy prowadzić ich wykonanie zgodnie z dokumentacją wydania.

---

### 5.7. Uruchomienie usługi SPUMA_DataService

Po zakończeniu aktualizacji plików i bazy danych należy ponownie uruchomić usługę:

```text
SPUMA_DataService
```

Po uruchomieniu należy sprawdzić:

- czy usługa startuje poprawnie,
- czy nie zgłasza błędów przy starcie,
- czy aplikacja ma dostęp do bazy danych,
- czy port komunikacyjny jest dostępny.

---

### 5.8. Weryfikacja poprawności upgrade’u

Po zakończeniu prac należy sprawdzić, czy uruchamiają się:

- klient `https://domena:port/client/`, 
- aplikacja administracyjne `https://domena:port/admin/`

Weryfikacja powinna obejmować co najmniej:

- otwarcie aplikacji w przeglądarce,
- poprawność ekranu logowania,
- możliwość zalogowania,
- poprawne połączenie z bazą danych,
- brak błędów przy uruchamianiu podstawowych funkcji.

Jeżeli po aktualizacji system nie uruchamia się prawidłowo, należy przeanalizować logi usługi oraz rozważyć odtworzenie środowiska z wykonanych backupów.

---

## 6. Zalecenia bezpieczeństwa i rollback

W przypadku niepowodzenia upgrade’u należy mieć możliwość odtworzenia:

- poprzedniej wersji plików aplikacji,
- poprzedniej wersji bazy danych.

Dlatego przed rozpoczęciem prac należy obowiązkowo posiadać:

- backup katalogu instalacyjnego,
- backup bazy danych wykonany bezpośrednio przed uruchomieniem skryptów,
- potwierdzenie, że w czasie upgrade’u nikt nie pracował w systemie.

---

## 7. Checklista upgrade’u

- zaplanowano okno serwisowe,
- poinformowano użytkowników o przerwie,
- potwierdzono, że nikt nie pracuje w systemie,
- potwierdzono ścieżkę upgrade’u wersja po wersji,
- zatrzymano usługę `SPUMA_DataService`,
- wykonano backup aktualnych plików,
- podmieniono pliki aplikacji,
- zachowano lokalne pliki konfiguracyjne,
- porównano pliki konfiguracyjne z nową wersją,
- wykonano backup bazy danych,
- uruchomiono skrypty aktualizacyjne bazy,
- uruchomiono usługę `SPUMA_DataService`,
- sprawdzono działanie klienta WWW,
- sprawdzono działanie aplikacji SPUMA Admin,
- potwierdzono poprawność działania przed przejściem do kolejnej wersji.

---

## 8. Przykład ścieżki aktualizacji

Przykład dla środowiska pracującego na wersji **7.4**, które ma zostać podniesione do wersji **7.6**:

1. wykonanie backupu,
2. upgrade z **7.4 do 7.5**,
3. uruchomienie systemu,
4. sprawdzenie poprawności działania,
5. wykonanie backupu przed kolejnym etapem,
6. upgrade z **7.5 do 7.6**,
7. uruchomienie systemu,
8. końcowa weryfikacja działania.

> **Ważne**  
> Nie należy wykonywać bezpośredniego upgrade’u z wersji **7.4 do 7.6**, z pominięciem wersji **7.5**.
