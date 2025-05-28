# New Notion Page to Mattermost Notification

## Use cases:

*   **Team-Specific Notifications:** Automatically notify a specific team (e.g., Marketing) in Mattermost when a new page is added to a designated Notion database.
*   **Meeting Note Announcements:** Immediately alert the team about newly created meeting notes, including the agenda, date, and a direct link to the Notion page.
*   **Streamlined Information Sharing:** Ensure that important updates and documents added to Notion are promptly communicated to relevant stakeholders in Mattermost, reducing the need to manually check for updates.

## How it works:

1.  **Notion Trigger:** The workflow starts with a "Notion Trigger" node that monitors a specific Notion database ("6ea34c0d-67e8-4614-ad5c-68c665a34763") for new pages added. It checks every hour.
2.  **Conditional Check (IF):**  An "IF" node checks if the "Team" property of the new Notion page is "Marketing".
3.  **Mattermost Notification (if condition is met):** If the "Team" property is "Marketing", a "Mattermost" node sends a message to a specific Mattermost channel ("64cae1bh6pggtcupfd4ztwby4r"). The message includes:
    *   A notification that new meeting notes were added.
    *   The agenda from the Notion page's "Agenda" property.
    *   The date of the meeting from the Notion page's "Date" property.
    *   A direct link to the Notion page. The link is created from the Notion page's ID, with hyphens removed.
4.  **NoOp (if condition is not met):** If the "Team" property is not "Marketing", nothing happens; a "NoOp" node does nothing.

## Services:

*   Notion
*   Mattermost

## Hashtags:

#n8n #Notion #Mattermost #Automation #Notifications
