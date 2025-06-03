[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/raindrop.md "Edit this page")

# Raindrop credentials[#](#raindrop-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Raindrop](../../app-nodes/n8n-nodes-base.raindrop/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Raindrop](https://raindrop.io/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Raindrop's API documentation](https://developer.raindrop.io/) for more information about the service.

## Using OAuth[#](#using-oauth "Permanent link")

To configure this credential, you'll need:

*   A **Client ID**
*   A **Client Secret**

Generate both by creating a Raindrop app.

To create an app, go to **Settings >** [**Integrations**](https://app.raindrop.io/settings/integrations) and select **\+ Create new app** in the **For Developers** section.

Use these settings for your app:

*   Copy the **OAuth Redirect URL** from n8n and add it as a **Redirect URI** in your app.
*   Copy the **Client ID** and **Client Secret** from the Raindrop app and enter them in your n8n credential.