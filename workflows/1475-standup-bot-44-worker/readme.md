# Standup Bot - Worker

## Use cases:

- Automate daily stand-up meetings in a team by collecting updates from each member and posting a consolidated report.
- Schedule and manage stand-up meetings for different teams or channels within a Mattermost workspace, each with customized questions and timings.
- Allow team members to easily provide stand-up updates through a dialog initiated by a slash command or action button in Mattermost.

## How it works:

1.  **Trigger:** The workflow is triggered either by a cron job at specific times (e.g., every hour between 6 AM and 12 PM on weekdays) or via webhooks from Mattermost slash commands or action button clicks.
2.  **Slash Command Handling:**
    -   If a slash command `/standup config` is used, the workflow prepares and opens a configuration dialog in Mattermost. This dialog allows users to set the standup title, time, days, questions, and participating users.
    -   Configuration changes are saved and applied to the standup schedule.
3.  **Action Button Handling:**
    -   If a user clicks on an action button (e.g., "Provide Update"), the workflow checks if the action is to open a stand-up dialog.
    -   It then prepares and opens a dialog with pre-defined questions for the user to answer.
4.  **Standup Scheduling:**
    -   The cron-triggered execution filters standups that are due based on the current time and day.
    -   For each due standup, it identifies the users and prepares a reminder message.
5.  **Reminder and Report Generation:**
    -   The workflow creates direct channels with users and sends them a reminder message, including a button to "Provide Update."
    -   When a user submits their stand-up answers, the workflow formats the answers into a report.
    -   It then publishes the report to the appropriate Mattermost channel.
6.  **Configuration Storage:**
    -   Configuration data for the bot (mattermost URLs, bot tokens, standup schedules) is read from workflow with id "1004" and updated by workflow "1005".

## Services:

-   Mattermost: For communication, slash commands, action buttons, and dialogs.
-   n8n: This workflow is hosted on n8n to automate the stand-up process.

## Hashtags:

#n8n #automation #mattermost #standup #bot
