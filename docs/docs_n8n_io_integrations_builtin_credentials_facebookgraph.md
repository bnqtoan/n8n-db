[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/facebookgraph.md "Edit this page")

# Facebook Graph API credentials[#](#facebook-graph-api-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Facebook Graph API](../../app-nodes/n8n-nodes-base.facebookgraphapi/)

Facebook Trigger credentials

If you want to create credentials for the [Facebook Trigger](../../trigger-nodes/n8n-nodes-base.facebooktrigger/) node, follow the instructions mentioned in the [Facebook App credentials](../facebookapp/) documentation.

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   App access token

## Related resources[#](#related-resources "Permanent link")

Refer to [Meta's Graph API documentation](https://developers.facebook.com/docs/graph-api/overview) for more information about the service.

## Using app access token[#](#using-app-access-token "Permanent link")

To configure this credential, you'll need a [Meta for Developers](https://developers.facebook.com/) account and:

*   An app **Access Token**

There are two steps in setting up your credential:

1.  [Create a Meta app](#create-a-meta-app) with the products you need to access.
2.  [Generate an App Access Token](#generate-an-app-access-token) for that app.

Refer to the detailed instructions below for each step.

### Create a Meta app[#](#create-a-meta-app "Permanent link")

To create a Meta app:

1.  Go to the Meta Developer [App Dashboard](https://developers.facebook.com/apps) and select **Create App**.
2.  If you have a business portfolio and you're ready to connect the app to it, select the business portfolio. If you don't have a business portfolio or you're not ready to connect the app to the portfolio, select **I don’t want to connect a business portfolio yet** and select **Next**. The **Use cases** page opens.
3.  Select the **Use case** that aligns with how you wish to use the Facebook Graph API. For example, for products in Meta's **Business** suite (like Messenger, Instagram, WhatsApp, Marketing API, App Events, Audience Network, Commerce API, Fundraisers, Jobs, Threat Exchange, and Webhooks), select **Other**, then select **Next**.
4.  Select **Business** and **Next**.
5.  Complete the essential information:
    *   Add an **App name**.
    *   Add an **App contact email**.
    *   Here again you can connect to a business portfolio or skip it.
6.  Select **Create app**.
7.  The **Add products to your app** page opens.
8.  Select **App settings > Basic** from the left menu.
9.  Enter a **Privacy Policy URL**. (Required to take the app "Live.")
10.  Select **Save changes**.
11.  At the top of the page, toggle the **App Mode** from **Development** to **Live**.
12.  In the left menu, select **Add Product**.
13.  The **Add products to your app** page appears. Select the products that make sense for your app and configure them.

Refer to Meta's [Create an app](https://developers.facebook.com/docs/development/create-an-app) documentation for more information on creating an app, required fields like the Privacy Policy URL, and adding products.

For more information on the app modes and switching to **Live** mode, refer to [App Modes](https://developers.facebook.com/docs/development/build-and-test/app-modes) and [Publish | App Types](https://developers.facebook.com/docs/development/release#app-types).

### Generate an App Access Token[#](#generate-an-app-access-token "Permanent link")

Next, create an app access token to use with your n8n credential and the products you selected:

1.  In a separate tab or window, open the [Graph API explorer](https://developers.facebook.com/tools/explorer/).
2.  Select the **Meta App** you just created in the **Access Token** section.
3.  In **User or Page**, select **Get App Token**.
4.  Select **Generate Access Token**.
5.  The page prompts you to log in and grant access. Follow the on-screen prompts.
    
    App unavailable
    
    You may receive a warning that the app isn't available. Once you take an app live, there may be a few minutes' delay before you can generate an access token.
    
6.  Copy the token and enter it in your n8n credential as the **Access Token**.
    

Refer to the Meta instructions for [Your First Request](https://developers.facebook.com/docs/graph-api/get-started#get-started) for more information on generating the token.