---
sidebar_position: 3
---

# Parameters Tab

The **Parameters** tab is used to define parameters used in the SQL query of an interactive dictionary.

Parameters use the same data types as attributes and can retrieve values from properties or attributes of the parent object.

In an SQL query, a parameter is used in the following form:

```text
@name
```

---

## Properties

- `Name` - Parameter name. In the SQL query, the parameter is available as `@name`.

- `Description` - Parameter description displayed in the administration application.

- `Visibility` - Specifies whether the parameter is visible.

- `Type` - Specifies the parameter data type. A detailed description of the available types is provided in the [**Data Types**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/typy-danych.md) section.

- `Format` - Regular expression that defines the valid format of the parameter value. Optional.

- `Algorithm` - Specifies how the parameter value is retrieved or calculated. It can reference a system property, an attribute defined in the class, or contain a more complex JavaScript algorithm.

For system properties and class attributes, use the following syntax:

```text
_NAME
```

---

## Example

An SAP purchase order dictionary can retrieve purchase orders for the Business Partner specified in the document.

```sql
select '' as value, 'brak' as descr
union all
select
    distinct a.DocEntry,
    'ZZ ' + cast(b.DocNum as nvarchar) + ' z dnia ' + CONVERT(nvarchar, b.DocDate, 105)
from [$DBNAME].dbo.POR1 a
join [$DBNAME].dbo.OPOR b on a.DocEntry = b.DocEntry
where b.CardCode = @ph
```

Parameter configuration:

| Property | Value |
| --- | --- |
| `Name` | `ph` |
| `Type` | `Text` |
| `Algorithm` | `_PH` |

In this example, `_PH` references the system property from which the value is retrieved. The value is then passed to the SQL query as the `@ph` parameter.

### System Properties

Below is a list of system properties that can be used in the `Algorithm` field.

<!-- TODO: Complete the list of system properties. -->