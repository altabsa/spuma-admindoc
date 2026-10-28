---
id: ciag-polaczenia
position: 3
title: Connection String
---

# Creating a Connection String for SQL Queries

In the SQL query definition, you can specify a custom connection string to an external database.

This mechanism allows queries to be executed against:

- **Microsoft SQL Server**
- **SAP HANA DB**

If the connection string field is empty, the query is executed using the current SPUMA system connection.

---

## Connection Type Detection

The connection type is detected based on the field value:

- **empty value**  
  the current SPUMA system connection is used,

- **non-empty value without the `HANA:` prefix**  
  the connection is treated as **MS SQL Server**,

- **non-empty value starting with the `HANA:` prefix**  
  the connection is treated as **SAP HANA DB**.

From a technical perspective, the test mechanism uses:

- `SqlConnection` for **MS SQL**,
- `OdbcConnection` for **HANA**.

The connection string syntax must therefore comply with the requirements of the corresponding driver.

---

## Connection Test Behavior

During the connection test, the system:

1. checks whether a custom connection string is defined,
2. determines the connection type based on the `HANA:` prefix,
3. opens a connection to the specified database,
4. attempts to retrieve data,
5. executes the operation within a test transaction,
6. rolls back the transaction using `Rollback`,
7. closes the connection if it was opened as an external connection.

### Practical Implications

- the test verifies both the connection and the ability to execute the query,
- the test **does not persist changes** in the database,
- an error may be caused by an invalid connection string or by:
  - no access to the server,
  - invalid credentials,
  - missing required driver,
  - insufficient permissions to objects used by the query,
  - invalid query syntax.

---

## Microsoft SQL Server Requirements

For MS SQL, provide a standard connection string compatible with `SqlConnection`.

### Example 1 — SQL Server Authentication

```text
Server=SQL01;Database=SPUMA_EXT;User Id=spuma_user;Password=Haslo123!;
```

### Example 2 — Named Instance and Additional Parameters

```text
Server=SQL01\PROD;Database=SPUMA_EXT;User Id=spuma_user;Password=Haslo123!;TrustServerCertificate=True;Encrypt=True;
```

### Example 3 — Windows Integrated Authentication

```text
Server=SQL01;Database=SPUMA_EXT;Integrated Security=True;
```

### MS SQL Notes

- do **not** add the `HANA:` prefix for MS SQL connections,
- the connection string must use syntax supported by `SqlConnection`,
- if the server requires encryption, include parameters such as `Encrypt` and `TrustServerCertificate`,
- for named instances, use the `Server\Instance` format.

---

## SAP HANA DB Requirements

For SAP HANA, provide an **ODBC-style** connection string prefixed with:

```text
HANA:
```

The prefix is required so that SPUMA can detect the HANA connection type.

### Example 1 — Basic HANA Connection String

```text
HANA:Driver={HDBODBC};ServerNode=hanaserver:30015;UID=SYSTEM;PWD=Haslo123!;
```

### Example 2 — Connection String with Database / Tenant

```text
HANA:Driver={HDBODBC};ServerNode=hanaserver:30015;UID=spuma_user;PWD=Haslo123!;DATABASE=SPUMA;
```

### Example 3 — Connection String with Additional ODBC Parameters

```text
HANA:Driver={HDBODBC};ServerNode=hanaserver.company.local:30015;UID=spuma_user;PWD=Haslo123!;CHAR_AS_UTF8=1;
```

### HANA Notes

- the `HANA:` prefix is required so that the system selects HANA connection mode,
- the remaining part of the string must comply with the syntax supported by the ODBC driver,
- the appropriate SAP HANA ODBC driver must be installed on the server,
- parameter names may depend on the driver version and environment.

:::info
Because the HANA connection uses `OdbcConnection`, the validity of the final connection string depends on the installed ODBC driver and the parameters it supports.
:::

---

## Common Errors

### Error 1 — Missing `HANA:` Prefix for HANA

Incorrect example:

```text
Driver={HDBODBC};ServerNode=hana01:30015;UID=user;PWD=pass;
```

Result:

- the system attempts to treat the string as an **MS SQL** connection, which results in an error.

### Error 2 — Using the `HANA:` Prefix for an MS SQL Connection String

Incorrect example:

```text
HANA:Server=SQL01;Database=SPUMA_EXT;User Id=user;Password=pass;
```

Result:

- the system attempts to use the HANA ODBC mechanism and the connection fails.

### Error 3 — Missing HANA ODBC Driver

Symptom:

- an error occurs while opening the connection.

### Error 4 — Valid Connection String but Insufficient Permissions

Symptom:

- the connection is opened successfully,
- an error occurs only when the test query is executed.

---