---
sidebar_position: 4
---

# Zakładka - Automatyzacja

Zakładka **Automatyzacja** zawiera ustawienia starszego mechanizmu automatycznego importowania wiadomości e-mail do SPUMA z wykorzystaniem protokołu POP3.

Mechanizm cyklicznie sprawdzał skrzynkę pocztową i na podstawie pobranych wiadomości tworzył dokumenty w sekretariacie.

W aktualnej wersji mechanizm nie jest wykorzystywany. Do obsługi skrzynek pocztowych zalecane jest użycie integracji IMAP.

---

## Właściwości

- `Interwał [S]` - Częstotliwość sprawdzania skrzynki pocztowej, wyrażona w sekundach.

- `SPUMA company` - Firma, w której miały być tworzone dokumenty pobrane przez mechanizm automatyzacji.

- `SPUMA user id` - Użytkownik używany przez mechanizm automatyzacji do tworzenia dokumentów.

:::warning
Ustawienia w tej zakładce pozostają ze względu na zgodność ze starszym mechanizmem POP3. W aktualnej wersji systemu nie są wykorzystywane.
:::