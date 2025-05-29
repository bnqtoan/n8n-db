# My Workflow

## Use cases:

*   **Automated Workflow Backup:** Regularly export all n8n workflows to a structured directory for backup and version control. This ensures you have a copy of your automations in case of accidental deletion or system failures.
*   **Deployment Pipeline Integration:** Automate the deployment of n8n workflows to different environments (e.g., development, production) based on tags. This allows for controlled releases and testing before production deployment.
*   **Centralized Workflow Management:** Create a central repository of n8n workflows with readable filenames (including the workflow name and ID) for easy searching and organization. This improves collaboration and knowledge sharing within a team.

## How it works:

1.  **Trigger:** The workflow is manually triggered using the "Start export workflows" node.
2.  **Folder Creation and CLI Execution:** The "Create folders and run n8n cli" node executes shell commands to create necessary directories (export, export/n8n-workflows, export/named-workflows, import-dev/workflows) and then uses the n8n CLI to export all workflows to the `export/n8n-workflows` directory. The exported files are named after their ID.
3.  **Load Exported Workflows:** The "load exported workflows" node reads all the exported workflow files from the `export/n8n-workflows` directory.
4.  **Parse Workflow:** The "parse workflow" node converts the JSON content of each workflow file into a structured JSON object.
5.  **Remove root node:** the "Remove root node" removes the root note `parsedData` to clean the object
6.  **Rename Workflow Files:** The "Create JSON file with readable name" node converts the parsed JSON back to a JSON string and renames file names to a readable format: `WorkflowName (ID).json`. And move it to the `export/named-workflows` folder.
7.  **Store Named Workflow:** The "Store named workflow" node writes the renamed workflow file to the `export/named-workflows` directory.
8.  **Conditional Deployment:** The "TAG? Auto deploy to dev" and "TAG? Auto deploy to PROD" nodes check if the workflow has specific tags ("Auto deploy to dev" or "Auto deploy to PROD").
9.  **Environment-Specific File Creation:** If the corresponding tag is present, the "Create JSON file with readable name (dev/prod)" nodes create environment-specific copies of the workflow file (renaming again) and place them in the respective import-dev/workflows and import-prod/workflows directory.
10. **Environment-Specific File Storage:** "Store named workflow (dev/prod)" save workflows into import-dev and import-prod folder.

## Services:

*   n8n CLI (command-line interface)

## Hashtags:

#n8n #automation #workflow #deployment #backup
