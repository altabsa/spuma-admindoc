---
sidebar_position: 5
---

# Security Tab

The **Security** tab contains settings related to access signature validity and password policy.

---

## Properties

- `Signature validity [H]` - Validity period of the signature generated for document links, expressed in hours.

  The signature allows a document to be opened from a link sent, for example, in an e-mail notification. After the specified period, the signature expires.

  Value `0` disables access using a signature.

- `Time to remind password from email (min)` - Validity period of the password reset link sent by e-mail, expressed in minutes.

#### Password Policy

The following properties define user password requirements:

- `Expires after (days)` - Number of days after which the user password expires.
- `Min. length` - Minimum number of characters required in the password.
- `Min. number of capital letters` - Minimum number of uppercase letters required in the password.
- `Min. number of digits` - Minimum number of digits required in the password.
- `Min. number of non-alphanumeric characters` - Minimum number of special characters required in the password.