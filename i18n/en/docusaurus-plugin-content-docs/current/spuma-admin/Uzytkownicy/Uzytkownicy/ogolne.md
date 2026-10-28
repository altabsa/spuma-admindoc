---
sidebar_position: 2
---

# General Tab

The **General** tab contains the basic user settings.

---

## Properties

- `Name` - User name (login).

:::warning
The name must be unique across the entire database.
:::

- `New password`, `New password 2` - Used to set or change the user's password.
  - icon next to the password fields - **Require password change at login**. When enabled, the user will be required to change the password at the next login.

- `Comment color` - Color of the user's comments displayed on documents.

- `Language` - User interface language.

- `Creator` - Allows the user to add new documents in the **Secretary**.

- `Administrator` - Allows the user to log in to the administration application.

- `System` - Marks a technical account used for API login, e.g. by the SPUMA4SBO add-on for SAP Business One. A system account cannot log in to the web application.

- `Locked` - Prevents the user from logging in to the system.

- `Name/Surname` - User's full name used, among other things, in document templates and algorithms.

- `Recent documents` - Number of recently opened documents stored for the user.

- `Default correspondence log` - Correspondence Log proposed to the user by default.

- `Supervisors` - List of supervisors assigned to the user.

- `Expires` - User token expiration date.

- `Token` - Token that allows login without entering a password. It can be used, among other things, for login from SAP.

- `Session mode` - Specifies the user's session access mode and how the session is handled in the token context:
  - Read - read-only access,
  - Read/Write - read and write access.

- `Advice visibility` - Scope of advice visibility:
  - All - the user can see all advice entries,
  - Only fit - the user can see only advice entries matching their configuration.