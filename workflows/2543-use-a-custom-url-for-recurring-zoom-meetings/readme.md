# Zoom Meeting Auto-Redirect Workflow

## Use cases:

*   **Automated Recurring Meeting Link Updates:** Automatically updates a WordPress page with the latest Zoom meeting join URL for a recurring meeting. This ensures users always have the correct link.
*   **Website Redirect for Seamless Meeting Entry:** Creates a seamless experience for meeting participants by automatically redirecting them to the Zoom meeting from a website.
*   **Meeting Update Notifications:** Notifies a Slack channel whenever the Zoom meeting details (specifically the join URL) have been updated.

## How it works:

1.  **Schedule Trigger:** A "Schedule Trigger" node initiates the workflow. It's configured to run every 360 days at 3 AM.
2.  **Zoom:** The "Zoom" node creates a new Zoom meeting using the provided credentials (OAuth2). The meeting is configured with specific settings like muting participants on entry, allowing participants to join before the host, and enabling participant video.  The timezone is set to "America/New_York".
3.  **Wordpress:** The "Wordpress" node updates the content of a specified WordPress page (page ID: 123). The content is updated to include a meta refresh tag that automatically redirects users to the Zoom meeting's `join_url` obtained from the "Zoom" node. It also displays a "Redirecting, please wait a moment. Meeting will begin shortly…" message.
4.  **Slack:** The "Slack" node sends a message to a specified Slack channel ("abc123"). The message includes the updated Zoom meeting join URL and a link to the n8n workflow.

## Services:

*   Zoom
*   WordPress
*   Slack

## Hashtags:

#n8n #automation #zoom #wordpress #slack #meetingautomation
