[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/sentryio.md "Edit this page")

# Sentry.io credentials[#](#sentryio-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Sentry.io](../../app-nodes/n8n-nodes-base.sentryio/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Sentry.io](https://sentry.io/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API token
*   OAuth2
*   Server API token: Use for [self-hosted Sentry](https://develop.sentry.dev/self-hosted/).

## Related resources[#](#related-resources "Permanent link")

Refer to [Sentry.io's API documentation](https://docs.sentry.io/api/) for more information about the service.

## Using API token[#](#using-api-token "Permanent link")

To configure this credential, you'll need:

*   An API **Token**: Generate a [**User Auth Token**](https://sentry.io/settings/account/api/auth-tokens/) in **Account > Settings > User Auth Tokens**. Refer to [User Auth Tokens](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens) for more information.

## Using OAuth[#](#using-oauth "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you need to configure OAuth2 from scratch, [create an integration](https://docs.sentry.io/organization/integrations/integration-platform/#creating-an-integration) with these settings:

*   Copy the n8n **OAuth Callback URL** and add it as an **Authorized Redirect URI**.
*   Copy the **Client ID** and **Client Secret** and add them to your n8n credential.

Refer to [Public integrations](https://docs.sentry.io/organization/integrations/integration-platform/public-integration/) for more information on creating the integration.

## Using Server API token[#](#using-server-api-token "Permanent link")

To configure this credential, you'll need:

*   An API **Token**: Generate a [**User Auth Token**](https://sentry.io/settings/account/api/auth-tokens/) in **Account > Settings > User Auth Tokens**. Refer to [User Auth Tokens](https://docs.sentry.io/account/auth-tokens/#user-auth-tokens) for more information.
*   The **URL** of your self-hosted Sentry instance.