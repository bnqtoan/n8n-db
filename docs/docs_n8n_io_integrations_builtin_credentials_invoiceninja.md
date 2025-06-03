[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/invoiceninja.md "Edit this page")

# Invoice Ninja credentials[#](#invoice-ninja-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Invoice Ninja](../../app-nodes/n8n-nodes-base.invoiceninja/)
*   [Invoice Ninja Trigger](../../trigger-nodes/n8n-nodes-base.invoiceninjatrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create an [Invoice Ninja](https://www.invoiceninja.com/) account. Only the Pro and Enterprise plans support API integrations.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to Invoice Ninja's [v4 API documentation](https://invoice-ninja.readthedocs.io/en/latest/api.html) and [v5 API documentation](https://api-docs.invoicing.co/) for more information about the APIs.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   A **URL**: If Invoice Ninja hosts your installation, use either of the default URLs mentioned. If you're self-hosting your installation, use the URL of your Invoice Ninja instance.
*   An **API Token**: Generate an API token in **Settings > Account Management > API Tokens**.
*   An optional **Secret**, available only for v5 API users