# Calendly Event Trigger Workflow

## Use cases

*   **Real-time Notifications:** Send instant notifications to a team channel (e.g., Slack, Microsoft Teams) whenever a new Calendly invitee is created or an existing one is canceled, keeping everyone informed about schedule changes.
*   **Automated Database Updates:** Automatically update a database (e.g., Google Sheets, Airtable) with invitee information upon creation or cancellation, providing a centralized record of appointments and cancellations.

## How it works

This workflow is triggered by events from Calendly. Specifically, it listens for two types of events: `invitee.created` and `invitee.canceled`. When either of these events occurs in Calendly, the workflow is activated.

The `Calendly Trigger` node is the starting point. It's configured to listen for the specified Calendly events using the provided Calendly API credentials.  Currently, it does not perform any further actions as there are no connections defined to other nodes to process the event data. To make this workflow useful, you would need to connect this trigger to other nodes that process the Calendly event data.

## Services

*   Calendly

## Hashtags

#n8n #calendly #automation #scheduling #webhook
