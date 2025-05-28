# Workflow: Set Default Error Workflow

## Use cases:

- **Automated Error Handling Configuration:** Automatically configures a default error workflow for n8n workflows, ensuring a consistent and centralized error-handling strategy.
- **Dynamic Error Workflow Assignment:** Enables dynamic assignment of error workflows based on conditions like the absence of a specific tag or a pre-existing error workflow.
- **Scheduled Configuration Updates:** Periodically checks and updates the error workflow settings, maintaining the configuration's accuracy and relevance.

## How it works:

1.  **Trigger:** The workflow starts either manually using the "When clicking 'Test workflow'" trigger or on a schedule using the "Schedule Trigger" node (every 4 hours in this example).
2.  **Set Variables:** The "Set Vars" node defines two variables:
    *   `default_error_workflow_id`: The ID of the default error workflow.
    *   `default_error_exclusion_tag`: A tag used to exclude workflows from having the default error workflow set.
3.  **Get All Workflows:** The "Get All Workflows" node fetches all workflows from the n8n instance using the n8n API.
4.  **Exclude Workflows:** The "Exclude default_error:false Tagged Workflows" node filters the workflows based on two conditions:
    *   Excludes workflows that have the `default_error_exclusion_tag` (default_error:false).
    *   Excludes workflows that already have the `default_error_workflow_id` set as their error workflow.
5.  **Update Workflows:** The "Set Default Error Workflow" node updates the workflows that pass the filter. It sets the `errorWorkflow` setting of each workflow to the `default_error_workflow_id` defined in the "Set Vars" node. This is done by updating the `workflow_entity` table in a Postgres database.

## Services:

-   n8n API: Used to retrieve workflow data.
-   Postgres: Used to store and update workflow settings.

## Hashtags:

#n8n #automation #errorhandling #workflowmanagement #configuration
