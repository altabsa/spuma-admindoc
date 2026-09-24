---
sidebar_position: 4
---

# Zakładka - Atrybuty

Zakładka **Atrybuty** służy do definiowania pól dostępnych dla dokumentów danej klasy.

Atrybuty są podzielone na:

- **Atrybuty nagłówka** - definiują pola wyświetlane w sekcji atrybutów dokumentu,
- **Atrybuty linii** - definiują kolumny dostępne w pozycjach dokumentu.

Zestaw atrybutów jest definiowany osobno dla każdej klasy.

Dla klasy typu **Inny** lista atrybutów jest pusta i wymaga ręcznej konfiguracji.

Dla klas typu **Faktura** i **Korekta** system dodaje atrybuty systemowe. Do obu sekcji można również dodać własne atrybuty.

---

## Właściwości

- `Nazwa` - Kod atrybutu. Nazwa musi być unikatowa w ramach klasy.

:::note
Nazwa nie musi być unikatowa w całej bazie danych. Stosowanie tej samej nazwy dla odpowiadających sobie atrybutów w różnych klasach ułatwia wyszukiwanie. Przykładowo dla atrybutu partnera handlowego stosuj kod `PH`.
:::

- `Wymagany` - Określa, kiedy podanie wartości atrybutu jest wymagane.

| Opcja | Opis |
| --- | --- |
| Brak | Wartość atrybutu nie jest wymagana. |
| Zawsze w firmie | Wartość jest wymagana przed opuszczeniem sekretariatu przez dokument. |
| Zatwierdzony | Wartość jest wymagana przed zatwierdzeniem dokumentu. |

- `Opis` - Opis atrybutu widoczny wyłącznie w panelu administracyjnym.

- `Etykieta` - Nazwa pola lub kolumny wyświetlana w aplikacji WWW.

- `Kolejność` - Określa kolejność wyświetlania atrybutu w aplikacji WWW.

- `Widoczność` - Określa, czy atrybut jest widoczny w aplikacji WWW.

- `Pole OCR` - Nazwa pola schematu OCR, z którego wartość zostanie przepisana do atrybutu po rozpoznaniu dokumentu. Dostępne wartości zależą od użytego schematu OCR.

Najczęściej używane pola nagłówka:

| Pole OCR | Zawartość |
| --- | --- |
| `INVOICENUMBER` | Numer faktury. |
| `INVOICEDATE` | Data wystawienia faktury. |
| `DUEDATE` | Data płatności. |
| `NIP` | Numer NIP sprzedawcy. |
| `TOTALAMOUNT` | Wartość brutto faktury. |
| `TOTALAMOUNTBEFTAX` | Wartość netto faktury. |
| `ACCOUNT` | Konto bankowe sprzedawcy. |
| `REFNUMBER` | Numer referencyjny. |

Najczęściej używane pola linii:

| Pole OCR | Zawartość |
| --- | --- |
| `CODE` | Kod towaru. |
| `NAME` | Opis towaru. |
| `PRICE` | Cena netto. |
| `PRICEBEFDISC` | Cena netto przed rabatem. |
| `PRICEAFDISC` | Cena netto po rabacie. |
| `QTY` | Ilość. |
| `UNIT` | Jednostka miary. |
| `TAXPERCENT` | Procent podatku. |
| `TAX` | Wartość podatku. |
| `TOTAL` | Wartość brutto. |
| `TOTALNET` | Wartość netto. |
| `TOTALBEFDISC` | Wartość brutto przed rabatem. |
| `TOTALBEFNET` | Wartość netto przed rabatem. |

- `Pole ERP` - Nazwa pola w systemie ERP, do którego zostanie przepisana wartość atrybutu. Pole jest używane przez aplikacje ERP i dodatki integracyjne, np. SPUMA4SBO, m.in. przez mechanizm **Wyślij do SAP** dla klas systemowych.

- `Format` - Wyrażenie regularne (`regex`) używane do walidacji wartości atrybutu.

  Pole pozwala wymusić określoną strukturę danych, np. kod pocztowy.
    
    > ***Przykład:*** *Format kodu pocztowego `00-000`:*

  ```regex
  ^[0-9]{2}-[0-9]{3}$

- `Algorytm` - Wyrażenie lub kod JavaScript wykonywany dla danego atrybutu. Mechanizm może być stosowany zarówno dla atrybutów nagłówka, jak i atrybutów linii.

  Algorytm może służyć m.in. do:
  - wyliczania wartości,
  - przeliczania danych,
  - automatycznego ustawiania wartości na podstawie danych dokumentu.

  W algorytmie można odwoływać się do danych dokumentu:

  - pola nagłówka: `DOCNAME`, `DOCNUM`, `DOCDATE`, `ENTERDATE`,
  - dodatkowe pola nagłówka: `_[Nazwa pola dodatkowego]`,
  - pola linii: `L[id pozycji][Nazwa kolumny]`,
  - agregacja wartości linii: `SUM([Indeks od],[Ilość],[Operator wybierania linii])`.

  Wyrażenie JavaScript może zostać wpisane bezpośrednio w polu `Algorytm`.

  > ***Przykład:*** *Ustawienie wartości na podstawie aktualnie zalogowanego użytkownika.*

  ```js
  'Wprowadził : ' + USERNAME;

