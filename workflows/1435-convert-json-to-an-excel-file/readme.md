# Webhook to Spreadsheet Exporter

## Use cases

- **Data Collection and Export:** Automatically collect data from a webhook and export it as a spreadsheet file. This is useful for gathering information from forms, surveys, or other applications.
- **API Data Extraction:** Extract data from an API endpoint that sends data via webhook and convert it into a spreadsheet for analysis or reporting.
- **Real-time Data Transformation:** Transform data received from a webhook in real-time into a spreadsheet format for immediate use.

## How it works

1.  **Webhook:** The workflow starts with a "Webhook" node, which listens for incoming POST requests at a specific path (`/c1616754-4dec-4b00-a8b5-d1cb5f75bf11`).
2.  **Item Lists:** The "Item Lists" node receives the data from the webhook (`body` parameter) and splits it into individual items. This suggests that the webhook likely receives a payload containing a list of items.
3.  **Spreadsheet File:** The "Spreadsheet File" node converts the list of items into an XLSX spreadsheet file.
4.  **Respond to Webhook:** The "Respond to Webhook" node sends the generated spreadsheet file as a response to the initial webhook request. The filename of the spreadsheet is dynamically set based on the `filename` query parameter passed in the webhook request; if no filename is provided it defaults to 'Export.xlsx'. The `content-disposition` header ensures the response is treated as a file attachment.

## Services

-   No external services beyond n8n are explicitly utilized in this workflow. However, the webhook would be triggered by an external system sending a POST request.

## Hashtags

#n8n #webhook #spreadsheet #automation #dataexport
