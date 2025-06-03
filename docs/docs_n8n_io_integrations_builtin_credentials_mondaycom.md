[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/mondaycom.md "Edit this page")

# monday.com credentials[#](#mondaycom-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [monday.com](../../app-nodes/n8n-nodes-base.mondaycom/)

Minimum required version

The monday.com node requires n8n version 1.22.6 or above.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API token
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [monday.com's API documentation](https://developer.monday.com/api-reference/docs/basics) for more information about authenticating with the service.

## Using API token[#](#using-api-token "Permanent link")

To configure this credential, you'll need a [monday.com](https://monday.com/) account and:

*   An API **Token V2**

To get your token:

1.  In your monday.com account, select your profile picture in the top right corner.
2.  Select **Developers**. The Developer Center opens in a new tab.
3.  In the Developer Center, select **My Access Tokens > Show**.
4.  Copy your personal token and enter it in your n8n credential as the **Token V2**.

Refer to [monday.com API Authentication](https://developer.monday.com/api-reference/docs/authentication) for more information.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need a [monday.com](https://monday.com/) account and:

*   A **Client ID**
*   A **Client Secret**

To generate both these fields, register a new monday.com application:

1.  In your monday.com account, select your profile picture in the top right corner.
2.  Select **Developers**. The Developer Center opens in a new tab.
3.  In the Developer Center, select **Build app**. The app details open.
4.  Enter a **Name** for your app, like `n8n integration`.
5.  Copy the **Client ID** and enter it in your n8n credential.
6.  **Show** the **Client Secret**, copy it, and enter it in your n8n credential.
7.  In the left menu, select **OAuth**.
8.  For **Scopes**, select `boards:write` and `boards:read`.
9.  Select **Save Scopes**.
10.  Select the **Redirect URLs** tab.
11.  Copy the **OAuth Redirect URL** from n8n and enter it as the **Redirect URL**.
12.  **Save** your changes in monday.com.
13.  In n8n, select **Connect my account** to finish the setup.

Refer to [Create an app](https://developer.monday.com/apps/docs/create-an-app) for more information on creating apps.

Refer to [OAuth and permissions](https://developer.monday.com/apps/docs/oauth) for more information on the available scopes and setting up the Redirect URL.