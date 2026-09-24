---
sidebar_position: 6
---

# Szczegółowy opis Tabel

## Tabela ALERTEXCLUSION

**Opis:** Wykluczenia wyników alarmów użytkownika.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 	
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 	
| 	type	 | 	int	 | 		 | 	Typ alarmu | 		 | 
| 	user_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id** | ID użytkownika, którego dotyczy wykluczenie | 		 |
| 	key	 | 	nvarchar(256)	 | 		 | 		Klucz identyfikujący alarm lub grupę wyników | 		 |
| 	objid	 | 	varchar(128)	 |  [DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id** | ID dokumentu wykluczonego z wyników alarmu | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu | 		 |


## Tabela ALLOWEDOCUMENTS

**Opis:** Uprawnienia użytkowników do dokumentów.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	Numer dokumentu	 | 		 |
| 	marktorebuild	 | 	bit	 | 		 | Czy przebudować uprawnienie | 0 - Nie, 1 - Tak |
| 	users_ids	 | 	varchar(MAX)	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Kody użytkówników wypisane po przecinku	 | 		 |


## Tabela ALLOWEDUSERS

**Opis:** Uprawnienia użytkowników do dokumentów (obecnie nieużywana).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	Numer dokumentu	 | 		 | 
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Kod użytkównika	 | 		 | 


## Tabela APB_DEBUG

**Opis:**  Tabela techniczna do diagnostyki zdarzeń `APR_TRANSACTION`

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu | 		 | 
| 	optype	 | 	varchar(2)	 | 		 | Rodzaj wykonywanej operacji | 		 | 
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | ID Użytkownika wykonującego operację | 		 | 
| 	objecttype	 | 	varchar(128)	 | 		 |  Nazwa obiektu, którego dotyczy operacja | 		 | 
| 	objectid	 | 	int	 | 		 | 	ID Obiektu, którego dotyczy operacja | 		 | 


## Tabela ATTRIBDICTS

**Opis:** Tabela przechowuje powiązania atrybutów ze słownikami systemowymi firmy.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	classattribs_id	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	Numer atrybutu	 | 		 | 
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	Numer firmy	 | 		 | 
| 	companiesdicts_id	 | 	int	 | 	[COMPANIESDICTS](/docs/database/Tables/tables-descr.md#tabela-companiesdicts) **id**	 | 	Kod słownika systemowego firmy | 		 | 


## Tabela AUTHSCHEMA_INSPARAMETERS

**Opis:** Proces autoryzacji - parametry instrukcji, czyli etapów procesu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Procesu autoryzacji	 | 		 | 
| 	insintid	 | 	int	 | [AUTHSCHEMA_INSTRUCTIONS](/docs/database/Tables/tables-descr.md#tabela-authschema_instructions) **intid** | ID Etapu danego schematu | 		 | 
| 	intid	 | 	int	 | 		 | Numer kolejny parametru w obrębie danego etapu procesu | 		 | 
| 	name	 | 	varchar(100)	 | 		 | 	Nazwa parametru wejściowego	 | 		 | 
| 	description	 | 	ntext	 | 		 | 	Opis parametru wejściowego	 | 		 | 
| 	type	 | 	int	 | 		 | 	Typ	parametru | 0 - Text, 1 - Int, 2 - Float, 3 - Słownik użytkownika, 4 - Wybór użytkownika, 5 - Schemat, 6 - Wybór schematu | 
| 	allownull	 | 	bit	 | 		 | 	Zezwalaj null (pustą wartość) | 0 - Nie, 1 - Tak | 
| 	variable_id	 | 	int	 | 	[PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej	w obrębie danego procesu autoryzacji | 		 | 
| 	objtype	 | 	int	 | 		 | 	Typ obiektu (parametru)	 | 	0 - Wszyscy, 1 - Grupa zdefiniowana, 2 Grupa własna	 | 
| 	objid	 | 	int	 | 	[USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**	 | 	ID Obiektu powiązanego	 | 		 | 


## Tabela AUTHSCHEMA_INSTRUCTIONS

**Opis:** Proces autoryzacji - instrukcje, czyli etapy procesu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	authschemas_id	 | 	int	 | [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Procesu autoryzacji	 | 		 | 
| 	intid	 | 	int	 | 		 | 	Numer kolejnej instrukcji w obrębie danego procesu autoryzacji	 | 		 | 
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa instrukcji	 | 		 | 
| 	description	 | 	ntext	 | 		 | 	Opis instrukcji	 | 		 | 
| 	type	 | 	int	 | 		 | 	Rodzaj instrukcji 	 | 	0 - Autoryzacja podstawowa 1 - Autoryzacja parametryzowana	 | 
| 	objid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**, [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**, [PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid**	 | 	ID Powiązanego obiektu	 | 		 | 
| 	objtype	 | 	int	 | 		 | 	Typ obiektu	 | 	0 - Użytkownik zdefiniowany 1 - Schemat zdefiniowany 2 - Użytkownik (przekazana zmienna), 3 - Schemat własny, 4 - Schemat	 | 
| 	addinfo	 | 	nvarchar(MAX)	 | 		 | 	Dodatkowe informacje	 | 		 | 
| 	variable_id	 | 	int	 | [PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | ID Zmiennej w obrębie danego procesu autoryzacji | 		 | 
| 	autosave	 | 	bit	 | 		 | Auto zapis | 		 | 
| 	urgent	 | 	bit	 | 		 | 	Pilne	 | 	0 - Nie, 1 - Tak	 | 


## Tabela AUTHSCHEMA_PARVALUES

**Opis:** Proces autoryzacji - wartości parametru typu **Wybór schematu**

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Procesu autoryzacji	 | 		 | 
| 	insintid	 | 	int	 | 	[AUTHSCHEMA_INSTRUCTIONS](/docs/database/Tables/tables-descr.md#tabela-authschema_instructions) **intid** | 	ID Etapu w obrębie danego procesu autoryzacji | 		 | 
| 	prmintid	 | 	int	 | [AUTHSCHEMA_INSPARAMETERS](/docs/database/Tables/tables-descr.md#tabela-authschema_insparameters) **insintid** | ID Numeru parametru na danym etapie | 		 | 
| 	value	 | 	nvarchar(255)	 | [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id** | 	ID Schematu	ujętego w parametrze | 		 | 
| 	description	 | 	nvarchar(512)	 | 		 | 	Nazwa schematu | 		 | 


## Tabela AUTHSCHEMA_PERMISSIONS

**Opis:** Proces autoryzacji - uprawnienia specjalne.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Schematu lub procesu autoryzacji	 | 		 | 
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu (Nieużywane) | 		 | 
| 	attribs_id	 | 	int	 | 	[ATTRIBDICTS](/docs/database/Tables/tables-descr.md#tabela-attribdicts) **id**	 | 	Pole - ID Atrybutu klasy / Pola systemowego  | 	-1 Nazwa, -2 Opis, -3 Numer, -4 Klasa, -5 Schemat zatwierdzania, -6 Data dokumentu -7 Data wejscia, > 0	Atrybuty klasy | 
| 	allow	 | 	bit	 | 		 | Edycja | 	0 - Zablokuj, 1 - Zezwól	 | 
| 	objid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**, [USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**, [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Powiązanego obiektu	 | 		 | 
| 	objtype	 | 	int	 | 		 | 	Typ obiektu	 | 	0 - Użytkownik, 1 - Grupa użytkowników, 2 - Schemat autoryzacji 3 - Numer etapu autoryzacji	 | 
| 	authmode	 | 	int	 | 		 | Uprawnienia dla | 	0 - Nagłówek, 1 - Linie	 | 
| 	authseq	 | 	int	 | 		 | Nieużywane | 		 | 
| 	proptype	 | 	int	 | 		 | 	Typ uprawnienia | 	0 - Główne, 1 - Przenaszalność 7 - Edycja obcych linii, 10 - Zmiana zasobów	 | 
| 	order	 | 	int	 | 		 | 	Kolejność uprawnienia	 | 		 | 


## Tabela AUTHSCHEMA_RECIPIENTS

**Opis:** Schemat autoryzacji - Odbiorcy.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Schematu autoryzacji	 | 		 | 
| 	objid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**, [USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**, [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	Odbiorca - ID Powiązanego obiektu	 | 		 | 
| 	objtype	 | 	int	 | 		 | 	Typ odbiorcy 	 | 	0 - Użytkownik, 1 - Grupa użytkowników, 2 - Schemat autoryzacji	 | 
| 	order	 | 	int	 | 		 | 	Kolejność	 | 		 | 
| 	id	 | 	int	 | 		 | 	Numer kolejny	 | 		 | 
| 	marktodel	 | 	bit	 | 		 | 	Pole techniczne wykorzystywane przy transakcjach | 		 | 
| 	addinfo	 | 	nvarchar(MAX)	 | 		 | 	Dodatkowe informacje	 | 		 | 


## Tabela AUTHSCHEMAS

**Opis:** Autoryzacje - Schematy oraz procesy autoryzacji.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer	 | 		 | 
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa schematu	 | 		 | 
| 	description	 | 	ntext	 | 		 | 	Opis schematu	 | 		 | 
| 	authmethodtype	 | 	int	 | 		 | 	Typ schematu	 | 	0 - Wszyscy z, 1 - Jeden z, 2 - (n) z, 3 - Proces autoryzacji	 | 
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 | 
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji	 | 		 | 
| 	authusrlimit	 | 	int	 | 		 | 	Limit odbiorców dla typu schematu 2	 | 		 | 
| 	headereditmode	 | 	int	 | 		 | 		Uprawnienie do edycji nagłówka dokumentu	 | 	0 - Blokada, 1 - Odblokowane | 
| 	lineseditmode	 | 	int	 | 		 | 	Uprawnienie do edycji linii dokumentu	 | 	0 - Blokada, 1 - Odblokowane |
| 	headereditmode1	 | 	int	 | 		 | Uprawnienie do edycji nagłówka1 dokumentu	 | 	0 - Blokada, 1 - Odblokowane | 	
| 	lineseditmode1	 | 	int	 | 		 | Uprawnienie do edycji linii1 dokumentu	 | 	0 - Blokada, 1 - Odblokowane | 	
| 	headereditmode2	 | 	int	 | 		 |Uprawnienie do edycji nagłówka2 dokumentu	 | 	0 - Blokada, 1 - Odblokowane | 	
| 	lineseditmode2	 | 	int	 | 		 | Uprawnienie do edycji linii2 dokumentu	 | 	0 - Blokada, 1 - Odblokowane | 
| 	addinfo	 | 	nvarchar(MAX)	 | 		 | 	Dodatkowe informacje	 | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id** 	 | 	ID Organizacji	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 | 
| 	usergroup_id	 | 	int	 | 	[USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**	 | 	ID Grupy użytkowników (dla schematów utworzonych automatycznie na podstawie grupy)	 | 		 | 


## Tabela BPCONFIGS

**Opis:** Firmy - Konfiguracja BP - Profil per. PH

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---  |
| 	id	 | 	int	 | 		 | 	Unikalny numer |  |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	order	 | 	int	 | 		 | Kolejność | 		 |
| 	match	 | 	int	 | 		 | 	Dopasowanie | 0 - Kod PH, 1 - Charakterystyka |
| 	value	 | 	nvarchar(100)	 | 		 | 	Kod/Wartość | 		 |
| 	ocrprofiles_id	 | 	int	 | 		 | Profil OCR | 		 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy	 | 		 |
| 	cptolns_groupby	 | 	int	 | 		 | Grupowanie linii | 0 - Brak, 1 - Wszystko do jednej  |
| 	gpt_model	 | 	varchar(128)	 | 		 | Model GPT | 		 |
| 	gpt_prompt	 | 	nvarchar(1024)	 | 		 | 	Zapytanie GPT | 		 |
| 	itmcoderx	 | 	nvarchar(128)	 | 		 | Filtr indeksów SAP | 		 |
| 	qrygrprx	 | 	nvarchar(128)	 | 		 | Filtr charakterystyk SAP | 		 |
| 	ksef_autosend	 | 	bit	 | 		 | Automatyczne dodanie z KSeF | 0 - Nie, 1 - Tak |
| 	ksef_authschema_id	 | 	int	 | [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id** | Schemat autoryzacji | 		 |
| 	ksef_user_id	 | 	int	 | [USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id** | Właściciel | 		 |
| 	updatedat	 | 	datetime	 | 		 | Data aktualizacji | 		 |
| 	createdat	 | 	datetime	 | 		 | 	Data utworzenia | 		 |
| classtype | int |  | Dopasowanie | 0 - Ogólny, 1 - Fv. korekta, 2 - Zaliczka zakupu |


## Tabela CHATENTRIES

**Opis:** Czaty - wiadomości zapisane w czacie.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	chats_id	 | 	int	 | 	[CHATS](/docs/database/Tables/tables-descr.md#tabela-chats) **id**	 | 	Id Czatu	 | 		 |
| 	int_id	 | 	int	 | 		 | Unikalny numer waidomości w obebie danego czatu | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Id Użytkownika	 | 		 |
| 	content	 | 	nvarchar(MAX)	 | 		 | 	Treść wiadomości | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |


## Tabela CHATS

**Opis:** Czaty - definicja czatu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer czatu	 | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Oragnizacji	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji	 | 		 |


## Tabela CHATUSERS

**Opis:** Czaty - użytkownicy przypisani do czatu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	chats_id	 | 	int	 | 	[CHATS](/docs/database/Tables/tables-descr.md#tabela-chats) **id**	 | 	Id Czatu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Id Użytkownika	 | 		 |
| 	user_role	 | 	int	 | 		 | 	Rola użytkownika | 	0 - Uczestk czatu, 1 - Założyciel / Uczestnik czatu |
| 	read_int_id	 | 	int	 | 	[CHATENTRIES](/docs/database/Tables/tables-descr.md#tabela-chatentries) **int_id** | 	ID Ostatniej odczytanej wiadomości | 		 |


## Tabela CLASS_SCHEMAS

**Opis:** Klasy - dostępne schematy / procesy autoryzacji.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy	 | 		 |
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Schematu / Procesu autoryzacji | 		 |


## Tabela CLASS_SYSATTRIBSCFG

**Opis:** Konfiguracja widoczności atrybutów systemowych. Wpis w tabeli oznacza, że widoczność danego atrybutu systemowego została wyłączona dla klasy.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	ID Atrybutu | 		 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy	 | 		 |
| 	description	 | 	ntext	 | 		 | Opis | 		 |
| 	label	 | 	nvarchar(MAX)	 | 		 | Etykieta | 		 |
| 	visorder	 | 	int	 | 		 | Kolejność | 		 |
| 	defwidth	 | 	int	 | 		 | Szerokość | 		 |
| 	erpfcode	 | 	varchar(100)	 | 		 | Pole ERP | 		 |
| 	dictlisttype	 | 	int	 | 		 | 	Widok listy | 0 - Auto, 1 - Lista rozwijana, 2 - Lista interaktywna |


## Tabela CLASS_TRIGGERS

**Opis:** Klasy - Wyzwalacze.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy	 | 		 |
| 	name	 | 	varchar(100)	 | 		 | 	Nazwa wyzwalacza	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis	 | 		 |
| 	label	 | 	nvarchar(MAX)	 | 		 | 	Etykieta wyświetlana na formatce	 | 		 |
| 	order	 | 	int	 | 		 | 	Kolejność	 | 		 |
| 	classattribs_id	 | 	int	 | 	[ATTRIBDICTS](/docs/database/Tables/tables-descr.md#tabela-attribdicts) **id**	 | 	ID Atrybutu połączonego	 | 	 -2 - nagłówek, -1 - linie	 |
| 	linktoctrl	 | 	bit	 | 		 | 	Połącz | 1 - Tak, 0 - Nie |


## Tabela CLASSATTRIBS

**Opis:** Klasa - Atrybuty.
| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Numer unikalny	 | 		 |
| 	name	 | 	varchar(100)	 | 		 | 	Nazwa atrybutu	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis atrybutu	 | 		 |
| 	regex	 | 	ntext	 | 		 | 	Format	 | 		 |
| 	datatype	 | 	int	 | 		 | 	Typ danych	 | 	0 - int, 1 - float, 2 - tekst, 3 - DataCzas, 4 - partner handlowy, 5 - słownik systemowy, 6 - słownik użytkownika, 7 - słownik interaktywny, 8 - słownik statyczny, 9 - Długi tekst	 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |
| 	extensions_id	 | 	int	 | 		 | 	Powiązane rozszerzenie (nieużywane)	 | 		 |
| 	order	 | 	int	 | 		 | 	Kolejność	 | 		 |
| 	mandatory	 | 	int	 | 		 | 	Wymagany	 | 	1 - Tak, 0 - Nie |
| 	schemafcode	 | 	varchar(100)	 | 		 | 	Pole OCR	 | 		 |
| 	erpfcode	 | 	varchar(100)	 | 		 | 	Pole ERP	 | 		 |
| 	iscolumn	 | 	bit	 | 		 | 	Pole w nagłówku, czy linii	 | 0 - Nagłówek, 1 - Linia		 |
| 	evalctx	 | 	varchar(1024)	 | 		 | 	Algorytm	 | 		 |
| 	allowcustomval	 | 	bit	 | 		 | 	Dowolne wartości	 | 	0 - Nie, 1 - Tak |
| 	interactivedicts_id	 | 	int	 | 	[INTERACTIVEDICTS](/docs/database/Tables/tables-descr.md#tabela-interactivedicts) **id**	 | 	ID Słownika dynamicznego (interaktywnego)	 | 		 |
| 	label	 | 	nvarchar(MAX)	 | 		 | 	Etykieta	 | 		 |
| 	visorder	 | 	int	 | 		 | 	Kolejność wyświetlania na formatce	 | 		 |
| 	defwidth	 | 	int	 | 		 | 	Szerokość (atrybuty linii)	 | 		 |
| 	adder	 | 	bit	 | 		 | 		 | 		 |
| 	objtype	 | 	int	 | 		 | 	Typ obiektu 	 | 	0 - Klasa dokumentu, 1 - Dziennik korespondencji, 2 - Raport	 |
| 	objid	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**, [DAILYCORRCLASS](/docs/database/Tables/tables-descr.md#tabela-dailycorrclass) **id**, [INTERACTIVEDICTS](/docs/database/Tables/tables-descr.md#tabela-interactivedicts) **id**	 | 	ID Powiązanego obiektu	 | 		 |
| 	cmp_classattribs_id	 | 	int	 | 		 | 	Pole porównawcze - ID Atrybutu 	 | 		 |
| 	allowgroup	 | 	bit	 | 		 | 	Grupowanie (nieużywane)	 | 		 |
| 	dictlisttype	 | 	int	 | 		 | 	Widok listy | 0 - Auto, 1 - Lista rozwijana, 2 - Lista interaktywna |


## Tabela CLASSES

**Opis:** Klasy - definicja klas dokumentu (Ogólne, Autoryzacje).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Numer unikalny	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa klasy (Ogólne)	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis klasy (Ogólne) | 		 |
| 	regex	 | 	ntext	 | 		 | 	Dopasowanie (Ogólne) | 		 |
| 	allowcustomschema	 | 	bit	 | 		 | 	Własny schemat (Autoryzacje) | 	1 - Tak, 0 - Nie |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji	 | 		 |
| 	nameformat	 | 	nvarchar(255)	 | 		 | 	Format nazwy (Ogólne) | 		 |
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	Schemat domyślny (Autoryzacje)  |  |
| 	prmcpmthtype	 | 	int	 | 		 | 	Kopiowanie uprawnień (Ogólne)	 | 	0 - Nigdy, 1 - Zawsze, 2 - Zapytaj	 |
| 	authmandatory	 | 	bit	 | 		 | 	Schemat jest wymagany (Autoryzacje) | 1 - Tak, 0 - Nie |
| 	visibility	 | 	int	 | 		 | 	Widoczność | 	 0 - Widoczna, 1 - Ukryta	 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID klasy bazowej	 | 		 |
| 	issys	 | 	bit	 | 		 | 	Czy klasa systemowa?	 | 1 - Tak, 0 - Nie |
| 	uniqname	 | 	bit	 | 		 | 	Kontrola unikalności nazwy (Ogólne)	 | 	1 - Tak, 0 - Nie |
| 	checkformat	 | 	int	 | 		 | 	Kontrola formatu nazwy	 | 	0 - Nie sprawdzaj, 1 - Pozwól edytować, 2 Automatycznie	 |
| 	numrrequired	 | 	bit	 | 		 | 	Numer wymagany (Ogólne)	 | 1 - Tak, 0 - Nie |
| 	uniqnum	 | 	bit	 | 		 | 	Kotrola unikalności numeru (Ogólne)	 | 1 - Tak, 0 - Nie |
| 	color	 | 	int	 | 		 | 	Kolor (Ogólne) | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Organizacji | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |
| 	autoaddrow	 | 	bit	 | 		 | 	Automatycznie dodaj linie (nieużywane)	 | 		 |
| 	att_classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	Klasa załącznika (Ogólne)	 | 		 |
| 	attsendtocr	 | 	bit	 | 		 | 	Załącznik do katalogu firmy (Ogólne) | 1 - Tak, 0 - Nie |
| 	newdocpath	 | 	varchar(1024)	 | 		 | 	Ścieżka domyślna (Ogólne) | 		 |
| 	classtype	 | 	int	 | 		 | 	Typ klasy (Ogólne) | 0 - Inny, 1 - Faktura, 2 - Korekta |
| 	forcedraft	 | 	bit	 | 		 | 	Zawsze jako tymczasowy w SAP (Ogólne) | 1 - Tak, 0 - Nie |


## Tabela COLUMNSFORMATS

**Opis:** Ustawienia kolumn - format kolumn dla raportów i dziennika korespondencji.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Numer unikalny	 | 		 |
| 	objtype	 | 	int	 | 		 | 	Typ obiektu 	 | 	1 - Raport, 0 - Dziennik korespondencji	 |
| 	objid	 | 	int	 | 	[INTERACTIVEDICTS](/docs/database/Tables/tables-descr.md#tabela-interactivedicts) **id**, [DAILYCORRCLASS](/docs/database/Tables/tables-descr.md#tabela-dailycorrclass) **id**	 | 	Odwołanie do powiązanego obiektu	 | 		 |
| 	column	 | 	varchar(100)	 | 		 | 	Nazwa kolumny	 | 		 |
| 	label	 | 	varchar(254)	 | 		 | 	Etykieta kolumny	 | 		 |
| 	sortable	 | 	bit	 | 		 | 	Sortowanie	 | 0 - Nie, 1 - Tak |
| 	target	 | 	int	 | 		 | 	Typ odnośnika	 | 	0 - Brak, 1 - Podraport, 2 - Dokument, 3 Wpis dziennika korespondencji, 4 - Wpis dostępu	 |
| 	classes_id	 | 	int	 | 	[INTERACTIVEDICTS](/docs/database/Tables/tables-descr.md#tabela-interactivedicts) **id**, [DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**, [DAILYCORRESPONDENCE](/docs/database/Tables/tables-descr.md#tabela-dailycorrespondence) **id**, [DOCUMENTACCESS](/docs/database/Tables/tables-descr.md#tabela-documentaccess) **id**	 | 	Klasa odnośnika (obiekt zgodnie z typem)	 | 		 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |
| 	width	 | 	int	 | 		 | 	Szerokość	 | 		 |
| 	group	 | 	int	 | 		 | 	Grupowanie	 | 	0 - Brak, >0 Kolejność grupowania	 |
| 	groupasc	 | 	bit	 | 		 | 	Grupowanie	 | 	0 - Brak, >0 Kolejność grupowania	 |
| 	decscale	 | 	int	 | 		 | 	Skala	 | 	-1 - Auto, >0 Tyle zer po przecinku (precyzja)	 |
| 	alignright	 | 	bit	 | 		 | 	Wyrównaj do prawej	 | 		 |
| 	sumable	 | 	bit	 | 		 | 	Sumator	 | 	0 - Nie, 1 - Tak |
| 	type	 | 	int	 | 		 | 	Typ | 0 - Raport, 1 - Wydruk |


## Tabela COLUMNSMAPPING

**Opis:** Ustawienia kolumn - mapowanie parametrów dla podraportu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	columnsformats_id	 | 	int	 | 	[COLUMNSFORMATS](/docs/database/Tables/tables-descr.md#tabela-columnsformats) **id**	 | Odwołanie do ustawienia formatu kolumny	 | 		 |
| 	from	 | 	varchar(100)	 | 		 | 	Parametr z	 | 		 |
| 	to	 | 	varchar(100)	 | 		 | 	Parametr do	 | 		 |


## Tabela COMMENTENTRIES

**Opis:** Dokument - komentarze (wpisy i treści).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer komentarza 	 | 		 |
| 	pagecomments_id	 | 	int	 | 	[PAGECOMMENTS](/docs/database/Tables/tables-descr.md#tabela-pagecomments) **id**	 | 	ID Komentarza przypisanego do strony | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika tworzącego wpis	 | 		 |
| 	entrynum	 | 	int	 | 		 | 	Kolejny numer wpisu (komentarz do komentarza)	 | 		 |
| 	content	 | 	ntext	 | 		 | 	Treść komentarza	 | 		 |
| 	createdat	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |


## Tabela COMPANIES

**Opis:** Firmy - definicja podstawowa (Ogólne, Integracja SAP, Konfiguracja BP).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Numer unikalny	 | 		 |
| 	dbname	 | 	varchar(128)	 | 		 | 	Baza - nazwa bazy danych SAP (sql) (Ogólne)	 | 		 |
| 	company	 | 	nvarchar(1000)	 | 		 | 	Nazwa firmy (Ogólne)	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data ostatniej aktualizacji	 | 		 |
| 	directories_id	 | 	int	 | 		 | 	Katalog domyślny (Ogólne) | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	Id organizacji	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |
| 	taxid	 | 	varchar(32)	 | 		 | 	NIP firmy dla KSEF (Ogólne)	 | 		 |
| 	sl_url	 | 	nvarchar(256)	 | 		 | Adres SL (Integracja SAP) | 		 |
| 	sl_user	 | 	nvarchar(128)	 | 		 | 		Użytkownik (Integracja SAP) |  |
| 	sl_pass	 | 	nvarchar(128)	 | 		 | 	Hasło (Integracja SAP) | 	 |
| 	sl_ncode_qry	 | 	nvarchar(MAX)	 | 		 | 	Generowanie nowego kodu PH (Integracja SAP) | 		 |
| 	dummy_rindex	 | 	nvarchar(128)	 | 		 | 	Domyślny indeks (Integracja SAP) | 		 |
| 	rbplid	 | 	int	 | 		 | ID oddziału (Integracja SAP) | 		 |
| 	def_currency	 | 	nvarchar(MAX)	 | 		 | Waluta (Ogólne) | 		 |
| 	def_ocrprofiles_id	 | 	int	 | [OCRPROFILES](/docs/database/Tables/tables-descr.md#tabela-ocrprofiles) **id** | Profil OCR (Konfiguracja BP) | 0 - Automatyczna, > 0 - Id profilu OCR |
| 	def_classes_id	 | 	int	 | [CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id** | 	Klasa (Konfiguracja BP) | 0 - Automatyczna, > 0 - Id klasy |
| 	def_gpt_model	 | 	varchar(128)	 | 		 | Model GPT (Konfiguracja BP) | 		 |
| 	def_gpt_prompt	 | 	nvarchar(1024)	 | 		 | 	Zapytanie GPT (Konfiguracja BP) | 		 |
| 	def_itmcoderx	 | 	nvarchar(128)	 | 		 | 	Filtr indeksów SAP (Konfiguracja BP) | 		 |
| 	def_qrygrprx	 | 	nvarchar(128)	 | 		 | 	Filtr charakterystyk SAP (Konfiguracja BP) | 		 |
| 	saledatefield	 | 	varchar(128)	 | 		 | 	Pole daty sprzedaży (Integracja SAP) | 		 |
| 	edocnumfield	 | 	varchar(128)	 | 		 | Pole numeru e.dokumentu (Integracja SAP) | 		 |
| 	ksef_thumbprint	 | 	varchar(128)	 | 		 | KSeF. Odcisk palca certyfikatu (Ogólne) | 		 |


## Tabela COMPANIESDICTS

**Opis:** Firmy - Słowniki (systemowe).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	numer unikalny	 | 		 |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	id firmy	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	nazwa słownika	 | 		 |
| 	description	 | 	ntext	 | 		 | 	opis słownika	 | 		 |
| 	regex	 | 	nvarchar(1024)	 | 		 | 	wzór	 | 		 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |
| 	displtips	 | 	bit	 | 		 | 	jako podpowiedź	 | 1 - tak, 0 - nie |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |


## Tabela COMPANY_CLASSES

**Opis:** Firmy - Klasy

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	Id firmy	 | 		 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	Id klasy	 | 		 |



## Tabela CONFIGURATION

**Opis:** Konfiguracja SPUMA.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	profile	 | 	varchar(100)	 | 		 | 	Nazwa profilu	 | 		 |
| 	active	 | 	bit	 | 		 | 	Czy aktywny	 | 	1 - Tak, 2 - Nie |
| 	DefSMTPAddress	 | 	varchar(100)	 | 		 | SMTP address (Ogólne)	 | 		 |
| 	DefSMTPPort	 | 	int	 | 		 | 	SMTP port (Ogólne)	 | 		 |
| 	DefSMTPUser	 | 	varchar(100)	 | 		 | 	SMTP user (Ogólne) | 		 |
| 	DefSMTPPassword	 | 	nvarchar(100)	 | 		 | 	SMTP password (Ogólne)	 | 		 |
| 	SessionsFile	 | 	varchar(1024)	 | 		 | 	Session file (Ogólne)	 | 		 |
| 	CentralService	 | 	varchar(1024)	 | 		 | 	SOS - address (OCR)	 | 		 |
| 	ClientID	 | 	nvarchar(100)	 | 		 | 	Client ID (Ogólne)	 | 		 |
| 	ServicePort	 | 	int	 | 		 | 	SOS port (OCR) | 		 |
| 	defsighours	 | 	int	 | 		 | 	Ważność sygnatury[H] (Bezpieczeństwo)	 | 		 |
| 	jsfunct	 | 	ntext	 | 		 | 	Funkcje JS	 | 		 |
| 	checkrefdelay	 | 	int	 | 		 | 	Interwał [S] (Automatyzacja) | 		 |
| 	remoteaddress	 | 	nvarchar(MAX)	 | 		 | 	Adres zdalny (Ogólne) | 		 |
| 	ksef_apiurl	 | 	varchar(128)	 | 		 | 	KSeF API (Ogólne) 	 | 	 |
| 	gpt_apikey	 | 	varchar(2048)	 | 		 | 	GPT ApiKey (Ogólne)	 | 	 |
| 	ocreglevel	 | 	int	 | 		 | 	Poziom regionów OCR (OCR)	 | 		 |
| 	printfooter	 | 	nvarchar(128)	 | 		 | 	Stopka wydruków (Ogólne)	 | 		 |
| 	docacc_usergroups_id	 | 	int	 | 	[USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id** | 	Przełożeni (Ogólne)	 | 		 |
| 	inocrtout	 | 	int	 | 		 | 	Max. czas w ocrservice (min) (OCR)	 | 		 |
| 	authrpt_crontab	 | 	varchar(1024)	 | 		 | 	Harmonogram rap.oczekujących (Ogólne) | 		 |
| 	ksef_renderapiurl	 | 	varchar(128)	 | 		 | 	KSeF Render API (Ogólne)	 | 		 |
| 	doclist_psize	 | 	int	 | 		 | 	Il.wierszy na liście dokumentów (Ogólne)	 | 		 |
| 	passp_expdays	 | 	int	 | 		 | 	Przedawnienie po (dni) (Bezpieczeństwo)	 | 		 |
| 	passp_minlength	 | 	int	 | 		 | 	Min. długość (Bezpieczeństwo)	 | 		 |
| 	passp_minuchars	 | 	int	 | 		 | 	Min. liczba wielkich liter (Bezpieczeństwo)	 | 		 |
| 	passp_mindigits	 | 	int	 | 		 | 	Min. liczba cyfr (Bezpieczeństwo)	 | 		 |
| 	passp_minnalpha	 | 	int	 | 		 | 	Min. liczba znaków niealfanumerycznych (Bezpieczeństwo)	 | 		 |
| 	remindpassmins	 | 	int	 | 		 | 	Czas na przypomnienie hasła od mail (min) (Bezpieczeństwo)	 | 		 |


## Tabela CURRENCYRATES

**Opis:** Kursy walut dla poszczególnych dni.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	fname	 | 	varchar(32)	 | 		 | 	Identyfikator źródła	 | 		 |
| 	curdate	 | 	datetime	 | 		 | 	Data obowiązywania kursu waluty	 | 		 |
| 	currency	 | 	varchar(3)	 | 		 | 	Kod waluty	 | 		 |
| 	rate	 | 	numeric(19, 6)	 | 		 | 	Kurs waluty	 | 		 |



## Tabela CUSTOMPROCESS_DIALOGWND

**Opis:** Algorytmy - instrukcje typu komunikat.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	customprocesses_id	 | 	int	 | 	[CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id**	 | 	ID Algorytmu | 		 |
| 	intid	 | 	int	 | 		 | 	Kolejny numer instrukcji	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa instrukcji	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis instrukcji	 |	 |
| 	message	 | 	nvarchar(MAX)	 | 		 | 	Komunikat	 | 		 |
| 	btn1	 | 	nvarchar(100)	 | 		 | 	Tekst przycisku 1	 | 		 |
| 	btn2	 | 	nvarchar(100)	 | 		 | 	Tekst przycisku 2	 | 		 |
| 	btn3	 | 	nvarchar(100)	 | 		 | 	Tekst przycisku 3	 | 		 |
| 	variable_id	 | 	int	 | [PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej wyjścia	 | 		 |


## Tabela CUSTOMPROCESS_EXCALLOP

**Opis:** Algorytmy - instrukcje typu wykonanie DLL.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	customprocesses_id	 | 	int	 | 	[CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id**	 | 	ID Algorytmu | 		 |
| 	intid	 | 	int	 | 		 | 	Kolejny numer instrukcji	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa instrukcji	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis instrukcji	 | 		 |
| 	asmtype	 | 	int	 | 		 | 	Typ 	 | 	0 - .NET DLL |
| 	assembly	 | 	varchar(100)	 | 		 | 	Nazwa pliku DLL	 | 		 |
| 	clstype	 | 	varchar(100)	 | 		 | 	Nazwa klasy	 | 		 |
| 	method	 | 	varchar(100)	 | 		 | 	Metoda	 | 		 |
| 	arg0	 | 	nvarchar(MAX)	 | 		 | 	Argument 1	 | 		 |
| 	arg1	 | 	nvarchar(MAX)	 | 		 | 	Argument 2	 | 		 |
| 	arg2	 | 	nvarchar(MAX)	 | 		 | 	Argument 3	 | 		 |
| 	arg3	 | 	nvarchar(MAX)	 | 		 | 	Argument 4	 | 		 |
| 	variable_id	 | 	int	 | [PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej wyjścia / wejścia	 | 		 |


## Tabela CUSTOMPROCESS_LINEOP

**Opis:** Algorytmy - instrukcje typu obsługa linii dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	customprocesses_id	 | 	int	 | 	[CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id**	 | 	ID Algorytmu	 | 		 |
| 	intid	 | 	int	 | 		 | 	Kolejny numer instrukcji	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa instrukcji	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis instrukcji	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ instrukcji	 | 	0 - Pobranie linii , 1 - Aktualizacja linii , 2 - Czyszczenie linii, 3 - Dodanie linii, 4 - Kasowanie linii, 5 - Pobranie nagłówka, 6 - Aktualizacja nagłówka, 7 - Zapisz dokument, 8 - Pobranie referencji, 9 - Aktualizacja referencji, 10 - Czyszczenie referencji, 11 - Dodanie referencji, 12 - Kasowanie referencji	 |
| 	variable_id	 | 	int	 | 	[PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej wyjścia / wejścia	 | 		 |


## Tabela CUSTOMPROCESS_SCRIPTOP

**Opis:** Algorytmy - instrukcje typu skrypt SQL.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	customprocesses_id	 | 	int	 | 	[CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id**	 | 	ID Algorytmu | 		 |
| 	intid	 | 	int	 | 		 | 	Kolejny numer instrukcji	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa instrukcji	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis instrukcji	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ instrukcji	 | 	0 - MsSQL/HANA	 |
| 	content	 | 	ntext	 | 		 | 	Treść zapytania	 | 		 |
| 	variable_id	 | 	int	 | [PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej wyjścia	 | 		 |

## Tabela CUSTOMPROCESSES

**Opis:** Algorytmy - definicja procesu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa algorytmu	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis algorytmu	 | 		 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy dokumentu	 | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Organizacji	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data ostatniej aktualizacji	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |


## Tabela DAILYCORR_PROPERTIES

**Opis:** Dziennik korespondencji - właściwości dodatkowych atrybutów dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dailycorr_id	 | 	int	 | 	[DAILYCORRESPONDENCE](/docs/database/Tables/tables-descr.md#tabela-dailycorrespondence) **id**	 | 	ID Wpisu dziennika korespondencji	 | 		 |
| 	attribs_id	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Atrybutu klasy (dziennika koresponencji)	 | 		 |
| 	value	 | 	nvarchar(MAX)	 | 		 | 	Przypisana wartość atrybutu	 | 		 |


## Tabela DAILYCORR_REF

**Opis:** Dziennik korespondencji - referencje do dokumentów.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dailycorr_id	 | 	int	 | 	[DAILYCORRESPONDENCE](/docs/database/Tables/tables-descr.md#tabela-dailycorrespondence) **id**	 | 	ID Wpisu dziennika korespondencji	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	linkdate	 | 	datetime	 | 		 | 	Data i godzina utworzenia powiązania	 | 		 |


## Tabela DAILYCORRCLASS

**Opis:** Dziennik korespondencji - definicja.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer dziennika korespondencji	 | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Organizacji	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa dziennika	 | 		 |
| 	enabled	 | 	bit	 | 		 | 	Aktywny	 | 0 - Nie, 1 - Tak |
| 	description	 | 	ntext	 | 		 | 	Opis dziennika 	 | 		 |
| 	reportctx	 | 	ntext	 | 		 | 	Raport SQL	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data ostatniej aktualizacji	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |
| 	numpfx	 | 	varchar(2)	 | 		 | 	Prefix	 | 		 |
| 	dcorrtype	 | 	int	 | 		 | 	Typ | 0 - Zwykły, 1 - Awizacja |


## Tabela DAILYCORRESPONDENCE

**Opis:** Dziennik korespondencji - wpisy dziennika.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu	 | 		 |
| 	dailycorrclass_id	 | 	int	 | 	[DAILYCORRCLASS](/docs/database/Tables/tables-descr.md#tabela-dailycorrclass) **id**	 | 	ID Klasy dziennika korespondencji	 | 	0 - Raport Nieprzypisane, > 0 ID Dziennika |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika - właściciela wpisu	 | 		 |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	optype	 | 	int	 | 		 | 	Typ operacji 	 | 	0 - Wejście, 1 - Wyjście, 2 - Inna	 |
| 	opdate	 | 	datetime	 | 		 | 	Data operacji	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu dziennika	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data ostatniej aktualizacji wpisu dziennika	 | 		 |
| 	docnum	 | 	varchar(32)	 | 		 | 	Numer wpisu	 | 		 |
| 	clientname	 | 	nvarchar(128)	 | 		 | Nazwa klienta (Awizacja) | 		 |
| 	taxid	 | 	varchar(32)	 | 		 | NIP	(Awizacja) |  |
| 	opdatetol	 | 	int	 | 		 | 	Dni tolerancji (Awizacja) |  |
| 	total	 | 	numeric(19, 6)	 | 		 | Wartość (Awizacja) | 		 |
| 	totaltol	 | 	numeric(19, 6)	 | 		 | Wartość toleranycjna	(Awizacja) | 		 |
| 	itemdesc	 | 	nvarchar(128)	 | 		 | 	Nazwa towaru (Awizacja) | 		 |
| 	removed	 | 	bit	 | 		 | 	Czy usunięta (Awizacja) | 0 - Nie, 1 - Tak |
| 	base_dailycorr_id	 | 	int	 | [DAILYCORRESPONDENCE](/docs/database/Tables/tables-descr.md#tabela-dailycorrespondence) **id** | ID Bazowego wpisu w dokumentach nieprzypisanych (Awizacja) | 		 |


## Tabela DASHBOARDS

**Opis:** Dashboardy - definicja elementów wyświetlanych na ekranie startowym SPUMA, m.in. wykresów, zestawień i list.
<!--
| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 		 | 		 |
| 	label	 | 	nvarchar(1024)	 | 		 | 		 | 		 |
| 	description	 | 	ntext	 | 		 | 		 | 		 |
| 	type	 | 	int	 | 		 | 		 | 		 |
| 	query	 | 	ntext	 | 		 | 		 | 		 |
| 	[order]	 | 	int	 | 		 | 		 | 		 |
| 	createdat	 | 	datetime	 | 	Data utworzenia	 | 		 | 		 |
| 	updatedat	 | 	datetime	 | 	Data aktualizacji	 | 		 | 		 |
-->

## Tabela DESIGNERCONNECTIONS

**Opis:** Ustawienia połączeń pomiędzy obiektami w interfejsie.
<!--
| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dst_objid	 | 	int	 | 		 | 		 | 		 |
| 	designeritmintid	 | 	int	 | 		 | 		 | 		 |
| 	designeritmintid2	 | 	int	 | 		 | 		 | 		 |
| 	designerlpoint	 | 	int	 | 		 | 		 | 		 |
| 	designerlpoint2	 | 	int	 | 		 | 		 | 		 |
| 	dst_objtype	 | 	int	 | 		 | 		 | 		 |
-->

## Tabela DESIGNERITEMS

**Opis:** Ustawienia rozmieszczenia obiektów w interfejsie.


<!--

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dst_objid	 | 	int	 | 		 | 		 | 		 |
| 	insintid	 | 	int	 | 		 | 		 | 		 |
| 	intid	 | 	int	 | 		 | 		 | 		 |
| 	[left]	 | 	float	 | 		 | 		 | 		 |
| 	[top]	 | 	float	 | 		 | 		 | 		 |
| 	width	 | 	float	 | 		 | 		 | 		 |
| 	height	 | 	float	 | 		 | 		 | 		 |
| 	dst_objtype	 | 	int	 | 		 | 		 | 		 |

-->

## Tabela DICTIONARIES

**Opis:** Słowniki statyczne - definicja.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer dla słownika	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa słownika	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis słownika	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Organizacji	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |


## Tabela DICTVALUES

**Opis:** Słowniki statyczne - dozwolone wartości.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	objtype	 | 	int	 | 		 | 	Typ obiektu powiązanego | 1 - Słownik statyczny		 |
| 	objid	 | 	int	 | [DICTIONARIES](/docs/database/Tables/tables-descr.md#tabela-dictionaries) **id**  | 	ID Obiektu powiązanego | 		 |
| 	value	 | 	nvarchar(255)	 | 		 | 	Wartość | 		 |
| 	description	 | 	nvarchar(512)	 | 		 | 	Opis | 		 |


## Tabela DIRECTORIES

**Opis:** Katalogi dokumentów - definicja katalogów w firmie.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer dla katalogu	 | 		 |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	directories_id	 | 	int	 | 	[DIRECTORIES](/docs/database/Tables/tables-descr.md#tabela-directories) **id**	 | 	ID Katalogu nadrzędnego	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa katalogu	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis katalogu	 | 	 |
| 	icontype	 | 	int	 | 		 | 	Typ ikony katalogu	 | 	0 - Folder |
| 	iconcolor	 | 	int	 | 		 | 	Kolor ikony katalogu	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |


## Tabela DOCUMENTACCESS

**Opis:** Zatwierdzenia dostępu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer prośby o dostęp do dokumentu | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Id Użytkownika	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id** | 	ID Dokumentu | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utowrzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji	 | 		 |


## Tabela DOCUMENTACCESSLOG

**Opis:** Zatwierdzenia dostępu - historia.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documentaccess_id	 | 	int	 | 	[DOCUMENTACCESS](/docs/database/Tables/tables-descr.md#tabela-documentaccess) **id**	 | 	ID Prośby o dostęp do dokumentu | 		 |
| 	int_id	 | 	int	 | 		 | Kolejny numer wpisu dla danej prośby o dostęp. Przy zmianie decyzji tworzony jest nowy wpis | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Id Użytkownika zatwierdzającago	 | 		 |
| 	status	 | 	int	 | 		 | 	Status zatwierdzenia | 0 - Oczekuje, 1 - Potwierdzony, 2 - Zabroniony |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |


## Tabela DOCUMENTOCRRESULTS

**Opis:** Dokument - wyniki rozpoznawania danych przez OCR oraz wskazanie zastosowanego szablonu OCR.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu dla wyniku rozpoznawania OCR dla dokumentu	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu | 		 |
| 	schemacode	 | 	nvarchar(100)	 | 	[DIRECTORIES](/docs/database/Tables/tables-descr.md#tabela-directories) **id**	 | 	ID Wybranego schematu rozpoznawania OCR	 | 		 |
| 	title	 | 	nvarchar(255)	 | 		 | 	Tytuł przypisany z OCR	 | 		 |
| 	comments	 | 	ntext	 | 		 | Uwagi | 		 |
| 	marktodel	 | 	bit	 | 		 | 	Pole techniczne wykorzystywane przy transakcjach | 		 |


## Tabela DOCUMENTPAGES

**Opis:** Dokument - powiązanie zasobów ze stronami dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu dla strony dokumentu	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	pagenum	 | 	int	 | 		 | 	Numer strony dokumentu	 | 		 |
| 	resources_id	 | 	int	 | 	[RESOURCES](/docs/database/Tables/tables-descr.md#tabela-resources) **id**	 | 	ID Zasobu pliku	 | 		 |
| 	resources_pagenum	 | 	int	 | 		 | 	Numer strony w przypisanym zasobie	 | 		 |
| 	marktodel	 | 	bit	 | 		 | 	Pole techniczne | 		 |
| 	rotation	 | 	int	 | 		 | 	Obrót strony | 	np: 0 , 90, 180, 270 |


## Tabela DOCUMENTREF

**Opis:** Dokument - powiązanie z dokumentem w systemie ERP.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	objecttype	 | 	varchar(50)	 | 		 | 	Typ obiektu w systemie ERP	 | 		 |
| 	objectid	 | 	varchar(50)	 | 		 | 	Numerem wewnętrzny dokumentu w systemie ERP	 | 		 |
| 	bobjecttype	 | 	varchar(50)	 | 		 | 	Typ obiektu bazowego w systemie ERP | 		 |
| 	bobjectid	 | 	varchar(50)	 | 		 | 	Numerem wewnętrzny dokumentu bazowego w systemie ERP | 		 |
| 	issys	 | 	bit	 | 		 | Czy jest systemowo dodana | 0 - Nie, 1 - Tak |
| 	int_id	 | 	int	 | 		 | Unikalny numer wpisu dokumentu powiązanego w obrębie dokumentu głównego | 		 |


## Tabela DOCUMENTS

**Opis:** Dokument - podstawowe informacje.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer dokumentu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | ID Użytkownika - właściciel dokumentu 	 | 		 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy dokumentu	 | 		 |
| 	companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa dokumentu	 | 		 |
| 	description	 | 	text	 | 		 | 	Opis dokumentu	 | 		 |
| 	docdate	 | 	datetime	 | 		 | 	Data dokumentu	 | 		 |
| 	docnum	 | 	nvarchar(100)	 | 		 | 	Numer dokumentu	 | 		 |
| 	IDDoc	 | 	int	 | 		 | 	Nieużywane | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |
| 	authstatus	 | 	int	 | 		 | 	Status autoryzacji dokumentu	 | 	0 - Oczekuje, 1 - Zatwierdzony, 2 - Odrzucony	 |
| 	directories_id	 | 	int	 | 	[DIRECTORIES](/docs/database/Tables/tables-descr.md#tabela-directories) **id**	 | 	ID Katalogu | -1 - Kosz, 0 - Katalog główny, >0 - Katalog zdefiniowany |
| 	docstatus	 | 	int	 | 		 | 	Status dokumentu	 | 	0 - Wczytany (Przed OCR), 1 - Rozpoznawany (W OCR), 2 - Gotowy (Po OCR) , 3 - W repozytorium (szczegóły authstatus), 4 - Zapisany jako szablon	 |
| 	reconschemas_code	 | 	varchar(100)	 | 		 | Nieużywane | 		 |
| 	enterdate	 | 	datetime	 | 		 | 	Data wpływu	 | 		 |
| 	templates_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	Powiązanie z dokumentem typu szablon	 | 		 |
| 	definition_code	 | 	varchar(100)	 | 		 | Nieużywane | 		 |
| 	ocr_code	 | 	varchar(100)	 | 		 | 	Unikalny kod wygenerowany przez usługe OCR dla dokumentu	 | 		 |
| 	headereditmode	 | 	int	 | 		 | 	Uprawnienie do edycji nagłówka dokumentu	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	lineseditmode	 | 	int	 | 		 | 	Uprawnienie do edycji linii dokumentu	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	headereditmode1	 | 	int	 | 		 | 	Uprawnienie do edycji nagłówka1 dokumentu	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	lineseditmode1	 | 	int	 | 		 | 	Uprawnienie do edycji linii1 dokumentu	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	headereditmode2	 | 	int	 | 		 | 	Uprawnienie do edycji nagłówka2 dokumentu	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	lineseditmode2	 | 	int	 | 		 | 	Uprawnienie do edycji linii2 dokumentu	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	canchgres	 | 	bit	 | 		 | 	Uprawnienie do zmiany zasobu dokumentu (zaktualizauj zawartość)	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	sysdocnum	 | 	int	 | 		 | 	Numer systemowy dokumentu nadany po wysłaniu dokumentu w obieg unikalny w obrębie firmy i klasy	 | 		 |
| 	rm_users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id** | 	ID Użytkownika prznoszącego dokument do innego katalogu | 		 |
| 	tmpwritemode	 | 	int	 | 		 | 	Uprawnienie do edycji dokumentu typu formularz (Nieużywane)	 | 	0 - Blokada, 1 - Odblokowane	 |
| 	autopublish	 | 	bit	 | 		 | Pole techniczne używane w automatyzacji KSeF do oznaczenia dokumentu do automatycznej publikacji | 		 |
| 	grouping	 | 	varchar(MAX)	 | 		 | Nieużywane | 		 |
| 	businesspartner	 | 	nvarchar(MAX)	 | 		 | Partner Handlowy | 		 |
| 	duedate	 | 	datetime	 | 		 | Data płatności | 		 |
| 	baseid	 | 	nvarchar(MAX)	 | 		 | 	Numer Dokumentu bazowego | 		 |
| 	total	 | 	numeric(19, 6)	 | 		 | Wartość brutto | 		 |
| 	nettotal	 | 	numeric(19, 6)	 | 		 | 	Wartość netto | 		 |
| 	paymentmth	 | 	nvarchar(MAX)	 | 		 | Metoda płatności | 		 |
| 	ocrprofile_id	 | 	int	 | [OCRPROFILES](/docs/database/Tables/tables-descr.md#tabela-ocrprofiles) **id** | ID Profilu OCR | 		 |
| 	basetype	 | 	int	 | 		 | Typ dokumentu bazowego | 0 - Dokument ZZ, 1 - Dokument PZ |
| 	pricetype	 | 	int	 | 		 | Definiuj koszt wg | 	0 - Netto, 1 - Brutto |
| 	currency	 | 	nvarchar(MAX)	 | 		 | Waluta | 		 |
| 	ocr_sent	 | 	datetime	 | 		 | Data przetworzenia dokumentu przez OCR | 		 |
| 	bankaccount	 | 	nvarchar(MAX)	 | 		 | Konto bankowe | 		 |
| 	edocnum	 | 	nvarchar(200)	 | 		 | 	Numer dok. elektronicznego | 		 |
| 	saledate	 | 	datetime	 | 		 | 		 | Data sprzedaży |
| 	authall_users_ids	 | 	varchar(MAX)	 | 		 | ID użytkowników, którzy w danym momencie mogą zatwierdzić dokument | 		 |
| 	authvis_users_ids	 | 	varchar(MAX)	 | 		 | 	ID wszystkich użytkowników uczestniczących w procesie zatwierdzania dokumentu | 		 |
| 	rate	 | 	numeric(19, 6)	 | 		 | 	Kurs	 | 		 |
| 	systotal	 | 	numeric(19, 6)	 | 		 | 	Wartość sys.	 | 		 |
| 	sysnettotal	 | 	numeric(19, 6)	 | 		 | 	Wartość netto sys.	 | 		 |


## Tabela DOCUMENTS_ATTACHMENTS

**Opis:** Dokument - powiązane załączniki.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	att_documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Załącznika (Dokumentu)	 | 		 |


## Tabela DOCUMENTS_AUTHLOCKS

**Opis:** Dokument - autoryzacje: blokada autoryzacji.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_authschemas_id	 | 	int	 | 	[DOCUMENTS_AUTHSCHEMA](/docs/database/Tables/tables-descr.md#tabela-documents_authschema) **id**	 | 	ID Autoryzacji przypisanej do dokumentu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika blokującego dokument	 | 		 |
| 	lockat	 | 	datetime	 | 		 | 	Data zablokowania	 | 		 |
| 	unlockat	 | 	datetime	 | 		 | 	Data odblokowania	 | 		 |


## Tabela DOCUMENTS_AUTHRECIPIENTS

**Opis:** Dokument - autoryzacje: osoby przypisane do obiegu dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_authschemas_id	 | 	int	 | 	[DOCUMENTS_AUTHSCHEMA](/docs/database/Tables/tables-descr.md#tabela-documents_authschema) **id**	 | 	ID Autoryzacji przypisanej do dokumentu	 | 		 |
| 	objid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**,[USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**,[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Powiązanego obiektu biorącego udział w obiegu	 | 		 |
| 	objtype	 | 	int	 | 		 | 	Typ obiektu 	 | 	0 - Użytkownik, 1 - Grupa użytkowników, 2 - Schemat autoryzacji	 |
| 	order	 | 	int	 | 		 | 	Kolejność	 | 		 |
| 	authstatus	 | 	int	 | 		 | 	Status akceptacji danego etapu wartości: 	 | 	0 - Oczekuje, 1 - Zatwierdzony, 2 - Odrzucony	 |
| 	approved	 | 	datetime	 | 		 | 	Data zatwierdzenia / odrzucenia | 		 |
| 	comment	 | 	nvarchar(1024)	 | 		 | 	Dodatkowe informacje	 | 		 |
| 	visibility	 | 	bit	 | 		 | 	Widoczność | 	0 - Ukryj, 1 - Pokaż	 |
| 	addinfo	 | 	nvarchar(MAX)	 | 		 | 	Dodatkowe informacje dla użytkownika do etapu zatwierdzania	 | 		 |
| 	auth_users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika, który zautoryzował dany etap	 | 		 |
| 	srcinsintid	 | 	int	 | 	[AUTHSCHEMA_INSTRUCTIONS](/docs/database/Tables/tables-descr.md#tabela-authschema_instructions) **intid** | 	Źródłowa instanacja schematu autoryzacji	 | 		 |


## Tabela DOCUMENTS_AUTHSCHEMA

**Opis:** Dokument - autoryzacje: przypisany schemat zatwierdzania.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Powiązania z dokumentem	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa etapu schematu zatwierdzania	 | 		 |
| 	authmethodtype	 | 	int	 | 		 | 	Rodzacj schematu	 | 	0 - Wszyscy z, 1 - Jeden z, 2 - (n) z, 3 - proces autoryzacji	 |
| 	authusrlimit	 | 	int	 | 		 | 	Limit odbiorców dla etapu	 | 		 |
| 	authschema_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Powiązanego schematu autoryzacji	 | 		 |
| 	authstatus	 | 	int	 | 		 | 	Status akceptacji danego etapu wartości	 | 	0 - Oczekuje, 1 - Zatwierdzony, 2 - Odrzucony	 |
| 	subschema	 | 	bit	 | 		 | 	Czy to podschemat	 | 	0 - nie, 1 - tak	 |
| 	addinfo	 | 	nvarchar(MAX)	 | 		 | 	Dodatkowe informacje dla użytkownika do etapu zatwierdzania	 | 		 |
| 	insintid	 | 	int	 | 		 | 	Numer instrukcji w procesie autoryzacji	 | 		 |
| 	createdat	 | 	datetime	 | 		 | 	Data utworzenia wpisu | 		 |
| 	user_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id** | 	ID Użytkownika wybierającego obieg | 		 |


## Tabela DOCUMENTS_AUTHVAR_BASIC

**Opis:** Dokument - autoryzacje: zmienne podstawowe.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_authschemas_id	 | 	int	 | 	[DOCUMENTS_AUTHSCHEMA](/docs/database/Tables/tables-descr.md#tabela-documents_authschema) **id**	 | 	ID Autoryzacji przypisanej do dokumentu	 | 		 |
| 	variable_id	 | 	int	 | 	[PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej w obrębie danego procesu autoryzacji	 | 		 |
| 	linenum	 | 	int	 | 		 | 	Numer linii	 | 		 |
| 	value	 | 	nvarchar(1024)	 | 		 | 	Wartość	 | 		 |


## Tabela DOCUMENTS_AUTHVAR_SCHEMA

**Opis:** Dokument - autoryzacje: zmienne schematu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_authschemas_id	 | 	int	 | 	[DOCUMENTS_AUTHSCHEMA](/docs/database/Tables/tables-descr.md#tabela-documents_authschema) **id**	 | 	ID Autoryzacji przypisanej do dokumentu	 | 		 |
| 	variable_id	 | 	int	 | 	[PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej w obrębie danego procesu autoryzacji	 | 		 |
| 	authmethodtype	 | 	int	 | 		 | 	Rodzacj schematu	 | 	0 - Wszyscy z, 1 - Jeden z, 2 - (n) z, 3 - Proces autoryzacji	 |
| 	authusrlimit	 | 	int	 | 		 | 	Limit odbiorcow dla etapu	 | 		 |


## Tabela DOCUMENTS_AUTHVAR_SCHEMARCP

**Opis:** Dokument - autoryzacje: zmienne schematu własnego.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_authschemas_id	 | 	int	 | 	[DOCUMENTS_AUTHSCHEMA](/docs/database/Tables/tables-descr.md#tabela-documents_authschema) **id**	 | 	ID Autoryzacji przypisanej do dokumentu	 | 		 |
| 	variable_id	 | 	int	 | 	[PROCESS_VARIABLES](/docs/database/Tables/tables-descr.md#tabela-process_variables) **intid** | 	ID Zmiennej w obrębie danego procesu autoryzacji	 | 		 |
| 	order	 | 	int	 | 		 | 	Kolejność	 | 		 |
| 	objid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**, [USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**, [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Powiązanego obiektu	 | 		 |
| 	objtype	 | 	int	 | 		 | 	Typ obiektu 	 | 	0 - Użytkownik, 1 - Grupa użytkowników, 2 - Schemat autoryzacji	 |


## Tabela DOCUMENTS_LINES

**Opis:** Dokument - linie: informacje o atrybutach.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	attribs_id	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Atrybutu klasy	 | 		 |
| 	linenum	 | 	int	 | 		 | 	Numer linii dokumentu	 | 		 |
| 	value	 | 	nvarchar(MAX)	 | 		 | 	Przypisana wartość dla atrybutu danej linii dokumentu	 | 		 |


## Tabela DOCUMENTS_LINESOWNERS

**Opis:** Dokument - linie: systemowe wartości, przypisanie właściciela linii wykorzystywane przy uprawnieniach.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	linenum	 | 	int	 | 		 | 	Numer linii dokumentu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | ID użytkownika - właściciel linii	 | 		 |
| 	createdat	 | 	datetime	 | 		 | 	Data utworzenia danej linii dokumentu	 | 		 |
| 	rindex	 | 	nvarchar(MAX)	 | 		 | 	Towar | 		 |
| 	raccount	 | 	nvarchar(MAX)	 | 		 | Konto | 		 |
| 	rqty	 | 	numeric(19, 6)	 | 		 | 	Ilość | 		 |
| 	rbaseid	 | 	nvarchar(MAX)	 | 		 | 	Id zamówienia | 		 |
| 	rbaselineid	 | 	int	 | 		 | 	Pozycja zamówienia | 		 |
| 	rporderprice	 | 	numeric(19, 6)	 | 		 | 	Cena netto | 		 |
| 	rporderqty	 | 	numeric(19, 6)	 | 		 | 	Ilość zamówienia | 		 |
| 	rlineidref	 | 	int	 | 		 | 	Numer linii korygowanej | 		 |
| 	rnewqty	 | 	numeric(19, 6)	 | 		 | Ilość po korekcie | 		 |
| 	rnetpricenew	 | 	numeric(19, 6)	 | 		 | 	Cena netto po korekcie | 		 |
| 	rnettotalnew	 | 	numeric(19, 6)	 | 		 | 	Wartość netto po korekcie | 		 |
| 	rproject	 | 	nvarchar(MAX)	 | 		 | Projekt | 		 |
| 	rdistrule1	 | 	nvarchar(MAX)	 | 		 | 	Centrum kosztu 1 | 		 |
| 	rdistrule2	 | 	nvarchar(MAX)	 | 		 | 	Centrum kosztu 2 | 		 |
| 	rdistrule3	 | 	nvarchar(MAX)	 | 		 | Centrum kosztu 3 | 		 |
| 	rdistrule4	 | 	nvarchar(MAX)	 | 		 | Centrum kosztu 4 | 		 |
| 	rdistrule5	 | 	nvarchar(MAX)	 | 		 | 	Centrum kosztu 5 | 		 |
| 	ramount	 | 	numeric(19, 6)	 | 		 | 	Kwota | 		 |
| 	rvatgroup	 | 	nvarchar(MAX)	 | 		 | 	Stawka VAT | 		 |


## Tabela DOCUMENTS_LINESREFS

**Opis:** Dokument - linie: mapowanie wyników OCR do linii dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	linenum	 | 	int	 | 		 | 	Numer linii dokumentu	 | 		 |
| 	documentocrresults_id	 | 	int	 | 	[DOCUMENTOCRRESULTS](/docs/database/Tables/tables-descr.md#tabela-documentocrresults) **id**	 | 	ID Wyników OCR dla danego dokumentu	 | 		 |
| 	ocrlinenum	 | 	int	 | 		 | 	Numer linii odczytany przez OCR	 | 		 |
| 	attribs_id1	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Powiązanego atrybutu przypisanego w mapowaniu danych z OCR	 | 		 |
| 	ocrname1	 | 	nvarchar(128)	 | 		 | 	Nazwa kolumny w szablonie OCR	 | 		 |
| 	attribs_id2	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Poowiązanego atrybutu przypisanego w mapowaniu danych z OCR	 | 		 |
| 	ocrname2	 | 	nvarchar(128)	 | 		 | 	Nazwa kolumny w szablonie OCR	 | 		 |
| 	attribs_id3	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Poowiązanego atrybutu przypisanego w mapowaniu danych z OCR	 | 		 |
| 	ocrname3	 | 	nvarchar(128)	 | 		 | 	Nazwa kolumny w szablonie OCR	 | 		 |
| 	attribs_id4	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Poowiązanego atrybutu przypisanego w mapowaniu danych z OCR	 | 		 |
| 	ocrname4	 | 	nvarchar(128)	 | 		 | 	Nazwa kolumny w szablonie OCR	 | 		 |


## Tabela DOCUMENTS_MODIFICATION

**Opis:** Dokument - historia zmian.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu | 		 |
| 	users_id	 | 	int	 | [USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika wprowadzającego aktualizację na dokumencie	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu | 		 |


## Tabela DOCUMENTS_OCRMAP

**Opis:** Dokument - mapowanie wyników OCR do dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	class_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 |  ID Klasy dokumentu	 | 		 |
| 	cardcode	 | 	nvarchar(128)	 | 		 | 	Kod dostawcy z systemu ERP	 | 		 |
| 	schemacode	 | 	nvarchar(100)	 | 		 | 	Kod schematu rozpoznawania (wzorca OCR)	 | 		 |
| 	ocrname	 | 	varchar(100)	 | 		 | 	Nazwa pola OCR zgodna z wzorcem OCR	 | 		 |
| 	attribs_id	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Powiązanego atrybutu przypisanego w mapowaniu danych z OCR	 | 		 |
| 	maptype	 | 	int	 | 		 | 	Typ mapowania wyników z OCR wartości	 | 	1 - Kopiuj, 2 - Wyszukaj, 3 - Zapamiętaj	 |


## Tabela DOCUMENTS_PROPERTIES

**Opis:** Dokument - wartości dodatkowych atrybutów nagłówka klasy.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	attribs_id	 | 	int	 | 	[CLASSATTRIBS](/docs/database/Tables/tables-descr.md#tabela-classattribs) **id**	 | 	ID Atrybutu	 | 		 |
| 	value	 | 	nvarchar(MAX)	 | 		 | 	Przypisana wartośc dla atrybutu	 | 		 |


## Tabela DOCUMENTUSAGE

**Opis:** Dokument - historia przeglądania dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	USERS_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	openat	 | 	nvarchar(MAX)	 | 		 | 	Data otwarcia dokumentu	 | 		 |


## Tabela EXTERNALREFS

**Opis:** Powiązanie dokumentu SPUMA z dokumentem pochodzącym z zewnętrznej integracji, np. IMAP, POP3 lub KSeF.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	sourceid	 | 	varchar(255)	 | 		 | 	Powiązanie z np.: id skrzynki POP3, IMAP, numer KSEF	 | 		 |
| 	foldername	 | 	nvarchar(32)	 | 		 | 	Nazwa katalogu	 | 		 |


## Tabela INTERACTIVEDICTS

**Opis:** Słowniki interaktywne - Słowniki dynamiczne, Raporty.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Numer unikalny	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa słownika / raportu	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis słownika / raportu	 | 		 |
| 	scriptype	 | 	int	 | 		 | 	Typ skryptu wartości	 | 	0 - MSSQL/HANA	 |
| 	scriptctx	 | 	ntext	 | 		 | 	Skrypt	 | 		 |
| 	sqlconnstr	 | 	varchar(1024)	 | 		 | 	Dodatkowy ciąg połączenia	 | 		 |
| 	allowcache	 | 	bit	 | 		 | 		 | 0 - Nie, 1 - Tak |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji	 | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Organizacji	 | 		 |
| 	report	 | 	bit	 | 		 | 	Czy raport 	 | 	0 - Nie (słownik), 1 - Tak (raport)	 |
| 	label	 | 	nvarchar(200)	 | 		 | 	Etykieta	 | 		 |
| 	visible	 | 	bit	 | 		 | 	Widoczność	 | 	0 - Nie, 1 - Tak	 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |
| 	issys	 | 	bit	 | 		 | Czy jest systemowy | 0 - Nie, 1 - Tak |


## Tabela KSEF2_DOCUMENTS

**Opis:** KSeF - lista dokumentów pobranych z API.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	NIP	 | 	varchar(32)	 | 		 | 	NIP Firmy | 		 |
| 	KsefNumber	 | 	varchar(128)	 | 		 | 	Numer referencyjny dokumentu w KSEF	 | 		 |
| 	InvoiceNumber	 | 	varchar(128)	 | 		 | 	Numer dokumentu	 | 		 |
| 	IssueDate	 | 	datetime	 | 		 | 	Data wystawienia faktury | 		 |
| 	InvoicingDate	 | 	datetime	 | 		 | Data sprzedaży / wykonania usługi | 		 |
| 	AcquisitionDate	 | 	datetime	 | 		 | Data pozyskania faktury z KSeF | 		 |
| 	PermanentStorageDate	 | 	datetime	 | 		 | Data trwałego zapisania faktury w KSeF | 		 |
| 	Seller_NIP	 | 	varchar(32)	 | 		 | NIP sprzedawcy | 		 |
| 	Seller_Name	 | 	nvarchar(128)	 | 		 | 	Nazwa sprzedawcy | 		 |
| 	Buyer_NIP	 | 	varchar(32)	 | 		 | 	NIP nabywcy | 	 |
| 	Buyer_Name	 | 	nvarchar(128)	 | 		 | Nazwa nabywcy | 		 |
| 	NetAmount	 | 	numeric(19, 2)	 | 		 | Kwota netto | 		 |
| 	GrossAmount	 | 	numeric(19, 2)	 | 		 | Kwota brutto | 		 |
| 	VatAmount	 | 	numeric(19, 2)	 | 		 | Kwota VAT | 		 |
| 	Currency	 | 	varchar(32)	 | 		 | Waluta faktury | 		 |
| 	InvoicingMode	 | 	varchar(32)	 | 		 | Sposób wystawienia faktury | 		 |
| 	InvoiceType	 | 	varchar(32)	 | 		 | Rodzaj faktury | 		 |
| 	FormCode	 | 	varchar(32)	 | 		 | 	Kod/formularz faktury | 		 |
| 	IsSelfInvoicing	 | 	bit	 | 		 | Czy faktura jest samofakturowaniem | 0 - Nie, 1 - Tak |
| 	HasAttachment	 | 	bit	 | 		 | Czy faktura ma załącznik | 0 - Nie, 1 - Tak |
| 	InvoiceHash	 | 	varchar(128)	 | 		 | Hash faktury | 		 |
| 	HashOfCorrectedInvoice	 | 	nvarchar(128)	 | 		 | 	Hash faktury korygowanej | 		 |
| 	XmlDta	 | 	xml	 | 		 | 	Dane faktury w XML | 		 |
| 	ThirdSubjects	 | 	nvarchar(1024)	 | 		 | 	Dane podmiotów trzecich | 		 |
| 	hidden	 | 	bit	 | 		 | 	Czy faktura jest ukryta | 	0 - Nie, 1 - Tak  |
| 	status	 | 	int	 | 		 | 	Pole techniczne (podmiot3) | 		 |


## Tabela KSEF2_SESSIONS

**Opis:** KSeF - zapisane sesje logowania do API dla danego tokena.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	NIP	 | 	varchar(32)	 | 		 | 	NIP Firmy	 | 		 |
| 	Thumbprint	 | 	varchar(128)	 | 		 | Odcisk palca certyfikatu | 		 |
| 	AccessToken	 | 	varchar(MAX)	 | 		 | 	Token dostępu do API KSeF | 		 |
| 	AccessTokenValid	 | 	datetime	 | 		 | 	Data ważności tokena dostępu | 		 |
| 	RefreshToken	 | 	varchar(MAX)	 | 		 | Token odświeżający | 		 |
| 	RefreshTokenValid	 | 	datetime	 | 		 | 	Data ważności tokena odświeżającego | 		 |
| 	LastCheck	 | 	datetime	 | 		 | 	Data ostatniego sprawdzenia | 		 |
| 	LastCheck2	 | 	datetime	 | 		 | 	Data ostatniego dodatkowego sprawdzenia sesji | 		 |


## Tabela MAILMONITORCFG

**Opis:** Automatyzacja - konfiguracja automatycznego pobierania wiadomości e-mail przez protokół POP3 (aktualnie niewykorzystywane).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	profile	 | 	varchar(100)	 | 	[CONFIGURATION](/docs/database/Tables/tables-descr.md#tabela-configuration) **profile** 	 | 	Nazwa profilu konfiguracji	 | 		 |
| 	SPUMAuserid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika przypisanego do automatyzacji	 | 		 |
| 	SPUMAcompanyid	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	MailHost	 | 	varchar(100)	 | 		 | 	POP3 Host	 | 		 |
| 	MailUser	 | 	varchar(100)	 | 		 | 	POP3 Użytkownik	 | 		 |
| 	MailPass	 | 	varchar(100)	 | 		 | 	POP3 Hasło	 | 		 |
| 	MailPort	 | 	int	 | 		 | 	POP3 Port	 | 		 |
| 	UseSSL	 | 	bit	 | 		 | 	POP3 czy SSL	 | 	 0 - Nie, 1 - Tak	 |
| 	MatchRx	 | 	nvarchar(1024)	 | 		 | 	Wyrażenie regularne użyte do filtrowania treści email	 | 		 |
| 	docctype	 | 	int	 | 		 | 	Rodzaj dokumentu	 | 	1 - Załączniki jako strony, 2 - Załączniki jako dokumenty	 |
| 	classes_id	 | 	int	 | 	[CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**	 | 	ID Klasy załącznika dla docelowego dokumentu powstałego przy tej automatyzacji	 | 		 |
| 	allowempty	 | 	bit	 | 		 | 	Dodaj wiadomości bez załączników	 | 	0 - Nie, 1 - Tak	 |


## Tabela MESSAGE_RECIPIENTS

**Opis:** Wiadomości - odbiorcy przypisani do wiadomości.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	messages_id	 | 	int	 | 	[MESSAGES](/docs/database/Tables/tables-descr.md#tabela-messages) **id**	 | 	ID Powiązanej wiadomości	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika, do którego wysyłana wiadomość	 | 		 |
| 	email_adr	 | 	varchar(255)	 | 		 | 	Adres Email odbiorcy wiadomości	 | 		 |
| 	isread	 | 	bit	 | 		 | 	Czy wiadomość została odczytana	 | 	0 - Nie, 1 - Tak	 |


## Tabela MESSAGES

**Opis:** Wiadomości - powiadomienia wewnętrzne oraz wiadomości e-mail wysłane ze SPUMA.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wiadomości	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownik tworzącego wiadomość	 | 		 |
| 	dst_companies_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	dst_documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	subject	 | 	nvarchar(1024)	 | 		 | 	Temat wiadomości	 | 		 |
| 	content	 | 	ntext	 | 		 | 	Zawartość wiadomości	 | 		 |
| 	isread	 | 	bit	 | 		 | 	Czy wiadomość została odczytana 	 | 	0 - Nie, 1 - Tak	 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wiadomości	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wiadomości	 | 		 |
| 	issent	 | 	int	 | 		 | 	Status wysłanej wiadomości	 | 	0 - Oczekuje w kolejce, 1 - Wysłano poprawnie , 2 - Błąd wysyłki	 |
| 	att_document_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Powiązania z dokumentem załącznika	 | 		 |
| 	eventtype	 | 	int	 | 		 | 	Rodzaj powiadomienia 	 | 	0 - Wiadomość wewnętrzna, 1 - Prośba o autoryzację , 2 - Autoryzacja dokumentu, 3 - Odrzucenie dokumentu, 4 - Prośba o komentarz, 5 - Skomentowano, 6 - Zmiana na dokumencie obserwowanym, 7 - Zatwierdzenie finalne dokumentu	 |
| 	dst_documents_authschemas_id	 | 	int	 | 	[DOCUMENTS_AUTHSCHEMA](/docs/database/Tables/tables-descr.md#tabela-documents_authschema) **id**	 | 	ID Schematu autoryzacji powiązanego z docelowym dokumentem	 | 		 |
| 	dst_documents_authrecipients_int_id	 | 	int	 | 	[AUTHSCHEMA_INSTRUCTIONS](/docs/database/Tables/tables-descr#tabela-authschema_instructions) **intid**	 | 	ID źródłowej instancji schematu autoryzacji powiązanej z wiadomością	 | 		 |
| 	signature	 | 	varchar(40)	 | 		 | 	Sygnatura wykorzystywana do utworzenia linku do resetu hasła	 | 		 |


## Tabela MODIFICATIONENTRY

**Opis:** Historia zmian na dokumencie.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documentmodifications_id	 | 	int	 | 	[DOCUMENTS_MODIFICATION](/docs/database/Tables/tables-descr.md#tabela-documents_modification) **id**	 | 	ID Modyfikacji zapisanej dla dokumentu	 | 		 |
| 	objtype	 | 	int	 | 		 | 	Typ obiektu	 | 	0 - Nagłówek dokumentu, 1 - Strony dokumentu, 2 - Zmienne systemowe , 5 - Linie dokumentu	 |
| 	objid	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	fieldcode	 | 	varchar(32)	 | 		 | 	Nazwa pola	 | 		 |
| 	oldvalue	 | 	nvarchar(1024)	 | 		 | 	Wartość w polu była	 | 		 |
| 	newvalue	 | 	nvarchar(1024)	 | 		 | 	Zmieniona wartość	 | 		 |


## Tabela MODULECONFIG

**Opis:** Konfiguracja modułów wykorzystywanych w SPUMA.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	module	 | 	varchar(100)	 | 		 | 	Nazwa modułu	 | 		 |
| 	property	 | 	varchar(100)	 | 		 | 	Parametr dla modułu	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ danych parametru dla modułu wartości	 | 	0 - Liczba całkowita, 1 - TAK/NIE, 2 - Tekst, 3 - Ścieżka do pliku lub katalogu, 4 - Hasło	 |
| 	value	 | 	nvarchar(1024)	 | 		 | 	Wartość dla parametru	 | 		 |
| 	updateat	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |


<!--
## Tabela OCRCONFIGS

**Opis:** TODO

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	varchar(32)	 | 		 | 		 | 		 |
| 	businesspartner	 | 	nvarchar(MAX)	 | 		 | 		 | 		 |
| 	ocrprofile_id	 | 	int	 | 		 | 		 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 		 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 		 | 		 |
| 	cptolns_groupby	 | 	int	 | 		 | 		 | 		 |
-->

## Tabela OCRFIELDS

**Opis:** OCR - rozpoznane pola nagłówka.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny kolejny numer wpisu	 | 		 |
| 	documentocrresults_id	 | 	int	 | 	[DOCUMENTOCRRESULTS](/docs/database/Tables/tables-descr.md#tabela-documentocrresults) **id**	 | 	ID Przypisanego schematu rozpoznawania dla dokumentu	 | 		 |
| 	name	 | 	varchar(100)	 | 		 | 	Nazwa pola	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ pola wartości	 | 	0 - Pole tekstowe, 1 - Liczba całkowita, 2 - Data, 3 - Liczba zmienno przecinkowa, 4 - Nazwa bloku z liniami dokumentu	 |
| 	value	 | 	nvarchar(MAX)	 | 		 | 	Wartość odczytana przez OCR	 | 		 |
| 	ocrfields_id	 | 	int	 | 	[DOCUMENTOCRRESULTS](/docs/database/Tables/tables-descr.md#tabela-documentocrresults) **id**	 | 	ID Pola OCR nadrzędnego dla bloku z liniami	 | 		 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |


## Tabela OCRLINES

**Opis:** OCR - rozpoznane pola linii.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	ocrfields_id	 | 	int	 | 	[OCRFIELDS](/docs/database/Tables/tables-descr.md#tabela-ocrfields) **id**	 | 	ID Odczytanego pola OCR	 | 		 |
| 	linenum	 | 	int	 | 		 | 	Numer linii	 | 		 |
| 	linenum	 | 	nvarchar(max)	 | 		 | Odczytana wartość przez OCR	 | 		 |


## Tabela OCRPROCESSLOG

**Opis:** OCR - log błędów.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu głównego	 | 		 |
| 	order	 | 	int	 | 		 | 	Kolejnośc komunikatu	 | 		 |
| 	isread	 | 	bit	 | 		 | 	czy komuikat został odczytany	 | 	0 - Nie, 1 - Tak	 |
| 	message	 | 	nvarchar(255)	 | 		 | 	Treśc komunikatu błędu	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |


## Tabela OCRPROFILES

**Opis:** Profile OCR - definicja.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | Unikalny numer profilu OCR | 		 |
| 	name	 | 	nvarchar(100)	 | Nazwa profilu | 		 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis profilu | 		 |
| 	type	 | 	int	 | 		 | 	Typ | 0 - Serwis OCR, 1 - Chat GPT |
| 	gpt_model	 | 	varchar(128)	 | 		 | Model GPT | 		 |
| 	gpt_prompt	 | 	nvarchar(MAX)	 | 		 | 	Zapytanie GPT | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | Data utworzenia wpisu | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu | 		 |


## Tabela OCRRESULTPAGES

**Opis:** OCR - wyniki rozpoznawania dla strony dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny kolejny numer wpisu	 | 		 |
| 	documentocrresults_id	 | 	int	 | 	[DOCUMENTOCRRESULTS](/docs/database/Tables/tables-descr.md#tabela-documentocrresults) **id**	 | 	id przypisanego schematu rozpoznawania dla dokumentu	 | 		 |
| 	pagenum	 | 	int	 | 		 | 	Numer strony	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ pola	 | 	1 - Strona z liniami , 2 - Standardowa strona , 3 - Strona załącznika do faktury	 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |
| 	width	 | 	int	 | 		 | 	Szerokość strony	 | 		 |
| 	height	 | 	int	 | 		 | 	Wysokość strony	 | 		 |


## Tabela OCRTEXTREGIONS

**Opis:** OCR - rozpoznane regiony tekstu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	ocrresultpages_id	 | 	int	 | 	[OCRRESULTPAGES](/docs/database/Tables/tables-descr.md#tabela-ocrresultpages) **id**	 | 	ID Rozpoznanej strony dla dokumentu	 | 		 |
| 	text	 | 	ntext	 | 		 | 	Odczytane słowo przez OCR	 | 		 |
| 	posx	 | 	int	 | 		 | 	Pozycja tekstu w osi x	 | 		 |
| 	posy	 | 	int	 | 		 | 	Pozycja tekstu w osi y	 | 		 |
| 	width	 | 	int	 | 		 | 	Szerokość regionu tekstowego	 | 		 |
| 	height	 | 	int	 | 		 | 	Wysokość regionu tekstowego	 | 		 |


## Tabela ORGANIZATIONS

**Opis:** Organizacje - definicja. Mechanizm wykorzystywany w wersjach SPUMA wcześniejszych niż 7. W bazie pozostały odwołania przez `organizations_id`, które w aktualnej wersji nie mają znaczenia funkcjonalnego.

<!--
| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer	 | 		 |
| 	code	 | 	varchar(128)	 | 		 | 	Kod organizacji	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |
-->

## Tabela PAGECOMMENTS

**Opis:** Komentarze przypisane do strony dokumentu.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny kolejny numer wpisu	 | 		 |
| 	documentpages_id	 | 	int	 | 	[DOCUMENTPAGES](/docs/database/Tables/tables-descr.md#tabela-documentpages) **id**	 | 	ID Strony dokumentu	 | 		 |
| 	commnum	 | 	int	 | 		 | 	Kolejny numer komentarza w obrębie strony dokumentu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika tworzącego komentarz	 | 		 |
| 	posx	 | 	float	 | 		 | 	Pozycja komentarza w osi x	 | 		 |
| 	posy	 | 	float	 | 		 | 	Pozycja komentarza w osi y	 | 		 |
| 	width	 | 	float	 | 		 | 	Szerokość komentarza	 | 		 |
| 	height	 | 	float	 | 		 | 	Wysokość komentarza	 | 		 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |

## Tabela PASSCHANGELOG

**Opis:** Historia oraz kolejka operacji związanych ze zmianą hasła użytkownika.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id** | 	ID Użytkownika, którego dotyczy zmiana hasła	 | 		 |
| 	old_pass_md5	 | 	varchar(32)	 | 		 | 	Zaszyfrowane aktualne hasło Użytkownika	 | 		 |
| 	rq_users_id	 | 	int	 | 		 | 	Typ operacji związanej ze zmianą hasła | 0 - Hasło zmienione, 1 - Hasło do zmiany |
| 	createdat	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |


## Tabela PERMISSIONS

**Opis:** Uprawnienia do dokumentów.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer wpisu	 | 		 |
| 	order	 | 	int	 | 		 | 	Kolejność | 		 |
| 	dst_objtype	 | 	int	 | 		 | Typ obiektu, do którego przypisano uprawnienie| 0 - Uprawnienia firmy, 1 - Uprawnienia klasy dokumentu, 2 - Dokument, 3 - Uprawnienia dzienników , 4 - Uprawnienia raportów |
| 	dst_objid	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**, [CLASSES](/docs/database/Tables/tables-descr.md#tabela-classes) **id**, [DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**, [DAILYCORRCLASS](/docs/database/Tables/tables-descr.md#tabela-dailycorrclass) **id**, [INTERACTIVEDICTS](/docs/database/Tables/tables-descr.md#tabela-interactivedicts) **id**  | 	ID Obiektu, do którego przypisano uprawnienie | 		 |
| 	proptype	 | 	int	 | 		 | 	Typ uprawnienia | 	0 - Główne, 1 - Przenaszalność, 5 - Edycja obcych komentarzy, 6 - Edycja pola/kolumny, 7 - Edycja obcych linii, 8 - Dodanie wpisu dziennika, 9 - Usunięcie wpisu dziennika, 10 - Zmiana zasobów, 11 - Edycja referencji, 12 - Tworzenie dok. SAP   |
| 	permtype	 | 	int	 | 		 | 	Typ edycji | 	0 - Pełne, 1 - Podgląd, 2 - Brak |
| 	objtype	 | 	int	 | 	 | 	Typ odbiorcy uprawnienia | 0 - Użytkownik, 1 - Grupa użytkowników |
| 	objid	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**, [USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id**  | 	ID Odbiorcy uprawnienia | 		 |
| 	marktodel	 | 	bit	 | 		 | Pole techniczne wykorzystywane przy transakcjach | 		 |
| 	classattribs_id	 | 	int	 | 	[ATTRIBDICTS](/docs/database/Tables/tables-descr.md#tabela-attribdicts) **id** | 	Uprawnienie do atrybutu | 		 |
| 	docstate	 | 	int	 | 		 | 	Status dokumentu wartości	 | 	0 - Zatwierdzony, 1 - Odrzucony, 2 - W sekretariacie, 3 - W autoryzacji	 |
| 	authschemas_id	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**	 | 	ID Powiązanego schematu autoryzacji	 | 		 |


## Tabela PROCESS_ACTIONS

**Opis:** Proces Autoryzacji / Algorytmy - akcje (przejścia pomiędzy etapami).

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dst_objid	 | 	int	 | [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**, [CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id** | ID Powiązanego obiektu | 		 |
| 	intid	 | 	int	 | 		 | Kolejny numer akcji | 		 |
| 	insintid	 | 	int	 | 	[AUTHSCHEMA_INSTRUCTIONS](/docs/database/Tables/tables-descr.md#tabela-authschema_instructions) **intid**, [CUSTOMPROCESS_DIALOGWND](/docs/database/Tables/tables-descr.md#tabela-customprocess_dialogwnd) **intid**, [CUSTOMPROCESS_EXCALLOP](/docs/database/Tables/tables-descr.md#tabela-customprocess_excallop) **intid**, [CUSTOMPROCESS_LINEOP](/docs/database/Tables/tables-descr.md#tabela-customprocess_lineop) **intid**, [CUSTOMPROCESS_SCRIPTOP](/docs/database/Tables/tables-descr.md#tabela-customprocess_scriptop) **intid** | 	ID Etapu, z którego wychodzi przejście | 0,-10 - punkt startu, -13,-1 - punkt końca, pozostałe - ID Etapów |
| 	insintid2	 | 	int	 | 	[AUTHSCHEMA_INSTRUCTIONS](/docs/database/Tables/tables-descr.md#tabela-authschema_instructions) **intid**, [CUSTOMPROCESS_DIALOGWND](/docs/database/Tables/tables-descr.md#tabela-customprocess_dialogwnd) **intid**, [CUSTOMPROCESS_EXCALLOP](/docs/database/Tables/tables-descr.md#tabela-customprocess_excallop) **intid**, [CUSTOMPROCESS_LINEOP](/docs/database/Tables/tables-descr.md#tabela-customprocess_lineop) **intid**, [CUSTOMPROCESS_SCRIPTOP](/docs/database/Tables/tables-descr.md#tabela-customprocess_scriptop) **intid** | 	ID Etapu, do którego prowadzi przejście | 0,-10 - punkt startu, -13,-1 - punkt końca, pozostałe - ID Etapów |
| 	dst_objtype	 | 	int	 | 		 | 	Typ powiązanego obiektu | 0 - Proces autoryzacji, 1 - Algorytm |
| 	ptype	 | 	int	 | 		 | Typ przejścia | 0 - Przejście po zatwierdzeniu, 1 - Przejście po odrzuceniu |


## Tabela PROCESS_CNDFUNCTS

**Opis:** Proces Autoryzacji / Algorytmy - Warunki.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dst_objid	 | 	int	 | 	[AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**, [CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id**  | ID Powiązanego obiektu | 		 |
| 	actionsintid	 | 	int	 | 	[PROCESS_ACTIONS](/docs/database/Tables/tables-descr.md#tabela-process_actions) **intid* | ID Akcji w obrębie procesu autoryzacji / algorytmu | 		 |
| 	intid	 | 	int	 | 		 | Kolejny numer warunku / grupy | 		 |
| 	type	 | 	int	 | 		 | 	Typ | 0 - Warunek, 1 - Grupa |
| 	lvariable_id	 | 	int	 | 		 | ID Zmiennej w lewym warunku |  |
| 	cndtype	 | 	int	 | 		 | 	Operator | 0 = , 1 ! = , 2 > , 3 > = , 4 < , 5 < = , 6 RX, 7 !RX, 8 - in, 9 - not in |
| 	rvariable_id	 | 	int	 | 		 | 	ID Zmiennej w prawym warunku | 		 |
| 	rconst	 | 	nvarchar(1024)	 | 		 | 	Wartość stała | 		 |
| 	grptype	 | 	int	 | 		 | 	Typ grupy | 0 - i, 1 - lub |
| 	grpintid	 | 	int	 | 	**intid** | 	ID Grupy nadrzędnej w obrębie danych warunków | 		 |
| 	dst_objtype	 | 	int	 | 		 | Typ powiązanego obiektu | 0 - Proces autoryzacji, 1 - Algoytm |
| 	lcolumn	 | 	nvarchar(100)	 | 		 | EVENTARGS lewej strony warunku | 		 |


## Tabela PROCESS_VARCOLUMNS

**Opis:** Algorytmy - Kolumny zmiennych.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dst_objid	 | 	int	 | 	[CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id** | ID Powiązanego obiektu | 		 |
| 	dst_objtype	 | 	int	 | 		 | 	Typ powiązanego obiektu | 0 - Proces autoryzacji, 1 - Algoytm |
| 	intid	 | 	int	 | 		 | ID Zmiennej w obrębie danego algorytmu | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | Nazwa kolumny | 		 |
| 	type	 | 	int	 | 		 | Typ kolumny | 0 - Text, 1 - Int, 2 - Float, 3 - Data |


## Tabela PROCESS_VARIABLES

**Opis:** Proces autoryzacji / Algorytmy - Zmienne.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	dst_objid	 | 	int	 | [AUTHSCHEMAS](/docs/database/Tables/tables-descr.md#tabela-authschemas) **id**, [CUSTOMPROCESSES](/docs/database/Tables/tables-descr.md#tabela-customprocesses) **id**  | ID Powiązanego obiektu | 		 |
| 	intid	 | 	int	 | 		 | Kolejny numer zmiennej w obrębie danego procesu / algoytmu | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | Nazwa zmiennej | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis zmiennej | 		 |
| 	type	 | 	int	 | 		 | Typ zmiennej | 0 - Text, 1 - Int, 2 - Float, 4 - Schemat / Tabela, 5 - Data |
| 	evalcode	 | 	varchar(1024)	 | 		 | Kod JS | 		 |
| 	dst_objtype	 | 	int	 | 		 | Typ powiązanego obiektu | 0 - Proces autoryzacji, 1 - Algoytm |


## Tabela RESOURCES

**Opis:** Zasoby - pliki zaimportowane do SPUMA.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer pliku | 		 |
| 	filename	 | 	nvarchar(1000)	 | 		 | 	Nazwa pliku | 		 |
| 	keywords	 | 	ntext	 | 		 | Słowa kluczowe powiązane z zasobem | 		 |
| 	type	 | 	varchar(3)	 | 		 | 	Typ pliku | 		 |
| 	content	 | 	image	 | 		 | Zawartość pliku | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji | 		 |
| 	preview	 | 	image	 | 		 | 	Podgląd | 		 |


## Tabela SEARCHRESULTS

**Opis:** Wynik wyszukiwania.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	users_id	 | 	int	 | [USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id** | ID Użytkownika | 		 |
| 	documents_id	 | 	int	 | [DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id** | 	ID Dokumentu  | 		 |
| 	frac	 | 	float	 | 		 | Dopasowanie wyszukiwania | 		 |


## Tabela SIGNATURES

**Opis:** Sygnatury nadane użytkownikowi dla dokumentu na określony czas.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	varchar(32)	 | 		 | 	Numer unikalny dla sygnatury	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	sighours	 | 	int	 | 		 | 	Okres ważności sygnatury w godzinach	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |


## Tabela USERGROUPS

**Opis:** Grupy użytkowników - definicja.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer dla grupy	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa grupy	 | 		 |
| 	description	 | 	ntext	 | 		 | 	Opis grupy	 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |
| 	grouprole	 | 	int	 | 		 | 	Rola dla grupy wartości	 | 	0 - Ogólna, 1 - Twórca, 2 - Administratorzy	 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | ID Organizacji | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |


## Tabela USERGROUPUSERS

**Opis:** Grupy użytkowników - przypisanie użytkowników do grup.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	usergroups_id	 | 	int	 | 	[USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id** id	 | 	ID Grupy użytkowników	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |


## Tabela USERS

**Opis:** Użytkownicy - definicja.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Numer unikalny dla użytkownika	 | 		 |
| 	name	 | 	nvarchar(100)	 | 		 | 	Nazwa użytkownika (Ogólne)	 | 		 |
| 	pass_md5	 | 	varchar(50)	 | 		 | 	Hasło zakodowane w md5 (Ogólne)	 | 		 |
| 	isadmin	 | 	bit	 | 		 | 	Administartor (Ogólne)	 | 0 - Nie, 1 - Tak |
| 	email_reply	 | 	varchar(255)	 | 		 | 	Adres email użytkownika (Email)	 | 		 |
| 	email_template	 | 	ntext	 | 		 | 	Szablon e-mail (Email)	 | 		 |
| 	cmppermtype	 | 	int	 | 		 | 	Uprawnienia do firm (Uprawnienia)  | 0 - Do wszystkich, 1 - Brak, 2 - Tylko do wybranych |
| 	CreatedAt	 | 	datetime	 | 		 | 	Data utworzenia wpisu	 | 		 |
| 	UpdatedAt	 | 	datetime	 | 		 | 	Data aktualizacji wpisu	 | 		 |
| 	commentcolor	 | 	int	 | 		 | 	Kolor komentarzy (Ogólne)	 | 		 |
| 	authlevel	 | 	int	 | 		 | 	Nieużywane | 		 |
| 	iscreator	 | 	bit	 | 		 | 	Twórca (Ogólne)	 | 	0 - Nie, 1 - Tak |
| 	issys	 | 	bit	 | 		 | 	Systemowy (Ogólne) 	 | 	0 - Nie, 1 - Tak |
| 	username	 | 	varchar(255)	 | 		 | 	Imię i nazwisko (Ogólne)	 | 		 |
| 	recent	 | 	int	 | 		 | 	Ilość ostatnich dokumentów (Ogólne)	 | 		 |
| 	repl	 | 	bit	 | 		 | 	Aktywność zastępstwa (Zastępstwo)	 | 0 - Nie, 1 - Tak |
| 	replstart	 | 	datetime	 | 		 | 	Od (Zastępstwo)	 | 		 |
| 	replend	 | 	datetime	 | 		 | 	Do (Zastępstwo)	 | 		 |
| 	rep_users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Zastępuje - pierwszy (Zastępwstwo)	 | 		 |
| 	rep_users_id2	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	Zastępuje - drugi (Zastępwstwo)	 | 		 |
| 	islocked	 | 	bit	 | 		 | 	Zablokowany (Ogólne) | 0 - Nie, 1 - Tak |
| 	visfldtp1	 | 	int	 | 		 | 	Nieużywane | 		 |
| 	visfldtp2	 | 	int	 | 		 | Nieużywane | 		 |
| 	visfldtp3	 | 	int	 | 		 | Nieużywane | 		 |
| 	visfldtp4	 | 	int	 | 		 | 	Nieużywane | 		 |
| 	organizations_id	 | 	int	 | 	[ORGANIZATIONS](/docs/database/Tables/tables-descr.md#tabela-organizations) **id**	 | 	ID Organizacji	 | 		 |
| 	dailycorrclass_id	 | 	int	 | 	[DAILYCORRCLASS](/docs/database/Tables/tables-descr.md#tabela-dailycorrclass) **id**	 | 	Domyślny dziennik - ID (Ogólne)	 | 		 |
| 	signature	 | 	image	 | 		 | 	Podpis	 | 		 |
| 	globalid	 | 	varchar(36)	 | 		 | 	Globalny identyfikator obiektu, niezależny od bazy danych	 | 		 |
| 	lang	 | 	int	 | 		 | 	Język UI (Ogólne) | 	0 - Angielski, 1 - Polski |
| 	imap_address	 | 	varchar(255)	 | 		 | 	IMAP - host (Email)	 | 		 |
| 	imap_port	 | 	int	 | 		 | 	IMAP - port (Email)	 | 		 |
| 	imap_user	 | 	nvarchar(255)	 | 		 | 	IMAP - użytkownik (Email)	 | 		 |
| 	imap_password	 | 	varchar(255)	 | 		 | 	IMAP - hasło (Email)	 | 		 |
| 	imap_ssl	 | 	bit	 | 		 | 	IMAP - ssl (Email) | 0 - Nie, 1 - Tak |
| 	imap_vflds	 | 	varchar(255)	 | 		 | 	IMAP - folder (Email) | 		 |
| 	compact_style	 | 	bit	 | 		 | 	Styl kompaktowy | 0 - Nie, 1 - Tak |
| 	docacc_usergroups_id	 | 	int	 | [USERGROUPS](/docs/database/Tables/tables-descr.md#tabela-usergroups) **id** | 	Przełożeni - ID Grupy użytkowników (Ogólne) | 		 |
| 	apikey	 | 	nvarchar(128)	 | 		 | Token (Ogólne) | 		 |
| 	apiexp	 | 	datetime	 | 		 | 	Data wygaśnięcia tokenu (Ogólne) | 		 |
| 	apimode	 | 	int	 | 		 | 	Tryb sesji - Token (Ogólne) | 0 - Odczyt, 1 - Odczyt / Zapis |
| 	advicevis	 | 	int	 | 		 | 	Widoczność awizacji (Ogólne) | 	0 - Nie, 1 - Tak |


## Tabela USERS_DOCINTERFACECONFIGS

**Opis:** Użytkownicy - Wymiana eDokumentów - konfiguracja dodatkowych integracji.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	int_id	 | 	int	 | 		 | 	Numer unikalny integracji w obrębie użytkownika	 | 		 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	name	 | 	nvarchar(255)	 | 		 | 	Nazwa integracji	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ integracji | 	0 - KSeF |
| 	company_id	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |
| 	userid	 | 	nvarchar(128)	 | 		 | 	Użytkownik - login do integracji	 | 		 |
| 	password	 | 	nvarchar(128)	 | 		 | 	Hasło do integracji	 | 		 |
| 	synctout	 | 	int	 | 		 | 		 | 	Czas odpytywania (m) |
| 	taxid_ex	 | 	nvarchar(128)	 | 		 | 	Rozszerzenie NIP | 		 |


## Tabela USERS_EVENTRESTRICTIONS

**Opis:** Użytkownik - wyłączenie powiadomień.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	eventtype	 | 	int	 | 		 | 	Rodzaj powiadomienia	 | 1 - Wymagana autoryzacja, 2 - Zaakceptowano dokument, 3 - Odrzucono, 7 - Zatwierdzono przez wszystkich, 9 - Raport oczekujących |
| 	restrictiontype	 | 	int	 | 		 | 	Typ wyłączonych powiadomień	 | 	0 - Powiadomienie eMail, 1 - Wiadomości wewnętrzne	 |


## Tabela USERS_FAVORITEDOCUMENTS

**Opis:** Użytkownik - dokumenty ulubione.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	documents_id	 | 	int	 | 	[DOCUMENTS](/docs/database/Tables/tables-descr.md#tabela-documents) **id**	 | 	ID Dokumentu	 | 		 |
| 	type	 | 	int	 | 		 | 	Typ	 | 	0 - Ulubiony	 |


## Tabela USERS_PERMISSIONS

**Opis:** Użytkownik - uprawnienia do firm.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	users_id	 | 	int	 | 	[USERS](/docs/database/Tables/tables-descr.md#tabela-users) **id**	 | 	ID Użytkownika	 | 		 |
| 	permvalue	 | 	int	 | 	[COMPANIES](/docs/database/Tables/tables-descr.md#tabela-companies) **id**	 | 	ID Firmy	 | 		 |


## Tabela WHITELIST_CHECKLOG

**Opis:** Log sprawdzeń rachunków bankowych na Białej Liście podatników VAT.

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	id	 | 	int	 | 		 | 	Unikalny numer | 		 |
| 	users_id	 | 	int	 | 		 | ID Użytkownika | 		 |
| 	documents_id	 | 	int	 | 		 | ID Dokumentu | 		 |
| 	taxid	 | 	varchar(32)	 | 		 | 	NIP | 		 |
| 	bankaccount	 | 	varchar(32)	 | 		 | 	Numer rachunku bankowego | 		 |
| 	checkstatus	 | 	int	 | 		 | 	Status | 0 - Nie widnieje na Białej Liście, 1- Widnieje na Białej Liście |
| 	createdat	 | 	datetime	 | 		 | Data utworzenia | 		 |
