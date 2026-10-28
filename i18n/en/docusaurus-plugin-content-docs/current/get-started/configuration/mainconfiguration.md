---
sidebar_position: 3
sidebar_label: Main Configuration
---

# Main System Configuration

The SPUMA system is based on the **SPUMA DataService**, which is responsible for handling the data model, access control, and operation of the client and administration applications.

First, configure the parameters of the **DATASERVICE** module, in particular the web application port and the HTTP communication method.

## 1. Check the Web Application Port

By default, the SPUMA web application uses port:

```text
4800
```

Check whether port `4800`:

- is available on the server,
- is not used by another service,
- can be used in the target environment.

If a firewall is enabled on the server, allow communication on the selected port.

If port `4800` is available, there is no need to change it.

## 2. Change the Port

If port `4800` is already in use or the environment requires a different port, set the appropriate `HTTPPORT` value.

#### Change the Port Using SPUMA Admin

If the **SPUMA Admin** application is available:

1. go to **Configuration → Modules → DATASERVICE**,
2. set the appropriate `HTTPPORT` value,
3. save the configuration,
4. change the port in the following files:
   - `\Client\assets\config.json`,
   - `\Admin\assets\config.json`,
5. restart the **SPUMA DataService**.

#### Change the Port Directly in the Database

If port `4800` is already in use during the first startup and the **SPUMA Admin** application is not available:

1. open the `MODULECONFIG` table,
2. find the entry where:
   - `module = DATASERVICE`,
   - `property = HTTPPORT`,
3. set the selected port in the `value` field,
4. change the port in the following files:
   - `\Client\assets\config.json`,
   - `\Admin\assets\config.json`,
5. restart the **SPUMA DataService**.

:::warning
The port configured in `MODULECONFIG` and in the `config.json` files must be the same.
:::

## 3. SSL Configuration

The **SPUMA DataService** service enables communication with the SPUMA Client and SPUMA Admin applications using the HTTPS protocol.

### SPUMA DataService Configuration

Go to:

**Configuration → Modules → DATASERVICE**

Check the `HTTPUSESSL` value.

This parameter specifies whether the SPUMA web application uses HTTPS communication.

- disabled — communication without SSL,
- enabled — communication using SSL.

If SSL is enabled:

1. set `HTTPUSESSL`,
2. open the following files:
   - `\Client\assets\config.json`,
   - `\Admin\assets\config.json`,
3. set the `UseRSA` parameter according to the HTTPS configuration,
4. save the changes,
5. restart the **SPUMA DataService**.

:::warning
The `HTTPUSESSL` and `UseRSA` values must be consistent with the environment configuration.
:::

### SSL Certificate Assignment

To enable secure HTTPS connections, an SSL certificate must be assigned to the TCP port used by the SPUMA DataService service.

The certificate is assigned at the Windows Server level using the `netsh` tool (`HTTP.sys`).

:::info
Port **4000** is used in the examples below.
:::

#### Requirements

Before starting the configuration, make sure that:

- The SSL certificate is installed in the local computer certificate store (**Local Computer → Personal → Certificates**).
- The certificate has a private key.
- The certificate is valid and matches the DNS name under which the SPUMA service will be available.
- TCP port 4000 is configured as the HTTPS port of the SPUMA DataService service.
- TCP port 4000 is allowed through the firewall if access from other computers is required.
- Commands are executed with Windows administrator privileges.

#### 1. Checking the Installed Certificate

Run PowerShell as administrator and execute:

```powershell
Get-ChildItem Cert:\LocalMachine\My |
    Select-Object Subject, Thumbprint, NotAfter, HasPrivateKey
```

The command displays certificates stored in the local computer personal certificate store.

Locate the certificate intended for SPUMA and copy the **Thumbprint** value.

Certificates can also be viewed using the Windows graphical interface:

1. Run `certlm.msc`.
2. Go to **Personal → Certificates**.
3. Open the selected certificate.
4. On the **Details** tab, read the **Thumbprint** field.

#### 2. Checking the Existing Certificate Binding

Run CMD or PowerShell as administrator.

To display the current certificate binding for port 4000, execute:

```cmd
netsh http show sslcert ipport=0.0.0.0:4000
```

To display all HTTP.sys certificate bindings:

```cmd
netsh http show sslcert
```

