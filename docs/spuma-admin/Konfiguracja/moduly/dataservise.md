---
sidebar_position: 2
---

# DATASERVICE

Moduł **DATASERVICE** zawiera parametry techniczne usługi `SPUMA_DataService` oraz komunikacji klienta W&#87;W z serwerem.

---

## Właściwości

- `FORCEPREVQUALITY` - Poziom jakości podglądu dokumentu generowanego dla klienta WWW, w zakresie `0-100`.

  Wartość wpływa na stopień kompresji podglądu. `100` oznacza najwyższą jakość.

  :::note
  Zmniejszenie wartości może ograniczyć rozmiar przesyłanych danych, ale obniża czytelność podglądu dokumentu.
  :::

- `SPUMAHOSTIPC` - Port IPC używany do komunikacji z usługą odpowiedzialną za wywoływanie funkcji z zewnętrznych bibliotek DLL.

 :::warning
  Wartość należy zmieniać tylko w przypadku, gdy domyślny port jest zajęty.
  :::

- `HTTPPORT` - Port, na którym usługa obsługuje klienta W&#87;W.

- `HTTPUSESSL` - Określa, czy komunikacja klienta W&#87;W korzysta z SSL.

- `BIRSERVICEURL` - Adres webserwisu używanego do pobierania danych z GUS.

- `SPUMALITEHTTPPATH` - Ścieżka aplikacji SPUMA Lite.

- `O365_APPID`, `O365_TENANTID`, `O365_SECRET` - Parametry uwierzytelniania SPUMA w usługach pocztowych Microsoft 365.

  Wartości są generowane po stronie Microsoft 365 i używane przy integracji ze skrzynką pocztową, m.in. do wysyłania wiadomości e-mail oraz pobierania wiadomości przez IMAP.

  :::note
  Parametry nie są wymagane dla skrzynek, które nie korzystają z uwierzytelniania Microsoft 365.
  :::