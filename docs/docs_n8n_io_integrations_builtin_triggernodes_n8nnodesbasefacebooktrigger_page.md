[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/page.md "Edit this page")

# Facebook Trigger Page object[#](#facebook-trigger-page-object "Permanent link")

Use this object to receive updates when updates to your page profile fields or profile settings occur or someone mentions your page. Refer to [Facebook Trigger](../) for more information on the trigger itself.

Credentials

You can find authentication information for this node [here](../../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Prerequisites[#](#prerequisites "Permanent link")

This Object requires some configuration in your app and page before you can use the trigger:

1.  At least one page admin needs to grant the `manage_pages` permission to your app.
2.  The page admin needs to have at least moderator privileges. If they don't, they won't receive all content.
3.  You'll also need to add the app to your page, and you may need to go to the [Graph API explorer](https://developers.facebook.com/tools/explorer/) and execute this call with your app token:
    
    1
    
    `{page-id}/subscribed_apps?subscribed_fields=feed`
    

## Trigger configuration[#](#trigger-configuration "Permanent link")

To configure the trigger with this Object:

1.  Select the **Credential to connect with**. Select an existing or create a new [Facebook App credential](../../../credentials/facebookapp/).
2.  Enter the **APP ID** of the app connected to your credential. Refer to the [Facebook App credential](../../../credentials/facebookapp/) documentation for more information.
3.  Select **Page** as the **Object**.
4.  **Field Names or IDs**: By default, the node will trigger on all the available events using the `*` wildcard filter. If you'd like to limit the events, use the `X` to remove the star and use the dropdown or an expression to select the updates you're interested in. Options include individual profile fields, as well as:
    *   **Feed**: Describes most changes to a page's feed, including posts, likes, shares, and so on.
    *   **Leadgen**: Notifies you when a page's lead generation settings change.
    *   **Live Videos**: Notifies you when a page's live video status changes.
    *   **Mention**: Notifies you when new mentions in pages, comments, and so on occur.
    *   **Merchant Review**: Notifies you when a page's merchant review settings change.
    *   **Page Change Proposal**: Notifies you when Facebook suggests proposed changes for your Facebook Page.
    *   **Page Upcoming Change**: Notifies you about upcoming changes that will occur on your Facebook Page. Facebook has suggested these changes and they may have a deadline to accept or reject before automatically taking effect.
    *   **Product Review**: Notifies you when a page's product review settings change.
    *   **Ratings**: Notifies you when a page's ratings change, including new ratings or when a user comments on or reacts to a rating.
    *   **Videos**: Notifies you when the encoding status of a video on a page changes.
5.  In **Options**, turn on the toggle to **Include Values**. This Object type fails without the option enabled.

## Related resources[#](#related-resources "Permanent link")

Refer to [Webhooks for Pages](https://developers.facebook.com/docs/graph-api/webhooks/getting-started/webhooks-for-pages) and Meta's [Page](https://developers.facebook.com/docs/graph-api/webhooks/reference/page/) Graph API reference for more information.