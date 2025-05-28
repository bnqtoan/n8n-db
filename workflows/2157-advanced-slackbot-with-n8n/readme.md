# Slack Command Handler

## Use cases:

- **Centralized Command Management:** This workflow acts as a central hub for processing Slack commands, allowing you to manage and route different commands to their corresponding n8n workflows.
- **Automated Task Execution:** Trigger automated tasks directly from Slack using custom commands, such as retrieving user information, deleting user accounts, or generating reports.
- **Enhanced Collaboration:** Streamline team collaboration by enabling users to execute workflows directly from Slack, facilitating faster and more efficient communication and task completion.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node that listens for POST requests from Slack when a command is executed.
2.  **Validate signature:** Ensure the request come from slack
3.  **Variable Assignment:**  The workflow save the command, the user, the request token to a variable node.
4.  **Token Validation:** It validates the Slack token to ensure the request is authorized.
5.  **Command Parsing:** The workflow parses the command and any parameters or flags provided by the user.
6.  **Workflow Lookup:** It checks if a corresponding workflow ID is configured for the command in the "Set config" node.
7.  **Conditional Thread Creation:**  Based on the configuration, the workflow can create a new thread in a specified Slack channel.
8.  **Workflow Execution:** If a workflow ID is found, the workflow executes the corresponding n8n workflow using the "Execute Workflow" node.
9.  **User Notification:** The workflow sends a confirmation message back to the user in Slack, informing them that the command has been received and processed.  It also can send debug links to executions in case of errors or for debug purpose
10. **Subworkflow execution:** The called workflow can have a thread or not depending on the wanted outcome

## Services:

-   Slack API: Used to receive commands, send messages, and create threads.
-   HTTP Request: Used to send replies and debug messages back to Slack, as well as to trigger sub-workflows.
-   Postgres: The subworkflows connect to a postgres database, but you can change this logic to connect to any database

## Hashtags:

#n8n #Slack #Automation #Workflow #CommandHandler
