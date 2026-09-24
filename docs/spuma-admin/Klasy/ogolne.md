---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawowe ustawienia klasy.

---

## Właściwości

- `Nazwa` - Kod (nazwa) klasy

:::note
Uwaga: Kod musi być unikatowy w ramach całej bazy. Nie wolno stosować znaków narodowych i specjalnych. Zakres dozwolony to `A-Z` i znaki `_-`
:::

- `Typ` - Określa bazową konfigurację klasy. Dostępne typy:
    
| Typ | Opis |
| --- | --- |
| Inny | Klasa bez predefiniowanego zestawu atrybutów. |
| Faktura | Typ systemowy z predefiniowanym zestawem atrybutów dla faktury kosztowej. |
| Korekta | Typ systemowy z predefiniowanym zestawem atrybutów dla faktury korygującej. |
| Faktura zaliczkowa | Typ systemowy z predefiniowanym zestawem atrybutów dla faktury zaliczkowej. |

- `Opis` - Opis klasy - widoczny w panelu administracyjnym i w aplikacji WWW.

- `Scieżka domyślna` - Własność służy do zdefiniowania ścieżki katalogów repozytorium do jakiej trafi dokument tej klasy po wyjściu z sekretariatu. Szczegółowy opis znajduje się w sekcji [Ścieżka domyślna](/docs/Zaawansowane/sciezka-domyslna).

- `Dopasowanie` - Wyrażenie regularne (regex) sprawdzane dla warstwy tekstowej rozpoznanego dokumentu. Jeśli jest spełnione, dokument zmieniając status Rozpoznawany na Do sprawdzenia automatycznie określa się tą klasą.

    Klasa może być również przypisana bezpośrednio do wzorca rozpoznawania na podstawie pola `OCRSCHEMA`, czyli schematu użytego do rozpoznania dokumentu. Mechanizm może być stosowany zarówno dla dokumentów przetwarzanych przez OCR, jak i dokumentów pochodzących z KSeF.

    Regułę przypisania można dodatkowo zawęzić za pomocą odpowiedniego wyrażenia regularnego.

> ***Przykład:*** *Klasa `faktura kosztowa` ma określone wyrażenie regularne `\bfaktura\b` w polu **Dopasowanie**. Każdy dokument, którego warstwa tekstowa po rozpoznaniu OCR zawiera słowo `faktura`, zostanie zakwalifikowany do klasy `faktura kosztowa`.*

- `Klasa załącznika` - Określa klasę dokumentów rejestrowanych w aplikacji WWW jako załączniki dokumentu głównego.

    Użytkownik posiadający dostęp do dokumentu głównego ma co najmniej dostęp do podglądu załączników należących do wskazanej klasy. Jeżeli z pozostałych uprawnień wynika wyższy poziom dostępu do załącznika, stosowane są te uprawnienia.

- `Załącznik do katalogu firmy` - Jeżeli opcja jest zaznaczona, załączniki należące do klasy wskazanej w polu `Klasa załącznika` są automatycznie wysyłane w obieg razem z dokumentem głównym, pod warunkiem że w momencie wysyłki znajdują się w **Sekretariacie**.

    Załączniki są wysyłane w obieg zgodnie z domyślną autoryzacją skonfigurowaną dla klasy załącznika.

- `Kopiowanie uprawnień` - Ustawienie historycznie wykorzystywane w mechanizmach opartych o własną autoryzację.

:::note
W obecnej wersji systemu opcja `Kopiowanie uprawnień` nie jest wykorzystywana.
:::

- `Kolor` - Określenie koloru klasy . Używane do wyróżnienia dokumentów na liście w aplikacji WWW.

- `Format nazwy` - Ciąg znaków określających jak tworzone będzie nazewnictwo (numer kancelaryjny) dokumentu danej klasy. Szczegółowy opis znajduje się w sekcji [Format nazwy](/docs/Zaawansowane/format-nazwy).

- `Kontrola nazwy` - Jak generowana jest nazwa dokumentu: 

| Opcja | Opis |
| --- | --- |
| Automatycznie | Nazwa jest generowana automatycznie i nie może być edytowana. |
| Edycja | Nazwa jest generowana po kliknięciu przycisku i może być edytowana, ale musi być zgodna z polem **Format nazwy**. |
| Nie sprawdzaj | Nazwa jest generowana po kliknięciu przycisku i może być dowolnie edytowana. |

- `Kontrola unikalności nazwy` - sprawdzanie czy nazwa dokumentu jest unikalna w ramach całej bazy

- `Kontrola unikalności numeru` - sprawdzanie czy numer dokumentu jest unikalny w ramach całej bazy

- `Numer dokumentu wymagany` - Dokumenty tej klasy wymagać będą podania numeru

- `Zawsze jako tymczasowy w SAP` - Zapisuje do SAP dokumenty zawsze jako tymczasowe. 


