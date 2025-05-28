# n8n Workflow: Extranet Releases Notification

## Use cases:

*   **Automated Release Announcements:** Automatically announce new releases of a specific GitHub repository to a designated Slack channel. This keeps stakeholders informed without manual intervention.
*   **Real-time Notifications:** Provides immediate alerts whenever a new release is published, ensuring the team is promptly aware of updates and changes.
*   **Centralized Communication:** Consolidates release information in a central location (Slack), making it easier for the team to track and access the latest updates.

## How it works:

This workflow triggers when a new release is published in the specified GitHub repository. Here's a step-by-step breakdown:

1.  **Github Trigger:** The workflow starts with a "Github Trigger" node, configured to monitor the "Mesdocteurs/mda-admin-partner-api" repository for "release" events.  It's set up with GitHub API credentials to access the repository.
2.  **Slack:** When a new release is detected, the trigger node sends the release information to the "Slack" node. This node formats a message containing the repository name, tag name, release details (body), and a link to the release on GitHub. The message is then sent to the "extranet-md" Slack channel.

## Services:

*   **GitHub:** Monitors a specified repository for new releases.
*   **Slack:** Sends notification messages to a designated channel.

## Hashtags:

#n8n #automation #github #slack #releaseNotification
