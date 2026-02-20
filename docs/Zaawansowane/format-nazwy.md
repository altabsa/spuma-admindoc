---
id: format-nazwy
position: 1
title:  Format nazwy
---

# Format nazwy


Pole **Format nazwy** służy do zdefiniowania **szablonu (algorytmu)** automatycznego generowania nazwy / identyfikatora dokumentu na podstawie:

* klasy dokumentu,
* atrybutów klasy (i klas bazowych),
* właściwości dokumentu (np. daty, numer dokumentu, użytkownika, firmy),

---

## 1) Ogólna zasada działania

Podczas tworzenia nazwy dokumentu system:

1. **Wybiera bazowy szablon nazwy**

   * Jeśli dokument ma przypisaną klasę:

     * jeżeli **Format nazwy** w klasie jest puste → używa domyślnego:

       * `"{NAZWA_KLASY}_{DOCNUM}"`
     * jeżeli **Format nazwy** jest uzupełnione → używa go wprost.
   * Jeśli dokument nie ma klasy → używa domyślnego:

     * `NZ_{DOCNUM}`
gdzie `DOCNUM` jest numerem dokumentu wpisanym przez użytkownika

2. **Podstawia wartości w szablonie** (placeholdery w `{...}`) zgodnie z regułami opisanymi niżej.

3. Zwraca gotową nazwę jako tekst.

---

## 2) Składnia szablonu

Szablon to zwykły tekst, w którym możesz umieszczać **placeholdery** w nawiasach klamrowych:

* Placeholdery systemowe mają postać:

  * `{DOCNUM}`, `{ID}`, `{CLASSNAME}`, `{USERNAME}`, `{CMPNAME}`, itd.
* Placeholdery atrybutów klasy mają postać:

  * `{NAZWA_ATRYBUTU}` 
> [!WARNING]  Uwaga
Atrybut jest wyszukiwany po nazwie a podstawienie robi się po wersji UPPERCASE**, np. atrybut `Department` podstawia się do `{DEPARTMENT}`.

Separatory, stałe prefiksy/sufiksy, myślniki, ukośniki itp. możesz dodawać dowolnie, np.:

* `FV/{DD_YYYY}/{DOCNUM}`
* `{CARDCODE}-{DEPARTMENT}-{DOCNUM}`

---

## 3) Dostępne placeholdery systemowe

Poniższa lista działa **zawsze** (o ile dana wartość istnieje w dokumencie).

### Identyfikatory i podstawowe dane

* `{DOCNUM}` – numer dokumentu (`m_docnum`)
* `{ID}` – wewnętrzne ID dokumentu (`m_id`)
* `{CLASSNAME}` – nazwa klasy dokumentu (zastępowane zawsze, jeśli jest klasa)
* `{CMPNAME}` – nazwa firmy (`Company`) **tylko jeśli** `company_id > 0`
* `{USERNAME}` – nazwa użytkownika **tylko jeśli** `user_id > 0`

## 4) Podstawianie atrybutów klasy (i klas bazowych)

Jeżeli dokument ma klasę, system przechodzi po atrybutach klasy **oraz kolejnych klas bazowych** (dziedziczenie), i dla każdego atrybutu:

* sprawdza, czy dokument ma właściwość o nazwie **dokładnie równej** nazwie atrybutu 
* jeśli tak — pobiera wartość i podstawia ją do placeholdera:  
  * np. atrybut `Symbol` → placeholder `{SYMBOL}`

### Wartość z opisem (`<!>`)

Jeżeli wartość ma format typu:

* `KOD<!>Opis`

to do nazwy trafia **tylko część przed `<!>`**, czyli:

* `KOD`

### Specjalna rola atrybutu typu `TYPE_CUSTOM`

Jeżeli atrybut ma typ `TYPE_CUSTOM`, to jego wartość (niezależnie od nazwy) może zostać użyta jako **źródło CARDCODE**, ale tylko wtedy, gdy:
*  klasa nie jest typu **Faktura* lub *Korekta*
*  klasa jest typu **Faktura* lub *Korekta** i pole  **Dostawca**  jest puste (system próbuje wtedy „wyciągnąć” CARDCODE z atrybutów).


## 5) Placeholdery dat

System obsługuje trzy daty:

* data dokumentu (`m_docdate`)
* data wprowadzenia (`m_enterdate`)
* data utworzenia (`m_createdat`) — **zawsze** zakładana jako dostępna

### 5.1 Data dokumentu

Jeśli data **nie jest** podana → wszystkie poniższe placeholdery są zastąpione pustym tekstem:

* `{DOCDATE}` – `YYYY-MM-DD`
* `{DD_DD}` – dzień `DD`
* `{DD_MM}` – miesiąc `MM`
* `{DD_YYYY}` – rok `YYYY`
* `{DD_YY}` – rok skrócony `YY` (ostatnie 2 cyfry)

Jeśli data istnieje → podstawienia są wykonywane wg powyższego formatu.

### 5.2 Data wprowadzenia

Jeśli data **nie jest** podana → wszystkie poniższe placeholdery są zastąpione pustym tekstem:

