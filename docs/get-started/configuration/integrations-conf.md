---
sidebar_position: 8
sidebar_label: Integracje
---

# Konfiguracja integracji z systemami zewnętrznymi

Po zakończeniu podstawowej konfiguracji systemu skonfiguruj integracje wykorzystywane w danym środowisku.

W zależności od wdrożenia mogą to być:

- SAP Business One,
- KSeF,
- OCR,
- poczta elektroniczna.

Każdą integrację skonfiguruj tylko wtedy, gdy jest wykorzystywana w danym środowisku.

## 1. Integracja z SAP Business One

Jeżeli SPUMA ma współpracować z SAP Business One, skonfiguruj połączenie dla odpowiedniej firmy oraz przygotuj klasy dokumentów i użytkowników korzystających z integracji.

### 1.1. Weryfikacja bazy danych SAP Business One

W pierwszej kolejności sprawdź bazę danych SAP Business One przypisaną do firmy.

1. przejdź do sekcji **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Ogólne**,
4. sprawdź wartość pola `Baza`,
5. upewnij się, że wskazuje właściwą bazę danych SAP Business One,
6. w razie potrzeby popraw wartość i zapisz zmiany.

### 1.2. Konfiguracja zakładki Integracja SAP

Po zweryfikowaniu bazy danych przejdź do zakładki **Integracja SAP**.

1. otwórz sekcję **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Integracja SAP**,
4. uzupełnij wymagane pola:
   - `Adres sl`
   - `Użytkownik`
   - `Hasło` 

   oraz pozostałe pola według potrzeb zgodnie z opisem w dokumentacji:
   [**SPUMA Admin → Firmy → Integracja SAP**](/docs/spuma-admin/Firmy/integracja-sap),
5. zapisz zmiany.

### 1.3. Konfiguracja klasy do księgowania w SAP

Jeżeli dokumenty danej klasy mają być księgowane do SAP Business One:

1. przejdź do sekcji **Klasy**,
2. wybierz odpowiednią klasę,
3. przejdź do zakładki **Ogólne**,
4. ustaw opcję `Dokument zawsze tymczasowy` zgodnie z wymaganiami procesu,
5. zapisz zmiany,
6. nadaj odpowiednim użytkownikom lub grupom uprawnienie **Tworzenie dok. SAP**.

Uprawnienie **Tworzenie dok. SAP** umożliwia tworzenie dokumentu SAP na podstawie dokumentu SPUMA.

### 1.4. Konfiguracja połączenia z dodatku SPUMA4SBO

Jeżeli użytkownicy mają korzystać z integracji z poziomu dodatku **SPUMA4SBO** w SAP Business One, przygotuj konfigurację logowania osobno dla każdego użytkownika.

Dla każdego użytkownika:

1. otwórz użytkownika w **SPUMA Admin**,
2. przejdź do zakładki **Ogólne**,
3. wygeneruj token wymagany do połączenia z dodatku **SPUMA4SBO**,
4. uzupełnij ustawienia tokena (`Wygasa`, `Tryb sesji`),
5. zapisz zmiany,
6. skonfiguruj dodatek **SPUMA4SBO** do połączenia ze SPUMA z wykorzystaniem wygenerowanego tokena.

:::note
Token i ustawienia połączenia należy skonfigurować osobno dla każdego użytkownika korzystającego z dodatku **SPUMA4SBO**.
:::

### 1.5. Weryfikacja

Po zakończeniu konfiguracji sprawdź, czy:

- użytkownicy mają dostęp do funkcjonalności powiązanych z SAP, np. pobierania kartotek partnerów handlowych z SAP na fakturze kosztowej,
- użytkownicy mają dostęp do funkcji **Księguj w SAP**,
- po użyciu funkcji **Księguj w SAP** dokument jest prawidłowo tworzony w SAP Business One.

## 2. Integracja z KSeF

Jeżeli SPUMA ma korzystać z KSeF, skonfiguruj podstawowe adresy usług, dane firmy oraz profile użytkowników.

### 2.1. Konfiguracja ustawień ogólnych

Przejdź do:

**Konfiguracja → Ogólne**

Uzupełnij pola:

- `KSeF API` — adres usługi KSeF,
- `KSeF Render API` — adres usługi generującej podgląd dokumentu KSeF w formacie PDF z XML, np. http://localhost:3000/pdf.

