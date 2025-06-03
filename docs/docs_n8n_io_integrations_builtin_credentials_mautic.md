[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/mautic.md "Edit this page")

# Mautic credentials[#](#mautic-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Mautic](../../app-nodes/n8n-nodes-base.mautic/)
*   [Mautic Trigger](../../trigger-nodes/n8n-nodes-base.mautictrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   Basic auth
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Mautic's API documentation](https://developer.mautic.org/#rest-api) for more information about the service.

## Using basic auth[#](#using-basic-auth "Permanent link")

API enabled

To set up this credential, your Mautic instance must have the API enabled. Refer to [Enable the API](#enable-the-api) for instructions.

To configure this credential, you'll need an account on a [Mautic](https://www.mautic.org/) instance and:

*   Your **URL**
*   A **Username**
*   A **Password**

To set it up:

1.  In Mautic, go to **Configuration > API Settings**.
2.  If **Enable HTTP basic auth?** is set to **No**, change it to **Yes** and save. Refer to the [API Settings documentation](https://docs.mautic.org/en/5.x/configuration/settings.html#api-settings) for more information.
3.  In n8n, enter the Base **URL** of your Mautic instance.
4.  Enter your Mautic **Username**.
5.  Enter your Mautic **Password**.

## Using OAuth2[#](#using-oauth2 "Permanent link")

API enabled

To set up this credential, your Mautic instance must have the API enabled. Refer to [Enable the API](#enable-the-api) for instructions.

To configure this credential, you'll need an account on a [Mautic](https://www.mautic.org/) instance and:

*   A **Client ID**: Generated when you create new API credentials.
*   A **Client Secret**: Generated when you create new API credentials.
*   Your **URL**

To set it up:

1.  In Mautic, go to **Configuration > Settings**.
2.  Select **API Credentials**.
    
    No API Credentials menu
    
    If you don't see the **API Credentials** option under **Configuration > Settings**, be sure to [Enable the API](#enable-the-api). If you've enabled the API and you still don't see the option, try [manually clearing the cache](https://forum.mautic.org/t/cant-find-api-credentials-menu/10689).
    
3.  Select the option to **Create new client**.
    
4.  Select **OAuth 2** as the **Authorization Protocol**.
5.  Enter a **Name** for your credential, like `n8n integration`.
6.  In n8n, copy the **OAuth Callback URL** and enter it as the **Redirect URI** in Mautic.
7.  Select **Apply**.
8.  Copy the **Client ID** from Mautic and enter it in your n8n credential.
9.  Copy the **Client Secret** from Mautic and enter it in your n8n credential.
10.  Enter the Base **URL** of your Mautic instance.

Refer to [What is Mautic's API?](https://kb.mautic.org/article/what-is-mautic-039%3bs-api.html#mcetoc_1g7n1bgoo0) for more information.

## Enable the API[#](#enable-the-api "Permanent link")

To enable the API in your Mautic instance:

1.  Go to **Settings > Configuration**.
2.  Select **API Settings**.
3.  Set **API enabled?** to **Yes**.
4.  **Save** your changes.

Refer to [How to use the Mautic API](https://kb.mautic.org/article/what-is-mautic-039;s-api.html) for more information.