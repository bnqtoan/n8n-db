[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/gotowebinar.md "Edit this page")

# GoTo Webinar credentials[#](#goto-webinar-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [GoToWebinar](../../app-nodes/n8n-nodes-base.gotowebinar/)

## Prerequisites[#](#prerequisites "Permanent link")

Create a [GoToWebinar](https://www.goto.com/webinar) account with [Developer Center](https://developer.goto.com/) access.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [GoToWebinar's API documentation](https://developer.goto.com/GoToWebinarV2) for more information about authenticating with the service.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need:

*   A **Client ID**: Provided once you create an OAuth client
*   A **Client Secret**: Provided once you create an OAuth client

Refer to the [Create an OAuth client documentation](https://developer.goto.com/guides/Get%20Started/02_HOW_createClient/) for detailed instructions on creating an OAuth client. Copy the **OAuth Callback URL** from n8n to use as the **Redirect URI** in your OAuth client. The Client ID and Client secret are provided once you've finished setting up your client.