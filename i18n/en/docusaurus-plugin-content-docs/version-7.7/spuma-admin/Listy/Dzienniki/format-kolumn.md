---
sidebar_position: 4
---

# Column Format Tab

The **Column Format** tab is used for additional configuration of columns returned by the correspondence log.

The configuration is optional and can override the default column behavior resulting from the SQL script.

---

## Properties

- `Column name` - Name of the column returned by the SQL query.

- `Type` - Specifies where the column configuration is applied.
  - `Report`,
  - `Print`.

- `Label` - Column name displayed in the web application.

- `Sorting` - Enables sorting by the column.

- `Ascending sort` - Sets ascending order as the default sort direction.

- `Link type` - Specifies whether the column value should act as a link to another object.

| Option | Description |
| --- | --- |
| `None` | The column is not a link. |
| `Subreport` | Creates a link to another report. |
| `Document` | Creates a link to a SPUMA document. |
| `Correspondence log entry` | Creates a link to a correspondence log entry. |
| `Access entry` | Creates a link to an access approval entry. |

- `Width` - Column width:
  - `-1` - column hidden,
  - `0` - automatic width,
  - value `> 0` - width in pixels.

- `Grouping` - Grouping level:
  - `0` - no grouping,
  - value `> 0` - grouping order.

- `Scale` - Number of decimal places:
  - `-1` - automatic value,
  - value `>= 0` - number of decimal places.

- `Align right` - Aligns the column content to the right.

- `Total` - Enables summing of the column values.