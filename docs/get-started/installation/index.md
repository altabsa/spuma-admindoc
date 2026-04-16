---
sidebar_position: 1
sidebar_label: Procedura instalacji
slug: /installation
---

# Instrukcja instalacji systemu SPUMA

## Cel dokumentu

Celem dokumentu jest opisanie procesu ręcznej instalacji systemu SPUMA w środowisku firmowym. Instrukcja przeznaczona jest dla administratorów systemów oraz działów IT odpowiedzialnych za przygotowanie serwera aplikacyjnego, serwera bazy danych oraz konfigurację integracji z systemami zewnętrznymi.

## Zakres systemu

System SPUMA składa się z trzech głównych elementów:

### Serwer główny — SPUMA DataService

SPUMA DataService jest usługą Windows napisaną w .NET 9. Odpowiada za:

- obsługę modelu danych,
- kontrolę uprawnień,
- udostępnianie interfejsu HTTP dla aplikacji WWW i aplikacji administracyjnej,
- komunikację i wymianę danych z systemami zewnętrznymi, takimi jak:
  - poczta elektroniczna,
  - SAP Business One,
  - KSeF,
  - mechanizmy OCR,
  - modele AI.

### Aplikacja kliencka

Aplikacja kliencka jest aplikacją HTML5 napisaną w TypeScript. Odpowiada za codzienną pracę użytkowników końcowych, w tym za:

- rejestrację dokumentów,
- podgląd dokumentów,
- katalogowanie,
- opisywanie,
- wysyłanie dokumentów w obieg,
- zatwierdzanie,
- wyszukiwanie,
- tworzenie zapisów księgowych w SAP Business One,
- raportowanie,
- obsługę dziennika korespondencji.

### Aplikacja administracyjna

Aplikacja administracyjna jest aplikacją HTML5 napisaną w TypeScript. Odpowiada za:

- konfigurację globalną i konfigurację per firma,
- definicję obiektów systemowych, takich jak:
  - klasy,
  - firmy,
  - użytkownicy,
  - katalogi,
  - grupy użytkowników,
  - słowniki,
  - obiegi dokumentów,
  - procesy i schematy,
  - dzienniki korespondencji,
  - raporty,
  - automatyzacje UI,
- definicję uprawnień,
- operacje serwisowe, takie jak:
  - kasowanie dokumentów,
  - import i eksport obiektów,
  - przebudowa uprawnień.

---