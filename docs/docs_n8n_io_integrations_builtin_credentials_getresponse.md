[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/getresponse.md "Edit this page")

# GetResponse credentials[#](#getresponse-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [GetResponse](../../app-nodes/n8n-nodes-base.getresponse/)
*   [GetResponse Trigger](../../trigger-nodes/n8n-nodes-base.getresponsetrigger/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [GetResponse](https://www.getresponse.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [GetResponse's API documentation](https://apidocs.getresponse.com/v3) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need:

*   An **API Key**: To view or generate an API key, go to **Integrations and API > API**. Refer to the [GetResponse Help Center](https://www.getresponse.com/help/where-do-i-find-the-api-key.html) for more detailed instructions.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need:

*   A **Client ID**: Generated when you [register your application](https://apidocs.getresponse.com/v3/authentication/oauth2).
*   A **Client Secret**: Generated when you [register your application](https://apidocs.getresponse.com/v3/authentication/oauth2) as the **Client Secret Key**.

When you register your application, copy the **OAuth Redirect URL** from n8n and add it as the **Redirect URL** in GetResponse.

Redirect URL with localhost

The Redirect URL should be a URL in your domain, for example: `https://mytemplatemaker.example.com/gr_callback`. GetResponse doesn't accept a localhost callback URL. Refer to the [FAQs](#configure-oauth2-credentials-for-a-local-environment) to configure the credentials for the local environment.

## Configure OAuth2 credentials for a local environment[#](#configure-oauth2-credentials-for-a-local-environment "Permanent link")

GetResponse doesn't accept the localhost callback URL. Follow the steps below to configure the OAuth credentials for a local environment: 1. Use [ngrok](https://ngrok.com/) to expose the local server running on port `5678` to the internet. In your terminal, run the following command:

1

`ngrok http 5678`

2\. Run the following command in a new terminal. Replace `<YOUR-NGROK-URL>` with the URL that you got from the previous step.

1

`export WEBHOOK_URL=<YOUR-NGROK-URL>`

3\. Follow the [Using OAuth2](#using-oauth2) instructions to configure your credentials, using this URL as your **Redirect URL**.