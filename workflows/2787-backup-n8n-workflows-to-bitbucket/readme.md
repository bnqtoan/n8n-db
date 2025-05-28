# Backup n8n Workflows to Bitbucket

## Use cases:

- **Automated Workflow Backup:** Regularly backs up all n8n workflows to a Bitbucket repository, ensuring a secure and version-controlled copy of your automation setups.
- **Disaster Recovery:** In case of n8n instance failure or accidental deletion of workflows, easily restore workflows from the Bitbucket repository.
- **Version Control and Collaboration:** Track changes to workflows over time, allowing for easy rollback to previous versions and facilitating collaboration among team members.

## How it works:

1.  **Schedule Trigger:** The workflow starts daily at 2:00 AM using the "Run Daily at 2 AM" node.
2.  **Set Bitbucket Workspace & Repository:** Sets the Bitbucket workspace and repository slugs for the backup using the "Set Bitbucket Workspace & Repository" node.
3.  **Get All Workflows:** Retrieves all workflows from the n8n instance using the "Get All Workflows" node. This node uses the n8n API credential.
4.  **Loop Workflows:** Iterates through each workflow retrieved in the previous step using the "Loop Workflows" node.
5.  **Get Existing Workflow from Bitbucket:** Attempts to retrieve the existing workflow file from the Bitbucket repository. If the file doesn't exist, it throws a 404 error. This uses Bitbucket's API and an HTTP Basic Auth credential.  Errors are handled to continue the workflow.
6.  **New or Changed?**: Compares the content of the current workflow with the content of the existing workflow in Bitbucket. It also checks if the file doesn't exist on Bitbucket (error 404).  If the workflow is new or has changed, the workflow proceeds to the next step.
7.  **Upload Workflow to Bitbucket:** Uploads the current workflow to the Bitbucket repository using the Bitbucket API. The workflow's JSON data is stored in a file named after the workflow. The filename has all non-alphanumeric characters removed.
8.  **Calculate Wait Time:** Calculates a wait time to avoid rate limiting issues with the Bitbucket API. This is dynamically calculated based on the `x-ratelimit-remaining` and `x-ratelimit-reset` headers from the previous Bitbucket API call.
9.  **Wait to Avoid Rate Limiting:** Pauses the workflow execution for the calculated wait time. After waiting, the loop restarts and processes the next workflow.

## Services:

-   **n8n API:** Used to fetch workflows from the n8n instance.
-   **Bitbucket API:** Used to retrieve and upload workflow files to a Bitbucket repository.

## Hashtags:

#n8n #automation #workflow #backup #bitbucket #versioncontrol
