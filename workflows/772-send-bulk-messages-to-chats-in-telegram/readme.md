# Google Sheets to Telegram Notifier

## Use cases:

*   **Daily Report Notifications:** Automatically send a summary of new data added to a Google Sheet to a Telegram group every day.
*   **Threshold Alerts:** Notify a Telegram user when a specific value in a Google Sheet exceeds a predefined threshold.
*   **Batch Data Updates:** Process a large Google Sheet and send updates or notifications in smaller, manageable batches to a Telegram channel.

## How it works:

This workflow automates sending data from a Google Sheet to a Telegram chat.

1.  **Trigger:** The workflow starts when you manually click the "Execute" button.
2.  **Fetch Data:** The "Google Sheets" node retrieves data from the specified range (A:A) in your Google Sheet.
3.  **Split into Batches:** The "SplitInBatches" node divides the retrieved data into smaller batches of 30 items each. This is useful for handling large datasets and avoiding exceeding API rate limits.
4.  **Send to Telegram:** The "Telegram" node sends a message "Hello" to a Telegram chat. The `chatId` is dynamically populated from the 'Chat ID' value from the "SplitInBatches" node, and sends Hello message to the chat ID.
5.  **Wait:** The "Wait1" node pauses the workflow for 30 seconds. This likely prevents rate limiting when sending multiple messages to Telegram in quick succession.  The workflow then loops back to SplitInBatches.

## Services:

*   Google Sheets
*   Telegram

## Hashtags:

#n8n #googleSheets #telegram #automation #notifications
