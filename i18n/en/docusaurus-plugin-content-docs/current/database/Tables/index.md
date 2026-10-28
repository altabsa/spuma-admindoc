---
sidebar_position: 2
sidebar_label: System Tables
slug: /Tables
---

# System Tables

This section contains a list of system tables used by SPUMA.

| Table name | Description |
| --- | --- |
| [**ALERTEXCLUSION**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#alertexclusion-table) | User alert result exclusions |
| [**ALLOWEDOCUMENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#allowedocuments-table) | User permissions to documents |
| [**ALLOWEDUSERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#allowedusers-table) | User permissions to documents |
| [**APB_DEBUG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#apb_debug-table) | Technical table used to diagnose `APR_TRANSACTION` events |
| [**ATTRIBDICTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#attribdicts-table) | Relationships between attributes and company system dictionaries |
| [**AUTHSCHEMA_INSPARAMETERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_insparameters-table) | Authorization process - parameters for instructions (stages) |
| [**AUTHSCHEMA_INSTRUCTIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_instructions-table) | Authorization process - instructions (stages) |
| [**AUTHSCHEMA_PARVALUES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_parvalues-table) | Authorization process - values for the **Schema Selection** parameter type |
| [**AUTHSCHEMA_PERMISSIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_permissions-table) | Authorization process - special permissions |
| [**AUTHSCHEMA_RECIPIENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschema_recipients-table) | Authorization schema - recipients |
| [**AUTHSCHEMAS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#authschemas-table) | Authorization - schemas and authorization processes |
| [**BPCONFIGS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#bpconfigs-table) | Companies - BP Configuration - BP-specific Profile |
| [**CHATENTRIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#chatentries-table) | Chats - messages stored in a chat |
| [**CHATS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#chats-table) | Chats - chat definition |
| [**CHATUSERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#chatusers-table) | Chats - users assigned to a chat |
| [**CLASS_SCHEMAS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#class_schemas-table) | Classes - available authorization schemas / processes |
| [**CLASS_SYSATTRIBSCFG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#class_sysattribscfg-table) | System attribute visibility configuration |
| [**CLASS_TRIGGERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#class_triggers-table) | Class - related triggers |
| [**CLASSATTRIBS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classattribs-table) | Class - related attributes |
| [**CLASSES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#classes-table) | Classes - document class definition (General, Authorizations) |
| [**COLUMNSFORMATS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#columnsformats-table) | Column settings - column format for reports and Correspondence Logs |
| [**COLUMNSMAPPING**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#columnsmapping-table) | Column settings - parameter mapping for subreports |
| [**COMMENTENTRIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#commententries-table) | Document - comments |
| [**COMPANIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companies-table) | Companies - basic definition (General, SAP Integration, BP Configuration) |
| [**COMPANIESDICTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companiesdicts-table) | Companies - system dictionaries |
| [**COMPANY_CLASSES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#company_classes-table) | Companies - classes |
| [**CONFIGURATION**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#configuration-table) | SPUMA configuration |
| [**CURRENCYRATES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#currencyrates-table) | Currency exchange rates for individual dates |
| [**CUSTOMPROCESS_DIALOGWND**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_dialogwnd-table) | Algorithms - **Message Dialog** instructions |
| [**CUSTOMPROCESS_EXCALLOP**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_excallop-table) | Algorithms - **Execute DLL** instructions |
| [**CUSTOMPROCESS_LINEOP**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_lineop-table) | Algorithms - **Document Line Operations** instructions |
| [**CUSTOMPROCESS_SCRIPTOP**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocess_scriptop-table) | Algorithms - **Script Operations** instructions |
| [**CUSTOMPROCESSES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#customprocesses-table) | Algorithms - process definition |
| [**DAILYCORR_PROPERTIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorr_properties-table) | Correspondence Log - properties of additional entry attributes |
| [**DAILYCORR_REF**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorr_ref-table) | Correspondence Log - document references |
| [**DAILYCORRCLASS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrclass-table) | Correspondence Log - definition |
| [**DAILYCORRESPONDENCE**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dailycorrespondence-table) | Correspondence Log - log entries |
| [**DASHBOARDS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dashboards-table) | Dashboards - definition of elements displayed on the SPUMA start screen, including charts, summaries, and lists |
| [**DESIGNERCONNECTIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#designerconnections-table) | Configuration of connections between objects in the interface |
| [**DESIGNERITEMS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#designeritems-table) | Configuration of object layout in the interface |
| [**DICTIONARIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dictionaries-table) | Static Dictionaries - definition |
| [**DICTVALUES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#dictvalues-table) | Static Dictionaries - allowed values |
| [**DIRECTORIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#directories-table) | Document Directories - company Directory definitions |
| [**DOCUMENTACCESS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentaccess-table) | Access approvals |
| [**DOCUMENTACCESSLOG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentaccesslog-table) | Access approvals - history |
| [**DOCUMENTOCRRESULTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentocrresults-table) | Document - OCR recognition results and information about the applied OCR template |
| [**DOCUMENTPAGES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentpages-table) | Document - relationship between resources and document pages |
| [**DOCUMENTREF**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentref-table) | Document - relationship with a document in the ERP system |
| [**DOCUMENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents-table) | Document - basic document information |
| [**DOCUMENTS_ATTACHMENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_attachments-table) | Document - related attachments |
| [**DOCUMENTS_AUTHLOCKS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authlocks-table) | Document - authorizations: authorization lock |
| [**DOCUMENTS_AUTHRECIPIENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authrecipients-table) | Document - authorizations: users assigned to the document workflow |
| [**DOCUMENTS_AUTHSCHEMA**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authschema-table) | Document - authorizations: assigned approval schema |
| [**DOCUMENTS_AUTHVAR_BASIC**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authvar_basic-table) | Document - authorizations: basic variables |
| [**DOCUMENTS_AUTHVAR_SCHEMA**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authvar_schema-table) | Document - authorizations: schema variables |
| [**DOCUMENTS_AUTHVAR_SCHEMARCP**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_authvar_schemarcp-table) | Document - authorizations: schema recipient variables |
| [**DOCUMENTS_LINES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_lines-table) | Document lines - basic information about line attributes |
| [**DOCUMENTS_LINESOWNERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_linesowners-table) | Document lines - system values, line permissions, and line owner assignment |
| [**DOCUMENTS_LINESREFS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_linesrefs-table) | Document lines - mapping OCR line results to document lines |
| [**DOCUMENTS_MODIFICATION**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_modification-table) | Document - change history |
| [**DOCUMENTS_OCRMAP**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_ocrmap-table) | Document - mapping OCR results to the document |
| [**DOCUMENTS_PROPERTIES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documents_properties-table) | Document - values assigned to additional class attributes |
| [**DOCUMENTUSAGE**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#documentusage-table) | Document - document viewing history |
| [**EXTERNALREFS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#externalrefs-table) | Relationship between a SPUMA document and documents from external integrations, e.g. IMAP, POP3, KSeF |
| [**INTERACTIVEDICTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#interactivedicts-table) | Interactive Dictionaries - Interactive Dictionaries and Reports |
| [**KSEF2_DOCUMENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ksef2_documents-table) | KSeF - list of documents retrieved from the API |
| [**KSEF2_SESSIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ksef2_sessions-table) | KSeF - API login sessions stored for a given token |
| [**MAILMONITORCFG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#mailmonitorcfg-table) | Automation - automatic e-mail retrieval using POP3 |
| [**MESSAGE_RECIPIENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#message_recipients-table) | Messages - recipients assigned to a message |
| [**MESSAGES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#messages-table) | Messages - stored internal notifications and e-mails sent from SPUMA |
| [**MODIFICATIONENTRY**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#modificationentry-table) | Document change history |
| [**MODULECONFIG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#moduleconfig-table) | Configuration of modules used in SPUMA |
| [**OCRCONFIGS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrconfigs-table) | |
| [**OCRFIELDS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrfields-table) | OCR - recognized header fields |
| [**OCRLINES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrlines-table) | OCR - recognized line fields |
| [**OCRPROCESSLOG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrprocesslog-table) | OCR - error log |
| [**OCRPROFILES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrprofiles-table) | OCR Profiles - definition |
| [**OCRRESULTPAGES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrresultpages-table) | OCR - recognition results for a document page |
| [**OCRTEXTREGIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#ocrtextregions-table) | OCR - recognized text regions |
| [**ORGANIZATIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#organizations-table) | Organizations - definition |
| [**PAGECOMMENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#pagecomments-table) | Comments assigned to a page |
| [**PASSCHANGELOG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#passchangelog-table) | History and queue of operations related to user password changes |
| [**PERMISSIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#permissions-table) | Document permissions |
| [**PROCESS_ACTIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_actions-table) | Authorization Processes / Algorithms - actions |
| [**PROCESS_CNDFUNCTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_cndfuncts-table) | Authorization Processes / Algorithms - conditions |
| [**PROCESS_VARCOLUMNS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_varcolumns-table) | Algorithms - variable columns |
| [**PROCESS_VARIABLES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#process_variables-table) | Authorization Processes / Algorithms - variables |
| [**RESOURCES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#resources-table) | Resources - files imported into SPUMA |
| [**SEARCHRESULTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#searchresults-table) | Search results |
| [**SIGNATURES**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#signatures-table) | Signatures assigned to a user for a document for a specified period |
| [**USERGROUPS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroups-table) | User Groups - definition |
| [**USERGROUPUSERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#usergroupusers-table) | User Groups - user assignments |
| [**USERS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users-table) | Users - definition |
| [**USERS_DOCINTERFACECONFIGS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users_docinterfaceconfigs-table) | Users - E-document Exchange |
| [**USERS_EVENTRESTRICTIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users_eventrestrictions-table) | User - notification exclusions |
| [**USERS_FAVORITEDOCUMENTS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users_favoritedocuments-table) | User - favorite or watched documents |
| [**USERS_PERMISSIONS**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#users_permissions-table) | User - company permissions |
| [**WHITELIST_CHECKLOG**](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#whitelist_checklog-table) | Log of bank account checks against the VAT Taxpayer White List |