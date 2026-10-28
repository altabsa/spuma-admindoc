---
id: licensing
title: Obtaining and Activating the License
sidebar_label: License
sidebar_position: 4
description: Obtaining and activating the license
---

# Obtaining and Activating the License

A license issued by the Altab licensing server is required to run the SPUMA system. The process consists of preparing a file containing the serial number, automatically sending a license request, and downloading the assigned license in the SPUMA Admin application.

## 1. Stop the Service

Before starting the license configuration, stop the following Windows service:

~~~text
SPUMA Data Service
~~~

## 2. Obtain the `licconf.ini` File

The `licconf.ini` file contains the serial number used to identify the installation. It can be obtained in one of the following ways.

#### Existing AltabLicensing Server

If other Altab products are already running in the environment:

1. locate the `conf.ini` file in the directory of the existing **AltabLicensing** server,
2. copy the file,
3. rename the copy to:

~~~text
licconf.ini
~~~

#### New Installation Without Other Altab Products

If there is no licensing server or other Altab products in the environment, contact the vendor to obtain the appropriate `licconf.ini` file.

> **Important**  
> Do not modify the contents of the `licconf.ini` file manually.

## 3. Copy the File

Copy the following file:

~~~text
licconf.ini
~~~

to the root directory of the **SPUMA Data Service**.

## 4. Send the License Request

Restart the following service:

~~~text
SPUMA Data Service
~~~

After startup, the service will automatically connect to the Altab licensing server and send a license request.

At this stage, wait until Altab assigns the appropriate license to the installation serial number.

## 5. Download the License

After receiving confirmation that the license has been assigned:

1. log in to the **SPUMA Admin** application,
2. open the **User Menu**,
3. select **Check License**,
4. click **Download**.

The system will download the current license from the Altab licensing server.

## 6. Verification

After downloading the license, verify that:

- the application does not display a missing license message,
- the appropriate modules and functions are available,
- the license scope matches the ordered configuration.

If the license is not available, make sure that Altab has completed the license assignment process and that the SPUMA server has network access to the licensing server.