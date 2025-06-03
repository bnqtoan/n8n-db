[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.servicenow.md "Edit this page")

# ServiceNow node[#](#servicenow-node "Permanent link")

Use the ServiceNow node to automate work in ServiceNow, and integrate ServiceNow with other applications. n8n has built-in support for a wide range of ServiceNow features, including getting business services, departments, configuration items, and dictionary as well as creating, updating, and deleting incidents, users, and table records.

On this page, you'll find a list of operations the ServiceNow node supports and links to more resources.

Credentials

Refer to [ServiceNow credentials](../../credentials/servicenow/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Business Service
    *   Get All
*   Configuration Items
    *   Get All
*   Department
    *   Get All
*   Dictionary
    *   Get All
*   Incident
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   Table Record
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   User
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   User Group
    *   Get All
*   User Role
    *   Get All

## Templates and examples[#](#templates-and-examples "Permanent link")

**ServiceNow Incident Notifications to Slack Workflow**

by Angel Menendez

[View template details](https://n8n.io/workflows/2704-servicenow-incident-notifications-to-slack-workflow/)

**List recent ServiceNow Incidents in Slack Using Pop Up Modal**

by Angel Menendez

[View template details](https://n8n.io/workflows/2728-list-recent-servicenow-incidents-in-slack-using-pop-up-modal/)

**Display ServiceNow Incident Details in Slack using Slash Commands**

by Angel Menendez

[View template details](https://n8n.io/workflows/2727-display-servicenow-incident-details-in-slack-using-slash-commands/)

[Browse ServiceNow integration templates](https://n8n.io/integrations/servicenow/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.