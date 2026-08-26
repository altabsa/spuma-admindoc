---
sidebar_position: 3
---

# Zakładka - Proces

Zakładka **Proces** służy do definiowania diagramu procesu autoryzacji. Diagram przedstawia algorytm opisujący etapy, które dokument musi przejść, aby uzyskać status **Zatwierdzony** lub zostać **Odrzucony**.

Przebieg procesu może zależeć od:

- wartości atrybutów dokumentu,
- decyzji osób autoryzujących,
- parametrów podanych podczas autoryzacji,
- przebiegu wcześniejszych etapów.

Proces składa się z punktów połączonych jednokierunkowymi przejściami. Przejścia mogą zawierać warunki decydujące o wykonaniu kolejnego etapu.

Dostępne elementy diagramu:

- **Punkt startu**,
- **Autoryzacja prosta**,
- **Autoryzacja parametryzowana**,
- **Punkty końca**.

Każdy proces powinien zawierać co najmniej:

- jeden punkt startu,
- jeden etap autoryzacji,
- jeden punkt końca.

Dostępne są dwa rodzaje punktów końca:

- **Zatwierdzenie finalne dokumentu** - kończy proces i zatwierdza dokument,
- **Odrzucenie finalne dokumentu** - kończy proces odrzuceniem dokumentu.

```mermaid
flowchart LR
    A((Start)) -.->|Warunek| B[Etap_1<br/>Autoryzacja parametryzowana]
    B -->|Przejście bezwarunkowe| C[Etap_2<br/>Autoryzacja prosta]
    C -->|Przejście bezwarunkowe| D((Zatwierdzenie))
    ```

---

## Autoryzacja prosta

**Autoryzacja prosta** wymusza wykonanie autoryzacji dokumentu w danym etapie procesu.

### Właściwości

- `Nazwa` - Kod etapu autoryzacji.

:::warning
Nazwa musi być unikatowa w ramach procesu.
:::

- `Opis` - Opis etapu widoczny w panelu administracyjnym i na diagramie.

- `Typ` - Określa sposób wskazania użytkownika lub schematu, który ma wykonać autoryzację.

| Typ | Opis |
| --- | --- |
| Użytkownik zdefiniowany | Użytkownik SPUMA wskazany bezpośrednio w konfiguracji etapu. |
| Schemat zdefiniowany | Schemat autoryzacji wskazany bezpośrednio w konfiguracji etapu. |
| Użytkownik | Użytkownik określony w poprzednich etapach procesu. |
| Schemat własny | Schemat własny utworzony w poprzednich etapach procesu. |
| Schemat | Schemat określony w poprzednich etapach procesu. |

- `Obiekt` - Obiekt wykorzystywany przez wybrany `Typ`. W zależności od typu może wskazywać użytkownika, schemat autoryzacji lub zmienną procesu.

- `Zmienna` - Zmienna, do której zostanie zapisany kod użytkownika, którego decyzja zakończyła etap autoryzacji.

> ***Przykład:*** *Etap wykorzystuje typ `Schemat zdefiniowany` i schemat `*DZIAL1`, wymagający decyzji wszystkich użytkowników działu. Jeżeli użytkownicy zatwierdzą dokument kolejno A, C, B, do zmiennej zostanie zapisany kod użytkownika B. Jeżeli użytkownik C odrzuci dokument, do zmiennej zostanie zapisany kod użytkownika C.*

- `Auto zapis` - 

- `Dodatkowe informacje` - Tekst wyświetlany użytkownikowi w oknie zatwierdzania w aplikacji WWW.

---

## Autoryzacja z parametrami

**Autoryzacja z parametrami** działa jak autoryzacja prosta, ale dodatkowo umożliwia pobranie wartości od użytkownika podczas wykonywania etapu.

Właściwości etapu poza zakładką `Parametry` działają tak samo jak dla **Autoryzacji prostej**.

### Parametry

`Parametry` definiują wartości, które użytkownik podaje podczas wykonywania etapu autoryzacji.

:::note
Etap **Autoryzacja z parametrami** powinien zawierać co najmniej jeden parametr.
:::

Dostępne typy parametrów:

| Typ | Opis |
| --- | --- |
| `Text` | Użytkownik wpisuje wartość tekstową. |
| `Int` | Użytkownik wpisuje liczbę całkowitą. |
| `Float` | Użytkownik podaje kwotę. |
| `Słownik użytkownika` | Użytkownik wybiera wartość z listy. |
| `Wybór użytkownika` | Użytkownik wybiera użytkownika z listy. |
| `Schemat` | Użytkownik edytuje własny schemat. |
| `Wybór schematu` | Użytkownik wybiera schemat z listy. |

### Właściwości parametru

- `Nazwa` - Kod parametru.

:::warning
Nazwa parametru musi być unikatowa w ramach procesu.
:::

- `Opis` - Opis parametru widoczny w panelu administracyjnym.

- `Zezwalaj null` - Określa, czy podanie wartości parametru jest opcjonalne.

- `Zmienna` - Zmienna, do której zostanie zapisana wartość podana przez użytkownika. Typ zapisanej wartości zależy od typu parametru.

