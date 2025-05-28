# n8n_check

## Use cases:

- **Receive instant notifications about new n8n releases:** Get alerted via Telegram and email whenever a new version of n8n is released, ensuring you stay up-to-date with the latest features and bug fixes.
- **Monitor n8n release activity:** Track n8n releases and receive a consolidated daily or scheduled summary of updates, allowing you to efficiently manage updates in production environments.
- **Targeted n8n Release Information:** Filter releases to specific versions like major versions to reduce the noise and only be informed of breaking changes or new features.

## How it works:

1.  **Trigger:** The workflow can be triggered either manually via the "On clicking 'execute'" node or automatically on a defined schedule using the "Cron" node (set to run at 10:00, 14:00, and 18:00).
2.  **Fetch RSS Feed:** The "RSS Feed Read" node retrieves the n8n releases from the official n8n GitHub releases Atom feed.
3.  **Filter by current day:** The "Filter by current day" node processes the RSS feed entries to extract the titles of releases published in the last 4 hours and include "n8n@" and ".0".
4.  **Conditional Check:** The "IF" node checks if the "Filter by current day" node return some release
5.  **Send Notifications:**
    *   If some release is found: the "Telegram" node sends a message to a specified Telegram channel/chat with the information about the new n8n release. Simultaneously, the "AWS SES" node sends an email notification containing the same information.

## Services:

*   **GitHub Releases (via RSS Feed):** Fetches n8n release information.
*   **Telegram:** Sends notifications via Telegram bot.
*   **AWS SES:** Sends email notifications via AWS Simple Email Service.

## Hashtags:

#n8n #automation #releaseMonitoring #notifications #GitHubReleases
