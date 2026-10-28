---
sidebar_position: 4
sidebar_label: Company Configuration
---

# Company Configuration

A company in SPUMA defines the environment in which users work with documents, classes, and system dictionaries.

After configuring the basic **SPUMA DataService** parameters, create a company and complete the settings required for the deployment.

Configure the company in the **SPUMA Admin** application in the **Companies** section.

## 1. Create a Company

Go to the **Companies** section and add a new company.

In the **General** tab, complete:

- `Name` — company name displayed in SPUMA,
- `Database` — name of the SAP Business One database associated with the company.

The `Name` and `Database` fields are required.

After entering the data, save the company.

Complete the remaining fields in the **General** tab only if they are used in the deployment.

## 2. Configure Company Settings

Open the created company and review the available configuration sections.

Depending on the deployment, the configuration may include:

- **General**,
- **Classes**,
- **Dictionaries**,
- **SAP Integration**,
- **BP Configuration**.

Not all elements have to be used in every environment.

## 3. Assign Classes

After creating classes, assign them to the company. Classes that are not assigned to the company will not be visible in the SPUMA web application.

After adding new classes:

1. open the **Companies** section,
2. select the appropriate company,
3. go to the **Classes** tab,
4. select the class you want to assign to the company,
5. click `+`,
6. save the changes.

After reloading the SPUMA web application, the assigned classes will be available for the selected company.

:::note
If the required classes have not yet been created, configure them during the **Document Workflow Configuration** stage and then assign them to the company.
:::

## 4. Configure System Dictionaries

If the company uses system dictionaries:

1. open the **Companies** section,
2. select the appropriate company,
3. go to the **Dictionaries** tab,
4. click `+` to add a new dictionary,
5. complete the `Name` field,
6. complete the remaining fields if required,
7. save the changes,
8. check the identifier of the created dictionary in the `COMPANIESDICTS` table, for example:

~~~sql
SELECT *
FROM COMPANIESDICTS
~~~

9. read the `id` of the created dictionary,
10. open the `APR_DICTIONARYVALUES` procedure,
11. add dictionary handling for the retrieved `id`,
12. define the query that returns the dictionary values,
13. save the changes to the procedure.

A detailed description of the procedure is available in the documentation:

[**APR_DICTIONARYVALUES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Procedures/procedures-descr.md#procedura-apr_dictionaryvalues)

:::note
A system dictionary is configured correctly when:

- it has been added to the company in the **Dictionaries** tab,
- its handling has been defined in the `APR_DICTIONARYVALUES` procedure.
:::

## 5. Configure Company Integrations

If the company uses integration with an external system, complete the appropriate company settings.

This applies in particular to:

- **SAP Integration**,
- **BP Configuration**.

Configure detailed connections to external systems according to the relevant [integration documentation](/i18n/en/docusaurus-plugin-content-docs/current/get-started/configuration/integrations-conf.md).

## 6. Verification

After saving the configuration, verify that:

- the company is visible in the **Companies** list,
- the saved company data is correct,
- the required classes are assigned to the company,
- the required system dictionaries are configured,
- the integration settings match the target environment,
- you can log in to the SPUMA web application correctly,
- after logging in, you have access to the configured company.

After the company has been configured correctly, proceed to defining **Users and Groups**.