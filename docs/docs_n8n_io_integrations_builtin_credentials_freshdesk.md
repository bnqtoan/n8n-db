[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/freshdesk.md "Edit this page")

# Freshdesk credentials[#](#freshdesk-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Freshdesk](../../app-nodes/n8n-nodes-base.freshdesk/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Freshdesk](https://freshdesk.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Freshdesk's API documentation](https://developers.freshdesk.com/api/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Refer to the [Freshdesk API authenticaton documentation](https://developers.freshdesk.com/api/#authentication) for detailed instructions on getting your API key.
*   A Freshdesk **Domain**: Use the subdomain of your Freshdesk account. This is part of the URL, for example `https://<subdomain>.freshdesk.com`. So if you access Freshdesk through `https://n8n.freshdesk.com`, enter `n8n` as your **Domain**.