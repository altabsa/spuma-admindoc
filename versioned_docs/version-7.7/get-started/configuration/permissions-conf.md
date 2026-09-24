---
sidebar_position: 7
sidebar_label: Uprawnienia
---

# Nadawanie uprawnień

Po utworzeniu firm, użytkowników, grup oraz skonfigurowaniu obiegów dokumentów nadaj uprawnienia wymagane do pracy w systemie.

W SPUMA uprawnienia są konfigurowane niezależnie w trzech obszarach:

- uprawnienia do dokumentów,
- dostęp użytkowników do firm,
- uprawnienia do list:
  - dzienników,
  - raportów.

Zalecane jest nadawanie uprawnień przede wszystkim grupom użytkowników. Ułatwia to późniejsze utrzymanie konfiguracji i ogranicza konieczność modyfikowania wielu wpisów po zmianie użytkownika.

## 1. Nadanie dostępu użytkownika do firm

Dostęp do firm konfiguruje się bezpośrednio na użytkowniku.

1. otwórz sekcję **Użytkownicy**,
2. wybierz użytkownika,
3. przejdź do zakładki **Uprawnienia**,
4. w polu `Uprawnienia do firm` wybierz:
   - **Do wszystkich** — użytkownik ma dostęp do wszystkich firm,
   - **Tylko do wybranych** — użytkownik ma dostęp tylko do wskazanych firm,
5. jeżeli wybierzesz **Tylko do wybranych**, dodaj odpowiednie firmy,
6. zapisz zmiany.

Dostęp do firmy jest niezależny od uprawnień do dokumentów.

## 2. Konfiguracja uprawnień do dokumentów

Uprawnienia do dokumentów są definiowane na kilku poziomach:

**Firma → Klasa → Schemat / Proces**

Uprawnienia zdefiniowane na kolejnym poziomie nadpisują odpowiadające im uprawnienia z poziomu wcześniejszego.

Przykładowo:

- na poziomie firmy możesz nadać dostęp do wszystkich dokumentów,
- na poziomie klasy możesz ograniczyć dostęp do dokumentów określonego typu,
- na poziomie schematu lub procesu możesz dodatkowo zmienić uprawnienia dla użytkowników uczestniczących w konkretnym obiegu.

## 3. Ustawienie uprawnień na poziomie firmy

Przejdź do:

**Firmy → wybrana firma → Uprawnienia**

Dodaj wymagane wpisy uprawnień dla użytkowników lub grup.

W zależności od konfiguracji określ:

- `Typ`,
- `Status`,
- `Schemat`,
- `Pole`,
- `Obiekt`,
- `Edycja`.

Na tym poziomie zdefiniuj podstawowe uprawnienia, które mają obowiązywać dla dokumentów firmy.

Szczegółowy opis dostępnych typów uprawnień znajduje się w dokumentacji **SPUMA Admin → Uprawnienia**.

## 4. Ustawienie uprawnień na poziomie klasy

Jeżeli dana klasa wymaga innych uprawnień niż ustawione dla całej firmy:

1. otwórz sekcję **Klasy**,
2. wybierz odpowiednią klasę,
3. przejdź do sekcji **Uprawnienia**,
4. dodaj wymagane wpisy dla użytkowników lub grup,
5. zapisz zmiany.

Uprawnienia ustawione na poziomie klasy nadpisują odpowiadające im uprawnienia zdefiniowane na poziomie firmy.

## 5. Ustawienie uprawnień dla schematu lub procesu

Jeżeli uprawnienia mają zależeć od konkretnego obiegu dokumentu, skonfiguruj je na poziomie schematu lub procesu autoryzacji.

Dodaj wymagane uprawnienia dla:

- użytkowników,
- grup użytkowników,
- odpowiednich etapów procesu lub schematu.

Uprawnienia z tego poziomu nadpisują odpowiadające im ustawienia z poziomu klasy i firmy.

## 6. Kolejność uprawnień

Kolejność wpisów na liście uprawnień ma znaczenie.

Uprawnienia są sprawdzane od góry do dołu. Wpis znajdujący się niżej może nadpisać wcześniejszy wpis.

W razie potrzeby zmień kolejność wpisów za pomocą przycisków dostępnych na liście.

Przykład:

1. na poziomie klasy grupa **Księgowość** ma ustawiony brak dostępu,
2. niżej na liście użytkownik należący do tej grupy ma ustawiony **Podgląd**,
3. wpis użytkownika zostanie zastosowany później i nadpisze wcześniejsze ograniczenie grupy.

:::note
Przy konfiguracji uprawnień należy uwzględniać zarówno poziom:

**Firma → Klasa → Schemat / Proces**

jak i kolejność wpisów w ramach danego poziomu.
:::

## 7. Konfiguracja uprawnień do dzienników

Jeżeli użytkownicy mają korzystać z dzienników:

1. otwórz odpowiedni **Dziennik**,
2. przejdź do konfiguracji uprawnień,
3. dodaj wymaganych użytkowników lub grupy,
4. ustaw odpowiedni typ uprawnienia,
5. zapisz zmiany.

Uprawnienia do dzienników są konfigurowane niezależnie od uprawnień do dokumentów.

## 8. Konfiguracja uprawnień do raportów

Jeżeli użytkownicy mają korzystać z raportów:

1. otwórz odpowiedni **Raport**,
2. przejdź do konfiguracji uprawnień,
3. dodaj wymaganych użytkowników lub grupy,
4. ustaw wymagany poziom dostępu,
5. zapisz zmiany.

Uprawnienia do raportów są konfigurowane niezależnie od uprawnień do dokumentów i dzienników.

## 9. Weryfikacja

Po zakończeniu konfiguracji zaloguj się do aplikacji WWW SPUMA jako użytkownik, dla którego nadawane były uprawnienia.

Sprawdź, czy:

- użytkownik ma dostęp do właściwej firmy,
- widzi odpowiednie klasy dokumentów,
- może otwierać wymagane dokumenty,
- może wykonywać tylko dozwolone operacje,
- ograniczenia ustawione na poziomie klasy działają prawidłowo,
- uprawnienia zależne od schematu lub procesu działają zgodnie z konfiguracją,
- użytkownik ma dostęp tylko do wymaganych dzienników i raportów.

Jeżeli wynik nie jest zgodny z konfiguracją, sprawdź kolejność wpisów oraz uprawnienia ustawione na wszystkich poziomach.