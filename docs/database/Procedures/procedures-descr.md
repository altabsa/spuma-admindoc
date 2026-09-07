---
sidebar_position: 6
---

# Szczegółowy opis Procedur

## Procedura APR_BEFOREADDTOSAP

#### Działanie

Zarządzanie operacjami wysyłanymi do SAP.

#### Obowiązkowa

Nie.

#### Opis

Procedura zwraca listę operacji, które mają zostać wysłane do SAP. Na końcu zawsze zwracany jest pierwotny request przekazany w parametrach.

#### Parametry wejściowe

- `@documents_id` - ID dokumentu SPUMA.
- `@classes_id` - ID klasy dokumentu.
- `@method` - metoda requestu.
- `@resource` - zasób, do którego kierowany jest request.
- `@content` - treść requestu.

#### Oczekiwane wyjście

- `method` - metoda operacji.
- `resource` - zasób operacji.
- `content` - treść operacji.

#### Przykład

TODO

#### Uwagi

TODO

## Procedura APR_BEFOREOCRFILL

#### Działanie

Procedura wywoływana jest przed przepisaniem pól rozpoznanych przez OCR do właściwości dokumentu.

#### Obowiązkowa

Nie.

#### Opis

Po przetworzeniu dokumentu przez OCR system analizuje rozpoznane pola i na podstawie konfiguracji [atrybutów klasy](/docs/spuma-admin/Klasy/atrybuty.md) przepisuje wartości do odpowiednich pól dokumentu.

Przed wykonaniem tego mapowania uruchamiana jest procedura `APR_BEFOREOCRFILL`, która umożliwia zmianę wartości rozpoznanych przez OCR przed zapisaniem ich do atrybutów dokumentu.

#### Parametry wejściowe

- `@documents_id` - ID dokumentu SPUMA.
- `@classes_id` - ID klasy dokumentu.

#### Oczekiwane wyjście

- zmodyfikowana tabela tymczasowa `#NVALUES`.

#### Przykłady

Usunięcie z numeru dokumentu wszystkich znaków innych niż cyfry oraz `/` i `-` dla klasy o ID `6`:

```sql
IF (@classes_id = 6)
BEGIN
    DECLARE @nr nvarchar(200)

    SELECT @nr = pvalue
    FROM #NVALUES
    WHERE pcode = 'SYS_DOCNUM';

    WHILE PATINDEX('%[^0-9/-]%', @nr) > 0
        SET @nr = REPLACE(
            @nr,
            SUBSTRING(@nr, PATINDEX('%[^0-9/-]%', @nr), 1),
            ''
        );

    UPDATE #NVALUES
    SET pvalue = @nr
    WHERE pcode = 'SYS_DOCNUM';
END
```

Usunięcie ciągu `VSW` z numeru dokumentu:

```sql
UPDATE #NVALUES
SET pvalue = REPLACE(pvalue, 'VSW', '')
WHERE pcode = 'SYS_DOCNUM';
```

#### Uwagi

Przed wywołaniem procedury tworzona jest tabela tymczasowa `#NVALUES`.

Przykładowe dane tabeli tymczasowej `#NVALUES`:

| `pcode` | `pvalue` | Uwagi |
| --- | --- | --- |
| `SYS_DOCNUM` | `31/1/2/061190` | Przekazywane zawsze |
| `SYS_DOCDATE` | `02-01-2012` | Przekazywane zawsze |
| `PH` | `D102<!>ACME S.A<!>ul. Polna 32<!>Warszawa<!>02672<!>Poland` | Przekazywane tylko wtedy, gdy klasa posiada odpowiedni atrybut własny |
| pozostałe pola, np. `Termin` | `30-01-2012` | Przekazywane tylko wtedy, gdy dla atrybutu skonfigurowano pole OCR we właściwości `Pole OCR` |

## Procedura APR_DICTIONARYVALUES

#### Działanie

Pobieranie danych do słowników systemowych.

#### Obowiązkowa

Nie.

#### Opis

Podczas uruchamiania aplikacji WWW SPUMA wypełnia słowniki systemowe.

Dane są pobierane przez wywołanie procedury `APR_DICTIONARYVALUES` osobno dla każdego słownika systemowego.

#### Parametry wejściowe

