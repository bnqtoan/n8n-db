# Fetch the Most Recent Document from Google Drive

## Use cases:

- **Automated Report Generation:** Automatically summarize newly added reports in a Google Drive folder and store the summaries in a Google Sheet for easy tracking and analysis.
- **Content Aggregation:** Condense information from multiple documents added to Google Drive into a single spreadsheet, allowing for efficient content overview and comparison.
- **Document Archiving:** Summarize and archive important documents for compliance or knowledge management purposes.

## How it works:

1.  **Google Drive Trigger:** The workflow starts with a Google Drive trigger, monitoring a specific folder for newly created files (specifically documents).
2.  **Google Docs:** Retrieves the content of the newly created document from Google Drive.
3.  **AI Summarization:** Uses an AI model (OpenAI's `GPT-4O-MINI`) to summarize the content of the document.  The AI Tools Wikipedia and Calculator are available.
4.  **Google Sheets:** Appends the document's metadata (uploader's name and email) along with the generated summary to a specified Google Sheet.
5.  **Data Storage:** The Google sheet's store the data for quick access.

## Services:

-   Google Drive
-   Google Docs
-   Google Sheets
-   OpenAI

## Hashtags:

#n8n #googleDrive #googleDocs #googleSheets #automation #AI #summarization #workflow
