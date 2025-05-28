# Airtable markdown to html

## Use cases:
- Automatically convert markdown formatted video descriptions in Airtable to HTML for website display.
- Update video descriptions in Airtable from markdown to HTML format when a webhook is triggered, based on whether a single record or all records need updating.
- Use the workflow to sync video descriptions from an external source (via webhook) to Airtable, ensuring the descriptions are properly formatted for web use.

## How it works:
1.  The workflow starts with a **Webhook** node that listens for incoming requests to a specific path.
2.  An **If** node checks if the request contains a `recordId` parameter. This determines if the workflow should process a single record or all records.
3.  **Single Record Path**:
    *   If a `recordId` is present, the workflow uses an **Airtable** node to retrieve the specified record from the "📺 Videos" table in the "360Creators" base.
    *   A **Markdown** node converts the "📥 Video Description" field (which is assumed to be in Markdown format) from the retrieved record into HTML.
    *   Another **Airtable** node updates the same record, setting the "Video description HTML" field to the converted HTML.
4.  **All Records Path**:
    *   If no `recordId` is present, the workflow uses an **Airtable** node to retrieve records from the "📺 Videos" table in the "360Creators" base.
    *   A **Markdown** node converts the "📥 Video Description" field (which is assumed to be in Markdown format) from the retrieved record into HTML.
    *   Another **Airtable** node updates the record, setting the "Video description HTML" field to the converted HTML and sets Unpublished to false.

## Services:
-   Airtable

## Hashtags:
#n8n #Airtable #Markdown #HTML #Automation
