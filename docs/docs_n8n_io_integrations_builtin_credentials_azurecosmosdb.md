[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/azurecosmosdb.md "Edit this page")

# Azure Cosmos DB credentials[#](#azure-cosmos-db-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Azure Cosmos DB](../../app-nodes/n8n-nodes-base.azurecosmosdb/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create an [Azure](https://azure.microsoft.com) subscription.
*   Create an [Azure Cosmos DB account](https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-manage-database-account).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API Key

## Related resources[#](#related-resources "Permanent link")

Refer to [Azure Cosmos DB's API documentation](https://learn.microsoft.com/en-us/rest/api/cosmos-db/) for more information about the service.

## Using API Key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **Account**: The name of your Azure Cosmos DB account.
*   A **Key**: A key for your Azure Cosmos DB account. Select **Overview** > **Keys** in the Azure portal for your Azure Cosmos DB. You can use either of the two account keys for this purpose.
*   A **Database**: The name of the Azure Cosmos DB database to connect to.

Refer to [Get your primary key | Microsoft](https://learn.microsoft.com/en-us/previous-versions/azure/cosmos-db/how-to-obtain-keys?tabs=azure-portal) for more detailed steps.

## Common issues[#](#common-issues "Permanent link")

Here are the known common errors and issues with Azure Cosmos DB credentials.

### Need admin approval[#](#need-admin-approval "Permanent link")

When attempting to add credentials for a Microsoft360 or Microsoft Entra account, users may see a message when following the procedure that this action requires admin approval.

This message will appear when the account attempting to grant permissions for the credential is managed by a Microsoft Entra. In order to issue the credential, the administrator account needs to grant permission to the user (or "tenant") for that application.

The procedure for this is covered in the [Microsoft Entra documentation](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent).