---
sidebar_position: 6
---

# Zakładka - Wymiana EDok.

Zakładka **Wymiana EDok.** służy do przypisywania użytkownikowi dostępu do integracji dokumentów elektronicznych.

Obecnie obsługiwanym typem integracji jest **KSeF**.

---

## Właściwości

- `Nazwa` - Nazwa integracji widoczna później na liście dokumentów elektronicznych.

- `Typ` - Typ integracji. Obecnie dostępny jest typ **KSeF**.

- `Firma` - Firma, dla której użytkownik otrzymuje dostęp do dokumentów z KSeF.

- `Użytkownik`, `Hasło` - Pola nie są konfigurowane na poziomie użytkownika. Dane autoryzacyjne są pobierane z konfiguracji firmy.

- `Rozszerzenie` - Opcjonalna wartość ograniczająca dostęp użytkownika do dokumentów przypisanych do określonego oddziału lub identyfikatora zarejestrowanego w KSeF.

:::note
Konfiguracja dostępu do KSeF jest przypisana do firmy, a nie bezpośrednio do użytkownika.
:::