The binding configuration includes, among others:

- **Certificate Hash** – thumbprint of the assigned certificate.
- **Application ID** – application identifier.
- **Certificate Store Name** – certificate store name.

The SPUMA DataService application identifier (`appid`) has the following fixed value:

```text
{25074b78-c0bd-46e7-9317-5d5fedacb517}
```

#### 3. Adding a Certificate Binding

If port 4000 does not yet have an assigned certificate, execute:

```cmd
netsh http add sslcert ipport=0.0.0.0:4000 certhash=THUMBPRINT appid="{25074b78-c0bd-46e7-9317-5d5fedacb517}" certstorename=MY
```

Replace `THUMBPRINT` with the actual certificate thumbprint, without spaces.

Command parameters:

| Parameter | Description |
|---|---|
| `ipport=0.0.0.0:4000` | Assigns the certificate to port 4000 for all local IPv4 addresses. |
| `certhash` | SSL certificate thumbprint. |
| `appid` | Fixed SPUMA DataService application identifier. |
| `certstorename=MY` | Personal certificate store of the local computer. |

#### 4. Changing the Assigned Certificate

If port 4000 already has an assigned certificate, the binding can be updated using:

```cmd
netsh http update sslcert ipport=0.0.0.0:4000 certhash=NEW_THUMBPRINT appid="{25074b78-c0bd-46e7-9317-5d5fedacb517}" certstorename=MY
```

Replace `NEW_THUMBPRINT` with the thumbprint of the new certificate.

Alternatively, the existing binding can be removed:

```cmd
netsh http delete sslcert ipport=0.0.0.0:4000
```

Then add a new binding using the command described in section 3.

**Note:** Removing the binding may cause temporary HTTPS communication unavailability. It is recommended to use the `update` command instead of deleting and re-adding the binding.

#### 5. Verifying the Configuration

After adding or changing the certificate, execute:

```cmd
netsh http show sslcert ipport=0.0.0.0:4000
```

Check that:

- `Certificate Hash` matches the correct certificate.
- `Application ID` is `{25074b78-c0bd-46e7-9317-5d5fedacb517}`.
- `Certificate Store Name` is `MY`.

Then verify the HTTPS connection to the SPUMA service by opening:

```text
https://server-name:4000/
```

Replace `server-name` with the DNS name matching the certificate.

A correct TLS configuration should allow a secure connection without certificate errors. The HTTP response depends on the configuration of the available service endpoints.

#### 6. Troubleshooting

| Problem | Possible cause or solution |
|---|---|
| Certificate not found | Check whether the certificate is installed in the `LocalMachine\My` store. |
| `SSL Certificate add failed, Error: 183` | The port already has an assigned certificate. Use the `update` command. |
| Access error | Run the console with administrator privileges. |
| Certificate error in the browser | Check certificate validity, DNS name, and trust in the certificate issuer. |
| No HTTPS connection | Check the SPUMA DataService port configuration, listening status, and Windows Firewall rules. |
| Certificate is visible but does not work | Check whether the certificate has a private key and verify that the thumbprint is correct. |

**Important:** Assigning a certificate to a port does not automatically change the SPUMA DataService configuration. The HTTPS port configured in the service must match the port assigned in HTTP.sys.

For bindings using a specific IP address or host name, adjust the `netsh` commands accordingly. `hostnameport` bindings are managed separately from `ipport`.

## 4. Check the Remaining DATASERVICE Parameters

In **Configuration → Modules → DATASERVICE**, also check the remaining parameters.

#### `SPUMAHOSTIPC`

Check the `SPUMAHOSTIPC` value.

This parameter specifies the IPC port used for communication with the service responsible for invoking functions from external DLL libraries.

Change the value only if required by the environment configuration.

#### `FORCEPREVQUALITY`

Check the `FORCEPREVQUALITY` value.

This parameter specifies the quality level of the document preview generated for the web application.

Available range:

```text
0-100
```

A value of `100` indicates the highest preview quality.

Reduce this value only if the amount of transferred data needs to be limited.

## 5. Verify the Configuration

After saving the configuration, verify that:

- the **SPUMA DataService** starts correctly,
- the configured `HTTPPORT` is available,
- the user can open the SPUMA application,
- the **SPUMA Admin** application works correctly,
- the SSL configuration is consistent with the environment configuration.
