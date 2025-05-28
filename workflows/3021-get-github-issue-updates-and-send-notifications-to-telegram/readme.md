# FetchGithubIssues

## Use cases:

-   **Issue Notification:** Receive instant Telegram notifications for newly opened GitHub issues in a specific repository that match certain criteria (e.g., labeled as "Bug").
-   **Comment Monitoring:** Stay updated on issues with a low number of comments, enabling quicker responses and engagement.
-   **Customizable Alerts:** Tailor the workflow to monitor specific issue labels, states, and timeframes, ensuring notifications are relevant to your needs.

## How it works:

1.  **Schedule Trigger:** The workflow starts every 10 minutes, as defined by the "Run every 10 minutes" node.
2.  **Fetch GitHub Issues:** The "Get Github Issues" node connects to the GitHub API to retrieve issues from a specified repository. It filters issues that are currently open, labeled as "Bug," and have been updated in the last 30 minutes.  **Important**: Edit the OWNER and REPO NAME in the respective fields of this node.
3.  **Extract and Map Fields:** The "Map title, url, created, comments" node extracts relevant information from the GitHub API response, such as the issue title, URL, creation date, and number of comments.
4.  **Filter by Comments:** The "Check for comments" node filters the issues, only allowing those with fewer than 5 comments to proceed.
5.  **Send Telegram Message:**  The "Send Message to @user" node sends a Telegram message to a specified user or group chat, containing the issue title and URL. **Important**: Create a new telegram bot and configure the bot token and Chat ID for it to work.

## Services:

-   GitHub API
-   Telegram API

## Hashtags:

#n8n #GitHub #Telegram #Automation #IssueTracking
