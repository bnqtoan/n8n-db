[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebooktrigger/index.md "Edit this page")

# Facebook Trigger node[#](#facebook-trigger-node "Permanent link")

[Facebook](https://www.facebook.com/) is a social networking site to connect and share with family and friends online.

Use the Facebook Trigger node to trigger a workflow when events occur in Facebook.

Credentials

You can find authentication information for this node [here](../../credentials/facebookapp/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Trigger integrations](https://n8n.io/integrations/facebook-trigger/) page.

## Objects[#](#objects "Permanent link")

*   [**Ad Account**](ad-account/): Get updates for certain ads changes.
*   [**Application**](application/): Get updates sent to the application.
*   [**Certificate Transparency**](certificate-transparency/): Get updates when new security certificates are generated for your subscribed domains, including new certificates and potential phishing attempts.
*   Activity and events in a [**Group**](group/)
*   [**Instagram**](instagram/): Get updates when someone comments on the Media objects of your app users; @mentions your app users; or when Stories of your app users expire.
*   [**Link**](link/): Get updates about the links for rich previews by an external provider
*   [**Page**](page/) updates
*   [**Permissions**](permissions/): Updates when granting or revoking permissions
*   [**User**](user/) profile updates
*   [**WhatsApp Business Account**](whatsapp/)
    
    Use WhatsApp Trigger
    
    n8n recommends using the [WhatsApp Trigger node](../n8n-nodes-base.whatsapptrigger/) with the [WhatsApp credentials](../../credentials/whatsapp/) instead of the Facebook Trigger node for these events. The WhatsApp Trigger node has more events to listen to.
    
*   [**Workplace Security**](workplace-security/)
    

For each **Object**, use the **Field Names or IDs** dropdown to select more details on what data to receive. Refer to the linked pages for more details.

## Related resources[#](#related-resources "Permanent link")

View [example workflows and related content](https://n8n.io/integrations/facebook-trigger/) on n8n's website.

Refer to Meta's [Graph API documentation](https://developers.facebook.com/docs/graph-api/webhooks/reference) for details about their API.