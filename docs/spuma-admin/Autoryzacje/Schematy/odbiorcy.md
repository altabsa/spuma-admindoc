---
sidebar_position: 3
---

# Zakładka - Odbiorcy

Zakładka **Odbiorcy** służy do definiowania etapów schematu autoryzacji oraz odbiorców przypisanych do poszczególnych etapów.

Etapy wykonywane są sekwencyjnie zgodnie z numerem w polu `Etap`.

---

## Właściwości

- `Etap` - Numer etapu autoryzacji. Etapy o niższym numerze są wykonywane przed etapami o wyższym numerze.

- `Typ odbiorcy` - Określa rodzaj odbiorcy przypisanego do etapu. Dostępne typy:
  - `Użytkownik` - wskazany użytkownik systemu,
  - `Grupa użytkowników` - wskazana grupa użytkowników,
  - `Schemat autoryzacji` - wskazany schemat autoryzacji.

- `Odbiorca` - Obiekt przypisany do wybranego typu odbiorcy.

- `Dodatkowe info` - Tekst wyświetlany użytkownikowi w oknie autoryzacji dla danego etapu.

Dla typu `Schemat autoryzacji` lista zawiera:

- schematy utworzone automatycznie dla grup użytkowników,
- schematy utworzone ręcznie w sekcji **Schematy autoryzacji**.

Schematy tworzone automatycznie dla grup występują w dwóch wariantach:

- `NAZWA_GRUPY` - schemat typu **Jeden z**,
- `*NAZWA_GRUPY` - schemat typu **Wszyscy z**.

:::warning
Przy wyborze `Grupa użytkowników` lub `Schemat autoryzacji` należy uwzględnić `Typ` schematu zdefiniowany w zakładce **Ogólne**.

Jeżeli schemat ma typ `Wszyscy z`, wskazanie grupy jako odbiorcy oznacza, że etap musi zostać zatwierdzony przez wszystkich użytkowników tej grupy.

Jeżeli zatwierdzenie ma wykonać tylko jeden użytkownik z grupy, zalecane jest użycie schematu utworzonego automatycznie dla tej grupy, np. `NAZWA_GRUPY` typu **Jeden z**, albo innego odpowiednio skonfigurowanego schematu autoryzacji.
:::



