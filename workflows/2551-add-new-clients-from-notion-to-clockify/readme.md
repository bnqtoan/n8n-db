# Add new clients from Notion to Clockify

## Use cases:

- **Automatic Client Onboarding:** When a new client is added to a Notion database, automatically create a corresponding client entry in Clockify, eliminating manual data entry and ensuring consistency across platforms.
- **Streamlined Time Tracking:** Simplify time tracking by automatically syncing client information from Notion to Clockify, enabling accurate project allocation and reporting.
- **Centralized Client Management:** Keep client information synchronized between Notion (for CRM and project management) and Clockify (for time tracking and billing), improving overall client management efficiency.

## How it works:

The workflow is triggered when a new entry is added to a specified Notion database, which should contain client information.

1.  **Notion Trigger on new client:** This node monitors a Notion database for new entries. It polls the database at a defined interval (e.g., every minute) to detect new clients. You'll need to connect your Notion account and specify the ID of the database containing client information.
2.  **Add client to Clockify:** Once a new client is detected in Notion, this node creates a corresponding client entry in Clockify.  It extracts the client's name from the Notion database entry (specifically, from the "Name" property) and uses it to create the new Clockify client. You'll need to connect your Clockify account and select the appropriate workspace.

## Services:

-   Notion
-   Clockify

## Hashtags:

#n8n #Notion #Clockify #Automation #ClientManagement
