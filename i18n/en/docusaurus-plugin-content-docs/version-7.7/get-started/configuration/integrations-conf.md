---
sidebar_position: 8
sidebar_label: Integrations
---

# External System Integration Configuration

After completing the basic system configuration, configure the integrations used in the target environment.

Depending on the deployment, these may include:

- SAP Business One,
- KSeF,
- OCR,
- email.

Configure each integration only if it is used in the target environment.

## 1. SAP Business One Integration

If SPUMA is to work with SAP Business One, configure the connection for the appropriate company and prepare the document classes and users that will use the integration.

### 1.1. Verify the SAP Business One Database

First, check the SAP Business One database assigned to the company.

1. go to the **Companies** section,
2. select the appropriate company,
3. go to the **General** tab,
4. check the `Database` field,
5. make sure it points to the correct SAP Business One database,
6. if necessary, correct the value and save the changes.

### 1.2. Configure the SAP Integration Tab

After verifying the database, go to the **SAP Integration** tab.

1. open the **Companies** section,
2. select the appropriate company,
3. go to the **SAP Integration** tab,
4. complete the required fields:
   - `SL Address`
   - `User`
   - `Password`

   and any remaining fields as required, according to the documentation:

   [**SPUMA Admin → Companies → SAP Integration**](/i18n/en/docusaurus-plugin-content-docs/version-7.7/spuma-admin/Firmy/integracja-sap.md),

5. save the changes.

### 1.3. Configure the Class for Posting to SAP

If documents of a given class are to be posted to SAP Business One:

1. go to the **Classes** section,
2. select the appropriate class,
3. go to the **General** tab,
4. set the `Always as draft in SAP` option according to the process requirements,
5. save the changes,
6. assign the **Create SAP Document** permission to the appropriate users or groups.

The **Create SAP Document** permission allows a SAP document to be created based on a SPUMA document.

### 1.4. Configure the SPUMA4SBO Add-on Connection

If users are to use the integration from the **SPUMA4SBO** add-on in SAP Business One, configure the login settings separately for each user.

For each user:

1. open the user in **SPUMA Admin**,
2. go to the **General** tab,
3. generate the token required to connect from the **SPUMA4SBO** add-on,
4. complete the token settings (`Expires`, `Session mode`),
5. save the changes,
6. configure the **SPUMA4SBO** add-on to connect to SPUMA using the generated token.

:::note
The token and connection settings must be configured separately for each user who uses the **SPUMA4SBO** add-on.
:::

### 1.5. Verification

After completing the configuration, verify that:

- users have access to SAP-related functionality, e.g. retrieving Business Partner master data from SAP on an AP invoice,
- users have access to the **Add to SAP** function,
- after using the **Add to SAP** function, the document is created correctly in SAP Business One.

## 2. KSeF Integration

If SPUMA is to use KSeF, configure the basic service addresses, company data, and user profiles.

### 2.1. Configure General Settings

Go to:

**Configuration → General**

Complete the following fields:

- `KSeF API` — KSeF service address,
- `KSeF Render API` — address of the service that generates a PDF preview of the KSeF document from XML.

