---
id: instalacja
title: Installation Procedure
sidebar_label: Installation Procedure
sidebar_position: 3
description: SPUMA system installation procedure.
---

# SPUMA Local Installation (v7)

## Step 1 — Create the Database

On the database server, create a new database for the SPUMA system by running the following scripts:

- `SPUMA7_NEWDB.sql` - script that creates the database,
- `SPUMA7_INITIALDATA.sql` - script that inserts the initial data.

#### Recommendations

- Run the `SPUMA7_NEWDB.sql` script in SQLCMD mode. If this is not possible:
  - remove the first line of the script:

  `:SETVAR DBName "SPUMA"`

  - replace all occurrences of `$(DBName)` with the required database name, e.g. `SPUMA`.

- Create the database on the target SQL server before starting the service.
- Make sure that the account used by SPUMA has the required read and write permissions for the database.
- Note the server name, database name, login, and password that will be used in the `spuma.ini` configuration file.

---

## Step 2 — Copy the Application Files

Copy the complete set of SPUMA files to the target application server.

> **Note**  
> The original directory structure must be preserved.

---

## Step 3 — Configure the Files

After copying the files, modify the required configuration files.

### `spuma.ini` File

**Purpose:** database connection configuration  
**Location:** application root directory

Example:

```ini
DataSource=sqlServer
UserID=userId
Password=password
DBName=databaseName
DSTYPE=MsSQL
```

#### Parameter Description

- `DataSource` — SQL server name or address,
- `UserID` — database user login,
- `Password` — database user password,
- `DBName` — SPUMA database name,
- `DSTYPE` — database type. For Microsoft SQL Server, set this value to `MsSQL`. For SAP HANA deployments, use `HANA`.

---

### `config.json` File

**Purpose:** connection configuration for the client and administration applications to the SPUMA server  
**Location:**

- `\Client\assets\config.json`
- `\Admin\assets\config.json`

Example:

```json
{
  "EndPointAddress": "4800",
  "UseRSA": true,
  "O365_SSO": {
    "Enabled": false,
    "AppId": "AaAaAaA-11aa-AaAa-1111-AsAs12344",
    "TenantId": "BbBbBbB-11bb-BbBb-1111-BsBs12344"
  }
}
```

#### Parameter Description

- `EndPointAddress` — SPUMA server communication port configured in the system,
- `UseRSA` — specifies whether communication should use HTTPS,
- `O365_SSO.Enabled` — enables or disables Microsoft 365 sign-in,
- `O365_SSO.AppId` — identifier of the application registered for Microsoft authentication,
- `O365_SSO.TenantId` — Azure AD / Entra ID tenant identifier.

### Configuration Notes

- The port must match the SPUMA DataService server configuration.

:::tip
The default port after installation is `4800`. Make sure that this port is open in the firewall.
:::

- The `config.json` file must be configured separately in the client application directory and the administration application directory.
- If Microsoft 365 sign-in is not used, the `Enabled` parameter should remain set to `false`.
- The `O365_SSO` settings do not apply to the administration application.

---

## Step 4 — Install the SPUMA DataService Server

Perform the following steps on the application server.

### Install .NET 9 Runtime

Install the .NET 9 Runtime required by SPUMA DataService.

### Install the Windows Service

Install SPUMA DataService as a Windows service.

The service registration method depends on the administrative standards used in the organization. Standard Windows mechanisms can be used to register the service.

### Start the Service

After installation, start the following service:

**SPUMA DataService**

### Recommendations

After starting the service, verify that:

- the service starts correctly,
- the communication port is listening,
- the service has access to the database,
- any firewall rules allow access to the configured port.

---

## Step 5 — Verify the Installation

After completing the installation, perform a system operation test.

### Start the Client and Administration Applications

Based on the provided settings, the default test URL for the client application is:

```text
http://domain:4800/client/
```

The default test URL for the administration application is:

```text
http://domain:4800/admin/
```

### Default Login Credentials

When the system is started for the first time, the `admin` user is created automatically. The password is generated automatically and can be found in the service log file in the `Logs` directory.

### Test Scope

Verify that:

- the application page opens correctly,
- the application connects to SPUMA DataService,
- login for the `admin` user works correctly,
- data is read correctly from the database.

:::warning
Do not enter any data in the client application before completing the initial configuration in the administration application.
:::

---

## Next Steps After Installation

After confirming that the installation works correctly, proceed with the initial system configuration, including:

- assigning the license,
- configuring the main system settings,
- configuring companies,
- defining users and groups,
- assigning permissions,
- configuring document workflows,
- configuring integrations with external systems.

These steps should be described in a separate section: **Initial Configuration**.
