---
sidebar_position: 6
---

# Detailed Table Description

## ALERTEXCLUSION Table

**Description:** User alert result exclusions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| type | int |  | Alert type |  |
| user_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user affected by the exclusion |  |
| key | nvarchar(256) |  | Key identifying the alert or result group |  |
| objid | varchar(128) | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | ID of the document excluded from alert results |  |
| CreatedAt | datetime |  | Entry creation date |  |

## ALLOWEDOCUMENTS Table

**Description:** User permissions to documents.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document number |  |
| marktorebuild | bit |  | Whether to rebuild the permission | 0 - No, 1 - Yes |
| users_ids | varchar(MAX) | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User IDs separated by commas |  |

## ALLOWEDUSERS Table

**Description:** User permissions to documents (currently unused).

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document number |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |

## APB_DEBUG Table

**Description:** Technical table used to diagnose `APR_TRANSACTION` events.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry number |  |
| optype | varchar(2) |  | Type of operation being performed |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user performing the operation |  |
| objecttype | varchar(128) |  | Name of the object affected by the operation |  |
| objectid | int |  | ID of the object affected by the operation |  |

## ATTRIBDICTS Table

**Description:** Stores relationships between attributes and company system dictionaries.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| classattribs_id | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | Attribute ID |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| companiesdicts_id | int | [COMPANIESDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companiesdicts-table) **id** | Company system dictionary ID |  |

## AUTHSCHEMA_INSPARAMETERS Table

