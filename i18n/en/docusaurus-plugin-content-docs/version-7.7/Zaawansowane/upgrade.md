---
id: upgrade-manual
position: 5
title: Upgrade Instructions
---

## 1. Document Purpose

The purpose of this document is to describe the procedure for upgrading SPUMA DMS to a newer version. The instructions are intended for system administrators and IT personnel responsible for maintaining the application and database environment.

---

## 2. Upgrade Conditions

The system upgrade should be performed only during a planned maintenance window.

> **Important**  
> Before starting the upgrade, make sure that **no user is working in SPUMA**.  
> During the upgrade, the system must be unavailable for normal use.

> **Critical requirement**  
> Before making any changes, perform a **full backup of the application files and the database**.  
> Without a current backup, it is not possible to safely roll back changes if the upgrade fails.

---

## 3. Upgrade Sequence

The SPUMA DMS upgrade must be performed **version by version only**. Intermediate versions must not be skipped.

This means that if the environment is running version **7.4** and the target version is **7.6**, the upgrade must be performed in stages:

1. upgrade from **7.4 to 7.5 (highest available version)**,
2. start the system and verify that it works correctly,
3. upgrade from **7.5 to 7.6**,
4. start the system again and verify that it works correctly.

> **Important**  
> Each upgrade stage should end with starting the system and verifying correct operation before moving to the next version.

---

## 4. Upgrade Scope

A standard SPUMA DMS upgrade includes:

- stopping the `SPUMA_DataService` service,
- creating a backup of the current application files,
- replacing the application files with the new version,
- creating a database backup,
- executing database upgrade scripts,
- starting the `SPUMA_DataService` service,
- verifying the web application and the administration application.

---

## 5. Upgrade Procedure

### 5.1. Preparing the Maintenance Window

Before starting the work:

- inform users about the planned downtime,
- make sure that no one is logged in to the system,
- confirm access to:
  - the application server,
  - the database server,
  - the package containing the new application files,
  - the database upgrade scripts,
- verify that backups can be created and restored.

---

### 5.2. Stopping the SPUMA Service

On the application server, stop the following service:

```text
SPUMA_DataService
```

After stopping the service, make sure that the process has fully terminated and that no application files are locked by the system.

---

### 5.3. Backing Up the Current Application Files

Before replacing the files, create a full backup of the current application directory.

Recommended actions:

- back up the entire installation directory,
- store the backup in a separate location,
- label the backup with the version number and backup date.

Example backup directory name:

```text
SPUMA_backup_2026-05-25_preupgrade
```

> **Important**  
> The file backup is required to allow a fast rollback if an error occurs after the upgrade.

---

### 5.4. Replacing the Files with the New Version

Copy the files from the new version to the SPUMA installation directory while preserving the directory structure.

#### Notes for this Step

Do not overwrite the following configuration files:

- `spuma.ini` in the root directory,
- `ksef_ocrres.xsl` — if the file was modified locally,
- `config.json` in the `\Admin\assets\` directory,
- `config.json` in the `\Client\assets\` directory,
- `spuma.ini` in the `\SPUMA7_Host\Assemblies\` directory,
-  `licconf.ini` in the root directory.

#### Additional Recommendation

After copying the new version, compare the current configuration files with the versions included in the installation package and check whether any new configuration parameters have been introduced that must be added to the current environment.

> **Important**  
> Configuration files should be preserved from the existing environment unless the release documentation states otherwise.

---

### 5.5. Backing Up the Database

Before running database upgrade scripts, create a full backup of the SPUMA database.

The database backup should be created immediately before upgrading the database structure so that the environment can be restored to the pre-upgrade state if necessary.

> **Critical requirement**  
> Do not run database upgrade scripts without a current database backup.

---

### 5.6. Running Database Upgrade Scripts

After creating the backup, execute the scripts that upgrade the database structure and data to the version required by the new SPUMA DMS release.

Recommendations:

- execute the scripts in the correct order,
- monitor error messages,
- confirm that each script completes successfully,
- stop the process if an error occurs and do not continue without analyzing the problem.

If the upgrade includes multiple scripts, execute them according to the release documentation.

---

### 5.7. Starting the SPUMA_DataService Service

After upgrading the application files and database, start the following service again:

```text
SPUMA_DataService
```

After starting the service, verify:

- that the service starts correctly,
- that no startup errors are reported,
- that the application can access the database,
- that the communication port is available.

---

### 5.8. Verifying the Upgrade

After completing the upgrade, verify that the following applications start correctly:

- client: `https://domain:port/client/`,
- administration application: `https://domain:port/admin/`

The verification should include at least:

- opening the application in a browser,
- correct display of the login screen,
- ability to log in,
- correct database connection,
- no errors when starting basic functions.

If the system does not start correctly after the upgrade, analyze the service logs and consider restoring the environment from the created backups.

---

## 6. Security and Rollback Recommendations

If the upgrade fails, it must be possible to restore:

- the previous version of the application files,
- the previous version of the database.

Therefore, before starting the upgrade, make sure that you have:

- a backup of the installation directory,
- a database backup created immediately before running the upgrade scripts,
- confirmation that no users were working in the system during the upgrade.

---

## 7. Upgrade Checklist

- maintenance window scheduled,
- users informed about the downtime,
- confirmed that no one is working in the system,
- version-by-version upgrade path confirmed,
- `SPUMA_DataService` service stopped,
- current application files backed up,
- application files replaced,
- local configuration files preserved,
- configuration files compared with the new version,
- database backup created,
- database upgrade scripts executed,
- `SPUMA_DataService` service started,
- web client verified,
- SPUMA Admin application verified,
- correct operation confirmed before proceeding to the next version.

---

## 8. Example Upgrade Path

Example for an environment running version **7.4** that must be upgraded to version **7.6**:

1. create a backup,
2. upgrade from **7.4 to 7.5**,
3. start the system,
4. verify correct operation,
5. create another backup before the next stage,
6. upgrade from **7.5 to 7.6**,
7. start the system,
8. perform the final verification.

> **Important**  
> Do not perform a direct upgrade from **7.4 to 7.6** while skipping version **7.5**.