---
sidebar_position: 4
---

# Variables Tab

The **Variables** tab contains variables used in the algorithm.

The list includes:

- variables created in individual algorithm stages,
- variables created manually.

Variables created by instructions are grouped by algorithm stage. They can be used in subsequent instructions and conditions.

From this tab, you can also manually create a new variable and use it in the algorithm.

---

## Properties

- `Name` - Variable name.

- `Description` - Variable description displayed in the administration application.

- `Type` - Type of data stored in the variable. Available types:

| Type | Description |
| --- | --- |
| `Text` | Text value. |
| `Int` | Integer value. |
| `Float` | Floating-point value. |
| `Date` | Date value. |
| `Table` | Tabular data. |

- `JS Code` - JavaScript code used to initialize the variable. It allows a value to be retrieved or calculated dynamically and then used in subsequent algorithm stages and conditions.

## JS Code Examples

JS Code can be used, among other things, to:

- retrieve values of custom document attributes,
- retrieve system document properties,
- execute custom JavaScript expressions,
- call procedures using `callDS`.

**Example 1:**

A custom document attribute value can be referenced by its name.

```text
{ATTRIBUTE_NAME}
```

**Example 2:**

JS Code can be used, for example, to determine a value based on the document currency.

For a variable of type `Float`:

```js
[['PLN',36900],['EUR',8730],['USD',10245]].find((t)=> t[0]== _WALUTA)[1]
```

The code reads the `_WALUTA` attribute value and returns the corresponding value:

- `PLN` - `36900`,
- `EUR` - `8730`,
- `USD` - `10245`.

The returned value is stored in the variable and can be used in an algorithm condition, for example to compare the document value with the appropriate currency-dependent threshold.

**Example 3:**

A value can also be retrieved from a procedure using `callDS`.

```js
(await callDS('APR_PROGI','PR',[SYS_ID,SYS_CLASSID,'ET1']))[0].C0
```

In this example, the following values are passed to the `APR_PROGI` procedure:

- `SYS_ID` - document ID,
- `SYS_CLASSID` - document class ID,
- `'ET1'` - additional parameter.

The `[0].C0` value is retrieved from the procedure result and stored in the variable.

This allows the logic for calculating values or thresholds to be defined in a procedure and the returned result to be used in algorithm conditions.

---

## Unused Variables

The **Select Unused** button searches for and selects variables that are not used in the algorithm.

This function makes it easier to remove unnecessary variables and organize the algorithm definition.

After selecting unused variables, you can remove them using the **Delete** button.