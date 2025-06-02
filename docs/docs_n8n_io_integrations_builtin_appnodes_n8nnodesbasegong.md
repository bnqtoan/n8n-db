[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.gong.md "Edit this page")

# Gong node[#](#gong-node "Permanent link")

Use the Gong node to automate work in Gong and integrate Gong with other applications. n8n has built-in support for a wide range of Gong features, which includes getting one or more calls and users.

On this page, you'll find a list of operations the Gong node supports, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/gong/).

## Operations[#](#operations "Permanent link")

*   Call
    *   Get
    *   Get Many
*   User
    *   Get
    *   Get Many

## Templates and examples[#](#templates-and-examples "Permanent link")

**CallForge - 04 - AI Workflow for Gong.io Sales Calls**

by Angel Menendez

[View template details](https://n8n.io/workflows/3034-callforge-04-ai-workflow-for-gongio-sales-calls/)

**CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync**

by Angel Menendez

[View template details](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)

**CallForge - 06 - Automate Sales Insights with Gong.io, Notion & AI**

by Angel Menendez

[View template details](https://n8n.io/workflows/3036-callforge-06-automate-sales-insights-with-gongio-notion-and-ai/)

[Browse Gong integration templates](https://n8n.io/integrations/gong/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Gong's documentation](https://gong.app.gong.io/settings/api/documentation) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.