# My Workflow

## Use cases:

- **Monitor code commits:** Get notified in real-time about commits made to specific GitHub repositories. Useful for staying up-to-date with project development.
- **Track pull requests:** Receive alerts when pull requests are opened or updated in monitored repositories, ensuring prompt code review.
- **Centralized GitHub Notifications:** Consolidate GitHub notifications for multiple repositories into a single Telegram channel, simplifying project oversight.

## How it works:

1.  **Trigger:** The workflow starts with a "When clicking ‘Test workflow’" node for initial setup or a "Webhook Trigger" node that listens for events from GitHub.
2.  **Define Repositories:** The "Repos to Monitor" node (or "Repos to Monitor1" when deleting webhooks) stores a list of GitHub repository URLs.
3.  **Register/Delete Webhooks:** The "Split Out" node iterates through the list of repositories. The "Register Github Webhook" node then programmatically creates webhooks for each repository, pointing to the n8n webhook URL.  Alternatively, the "Split Out1" iterates throught the list of repositories to delete webhooks of each repository.
    *   **Register Webhooks**: It uses the Github API endpoint to create a webhook on your behalf with authorization from the `Header Auth account`. This account can be configured under credentials in the node.
    *   **Delete Webhooks**: To delete the webhooks it uses the Github API and requires the `Header Auth account` to be correctly set up as well.
4.  **Handle GitHub Events:** When a `push` or `pull_request` event occurs in a monitored repository, GitHub sends a POST request to the n8n webhook.
5.  **Extract Information:** The "Fields" node extracts relevant information from the webhook payload, such as the repository name, committer details, commit message, and modified files.
6.  **Notify via Telegram:** The "Telegram" node sends a formatted message to a specified Telegram channel, providing details about the GitHub event. (A Slack notification node is also present but disabled).

## Services:

-   GitHub API
-   Telegram API
-   Webhook.site (for testing)

## Hashtags:

#n8n #GitHub #Automation #Webhook #Notifications
