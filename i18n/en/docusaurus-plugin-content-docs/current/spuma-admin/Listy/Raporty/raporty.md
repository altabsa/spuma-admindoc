---
sidebar_position: 1
---

# Reports

**Reports** are used to define data summaries retrieved from the SPUMA database, ERP system, or other data sources.

A report is generated based on an SQL query and can use input parameters, column configuration, and links to other objects.

Reports can also be linked hierarchically using the subreport mechanism.

## Report Configuration

Report configuration is divided into the following tabs:

- [**General**](./ogolne),
- [**Parameters**](./parametry),
- [**Column Settings**](./ustawienie-kolumn),
- [**Permissions**](./uprawnienia).

## Duplicating a Report

The **Duplicate** function allows you to create a new report based on the configuration of an existing report. This avoids manually recreating settings or using import and export.

To duplicate a report:

1. open the selected report,
2. click the operations menu on the right side of the tab bar,
3. select **Duplicate**,
4. modify the required settings,
5. save the new report.

The new report receives the configuration copied from the source report. Its code is generated automatically with the `_1`, `_2`, etc. suffix, for example:

`Raport_faktur` → `Raport_faktur_1`

Subsequent copies will receive `_2`, `_3`, etc.

:::note
Duplication applies to one currently open object. The source report is not modified.
:::