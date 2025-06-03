[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/grist.md "Edit this page")

# Grist credentials[#](#grist-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Grist](../../app-nodes/n8n-nodes-base.grist/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Grist](https://getgrist.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Grist's API documentation](https://support.getgrist.com/api/) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: Refer to the [Grist API authentication documentation](https://support.getgrist.com/rest-api/#authentication) for instructions on creating an API key.
*   To select your Grist **Plan Type**. Options include:
    *   Free
    *   Paid: If selected, provide your Grist **Custom Subdomain**. This is the portion that comes before `.getgrist.com`. For example, if our full Grist domain was `n8n.getgrist.com`, we'd enter `n8n` here.
    *   Self-Hosted: If selected, provide your Grist **Self-Hosted URL**. This should be the full URL.