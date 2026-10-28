---
sidebar_position: 1
sidebar_label: Installation Procedure
slug: /installation
---

# SPUMA Installation Guide

## Document Purpose

The purpose of this document is to describe the manual installation process of the SPUMA system in a company environment. The guide is intended for system administrators and IT departments responsible for preparing the application server, database server, and configuring integrations with external systems.

## System Scope

The SPUMA system consists of three main components:

### Main Server — SPUMA DataService

SPUMA DataService is a Windows service written in .NET 9. It is responsible for:

- handling the data model,
- access control,
- providing an HTTP interface for the web application and administration application,
- communication and data exchange with external systems, such as:
  - email,
  - SAP Business One,
  - KSeF,
  - OCR mechanisms,
  - AI models.

### Client Application

The client application is an HTML5 application written in TypeScript. It is used for the daily work of end users, including:

- document registration,
- document preview,
- directories,
- document description,
- sending documents through workflows,
- approvals,
- searching,
- creating journal entries in SAP Business One,
- reporting,
- correspondence log management.

### Administration Application

The administration application is an HTML5 application written in TypeScript. It is responsible for:

- global configuration and per-company configuration,
- defining system objects, such as:
  - classes,
  - companies,
  - users,
  - catalogs,
  - user groups,
  - dictionaries,
  - document workflows,
  - processes and schemas,
  - correspondence logs,
  - reports,
  - UI automations,
- defining permissions,
- maintenance operations, such as:
  - deleting documents,
  - importing and exporting objects,
  - rebuilding permissions.

---