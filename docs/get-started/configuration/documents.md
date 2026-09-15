---
sidebar_position: 6
sidebar_label: Konfiguracja obiegów dokumentów
---

# Konfiguracja obiegów dokumentów

Konfiguracja obiegów dokumentów określa sposób organizacji, opisywania i zatwierdzania dokumentów w SPUMA.

W zależności od wdrożenia konfiguracja może obejmować:

- katalogi,
- klasy dokumentów,
- atrybuty,
- schematy autoryzacji,
- procesy autoryzacji,
- algorytmy,
- wyzwalacze.

Konfigurację należy wykonać przed nadaniem docelowych uprawnień, ponieważ uprawnienia mogą być definiowane również dla klas oraz schematów lub procesów autoryzacji.

## 1. Definicja katalogów

W pierwszej kolejności utwórz katalogi, które będą wykorzystywane do organizacji dokumentów w aplikacji WWW SPUMA.

Przejdź do sekcji **Katalogi** i dodaj wymagane katalogi.

Utworzone katalogi mogą być później przypisywane do klas dokumentów.

Szczegółowy opis konfiguracji znajduje się w dokumentacji [**SPUMA Admin → Katalogi**](/docs/spuma-admin/Katalogi.md).

## 2. Utworzenie klas dokumentu

Przejdź do sekcji **Klasy** i dodaj nową klasę dokumentu.

W zakładce **Ogólne** uzupełnij podstawowe dane klasy wymagane dla danego typu dokumentu.

Po uzupełnieniu danych zapisz klasę.

Szczegółowy opis konfiguracji znajduje się w dokumentacji [**SPUMA Admin → Klasy**](/docs/spuma-admin/Klasy/lista-klas.md).


## 3. Konfiguracja schematów i procesów autoryzacji

Jeżeli dokument ma być zatwierdzany, skonfiguruj odpowiedni obieg autoryzacji.

W zależności od wymagań zastosuj:

- **Schemat autoryzacji** — dla określonej ścieżki zatwierdzania,
- **Proces autoryzacji** — gdy obieg wymaga warunków, rozgałęzień lub dodatkowej logiki.

Podczas konfiguracji odbiorców zalecane jest korzystanie z **grup użytkowników** zamiast wskazywania pojedynczych użytkowników.

Pozwala to zmieniać osoby uczestniczące w obiegu przez dodawanie lub usuwanie użytkowników z grupy, bez modyfikowania konfiguracji procesu.

Szczegółowy opis konfiguracji znajduje się w dokumentacji odpowiednich sekcji **SPUMA Admin**.

## 4. Przypisanie schematu lub procesu do klasy


Utwórz odpowiednie procesy i schematy autoryzacji.

Szczegółowe informacje oraz przykłady konfiguracji znajdują się w **SPUMA Admin → Autoryzacje →** [**Schematy**](/docs/spuma-admin/Autoryzacje/Schematy/schematy.md) [**/ Procesy**](/docs/spuma-admin/Autoryzacje/Procesy/procesy.md)

Po utworzeniu schematów i procesów przypisz wybrane elementy do odpowiednich klas dokumentów.

1. otwórz klasę,
2. przejdź do sekcji **Autoryzacje**,
3. wybierz wymagany schemat lub proces,
4. przypisz go do klasy,
5. zapisz zmiany.

Dla danej klasy możesz dodatkowo:

- wybrać schemat domyślny,
- włączyć możliwość tworzenia własnych schematów z poziomu dokumentu,
- włączyć wymagalność schematu.

## 5. Konfiguracja algorytmów

Jeżeli obsługa dokumentu wymaga dodatkowej logiki, skonfiguruj odpowiednie **Algorytmy**.

Algorytmy mogą być wykorzystywane m.in. do:

- operacji na danych dokumentu,
- obsługi linii dokumentu,
- wykonywania skryptów,
- wyświetlania komunikatów,
- wywoływania zewnętrznych bibliotek DLL.

Konfiguruj algorytmy tylko wtedy, gdy są wymagane przez dany proces.

Szczegółowy opis konfiguracji znajduje się w dokumentacji sekcji [**Algorytmy**](/docs/spuma-admin/Automatyzacja/Algorytmy/_category_.json).

## 6. Konfiguracja wyzwalaczy

Jeżeli określone operacje mają być uruchamiane w reakcji na zdarzenia w dokumencie, skonfiguruj **Wyzwalacze**.

Wyzwalacze mogą być również wykorzystywane do dodawania własnych przycisków w aplikacji WWW SPUMA.

Aby dodać przycisk:

1. utwórz nowy **Wyzwalacz**,
2. uzupełnij jego nazwę,
3. uzupełnij `Etykieta` — wartość wyświetlaną na przycisku w aplikacji WWW,
4. zapisz wyzwalacz,
5. otwórz odpowiedni algorytm,
6. w warunkach ogranicz wykonanie algorytmu do wyzwalacza o utworzonej nazwie,
7. zapisz zmiany.

Po przeładowaniu aplikacji WWW SPUMA przycisk będzie dostępny zgodnie z konfiguracją wyzwalacza i warunkami algorytmu.


## 7. Przypisanie klasy do firmy

Po zakończeniu konfiguracji klasy przypisz ją do odpowiedniej firmy.

1. otwórz sekcję **Firmy**,
2. wybierz odpowiednią firmę,
3. przejdź do zakładki **Klasy**,
4. wybierz skonfigurowaną klasę,
5. kliknij `+`,
6. zapisz zmiany.

Po przeładowaniu aplikacji WWW SPUMA klasa będzie widoczna dla danej firmy.

:::note
Klasa, która nie została przypisana do firmy, nie będzie widoczna w aplikacji WWW SPUMA dla tej firmy.
:::

## 10. Weryfikacja

Po zakończeniu konfiguracji sprawdź, czy:

- katalogi są dostępne zgodnie z konfiguracją,
- klasa jest przypisana do właściwej firmy,
- wymagane atrybuty są widoczne w aplikacji WWW SPUMA,
- dokument można utworzyć lub zarejestrować w danej klasie,
- dostępny jest właściwy schemat lub proces autoryzacji,
- dokument przechodzi przez skonfigurowane etapy,
- właściwi użytkownicy lub grupy otrzymują dokument do autoryzacji,
- skonfigurowane algorytmy i wyzwalacze wykonują się prawidłowo.