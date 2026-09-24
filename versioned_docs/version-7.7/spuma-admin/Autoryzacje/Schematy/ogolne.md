---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawowe ustawienia schematu autoryzacji.

---

## Właściwości

- `Nazwa` - Nazwa (kod) schematu autoryzacji.

:::warning
Nazwa musi być unikatowa w całej bazie danych. Pamiętaj, że system może zawierać również schematy utworzone automatycznie dla grup użytkowników.
:::

- `Opis` - Opis schematu widoczny przy wyborze schematu w aplikacji W&#87;W.

- `Dodatkowe informacje` - Tekst wyświetlany podczas autoryzacji dokumentu. Pole jest wykorzystywane, gdy schemat stanowi etap innego schematu lub procesu autoryzacji.

- `Typ` - Określa liczbę wymaganych zatwierdzeń w ramach schematu.

| Typ | Opis |
| --- | --- |
| Wszyscy z | Wszystkie zdefiniowane etapy muszą zostać zatwierdzone. |
| Jeden z | Wystarczy zatwierdzenie jednego z etapów. |
| (N) z | Wymagana jest określona liczba zatwierdzonych etapów. |

Dla typu `(N) z` należy dodatkowo określić liczbę wymaganych zatwierdzeń.