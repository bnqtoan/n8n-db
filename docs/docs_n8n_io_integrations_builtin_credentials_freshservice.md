[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/freshservice.md "Edit this page")

# Freshservice credentials[#](#freshservice-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Freshservice](../../app-nodes/n8n-nodes-base.freshservice/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Freshservice](https://freshservice.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Freshservice's API documentation](https://api.freshservice.com/v2/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Refer to the [Freshservice API authenticaton documentation](https://api.freshservice.com/v2/#authentication) for detailed instructions on getting your API key.
*   Your Freshservice **Domain**: Use the subdomain of your Freshservice account. This is part of the URL, for example `https://<subdomain>.freshservice.com`. So if you access Freshservice through `https://n8n.freshservice.com`, enter `n8n` as your **Domain**.