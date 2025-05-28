# Receive a Mattermost message when new data gets added to Airtable

## Use cases:

*   **Data Entry Notification:** Receive instant notifications in a Mattermost channel whenever new data is added to a specific Airtable base and table. This is useful for teams tracking project progress, sales leads, or customer feedback.
*   **Real-time Monitoring:** Monitor additions of new data in Airtable and get immediate alerts in Mattermost. Allowing quick responses when critical data is entered.

## How it works:

This workflow automates the process of sending Mattermost messages whenever new data is added to an Airtable table. Here's the breakdown:

1.  **Airtable Trigger:** The workflow starts with an "Airtable Trigger" node. This node monitors a specific Airtable base and table (`Data` table in this case) for new records. It triggers the workflow whenever the field `Created` is filled in.
2.  **Mattermost:** Once a new record is detected in Airtable, the "Mattermost" node sends a message to a specified Mattermost channel. The message includes a notification that new data was added, along with the ID and Name values from the new Airtable record.

## Services:

*   Airtable
*   Mattermost

## Hashtags:

#n8n #Airtable #Mattermost #Automation #Notifications
