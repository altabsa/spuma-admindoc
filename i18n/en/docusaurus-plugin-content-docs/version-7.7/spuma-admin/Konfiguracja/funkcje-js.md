---
sidebar_position: 6
---

# JS Functions Tab

The **JS Functions** tab is used to define global JavaScript functions used when calculating attribute values.

Example function that adds 5 days to the current date:

```js
function add5days()
{
    var ret = new Date();
    ret.setDate(ret.getDate() + 5);
    return ret;
};
```

---

## Testing Functions

A JavaScript function testing mechanism is available in the lower part of the tab.

- `Document number` - ID of the document used as the test context.
- `LID` - ID of the document line used as the test context.

After selecting a document and optionally a line, you can enter JavaScript code to execute and run the test. This allows you to verify the function using data from a specific document before using it in the configuration.