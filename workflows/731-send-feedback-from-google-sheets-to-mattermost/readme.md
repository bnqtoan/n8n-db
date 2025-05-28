# My Workflow

## Use cases:

- **Automated Feedback Collection:** Automatically post a message in a Mattermost channel after a session or event to gather feedback from participants.
- **Session-Specific Announcements:** Sends session-specific feedback forms automatically, ensuring participants receive the correct form based on the session they attended.
- **Scheduled Notifications:** Schedules posts based on a cron trigger to align with session end times.

## How it works:

1.  **Cron Trigger:** The workflow starts with a `Cron` node, configured to trigger on a specific date and time `0 0 17 28 9 *`.
2.  **Retrieve Session Data:** The `Google Sheets` node retrieves data from a Google Sheet, specifically from the "Sessions!A:D" range. The sheet ID is specified in the node's parameters.
3.  **Post to Mattermost:** The `Mattermost` node sends a message to a specified Mattermost channel. The message includes a personalized message mentioning the session name (taken from the Google Sheet data) and a link to a feedback form. The channel ID and feedback form link are also retrieved from the Google Sheet. The node uses the `mattermostApi` credential for authentication.

## Services:

-   Google Sheets
-   Mattermost

## Hashtags:

#n8n #automation #feedback #mattermost #googlesheets
