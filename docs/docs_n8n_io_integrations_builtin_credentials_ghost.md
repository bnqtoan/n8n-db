[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/ghost.md "Edit this page")

# Ghost credentials[#](#ghost-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Ghost](../../app-nodes/n8n-nodes-base.ghost/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Ghost](https://ghost.org/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Admin API key
*   Content API key

The keys are generated following the same steps, but the authorization flows and key format are different, so n8n stores the credentials separately. The Content API uses an API key; the Admin API uses an API key to generate a token for authentication.

## Related resources[#](#related-resources "Permanent link")

Refer to Ghost's [Admin API documentation](https://ghost.org/docs/admin-api/) for more information about the Admin API service. Refer to Ghost's [Content API documentation](https://ghost.org/docs/content-api/) for more information about the Content API service.

## Using Admin API key[#](#using-admin-api-key "Permanent link")

To configure this credential, you'll need:

*   The **URL** of your Ghost admin domain. Your [admin domain](https://ghost.org/docs/admin-api/#base-url) can be different to your main domain and may include a subdirectory. All Ghost(Pro) blogs have a `*.ghost.io` domain as their admin domain and require https.
*   An **API Key**: To generate a new API key, create a new Custom Integration. Refer to the [Ghost Admin API Token Authentication Key documentation](https://ghost.org/docs/admin-api/#token-authentication) for more detailed instructions. Copy the **Admin API Key** and use this as the **API Key** in the Ghost Admin n8n credential.

## Using Content API key[#](#using-content-api-key "Permanent link")

To configure this credential, you'll need:

*   The **URL** of your Ghost admin domain. Your [admin domain](https://ghost.org/docs/content-api/#url) can be different to your main domain and may include a subdirectory. All Ghost(Pro) blogs have a `*.ghost.io` domain as their admin domain and require https.
*   An **API Key**: To generate a new API key, create a new Custom Integration. Refer to the [Ghost Content API Key documentation](https://ghost.org/docs/content-api/#key) for more detailed instructions. Copy the **Content API Key** and use this as the **API Key** in the Ghost Content n8n credential.