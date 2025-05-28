# FileMaker Data Management Workflow

## Use cases:

- **New Contact Creation and Update:** Automatically create a new contact record in FileMaker when triggered manually, then update the record with additional information.
- **Data Enrichment:** Use this workflow to create initial records, and then enrich them over time with more data as it becomes available.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute the "On clicking 'execute'" trigger node.
2.  **Create Initial Record:** The first "FileMaker" node creates a new record in the "My Form Layout" of your FileMaker database. It populates the "first\_name" and "last\_name" fields with "Harshil" and "Agrawal", respectively.
3.  **Edit the Record:** The "FileMaker2" node edits the previously created record. It uses the `modId` and `recordId` (retrieved from the first "FileMaker" node's response) to identify the correct record and updates the "address\_country" field to "Germany".
4.  **Another Filemaker Node:** The "FileMaker3" node perform an action on the filemaker using the record id of the first Filemaker node. Since the action isn't specified, the workflow is incomplete.

## Services:

-   FileMaker

## Hashtags:

#n8n #FileMaker #automation #CRM #DataManagement