Complete the `KSeF Render API` field if a separate server or service is used in the environment to generate document visualizations, e.g. `ALTKSEF_PDF` (information about the solution is available at [**sapekspert.pl**](https://sapekspert.pl/do-pobrania/) **→ Downloads → KSeF**).

If the field is left empty, visualizations will be generated using the standard solution.

After entering the values, save the changes.

### 2.2. Configure KSeF Data for the Company

For a company using KSeF, complete the data required for the integration.

1. open the **Companies** section,
2. select the appropriate company,
3. go to the **General** tab,
4. complete the `VAT ID` used for the company,
5. complete `Currency` — the default document currency,
6. in the `KSeF. Certificate thumbprint` field, enter the thumbprint of the certificate assigned to the company,
7. save the changes.

:::note
The certificate specified in the `KSeF. Certificate thumbprint` field must first be correctly installed in the **Trusted People** store.
:::

### 2.3. Create an eDok Profile for the User

Create an eDok profile for each user who will use KSeF.

1. open the user in **SPUMA Admin**,
2. go to the **E-document Exchange** tab,
3. add a new profile,
4. complete `Name` — the profile name displayed to the user,
5. select the appropriate `Company`,
6. set `Type` to **KSeF**,
7. save the changes.

:::note
A separate profile must be created for each user who will use the KSeF integration.
:::

### 2.4. Verification

After completing the configuration, verify that:

- after logging in to the SPUMA web application, the user has access to the **KSeF** tab,
- the user can see the correct eDok profile,
- invoices are downloaded correctly from KSeF,
- downloaded documents are assigned to the correct company,
- document data is read correctly,
- the document preview is generated correctly,
- no certificate or authentication errors occur during communication with KSeF.

## 3. OCR Integration

SPUMA can use external mechanisms for automatic document recognition.

Depending on the configuration, you can use:

- OCR systems,
- GPT.

Multiple recognition profiles can be created in SPUMA for different document types or processing methods.

### 3.1. Configure GPT

If a recognition profile is to use GPT:

1. go to **Configuration → General**,
2. complete the `GPT ApiKey` field,
3. save the changes.

The `GPT ApiKey` field contains the API key used to communicate with the GPT service.

### 3.2. Configure OCR

If a recognition profile is to use OCR:

1. go to **Configuration → OCR**,
2. complete:
   - `SOS address` — OCR service address,
   - `SOS port` — OCR service port,
   - `OCR region level` — level of detail for recognized regions,
   - `Max. time in OCRservice (min)` — maximum document processing time in the OCR service,
3. save the changes.

Adjust the settings to the environment in which the OCR service is running.

### 3.3. Create OCR Profiles

After configuring the OCR or GPT connection, create the required OCR profiles.

Multiple profiles can be created in SPUMA depending on the document type and recognition method.

For each profile:

1. go to the **OCR Profiles** section,
2. click **New**,
3. complete `Name`,
4. optionally complete `Description`,
5. select `Type`:
   - **OCR Service**,
   - **Chat GPT**,
6. for a **Chat GPT** profile, also complete:
   - `GPT Model`,
   - `Prompt`,
7. save the profile.

### 3.4. Set the Default OCR Profile for a Company

If the company should use a default OCR profile, assign it in the company configuration.

1. go to the **Companies** section,
2. select the appropriate company,
3. go to the **BP Configuration** tab,
4. select the appropriate profile in the `OCR Profile` field,
5. save the changes.

Set the default OCR profile only if it is required in the target environment.

### 3.5. Verification

After completing the configuration:

1. add a sample document to SPUMA,
2. start recognition,
3. verify that the correct OCR profile was used,
4. verify that the document was processed correctly,
5. verify that the recognized values were assigned to the correct document fields.

## 4. Email Integration

Email integration can be used to:

- download email messages to SPUMA,
- send messages and notifications from SPUMA.

Before configuring message sending or retrieval, configure the shared Microsoft 365 settings.

### 4.1. Configure Microsoft 365

If different mailboxes are used for sending and receiving messages, all mailboxes must be configured within the same Microsoft 365 application.

Then go to:

**Configuration → Modules → DATASERVICE**

Complete:

- `O365_APPID`
- `O365_TENANTID`
- `O365_SECRET`

Use the values from the Microsoft 365 application in which the mailboxes used by SPUMA have been configured.

After entering the data, save the changes.

### 4.2. Configure Message Retrieval

Message retrieval is configured for a specific user who is to receive messages from the selected mailbox.

For that user:

1. open the user in **SPUMA Admin**,
2. go to the **E-Mail** tab,
3. complete `Host` — IMAP server address,
4. complete `IMAP Port`,
5. complete `IMAP UserID`,
6. select `IMAP SSL` if the connection should use SSL,
7. in the `Folder (,)` field, enter the mailbox folder or folders from which messages should be retrieved,
8. save the changes.

:::note
For Microsoft 365, password-based login is not used, so the `IMAP Password` field should not be completed.
:::

### 4.3. Configure Notification Sending

The message sending configuration is responsible for email notifications sent by SPUMA to users.

First, go to:

**Configuration → General**

Complete:

1. `SMTP address` — SMTP server address,
2. `SMTP port` — SMTP server port,
3. `SMTP user` — user used to send messages,
4. `SMTP password` — SMTP user password, if required,
5. save the changes.

Then, for each user who should receive or send notifications related to actions performed in SPUMA:

1. open the user in **SPUMA Admin**,
2. go to the **EMail** tab,
3. complete the `Reply to` field,
4. save the changes.

The address entered in `Reply to` is used:

- as the address to which the user receives notifications,
- as the address representing the user when notifications related to their actions in SPUMA are sent.

### 4.4. Configure User Notifications

For each user, you can define which email notifications they should receive.

Configure these settings in the user's **E-Mail** tab.

Available notifications include:

- **Authorization Required**,
- **Document Approved**,
- **Rejected**,
- **Approved by All**,
- **Authorization Report**.

The user can also change the scope of received notifications in their settings in the SPUMA web application.

:::note
Notification configuration in **SPUMA Admin** defines the user's initial settings. The user can later adjust them independently in the SPUMA web application.
:::

### 4.5. Verification

After completing the configuration, verify that:

- SPUMA connects correctly to Microsoft 365,
- messages are retrieved from the configured mailbox,
- messages are retrieved from the correct folder,
- users receive the selected notifications,
- outgoing messages are sent using the correct configuration,
- no connection or authentication errors occur when retrieving or sending messages.