Dodatkowe właściwości zależą od typu parametru.

#### Słownik użytkownika

Dla typu `Słownik użytkownika` dostępny jest przycisk **Wartości**, który otwiera konfigurację lokalnego słownika.

Dla każdej pozycji słownika definiowane są:

- `Wartość` - wartość zapisywana w parametrze,
- `Opis` - opis wartości wyświetlany użytkownikowi.

#### Wybór użytkownika

Dla typu `Wybór użytkownika` dostępna jest dodatkowa właściwość `Typ`.

Dostępne opcje:

| Typ | Opis |
| --- | --- |
| Wszyscy | Użytkownik może wybrać dowolnego użytkownika. |
| Grupa zdefiniowana | Użytkownik może wybierać spośród członków wskazanej grupy. |
| Grupa własna | Użytkownik może wybierać spośród ręcznie zdefiniowanej listy użytkowników. |

Dla opcji `Grupa zdefiniowana` pojawia się dodatkowa właściwość umożliwiająca wskazanie grupy z listy grup.

Dla opcji `Grupa własna` pojawia się właściwość `Wartości`, w której definiowana jest własna lista użytkowników.

#### Wybór schematu

Dla typu `Wybór schematu` dostępna jest dodatkowa właściwość `Typ`.

Dostępne opcje:

| Typ | Opis |
| --- | --- |
| Wszyscy | Użytkownik może wybrać dowolny dostępny schemat autoryzacji. |
| Grupa własna | Użytkownik może wybierać spośród ręcznie zdefiniowanej listy schematów. |

Dla opcji `Grupa własna` dostępna jest właściwość `Wartości`, w której definiowana jest lista schematów dostępnych do wyboru.

---

## Warunki

Warunki definiują, czy autoryzacja przejdzie z jednego etapu do kolejnego. Są przypisywane do przejść pomiędzy krokami procesu autoryzacji.

Sposób prezentacji przejść:

- linia ciągła - przejście bez warunku,
- linia przerywana - przejście z przypisanym warunkiem.

Jeżeli warunek przypisany do przejścia jest spełniony, proces przechodzi do kolejnego etapu. Jeżeli warunek nie jest spełniony, przejście jest pomijane.

Pojedynczy warunek składa się z:

```text
lewa_strona operator prawa_strona
```

> ***Przykład:***

```text
DOC._SUMAZ >= "5000"
```

Stronami warunku mogą być **Zmienne**, **Własności** oraz **Systemowe**. Dla prawej strony warunku dodatkowo dostępne są **Stałe** i **Wyzwalacze**.

Warunek może składać się z wielu warunków połączonych w grupy `AND` lub `OR`. Grupy mogą być zagnieżdżane.

### Odrzucenie etapu

W warunkach przejścia dostępna jest opcja **Odrzucone**, która pozwala zdefiniować osobną ścieżkę procesu wykonywaną w przypadku odrzucenia dokumentu przez użytkownika na danym etapie autoryzacji.

Jeżeli dla odrzucenia nie zostanie zdefiniowane osobne przejście, dokument wraca na początek procesu, do użytkownika, który rozpoczął proces z sekretariatu.


### Grupy warunków

Jeżeli przejście wymaga sprawdzenia więcej niż jednego warunku, warunki można łączyć w grupy:

- `AND` - wszystkie warunki lub grupy znajdujące się w grupie muszą być spełnione,
- `OR` - wystarczy spełnienie jednego warunku lub jednej grupy.

> ***Przykład:*** *Jeżeli `kontrola` ma wartość `Y`, to `kwota` musi być większa niż `1000` i mniejsza niż `2000`. Jeżeli `kontrola` ma wartość `N`, cały warunek jest również spełniony.*

```text
Grupa OR
├── Grupa AND
│   ├── HDR[kontrola] = "Y"
│   ├── HDR[kwota] > "1000"
│   └── HDR[kwota] < "2000"
└── HDR[kontrola] = "N"
```

W przykładzie grupa `AND` jest spełniona tylko wtedy, gdy wszystkie trzy warunki są prawdziwe. Grupa nadrzędna `OR` jest spełniona, gdy spełniona jest grupa `AND` lub warunek `HDR[kontrola] = "N"`.

 
### Zmienne

Zakładka **Zmienne** zawiera:

- zmienną systemową `EVENTARGS`,
- zmienne procesu utworzone i uzupełniane przez poszczególne etapy procesu autoryzacji.

Zmienne procesu mogą przechowywać wartości zapisane w poszczególnych etapach autoryzacji, np. wartości parametrów lub informacje o użytkowniku, którego decyzja zakończyła etap. Są dostępne w kolejnych etapach procesu i mogą być wykorzystywane podczas definiowania warunków.


Do konkretnej  zmiennej odwołujemy się przez podanie jej nazwy:

```text
NAZWA_ZMIENNEJ
```

> ***Przykład:***

```text
ILOSC > "0"
```

Warunek sprawdza wartość zmiennej `ILOSC`.


#### EVENTARGS

