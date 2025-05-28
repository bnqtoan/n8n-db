# Check To Do on Notion and send message on Slack

## Use cases:

*   **Daily Task Reminder:** Automatically sends a Slack message every morning (or at a specified time) with a list of incomplete to-do items assigned to a specific person in a Notion database.
*   **Personalized Task Notifications:** When a to-do item is assigned to a specific user in Notion and remains unchecked, a direct Slack message will be sent to remind them.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node, triggering the workflow based on a schedule (in this case, every day at 8 AM).
2.  **Get To Dos from Notion:** The `Get To Dos` node retrieves all to-do items from a specified Notion block.
3.  **Check Assignment and Completion:** The `If task assigned to Harshil?` node checks two conditions:
    *   If the to-do item is assigned to "NAME" (Placeholder, needs to be replaced with name of the person).
    *   If the to-do item is not checked (incomplete).
4.  **Open Direct Message Channel:** The `Create a Direct Message` node opens a direct message channel with the specified user (U01JXLAJ6SE).
5.  **Send Slack Message:** The `Send a Direct Message` node sends a message to the direct message channel including:
    *   A general `# TO DO` reminder.
    *   An attachment with the content of the to-do item (title) from Notion.

## Services:

*   **Notion:** Used to retrieve to-do items from a specified database.
*   **Slack:** Used to send direct messages to users.

## Hashtags:

#n8n #automation #Notion #Slack #taskmanagement
