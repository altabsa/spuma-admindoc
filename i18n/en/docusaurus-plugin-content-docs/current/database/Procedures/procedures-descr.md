---
sidebar_position: 6
---

# Detailed Procedure Description

## APR_BEFOREADDTOSAP Procedure

#### Operation

Manages operations sent to SAP.

#### Required

No.

#### Description

The procedure returns a list of operations that should be sent to SAP. The original request passed in the parameters is always returned at the end.

The procedure can also perform custom validations before sending a document to SAP Business One. Validation can use data from both SPUMA and SAP Business One. If the procedure returns a non-empty value in the `errormsg` column, sending the document to SAP is stopped and the returned content is displayed to the user as a message.

#### Input Parameters

- `@documents_id` - SPUMA document ID.
- `@classes_id` - document class ID.
- `@method` - request method.
- `@resource` - resource targeted by the request.
- `@content` - request content.

#### Expected Output

- `method` - operation method.
- `resource` - operation resource.
- `content` - operation content.
- `errormsg` - optional validation message.

#### Example

##### Adding a Business Partner to SAP Business One

For the `BusinessPartners` resource, numbering series ID `84` is added to the request and used when creating a supplier.

```sql
IF @resource = 'BusinessPartners'
BEGIN
    SELECT @content = REPLACE(
        CONVERT(NVARCHAR(MAX), @content),
        '"BPAddresses"',
        '"Series": 84,' + '"BPAddresses"'
    );
END
```

##### Adding a Draft Document

For the `Drafts` resource, the `U_KSEF_DATA_DO` field (**KSeF Data Do / Delivery / Service Date**) is filled with the value from the `VatDate` field.

```sql
IF @resource = 'Drafts'
BEGIN
    SET @content = JSON_MODIFY(
        CONVERT(NVARCHAR(MAX), @content),
        '$.U_KSEF_DATA_DO',
        JSON_VALUE(CONVERT(NVARCHAR(MAX), @content), '$.VatDate')
    );
END
```

##### Base Document Validation

For the `Drafts` resource, the procedure checks whether the document has a base document of type PZ. If not, a validation message is returned.

```sql
DECLARE @errormsg NVARCHAR(MAX)

IF @resource = 'Drafts'
   AND NOT EXISTS (
       SELECT '*'
       FROM DOCUMENTS
       WHERE id = @documents_id
         AND basetype = 1
         AND COALESCE(baseid, '') <> ''
   )
BEGIN
    SET @errormsg = N'Faktura magazynowa musi posiadać dokument PZ jako bazowy!'
END
```

:::note
For the validation message to be handled by SPUMA, the `@errormsg` variable must be returned by the procedure in a column named exactly `errormsg`.
:::

#### Notes

The request structure must remain valid, especially the JSON format passed in `@content`.

---

## APR_BEFOREOCRFILL Procedure

#### Operation

The procedure is called before fields recognized by OCR are copied to document properties.

#### Required

No.

#### Description

After a document is processed by OCR, the system analyzes the recognized fields and, based on the [class attribute configuration](/i18n/en/docusaurus-plugin-content-docs/current/spuma-admin/Klasy/atrybuty.md), copies values to the corresponding document fields.

Before this mapping is performed, the `APR_BEFOREOCRFILL` procedure is executed. It allows OCR-recognized values to be modified before they are stored in document attributes.

#### Input Parameters

- `@documents_id` - SPUMA document ID.
- `@classes_id` - document class ID.

#### Expected Output

- modified temporary table `#NVALUES`.

#### Examples

Remove all characters other than digits, `/`, and `-` from the document number for class ID `6`:

```sql
IF (@classes_id = 6)
BEGIN
    DECLARE @nr nvarchar(200)

    SELECT @nr = pvalue
    FROM #NVALUES
    WHERE pcode = 'SYS_DOCNUM';

    WHILE PATINDEX('%[^0-9/-]%', @nr) > 0
        SET @nr = REPLACE(
            @nr,
            SUBSTRING(@nr, PATINDEX('%[^0-9/-]%', @nr), 1),
            ''
        );

    UPDATE #NVALUES
    SET pvalue = @nr
    WHERE pcode = 'SYS_DOCNUM';
END
```

Remove the `VSW` string from the document number:

```sql
UPDATE #NVALUES
SET pvalue = REPLACE(pvalue, 'VSW', '')
WHERE pcode = 'SYS_DOCNUM';
```

