# My Workflow

## Use cases:
- **User Onboarding:** Automates the process of welcoming new users by checking if they exist in a database (Google Sheets), adding them if they are new, and sending a welcome message via Telegram.
- **Returning User Notification:** Notifies returning users with a different welcome message in Telegram by checking their existing status in Google Sheets
- **Data Synchronization:** Keeps user information consistent between a trigger source, a Google Sheets database, and Telegram, ensuring that new users are added to the database and both new and returning users are notified.

## How it works:
1.  **Trigger Start:** The workflow begins with a trigger. The trigger type is generic and unspecified and needs to be configured to define when this workflow is run (e.g. Webhook, Cron schedule).
2.  **Trigger_Data:** Sets or transforms data received from the trigger event in the step above.
3.  **Find User:** Searches for user data in a Google Sheets spreadsheet. It likely uses an identifier from the trigger data to query the sheet.
4.  **Data to Save:** Formats and prepares data to be written to Google Sheets.
5.  **New?:** This "If" node checks if the user exists in Google Sheets, based on the output of the "Find User" node.
6.  **Write to Data Base:** If the user is new, the workflow writes the new user's information to a Google Sheets database.
7.  **Update status:** If the user exists, the workflow updates the existing user's status to a Google Sheets database.
8.  **Welcome message:** Sends a welcome message to the new user via Telegram.
9.  **Welcome back:** Sends a welcome back message to the existing user via Telegram.

## Services:
*   Google Sheets
*   Telegram

## Hashtags:
#n8n #automation #googleSheets #telegram #userOnboarding
