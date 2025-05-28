# n8n Stable Release Notifier

## Use cases:

*   **Receive Daily Updates:** Get notified every day about the latest stable release of n8n.
*   **Monitor Specific Repositories:** Adapt the workflow to track releases for other GitHub repositories of interest.

## How it works:

1.  **Daily Trigger:** The workflow starts automatically every day using the "Daily Trigger" node.
2.  **Fetch GitHub Release:** It fetches the latest release information from the n8n GitHub repository using the "Fetch Github Repo Releases" node, which sends an HTTP request to the GitHub API.
3.  **Split Content:** The "Split Out Content" node extracts the body of the release information.
4.  **Convert to HTML:** The "Convert Markdown to HTML" node converts the release notes (typically in Markdown format) into HTML for better email rendering.
5.  **Send Email:** Finally, the "Send Gmail" node sends an email containing the HTML version of the release notes to a specified recipient.

## Services:

*   GitHub API
*   Gmail

## Hashtags:

#n8n #automation #GitHub #ReleaseNotes #EmailNotification
