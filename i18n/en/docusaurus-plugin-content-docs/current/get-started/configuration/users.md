---
sidebar_position: 5
sidebar_label: Users and Groups
---

# Defining Users and Groups

Users and groups are used to configure access to companies, permissions, and document workflows.

The recommended approach is to use **user groups** instead of assigning individual users directly in multiple places in the system.

This allows you to:

- use groups in processes and authorization schemas,
- add and remove users from groups without modifying the process configuration,
- simplify permission assignment and maintenance,
- reduce the number of changes required when personnel changes occur.

First, create the users and then assign them to the appropriate groups.

Configure these settings in the **SPUMA Admin** application in the **Users** and **User Groups** sections.

## 1. Create a User

Go to the **Users** section and add a new user.

In the **General** tab, complete the basic user information.

After entering the data, save the user.

A detailed description of the fields available in the **General** tab is available in the documentation:

[**SPUMA Admin → Users → General**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Uzytkownicy/Uzytkownicy/ogolne.md)

## 2. Assign Company Access

After creating the user, specify which companies the user can access.

1. open the user,
2. go to the **Permissions** tab,
3. in the `Company permissions` field, select one of the following options:
   - **All** - the user has access to all companies,
   - **Selected only** - the user has access only to the selected companies,
4. if you select **Selected only**, add the appropriate companies to the list,
5. save the changes.

:::note
If you select **Selected only**, the user will have access only to the companies added in this section.
:::

## 3. Create a User Group

Go to the **User Groups** section and add a new group.

To create a user group:

1. go to the **User Groups** section and add a new group,
2. complete `Name`, `Role`, and `Description`,
3. save the changes.

It is recommended to create groups based on roles or teams used in the organization, for example:

- accounting,
- sales,
- secretariat,
- management.

## 4. Assign Users to a Group

After creating the group, assign the appropriate users to it.

1. open the group,
2. select a user,
3. add the user to the group,
4. save the changes.

Groups can later be used in:

- permissions,
- authorization schemas,
- authorization processes.

:::note
If the configuration allows you to use a group instead of a specific user, use groups. Replacing a person then requires only changing the group membership, without modifying the permission or workflow configuration.
:::

## 5. Verification

After completing the configuration, verify that:

- the user is visible in the **Users** list,
- the user has access to the correct companies,
- the user is assigned to the appropriate groups,
- the user can log in to the SPUMA web application correctly,
- after logging in, the user has access to the correct company.