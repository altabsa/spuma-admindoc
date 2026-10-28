---
sidebar_position: 6
---

# E-document Exchange Tab

The **E-document Exchange** tab is used to assign the user access to electronic document integrations.

The currently supported integration type is **KSeF**.

---

## Properties

- `Name` - Integration name displayed later in the electronic documents list.

- `Type` - Integration type. Currently, **KSeF** is available.

- `Company` - Company for which the user is granted access to KSeF documents.

- `User`, `Password` - These fields are not configured at the user level. Authentication data is retrieved from the company configuration.

- `Extension` - Optional value used to restrict the user's access to documents assigned to a specific branch or identifier registered in KSeF.

:::note
KSeF access configuration is assigned to the company, not directly to the user.
:::