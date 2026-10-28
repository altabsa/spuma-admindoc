---
id: prerequisites
title: Prerequisites
sidebar_label: Prerequisites
sidebar_position: 1
description: SPUMA system prerequisites.
---

# Prerequisites

## General Information

SPUMA does not have a dedicated installer. The installation is performed manually and includes:

- copying the application files,
- creating the database,
- editing configuration files,
- installing and starting the Windows service.

## System Requirements

The following are required for installation:

- a Windows server for running the SPUMA DataService,
- .NET 9 Runtime,
- access to the SQL server,
- administrative permissions to install a Windows service,
- the SPUMA application file package.

## Supported Databases

SPUMA supports the following database engines:

- Microsoft SQL Server — version 2017 or later,
- SAP HANA DB — version 2.0.

The database is created manually using the provided SQL script.

## Dependent Systems

By default, SPUMA uses the following external systems:

### Required

- **SAP Business One Service Layer**
- **SAP Business One DI libraries**

### Optional

- **SPUMA OCR Service**  
  A service responsible for advanced OCR recognition of invoices. It is based on ABBYY FlexiCapture 12 SDK libraries.

- **KSEF-PDF**  
  A service responsible for generating a PDF version of a KSeF invoice based on XML data. It is based on libraries provided by the Polish Ministry of Finance.

- **SPUMA4SBO**  
  An SAP Business One add-on that extends the system integration.

## Deployment Structure

SPUMA DataService acts simultaneously as:

- the back-end layer,
- the HTTP server for the client application,
- the HTTP server for the administration application.

This means that the client and administration applications are served by the SPUMA DataService.