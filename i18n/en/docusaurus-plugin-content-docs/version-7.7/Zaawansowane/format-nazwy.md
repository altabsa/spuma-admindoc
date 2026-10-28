---
id: format-nazwy
position: 2
title: Name Format
---

# Name Format

The **Name Format** field is used to define a **template (algorithm)** for automatically generating the document name / identifier based on:

* document class,
* class attributes (including base classes),
* document properties (e.g. dates, document number, user, company),

---

## General behavior

When creating the document name, the system:

1. **Selects the base name template**

   * If the document has an assigned class:

     * if **Name Format** in the class is empty → the default value is used:

       * `"{CLASSNAME}_{DOCNUM}"`
     * if **Name Format** is filled in → its value is used directly.
   * If the document has no class → the default value is used:

     * `NZ_{DOCNUM}`

where `DOCNUM` is the document number entered by the user.

2. **Replaces values in the template** (placeholders in `{...}`) according to the rules described below.

3. Returns the generated name as text.

---

## Template syntax

The template is plain text in which you can place **placeholders** in curly brackets:

* System placeholders have the following form:

  * `{DOCNUM}`, `{ID}`, `{CLASSNAME}`, `{USERNAME}`, `{CMPNAME}`, etc.
* Class attribute placeholders have the following form:

  * `{ATTRIBUTE_NAME}`

:::warning  
The attribute is searched by name, while replacement is performed using the UPPERCASE version, e.g. the `Department` attribute is replaced using `{DEPARTMENT}`.
:::

Separators, fixed prefixes/suffixes, hyphens, slashes, etc. can be added freely, e.g.:

* `FV/{DD_YYYY}/{DOCNUM}`
* `{CARDCODE}-{DEPARTMENT}-{DOCNUM}`

---

## Available system placeholders

The following list works **always** (provided that the corresponding value exists in the document).

### Identifiers and basic data

* `{DOCNUM}` – document number (`m_docnum`)
* `{ID}` – internal document ID (`m_id`)
* `{CLASSNAME}` – document class name (always replaced if a class is assigned)
* `{CMPNAME}` – company name (`Company`) **only if** `company_id > 0`
* `{USERNAME}` – user name **only if** `user_id > 0`

## Replacing class attributes (and base class attributes)

If the document has a class, the system processes attributes of the class **and subsequent base classes** (inheritance), and for each attribute:

* checks whether the document has a property with a name **exactly equal** to the attribute name,
* if so — retrieves the value and replaces the placeholder:
  * e.g. attribute `Symbol` → placeholder `{SYMBOL}`

### Value with description (`<!>`)

If the value has the following format:

* `CODE<!>Description`

then only the part before `<!>` is inserted into the name, i.e.:

* `CODE`

### Special role of an attribute of type `TYPE_CUSTOM`

If an attribute has type `TYPE_CUSTOM`, its value (regardless of the attribute name) can be used as the **CARDCODE source**, but only when:

* the class is not of type *Invoice* or *Correction*,
* the class is of type **Invoice** or **Correction**  and the **Supplier** field is empty (the system then tries to extract CARDCODE from the attributes).

---

## Date placeholders

The system supports three dates:

* document date (`m_docdate`)
* entry date (`m_enterdate`)
* creation date (`m_createdat`) — **always** assumed to be available

### Document date

If the date **is not** provided → all placeholders below are replaced with empty text:

* `{DOCDATE}` – `YYYY-MM-DD`
* `{DD_DD}` – day `DD`
* `{DD_MM}` – month `MM`
* `{DD_YYYY}` – year `YYYY`
* `{DD_YY}` – short year `YY` (last 2 digits)

If the date exists → replacements are performed according to the formats above.

### Entry date

If the date **is not** provided → all placeholders below are replaced with empty text:

* `{ENTERDATE}` – `YYYY-MM-DD`
* `{ED_DD}`, `{ED_MM}`, `{ED_YYYY}`, `{ED_YY}`

If the date exists → replacements are performed as above.

### Creation date

For `m_createdat`, the system **always** replaces:

* `{CREATEDATE}` – `YYYY-MM-DD`
* `{CD_DD}`, `{CD_MM}`, `{CD_YYYY}`, `{CD_YY}`

---

## Replacement order (important!)

The order matters for complex templates. In practice:

1. The template is determined (NameFormat or default).
2. `{CLASSNAME}` is replaced.
3. Class attributes are replaced (placeholders `{ATTRIBUTE}` in UPPERCASE).
4. `{CARDCODE}` is replaced.
5. `{ID}`, `{DOCNUM}` are replaced.
6. `{CMPNAME}`, `{USERNAME}` are replaced (if available).
7. Dates `{DOCDATE...}`, `{ENTERDATE...}`, `{CREATEDATE...}` are replaced.

---

## Example formats (ready to paste)

### Simple, readable default format

```text
{CLASSNAME}_{DOCNUM}
```

### Invoice with year and Business Partner code

```text
FV_{CARDCODE}_{DD_YYYY}_{DOCNUM}
```

### Name with department attribute and entry date

*(the class contains the `Department` attribute)*

```text
{CLASSNAME}_{DEPARTMENT}_{ED_YYYY}{ED_MM}{ED_DD}_{DOCNUM}
```

### Name with creation date and user

```text
{CLASSNAME}_{CD_YYYY}-{CD_MM}-{CD_DD}_{USERNAME}_{DOCNUM}
```

### Format supporting `CODE<!>Description` values

If the `Project` attribute has the value `PRJ01<!>Projekt Alfa`, then:

```text
{CLASSNAME}_{PROJECT}_{DOCNUM}
```

generates, for example, `Umowa_PRJ01_000123`

---

## Common problems and their causes

* **`{DEPARTMENT}` remains in the name instead of being replaced**

  * the placeholder does not match the attribute name (it must be UPPERCASE),
  * the document does not have a property with that name.

* **`{CARDCODE}` is empty**

  * the class is of type `Invoice` or `Correction` and the `m_businesspartner` property is not set,
  * the class is of type `Other` and no `TYPE_CUSTOM` attribute was found,
  * the value was empty / null.

* **`{CMPNAME}` or `{USERNAME}` is not replaced**

  * the document does not have an assigned company or user.

* **Document date is not included**

  * the selected date is not set on the document.

---

## Quick placeholder reference table

| Category | Placeholder | Description / format | Availability |
| ---------- | ----------------------------------------- | --------------------------- | ----------------------- |
| ID | `{ID}` | document ID | always |
| Number | `{DOCNUM}` | document number | always |
| Class | `{CLASSNAME}` | class name | when a class is assigned |
| Company | `{CMPNAME}` | company name | when `company_id > 0` |
| User | `{USERNAME}` | user name | when `user_id > 0` |
| Business Partner | `{CARDCODE}` | code (part before `<!>`) | when an attribute is available |
| Document date | `{DOCDATE}` | `YYYY-MM-DD` | when `docdate != null` |
| Document date | `{DD_DD}` `{DD_MM}` `{DD_YYYY}` `{DD_YY}` | date components | when `docdate != null` |
| Entry date | `{ENTERDATE}` | `YYYY-MM-DD` | when `enterdate != null` |
| Entry date | `{ED_DD}` `{ED_MM}` `{ED_YYYY}` `{ED_YY}` | date components | when `enterdate != null` |
| Creation date | `{CREATEDATE}` | `YYYY-MM-DD` | always |
| Creation date | `{CD_DD}` `{CD_MM}` `{CD_YYYY}` `{CD_YY}` | date components | always |
| Attribute | `{ATTRIBUTE}` | value (part before `<!>`) | when the property exists |

---