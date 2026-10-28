---
sidebar_position: 7
sidebar_label: Permissions
---

# Assigning Permissions

After creating companies, users, groups, and configuring document workflows, assign the permissions required to work in the system.

In SPUMA, permissions are configured independently in three areas:

- document permissions,
- user access to companies,
- permissions to lists:
  - correspondence logs,
  - reports.

It is recommended to assign permissions primarily to user groups. This simplifies later configuration maintenance and reduces the need to modify multiple entries when users change.

## 1. Assign User Access to Companies

Company access is configured directly on the user.

1. open the **Users** section,
2. select the user,
3. go to the **Permissions** tab,
4. in the `Company permissions` field, select:
   - **All** — the user has access to all companies,
   - **Selected only** — the user has access only to the selected companies,
5. if you select **Selected only**, add the appropriate companies,
6. save the changes.

Company access is independent of document permissions.

## 2. Configure Document Permissions

Document permissions are defined at several levels:

**Company → Class → Schema / Process**

Permissions defined at the next level override the corresponding permissions from the previous level.

For example:

- at the company level, you can grant access to all documents,
- at the class level, you can restrict access to documents of a specific type,
- at the schema or process level, you can additionally change permissions for users participating in a specific workflow.

## 3. Set Permissions at the Company Level

Go to:

**Companies → selected company → Permissions**

Add the required permission entries for users or groups.

Depending on the configuration, specify:

- `Type`,
- `Status`,
- `Schema`,
- `Field`,
- `Object`,
- `Edit`.

At this level, define the basic permissions that should apply to the company documents.

A detailed description of the available permission types is available in the **SPUMA Admin → Permissions** documentation.

## 4. Set Permissions at the Class Level

If a given class requires different permissions than those configured for the entire company:

1. open the **Classes** section,
2. select the appropriate class,
3. go to the **Permissions** section,
4. add the required entries for users or groups,
5. save the changes.

Permissions configured at the class level override the corresponding permissions defined at the company level.

## 5. Set Permissions for a Schema or Process

If permissions should depend on a specific document workflow, configure them at the authorization schema or process level.

Add the required permissions for:

- users,
- user groups,
- appropriate process or schema stages.

Permissions from this level override the corresponding settings from the class and company levels.

## 6. Permission Order

The order of entries in the permissions list is significant.

Permissions are evaluated from top to bottom. An entry located lower in the list can override an earlier entry.

If required, change the order of entries using the buttons available in the list.

Example:

1. at the class level, the **Accounting** group has no access,
2. lower in the list, a user who belongs to this group has **View** permission,
3. the user entry is applied later and overrides the earlier group restriction.

:::note
When configuring permissions, take into account both the level:

**Company → Class → Schema / Process**

and the order of entries within a given level.
:::

## 7. Configure Correspondence logs Permissions

If users should have access to correspondence logs:

1. open the appropriate **Correspondence logs**,
2. go to the permissions configuration,
3. add the required users or groups,
4. set the appropriate permission type,
5. save the changes.

Correspondence logs permissions are configured independently of document permissions.

## 8. Configure Report Permissions

If users should have access to reports:

1. open the appropriate **Report**,
2. go to the permissions configuration,
3. add the required users or groups,
4. set the required access level,
5. save the changes.

Report permissions are configured independently of document and correspondence logs permissions.

## 9. Verification

After completing the configuration, log in to the SPUMA web application as a user for whom the permissions were assigned.

Verify that:

- the user has access to the correct company,
- the user can see the appropriate document classes,
- the user can open the required documents,
- the user can perform only the allowed operations,
- restrictions configured at the class level work correctly,
- permissions depending on the schema or process work according to the configuration,
- the user has access only to the required correspondence logs and reports.

If the result does not match the configuration, check the order of entries and the permissions configured at all levels.