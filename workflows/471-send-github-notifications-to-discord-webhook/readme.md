# n8n Workflow: GitHub Notifications to Discord

This workflow automates the process of fetching GitHub notifications and posting them to a Discord channel.

## Use cases:

*   **Real-time Monitoring:**  Stay updated on GitHub notifications (e.g., pull request reviews, issue mentions) in near real-time via a dedicated Discord channel.
*   **Team Collaboration:**  Share important GitHub activity with your team on Discord, facilitating faster responses and better collaboration.
*   **Personal Notification Aggregation:** Consolidate GitHub notifications into a single, easily accessible Discord channel for personal tracking.

## How it works:

1.  **Trigger (Cron):** The workflow is triggered every minute.
2.  **Get Date 1 min ago (Function):** Calculates the timestamp for one minute ago and formats it as an ISO string.  This timestamp is used to fetch only new notifications since the last check.
3.  **Get Issue (HTTP Request):** Makes a request to the GitHub API (`/notifications`) to retrieve notifications created since the timestamp generated in the previous step.  It uses basic authentication with a GitHub token and specifies a `User-Agent` header.
4.  **Function:** Processes the GitHub API response. For each notification, it extracts the reason, title, and URL (modified to a user-friendly format) and formats them into a Markdown list. It also determines whether there are any new notifications.
5.  **IF:** Checks if new notifications exist (the `hasNotifications` field in the Function node's output is `true`).
6.  **Discord:** If new notifications exist, sends a formatted message to a specified Discord channel. The message includes a tag for a specific user, and a list of recent Github notifications with their reason, title, and link to it.

## Services:

*   **GitHub API:** Used to fetch notifications.
*   **Discord API:** Used to post notifications to a Discord channel.

## Hashtags:

#n8n #GitHub #Discord #Automation #Notifications
