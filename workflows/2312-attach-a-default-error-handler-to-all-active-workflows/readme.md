# Default Error Handler

## Use cases:

- **Centralized Error Notification:**  When a workflow fails, this workflow automatically sends an email notification with a link to the failed execution, allowing for quick debugging and resolution.
- **Automated Error Workflow Configuration:**  This workflow automatically identifies other active workflows without a designated error handler and assigns itself as their error handling workflow. This ensures that all workflows have a default notification system in place.

## How it works:

1.  **Schedule Trigger:** The workflow runs daily at midnight to check for new workflows.
2.  **Get Error Handler:** It fetches the current workflow's (its own) ID.
3.  **n8n (Get Workflows):** Retrieves all workflows from the n8n instance.
4.  **Conditional Check:** It filters these workflows based on these conditions:
    *   The workflow is active.
    *   The workflow does not already have an error workflow defined.
    *   The workflow is not the current error handler workflow itself (to avoid self-referencing).
5.  **Set Fields:** For workflows that meet the criteria, it sets the `errorWorkflow` setting to the ID of this current error handler workflow.
6.  **n8n (Update Workflow):**  It updates the target workflow with the new `errorWorkflow` setting.
7.  **Error Trigger:**  When any workflow that uses this workflow as a handler fails, this trigger activates.
8.  **Gmail:** Sends an email to a specified address (you will need to set it up in credentials) with a link to the failing workflow execution.

## Services:

*   n8n API
*   Gmail

## Hashtags:

#n8n #automation #errorhandling #workflow #monitoring
