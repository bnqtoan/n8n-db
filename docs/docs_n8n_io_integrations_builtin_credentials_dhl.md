[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/dhl.md "Edit this page")

# DHL credentials[#](#dhl-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [DHL](../../app-nodes/n8n-nodes-base.dhl/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API key

## Related resources[#](#related-resources "Permanent link")

Refer to [DHL's Developer documentation](https://support-developer.dhl.com/support/home) for more information about the service.

## Using API key[#](#using-api-key "Permanent link")

To configure this credential, you'll need a [DHL Developer](https://developer.dhl.com/user/register) account and:

*   An **API Key**

To get an API key, create an app:

1.  In the DHL Developer portal, select the user icon to open your [User Apps](https://developer.dhl.com/user/apps).
2.  Select **\+ Create App**.
3.  Enter an **App name**, like `n8n integration`.
4.  Enter a **Machine name**, like `n8n_integration`.
5.  In **SELECT APIs**, select **Shipment Tracking - Unified**. The API is added to the **Add API to app** section.
6.  In the **Add API to app** section, select the **+** next to the **Shipment Tracking - Unified** API.
7.  Select **Create App**. The **Apps** page opens, displaying the app you just created.
8.  Select the app you just created to view its details.
9.  Select **Show key** next to **API Key**.
10.  Copy the **API Key** and enter it in your n8n credential.

Refer to [How to create an app?](https://support-developer.dhl.com/support/solutions/articles/47001177011-how-to-create-an-app-) for more information.