**Description:** Authorization process - instruction parameters, i.e. process stage parameters.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization process ID |  |
| insintid | int | [AUTHSCHEMA_INSTRUCTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) **intid** | ID of the stage within the schema |  |
| intid | int |  | Parameter sequence number within the process stage |  |
| name | varchar(100) |  | Input parameter name |  |
| description | ntext |  | Input parameter description |  |
| type | int |  | Parameter type | 0 - Text, 1 - Int, 2 - Float, 3 - User Dictionary, 4 - User Selection, 5 - Schema, 6 - Schema Selection |
| allownull | bit |  | Allow null (empty value) | 0 - No, 1 - Yes |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Variable ID within the authorization process |  |
| objtype | int |  | Object type (parameter) | 0 - All, 1 - Defined Group, 2 - Custom Group |
| objid | int | [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id** | Related object ID |  |

## AUTHSCHEMA_INSTRUCTIONS Table

**Description:** Authorization process - instructions, i.e. process stages.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization process ID |  |
| intid | int |  | Instruction sequence number within the authorization process |  |
| name | nvarchar(100) |  | Instruction name |  |
| description | ntext |  | Instruction description |  |
| type | int |  | Instruction type | 0 - Basic Authorization, 1 - Authorization with Parameters |
| objid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id**, [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id**, [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Related object ID |  |
| objtype | int |  | Object type | 0 - Defined User, 1 - Defined Schema, 2 - User, 3 - Custom Schema, 4 - Schema |
| addinfo | nvarchar(MAX) |  | Additional information |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Variable ID within the authorization process |  |
| autosave | bit |  | Auto save |  |
| urgent | bit |  | Urgent | 0 - No, 1 - Yes |

## AUTHSCHEMA_PARVALUES Table

**Description:** Authorization process - values for the **Schema Selection** parameter type.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization process ID |  |
| insintid | int | [AUTHSCHEMA_INSTRUCTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) **intid** | Stage ID within the authorization process |  |
| prmintid | int | [AUTHSCHEMA_INSPARAMETERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_insparameters-table) **insintid** | Parameter number ID for the stage |  |
| value | nvarchar(255) | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Schema ID included in the parameter |  |
| description | nvarchar(512) |  | Schema name |  |

## AUTHSCHEMA_PERMISSIONS Table

**Description:** Authorization process - special permissions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization schema or process ID |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID (unused) |  |
| attribs_id | int | [ATTRIBDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#attribdicts-table) **id** | Field - class attribute / system field ID | -1 Name, -2 Description, -3 Number, -4 Class, -5 Approval Schema, -6 Document Date, -7 Entry Date, `> 0` Class attributes |
| allow | bit |  | Edit | 0 - Block, 1 - Allow |
| objid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id**, [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id**, [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Related object ID |  |
| objtype | int |  | Object type | 0 - User, 1 - User Group, 2 - Authorization Schema, 3 - Authorization stage number |
| authmode | int |  | Permissions for | 0 - Header, 1 - Lines |
| authseq | int |  | Unused |  |
| proptype | int |  | Permission type | 0 - Main, 1 - Transferability, 7 - Edit other users' lines, 10 - Modify resources |
| order | int |  | Permission order |  |

## AUTHSCHEMA_RECIPIENTS Table

**Description:** Authorization schema - recipients.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization schema ID |  |
| objid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id**, [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id**, [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Recipient - related object ID |  |
| objtype | int |  | Recipient type | 0 - User, 1 - User Group, 2 - Authorization Schema |
| order | int |  | Order |  |
| id | int |  | Sequence number |  |
| marktodel | bit |  | Technical field used in transactions |  |
| addinfo | nvarchar(MAX) |  | Additional information |  |

## AUTHSCHEMAS Table

**Description:** Authorization - authorization schemas and processes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| name | nvarchar(100) |  | Schema name |  |
| description | ntext |  | Schema description |  |
| authmethodtype | int |  | Schema type | 0 - All of, 1 - One of, 2 - (N) of, 3 - Authorization Process |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Update date |  |
| authusrlimit | int |  | Recipient limit for schema type 2 |  |
| headereditmode | int |  | Document header edit permission | 0 - Blocked, 1 - Unblocked |
| lineseditmode | int |  | Document line edit permission | 0 - Blocked, 1 - Unblocked |
| headereditmode1 | int |  | Document header1 edit permission | 0 - Blocked, 1 - Unblocked |
| lineseditmode1 | int |  | Document line1 edit permission | 0 - Blocked, 1 - Unblocked |
| headereditmode2 | int |  | Document header2 edit permission | 0 - Blocked, 1 - Unblocked |
| lineseditmode2 | int |  | Document line2 edit permission | 0 - Blocked, 1 - Unblocked |
| addinfo | nvarchar(MAX) |  | Additional information |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
| usergroup_id | int | [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id** | User Group ID for schemas created automatically from a group |  |

## BPCONFIGS Table

**Description:** Companies - BP Configuration - BP-specific Profile.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| order | int |  | Order |  |
| match | int |  | Matching | 0 - BP Code, 1 - Characteristic |
| value | nvarchar(100) |  | Code/Value |  |
| ocrprofiles_id | int |  | OCR Profile |  |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Class ID |  |
| cptolns_groupby | int |  | Line Grouping | 0 - None, 1 - All into one |
| gpt_model | varchar(128) |  | GPT Model |  |
| gpt_prompt | nvarchar(1024) |  | GPT Prompt |  |
| itmcoderx | nvarchar(128) |  | SAP Item Filter |  |
| qrygrprx | nvarchar(128) |  | SAP Characteristics Filter |  |
| ksef_autosend | bit |  | Automatic Add from KSeF | 0 - No, 1 - Yes |
| ksef_authschema_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization Schema |  |
| ksef_user_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | Owner |  |
| updatedat | datetime |  | Update date |  |
| createdat | datetime |  | Creation date |  |
| classtype | int |  | Matching | 0 - General, 1 - Correction Invoice, 2 - Purchase Advance Invoice |

## CHATENTRIES Table

**Description:** Chats - messages stored in a chat.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| chats_id | int | [CHATS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#chats-table) **id** | Chat ID |  |
| int_id | int |  | Unique message number within the chat |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| content | nvarchar(MAX) |  | Message content |  |
| CreatedAt | datetime |  | Creation date |  |

## CHATS Table

**Description:** Chats - chat definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique chat number |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Update date |  |

## CHATUSERS Table

**Description:** Chats - users assigned to a chat.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| chats_id | int | [CHATS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#chats-table) **id** | Chat ID |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| user_role | int |  | User role | 0 - Chat participant, 1 - Founder / chat participant |
| read_int_id | int | [CHATENTRIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#chatentries-table) **int_id** | ID of the last read message |  |

## CLASS_SCHEMAS Table

**Description:** Classes - available authorization schemas / processes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Class ID |  |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Authorization Schema / Process ID |  |

## CLASS_SYSATTRIBSCFG Table

**Description:** System attribute visibility configuration. An entry in this table means that visibility of the selected system attribute has been disabled for the class.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Attribute ID |  |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Class ID |  |
| description | ntext |  | Description |  |
| label | nvarchar(MAX) |  | Label |  |
| visorder | int |  | Order |  |
| defwidth | int |  | Width |  |
| erpfcode | varchar(100) |  | ERP field |  |
| dictlisttype | int |  | List view | 0 - Auto, 1 - Drop-down list, 2 - Interactive list |

## CLASS_TRIGGERS Table

**Description:** Classes - triggers.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Class ID |  |
| name | varchar(100) |  | Trigger name |  |
| description | ntext |  | Description |  |
| label | nvarchar(MAX) |  | Label displayed on the form |  |
| order | int |  | Order |  |
| classattribs_id | int | [ATTRIBDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#attribdicts-table) **id** | ID of the linked attribute | -2 - Header, -1 - Lines |
| linktoctrl | bit |  | Link | 1 - Yes, 0 - No |

## CLASSATTRIBS Table

**Description:** Class - attributes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| name | varchar(100) |  | Attribute name |  |
| description | ntext |  | Attribute description |  |
| regex | ntext |  | Format |  |
| datatype | int |  | Data type | 0 - Int, 1 - Float, 2 - Text, 3 - Date/Time, 4 - Business Partner, 5 - System Dictionary, 6 - User Dictionary, 7 - Interactive Dictionary, 8 - Static Dictionary, 9 - Long Text |
| marktodel | bit |  | Technical field used in transactions |  |
| extensions_id | int |  | Related extension (unused) |  |
| order | int |  | Order |  |
| mandatory | int |  | Required | 1 - Yes, 0 - No |
| schemafcode | varchar(100) |  | OCR field |  |
| erpfcode | varchar(100) |  | ERP field |  |
| iscolumn | bit |  | Header or line field | 0 - Header, 1 - Line |
| evalctx | varchar(1024) |  | Algorithm |  |
| allowcustomval | bit |  | Any values | 0 - No, 1 - Yes |
| interactivedicts_id | int | [INTERACTIVEDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#interactivedicts-table) **id** | Interactive Dictionary ID |  |
| label | nvarchar(MAX) |  | Label |  |
| visorder | int |  | Display order on the form |  |
| defwidth | int |  | Width (line attributes) |  |
| adder | bit |  |  |  |
| objtype | int |  | Object type | 0 - Document Class, 1 - Correspondence Log, 2 - Report |
| objid | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id**, [DAILYCORRCLASS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrclass-table) **id**, [INTERACTIVEDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#interactivedicts-table) **id** | Related object ID |  |
| cmp_classattribs_id | int |  | Comparison field - attribute ID |  |
| allowgroup | bit |  | Grouping (unused) |  |
| dictlisttype | int |  | List view | 0 - Auto, 1 - Drop-down list, 2 - Interactive list |

## CLASSES Table

**Description:** Classes - document class definition (General, Authorizations).

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| name | nvarchar(100) |  | Class name (General) |  |
| description | ntext |  | Class description (General) |  |
| regex | ntext |  | Matching (General) |  |
| allowcustomschema | bit |  | Custom schema (Authorizations) | 1 - Yes, 0 - No |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Update date |  |
| nameformat | nvarchar(255) |  | Name format (General) |  |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Default schema (Authorizations) |  |
| prmcpmthtype | int |  | Copy permissions (General) | 0 - Never, 1 - Always, 2 - Ask |
| authmandatory | bit |  | Schema required (Authorizations) | 1 - Yes, 0 - No |
| visibility | int |  | Visibility | 0 - Visible, 1 - Hidden |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Base class ID |  |
| issys | bit |  | System class | 1 - Yes, 0 - No |
| uniqname | bit |  | Name uniqueness control (General) | 1 - Yes, 0 - No |
| checkformat | int |  | Name format control | 0 - Do not check, 1 - Allow editing, 2 - Automatically |
| numrrequired | bit |  | Number required (General) | 1 - Yes, 0 - No |
| uniqnum | bit |  | Number uniqueness control (General) | 1 - Yes, 0 - No |
| color | int |  | Color (General) |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
| autoaddrow | bit |  | Automatically add lines (unused) |  |
| att_classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Attachment class (General) |  |
| attsendtocr | bit |  | Attachment to company directory (General) | 1 - Yes, 0 - No |
| newdocpath | varchar(1024) |  | Default path (General) |  |
| classtype | int |  | Class type (General) | 0 - Other, 1 - Invoice, 2 - Correction |
| forcedraft | bit |  | Always as draft in SAP (General) | 1 - Yes, 0 - No |

## COLUMNSFORMATS Table

**Description:** Column settings - column format for reports and Correspondence Logs.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| objtype | int |  | Object type | 1 - Report, 0 - Correspondence Log |
| objid | int | [INTERACTIVEDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#interactivedicts-table) **id**, [DAILYCORRCLASS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrclass-table) **id** | Related object reference |  |
| column | varchar(100) |  | Column name |  |
| label | varchar(254) |  | Column label |  |
| sortable | bit |  | Sorting | 0 - No, 1 - Yes |
| target | int |  | Link type | 0 - None, 1 - Subreport, 2 - Document, 3 - Correspondence Log entry, 4 - Access entry |
| classes_id | int | [INTERACTIVEDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#interactivedicts-table) **id**, [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id**, [DAILYCORRESPONDENCE](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrespondence-table) **id**, [DOCUMENTACCESS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentaccess-table) **id** | Link class (object according to type) |  |
| marktodel | bit |  | Technical field used in transactions |  |
| width | int |  | Width |  |
| group | int |  | Grouping | 0 - None, `> 0` Grouping order |
| groupasc | bit |  | Grouping | 0 - None, `> 0` Grouping order |
| decscale | int |  | Scale | -1 - Auto, `> 0` Number of decimal places |
| alignright | bit |  | Align right |  |
| sumable | bit |  | Aggregator | 0 - No, 1 - Yes |
| type | int |  | Type | 0 - Report, 1 - Printout |

## COLUMNSMAPPING Table

**Description:** Column settings - parameter mapping for subreports.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| columnsformats_id | int | [COLUMNSFORMATS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#columnsformats-table) **id** | Reference to column format settings |  |
| from | varchar(100) |  | Source parameter |  |
| to | varchar(100) |  | Target parameter |  |

## COMMENTENTRIES Table

**Description:** Document - comments (entries and content).

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique comment number |  |
| pagecomments_id | int | [PAGECOMMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#pagecomments-table) **id** | ID of the comment assigned to the page |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user creating the entry |  |
| entrynum | int |  | Entry sequence number (comment reply) |  |
| content | ntext |  | Comment content |  |
| createdat | datetime |  | Creation date |  |
| marktodel | bit |  | Technical field used in transactions |  |

## COMPANIES Table

**Description:** Companies - basic definition (General, SAP Integration, BP Configuration).

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| dbname | varchar(128) |  | Database - SAP database name (SQL) (General) |  |
| company | nvarchar(1000) |  | Company name (General) |  |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Last update date |  |
| directories_id | int |  | Default directory (General) |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
| taxid | varchar(32) |  | Company Tax ID for KSeF (General) |  |
| sl_url | nvarchar(256) |  | SL Address (SAP Integration) |  |
| sl_user | nvarchar(128) |  | User (SAP Integration) |  |
| sl_pass | nvarchar(128) |  | Password (SAP Integration) |  |
| sl_ncode_qry | nvarchar(MAX) |  | New BP code generation (SAP Integration) |  |
| dummy_rindex | nvarchar(128) |  | Default item (SAP Integration) |  |
| rbplid | int |  | Branch ID (SAP Integration) |  |
| def_currency | nvarchar(MAX) |  | Currency (General) |  |
| def_ocrprofiles_id | int | [OCRPROFILES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrprofiles-table) **id** | OCR Profile (BP Configuration) | 0 - Automatic, `> 0` OCR Profile ID |
| def_classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Class (BP Configuration) | 0 - Automatic, `> 0` Class ID |
| def_gpt_model | varchar(128) |  | GPT Model (BP Configuration) |  |
| def_gpt_prompt | nvarchar(1024) |  | GPT Prompt (BP Configuration) |  |
| def_itmcoderx | nvarchar(128) |  | SAP Item Filter (BP Configuration) |  |
| def_qrygrprx | nvarchar(128) |  | SAP Characteristics Filter (BP Configuration) |  |
| saledatefield | varchar(128) |  | Sales date field (SAP Integration) |  |
| edocnumfield | varchar(128) |  | E-document number field (SAP Integration) |  |
| ksef_thumbprint | varchar(128) |  | KSeF. Certificate Thumbprint (General) |  |

## COMPANIESDICTS Table

**Description:** Companies - system dictionaries.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| name | nvarchar(100) |  | Dictionary name |  |
| description | ntext |  | Dictionary description |  |
| regex | nvarchar(1024) |  | Pattern |  |
| marktodel | bit |  | Technical field used in transactions |  |
| displtips | bit |  | As hint | 1 - Yes, 0 - No |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |

## COMPANY_CLASSES Table

**Description:** Companies - classes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Class ID |  |

## CONFIGURATION Table

**Description:** SPUMA configuration.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| profile | varchar(100) |  | Profile name |  |
| active | bit |  | Active | 1 - Yes, 2 - No |
| DefSMTPAddress | varchar(100) |  | SMTP address (General) |  |
| DefSMTPPort | int |  | SMTP port (General) |  |
| DefSMTPUser | varchar(100) |  | SMTP user (General) |  |
| DefSMTPPassword | nvarchar(100) |  | SMTP password (General) |  |
| SessionsFile | varchar(1024) |  | Session file (General) |  |
| CentralService | varchar(1024) |  | SOS address (OCR) |  |
| ClientID | nvarchar(100) |  | Client ID (General) |  |
| ServicePort | int |  | SOS port (OCR) |  |
| defsighours | int |  | Signature validity [H] (Security) |  |
| jsfunct | ntext |  | JS Functions |  |
| checkrefdelay | int |  | Interval [S] (Automation) |  |
| remoteaddress | nvarchar(MAX) |  | Remote address (General) |  |
| ksef_apiurl | varchar(128) |  | KSeF API (General) |  |
| gpt_apikey | varchar(2048) |  | GPT ApiKey (General) |  |
| ocreglevel | int |  | OCR region level (OCR) |  |
| printfooter | nvarchar(128) |  | Print footer (General) |  |
| docacc_usergroups_id | int | [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id** | Supervisors (General) |  |
| inocrtout | int |  | Max. time in OCR service (min) (OCR) |  |
| authrpt_crontab | varchar(1024) |  | Pending report schedule (General) |  |
| ksef_renderapiurl | varchar(128) |  | KSeF Render API (General) |  |
| doclist_psize | int |  | Rows on document list (General) |  |
| passp_expdays | int |  | Expires after (days) (Security) |  |
| passp_minlength | int |  | Min. length (Security) |  |
| passp_minuchars | int |  | Min. number of capital letters (Security) |  |
| passp_mindigits | int |  | Min. number of digits (Security) |  |
| passp_minnalpha | int |  | Min. number of non-alphanumeric characters (Security) |  |
| remindpassmins | int |  | Time to remind password from email (min) (Security) |  |

## CURRENCYRATES Table

**Description:** Currency exchange rates for individual dates.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| fname | varchar(32) |  | Source identifier |  |
| curdate | datetime |  | Exchange rate effective date |  |
| currency | varchar(3) |  | Currency code |  |
| rate | numeric(19, 6) |  | Exchange rate |  |

## CUSTOMPROCESS_DIALOGWND Table

**Description:** Algorithms - **Message Dialog** instructions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| customprocesses_id | int | [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Algorithm ID |  |
| intid | int |  | Instruction sequence number |  |
| name | nvarchar(100) |  | Instruction name |  |
| description | ntext |  | Instruction description |  |
| message | nvarchar(MAX) |  | Message |  |
| btn1 | nvarchar(100) |  | Button 1 text |  |
| btn2 | nvarchar(100) |  | Button 2 text |  |
| btn3 | nvarchar(100) |  | Button 3 text |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Output variable ID |  |

## CUSTOMPROCESS_EXCALLOP Table

**Description:** Algorithms - **Execute DLL** instructions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| customprocesses_id | int | [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Algorithm ID |  |
| intid | int |  | Instruction sequence number |  |
| name | nvarchar(100) |  | Instruction name |  |
| description | ntext |  | Instruction description |  |
| asmtype | int |  | Type | 0 - .NET DLL |
| assembly | varchar(100) |  | DLL file name |  |
| clstype | varchar(100) |  | Class name |  |
| method | varchar(100) |  | Method |  |
| arg0 | nvarchar(MAX) |  | Argument 1 |  |
| arg1 | nvarchar(MAX) |  | Argument 2 |  |
| arg2 | nvarchar(MAX) |  | Argument 3 |  |
| arg3 | nvarchar(MAX) |  | Argument 4 |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Output / input variable ID |  |

## CUSTOMPROCESS_LINEOP Table

**Description:** Algorithms - **Document Line Operations** instructions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| customprocesses_id | int | [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Algorithm ID |  |
| intid | int |  | Instruction sequence number |  |
| name | nvarchar(100) |  | Instruction name |  |
| description | ntext |  | Instruction description |  |
| type | int |  | Instruction type | 0 - Get Lines, 1 - Update Lines, 2 - Clear Lines, 3 - Add Line, 4 - Delete Line, 5 - Get Header, 6 - Update Header, 7 - Save Document, 8 - Get References, 9 - Update Reference, 10 - Clear References, 11 - Add Reference, 12 - Delete Reference |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Output / input variable ID |  |

## CUSTOMPROCESS_SCRIPTOP Table

**Description:** Algorithms - **Script Operations** instructions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| customprocesses_id | int | [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Algorithm ID |  |
| intid | int |  | Instruction sequence number |  |
| name | nvarchar(100) |  | Instruction name |  |
| description | ntext |  | Instruction description |  |
| type | int |  | Instruction type | 0 - MSSQL/HANA |
| content | ntext |  | Query content |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Output variable ID |  |

## CUSTOMPROCESSES Table

**Description:** Algorithms - process definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| name | nvarchar(100) |  | Algorithm name |  |
| description | ntext |  | Algorithm description |  |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Document class ID |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Last update date |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |

## DAILYCORR_PROPERTIES Table

**Description:** Correspondence Log - properties of additional entry attributes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dailycorr_id | int | [DAILYCORRESPONDENCE](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrespondence-table) **id** | Correspondence Log entry ID |  |
| attribs_id | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | Class attribute ID (Correspondence Log) |  |
| value | nvarchar(MAX) |  | Assigned attribute value |  |

## DAILYCORR_REF Table

**Description:** Correspondence Log - document references.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dailycorr_id | int | [DAILYCORRESPONDENCE](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrespondence-table) **id** | Correspondence Log entry ID |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| linkdate | datetime |  | Relationship creation date and time |  |

## DAILYCORRCLASS Table

**Description:** Correspondence Log - definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique Correspondence Log number |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| name | nvarchar(100) |  | Correspondence Log name |  |
| enabled | bit |  | Active | 0 - No, 1 - Yes |
| description | ntext |  | Correspondence Log description |  |
| reportctx | ntext |  | SQL Report |  |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Last update date |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
| numpfx | varchar(2) |  | Prefix |  |
| dcorrtype | int |  | Type | 0 - Normal, 1 - Advice |

## DAILYCORRESPONDENCE Table

**Description:** Correspondence Log - entries.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry number |  |
| dailycorrclass_id | int | [DAILYCORRCLASS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrclass-table) **id** | Correspondence Log class ID | 0 - Unassigned report, `> 0` Correspondence Log ID |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID - entry owner |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| optype | int |  | Operation type | 0 - Incoming, 1 - Outgoing, 2 - Other |
| opdate | datetime |  | Operation date |  |
| description | ntext |  | Description |  |
| CreatedAt | datetime |  | Correspondence Log entry creation date |  |
| UpdatedAt | datetime |  | Correspondence Log entry last update date |  |
| docnum | varchar(32) |  | Entry number |  |
| clientname | nvarchar(128) |  | Customer name (Advice) |  |
| taxid | varchar(32) |  | Tax ID (Advice) |  |
| opdatetol | int |  | Tolerance days (Advice) |  |
| total | numeric(19, 6) |  | Value (Advice) |  |
| totaltol | numeric(19, 6) |  | Tolerance value (Advice) |  |
| itemdesc | nvarchar(128) |  | Item name (Advice) |  |
| removed | bit |  | Deleted (Advice) | 0 - No, 1 - Yes |
| base_dailycorr_id | int | [DAILYCORRESPONDENCE](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrespondence-table) **id** | Base entry ID in unassigned documents (Advice) |  |

## DASHBOARDS Table

**Description:** Dashboards - definition of elements displayed on the SPUMA start screen, including charts, summaries, and lists.

<!--
| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  |  |  |
| label | nvarchar(1024) |  |  |  |
| description | ntext |  |  |  |
| type | int |  |  |  |
| query | ntext |  |  |  |
| [order] | int |  |  |  |
| createdat | datetime | Creation date |  |  |
| updatedat | datetime | Update date |  |  |
-->

## DESIGNERCONNECTIONS Table

**Description:** Configuration of connections between objects in the interface.

<!--
| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dst_objid | int |  |  |  |
| designeritmintid | int |  |  |  |
| designeritmintid2 | int |  |  |  |
| designerlpoint | int |  |  |  |
| designerlpoint2 | int |  |  |  |
| dst_objtype | int |  |  |  |
-->

## DESIGNERITEMS Table

**Description:** Configuration of object layout in the interface.

<!--
| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dst_objid | int |  |  |  |
| insintid | int |  |  |  |
| intid | int |  |  |  |
| [left] | float |  |  |  |
| [top] | float |  |  |  |
| width | float |  |  |  |
| height | float |  |  |  |
| dst_objtype | int |  |  |  |
-->

## DICTIONARIES Table

**Description:** Static Dictionaries - definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique dictionary number |  |
| name | nvarchar(100) |  | Dictionary name |  |
| description | ntext |  | Dictionary description |  |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |

## DICTVALUES Table

**Description:** Static Dictionaries - allowed values.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| objtype | int |  | Related object type | 1 - Static Dictionary |
| objid | int | [DICTIONARIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dictionaries-table) **id** | Related object ID |  |
| value | nvarchar(255) |  | Value |  |
| description | nvarchar(512) |  | Description |  |

## DIRECTORIES Table

**Description:** Document Directories - company Directory definitions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique Directory number |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| directories_id | int | [DIRECTORIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#directories-table) **id** | Parent Directory ID |  |
| name | nvarchar(100) |  | Directory name |  |
| description | ntext |  | Directory description |  |
| icontype | int |  | Directory icon type | 0 - Folder |
| iconcolor | int |  | Directory icon color |  |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |

## DOCUMENTACCESS Table

**Description:** Access approvals.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique document access request number |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Update date |  |

## DOCUMENTACCESSLOG Table

**Description:** Access approvals - history.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documentaccess_id | int | [DOCUMENTACCESS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentaccess-table) **id** | Document access request ID |  |
| int_id | int |  | Entry sequence number for the access request. A new entry is created when the decision changes |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the approving user |  |
| status | int |  | Approval status | 0 - Pending, 1 - Approved, 2 - Denied |
| CreatedAt | datetime |  | Creation date |  |

## DOCUMENTOCRRESULTS Table

**Description:** Document - OCR recognition results and information about the applied OCR template.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique OCR recognition result entry number for the document |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| schemacode | nvarchar(100) | [DIRECTORIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#directories-table) **id** | Selected OCR recognition schema ID |  |
| title | nvarchar(255) |  | Title assigned by OCR |  |
| comments | ntext |  | Comments |  |
| marktodel | bit |  | Technical field used in transactions |  |

## DOCUMENTPAGES Table

**Description:** Document - relationship between resources and document pages.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique document page entry number |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| pagenum | int |  | Document page number |  |
| resources_id | int | [RESOURCES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#resources-table) **id** | File resource ID |  |
| resources_pagenum | int |  | Page number in the assigned resource |  |
| marktodel | bit |  | Technical field |  |
| rotation | int |  | Page rotation | e.g. 0, 90, 180, 270 |

## DOCUMENTREF Table

**Description:** Document - relationship with a document in the ERP system.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| objecttype | varchar(50) |  | Object type in the ERP system |  |
| objectid | varchar(50) |  | Internal document number in the ERP system |  |
| bobjecttype | varchar(50) |  | Base object type in the ERP system |  |
| bobjectid | varchar(50) |  | Internal base document number in the ERP system |  |
| issys | bit |  | Created by the system | 0 - No, 1 - Yes |
| int_id | int |  | Unique related document entry number within the main document |  |

## DOCUMENTS Table

**Description:** Document - basic information.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique document number |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID - document owner |  |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Document class ID |  |
| companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| name | nvarchar(100) |  | Document name |  |
| description | text |  | Document description |  |
| docdate | datetime |  | Document date |  |
| docnum | nvarchar(100) |  | Document number |  |
| IDDoc | int |  | Unused |  |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |
| authstatus | int |  | Document authorization status | 0 - Pending, 1 - Approved, 2 - Rejected |
| directories_id | int | [DIRECTORIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#directories-table) **id** | Directory ID | -1 - Trash, 0 - Root Directory, `> 0` - Defined Directory |
| docstatus | int |  | Document status | 0 - Loaded (before OCR), 1 - Recognizing (in OCR), 2 - Ready (after OCR), 3 - In repository (see `authstatus`), 4 - Saved as template |
| reconschemas_code | varchar(100) |  | Unused |  |
| enterdate | datetime |  | Document receipt date |  |
| templates_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Relationship with a template document |  |
| definition_code | varchar(100) |  | Unused |  |
| ocr_code | varchar(100) |  | Unique code generated by the OCR service for the document |  |
| headereditmode | int |  | Document header edit permission | 0 - Blocked, 1 - Unblocked |
| lineseditmode | int |  | Document line edit permission | 0 - Blocked, 1 - Unblocked |
| headereditmode1 | int |  | Document header1 edit permission | 0 - Blocked, 1 - Unblocked |
| lineseditmode1 | int |  | Document line1 edit permission | 0 - Blocked, 1 - Unblocked |
| headereditmode2 | int |  | Document header2 edit permission | 0 - Blocked, 1 - Unblocked |
| lineseditmode2 | int |  | Document line2 edit permission | 0 - Blocked, 1 - Unblocked |
| canchgres | bit |  | Permission to modify the document resource (update content) | 0 - Blocked, 1 - Unblocked |
| sysdocnum | int |  | System document number assigned after the document is sent into workflow; unique within the company and class |  |
| rm_users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user moving the document to another Directory |  |
| tmpwritemode | int |  | Permission to edit a form-type document (unused) | 0 - Blocked, 1 - Unblocked |
| autopublish | bit |  | Technical field used in KSeF automation to mark a document for automatic publishing |  |
| grouping | varchar(MAX) |  | Unused |  |
| businesspartner | nvarchar(MAX) |  | Business Partner |  |
| duedate | datetime |  | Payment due date |  |
| baseid | nvarchar(MAX) |  | Base document number |  |
| total | numeric(19, 6) |  | Gross amount |  |
| nettotal | numeric(19, 6) |  | Net amount |  |
| paymentmth | nvarchar(MAX) |  | Payment method |  |
| ocrprofile_id | int | [OCRPROFILES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrprofiles-table) **id** | OCR Profile ID |  |
| basetype | int |  | Base document type | 0 - ZZ document, 1 - PZ document |
| pricetype | int |  | Define cost by | 0 - Net, 1 - Gross |
| currency | nvarchar(MAX) |  | Currency |  |
| ocr_sent | datetime |  | Date the document was processed by OCR |  |
| bankaccount | nvarchar(MAX) |  | Bank account |  |
| edocnum | nvarchar(200) |  | E-document number |  |
| saledate | datetime |  | Sales date |  |
| authall_users_ids | varchar(MAX) |  | IDs of users who can currently approve the document |  |
| authvis_users_ids | varchar(MAX) |  | IDs of all users participating in the document approval process |  |
| rate | numeric(19, 6) |  | Exchange rate |  |
| systotal | numeric(19, 6) |  | System amount |  |
| sysnettotal | numeric(19, 6) |  | System net amount |  |

## DOCUMENTS_ATTACHMENTS Table

**Description:** Document - related attachments.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| att_documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Attachment document ID |  |

## DOCUMENTS_AUTHLOCKS Table

**Description:** Document - authorizations: authorization lock.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_authschemas_id | int | [DOCUMENTS_AUTHSCHEMA](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) **id** | ID of the authorization assigned to the document |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user locking the document |  |
| lockat | datetime |  | Lock date |  |
| unlockat | datetime |  | Unlock date |  |

## DOCUMENTS_AUTHRECIPIENTS Table

**Description:** Document - authorizations: users assigned to the document workflow.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_authschemas_id | int | [DOCUMENTS_AUTHSCHEMA](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) **id** | ID of the authorization assigned to the document |  |
| objid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id**, [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id**, [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | ID of the related object participating in the workflow |  |
| objtype | int |  | Object type | 0 - User, 1 - User Group, 2 - Authorization Schema |
| order | int |  | Order |  |
| authstatus | int |  | Approval status of the stage | 0 - Pending, 1 - Approved, 2 - Rejected |
| approved | datetime |  | Approval / rejection date |  |
| comment | nvarchar(1024) |  | Additional information |  |
| visibility | bit |  | Visibility | 0 - Hide, 1 - Show |
| addinfo | nvarchar(MAX) |  | Additional information for the user for the approval stage |  |
| auth_users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user who authorized the stage |  |
| srcinsintid | int | [AUTHSCHEMA_INSTRUCTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) **intid** | Source authorization schema instance |  |

## DOCUMENTS_AUTHSCHEMA Table

**Description:** Document - authorizations: assigned approval schema.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry number |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document relationship ID |  |
| name | nvarchar(100) |  | Approval schema stage name |  |
| authmethodtype | int |  | Schema type | 0 - All of, 1 - One of, 2 - (N) of, 3 - Authorization Process |
| authusrlimit | int |  | Recipient limit for the stage |  |
| authschema_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Related authorization schema ID |  |
| authstatus | int |  | Approval status of the stage | 0 - Pending, 1 - Approved, 2 - Rejected |
| subschema | bit |  | Subschema | 0 - No, 1 - Yes |
| addinfo | nvarchar(MAX) |  | Additional information for the user for the approval stage |  |
| insintid | int |  | Instruction number in the authorization process |  |
| createdat | datetime |  | Entry creation date |  |
| user_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user selecting the workflow |  |

## DOCUMENTS_AUTHVAR_BASIC Table

**Description:** Document - authorizations: basic variables.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_authschemas_id | int | [DOCUMENTS_AUTHSCHEMA](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) **id** | ID of the authorization assigned to the document |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Variable ID within the authorization process |  |
| linenum | int |  | Line number |  |
| value | nvarchar(1024) |  | Value |  |

## DOCUMENTS_AUTHVAR_SCHEMA Table

**Description:** Document - authorizations: schema variables.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_authschemas_id | int | [DOCUMENTS_AUTHSCHEMA](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) **id** | ID of the authorization assigned to the document |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Variable ID within the authorization process |  |
| authmethodtype | int |  | Schema type | 0 - All of, 1 - One of, 2 - (N) of, 3 - Authorization Process |
| authusrlimit | int |  | Recipient limit for the stage |  |

## DOCUMENTS_AUTHVAR_SCHEMARCP Table

**Description:** Document - authorizations: custom schema variables.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_authschemas_id | int | [DOCUMENTS_AUTHSCHEMA](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) **id** | ID of the authorization assigned to the document |  |
| variable_id | int | [PROCESS_VARIABLES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) **intid** | Variable ID within the authorization process |  |
| order | int |  | Order |  |
| objid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id**, [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id**, [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Related object ID |  |
| objtype | int |  | Object type | 0 - User, 1 - User Group, 2 - Authorization Schema |

## DOCUMENTS_LINES Table

**Description:** Document - lines: attribute information.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| attribs_id | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | Class attribute ID |  |
| linenum | int |  | Document line number |  |
| value | nvarchar(MAX) |  | Assigned value for the attribute of the document line |  |

## DOCUMENTS_LINESOWNERS Table

**Description:** Document - lines: system values and line owner assignment used by permissions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| linenum | int |  | Document line number |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID - line owner |  |
| createdat | datetime |  | Document line creation date |  |
| rindex | nvarchar(MAX) |  | Item |  |
| raccount | nvarchar(MAX) |  | Account |  |
| rqty | numeric(19, 6) |  | Quantity |  |
| rbaseid | nvarchar(MAX) |  | Order ID |  |
| rbaselineid | int |  | Order line |  |
| rporderprice | numeric(19, 6) |  | Net price |  |
| rporderqty | numeric(19, 6) |  | Order quantity |  |
| rlineidref | int |  | Corrected line number |  |
| rnewqty | numeric(19, 6) |  | Quantity after correction |  |
| rnetpricenew | numeric(19, 6) |  | Net price after correction |  |
| rnettotalnew | numeric(19, 6) |  | Net amount after correction |  |
| rproject | nvarchar(MAX) |  | Project |  |
| rdistrule1 | nvarchar(MAX) |  | Cost center 1 |  |
| rdistrule2 | nvarchar(MAX) |  | Cost center 2 |  |
| rdistrule3 | nvarchar(MAX) |  | Cost center 3 |  |
| rdistrule4 | nvarchar(MAX) |  | Cost center 4 |  |
| rdistrule5 | nvarchar(MAX) |  | Cost center 5 |  |
| ramount | numeric(19, 6) |  | Amount |  |
| rvatgroup | nvarchar(MAX) |  | VAT rate |  |

## DOCUMENTS_LINESREFS Table

**Description:** Document - lines: mapping OCR results to document lines.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| linenum | int |  | Document line number |  |
| documentocrresults_id | int | [DOCUMENTOCRRESULTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentocrresults-table) **id** | OCR result ID for the document |  |
| ocrlinenum | int |  | Line number read by OCR |  |
| attribs_id1 | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | ID of the related attribute assigned in OCR data mapping |  |
| ocrname1 | nvarchar(128) |  | Column name in the OCR template |  |
| attribs_id2 | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | ID of the related attribute assigned in OCR data mapping |  |
| ocrname2 | nvarchar(128) |  | Column name in the OCR template |  |
| attribs_id3 | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | ID of the related attribute assigned in OCR data mapping |  |
| ocrname3 | nvarchar(128) |  | Column name in the OCR template |  |
| attribs_id4 | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | ID of the related attribute assigned in OCR data mapping |  |
| ocrname4 | nvarchar(128) |  | Column name in the OCR template |  |

## DOCUMENTS_MODIFICATION Table

**Description:** Document - change history.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry number |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user updating the document |  |
| CreatedAt | datetime |  | Entry creation date |  |

## DOCUMENTS_OCRMAP Table

**Description:** Document - mapping OCR results to the document.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| class_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Document class ID |  |
| cardcode | nvarchar(128) |  | Supplier code from the ERP system |  |
| schemacode | nvarchar(100) |  | Recognition schema code (OCR template) |  |
| ocrname | varchar(100) |  | OCR field name matching the OCR template |  |
| attribs_id | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | ID of the related attribute assigned in OCR data mapping |  |
| maptype | int |  | OCR result mapping type | 1 - Copy, 2 - Search, 3 - Remember |

## DOCUMENTS_PROPERTIES Table

**Description:** Document - values of additional class header attributes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| attribs_id | int | [CLASSATTRIBS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) **id** | Attribute ID |  |
| value | nvarchar(MAX) |  | Assigned attribute value |  |

## DOCUMENTUSAGE Table

**Description:** Document - document viewing history.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| USERS_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| openat | nvarchar(MAX) |  | Document open date |  |

## EXTERNALREFS Table

**Description:** Relationship between a SPUMA document and a document originating from an external integration, e.g. IMAP, POP3, or KSeF.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| sourceid | varchar(255) |  | Reference to e.g. POP3 mailbox ID, IMAP mailbox ID, or KSeF number |  |
| foldername | nvarchar(32) |  | Directory name |  |

## INTERACTIVEDICTS Table

**Description:** Interactive Dictionaries - Interactive Dictionaries and Reports.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| name | nvarchar(100) |  | Dictionary / report name |  |
| description | ntext |  | Dictionary / report description |  |
| scriptype | int |  | Value script type | 0 - MSSQL/HANA |
| scriptctx | ntext |  | Script |  |
| sqlconnstr | varchar(1024) |  | Additional connection string |  |
| allowcache | bit |  |  | 0 - No, 1 - Yes |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Update date |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| report | bit |  | Report | 0 - No (dictionary), 1 - Yes (report) |
| label | nvarchar(200) |  | Label |  |
| visible | bit |  | Visibility | 0 - No, 1 - Yes |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
| issys | bit |  | System object | 0 - No, 1 - Yes |

## KSEF2_DOCUMENTS Table

**Description:** KSeF - list of documents retrieved from the API.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| NIP | varchar(32) |  | Company Tax ID |  |
| KsefNumber | varchar(128) |  | Document reference number in KSeF |  |
| InvoiceNumber | varchar(128) |  | Document number |  |
| IssueDate | datetime |  | Invoice issue date |  |
| InvoicingDate | datetime |  | Sales / service date |  |
| AcquisitionDate | datetime |  | Date the invoice was retrieved from KSeF |  |
| PermanentStorageDate | datetime |  | Date the invoice was permanently stored in KSeF |  |
| Seller_NIP | varchar(32) |  | Seller Tax ID |  |
| Seller_Name | nvarchar(128) |  | Seller name |  |
| Buyer_NIP | varchar(32) |  | Buyer Tax ID |  |
| Buyer_Name | nvarchar(128) |  | Buyer name |  |
| NetAmount | numeric(19, 2) |  | Net amount |  |
| GrossAmount | numeric(19, 2) |  | Gross amount |  |
| VatAmount | numeric(19, 2) |  | VAT amount |  |
| Currency | varchar(32) |  | Invoice currency |  |
| InvoicingMode | varchar(32) |  | Invoice issuing mode |  |
| InvoiceType | varchar(32) |  | Invoice type |  |
| FormCode | varchar(32) |  | Invoice code/form |  |
| IsSelfInvoicing | bit |  | Self-invoicing | 0 - No, 1 - Yes |
| HasAttachment | bit |  | Has attachment | 0 - No, 1 - Yes |
| InvoiceHash | varchar(128) |  | Invoice hash |  |
| HashOfCorrectedInvoice | nvarchar(128) |  | Corrected invoice hash |  |
| XmlDta | xml |  | Invoice XML data |  |
| ThirdSubjects | nvarchar(1024) |  | Third-party entity data |  |
| hidden | bit |  | Invoice hidden | 0 - No, 1 - Yes |
| status | int |  | Technical field (third party) |  |

## KSEF2_SESSIONS Table

**Description:** KSeF - API login sessions stored for a given token.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| NIP | varchar(32) |  | Company Tax ID |  |
| Thumbprint | varchar(128) |  | Certificate thumbprint |  |
| AccessToken | varchar(MAX) |  | KSeF API access token |  |
| AccessTokenValid | datetime |  | Access token expiration date |  |
| RefreshToken | varchar(MAX) |  | Refresh token |  |
| RefreshTokenValid | datetime |  | Refresh token expiration date |  |
| LastCheck | datetime |  | Last check date |  |
| LastCheck2 | datetime |  | Last additional session check date |  |

## MAILMONITORCFG Table

**Description:** Automation - configuration for automatic e-mail retrieval using POP3 (currently unused).

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| profile | varchar(100) | [CONFIGURATION](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#configuration-table) **profile** | Configuration profile name |  |
| SPUMAuserid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user assigned to the automation |  |
| SPUMAcompanyid | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| MailHost | varchar(100) |  | POP3 Host |  |
| MailUser | varchar(100) |  | POP3 User |  |
| MailPass | varchar(100) |  | POP3 Password |  |
| MailPort | int |  | POP3 Port |  |
| UseSSL | bit |  | POP3 SSL | 0 - No, 1 - Yes |
| MatchRx | nvarchar(1024) |  | Regular expression used to filter e-mail content |  |
| docctype | int |  | Document type | 1 - Attachments as pages, 2 - Attachments as documents |
| classes_id | int | [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id** | Attachment class ID for the target document created by this automation |  |
| allowempty | bit |  | Add messages without attachments | 0 - No, 1 - Yes |

## MESSAGE_RECIPIENTS Table

**Description:** Messages - recipients assigned to a message.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| messages_id | int | [MESSAGES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#messages-table) **id** | Related message ID |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user receiving the message |  |
| email_adr | varchar(255) |  | Recipient e-mail address |  |
| isread | bit |  | Message read | 0 - No, 1 - Yes |

## MESSAGES Table

**Description:** Messages - internal notifications and e-mail messages sent from SPUMA.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique message number |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user creating the message |  |
| dst_companies_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| dst_documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| subject | nvarchar(1024) |  | Message subject |  |
| content | ntext |  | Message content |  |
| isread | bit |  | Message read | 0 - No, 1 - Yes |
| CreatedAt | datetime |  | Message creation date |  |
| UpdatedAt | datetime |  | Message update date |  |
| issent | int |  | Sent message status | 0 - Pending in queue, 1 - Sent successfully, 2 - Sending error |
| att_document_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Related attachment document ID |  |
| eventtype | int |  | Notification type | 0 - Internal message, 1 - Authorization request, 2 - Document authorization, 3 - Document rejection, 4 - Comment request, 5 - Comment added, 6 - Change to watched document, 7 - Final document approval |
| dst_documents_authschemas_id | int | [DOCUMENTS_AUTHSCHEMA](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) **id** | Authorization schema ID related to the target document |  |
| dst_documents_authrecipients_int_id | int | [AUTHSCHEMA_INSTRUCTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) **intid** | ID of the source authorization schema instance related to the message |  |
| signature | varchar(40) |  | Signature used to create a password reset link |  |

## MODIFICATIONENTRY Table

**Description:** Document change history.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documentmodifications_id | int | [DOCUMENTS_MODIFICATION](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_modification-table) **id** | ID of the modification stored for the document |  |
| objtype | int |  | Object type | 0 - Document header, 1 - Document pages, 2 - System variables, 5 - Document lines |
| objid | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| fieldcode | varchar(32) |  | Field name |  |
| oldvalue | nvarchar(1024) |  | Previous field value |  |
| newvalue | nvarchar(1024) |  | Updated value |  |

## MODULECONFIG Table

**Description:** Configuration of modules used in SPUMA.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| module | varchar(100) |  | Module name |  |
| property | varchar(100) |  | Module parameter |  |
| type | int |  | Module parameter data type | 0 - Integer, 1 - YES/NO, 2 - Text, 3 - File or directory path, 4 - Password |
| value | nvarchar(1024) |  | Parameter value |  |
| updateat | datetime |  | Entry update date |  |

<!--
## OCRCONFIGS Table

**Description:** TODO

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | varchar(32) |  |  |  |
| businesspartner | nvarchar(MAX) |  |  |  |
| ocrprofile_id | int |  |  |  |
| CreatedAt | datetime |  |  |  |
| UpdatedAt | datetime |  |  |  |
| cptolns_groupby | int |  |  |  |
-->

## OCRFIELDS Table

**Description:** OCR - recognized header fields.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry sequence number |  |
| documentocrresults_id | int | [DOCUMENTOCRRESULTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentocrresults-table) **id** | ID of the recognition schema assigned to the document |  |
| name | varchar(100) |  | Field name |  |
| type | int |  | Field value type | 0 - Text field, 1 - Integer, 2 - Date, 3 - Floating-point number, 4 - Document line block name |
| value | nvarchar(MAX) |  | Value read by OCR |  |
| ocrfields_id | int | [DOCUMENTOCRRESULTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentocrresults-table) **id** | Parent OCR field ID for the line block |  |
| marktodel | bit |  | Technical field used in transactions |  |

## OCRLINES Table

**Description:** OCR - recognized line fields.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| ocrfields_id | int | [OCRFIELDS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrfields-table) **id** | ID of the OCR field read |  |
| linenum | int |  | Line number |  |
| linenum | nvarchar(max) |  | Value read by OCR |  |

## OCRPROCESSLOG Table

**Description:** OCR - error log.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Main document ID |  |
| order | int |  | Message order |  |
| isread | bit |  | Message read | 0 - No, 1 - Yes |
| message | nvarchar(255) |  | Error message content |  |
| CreatedAt | datetime |  | Entry creation date |  |

## OCRPROFILES Table

**Description:** OCR Profiles - definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique OCR Profile number |  |
| name | nvarchar(100) |  | Profile name |  |
| description | ntext |  | Profile description |  |
| type | int |  | Type | 0 - OCR Service, 1 - Chat GPT |
| gpt_model | varchar(128) |  | GPT Model |  |
| gpt_prompt | nvarchar(MAX) |  | GPT Prompt |  |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |

## OCRRESULTPAGES Table

**Description:** OCR - recognition results for a document page.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry sequence number |  |
| documentocrresults_id | int | [DOCUMENTOCRRESULTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentocrresults-table) **id** | ID of the recognition schema assigned to the document |  |
| pagenum | int |  | Page number |  |
| type | int |  | Field type | 1 - Page with lines, 2 - Standard page, 3 - Invoice attachment page |
| marktodel | bit |  | Technical field used in transactions |  |
| width | int |  | Page width |  |
| height | int |  | Page height |  |

## OCRTEXTREGIONS Table

**Description:** OCR - recognized text regions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| ocrresultpages_id | int | [OCRRESULTPAGES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrresultpages-table) **id** | ID of the recognized document page |  |
| text | ntext |  | Word read by OCR |  |
| posx | int |  | Text position on the X axis |  |
| posy | int |  | Text position on the Y axis |  |
| width | int |  | Text region width |  |
| height | int |  | Text region height |  |

## ORGANIZATIONS Table

**Description:** Organizations - definition. This mechanism was used in SPUMA versions earlier than 7. References through `organizations_id` remain in the database, but they have no functional meaning in the current version.

<!--
| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| code | varchar(128) |  | Organization code |  |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
-->

## PAGECOMMENTS Table

**Description:** Comments assigned to a document page.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry sequence number |  |
| documentpages_id | int | [DOCUMENTPAGES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentpages-table) **id** | Document page ID |  |
| commnum | int |  | Comment sequence number within the document page |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user creating the comment |  |
| posx | float |  | Comment position on the X axis |  |
| posy | float |  | Comment position on the Y axis |  |
| width | float |  | Comment width |  |
| height | float |  | Comment height |  |
| marktodel | bit |  | Technical field used in transactions |  |

## PASSCHANGELOG Table

**Description:** History and queue of operations related to user password changes.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | ID of the user affected by the password change |  |
| old_pass_md5 | varchar(32) |  | Encrypted current user password |  |
| rq_users_id | int |  | Password change operation type | 0 - Password changed, 1 - Password to be changed |
| createdat | datetime |  | Entry creation date |  |

## PERMISSIONS Table

**Description:** Document permissions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique entry number |  |
| order | int |  | Order |  |
| dst_objtype | int |  | Object type to which the permission is assigned | 0 - Company permissions, 1 - Document class permissions, 2 - Document, 3 - Correspondence Log permissions, 4 - Report permissions |
| dst_objid | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id**, [CLASSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) **id**, [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id**, [DAILYCORRCLASS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrclass-table) **id**, [INTERACTIVEDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#interactivedicts-table) **id** | ID of the object to which the permission is assigned |  |
| proptype | int |  | Permission type | 0 - Main, 1 - Transferability, 5 - Edit other users' comments, 6 - Edit field/column, 7 - Edit other users' lines, 8 - Add Correspondence Log entry, 9 - Delete Correspondence Log entry, 10 - Modify resources, 11 - Edit references, 12 - Create SAP document |
| permtype | int |  | Edit type | 0 - Full, 1 - View, 2 - None |
| objtype | int |  | Permission recipient type | 0 - User, 1 - User Group |
| objid | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id**, [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id** | Permission recipient ID |  |
| marktodel | bit |  | Technical field used in transactions |  |
| classattribs_id | int | [ATTRIBDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#attribdicts-table) **id** | Attribute permission |  |
| docstate | int |  | Document status | 0 - Approved, 1 - Rejected, 2 - In Secretary, 3 - In authorization |
| authschemas_id | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id** | Related authorization schema ID |  |

## PROCESS_ACTIONS Table

**Description:** Authorization Processes / Algorithms - actions (transitions between stages).

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dst_objid | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id**, [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Related object ID |  |
| intid | int |  | Action sequence number |  |
| insintid | int | [AUTHSCHEMA_INSTRUCTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) **intid**, [CUSTOMPROCESS_DIALOGWND](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_dialogwnd-table) **intid**, [CUSTOMPROCESS_EXCALLOP](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_excallop-table) **intid**, [CUSTOMPROCESS_LINEOP](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_lineop-table) **intid**, [CUSTOMPROCESS_SCRIPTOP](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_scriptop-table) **intid** | ID of the stage from which the transition starts | 0, -10 - start point, -13, -1 - end point, other values - stage IDs |
| insintid2 | int | [AUTHSCHEMA_INSTRUCTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) **intid**, [CUSTOMPROCESS_DIALOGWND](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_dialogwnd-table) **intid**, [CUSTOMPROCESS_EXCALLOP](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_excallop-table) **intid**, [CUSTOMPROCESS_LINEOP](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_lineop-table) **intid**, [CUSTOMPROCESS_SCRIPTOP](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_scriptop-table) **intid** | ID of the stage to which the transition leads | 0, -10 - start point, -13, -1 - end point, other values - stage IDs |
| dst_objtype | int |  | Related object type | 0 - Authorization Process, 1 - Algorithm |
| ptype | int |  | Transition type | 0 - Transition after approval, 1 - Transition after rejection |

## PROCESS_CNDFUNCTS Table

**Description:** Authorization Processes / Algorithms - conditions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dst_objid | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id**, [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Related object ID |  |
| actionsintid | int | [PROCESS_ACTIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_actions-table) **intid** | Action ID within the authorization process / algorithm |  |
| intid | int |  | Condition / group sequence number |  |
| type | int |  | Type | 0 - Condition, 1 - Group |
| lvariable_id | int |  | Variable ID on the left side of the condition |  |
| cndtype | int |  | Operator | `0 =`, `1 !=`, `2 >`, `3 >=`, `4 <`, `5 <=`, `6 RX`, `7 !RX`, `8 - in`, `9 - not in` |
| rvariable_id | int |  | Variable ID on the right side of the condition |  |
| rconst | nvarchar(1024) |  | Constant value |  |
| grptype | int |  | Group type | 0 - AND, 1 - OR |
| grpintid | int | **intid** | Parent group ID within the condition set |  |
| dst_objtype | int |  | Related object type | 0 - Authorization Process, 1 - Algorithm |
| lcolumn | nvarchar(100) |  | `EVENTARGS` value on the left side of the condition |  |

## PROCESS_VARCOLUMNS Table

**Description:** Algorithms - variable columns.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dst_objid | int | [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Related object ID |  |
| dst_objtype | int |  | Related object type | 0 - Authorization Process, 1 - Algorithm |
| intid | int |  | Variable ID within the algorithm |  |
| name | nvarchar(100) |  | Column name |  |
| type | int |  | Column type | 0 - Text, 1 - Int, 2 - Float, 3 - Date |

## PROCESS_VARIABLES Table

**Description:** Authorization Processes / Algorithms - variables.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| dst_objid | int | [AUTHSCHEMAS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) **id**, [CUSTOMPROCESSES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) **id** | Related object ID |  |
| intid | int |  | Variable sequence number within the process / algorithm |  |
| name | nvarchar(100) |  | Variable name |  |
| description | ntext |  | Variable description |  |
| type | int |  | Variable type | 0 - Text, 1 - Int, 2 - Float, 4 - Schema / Table, 5 - Date |
| evalcode | varchar(1024) |  | JS Code |  |
| dst_objtype | int |  | Related object type | 0 - Authorization Process, 1 - Algorithm |

## RESOURCES Table

**Description:** Resources - files imported into SPUMA.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique file number |  |
| filename | nvarchar(1000) |  | File name |  |
| keywords | ntext |  | Keywords associated with the resource |  |
| type | varchar(3) |  | File type |  |
| content | image |  | File content |  |
| CreatedAt | datetime |  | Creation date |  |
| UpdatedAt | datetime |  | Update date |  |
| preview | image |  | Preview |  |

## SEARCHRESULTS Table

**Description:** Search results.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| frac | float |  | Search match |  |

## SIGNATURES Table

**Description:** Signatures assigned to a user for a document for a specified period.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | varchar(32) |  | Unique signature number |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| sighours | int |  | Signature validity period in hours |  |
| CreatedAt | datetime |  | Entry creation date |  |

## USERGROUPS Table

**Description:** User Groups - definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique group number |  |
| name | nvarchar(100) |  | Group name |  |
| description | ntext |  | Group description |  |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |
| grouprole | int |  | Group role | 0 - General, 1 - Creators, 2 - Administrators |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |

## USERGROUPUSERS Table

**Description:** User Groups - users assigned to groups.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| usergroups_id | int | [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id** | User Group ID |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |

## USERS Table

**Description:** Users - definition.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique user number |  |
| name | nvarchar(100) |  | User name (General) |  |
| pass_md5 | varchar(50) |  | Password encoded with MD5 (General) |  |
| isadmin | bit |  | Administrator (General) | 0 - No, 1 - Yes |
| email_reply | varchar(255) |  | User e-mail address (Email) |  |
| email_template | ntext |  | E-mail template (Email) |  |
| cmppermtype | int |  | Company permissions (Permissions) | 0 - All, 1 - None, 2 - Selected only |
| CreatedAt | datetime |  | Entry creation date |  |
| UpdatedAt | datetime |  | Entry update date |  |
| commentcolor | int |  | Comment color (General) |  |
| authlevel | int |  | Unused |  |
| iscreator | bit |  | Creator (General) | 0 - No, 1 - Yes |
| issys | bit |  | System user (General) | 0 - No, 1 - Yes |
| username | varchar(255) |  | Full name (General) |  |
| recent | int |  | Number of recent documents (General) |  |
| repl | bit |  | Substitution active (**During this period**) | 0 - No, 1 - Yes |
| replstart | datetime |  | From (**During this period**) |  |
| replend | datetime |  | To (**During this period**) |  |
| rep_users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | Substitutes - first (**During this period**) |  |
| rep_users_id2 | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | Substitutes - second (**During this period**) |  |
| islocked | bit |  | Locked (General) | 0 - No, 1 - Yes |
| visfldtp1 | int |  | Unused |  |
| visfldtp2 | int |  | Unused |  |
| visfldtp3 | int |  | Unused |  |
| visfldtp4 | int |  | Unused |  |
| organizations_id | int | [ORGANIZATIONS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) **id** | Organization ID |  |
| dailycorrclass_id | int | [DAILYCORRCLASS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrclass-table) **id** | Default correspondence log ID (General) |  |
| signature | image |  | Signature |  |
| globalid | varchar(36) |  | Global object identifier independent of the database |  |
| lang | int |  | UI language (General) | 0 - English, 1 - Polish |
| imap_address | varchar(255) |  | IMAP - host (Email) |  |
| imap_port | int |  | IMAP - port (Email) |  |
| imap_user | nvarchar(255) |  | IMAP - user (Email) |  |
| imap_password | varchar(255) |  | IMAP - password (Email) |  |
| imap_ssl | bit |  | IMAP - SSL (Email) | 0 - No, 1 - Yes |
| imap_vflds | varchar(255) |  | IMAP - folder (Email) |  |
| compact_style | bit |  | Compact style | 0 - No, 1 - Yes |
| docacc_usergroups_id | int | [USERGROUPS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) **id** | Supervisors - User Group ID (General) |  |
| apikey | nvarchar(128) |  | Token (General) |  |
| apiexp | datetime |  | Token expiration date (General) |  |
| apimode | int |  | Session mode - Token (General) | 0 - Read, 1 - Read/Write |
| advicevis | int |  | Advice visibility (General) | 0 - No, 1 - Yes |

## USERS_DOCINTERFACECONFIGS Table

**Description:** Users - E-document Exchange - additional integration configuration.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| int_id | int |  | Unique integration number within the user |  |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| name | nvarchar(255) |  | Integration name |  |
| type | int |  | Integration type | 0 - KSeF |
| company_id | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |
| userid | nvarchar(128) |  | User - integration login |  |
| password | nvarchar(128) |  | Integration password |  |
| synctout | int |  | Polling interval | Minutes |
| taxid_ex | nvarchar(128) |  | Tax ID extension |  |

## USERS_EVENTRESTRICTIONS Table

**Description:** User - notification exclusions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| eventtype | int |  | Notification type | 1 - Authorization required, 2 - Document approved, 3 - Rejected, 7 - Approved by all, 9 - Pending report |
| restrictiontype | int |  | Disabled notification type | 0 - E-mail notification, 1 - Internal messages |

## USERS_FAVORITEDOCUMENTS Table

**Description:** User - favorite documents.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| documents_id | int | [DOCUMENTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) **id** | Document ID |  |
| type | int |  | Type | 0 - Favorite |

## USERS_PERMISSIONS Table

**Description:** User - company permissions.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| users_id | int | [USERS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) **id** | User ID |  |
| permvalue | int | [COMPANIES](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) **id** | Company ID |  |

## WHITELIST_CHECKLOG Table

**Description:** Log of bank account checks against the VAT Taxpayer White List.

| Field | Data type | Reference | Description | Constraints |
| --- | --- | --- | --- | --- |
| id | int |  | Unique number |  |
| users_id | int |  | User ID |  |
| documents_id | int |  | Document ID |  |
| taxid | varchar(32) |  | Tax ID |  |
| bankaccount | varchar(32) |  | Bank account number |  |
| checkstatus | int |  | Status | 0 - Not listed on the VAT White List, 1 - Listed on the VAT White List |
| createdat | datetime |  | Creation date |  |