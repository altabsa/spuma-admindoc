---
sidebar_position: 1
---

# Grupy użytkowników

**Lista grup** zawiera wszystkie grupy użytkowników zdefiniowane w systemie.

:::important
Grupy użytkowników są istotnym elementem mechanizmu uprawnień. Pozwalają zarządzać dostępem na poziomie grupy zamiast pojedynczych użytkowników. Dzięki temu zmiany kadrowe wymagają jedynie aktualizacji członkostwa w grupie, bez przebudowy konfiguracji uprawnień.
:::

Użytkownik może należeć do wielu grup jednocześnie.

Z poziomu listy możesz:

- dodać nową grupę,
- usunąć wybraną grupę,
- wyszukać grupę,
- wybrać grupę do edycji,
- sprawdzić liczbę użytkowników przypisanych do grupy.

---

## Grupa użytkowników

Podczas tworzenia nowej grupy system automatycznie tworzy dwa schematy autoryzacji powiązane z grupą:

- `NAZWA_GRUPY` - schemat typu **Jeden z**,
- `*NAZWA_GRUPY` - schemat typu **Wszyscy z**.

> ***Przykład:*** *Dla grupy `SERWIS` system utworzy schematy `SERWIS` typu **Jeden z** oraz `*SERWIS` typu **Wszyscy z**.*

---

## Konfiguracja grupy

Konfiguracja grupy jest podzielona na zakładki:

- [**Ogólne**](./ogolne),
- [**Użytkownicy**](./uzytkownicy).