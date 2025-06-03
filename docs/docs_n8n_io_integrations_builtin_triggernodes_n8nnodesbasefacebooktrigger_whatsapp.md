[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/whatsapp.md "Edit this page")

# Facebook Trigger WhatsApp Business Account object[#](#facebook-trigger-whatsapp-business-account-object "Permanent link")

Use this object to receive updates when your WhatsApp Business Account (WABA) changes. Refer to [Facebook Trigger](../) for more information on the trigger itself.

Use WhatsApp trigger

n8n recommends using the [WhatsApp Trigger node](../../n8n-nodes-base.whatsapptrigger/) with the [WhatsApp credentials](../../../credentials/whatsapp/) instead of the Facebook Trigger node. That trigger node includes twice the events to subscribe to.

Credentials

You can find authentication information for this node [here](../../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Prerequisites[#](#prerequisites "Permanent link")

This Object requires some configuration in your app and WhatsApp account before you can use the trigger:

1.  Subscribe your app under your WhatsApp business account. You must subscribe an app owned by your business. Apps shared with your business can't receive webhook notifications.
2.  If you are working as a Solution Partner, make sure your app has completed App Review and requested the `whatsapp_business_management` permission.

## Trigger configuration[#](#trigger-configuration "Permanent link")

To configure the trigger with this Object:

1.  Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](../../../credentials/facebookapp/).
2.  Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](../../../credentials/facebookapp/) documentation for more information.
3.  Select **WhatsApp Business Account** as the **Object**.
4.  **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in. Options include:
    *   **Message Template Status Update**
    *   **Phone Number Name Update**
    *   **Phone Number Quality Update**
    *   **Account Review Update**
    *   **Account Update**
5.  In **Options**, turn on the toggle to **Include Values**. This Object type fails without the option enabled.

Refer to [Webhooks for WhatsApp Business Accounts](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-whatsapp) and Meta's [WhatsApp Business Account](https://developers.facebook.com/docs/graph-api/webhooks/reference/whatsapp-business-account/) Graph API reference for more information.