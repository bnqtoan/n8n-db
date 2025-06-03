[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/qradar.md "Edit this page")

# QRadar credentials[#](#qradar-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Qradar](https://www.ibm.com/qradar) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [QRadar's documentation](https://ibmsecuritydocs.github.io/qradar_api_overview/) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/qradar/) on n8n's website.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Also known as an authorized service token. Use the **Manage Authorized Services** window on the **Admin** tab to create an authentication token. Refer to [Creating an authentication token](https://www.ibm.com/docs/en/qradar-common?topic=forwarding-creating-authentication-token) for more information.