#### Notes

Before the procedure is called, the temporary table `#NVALUES` is created.

Example data in the `#NVALUES` temporary table:

| `pcode` | `pvalue` | Notes |
| --- | --- | --- |
| `SYS_DOCNUM` | `31/1/2/061190` | Always passed |
| `SYS_DOCDATE` | `02-01-2012` | Always passed |
| `PH` | `D102<!>ACME S.A<!>ul. Polna 32<!>Warszawa<!>02672<!>Poland` | Passed only when the class contains the corresponding custom attribute |
| other fields, e.g. `Termin` | `30-01-2012` | Passed only when the OCR field is configured for the attribute in the `OCR field` property |

---

## APR_DICTIONARYVALUES Procedure

#### Operation

Retrieves data for System Dictionaries.

#### Required

No.

#### Description

When the SPUMA web application starts, it populates System Dictionaries.

Data is retrieved by calling the `APR_DICTIONARYVALUES` procedure separately for each System Dictionary.

#### Input Parameters

- `@companiesdicts_id` - System Dictionary ID from the [COMPANIESDICTS](/i18n/en/docusaurus-plugin-content-docs/current/database/Tables/tables-descr.md#companiesdicts-table) table.

#### Expected Output

A dictionary value table containing the following columns:

- `value` - dictionary value,
- `description` - value description.

#### Example

Example:

- for dictionary `3` - retrieves from SAP Business One a list of purchased non-inventory items that do not have **Characteristic 3** selected,
- for dictionary `5` - retrieves the list of users from SAP Business One.

```sql
DECLARE @rettb TABLE (
    [value] NVARCHAR(100),
    [description] NVARCHAR(250)
);

DECLARE @dbname NVARCHAR(100);

SELECT @dbname = dbname
FROM COMPANIESDICTS a
JOIN COMPANIES b ON a.companies_id = b.id
WHERE a.[id] = 1;

DECLARE @script NVARCHAR(MAX) = 'use [' + @dbname + '] ';

-- for each dictionary

IF @companiesdicts_id = 3
    SET @script = @script +
    'select '''' as [value], ''BRAK'' as [description]
    UNION
    SELECT
        ItemCode AS [value],
        isnull(ItemCode, '''') + '' - '' + isnull(ItemName, '''') AS [description]
    FROM [OITM]
    WHERE PrchseItem = ''Y''
      AND InvntItem = ''N''
      AND QryGroup3 = ''N''';

IF @companiesdicts_id = 5
    SET @script = @script +
    'select '''' as [value], ''BRAK'' as [description]
    UNION
    SELECT
        USER_CODE AS [value],
        U_NAME AS [description]
    FROM OUSR';

INSERT INTO @rettb
EXEC sp_executesql @script;

SELECT *
FROM @rettb;
```

#### Notes

Separate data retrieval logic is defined for each System Dictionary based on `@companiesdicts_id`.

---

## APR_FORMATEMAIL Procedure

#### Operation

Formats outgoing messages.

#### Required

Yes.

#### Description

Before sending an e-mail, SPUMA executes the `APR_FORMATEMAIL` procedure and generates the message in HTML format based on its result.

SPUMA is installed with a predefined `APR_FORMATEMAIL` procedure. It is recommended to modify only the `BODY` column.

#### Input Parameters

- `@messages_id` - ID of the message being sent.

#### Expected Output

The procedure should return one row containing the following columns:

- `SUBJECT` - message subject.
- `TO` - recipient e-mail addresses separated by semicolons.
- `FROM` - sender e-mail address.
- `CC` - carbon copy recipient e-mail addresses separated by semicolons.
- `BCC` - blind carbon copy recipient e-mail addresses separated by semicolons.
- `BODY` - message content.

#### Notes

In the `BODY` column, the `{DOCSIG}` string is replaced with the unique document signature number. This allows the e-mail to contain a direct link to the document related to the message.

---

## APR_GETUSER_ALERTS Procedure

#### Operation

Displays custom alerts.

#### Required

No.

#### Description

SPUMA includes a built-in alert mechanism that displays information including:

- unread messages,
- documents requiring a comment,
- OCR errors.

The `APR_GETUSER_ALERTS` procedure allows custom alerts to be defined.

The procedure is called periodically by SPUMA. Returned data is displayed in the web application in the alerts section.

Alerts are associated with documents.

#### Input Parameters

- `@users_id` - ID of the logged-in user.
- `@auto` - unsupported parameter, always `0`.

#### Expected Output

The procedure should return a table containing documents assigned to alerts.

Required columns:

- `folderpath` - alert name represented as a path.
- `document_id` - document ID.
- `sumcount` - specifies whether document counts from child items are added to the parent item:
  - `1` - yes,
  - `0` - no.
- `isalarm` - specifies whether the document count is included in the main alert counter:
  - `1` - yes,
  - `0` - no.

Example `folderpath` value:

```text
Faktury\Przeterminowane
```

is displayed as:

```text
Faktury
└── Przeterminowane (1)
```

#### Example

Alert displaying invoices that have not yet been linked to a document in the ERP system.

Assumptions:

- invoice class ID: `6`,
- the document belongs to the logged-in user,
- the document is in the repository,
- missing `objectid` in the `DOCUMENTREF` table means that there is no relationship with an ERP document.

```sql
DECLARE
    @class_id INT = 6

INSERT @ret
SELECT
    'Faktury\Do zaksięgowania',
    t0.id,
    0,
    0
FROM DOCUMENTS t0
LEFT JOIN DOCUMENTREF t1
    ON t0.id = t1.documents_id
WHERE
    t0.users_id = @users_id
    AND t0.classes_id = @class_id
    AND t0.docstatus = 3
    AND t1.objectid IS NULL;

IF EXISTS (SELECT 1 FROM @ret)
    SELECT * FROM @ret;
```

#### Notes

- A user alert should not return a large number of records.
- An alert should be simple and clear so that the user can quickly identify items requiring action.

---

## APR_TRANSACTION Procedure

#### Operation

Responds to database changes - equivalent to SQL triggers.

#### Required

No.

#### Description

The `APR_TRANSACTION` procedure is called during add, update, and delete operations in the SPUMA database.

For add and update operations, the procedure is called:

- before changes are written to the database,
- after changes are written, but before the transaction is committed.

The procedure allows:

- validation of saved data,
- transaction cancellation when specified conditions are met,
- additional operations after data changes, e.g. writing data to the ERP database.

#### Input Parameters

- `@optype` - operation type:
  - `A` - after add,
  - `AB` - before add,
  - `U` - after update,
  - `UB` - before update,
  - `D` - before delete.
- `@users_id` - ID of the user performing the operation.
- `@objecttype` - name of the object affected by the operation.
- `@objectid` - ID of the object affected by the operation.

#### Expected Output

- empty text `''` - the transaction is committed and data is saved,
- any text - the transaction is cancelled and the returned text is displayed to the user as a message.

#### Example

Validation of the `SUMAP` header attribute value for documents of the **ZAMOWIENIA** class. If the value exceeds `10000`, the save operation is cancelled.

```sql
IF @optype = 'U' AND @objecttype = 'WFDocument'
BEGIN
    DECLARE
        @cls_id INT,
        @cls_name NVARCHAR(100),
        @cmp_id INT,
        @attr_id INT,
        @attr_value FLOAT = 0;

    SELECT
        @cls_id = a.classes_id,
        @cls_name = b.[name],
        @cmp_id = a.companies_id,
        @attr_id = c.id
    FROM DOCUMENTS a
    JOIN CLASSES b
        ON a.classes_id = b.id
    JOIN CLASSATTRIBS c
        ON c.objtype = 0
        AND c.[objid] = b.id
        AND c.iscolumn = 0
        AND UPPER(c.[name]) LIKE 'SUMAP'
    WHERE a.id = @objectid;

    IF UPPER(@cls_name) LIKE N'ZAMOWIENIA'
    BEGIN
        BEGIN TRY
            SELECT
                @attr_value = CAST([value] AS FLOAT)
            FROM DOCUMENTS_PROPERTIES
            WHERE documents_id = @objectid
              AND attribs_id = @attr_id;
        END TRY
        BEGIN CATCH
            SET @attr_value = 0;
        END CATCH;

        IF @attr_value > 10000
        BEGIN
            SELECT N'Wartość zamówienia nie może przekraczać 10 000 !!!';
            RETURN;
        END
    END
END
```

#### Notes

The technical `APB_DEBUG` table can be used to inspect parameters passed to the procedure:

```sql
INSERT INTO APB_DEBUG (
    optype,
    users_id,
    objecttype,
    objectid
)
VALUES (
    @optype,
    @users_id,
    @objecttype,
    @objectid
);
```