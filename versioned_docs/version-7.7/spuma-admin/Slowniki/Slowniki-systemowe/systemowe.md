---
sidebar_position: 6
---

# Słowniki systemowe

**Słowniki systemowe** są słownikami dynamicznymi, których wartości są pobierane przez zapytanie SQL realizowane przez procedurę `APR_DICTIONARYVALUES`.

Dane słowników systemowych są ładowane podczas logowania do SPUMA i zapisywane w pamięci podręcznej. Dzięki temu wartości są dostępne bez ponownego wykonywania zapytania przy każdym użyciu słownika.

Słowniki systemowe mogą być wykorzystywane:

- jako źródło wartości dla atrybutów,
- jako podpowiedzi podczas edycji komentarzy i opisów.

:::note
Wartości słowników systemowych są odświeżane podczas logowania do systemu.
:::