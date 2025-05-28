# Save Telegram reply to journal spreadsheet

## Use cases:

- **Daily journaling:** Automatically save your daily journal entries from Telegram to a Google Sheet.
- **Mood tracking:** Record your mood and associated notes by replying to a Telegram message, storing the data in a structured spreadsheet.
- **Habit tracking:** Log your progress on specific habits by replying to a bot's prompt, saving the date and details in a Google Sheet for analysis.

## How it works:

1.  **Telegram Trigger ("Get journal reply"):**  This workflow starts when a new message is received by the n8n Telegram trigger. It is configured to listen for `message` updates.
2.  **Parse Message ("Parse message"):** This function node processes the Telegram message.  It checks if the message is a reply to a specific bot (`BOT_USERNAME`) and originates from a specific user (`YOUR_USERNAME`). It extracts the date from the original bot message, assuming it's formatted as "SOME CUSTOM MESSAGE: YYYY-MM-DD", and the journal entry from the reply. The node returns the date and the entry.
3.  **Add entry to sheet ("Add entry to sheet"):** This Google Sheets node takes the extracted date and journal entry and appends them as a new row to a specified Google Sheet (`YOUR_SPREADSHEET_ID`).

## Services:

-   Telegram
-   Google Sheets

## Hashtags:

#n8n #Telegram #GoogleSheets #Automation #Journaling
