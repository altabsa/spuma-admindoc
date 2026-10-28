---
sidebar_position: 2
---

# DATASERVICE

The **DATASERVICE** module contains technical parameters of the `SPUMA_DataService` service and communication between the web client and the server.

---

## Properties

- `FORCEPREVQUALITY` - Quality level of the document preview generated for the web client, in the range `0-100`.

  The value affects the preview compression level. `100` means the highest quality.

  :::note
  Lowering the value can reduce the amount of transferred data, but also reduces document preview readability.
  :::

- `SPUMAHOSTIPC` - IPC port used for communication with the service responsible for calling functions from external DLL libraries.

  :::warning
  Change this value only if the default port is already in use.
  :::

- `HTTPPORT` - Port on which the service handles the web client.

- `HTTPUSESSL` - Specifies whether communication with the web client uses SSL.

- `BIRSERVICEURL` - Address of the web service used to retrieve data from GUS.

- `SPUMALITEHTTPPATH` - Path to the SPUMA Lite application.

- `O365_APPID`, `O365_TENANTID`, `O365_SECRET` - Parameters used to authenticate SPUMA with Microsoft 365 mail services.

  The values are generated in Microsoft 365 and are used for mailbox integration, including sending e-mail messages and retrieving messages via IMAP.

  :::note
  These parameters are not required for mailboxes that do not use Microsoft 365 authentication.
  :::