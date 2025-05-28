# Linear Issue Alert to Slack

## Use cases:

-   **Bug Tracking and Notification:** Automatically notify a dedicated Slack channel when a new, high-priority bug is created in Linear, ensuring immediate attention from the development team.
-   **Issue Escalation:** Escalate issues from Linear to Slack based on specific criteria (e.g., priority level, assigned labels), facilitating faster response times.
-   **Real-time Updates:** Keep stakeholders informed about critical issue creation in Linear via instant Slack notifications, promoting better collaboration.

## How it works:

1.  **Trigger:** The workflow is triggered by a new issue creation event in Linear, specifically within the "Product & Design" team.  Alternatively, for testing, it can be triggered manually.
2.  **Filter:**  The "Filter" node checks if the issue's priority is equal or higher than 3 and if it has the label "bug".
3.  **Transform:** The "Set" node transforms the title of the Linear issue to title case and extract url.
4.  **Notify:**  The "Slack" node sends a message to the specified Slack channel ("#important-bugs") containing the issue title and a direct link to the issue in Linear. The message also uses `<!channel>` to notify everyone in the channel.

## Services:

-   Linear
-   Slack

## Hashtags:

#n8n #automation #Linear #Slack #bugtracking
