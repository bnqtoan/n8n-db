# Workflows backup to Github

## Use cases

- **Automated Backup:** Regularly backs up n8n workflows to a GitHub repository, ensuring a safe and version-controlled storage of your automation designs.
- **Disaster Recovery:** In case of system failure or accidental deletion, the workflow backups on GitHub can be easily restored to a new n8n instance.
- **Version Control and Collaboration:** Allows tracking changes to workflows over time, enabling collaboration and easier management of workflow versions.

## How it works

1.  **Trigger:** The workflow is triggered either manually or on a weekly schedule.
2.  **Fetch Workflows:** It retrieves all workflows from the n8n instance using the n8n API.
3.  **Notification:** Sends a starting message to a Discord channel, informing users that the backup process has begun.
4.  **Loop Through Workflows:** Iterates through each workflow.
5.  **Get File Data:** Retrieves the existing workflow file from the GitHub repository to check for differences.
6.  **Compare Workflow Data:** Compares the current workflow data with the data stored in the GitHub repository.
7.  **Conditional Actions:**
    -   If the workflow is new, it creates a new file in the GitHub repository.
    -   If the workflow exists and is different, it edits the existing file in the GitHub repository.
    -   If the workflow exists and is the same, it does nothing.
8.  **Sub Path Creation:** Creates a sub path based on the current date, to save the backup
9.  **Notifications:** Sends success or failure messages to a Discord channel for each workflow processed.
10. **Completion Message:** Sends a final message to the Discord channel, summarizing the backup process.

## Services

-   n8n API: Interacts with the n8n instance to retrieve workflow data.
-   GitHub API: Stores workflow data in a GitHub repository.
-   Discord API: Sends notifications to a Discord channel.

## Hashtags

#n8n #automation #GitHub #backup #workflow
