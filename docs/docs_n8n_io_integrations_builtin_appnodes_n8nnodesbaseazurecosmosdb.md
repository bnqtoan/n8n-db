[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.azurecosmosdb.md "Edit this page")

# Azure Cosmos DB node[#](#azure-cosmos-db-node "Permanent link")

Use the Azure Cosmos DB node to automate work in Azure Cosmos DB and integrate Azure Cosmos DB with other applications. n8n has built-in support for a wide range of Azure Cosmos DB features, which includes creating, getting, updating, and deleting containers and items.

On this page, you'll find a list of operations the Azure Cosmos DB node supports, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/azurecosmosdb/).

## Operations[#](#operations "Permanent link")

*   **Container**:
    *   **Create**
    *   **Delete**
    *   **Get**
    *   **Get Many**
*   **Item**:
    *   **Create**
    *   **Delete**
    *   **Get**
    *   **Get Many**
    *   **Execute Query**
    *   **Update**

## Templates and examples[#](#templates-and-examples "Permanent link")

**Build Your Own Counseling Chatbot on LINE to Support Mental Health Conversations**

by lin@davoy.tech

[View template details](https://n8n.io/workflows/2975-build-your-own-counseling-chatbot-on-line-to-support-mental-health-conversations/)

**CallForge - 05 - Gong.io Call Analysis with Azure AI & CRM Sync**

by Angel Menendez

[View template details](https://n8n.io/workflows/3035-callforge-05-gongio-call-analysis-with-azure-ai-and-crm-sync/)

**Get Daily Exercise Plan with Flex Message via LINE**

by lin@davoy.tech

[View template details](https://n8n.io/workflows/2988-get-daily-exercise-plan-with-flex-message-via-line/)

[Browse Azure Cosmos DB integration templates](https://n8n.io/integrations/azure-cosmos-db/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Azure Cosmos DB's documentation](https://learn.microsoft.com/en-us/rest/api/cosmos-db/) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.