[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/instagram.md "Edit this page")

# Facebook Trigger Instagram object[#](#facebook-trigger-instagram-object "Permanent link")

Use this object to receive updates when someone comments on the Media objects of your app users; @mentions your app users; or when Stories of your app users expire. Refer to [Facebook Trigger](../) for more information on the trigger itself.

Credentials

You can find authentication information for this node [here](../../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Trigger configuration[#](#trigger-configuration "Permanent link")

To configure the trigger with this Object:

1.  Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](../../../credentials/facebookapp/).
2.  Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](../../../credentials/facebookapp/) documentation for more information.
3.  Select **Instagram** as the **Object**.
4.  **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in. Options include:
    *   **Comments**: Notifies you when anyone comments on an IG Media owned by your app's Instagram user.
    *   **Messaging Handover**
    *   **Mentions**: Notifies you whenever an Instagram user @mentions an Instagram Business or Creator Account in a comment or caption.
    *   **Messages**: Notifies you when anyone messages your app's Instagram user.
    *   **Messaging Seen**: Notifies you when someone sees a message sent by your app's Instagram user.
    *   **Standby**
    *   **Story Insights**: Notifies you one hour after a story expires with metrics describing interactions on a story.
5.  In **Options**, turn on the toggle to **Include Values**. This Object type fails without the option enabled.

## Related resources[#](#related-resources "Permanent link")

Refer to [Webhooks for Instagram](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-instagram) and Meta's [Instagram](https://developers.facebook.com/docs/graph-api/webhooks/reference/instagram/) Graph API reference for more information.