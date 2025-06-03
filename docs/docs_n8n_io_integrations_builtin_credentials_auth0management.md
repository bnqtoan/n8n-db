[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/auth0management.md "Edit this page")

# Auth0 Management credentials[#](#auth0-management-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

Create an [Auth0](https://auth0.com) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API client secret

## Related resources[#](#related-resources "Permanent link")

Refer to [Auth0 Management's documentation](https://auth0.com/docs/api/management/v2) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/auth0-management-api/) on n8n's website.

## Using API client secret[#](#using-api-client-secret "Permanent link")

To configure this credential, you'll need:

*   An Auth0 **Domain**
*   A **Client ID**
*   A **Client Secret**

Refer to the [Auth0 Management API Get Access Tokens documentation](https://auth0.com/docs/secure/tokens/access-tokens/get-access-tokens) for instructions on obtaining the Client ID and Client Secret from the application's **Settings** tab.