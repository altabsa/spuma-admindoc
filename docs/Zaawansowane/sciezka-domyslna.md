---
id: sciezka-domyslna
position: 1
title:  Ścieżka domyślna
---

# Ścieżka domyślna

---


## 1. Do czego służy to pole?

Pole **Ścieżka domyślna** pozwala zdefiniować **Szablon automatycznej ścieżki dokumentu**, do których system automatycznie zapisze plik dokumentu w repozytorium.

Szablon może zawierać:

- **stałe fragmenty tekstu** (np. `księgowe\faktury`)
- **zmienne w nawiasach klamrowych** `{ ... }`, które system zastąpi wartościami z dokumentu (np. data dokumentu, firma, użytkownik)
- **opcjonalne formatowanie** po znaku `|` (np. format daty albo sposób zapisu słowników)

Na końcu system tworzy katalogi zgodnie z wyliczoną ścieżką i zapisuje w nich plik.

---

## 2. Przykład działania

### Szablon
```text
księgowe\faktury\{_PH | CODE}\{DOCDATE | yyyy}\{DOCDATE | MM-MMM}
```

### Przykładowa wygenerowana ścieżka
```text
księgowe\faktury\D-ACME\2026\03
```

---

## 3. Separatory i struktura katalogów

- Separator katalogów to **backslash `\`**.
- System na końcu rozbija wynikową ścieżkę po `\` i traktuje każdy element jako katalog.

Przykład:
```text
A\B\C
```
→ katalogi `A`, potem `B`, potem `C`.

> Uwaga: jeśli wstawisz `/` zamiast `\`, system nie podzieli ścieżki na katalogi zgodnie z oczekiwaniem.

---

## 4. Zmienne w szablonie `{ ... }`

Każdy fragment w `{}` jest analizowany i zastępowany wartością.

### Ogólna składnia
```text
{NAZWA}
{NAZWA | FORMAT}
{NAZWA | FORMAT, LOCALE}
```

Gdzie:
- `NAZWA` – nazwa zmiennej (niezależna od wielkości liter, bo i tak jest zamieniana na UPPERCASE)
- `FORMAT` – dodatkowe formatowanie (opcjonalne)
- `LOCALE` – lokalizacja/język (opcjonalne), używane dla dat

System:
1. odczytuje zawartość `{...}`
2. jeśli jest `|`, dzieli na nazwę i format
3. jeśli w formacie jest przecinek `,`, to część po przecinku traktuje jako `locale`
4. wstawia wynik do ścieżki

---

## 5. Dostępne zmienne (bez `_`)

Poniższe zmienne są wspierane przez kod i mogą być użyte w `{}`:

### Identyfikatory i teksty
- `{ID}` – ID dokumentu
- `{TEMPLATEID}` – ID szablonu
- `{NAME}` – nazwa dokumentu
- `{DESCRIPTION}` – opis dokumentu
- `{DOCNUM}` – numer dokumentu

### Obiekty słownikowe (zależne od danych w systemie)
Te zmienne korzystają z danych powiązanych z dokumentem (ID + nazwa):
- `{USER}` – użytkownik przypisany do dokumentu (UserID)
- `{CLASS}` – klasa dokumentu (ClassID)
- `{COMPANY}` – firma (CompanyID)

> Dla tych pól system posiada parę wartości: `[ID, Nazwa]`. To, co zostanie wstawione do ścieżki, zależy od użytego `FORMAT` (patrz rozdział 7).

### Daty
- `{DOCDATE}` – data dokumentu (DocDate)
- `{ENTERDATE}` – data wprowadzenia (EnterDate)
- `{GETDATE}` – aktualna data/czas (new Date())

Daty można formatować (rozdział 6).

---

## 6. Formatowanie dat

Dla zmiennych datowych możesz podać format po `|`, np.:

```text
{DOCDATE | yyyy}
{DOCDATE | MM}
{DOCDATE | dd}
```

Możesz też dopisać locale po przecinku:

```text
{DOCDATE | MMMM, pl}
{DOCDATE | MMM, en-US}
```

### Przykłady praktyczne
- Rok jako katalog:
  ```text
  {DOCDATE | yyyy}
  ```
  → `2026`

- Miesiąc jako liczba:
  ```text
  {DOCDATE | MM}
  ```
  → `03`

- Dzień:
  ```text
  {DOCDATE | dd}
  ```
  → `20`

- Nazwa miesiąca (zależna od locale):
  ```text
  {DOCDATE | MMMM, pl}
  ```
  → np. `marzec`

> Dokładny zestaw wspieranych znaczników formatu zależy od implementacji  w systemie, ale typowe wzorce `yyyy`, `MM`, `dd`, `MMM`, `MMMM` są standardowo używane w takich rozwiązaniach.

---

## 7. Formatowanie pól słownikowych (USER/CLASS/COMPANY) oraz atrybutów  (`_...`)

Dla pól typu słownikowego system ma zwykle dwie wartości:
- `CODE` (np. `12`)
- `VALUE` (np. `ACME Sp. z o.o.`)

Przykład:
Aby uzyskac nazwisko uzytkownika nalezy użyć składni:
```text
{USER | CODE}
```

Aby uzyskac kod klienta (przechowywanego w atrybucie **PH**)  nalezy użyć składni:
```text
{_PH_ | VALUE}
```

---


## 8. Zasady i dobre praktyki

### 8.1. Unikaj znaków ryzykownych w nazwach katalogów
Warto zadbać, aby wynik nie zawierał znaków, które bywają problematyczne w systemach plików:
- `:` `*` `?` `"` `<` `>` `|`  
oraz niepożądane końcówki spacji/kropki.


### 8.2. Uważaj na puste wartości
Jeśli dokument nie ma ustawionego np. `CompanyID`, `UserID`, `ClassID` lub daty, to wstawiona wartość może wyjść pusta (zależnie od danych i implementacji metod pomocniczych).

Dobre podejście:
- nie opieraj całej ścieżki na polu, które często bywa puste
- testuj na kilku typach dokumentów

### 8.3. Wielokrotne użycie zmiennej
Możesz użyć tej samej zmiennej w kilku miejscach, np.:
```text
{DOCDATE | yyyy}\{DOCDATE | MM}
```
Każde wystąpienie zostanie zastąpione osobno.

---

## 9. Przykładowe gotowe szablony

### A) Księgowe → firma → rok → miesiąc
```text
księgowe\faktury\{COMPANY | CODE}\{DOCDATE | yyyy}\{DOCDATE | MM}
```

### B) Klasa dokumentu → rok-miesiąc → numer dokumentu
```text
dokumenty\{CLASS | NAME}\{DOCDATE | yyyy-MM}\{DOCNUM}
```

### C) Użytkownik → data wprowadzenia → nazwa dokumentu
```text
import\{USER | ID}\{ENTERDATE | yyyy}\{ENTERDATE | MM}\{NAME}
```

### D) Zmienna rozszerzona → rok → miesiąc 
```text
księgowe\faktury\{_PH | CODE}\{DOCDATE | yyyy}\{DOCDATE | MM}
```

