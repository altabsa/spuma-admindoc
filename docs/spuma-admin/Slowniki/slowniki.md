---
sidebar_position: 1
---

# Słowniki

**Słowniki** służą do definiowania zestawów wartości wykorzystywanych w systemie podczas wprowadzania i wyboru danych.

Słowniki mogą być używane m.in.:

- w definicjach atrybutów klas, linii i dzienników,
- w parametrach raportów,
- jako podpowiedzi podczas edycji opisów i komentarzy,
- w parametrach procesów autoryzacji.

Słowniki dzielą się na:

- [**Słowniki statyczne**](/docs/spuma-admin/Slowniki/Slowniki-statystyczne/statyczne.md) - zawierają stałe wartości definiowane w panelu administracyjnym,
- [**Słowniki dynamiczne**](/docs/spuma-admin/Slowniki/Slowniki-dynamiczne/dynamiczne.md) - pobierają wartości na bieżąco z określonego źródła danych, np. bazy SPUMA, systemu ERP lub innej bazy,
- [**Słowniki systemowe**](/docs/spuma-admin/Slowniki/Slowniki-systemowe/systemowe.md) - pobierają wartości za pomocą procedury `APR_DICTIONARYVALUES`; wartości są ładowane podczas logowania do SPUMA i przechowywane w pamięci podręcznej.
- [**Słowniki użytkownika**](/docs/spuma-admin/Slowniki/Slowniki-uzytkownika.md) - są definiowane bezpośrednio w konfiguracji konkretnego atrybutu klasy i działają lokalnie dla tego atrybutu.


> ***Przykład:*** *Słownik statyczny może zawierać listę działów firmy, a słownik dynamiczny listę indeksów towarowych pobieranych z systemu ERP.*