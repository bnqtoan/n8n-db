# My Workflow

## Use cases:
- **Automated Workflow Documentation:** Automatically keeps a Notion database updated with the status and details of n8n workflows tagged with `sync-to-notion`, providing a central repository for workflow information.
- **Centralized Monitoring:** Quickly identify and access key workflow information such as URL, active status, creation date, update date, and error workflow setup status within a Notion database for monitoring and troubleshooting.
- **Audit trail and historical data:** track changes to n8n workflows over time by storing workflow details in a Notion database.

## How it works:

1.  **Schedule Trigger:** Every 15 minutes, the workflow starts.
2.  **Get all workflows with tag:** Retrieves all n8n workflows that are tagged with `sync-to-notion` from n8n Instance.
3.  **Set fields:** Extracts relevant information from each workflow (active status, URL, error workflow status, name, created at, updated at, and internal ID) and prepares it for Notion.
4.  **Get notion page with workflow id:** Searches a Notion database to see if a page already exists for the current workflow based on the workflow's internal ID.
5.  **Map fields:** Creates an object called `input` with all the extracted data of Set fields.
6.  **If newly added workflow:** Checks if the Notion database search returned any results. It uses the result of the Get notion page with workflow id node.
7.  **Add to Notion:** If no existing page is found, a new page is created in the Notion database with the workflow details.
8.  **Update in Notion:** If an existing page is found, the workflow details on that page are updated with the latest information.

## Services:

*   n8n API
*   Notion API

## Hashtags:

#n8n #automation #Notion #workflowManagement #documentation
