---
sidebar_position: 5
sidebar_label: Użytkownicy i grupy
---

# Definiowanie użytkowników i grup

Użytkownicy i grupy są wykorzystywani w konfiguracji dostępu do firm, uprawnień oraz obiegów dokumentów.

Zalecanym sposobem konfiguracji jest wykorzystywanie **grup użytkowników** zamiast przypisywania pojedynczych użytkowników bezpośrednio w wielu miejscach systemu.

Pozwala to:

- wykorzystywać grupy w procesach i schematach autoryzacji,
- dodawać i usuwać użytkowników z grup bez konieczności modyfikowania konfiguracji procesu,
- uprościć nadawanie i utrzymanie uprawnień,
- ograniczyć liczbę zmian wymaganych przy zmianach personalnych.

W pierwszej kolejności utwórz użytkowników, a następnie przypisz ich do odpowiednich grup.

Konfigurację wykonaj w aplikacji **SPUMA Admin** w sekcjach **Użytkownicy** oraz **Grupy użytkowników**.

## 1. Utworzenie użytkownika

Przejdź do sekcji **Użytkownicy** i dodaj nowego użytkownika.

W zakładce **Ogólne** uzupełnij podstawowe dane użytkownika.

Po uzupełnieniu danych zapisz użytkownika.

Szczegółowy opis pól dostępnych w zakładce **Ogólne** znajduje się w dokumentacji:

[**SPUMA Admin → Użytkownicy → Ogólne**](/versioned_docs/version-7.7/spuma-admin/Uzytkownicy/Uzytkownicy/ogolne)

## 2. Nadanie dostępu do firmy

Po utworzeniu użytkownika określ, do których firm ma mieć dostęp.

1. otwórz użytkownika,
2. przejdź do zakładki **Uprawnienia**,
3. w polu `Uprawnienia do firm` wybierz jedną z opcji:
   - **Do wszystkich** - użytkownik ma dostęp do wszystkich firm,
   - **Tylko do wybranych** - użytkownik ma dostęp tylko do wskazanych firm,
4. jeżeli wybierzesz **Tylko do wybranych**, dodaj odpowiednie firmy do listy,
5. zapisz zmiany.

:::note
Jeżeli wybierzesz **Tylko do wybranych**, użytkownik będzie miał dostęp wyłącznie do firm dodanych w tej sekcji.
:::

## 3. Utworzenie grupy użytkowników

Przejdź do sekcji **Grupy użytkowników** i dodaj nową grupę.

Aby utworzyć grupę użytkowników:

1. przejdź do sekcji **Grupy użytkowników** i dodaj nową grupę,
2. uzupełnij `Nazwa`, `Rola` oraz `Opis`,
6. zapisz zmiany.

Grupy warto tworzyć zgodnie z rolami lub zespołami występującymi w organizacji, np.:

- księgowość,
- dział handlowy,
- sekretariat,
- zarząd.

## 4. Przypisanie użytkowników do grupy

Po utworzeniu grupy przypisz do niej odpowiednich użytkowników.

1. otwórz grupę,
2. wybierz użytkownika,
3. dodaj go do grupy,
4. zapisz zmiany.

Grupy mogą być później wykorzystywane w:

- uprawnieniach,
- schematach autoryzacji,
- procesach autoryzacji.

:::note
Jeżeli konfiguracja pozwala na użycie grupy zamiast konkretnego użytkownika, warto korzystać z grup. Zmiana osoby wymaga wtedy tylko zmiany członkostwa w grupie, bez modyfikowania konfiguracji uprawnień lub obiegu.
:::

## 5. Weryfikacja

Po zakończeniu konfiguracji sprawdź, czy:

- użytkownik jest widoczny na liście **Użytkownicy**,
- użytkownik ma dostęp do właściwych firm,
- użytkownik jest przypisany do odpowiednich grup,
- użytkownik może poprawnie zalogować się do aplikacji WWW SPUMA,
- po zalogowaniu ma dostęp do właściwej firmy.