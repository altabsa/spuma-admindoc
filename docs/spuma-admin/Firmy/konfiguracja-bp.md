---
sidebar_position: 7
---

# Zakładka - Konfiguracja BP

Zakładka **Konfiguracja BP** służy do definiowania ustawień przetwarzania dokumentów dla partnerów handlowych.

Konfiguracja może być ustawiona globalnie dla firmy oraz indywidualnie dla wybranych partnerów handlowych.

Partner handlowy może zostać rozpoznany automatycznie na podstawie numeru NIP wykrytego w dokumencie. Po dopasowaniu partnera system może zastosować konfigurację z sekcji **Profil per. PH**.

---

## Właściwości

- `Profil OCR` - Określa profil OCR używany do rozpoznawania dokumentów.

- `Klasa` - Określa klasę przypisywaną do dokumentów.

- `Model GPT` - Określa model GPT używany podczas przetwarzania dokumentu. Pusta wartość powoduje użycie modelu domyślnego.

- `Zapytanie GPT` - Dodatkowe instrukcje przekazywane do agenta GPT.

- `Filtr indeksów SAP` - Wyrażenie regularne służące do filtrowania indeksów pobieranych z SAP.

- `Filtr charakterystyk SAP` - Wyrażenie regularne służące do filtrowania indeksów na podstawie charakterystyk SAP.

---

## Profil per. PH

Sekcja **Profil per. PH** umożliwia zdefiniowanie osobnej konfiguracji dla wybranego partnera handlowego.

Konfiguracja może zostać zastosowana automatycznie po wykryciu NIP partnera handlowego w przetwarzanym dokumencie.

Aby dodać konfigurację, kliknij ikonę **+**.

Dla profilu partnera handlowego dostępne są dodatkowe właściwości:

- `Dopasowanie` - Określa pole używane do identyfikacji partnera handlowego.

- `Kod/Wartość` - Wartość, względem której wykonywane jest dopasowanie.

- `Profil OCR` - Profil OCR używany dla dokumentów danego partnera.

- `Klasa` - Klasa przypisywana do dokumentów danego partnera.

- `Grupowanie linii` - Określa sposób grupowania linii dokumentu.

- `Model GPT` - Model GPT używany dla dokumentów danego partnera.

- `Zapytanie GPT` - Dodatkowe instrukcje przekazywane do agenta GPT.

- `Filtr indeksów SAP` - Wyrażenie regularne filtrujące indeksy SAP.

- `Filtr charakterystyk SAP` - Wyrażenie regularne filtrujące indeksy według charakterystyk SAP.

- `Automatyczne dodanie z KSeF` - Określa, czy dokument może zostać automatycznie dodany z KSeF po rozpoznaniu NIP partnera handlowego.

- `Właściciel` - Określa właściciela dokumentu tworzonego automatycznie z KSeF.

- `Schemat autoryzacji` - Określa schemat autoryzacji przypisywany do dokumentu tworzonego automatycznie z KSeF.

:::note
Konfiguracja z sekcji **Profil per. PH** pozwala nadpisać ustawienia ogólne firmy dla konkretnego partnera handlowego.
:::

<!-- TODO: Zweryfikować dokładną zasadę działania pól `Dopasowanie`, `Grupowanie linii` oraz priorytet konfiguracji Profil per. PH względem ustawień ogólnych. -->