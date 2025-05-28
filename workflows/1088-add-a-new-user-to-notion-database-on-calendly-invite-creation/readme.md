# Calendly to Notion Integration

## Use cases:

- Automatically create new entries in a Notion database when someone schedules an event through Calendly.
- Track scheduled meetings and collect invitee information (name, email) in a structured format within Notion for reporting or follow-up purposes.
- Update a project management board in Notion with new meeting entries, allowing teams to easily visualize and manage their schedules and client interactions.

## How it works:

1.  **Calendly Trigger:** The workflow starts with a "Calendly Trigger" node, which listens for the `invitee.created` event. This means that whenever someone schedules an event using Calendly, the workflow is activated.
2.  **Notion:** The "Notion" node receives the data from the Calendly trigger. It then creates a new page in a specified Notion database ("b40628ca-9000-4576-ab2c-4ed3c37e6ee4"). The node configures the following properties:
    *   **Name (Title):**  Populates the title property with the invitee's name from the Calendly event data.
    *   **Email:**  Populates the email property with the invitee's email address.
    *   **Status:**  Sets the status property to a predefined option with the id "6ad3880b-260a-4d12-999f-5b605e096c1c". This could represent something like "Scheduled" or "To Do".

## Services:

-   Calendly
-   Notion

## Hashtags:

#n8n #Calendly #Notion #Automation #MeetingTracking
