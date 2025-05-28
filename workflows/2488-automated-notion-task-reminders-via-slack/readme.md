# Automated Notion Task Reminders via Slack

## Use cases

- **Daily Task Reminders:** Automatically send a daily digest of incomplete tasks from a Notion database to individual Slack users every weekday morning.
- **Team Task Management:** Facilitate team collaboration by ensuring each team member receives a personalized list of their pending tasks, promoting accountability.
- **Project Deadline Tracking:** Help project managers track task completion by sending timely reminders of upcoming deadlines to responsible team members.

## How it works

This workflow automates the process of sending task reminders from Notion to Slack.

1.  **Schedule Trigger:** The workflow is triggered every weekday at 9:00 AM using a Cron node.
2.  **Set User Details:** Email addresses for Notion users and full names for Slack users are defined using Set nodes.
3.  **Fetch Tasks from Notion:** The workflow retrieves all tasks from a specified Notion database using the Notion node.
4.  **Filter Incomplete Tasks:** It filters out tasks marked as "Done" to focus only on pending items using a Filter node.
5.  **Fetch Slack Users:** It fetches all Slack users to match Notion users to their corresponding Slack accounts using a Slack node.
6.  **Match Notion and Slack Users:** The workflow uses a Switch node to determine the correct Slack user based on the Notion user email.
7.  **Filter Slack Users:** Using Filter nodes, the workflow identifies the Slack user to send to based on the full name.
8.  **Send Slack Reminders:** Finally, a Slack node sends a direct message to each identified user in Slack, detailing their incomplete tasks and due dates.

## Services

-   **Notion:** Used to retrieve task information from a specified database.
-   **Slack:** Used to send direct messages to users with their task reminders.

## Hashtags

#n8n #automation #Notion #Slack #taskmanagement
