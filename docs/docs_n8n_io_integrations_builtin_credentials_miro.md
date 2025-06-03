[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/miro.md "Edit this page")

# Miro credentials[#](#miro-credentials "Permanent link")

You can use these credentials to authenticate when using the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to make a [Custom API call](../../../custom-operations/).

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Miro](https://miro.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Miro's API documentation](https://developers.miro.com/reference/overview) for more information about the service.

This is a credential-only node. Refer to [Custom API operations](../../../custom-operations/) to learn more. View [example workflows and related content](https://n8n.io/integrations/miro/) on n8n's website.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need a [Miro](https://miro.com/login/) account and app, as well as:

*   A **Client ID**: Generated when you create a new OAuth2 application.
*   A **Client Secret**: Generated when you create a new OAuth2 application.

Refer to [Miro's API documentation](https://developers.miro.com/reference/overview) for more information about authenticating to the service.

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to [create an app](https://developers.miro.com/docs/rest-api-build-your-first-hello-world-app) to configure OAuth2. Refer to [Miro's OAuth documentation](https://developers.miro.com/docs/getting-started-with-oauth) for more information about setting up OAuth2.