[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/gotify.md "Edit this page")

# Gotify credentials[#](#gotify-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Gotify](../../app-nodes/n8n-nodes-base.gotify/)

## Prerequisites[#](#prerequisites "Permanent link")

Install [Gotify](https://gotify.net/docs/install) on your server.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API token

## Related resources[#](#related-resources "Permanent link")

Refer to [Gotify's API documentation](https://gotify.net/api-docs) for more information about the service.

## Using API token[#](#using-api-token "Permanent link")

To configure this credential, you'll need:

*   An **App API Token**: Only required if you'll use this credential to create messages. To generate an App API token, create an application from the **Apps** menu. Refer to [Gotify's Push messages documentation](https://gotify.net/docs/pushmsg) for more information.
*   A **Client API Token**: Required for all actions other than creating messages (such as deleting or retrieving messages). To generate a Client API token, create a client from the **Clients** menu.
*   The **URL** of the Gotify host