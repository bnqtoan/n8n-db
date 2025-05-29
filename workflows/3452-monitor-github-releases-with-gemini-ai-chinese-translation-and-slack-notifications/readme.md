# Github Releases

## Use cases:

- **Automated Release Notifications:** Get notified in a Slack channel whenever a new release is published for specified GitHub repositories.
- **Change Summary Generation:** Automatically extract key changes from GitHub releases, translate them into Chinese, and post a summary to a Slack channel.
- **Release Tracking:** Track the latest releases of specific GitHub repositories and avoid duplicate notifications using Redis as a simple cache.

## How it works:

1.  **Trigger:** The workflow is triggered on a schedule (default: every 10 minutes between 9 AM and 11 PM) using a Cron Trigger.
2.  **GitHub Repository Configuration:** A Code node (`GitHub Config`) defines an array of GitHub repositories to monitor, specifying the repository name and owner/repository path.
3.  **Loop Through Repositories:** The `Loop` node iterates through each repository defined in the `GitHub Config` node.
4.  **Fetch Release Feed:** For each repository, the `RSS for Release` node fetches the releases feed from GitHub's Atom feed. Errors during RSS fetching are ignored to keep the workflow running.
5.  **Error Handling:** An `If No Error` node checks for errors during the RSS feed fetching. If an error occurs, a Slack message is sent to notify the configured channel, otherwise proceeds.
6.  **Limit Items:** The `Limit` node might be intended to limit the number of releases to process. It is important to configure how many items to keep to reduce unecessary workload.
7.  **Check Redis Cache:** The `Redis Get` node retrieves the last processed release ID from a Redis database for the current repository.
8.  **Filter New Releases:** An `If New` node compares the release ID from the RSS feed with the ID stored in Redis. Only new releases proceed to the next steps.
9.  **AI-Powered Information Extraction and Translation:**
    *   The `Gemini` node is an AI Language Model node from Google.
    *   The `Information Extractor` node uses the Gemini model to extract key changes (features, fixes, others) from the release notes. The system prompt instructs the AI to translate the information into Chinese.
10. **Format Date:** The `Date Format` node formats the release date.
11. **Slack Message Formatting:** A Code node (`Code for Slack Tpl`) formats the extracted information into a Slack message using Block Kit for a richer display.
12. **Send Slack Notification:** The `Send Message` node sends the formatted message to a specified Slack channel.
13. **Store Release ID in Redis:** The `Redis Set Id` node updates the Redis database with the ID of the processed release to prevent duplicate notifications.

## Services:

*   GitHub (via RSS feed)
*   Google Gemini (for AI-powered extraction and translation)
*   Slack
*   Redis

## Hashtags:

#n8n #automation #github #slack #releaseNotes
