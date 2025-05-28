# Google Sheets to HTML Table via Webhook

## Use cases:

- **Displaying Google Sheets data on a website:**  Automatically generate an HTML table from Google Sheets data and serve it via a webhook, allowing you to easily embed dynamic tables into web pages or applications.
- **Real-time data visualization:** Use this workflow to create dashboards or reports that automatically update with the latest data from your Google Sheets, providing a near real-time view of your information.
- **Creating shareable data snapshots:** Generate a static HTML page containing the data from a Google Sheet for easy sharing and archival purposes.

## How it works:

1. **Webhook Trigger:** The workflow starts with a "Webhook" node, listening for incoming HTTP requests at a specific URL.  This URL acts as the entry point for triggering the workflow.
2. **Read Google Sheet:** Once triggered, the "Read from Google Sheets" node fetches data from a specified Google Sheet using the provided Sheet ID and credentials. It retrieves all data present in the sheet.
3. **Build HTML Table:** The "Build HTML" node receives the data from Google Sheets and transforms it into an HTML table.  It dynamically creates the table headers based on the column names and populates the table rows with the data from the sheet.  It also includes Bootstrap CSS for styling.
4. **Respond to Webhook:** The "Respond to Webhook" node sends the generated HTML code back as the response to the initial HTTP request. It sets the Content-Type to "text/html" to ensure the browser renders the content as HTML.

## Services:

- Google Sheets
- Bootstrap CDN

## Hashtags:

#n8n #GoogleSheets #HTML #Webhook #DataVisualization
