[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/certificate-transparency.md "Edit this page")

# Facebook Trigger Certificate Transparency object[#](#facebook-trigger-certificate-transparency-object "Permanent link")

Use this object to receive updates about newly issued certificates for any domains that you have subscribed for certificate alerts or phishing alerts. Refer to [Facebook Trigger](../) for more information on the trigger itself.

Credentials

You can find authentication information for this node [here](../../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Trigger configuration[#](#trigger-configuration "Permanent link")

To configure the trigger with this Object:

1.  Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](../../../credentials/facebookapp/).
2.  Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](../../../credentials/facebookapp/) documentation for more information.
3.  Select **Certificate Transparency** as the **Object**.
4.  **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in. Options include:
    *   **Certificate**: Notifies you when someone issues a new certificate for your subscribed domains. You'll need to subscribe your domain for certificate alerts.
    *   **Phishing**: Notifies you when someone issues a new certificate that may be phishing one of your legitimate subscribed domains.
5.  In **Options**, turn on the toggle to **Include Values**. This Object type fails without the option enabled.

For these alerts, you'll need to subscribe your domain to the relevant alerts:

*   Refer to [Certificate Alerts](https://developers.facebook.com/docs/certificate-transparency-api#certificate-alerts-subscribing) for Certificate Alerts subscriptions.
*   Refer to [Phishing Alerts](https://developers.facebook.com/docs/certificate-transparency-api#phishing-alerts-subscribing) for Phishing Alerts subscriptions.

## Related resources[#](#related-resources "Permanent link")

Refer to [Webhooks for Certificate Transparency](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-certificate-transparency) and Meta's [Certificate Transparency](https://developers.facebook.com/docs/graph-api/webhooks/reference/certificate-transparency/) Graph API reference for more information.