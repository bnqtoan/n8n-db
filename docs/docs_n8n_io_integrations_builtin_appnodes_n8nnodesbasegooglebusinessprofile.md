[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googlebusinessprofile.md "Edit this page")

# Google Business Profile node[#](#google-business-profile-node "Permanent link")

Use the Google Business Profile node to automate work in Google Business Profile and integrate Google Business Profile with other applications. n8n has built-in support for a wide range of Google Business Profile features, which includes creating, updating, and deleting posts and reviews.

On this page, you'll find a list of operations the Google Business Profile node supports, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/google/).

## Operations[#](#operations "Permanent link")

*   Post
    *   Create
    *   Delete
    *   Get
    *   Get Many
    *   Update
*   Review
    *   Delete Reply
    *   Get
    *   Get Many
    *   Reply

## Templates and examples[#](#templates-and-examples "Permanent link")

**Scrape business emails from Google Maps without the use of any third party APIs**

by Akram Kadri

[View template details](https://n8n.io/workflows/2567-scrape-business-emails-from-google-maps-without-the-use-of-any-third-party-apis/)

**Respond to WhatsApp Messages with AI Like a Pro!**

by Jimleuk

[View template details](https://n8n.io/workflows/2466-respond-to-whatsapp-messages-with-ai-like-a-pro/)

**🚀 Boost your customer service with this WhatsApp Business bot!**

by Eduard

[View template details](https://n8n.io/workflows/2340-boost-your-customer-service-with-this-whatsapp-business-bot/)

[Browse Google Business Profile integration templates](https://n8n.io/integrations/google-business-profile/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

n8n provides a trigger node for Google Business Profile. You can find the trigger node docs [here](../../trigger-nodes/n8n-nodes-base.googlebusinessprofiletrigger/).

Refer to [Google Business Profile's documentation](https://developers.google.com/my-business/reference/rest) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.