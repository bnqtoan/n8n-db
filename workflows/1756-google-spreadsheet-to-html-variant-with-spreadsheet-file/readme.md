# Google Sheets to HTML via Webhook

## Use cases:

- **Automated Reporting:** Generate HTML reports from Google Sheets data for daily, weekly, or monthly summaries.
- **Data Presentation:** Transform spreadsheet data into visually appealing HTML tables for embedding on websites or sharing with stakeholders.
- **Real-time Data Display:** Use a webhook to trigger updates to the HTML file whenever the Google Sheet is modified, ensuring the displayed data is always current.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a "Webhook" node, listening for incoming HTTP requests on a specific path (`/08569699-fea2-4856-80aa-fe878ab9dd4f`). When a request is received, it triggers the workflow. The response mode is set to 'lastNode' so the last node ("Create HTML file") will provide the response data.
2.  **Read from Google Sheets:** The "Read from Google Sheets" node connects to a specified Google Sheet (ID: `1uFISwZJ1rzkOnOSNocX-_n-ASSAznWGdpcPK3_KCvVo`) using the provided Google Sheets OAuth2 API credentials. It retrieves the data from the sheet.
3.  **Create HTML file:** The "Create HTML file" node receives the data from Google Sheet node and transforms that data into an HTML file.

## Services:

-   Google Sheets

## Hashtags:

#n8n #googleSheets #html #automation #webhook
