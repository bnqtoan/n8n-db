[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/clickup.md "Edit this page")

# ClickUp credentials[#](#clickup-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [ClickUp](../../app-nodes/n8n-nodes-base.clickup/)
*   [ClickUp Trigger](../../trigger-nodes/n8n-nodes-base.clickuptrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API access token
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [ClickUp's documentation](https://clickup.com/api/) for more information about the service.

## Using API access token[#](#using-api-access-token "Permanent link")

To configure this credential, you'll need a [ClickUp](https://www.clickup.com/) account and:

*   A Personal API **Access Token**

To get your personal API token:

1.  If you're using ClickUp 2.0, select your avatar in the lower-left corner and select **Apps**. If you're using ClickUp 3.0, select your avatar in the upper-right corner, select **Settings**, and scroll down to select **Apps** in the sidebar.
2.  Under **API Token**, select **Generate**.
3.  Copy your **Personal API token** and enter it in your n8n credential as the **Access Token**.

Refer to [ClickUp's Personal Token documentation](https://clickup.com/api/developer-portal/authentication#personal-token) for more information.

## Using OAuth2[#](#using-oauth2 "Permanent link")

Note for n8n Cloud users

Cloud users don't need to provide connection details. Select **Connect my account** to connect through your browser.

If you're [self-hosting](../../../../hosting/) n8n, you'll need to create an OAuth app:

1.  In ClickUp, select your avatar and select **Integrations**.
2.  Select **ClickUp API**.
3.  Select **Create an App**.
4.  Enter a **Name** for your app.
5.  In n8n, copy the **OAuth Redirect URL**. Enter this as your ClickUp app's **Redirect URL**.
6.  Once you create your app, copy the **client\_id** and **secret** and enter them in your n8n credential.
7.  Select **Connect my account** and follow the on-screen prompts to finish connecting the credential.

Refer to the [ClickUp Oauth flow documentation](https://clickup.com/api/developer-portal/authentication#oauth-flow) for more information.