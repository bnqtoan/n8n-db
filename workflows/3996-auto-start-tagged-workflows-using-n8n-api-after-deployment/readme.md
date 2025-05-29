# Auto Start Workflows on n8n Instance

## Use cases:

- **Automated Workflow Activation After n8n Startup:** Automatically starts workflows tagged with "Auto start" after an n8n instance is launched or restarted, ensuring critical processes resume without manual intervention.
- **Deployment Pipeline Integration:** Integrates into an automated deployment pipeline where n8n workflows are imported, and the tagged workflows are automatically activated as part of the deployment process.
- **Dynamic Workflow Management:** Enables dynamic management of workflows, where specific workflows can be automatically started or stopped based on tags, allowing for flexible and automated control of n8n processes.

## How it works:

1.  **Trigger:** The workflow is initiated manually by clicking 'Test workflow'.
2.  **Fetch Workflows:** The "n8n" node fetches all workflows from the n8n instance using the n8n API.
3.  **Check for 'Auto start' Tag:** The "TAG? Auto start" node evaluates each workflow's tags. It checks if the workflow has a tag named "Auto start".
4.  **Activate Workflow:** If the "Auto start" tag is present, the "n8n1" node activates the corresponding workflow using the n8n API.

## Services:

-   n8n API: Used to fetch workflow details and activate workflows.

## Hashtags:

#n8n #automation #workflow #autostart #deployment
