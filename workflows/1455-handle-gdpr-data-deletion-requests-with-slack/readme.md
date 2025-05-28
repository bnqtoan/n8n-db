# GDPR Data Deletion Workflow

## Use cases

- **Automated GDPR Compliance:** Automate the process of deleting user data across multiple services upon receiving a GDPR request.
- **Slack Command Integration:** Allow employees to initiate data deletion requests directly from Slack using a simple command.
- **Centralized Data Deletion Logging:** Maintain a comprehensive log of all data deletion requests and their status in Airtable for auditing and compliance purposes.

## How it works

1.  **Receive Slash Command:** The workflow starts when a user triggers a Slack slash command (e.g., `/gdpr delete user@example.com`).
2.  **Valid Token?:** Checks if the request includes a valid token. If not, the request is rejected.
3.  **Set:** Extracts the operation (e.g., "delete") and email address from the Slack command text.
4.  **Read Command:** Identifies the command, in this case the only supported command is `delete`.
5.  **Empty Email?:** Checks for the existence of a provided email. If the email is missing, return error.
6.  **Acknowledge:** Sends an immediate confirmation message to Slack acknowledging the data deletion request.
7.  **Paddle Data Deletion:** Executes a sub-workflow (Workflow ID 1231) to delete the user's data from Paddle.
8.  **Customer.io Data Deletion:** Executes a sub-workflow (Workflow ID 1237) to delete the user's data from Customer.io.
9.  **Zendesk Data Deletion:** Executes a sub-workflow (Workflow ID 1240) to delete the user's data from Zendesk.
10. **Prepare Log Entry:** Consolidates the results from the Paddle, Customer.io, and Zendesk deletion workflows to prepare a log entry.
11. **Crypto:** Creates a SHA256 hash of the email address for logging purposes.
12. **Airtable:** Appends the log entry (including the email hash and deletion status) to an Airtable base for auditing.
13. **Respond to Slack:** Sends a final message to Slack with the overall status of the data deletion process and a link to the log entry in Airtable.

## Services

-   **Slack:** For receiving commands and sending notifications.
-   **Paddle:** For data deletion.
-   **Customer.io:** For data deletion.
-   **Zendesk:** For data deletion.
-   **Airtable:** For logging and auditing data deletion requests.

## Hashtags

#n8n #automation #GDPR #Slack #DataDeletion