* `{ENTERDATE}` – `YYYY-MM-DD`
* `{ED_DD}`, `{ED_MM}`, `{ED_YYYY}`, `{ED_YY}`

Jeśli data istnieje → podstawienia jak wyżej.

### 5.3 Data utworzenia

Dla `m_createdat` system **zawsze** podstawia:

* `{CREATEDATE}` – `YYYY-MM-DD`
* `{CD_DD}`, `{CD_MM}`, `{CD_YYYY}`, `{CD_YY}`

---

## 6) Kolejność podstawiania (ważne!)

Kolejność ma znaczenie przy złożonych szablonach. W praktyce:

1. Ustalany jest szablon (NameFormat lub domyślny).
2. Podmieniane jest `{CLASSNAME}`.
3. Podmieniane są atrybuty klasy (placeholdery `{ATRYBUT}` w UPPERCASE).
4. Podmieniane jest `{CARDCODE}`.
5. Podmieniane są `{ID}`, `{DOCNUM}`.
6. Podmieniane są `{CMPNAME}`, `{USERNAME}` (jeśli dostępne).
7. Podmieniane są daty `{DOCDATE...}`, `{ENTERDATE...}`, `{CREATEDATE...}`.

---

## 7) Przykładowe formaty (do wklejenia)

### 7.1 Prosty, czytelny format domyślny

```text
{CLASSNAME}_{DOCNUM}
```

### 7.2 Faktura z rokiem i kodem kontrahenta

```text
FV_{CARDCODE}_{DD_YYYY}_{DOCNUM}
```

### 7.3 Nazwa z atrybutem działu i datą wprowadzenia

*(w klasie istnieje atrybut `Department`)*

```text
{CLASSNAME}_{DEPARTMENT}_{ED_YYYY}{ED_MM}{ED_DD}_{DOCNUM}
```

### 7.4 Nazwa z datą utworzenia i użytkownikiem

```text
{CLASSNAME}_{CD_YYYY}-{CD_MM}-{CD_DD}_{USERNAME}_{DOCNUM}
```

### 7.5 Format z obsługą wartości `KOD<!>Opis`

Jeśli atrybut `Project` ma wartość `PRJ01<!>Projekt Alfa`, to:

```text
{CLASSNAME}_{PROJECT}_{DOCNUM}
```

wygeneruje np. `Umowa_PRJ01_000123`

---

## 8) Typowe problemy i ich przyczyny

* **W nazwie zostaje `{DEPARTMENT}` zamiast wartości**

  * placeholder nie zgadza się z nazwą atrybutu (musi być UPPERCASE),
  * dokument nie ma ustawionej właściwości o tej nazwie.

* **`{CARDCODE}` jest puste**

  * klasa jest typu `Faktura` lub `Korekta` i własność  `m_businesspartner` nie jest ustawiona
  * klasa jest typu  `Inne`  i nie znaleziono atrybutu `TYPE_CUSTOM`,
  * wartość była pusta / null.

* **`{CMPNAME}` lub `{USERNAME}` nie podstawia się**

  * dokument nie ma przypisanej firmy  lub użytkownika .

* **Data dokumentu nie pojawia się**

  * Wybrana data nie jest podana na dokumencie.

---

## 9) Szybka tabela referencyjna placeholderów

| Kategoria  | Placeholder                               | Opis / format               | Kiedy działa            |
| ---------- | ----------------------------------------- | --------------------------- | ----------------------- |
| ID         | `{ID}`                                    | ID dokumentu                | zawsze                  |
| Numer      | `{DOCNUM}`                                | numer dokumentu             | zawsze                  |
| Klasa      | `{CLASSNAME}`                             | nazwa klasy                 | gdy jest klasa          |
| Firma      | `{CMPNAME}`                               | nazwa firmy                 | gdy `company_id > 0`    |
| Użytkownik | `{USERNAME}`                              | nazwa użytkownika           | gdy `user_id > 0`       |
| Kontrahent | `{CARDCODE}`                              | kod (część przed `<!>`)     | jeśli jest atrybut      |
| Data dok.  | `{DOCDATE}`                               | `YYYY-MM-DD`                | gdy `docdate != null`   |
| Data dok.  | `{DD_DD}` `{DD_MM}` `{DD_YYYY}` `{DD_YY}` | składniki daty              | gdy `docdate != null`   |
| Data wpr.  | `{ENTERDATE}`                             | `YYYY-MM-DD`                | gdy `enterdate != null` |
| Data wpr.  | `{ED_DD}` `{ED_MM}` `{ED_YYYY}` `{ED_YY}` | składniki daty              | gdy `enterdate != null` |
| Data utw.  | `{CREATEDATE}`                            | `YYYY-MM-DD`                | zawsze                  |
| Data utw.  | `{CD_DD}` `{CD_MM}` `{CD_YYYY}` `{CD_YY}` | składniki daty              | zawsze                  |
| Atrybut    | `{ATRYBUT}`                               | wartość (część przed `<!>`) | gdy właściwość istnieje |

---
