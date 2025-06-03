[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/cockpit.md "Edit this page")

# Cockpit credentials[#](#cockpit-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Cockpit](../../app-nodes/n8n-nodes-base.cockpit/)

## Prerequisites[#](#prerequisites "Permanent link")

*   Create a [Cockpit](https://getcockpit.com/) account.
*   Set up a [self-hosted instance of Cockpit](https://getcockpit.com/documentation/core/quickstart/installation).

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token

## Related resources[#](#related-resources "Permanent link")

Refer to [Cockpit's API documentation](https://getcockpit.com/documentation/core/api/introduction) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need:

*   Your **Cockpit URL**: The URL you use to access your Cockpit instance
*   An **Access Token**: Refer to the [Cockpit Managing tokens documentation](https://getcockpit.com/documentation/core/api/authentication/#managing-tokens) for instructions on creating an API token. Use the **API token** as the n8n **Access Token**.