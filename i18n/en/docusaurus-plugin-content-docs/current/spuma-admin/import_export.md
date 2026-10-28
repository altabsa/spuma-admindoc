---
sidebar_position: 13
---

# Import/Export

The **Import/Export** section allows SPUMA configuration to be transferred between installations using `JSON` files.

The mechanism can be used, among other things, to copy similar classes, authorization schemas, dictionaries, and other configuration elements.

---

## Export

The **Export** tab allows you to select the objects that should be saved to a `JSON` file.

The mechanism analyzes dependencies between objects and indicates the elements required to maintain consistency of the exported configuration.

- `Export organization data` - Includes organization data associated with the selected objects in the export.

---

## Import

The **Import** tab allows you to load configuration from a previously generated `JSON` file.

During import, the system processes the objects stored in the file and reports the result of the operation.

- `Resolve IDs from file` - Enables mapping of object identifiers stored in the imported file.

:::warning
Import can create or modify related configuration elements. Before importing, verify the scope of data stored in the `JSON` file and the dependencies between objects.
:::