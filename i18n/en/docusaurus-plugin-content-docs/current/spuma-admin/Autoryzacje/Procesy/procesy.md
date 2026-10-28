---
sidebar_position: 1
---

# Authorization Processes

**Authorization Processes** define a dynamic document approval path.

Unlike authorization schemas, the subsequent process stages can depend on:

- document attribute values,
- user decisions,
- parameters provided during authorization,
- the flow of previous stages.

A process is defined as a diagram consisting of start points, authorization stages, transition conditions, and end points.

---

## Process Configuration

Process configuration is divided into the following tabs:

- [**General**](./ogolne),
- [**Process**](./proces),
- [**Permissions**](./uprawnienia),
- [**Variables**](./zmienne),
- [**Classes**](./klasy).

## Duplicating a Process

The **Duplicate** function allows you to create a new process based on the configuration of an existing process. This avoids manually recreating settings or using import and export.

To duplicate a process:

1. open the selected process,
2. click the operations menu on the right side of the tab bar,
3. select **Duplicate**,
4. modify the required settings,
5. save the new process.

The new process receives the configuration copied from the source process. Its code is generated automatically with the `_1`, `_2`, etc. suffix, for example:

`Proces_faktury` → `Proces_faktury_1`

Subsequent copies will receive `_2`, `_3`, etc.

:::note
Duplication applies to one currently open object. The source process is not modified.
:::