- `Typ` - Typ danych przechowywanych w atrybucie. Szczegółowy opis dostępnych typów znajduje się w sekcji [**Typy danych**](/docs/spuma-admin/typy-danych.md).

    Dla wybranych typów dostępne są dodatkowe właściwości:

  - `Partner handlowy` - udostępnia właściwość `Filtrowanie PH`, która określa zakres partnerów handlowych dostępnych do wyboru.
  - typy słownikowe - udostępniają właściwości:
    - `Widok listy` - określa sposób prezentacji wartości słownika,
    - `Dowolne wartości` - pozwala na wprowadzanie wartości spoza słownika.

<!--- `Typ` - Określa typ danych przechowywanych w atrybucie.

| Typ | Opis |
| --- | --- |
| Liczba całkowita (Int) | Pole przechowuje liczby całkowite. |
| Liczba rzeczywista (Float) | Pole przechowuje liczby rzeczywiste. |
| Tekst (Text) | Pole przechowuje tekst. |
| Czas (DateTime)| Pole przechowuje datę. Dostępny jest kalendarz do jej wyboru. |
| Partner handlowy | Pole udostępnia listę partnerów handlowych pobranych z SAP Business One. Dla typu dostępne jest pole `Filtrowanie PH`:<ul><li>Wszyscy aktywni PH</li><li>Wszyscy aktywni dostawcy</li><li>Wszyscy aktywni odbiorcy</li><li>Wszyscy aktywni prospekci</li></ul> |
| Słownik systemowy | Pole typu lista rozwijana. Dane są pobierane ze słownika systemowego zdefiniowanego dla firmy. Po wybraniu typu użyj opcji `Przypisz`, aby wskazać słownik. (szczegóły patrz [Słowniki systemowe](/docs/spuma-admin/Slowniki/Slowniki-systemowe/systemowe.md)) |
| Słownik użytkownika | Pole typu lista rozwijana. Pole pobiera wartości ze słownika zdefiniowanego bezpośrednio w konfiguracji atrybutu. Po wybraniu typu użyj opcji `Definiuj`, aby otworzyć konfigurację słownika. Dla każdej pozycji wpisz `Wartość` oraz `Opis`. |
| Słownik interaktywny | Pole typu lista rozwijana. Dane są pobierane ze wskazanego słownika interaktywnego. (szczegóły patrz [Słowniki dynamiczne](/docs/spuma-admin/Slowniki/Slowniki-dynamiczne/dynamiczne.md))|
| Słownik stały | Pole typu lista rozwijana. Dane są pobierane ze wskazanego słownika statycznego. (szczegóły patrz [Słowniki statyczne](/docs/spuma-admin/Slowniki/Slowniki-statystyczne/statyczne.md))|
| Długi tekst | Pole typu memo. Umożliwia wprowadzenie długiego tekstu. W aplikacji WWW otwiera osobne okno do edycji i podglądu zawartości. |

---

### Dodatkowe ustawienia typów słownikowych

Dla typów słownikowych dostępne są dodatkowe ustawienia:

- `Widok listy` - Określa sposób wyświetlania wartości.

| Opcja | Opis |
| --- | --- |
| Auto | System automatycznie dobiera sposób wyświetlania listy. |
| Lista rozwijana | Wartości są wyświetlane jako lista rozwijana. |
| Lista interaktywna | Wartości są wyświetlane jako lista z wyszukiwaniem. |

- `Dowolne wartości` - Zezwala na wpisanie wartości spoza wskazanego słownika.  -->
---

### Dodatkowe właściwości atrybutów linii

Dla atrybutów linii dostępne są dodatkowe pola:

- `Szerokość` - Określa szerokość kolumny atrybutu w aplikacji WWW. Wartość `0` oznacza automatyczne dopasowanie szerokości.

- `Sumator` - Włącza sumowanie wartości atrybutu dla wszystkich linii dokumentu. Opcja jest dostępna dla atrybutów liczbowych.

- `Pole porównawcze` - Określa atrybut nagłówka, z którym porównywana jest suma wartości z pola `Sumator`. 

