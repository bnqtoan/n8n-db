# GitHub Release Notifier

## Use cases:

- Stay informed about the latest releases of critical open-source projects or internal repositories without manually checking GitHub.
- Automatically notify a team channel in Slack when a new release is published, ensuring visibility and prompt action.
- Track releases of multiple repositories from different organizations in a single workflow.

## How it works:

1.  **Daily Trigger:** The workflow starts with a "Daily Trigger" node, scheduling the execution of the workflow once a day.
2.  **RepoConfig:** A "Code" node named "RepoConfig" defines a list of GitHub repositories to monitor. It returns an array of JSON objects, each containing the `github-org` and `github-repo` for a repository.
3.  **Fetch Github Repo Releases:** For each repository in the "RepoConfig" list, an "HTTP Request" node fetches the latest release information from the GitHub API (`https://api.github.com/repos/{org}/{repo}/releases/latest`).
4.  **Wether Release is new:** A "IF" node checks if the release was published within the last 24 hours.
5.  **Send Message:** If the release is new, a "Slack" node sends a message to a specified Slack channel. The message includes the repository name, release name, a snippet of the release body, and the release URL.

## Services:

-   GitHub API
-   Slack

## Hashtags:

#n8n #automation #github #slack #releaseNotes
