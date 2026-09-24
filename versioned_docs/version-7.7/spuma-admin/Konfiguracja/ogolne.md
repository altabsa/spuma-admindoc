---
sidebar_position: 2
---

# Zakładka - Ogólne

Zakładka **Ogólne** zawiera podstawowe ustawienia globalne SPUMA związane z pocztą, usługami zewnętrznymi, KSeF oraz wybranymi parametrami interfejsu.

---

## Właściwości

- `SMTP address` - Adres domyślnego serwera SMTP używanego do wysyłania wiadomości e-mail.

- `SMTP user` - Nazwa użytkownika serwera SMTP.

- `SMTP port` - Port serwera SMTP.

- `SMTP password` - Hasło użytkownika serwera SMTP.

- `Harmonogram rap.oczekujących` - Harmonogram uruchamiania raportu dokumentów oczekujących. Wartość jest zapisywana jako wyrażenie `cron`. Harmonogram określa, kiedy system ma wygenerować i wysłać raport do użytkowników, którzy mają włączone otrzymywanie tego raportu.
Ustawienie jest globalne dla całej instalacji SPUMA.

Przykład harmonogramu uruchamiającego raport codziennie o godzinie `08:00`:

```cron 
0 8 * * * 
```

- `Session file` - Ścieżka do pliku sesji na serwerze.

- `Client ID` - Unikalny identyfikator klienta SPUMA. Identyfikator jest ustalany na etapie wdrożenia i wykorzystywany m.in. przez usługę OCR do identyfikacji konfiguracji klienta.

- `Adres zdalny` - Adres używany w wiadomościach e-mail wysyłanych przez SPUMA. 

- `KSeF API` - Adres API KSeF używanego do komunikacji z Krajowym Systemem e-Faktur.

- `KSeF Render API` - Adres usługi generującej podgląd PDF na podstawie dokumentu XML KSeF.

- `GPT ApiKey` - Klucz API używany do komunikacji z usługą GPT.

- `Stopka wydruków` - Tekst umieszczany w stopce wydruków generowanych przez SPUMA.

- `Przełożeni` - Grupa użytkowników pełniąca domyślnie funkcję przełożonych w całej instalacji SPUMA.

- `Il.wierszy na liście dokumentów` - Liczba wierszy wyświetlanych na liście dokumentów.