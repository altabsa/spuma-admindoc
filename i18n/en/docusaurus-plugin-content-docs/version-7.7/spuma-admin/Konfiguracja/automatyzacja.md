---
sidebar_position: 4
---

# Automation Tab

The **Automation** tab contains settings for the legacy mechanism used to automatically import e-mail messages into SPUMA using the POP3 protocol.

The mechanism periodically checked the mailbox and created documents in the **Secretary** based on retrieved messages.

In the current version, this mechanism is not used. IMAP integration is recommended for mailbox handling.

---

## Properties

- `Interval [S]` - Mailbox polling interval, expressed in seconds.

- `SPUMA company` - Company in which documents retrieved by the automation mechanism were created.

- `SPUMA user ID` - User used by the automation mechanism to create documents.

:::warning
The settings in this tab are retained for compatibility with the legacy POP3 mechanism. They are not used in the current system version.
:::