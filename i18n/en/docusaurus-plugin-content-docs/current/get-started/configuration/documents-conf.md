---
sidebar_position: 6
sidebar_label: Document Workflow Configuration
---

# Document Workflow Configuration

Document workflow configuration defines how documents are organized, described, and approved in SPUMA.

Depending on the deployment, the configuration may include:

- directories,
- document classes,
- attributes,
- authorization schemas,
- authorization processes,
- algorithms,
- triggers.

The configuration should be completed before assigning the final permissions, because permissions can also be defined for classes and authorization schemas or processes.

## 1. Define Directories

First, create the directories that will be used to organize documents in the SPUMA web application.

Go to the **Directories** section and add the required directories.

The created directories can later be assigned to document classes.

A detailed configuration description is available in the [**SPUMA Admin → Directories**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Katalogi.md) documentation.

## 2. Create Document Classes

Go to the **Classes** section and add a new document class.

In the **General** tab, complete the basic class data required for the document type.

After entering the data, save the class.

A detailed configuration description is available in the [**SPUMA Admin → Classes**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Klasy/lista-klas.md) documentation.

## 3. Configure Authorization Schemas and Processes

If the document requires approval, configure the appropriate authorization workflow.

Depending on the requirements, use:

- **Authorization Schema** — for a defined approval path,
- **Authorization Process** — when the workflow requires conditions, branches, or additional logic.

When configuring recipients, it is recommended to use **user groups** instead of individual users.

This allows you to change the users participating in the workflow by adding or removing users from a group without modifying the process configuration.

A detailed configuration description is available in the documentation for the relevant **SPUMA Admin** sections.

## 4. Assign a Schema or Process to a Class

Create the required authorization processes and schemas.

Detailed information and configuration examples are available in **SPUMA Admin → Authorizations →** [**Schemas**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Autoryzacje/Schematy/schematy.md) / [**Processes**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Autoryzacje/Procesy/procesy.md).

After creating the schemas and processes, assign the selected elements to the appropriate document classes.

1. open the class,
2. go to the **Authorizations** section,
3. select the required schema or process,
4. assign it to the class,
5. save the changes.

For a given class, you can additionally:

- select the default schema,
- allow users to create their own schemas from the document,
- make the schema required.

## 5. Configure Algorithms

If document handling requires additional logic, configure the appropriate **Algorithms**.

Algorithms can be used, among other things, for:

- operations on document data,
- handling document lines,
- executing scripts,
- displaying messages,
- calling external DLL libraries.

Configure algorithms only when they are required by the process.

A detailed configuration description is available in the [**Algorithms**](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Automatyzacja/Algorytmy/) documentation.

## 6. Configure Triggers

If specific operations should be executed in response to document events, configure **Triggers**.

Triggers can also be used to add custom buttons to the SPUMA web application.

To add a button:

1. create a new **Trigger**,
2. enter its name,
3. complete `Label` — the value displayed on the button in the web application,
4. save the trigger,
5. open the appropriate algorithm,
6. in the conditions, restrict algorithm execution to the trigger with the created name,
7. save the changes.

After reloading the SPUMA web application, the button will be available according to the trigger configuration and algorithm conditions.

## 7. Assign the Class to a Company

After completing the class configuration, assign it to the appropriate company.

1. open the **Companies** section,
2. select the appropriate company,
3. go to the **Classes** tab,
4. select the configured class,
5. click `+`,
6. save the changes.

After reloading the SPUMA web application, the class will be available for the selected company.

:::note
A class that is not assigned to a company will not be visible in the SPUMA web application for that company.
:::

## 8. Verification

After completing the configuration, verify that:

- the directories are available according to the configuration,
- the class is assigned to the correct company,
- the required attributes are visible in the SPUMA web application,
- a document can be created or registered in the selected class,
- the correct authorization schema or process is available,
- the document passes through the configured stages,
- the correct users or groups receive the document for authorization,
- the configured algorithms and triggers execute correctly.

