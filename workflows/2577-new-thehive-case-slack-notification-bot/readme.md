# TheHive Slack Integration

## Use cases:

- **Real-time Security Incident Notification**: Automatically post new security incidents detected by TheHive to a dedicated Slack channel, ensuring immediate visibility for the SOC team.
- **Streamlined Case Management**: Enable SOC analysts to update case attributes (e.g., assignee, severity, status, TLP, PAP) directly from Slack, reducing context switching and improving response times.
- **Collaborative Task Management**: Allow analysts to add and manage tasks related to TheHive cases directly within Slack, facilitating better team collaboration and task tracking.

## How it works:

1.  **TheHive Trigger**: The workflow starts when a new case is created in TheHive. This trigger listens for `case_create` events.
2.  **Formatting Dictionaries**: It format dictionaries to be used on the assign messages with correct emojis.
3.  **Get Slack User's Email**: It then uses the email to query Slack for user details, including profile picture and real name.
4.  **Prepare Fields for Slack**: The Case data is then formatted to Slack Block Kit.
5.  **Post to Slack**: The new case information, including title, description, tags, severity, and assignee, is posted as a message to a specified Slack channel, using Slack's Block Kit for rich formatting.
6.  **Interactive Updates**: The Slack message includes interactive elements (buttons and select menus) that allow analysts to perform actions such as closing the case as a false positive, changing the assignee, updating severity, and more.
7.  **Action Processing**: When an analyst interacts with the Slack message (e.g., changes the assignee), n8n receives the action via a webhook. It then updates the corresponding case in TheHive.
8.  **Modal Task Creation**: Analysts can trigger a modal in Slack to add a new task to the case, filling in details like title, description, due date, and assignee.
9.  **Update Slack Message**: After any updates, the original Slack message is updated to reflect the changes, ensuring everyone sees the most current information.

## Services:

-   TheHive
-   Slack API

## Hashtags:

#n8n #automation #workflow #security #thehive #slack #soc
