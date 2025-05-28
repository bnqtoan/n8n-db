# Baserow markdown to html

## Use cases:

- **Automated Content Updates:** Automatically convert Markdown descriptions in your Baserow database to HTML whenever they are updated, ensuring consistent formatting across different platforms.
- **Real-time Formatting:** Trigger HTML conversion from Markdown in Baserow upon receiving a webhook request with updated content, allowing for near real-time updates.
- **Batch Content Processing:** Process and convert all Markdown entries in a Baserow table to HTML format for bulk updates or migrations.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a "Baserow sync video description" Webhook node, waiting for a POST request containing data. This is triggered when data is sent to the specified webhook URL. The query parameter `rec` determines if one record or all records from Baserow are processed.
2.  **Conditional Check:** The "Check if it's 1 record or all records - Baserow" node checks if the webhook payload contains the query parameter `rec`.
3.  **Fetch Baserow Data:**
    -   **Single Record:** If `rec` parameter exists, the "Get single record from baserow" node retrieves a specific record from the Baserow table (table ID 260956) using the `rec` parameter as the row ID.
    -   **All Records:** If `rec` parameter does not exists, the "Get all records from baserow" node fetches all records from the Baserow table (table ID 260956).
4.  **Markdown to HTML Conversion:**
    -   **Single Record:** The "Convert markdown to HTML (single)" node converts the Markdown content in the `📥 Video Description` field of the single record to HTML.
    -   **All Records:** The "Convert markdown to HTML (all records)" node converts the Markdown content in the `📥 Video Description` field of all records to HTML.
5.  **Update Baserow:**
    -   **Single Record:** The "Update single record in baserow" node updates the same Baserow record with the converted HTML data in field ID 2314683.
    -   **All Records:** The "Update all records in baserow" node updates the same Baserow records with the converted HTML data in field ID 2314683.

## Services:

-   Baserow

## Hashtags:

#n8n #automation #Baserow #markdown #HTMLconversion
