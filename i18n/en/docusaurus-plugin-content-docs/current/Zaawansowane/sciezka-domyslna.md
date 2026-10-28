---
id: sciezka-domyslna
position: 1
title: Default Path
---

# Default Path

The **Default Path** field allows you to define an **automatic document path template** used by the system to automatically save the document file in the repository.

The template can contain:

- **fixed text fragments** (e.g. `accounting\invoices\`)
- **variables in curly brackets** `{ ... }`, which the system replaces with document values (e.g. document date, company, user)
- **optional formatting** after the `|` character (e.g. date format or dictionary output format)

At the end, the system creates directories according to the generated path and saves the file in them.

---

## Example

### Template
```text
accounting\invoices\{_PH | CODE}\{DOCDATE | yyyy}\{DOCDATE | MM-MMM}
```

### Example generated path
```text
accounting\invoices\D-ACME\2026\03
```

---

## Separators and directory structure

- The directory separator is a **backslash `\`**.
- The system splits the resulting path by `\` and treats each element as a directory.

Example:
```text
A\B\C
```
→ directories `A`, then `B`, then `C`.

> Note: if you use `/` instead of `\`, the system will not split the path into directories as expected.

---

## Variables in the `{ ... }` template

Each fragment inside `{}` is parsed and replaced with a value.

### General syntax
```text
{NAME}
{NAME | FORMAT}
{NAME | FORMAT, LOCALE}
```

Where:
- `NAME` – variable name (case-insensitive, because it is converted to UPPERCASE)
- `FORMAT` – additional formatting (optional)
- `LOCALE` – locale/language (optional), used for dates

The system:
1. reads the content inside `{...}`
2. if `|` is present, splits it into the name and format
3. if the format contains a comma `,`, the part after the comma is treated as `locale`
4. inserts the result into the path

---

## Available variables (without `_`)

The following variables are supported by the code and can be used in `{}`:

### Identifiers and text
- `{ID}` – document ID
- `{TEMPLATEID}` – template ID
- `{NAME}` – document name
- `{DESCRIPTION}` – document description
- `{DOCNUM}` – document number

### Dictionary objects (depending on system data)
These variables use data related to the document (ID + name):
- `{USER}` – user assigned to the document (UserID)
- `{CLASS}` – document class (ClassID)
- `{COMPANY}` – company (CompanyID)

> For these fields, the system stores a pair of values: `[ID, Name]`. The value inserted into the path depends on the selected `FORMAT` (see section 7).

### Dates
- `{DOCDATE}` – document date (DocDate)
- `{ENTERDATE}` – entry date (EnterDate)
- `{GETDATE}` – current date/time (new Date())

Dates can be formatted (section 6).

---

## Date formatting

For date variables, you can specify the format after `|`, e.g.:

```text
{DOCDATE | yyyy}
{DOCDATE | MM}
{DOCDATE | dd}
```

You can also specify a locale after a comma:

```text
{DOCDATE | MMMM, pl}
{DOCDATE | MMM, en-US}
```

### Practical examples
- Year as a directory:
  ```text
  {DOCDATE | yyyy}
  ```
  → `2026`

- Month as a number:
  ```text
  {DOCDATE | MM}
  ```
  → `03`

- Day:
  ```text
  {DOCDATE | dd}
  ```
  → `20`

- Month name (depending on locale):
  ```text
  {DOCDATE | MMMM, pl}
  ```
  → e.g. `marzec`

> The exact set of supported format tokens depends on the implementation in the system, but common patterns such as `yyyy`, `MM`, `dd`, `MMM`, and `MMMM` are typically used.

---

## Formatting dictionary fields (USER/CLASS/COMPANY) and attributes (`_...`)

For dictionary-type fields, the system usually provides two values:
- `CODE` (e.g. `12`)
- `VALUE` (e.g. `ACME Sp. z o.o.`)

Example:
To retrieve the user surname, use:
```text
{USER | CODE}
```

To retrieve the customer code stored in the **PH** attribute, use:
```text
{_PH_ | VALUE}
```

---


## Rules and best practices

### Avoid risky characters in directory names
Make sure the result does not contain characters that may cause problems in file systems:
- `:` `*` `?` `"` `<` `>` `|`
and avoid trailing spaces or periods.

### Watch for empty values
If the document does not have values such as `CompanyID`, `UserID`, `ClassID`, or a date, the inserted value may be empty, depending on the data and helper method implementation.

Recommended approach:
- do not base the entire path on a field that is often empty
- test the template with several document types

### Reusing a variable
You can use the same variable in several places, e.g.:
```text
{DOCDATE | yyyy}\{DOCDATE | MM}
```
Each occurrence is replaced separately.

---

## Ready-to-use example templates

### A) Accounting → company → year → month
```text
accounting\invoices\{COMPANY | CODE}\{DOCDATE | yyyy}\{DOCDATE | MM}
```

### B) Document class → year-month → document number
```text
documents\{CLASS | NAME}\{DOCDATE | yyyy-MM}\{DOCNUM}
```

### C) User → entry date → document name
```text
import\{USER | ID}\{ENTERDATE | yyyy}\{ENTERDATE | MM}\{NAME}
```

### D) Extended variable → year → month
```text
accounting\invoices\{_PH | CODE}\{DOCDATE | yyyy}\{DOCDATE | MM}
```