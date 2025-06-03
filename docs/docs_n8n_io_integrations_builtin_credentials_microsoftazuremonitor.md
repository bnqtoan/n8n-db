[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/microsoftazuremonitor.md "Edit this page")

# Microsoft Azure Monitor credentials[#](#microsoft-azure-monitor-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a Microsoft Azure account or subscription
*   An app registered in Microsoft Entra ID

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Microsoft Azure Monitor's API documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/azure-monitor-rest-api-index) for more information about the service.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need a Microsoft Azure account and:

*   A **Client ID**
*   A **Client Secret**
*   A **Tenant ID**
*   The **Resource** you plan to access

Refer to [Microsoft Azure Monitor's API documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/api/access-api?tabs=rest#set-up-authentication) for more information about authenticating to the service.