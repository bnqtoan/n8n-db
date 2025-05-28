# Google Sheets to Discord Notifier

## Use cases:

- **Real-time Monitoring:** Get instant Discord notifications whenever stock prices, investment data, or sales figures are updated in a Google Sheet, allowing for immediate reactions and informed decisions.
- **Collaborative Data Management:** Alert a team channel on Discord when project milestones, task assignments, or status reports are modified in a shared Google Sheet.
- **Automated Reporting:** Automatically send daily or weekly summaries of key performance indicators (KPIs) from a Google Sheet to a Discord channel for quick overview and discussion.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts with the "On new or updated row" node, which monitors a specified Google Sheet for new or modified rows in the "Security Code" column.
2.  **Convert to ASCII Table:** The "Convert to ASCII table" node receives the Google Sheets data and converts it into a readable ASCII table format, using a JavaScript code to configure the columns to display ("Security Code", "Price", "Quantity").
3.  **Send message:** The "Send message" node sends the formatted ASCII table as a message to a designated Discord channel via a Webhook URL.

## Services:

-   Google Sheets
-   Discord

## Hashtags:

#n8n #automation #workflow #googleSheets #discord #notification
