[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/ad-account.md "Edit this page")

# Facebook Trigger Ad Account object[#](#facebook-trigger-ad-account-object "Permanent link")

Use this object to receive updates on certain ads changes in an Ad Account. Refer to [Facebook Trigger](../) for more information on the trigger itself.

Credentials

You can find authentication information for this node [here](../../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Trigger configuration[#](#trigger-configuration "Permanent link")

To configure the trigger with this Object:

1.  Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](../../../credentials/facebookapp/).
2.  Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](../../../credentials/facebookapp/) documentation for more information.
3.  Select **Ad Account** as the **Object**.
4.  **Field Names or IDs**: By default, the node will trigger on all the available Ad Account events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in. Options include:
    *   **In Process Ad Objects**: Notifies you when a campaign, ad set, or ad exits the `IN_PROCESS` status. Refer to Meta's [Post-processing for Ad Creation and Edits](https://developers.facebook.com/docs/marketing-api/using-the-api/post-processing/) for more information.
    *   **With Issues Ad Objects**: Notifies you when a campaign, ad set, or ad under the ad account receives the `WITH_ISSUES` status.
5.  In **Options**, turn on the toggle to **Include Values**. This Object type fails without the option enabled.

## Related resources[#](#related-resources "Permanent link")

Refer to [Webhooks for Ad Accounts](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-ad-accounts) and Meta's [Ad Account](https://developers.facebook.com/docs/graph-api/webhooks/reference/ad-account/) Graph API reference for more information.