Pole `KSeF Render API` uzupełnij, jeżeli w środowisku wykorzystywany jest osobny serwer lub usługa do generowania wizualizacji dokumentów, np. `ALTKSEF_PDF` (informacje dotyczące rozwiązania znajdują się na [**sapekspert.pl**](https://sapekspert.pl/do-pobrania/) **→ Do pobrania → KSeF**). 

Jeżeli pole nie zostanie uzupełnione, wizualizacje będą generowane przy użyciu standardowego rozwiązania.

Po uzupełnieniu wartości zapisz zmiany.


### 2.2. Konfiguracja danych KSeF dla firmy

Dla firmy korzystającej z KSeF uzupełnij dane wymagane do obsługi integracji.

1. otwórz sekcję **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Ogólne**,
4. uzupełnij `NIP` wykorzystywany dla firmy,
5. uzupełnij `Waluta` — domyślną walutę dokumentów,
6. w polu `KSeF Odcisk palca certyfikatu` wskaż odcisk palca certyfikatu przypisanego do firmy,
7. zapisz zmiany.

:::note
Certyfikat wskazany w polu `KSeF Odcisk palca certyfikatu` musi być wcześniej poprawnie zainstalowany w magazynie **Zaufane osoby**.
:::

### 2.3. Utworzenie profilu eDok dla użytkownika

Dla każdego użytkownika, który ma korzystać z KSeF, utwórz profil eDok.

1. otwórz użytkownika w **SPUMA Admin**,
2. przejdź do zakładki **Wymiana eDok**,
3. dodaj nowy profil,
4. uzupełnij `Nazwa` — nazwę profilu wyświetlaną użytkownikowi,
5. wybierz odpowiednią `Firma`,
6. ustaw `Typ` na **KSeF**,
7. zapisz zmiany.

:::note
Profil należy utworzyć osobno dla każdego użytkownika, który ma korzystać z integracji KSeF.
:::

### 2.4. Weryfikacja

Po zakończeniu konfiguracji sprawdź, czy:

- po zalogowaniu do aplikacji WWW SPUMA użytkownik ma dostęp do zakładki **KSeF**,
- użytkownik widzi właściwy profil eDok,
- faktury są prawidłowo pobierane z KSeF,
- pobrane dokumenty są przypisywane do właściwej firmy,
- dane dokumentów są poprawnie odczytywane,
- podgląd dokumentu generuje się prawidłowo,
- podczas komunikacji z KSeF nie pojawiają się błędy związane z certyfikatem lub uwierzytelnieniem.

## 3. Integracja OCR

SPUMA może wykorzystywać zewnętrzne mechanizmy do automatycznego rozpoznawania dokumentów.

W zależności od konfiguracji można korzystać z:

- systemów OCR,
- GPT.

W SPUMA można utworzyć kilka profili rozpoznawania, dostosowanych do różnych typów dokumentów lub sposobów przetwarzania.

### 3.1. Konfiguracja GPT

Jeżeli profil rozpoznawania ma wykorzystywać GPT:

1. przejdź do **Konfiguracja → Ogólne**,
2. uzupełnij pole `GPT ApiKey`,
3. zapisz zmiany.

Pole `GPT ApiKey` zawiera klucz API wykorzystywany do komunikacji z usługą GPT.

### 3.2. Konfiguracja OCR

Jeżeli profil rozpoznawania ma wykorzystywać OCR:

1. przejdź do **Konfiguracja → OCR**,
2. uzupełnij:
   - `SOS address` — adres usługi OCR,
   - `SOS port` — port usługi OCR,
   - `Poziom regionów OCR` — poziom szczegółowości rozpoznawanych regionów,
   - `Max. czas w OCRservice (min)` — maksymalny czas przetwarzania dokumentu przez usługę OCR,
3. zapisz zmiany.

Ustawienia należy dostosować do środowiska, w którym działa usługa OCR.

### 3.3. Utworzenie profili OCR

Po skonfigurowaniu połączenia z OCR lub GPT utwórz odpowiednie profile OCR.

W SPUMA można utworzyć wiele profili, zależnie od rodzaju dokumentów i sposobu ich rozpoznawania.

Dla każdego profilu:

1. przejdź do sekcji **Profile OCR**,
2. kliknij **Nowy**,
3. uzupełnij `Nazwa`,
4. opcjonalnie uzupełnij `Opis`,
5. wybierz `Typ`:
   - **Serwis OCR**,
   - **Chat GPT**,
6. dla profilu typu **Chat GPT** uzupełnij dodatkowo:
   - `Model GPT`,
   - `Zapytanie`,
7. zapisz profil.

### 3.4. Ustawienie domyślnego profilu OCR dla firmy

Jeżeli firma ma korzystać z domyślnego profilu OCR, przypisz go w konfiguracji firmy.

1. przejdź do sekcji **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Konfiguracja BP**,
4. w polu `Profil OCR` wybierz odpowiedni profil,
5. zapisz zmiany.

Ustawienie domyślnego profilu OCR wykonaj tylko wtedy, gdy jest wymagane w danym środowisku.

### 3.5. Weryfikacja

Po zakończeniu konfiguracji:

1. dodaj przykładowy dokument do SPUMA,
2. uruchom rozpoznawanie,
3. sprawdź, czy został użyty właściwy profil OCR,
4. sprawdź, czy dokument został prawidłowo przetworzony,
5. sprawdź, czy rozpoznane wartości zostały przypisane do właściwych pól dokumentu.

## 4. Poczta elektroniczna

Integracja z pocztą elektroniczną może być wykorzystywana do:

- pobierania wiadomości e-mail do SPUMA,
- wysyłania wiadomości i powiadomień ze SPUMA.

Przed konfiguracją wysyłania lub pobierania wiadomości skonfiguruj wspólne ustawienia Microsoft 365.

### 4.1. Konfiguracja Microsoft 365

Jeżeli do wysyłania i odbierania wiadomości wykorzystywane są różne skrzynki, wszystkie skrzynki muszą być skonfigurowane w ramach tej samej aplikacji Microsoft 365.

Następnie przejdź do:

**Konfiguracja → Moduły → DATASERVICE**

Uzupełnij:

- `O365_APPID`
- `O365_TENANTID`
- `O365_SECRET`

Wartości pobierz z aplikacji Microsoft 365, w której zostały skonfigurowane skrzynki wykorzystywane przez SPUMA.

Po uzupełnieniu danych zapisz zmiany.

### 4.2. Konfiguracja pobierania wiadomości

Pobieranie wiadomości konfiguruje się dla konkretnego użytkownika, który ma odbierać wiadomości ze wskazanej skrzynki.

Dla tego użytkownika:

1. otwórz użytkownika w **SPUMA Admin**,
2. przejdź do zakładki **EMail**,
3. uzupełnij `Host` — adres serwera IMAP,
4. uzupełnij `IMAP Port`,
5. uzupełnij `IMAP UserID`,
6. zaznacz `IMAP SSL`, jeżeli połączenie ma korzystać z SSL,
7. w polu `Folder (,)` wpisz folder lub foldery skrzynki, z których mają być pobierane wiadomości,
8. zapisz zmiany.

:::note
W przypadku Microsoft 365 nie jest wykorzystywane logowanie za pomocą hasła, dlatego pola `IMAP Password` nie należy uzupełniać.
:::

### 4.3. Konfiguracja wysyłania powiadomień

Konfiguracja wysyłania wiadomości odpowiada za powiadomienia e-mail wysyłane przez SPUMA do użytkowników.

W pierwszej kolejności przejdź do:

**Konfiguracja → Ogólne**

Uzupełnij:

1. `SMTP address` — adres serwera SMTP,
2. `SMTP port` — port serwera SMTP,
3. `SMTP user` — użytkownika wykorzystywanego do wysyłania wiadomości,
4. `SMTP password` — hasło użytkownika SMTP, jeżeli jest wymagane,
5. zapisz zmiany.

Następnie dla każdego użytkownika, który ma otrzymywać lub wysyłać powiadomienia związane z akcjami wykonywanymi w SPUMA:

1. otwórz użytkownika w **SPUMA Admin**,
2. przejdź do zakładki **EMail**,
3. uzupełnij pole `Odpowiedź na`,
4. zapisz zmiany.

Adres wpisany w `Odpowiedź na` jest wykorzystywany:

- jako adres, na który użytkownik otrzymuje powiadomienia,
- jako adres reprezentujący użytkownika przy wysyłaniu powiadomień związanych z jego akcjami w SPUMA.

### 4.4. Konfiguracja powiadomień użytkownika

Dla każdego użytkownika można określić, jakie powiadomienia e-mail ma otrzymywać.

Konfigurację wykonaj w zakładce **EMail** użytkownika.

Możliwe jest przypisanie m.in. powiadomień:

- **Wymagana autoryzacja**,
- **Zaakceptowano dokument**,
- **Odrzucono**,
- **Zatwierdzono przez wszystkich**,
- **Raport oczekujących**.

Użytkownik może również samodzielnie zmienić zakres otrzymywanych powiadomień w aplikacji WWW SPUMA w swoich ustawieniach.

:::note
Konfiguracja powiadomień w **SPUMA Admin** określa ustawienia początkowe użytkownika. Użytkownik może później dostosować je samodzielnie w aplikacji WWW SPUMA.
:::

### 4.5. Weryfikacja

Po zakończeniu konfiguracji sprawdź, czy:

- SPUMA prawidłowo łączy się z Microsoft 365,
- wiadomości są pobierane ze skonfigurowanej skrzynki,
- wiadomości są pobierane z właściwego folderu,
- użytkownicy otrzymują wybrane powiadomienia,
- wiadomości wychodzące są wysyłane z prawidłowej konfiguracji,
- podczas pobierania i wysyłania wiadomości nie pojawiają się błędy połączenia lub uwierzytelnienia.
