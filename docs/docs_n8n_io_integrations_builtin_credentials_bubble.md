[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/bubble.md "Edit this page")

# Bubble credentials[#](#bubble-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Bubble](../../app-nodes/n8n-nodes-base.bubble/)

API access

You need a paid plan to access the Bubble APIs.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [Bubble's API documentation](https://manual.bubble.io/help-guides/integrations/api) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a paid [Bubble](https://bubble.io) account and:

*   An **API Token**
*   An **App Name**
*   Your **Domain**, if you're using a custom domain

To set it up, you'll need to create an app:

1.  Go to the [**Apps**](https://bubble.io/home/apps) page in Bubble.
2.  Select **Create an app**.
3.  Enter a **Name** for your app, like `n8n-integration`.
4.  Select **Get started**. The app's details open.
5.  In the left navigation, select **Settings** (the gear cog icon).
6.  Select the **API** tab.
7.  In the **Public API Endpoints** section, check the box to **Enable Data API**.
8.  The page displays the **Data API root URL**, for example: `https://n8n-integration.bubbleapps.io/version-test/api/1.1/obj`.
9.  Copy the part of the URL after `https://` and before `.bubbleapps.io` and enter it in n8n as the **App Name**. In the above example, you'd enter `n8n-integration`.
10.  Select **Generate a new API token**.
11.  Enter an **API Token Label**, like `n8n integration`.
12.  Copy the **Private key** and enter it as the **API Token** in your n8n credential.
    *   Refer to [Data API | Authentication](https://manual.bubble.io/core-resources/api/the-bubble-api/the-data-api/authentication) for more information on generating API tokens.
13.  In n8n, select the **Environment** that best matches your app:
    *   Select **Development** for an app that you haven't deployed, accessed at `https://appname.bubbleapps.io/version-test` or `https://www.mydomain.com/version-test`.
    *   Select **Live** for an app that you've [deployed](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/deploying-your-app), accessed at `https://appname.bubbleapps.io` or `https://www.mydomain.com`.
14.  In n8n, select your **Hosting**:
    *   If you haven't set up a custom domain, select **Bubble Hosting**.
    *   If you've set up a [custom domain](https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/tabs-and-sections/settings-tab/custom-domain-and-dns), select **Self Hosted** and enter your custom **Domain**.

Refer to Bubble's [Creating and managing apps](https://manual.bubble.io/help-guides/getting-started/creating-and-managing-apps) documentation for more information.