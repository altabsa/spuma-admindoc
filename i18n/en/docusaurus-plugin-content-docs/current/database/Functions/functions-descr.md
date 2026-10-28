---
sidebar_position: 6
---

# Detailed Function Description

## AFN_FIND_DOCUMENTS Function

### Operation

Searches for documents by keywords from the web application.

### Required

Yes.

### Description

The `AFN_FIND_DOCUMENTS` function is called when searching for documents in the web application.

It searches data including the `RESOURCES` table, in the `keywords` column, based on the text entered in the search field.

It also supports special keywords in the following format:

```text
?attribute_name:search_text
```

### Input Parameters

- `@keywords` - text entered in the search field.
- `@indocname` - search in the document name:
  - `Y` - yes,
  - `N` - no.
- `@indocdesc` - search in the document description:
  - `Y` - yes,
  - `N` - no.
- `@indocnum` - search in the document number:
  - `Y` - yes,
  - `N` - no.
- `@inkeywords` - search in text:
  - `Y` - yes,
  - `N` - no.
- `@incomments` - search in comments:
  - `Y` - yes,
  - `N` - no.

### Expected Output

A table containing:

- `docid` - document ID.
- `frac` - search relevance in the range from `0` to `1`.

### Notes

:::warning
The function is created during system installation. Modifying it is not recommended and requires good knowledge of SQL mechanisms and the SPUMA database structure.
:::