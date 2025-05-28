# Google Sheets to Mattermost Notification

## Use cases:

- Receive instant Mattermost notifications when new data is added to a specific Google Sheet, such as new user registrations or updated contact information.
- Monitor a Google Sheet containing sales leads and get notified in Mattermost about new leads as soon as they are added.
- Track project tasks in a Google Sheet and receive Mattermost alerts when new tasks are created or assigned.

## How it works:

This workflow automates the process of monitoring a Google Sheet for new data and sending a Mattermost notification whenever a new row is added.

1.  **Execute every 45 mins:** The workflow starts with an Interval node that triggers the workflow execution every 45 minutes.
2.  **Read data:** The Google Sheets node fetches all the data from the specified Google Sheet using the provided Sheet ID and OAuth2 authentication.
3.  **Check if new data:** The Function node compares the fetched data with the previously stored data (using workflow static data). It identifies new entries by checking their IDs and creates a new array containing only the new items.
4.  **Send message:** The Mattermost node sends a message to a specified Mattermost channel (configured within the Mattermost credentials). The message includes information extracted from the new Google Sheet row, such as ID, name, and email.

## Services:

-   Google Sheets
-   Mattermost

## Hashtags:

#n8n #automation #GoogleSheets #Mattermost #notification
