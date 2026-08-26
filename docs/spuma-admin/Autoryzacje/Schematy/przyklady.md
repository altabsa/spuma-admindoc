---
sidebar_position: 6
---

# Przykłady definiowania schematów

Poniższe przykłady pokazują typowe sposoby konfiguracji schematów autoryzacji. Etapy wykonywane są zgodnie z numerem `Etap`, a sposób zakończenia schematu zależy od wartości pola `Typ`. 

---

## Przykład 1 - zatwierdzenie przez całą grupę

**Cel:** dokument ma zostać zatwierdzony przez wszystkich użytkowników grupy `DZIAL1`. 

### Wariant 1 - użytkownicy dodani bezpośrednio

`Typ`: `Wszyscy z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Użytkownik | `user1` |
| 0 | Użytkownik | `user2` |
| 0 | Użytkownik | `user3` |

### Wariant 2 - grupa

`Typ`: `Wszyscy z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Grupa użytkowników | `DZIAL1` |

W obu przypadkach zatwierdzenie jest wymagane od wszystkich wskazanych użytkowników. 

:::note
W wariancie 2 wartość `Typ` schematu (`Jeden z` lub `Wszyscy z`) nie ma znaczenia, ponieważ schemat zawiera tylko jeden etap z odbiorcą typu `Grupa użytkowników`. W takim przypadku system wymaga zatwierdzenia dokumentu przez wszystkich użytkowników grupy.
:::

---

## Przykład 2 - użytkownik, następnie jedna osoba z grupy

**Cel:** dokument ma zostać najpierw zatwierdzony przez `user1`, a następnie przez jedną osobę z grupy `KSIEGOWOSC`. 

`Typ`: `Wszyscy z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Użytkownik | `user1` |
| 1 | Schemat autoryzacji | `KSIEGOWOSC` |

:::note
- `Wszyscy z` oznacza, że autoryzacja musi przejść przez wszystkie zdefiniowane etapy. Przy ustawieniu `Jeden z` dokument zostałby zatwierdzony już po zakończeniu etapu `0`.
- Na etapie `1` używany jest systemowy schemat `KSIEGOWOSC` typu **Jeden z**, utworzony automatycznie wraz z grupą `KSIEGOWOSC`.
- Jeżeli na etapie `1` zamiast schematu `KSIEGOWOSC` zostanie wskazana bezpośrednio grupa `KSIEGOWOSC`, dokument będzie wymagał zatwierdzenia przez wszystkich użytkowników tej grupy.
:::

---

## Przykład 3 - użytkownik, następnie jedna osoba z jednej z dwóch grup

**Cel:** dokument ma zostać najpierw zatwierdzony przez `user1`. Następnie wystarczy zatwierdzenie jednej osoby z grupy `KSIEGOWOSC` albo `HR`. 

Najpierw utwórz schemat pomocniczy.

### Schemat `Pomocniczy`

`Typ`: `Jeden z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Schemat autoryzacji | `KSIEGOWOSC` |
| 0 | Schemat autoryzacji | `HR` |

Następnie utwórz schemat główny.

### Schemat główny

`Typ`: `Wszyscy z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Użytkownik | `user1` |
| 1 | Schemat autoryzacji | `Pomocniczy` |

Schemat `Pomocniczy` kończy się po zatwierdzeniu jednego z jego etapów. 

:::note
Jeżeli na etapie `1` dokument ma zostać zatwierdzony przez jedną osobę z grupy `KSIEGOWOSC` i jedną osobę z grupy `HR`, tworzenie schematu pomocniczego nie jest konieczne.

W takim przypadku konfiguracja może wyglądać następująco:

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Użytkownik | `user1` |
| 1 | Schemat autoryzacji | `KSIEGOWOSC` |
| 1 | Schemat autoryzacji | `HR` |
:::

---

## Przykład 4 - cała grupa, następnie użytkownik

**Cel:** dokument ma zostać zatwierdzony przez wszystkich użytkowników grupy `HR`, a następnie przez `user1`.

### Wariant 1 - grupa

`Typ`: `Wszyscy z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Grupa użytkowników | `HR` |
| 1 | Użytkownik | `user1` |

### Wariant 2 - schemat grupy

`Typ`: `Wszyscy z`

| Etap | Typ odbiorcy | Odbiorca |
| --- | --- | --- |
| 0 | Schemat autoryzacji | `*HR` |
| 1 | Użytkownik | `user1` |

Schemat `*HR` jest automatycznie tworzony dla grupy `HR` i odpowiada wariantowi **Wszyscy z**. 