`EVENTARGS` jest zmienną systemową dostępną w zakładce **Zmienne**. Zawiera dane związane ze zdarzeniem uruchamiającym proces.

Do konkretnego elementu `EVENTARGS` odwołujemy się przez podanie jego nazwy w nawiasach kwadratowych:

```text
EVENTARGS[CLASSID] 
```

Dostępne elementy:

| Element | Opis |
| --- | --- |
| `OBJECTID` | Identyfikator obiektu, którego dotyczy zdarzenie. |
| `CLASSID` | Identyfikator klasy dokumentu. |
| `USERID` | Identyfikator użytkownika, który wywołał zdarzenie. |
| `DOCSTATUS` | Status dokumentu w momencie wywołania zdarzenia. |
| `ITEMCODE` | Kod towaru, którego dotyczy zdarzenie. |
| `ITEMVALUE` | Nazwa towaru, którego dotyczy zdarzenie. |
| `LINEID` | Identyfikator linii dokumentu, której dotyczy zdarzenie. |
| `CLASSATTRIBS_ID` | Identyfikator atrybutu klasy związanego ze zdarzeniem. |

> ***Przykład:***

```text
EVENTARGS[OBJECTID] = 1
```


### Własności

**Własności** umożliwiają odwołanie się do właściwości dokumentu.

Do atrybutu nagłówka dokumentu można odwołać się w formacie:

```text
DOC._NAZWA_ATRYBUTU
```

> ***Przykład:***

```text
DOC._DATA
```

Odwołuje się do atrybutu nagłówka `DATA`.

:::warning
Nazwa atrybutu w odwołaniu powinna być zapisana wielkimi literami.
:::

### Systemowe

Zakładka **Systemowe** zawiera właściwości systemowe dokumentu, które mogą być używane podczas definiowania warunków.

Dostępne właściwości:

| Właściwość | Typ | Opis |
| --- | --- | --- |
| `SYS_ID` | `Int` | ID dokumentu. |
| `SYS_USERID` | `Int` | ID użytkownika. |
| `SYS_CLASSID` | `Int` | ID klasy dokumentu. |
| `SYS_COMPANYID` | `Int` | ID firmy. |
| `SYS_TEMPLATEID` | `Int` | ID szablonu. |
| `SYS_NAME` | `Text` | Nazwa dokumentu. |
| `SYS_DESCRIPTION` | `Text` | Opis dokumentu. |
| `SYS_DOCDATE` | `Text` | Data dokumentu. |
| `SYS_ENTERDATE` | `Text` | Data wpływu dokumentu. |
| `SYS_DOCNUM` | `Text` | Numer dokumentu. |
| `SYS_BUSINESSPARTNER` | `Text` | Partner handlowy dokumentu. |
| `SYS_DUEDATE` | `Text` | Termin płatności. |
| `SYS_BASEID` | `Text` | ID dokumentu bazowego. |
| `SYS_BASEINVOICEID` | `Text` | ID faktury bazowej. |
| `SYS_TOTAL` | `Float` | Wartość brutto dokumentu. |
| `SYS_NETTOTAL` | `Float` | Wartość netto dokumentu. |
| `SYS_PAYMENTMETHOD` | `Text` | Metoda płatności. |
| `SYS_BASETYPE` | `Text` | Typ dokumentu bazowego. |
| `SYS_PRICETYPE` | `Text` | Typ ceny. |
| `SYS_CURRENCY` | `Text` | Waluta dokumentu. |

Właściwości systemowe mogą być używane zarówno po lewej, jak i po prawej stronie warunku.

### Stałe

**Stałe** są dostępne po prawej stronie warunku i pozwalają porównać wartość z wartością wpisaną bezpośrednio w polu tekstowym.

Wartość wpisuje się bez cudzysłowów. W zapisanym warunku stała jest prezentowana w cudzysłowie.

> ***Przykład:***

```text
DOC._SUMAZ >= "5000"
```

### Wyzwalacze

**Wyzwalacze** są dostępne po prawej stronie warunku i umożliwiają wykorzystanie wartości związanych ze zdarzeniem uruchamiającym proces.

> ***Przykład:***

```text
EVENTARGS[OBJECTID] = "PROPLINE"
```

### Operatory

| Operator | Znaczenie | Typ |
| --- | --- | --- |
| `=` | Równe | tekst, liczba |
| `!=` | Różne | tekst, liczba |
| `>` | Większe | liczba |
| `>=` | Większe lub równe | liczba |
| `<` | Mniejsze | liczba |
| `<=` | Mniejsze lub równe | liczba |
| `RX` | Spełnia wyrażenie regularne | tekst |
| `!RX` | Nie spełnia wyrażenia regularnego | tekst |
| `in` | Wartość znajduje się w podanym zbiorze | tekst, liczba |
| `not in` | Wartość nie znajduje się w podanym zbiorze | tekst, liczba |

## Sprzątaj

Przycisk **Sprzątaj** automatycznie porządkuje rozmieszczenie kafelków na diagramie procesu autoryzacji.

Może być używany po dodaniu lub przesunięciu elementów, aby automatycznie ułożyć je w czytelny układ.
