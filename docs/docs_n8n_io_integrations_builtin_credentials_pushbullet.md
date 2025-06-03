[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/pushbullet.md "Edit this page")

# Pushbullet credentials[#](#pushbullet-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Pushbullet](../../app-nodes/n8n-nodes-base.pushbullet/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [Pushbullet](https://www.pushbullet.com/) account.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Pushbullet's API documentation](https://docs.pushbullet.com/) for more information about the service.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need:

*   A **Client ID**: Generated when you create a Pushbullet app, also known as an OAuth client.
*   A **Client Secret**: Generated when you create a Pushbullet app, also known as an OAuth client.

To generate the **Client ID** and **Client Secret**, go to the [create client](https://www.pushbullet.com/create-client) page. Copy the **OAuth Redirect URL** from n8n and add this as your **redirect\_uri** for the app/client. Use the **client\_id** and **client\_secret** from the OAuth Client in your n8n credential.

Refer to Pushbullet's [OAuth2 Guide](https://docs.pushbullet.com/#oauth2) for more information.

Pushbullet OAuth test link

Pushbullet offers a test link during the client creation process described above. This link isn't compatible with n8n. To verify the authentication works, use the **Connect my account** button in n8n.