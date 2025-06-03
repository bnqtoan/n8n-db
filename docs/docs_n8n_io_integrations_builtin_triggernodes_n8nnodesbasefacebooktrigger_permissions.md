[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/permissions.md "Edit this page")

# Facebook Trigger Permissions object[#](#facebook-trigger-permissions-object "Permanent link")

Use this object to receive updates when a user grants or revokes a permission for your app. Refer to [Facebook Trigger](../) for more information on the trigger itself.

Credentials

You can find authentication information for this node [here](../../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Trigger configuration[#](#trigger-configuration "Permanent link")

To configure the trigger with this Object:

1.  Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](../../../credentials/facebookapp/).
2.  Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](../../../credentials/facebookapp/) documentation for more information.
3.  Select **Permissions** as the **Object**.
4.  **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in.
5.  In **Options**, choose whether to turn on the toggle to **Include Values**. When turned on, the node includes the new values for the changes.

## Related resources[#](#related-resources "Permanent link")

Refer to Meta's [Permissions](https://developers.facebook.com/docs/graph-api/webhooks/reference/permissions/) Graph API reference for more information.