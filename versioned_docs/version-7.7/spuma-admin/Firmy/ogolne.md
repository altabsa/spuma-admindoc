---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawowe ustawienia firmy.

---

## Właściwości

- `Nazwa` - Nazwa firmy widoczna w systemie.

- `Baza` - Nazwa bazy systemu ERP powiązanej z firmą. Wartość jest używana m.in. w zapytaniach SQL i może być podstawiana pod zmienną `$DBNAME`.

- `Katalog domyślny` - Określa domyślny katalog w repozytorium, do którego trafiają dokumenty firmy po wyjściu z sekretariatu. Ustawienie może zostać nadpisane przez `Ścieżka domyślna` zdefiniowaną na klasie.

:::note
Jeżeli `Katalog domyślny` nie jest ustawiony, dokumenty trafiają do katalogu głównego firmy.
:::

- `NIP` - Numer NIP firmy wykorzystywany w integracji z KSeF.

- `Waluta` - Domyślna waluta przypisywana do dokumentów firmy.

- `KSeF. Odcisk palca certyfikatu` - Odcisk palca certyfikatu używanego w integracji z KSeF.