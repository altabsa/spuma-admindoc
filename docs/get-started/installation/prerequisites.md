---
id: prerequisites
title: Wymagania wstępne
sidebar_label: Wymagania wstępne
sidebar_position: 1
description: Wymagania wstępne systemu.
---

# Wymagania wstępne

## Informacje ogólne

SPUMA nie posiada dedykowanego instalatora. Instalacja wykonywana jest ręcznie i obejmuje:

- skopiowanie plików aplikacji,
- utworzenie bazy danych,
- edycję plików konfiguracyjnych,
- instalację i uruchomienie usługi Windows.


## Wymagania systemowe

Do instalacji wymagane są:

- serwer Windows dla uruchomienia usługi SPUMA DataService,
- środowisko uruchomieniowe .NET 9 Runtime,
- dostęp do serwera SQL,
- uprawnienia administracyjne do instalacji usługi Windows,
- pakiet plików aplikacyjnych SPUMA.

## Obsługiwane bazy danych

SPUMA obsługuje następujące silniki bazodanowe:

- Microsoft SQL Server — wersja co najmniej 2008 R2,
- SAP HANA DB — wersja 2.0.

Baza danych zakładana jest ręcznie na podstawie dostarczonego skryptu SQL.

## Systemy zależne

Domyślnie SPUMA korzysta z następujących systemów zewnętrznych:

### Wymagane

- **SAP Business One Service Layer**
- **Biblioteki SAP Business One DI**

### Opcjonalne

- **SPUMA OCR Service**  
  Usługa odpowiedzialna za zaawansowane rozpoznawanie OCR faktur. Bazuje na bibliotekach ABBYY FlexiCapture 12 SDK.

- **KSEF-PDF**  
  Usługa odpowiedzialna za generowanie dokumentu PDF faktury KSeF na podstawie danych XML. Bazuje na bibliotekach udostępnianych przez Ministerstwo Finansów.

- **SPUMA4SBO**  
  Dodatek do SAP Business One rozszerzający integrację systemu.



## Struktura wdrożenia

SPUMA DataService pełni jednocześnie rolę:

- warstwy back-endowej,
- serwera HTTP dla aplikacji klienckiej,
- serwera HTTP dla aplikacji administracyjnej.

Oznacza to, że aplikacje klienta i administratora są udostępniane przez usługę SPUMA DataService.

