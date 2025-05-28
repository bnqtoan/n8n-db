# Create GitLab issues for new GitHub Releases

## Use cases:

- Automatically create GitLab issues when a new release is published in a GitHub repository, ensuring that the GitLab project remains synchronized with upstream changes.
-  Use a cron job to check periodically if releases in GitHub have associated issues in GitLab, automatically creating the issues in Gitlab if needed.

## How it works:

1.  **Cron**: Triggers the workflow execution based on a defined schedule (every week).
2.  **Get latest release**: Retrieves the latest release information from a specified GitHub repository.
3.  **List issues**: Retrieves all issues from a specified GitLab repository.
4.  **Merge**: Merges the release data from GitHub and the issue data from GitLab into a single data structure for comparison.
5.  **No issue for release?**: A Function node checks if there is an issue in GitLab that has the same title as the latest GitHub release. If no matching issue is found, the release data is passed on.
6.  **Create issue**: Creates a new issue in the GitLab repository using data from the GitHub release, including the release name, body, and URL.

## Services:

-   GitHub
-   GitLab

## Hashtags:

#n8n #GitHub #GitLab #Automation #IssueTracking
