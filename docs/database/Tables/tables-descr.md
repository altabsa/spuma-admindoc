---
sidebar_position: 6
---

# Szczegółowy opis Tabel

## Tablica ALERTEXCLUSION

**Opis:** 

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 	Wartość domyślna	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	type	 | 	int	 | 		 | 		 | 		 | 		 |
| 	user_id	 | 	int	 | 		 | 		 | 		 | 		 |
| 	key	 | 	nvarchar(256)	 | 		 | 		 | 		 | 		 |
| 	objid	 | 	varchar(128)	 | 		 | 		 | 		 | 		 |
| 	CreatedAt	 | 	datetime	 | 		 | 		 | 		 | 		 |


## Tablica ALLOWEDOCUMENTS

**Opis:** Uprawnienia użytkowników do dokumentów

| 	Pole	 | 	Typ danych	 | 	Odwołanie	 | 	Opis	 | 	Ograniczenia	 | 	Wartość domyślna	 |
| 	---	 | 	---	 | 	---	 | 	---	 | 	---	 | 	---	 |
| 	documents_id	 | 	int	 | 	DOCUMENTS **id**	 | 	Numer dokumentu	 | 		 | 		 |
| 	marktorebuild	 | 	bit	 | 		 | 		 | 		 | 		 |
| 	users_ids	 | 	varchar(MAX)	 | 	USERS **id**	 | 	Kody użytkówników wypisane po przecinku	 | 		 | 		 |


