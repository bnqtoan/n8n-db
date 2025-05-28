# Get event triggered notifications / updates on preferred messaging channels with TwentyCRM

## Use cases

- **Real-time notifications on record deletion:** Receive instant email alerts when a record is deleted in TwentyCRM, ensuring timely awareness of critical data changes.
- **Event logging and auditing:** Automatically log all TwentyCRM events to a Google Sheet for auditing and analysis purposes.
- **Customized channel notifications:** Route different event types (e.g., record creation, updates) to different messaging channels like Slack for immediate team awareness and email for detailed information.

## How it works

1.  **TwentyCRM Event Trigger:** The workflow starts when a new event occurs in TwentyCRM. This is triggered by a webhook set up in TwentyCRM that sends event data to n8n.
2.  **Data Filtering:** The workflow filters the incoming data to extract relevant information such as event name, object metadata (ID, name), and record details (ID, type). This is done using the "filter required data #eventType mandatory" node.  It's important to include `eventType` to ensure correct workflow execution.
3.  **Event Logging:** All event data is appended to a designated Google Sheet for record-keeping and analysis ("events log" node).
4.  **Message Channel Evaluation:** The workflow evaluates the event type. If the event is a "delete" event (based on `eventName`), it proceeds to send an email notification. Otherwise, it sends a message to a Slack channel ("message channel evaluation" node).
5.  **Email Notification (Delete Event):** If a record is deleted, an email is sent via Gmail with details of the deleted record, including object metadata ID and record ID ("email channel for delete eventType" node).
6.  **Slack Notification (Other Events):** For all other event types, a message is sent to a specified Slack channel. The message includes the event name, object metadata ID, and record ID ("message channel for all other eventTypes" node).

## Services

-   **TwentyCRM:** CRM platform that triggers the workflow via webhook events.
-   **Google Sheets:** Used for logging and auditing all TwentyCRM events.
-   **Gmail:** Sends email notifications for record deletion events.
-   **Slack:** Sends real-time notifications for other event types.

## Hashtags

#n8n #TwentyCRM #automation #notifications #workflow