- `@companiesdicts_id` - ID słownika systemowego z tabeli [COMPANIESDICTS](/docs/database/Tables/tables-descr.md#tabela-companiesdicts).

#### Oczekiwane wyjście

Tabela wartości słownikowych zawierająca kolumny:

- `value` - wartość słownikowa,
- `description` - opis wartości.

#### Przykład

Przykład:

- dla słownika `3` - pobranie z SAP Business One listy zakupowych towarów usługowych, które nie mają zaznaczonej **Charakterystyki 3**,
- dla słownika `5` - pobranie z SAP Business One listy użytkowników.

```sql
DECLARE @rettb TABLE (
    [value] NVARCHAR(100),
    [description] NVARCHAR(250)
);

DECLARE @dbname NVARCHAR(100);

SELECT @dbname = dbname
FROM COMPANIESDICTS a
JOIN COMPANIES b ON a.companies_id = b.id
WHERE a.[id] = 1;

DECLARE @script NVARCHAR(MAX) = 'use [' + @dbname + '] ';

-- dla każdego słownika

IF @companiesdicts_id = 3
    SET @script = @script +
    'select '''' as [value], ''BRAK'' as [description]
    UNION
    SELECT
        ItemCode AS [value],
        isnull(ItemCode, '''') + '' - '' + isnull(ItemName, '''') AS [description]
    FROM [OITM]
    WHERE PrchseItem = ''Y''
      AND InvntItem = ''N''
      AND QryGroup3 = ''N''';

IF @companiesdicts_id = 5
    SET @script = @script +
    'select '''' as [value], ''BRAK'' as [description]
    UNION
    SELECT
        USER_CODE AS [value],
        U_NAME AS [description]
    FROM OUSR';

INSERT INTO @rettb
EXEC sp_executesql @script;

SELECT *
FROM @rettb;
```

#### Uwagi

Dla każdego słownika systemowego definiuje się osobną logikę pobierania danych na podstawie `@companiesdicts_id`.


## Procedura APR_FORMATEMAIL

#### Działanie

Formatowanie wiadomości wychodzących.

#### Obowiązkowa

Tak.

#### Opis

Przed wysłaniem wiadomości e-mail SPUMA uruchamia procedurę `APR_FORMATEMAIL` i na podstawie jej wyniku generuje wiadomość w formacie HTML.

SPUMA jest instalowana z predefiniowaną procedurą `APR_FORMATEMAIL`. Zalecane jest wprowadzanie zmian wyłącznie w obrębie kolumny `BODY`.

#### Parametry wejściowe

- `@messages_id` - ID wysyłanej wiadomości.

#### Oczekiwane wyjście

Procedura powinna zwrócić jeden wiersz zawierający kolumny:

- `SUBJECT` - temat wiadomości.
- `TO` - adresy e-mail odbiorców rozdzielone średnikami.
- `FROM` - adres e-mail nadawcy.
- `CC` - adresy e-mail odbiorców kopii wiadomości rozdzielone średnikami.
- `BCC` - adresy e-mail odbiorców ukrytej kopii rozdzielone średnikami.
- `BODY` - treść wiadomości.

#### Uwagi

W kolumnie `BODY` ciąg znaków `{DOCSIG}` jest zastępowany unikatowym numerem sygnatury dokumentu. Pozwala to utworzyć w wiadomości e-mail bezpośredni link do dokumentu powiązanego z wiadomością.


## Procedura APR_GETUSER_ALERTS

#### Działanie

Wyświetlanie własnych alarmów.

#### Obowiązkowa

Nie.

#### Opis

SPUMA posiada wbudowany mechanizm alarmów, który wyświetla m.in. informacje o:

- nieprzeczytanych wiadomościach,
- dokumentach wymagających komentarza,
- błędach OCR.

Procedura `APR_GETUSER_ALERTS` umożliwia definiowanie własnych alarmów.

Procedura jest wywoływana cyklicznie przez SPUMA. Zwrócone dane są prezentowane w aplikacji WWW w sekcji alarmów.

Alarmy są powiązane z dokumentami.

#### Parametry wejściowe

- `@users_id` - ID zalogowanego użytkownika.
- `@auto` - parametr nieobsługiwany, zawsze `0`.

#### Oczekiwane wyjście

Procedura powinna zwrócić tabelę zawierającą dokumenty przypisane do alarmów.

Wymagane kolumny:

- `folderpath` - nazwa alarmu w postaci ścieżki.
- `document_id` - ID dokumentu.
- `sumcount` - określa, czy liczba dokumentów z elementów podrzędnych jest sumowana w elemencie nadrzędnym:
  - `1` - tak,
  - `0` - nie.
- `isalarm` - określa, czy liczba dokumentów jest uwzględniana w głównym liczniku alarmów:
  - `1` - tak,
  - `0` - nie.

Przykładowa wartość `folderpath`:

```text
Faktury\Przeterminowane
```

zostanie wyświetlona w strukturze:

```text
Faktury
└── Przeterminowane (1)
```

#### Przykład

Alarm pokazujący faktury, które nie zostały jeszcze powiązane z dokumentem w ERP.

Założenia:

- ID klasy faktury: `6`,
- dokument należy do zalogowanego użytkownika,
- dokument znajduje się w repozytorium,
- brak `objectid` w tabeli `DOCUMENTREF` oznacza brak powiązania z dokumentem ERP.

```sql
DECLARE
    @class_id INT = 6

INSERT @ret
SELECT
    'Faktury\Do zaksięgowania',
    t0.id,
    0,
    0
FROM DOCUMENTS t0
LEFT JOIN DOCUMENTREF t1
    ON t0.id = t1.documents_id
WHERE
    t0.users_id = @users_id
    AND t0.classes_id = @class_id
    AND t0.docstatus = 3
    AND t1.objectid IS NULL;

IF EXISTS (SELECT 1 FROM @ret)
    SELECT * FROM @ret;
```

#### Uwagi

- Alarm użytkownika nie powinien zwracać dużej liczby rekordów.
- Alarm powinien być prosty i czytelny, tak aby użytkownik mógł szybko zidentyfikować elementy wymagające reakcji.

## Procedura APR_TRANSACTION

#### Działanie

Reagowanie na zmiany w bazie danych - odpowiednik wyzwalaczy SQL.

#### Obowiązkowa

Nie.

#### Opis

Procedura `APR_TRANSACTION` jest wywoływana podczas operacji dodawania, modyfikowania i usuwania danych w bazie SPUMA.

Dla operacji dodania i modyfikacji procedura jest wywoływana:

- przed zapisaniem zmian do bazy,
- po zapisaniu zmian, ale przed zatwierdzeniem transakcji.

Procedura umożliwia:

- walidację zapisywanych danych,
- anulowanie transakcji po spełnieniu określonych warunków,
- wykonanie dodatkowych operacji po zmianie danych, np. zapisów w bazie ERP.

#### Parametry wejściowe

- `@optype` - rodzaj wykonywanej operacji:
  - `A` - po dodaniu,
  - `AB` - przed dodaniem,
  - `U` - po zmianie,
  - `UB` - przed zmianą,
  - `D` - przed usunięciem.
- `@users_id` - ID użytkownika wykonującego operację.
- `@objecttype` - nazwa obiektu, którego dotyczy operacja.
- `@objectid` - ID obiektu, którego dotyczy operacja.

#### Oczekiwane wyjście

- pusty tekst `''` - transakcja jest zatwierdzana i dane zostają zapisane,
- dowolny tekst - transakcja jest anulowana, a zwrócony tekst jest wyświetlany użytkownikowi jako komunikat.

#### Przykład

Walidacja wartości atrybutu nagłówka `SUMAP` dla dokumentów klasy **ZAMOWIENIA**. Jeżeli wartość przekracza `10000`, zapis zostaje anulowany.

```sql
IF @optype = 'U' AND @objecttype = 'WFDocument'
BEGIN
    DECLARE
        @cls_id INT,
        @cls_name NVARCHAR(100),
        @cmp_id INT,
        @attr_id INT,
        @attr_value FLOAT = 0;

    SELECT
        @cls_id = a.classes_id,
        @cls_name = b.[name],
        @cmp_id = a.companies_id,
        @attr_id = c.id
    FROM DOCUMENTS a
    JOIN CLASSES b
        ON a.classes_id = b.id
    JOIN CLASSATTRIBS c
        ON c.objtype = 0
        AND c.[objid] = b.id
        AND c.iscolumn = 0
        AND UPPER(c.[name]) LIKE 'SUMAP'
    WHERE a.id = @objectid;

    IF UPPER(@cls_name) LIKE N'ZAMOWIENIA'
    BEGIN
        BEGIN TRY
            SELECT
                @attr_value = CAST([value] AS FLOAT)
            FROM DOCUMENTS_PROPERTIES
            WHERE documents_id = @objectid
              AND attribs_id = @attr_id;
        END TRY
        BEGIN CATCH
            SET @attr_value = 0;
        END CATCH;

        IF @attr_value > 10000
        BEGIN
            SELECT N'Wartość zamówienia nie może przekraczać 10 000 !!!';
            RETURN;
        END
    END
END
```

#### Uwagi

Do sprawdzenia parametrów przekazywanych do procedury można wykorzystać techniczną tabelę `APB_DEBUG`:

```sql
INSERT INTO APB_DEBUG (
    optype,
    users_id,
    objecttype,
    objectid
)
VALUES (
    @optype,
    @users_id,
    @objecttype,
    @objectid
);
```