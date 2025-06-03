[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.whatsapp/index.md "Edit this page")

# WhatsApp Business Cloud node[#](#whatsapp-business-cloud-node "Permanent link")

Use the WhatsApp Business Cloud node to automate work in WhatsApp Business, and integrate WhatsApp Business with other applications. n8n has built-in support for a wide range of WhatsApp Business features, including sending messages, and uploading, downloading, and deleting media.

On this page, you'll find a list of operations the WhatsApp Business Cloud node supports and links to more resources.

Credentials

Refer to [WhatsApp Business Cloud credentials](../../credentials/whatsapp/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Message
    *   Send
    *   Send and Wait for Response
    *   Send Template
*   Media
    *   Upload
    *   Download
    *   Delete

## Waiting for a response[#](#waiting-for-a-response "Permanent link")

By choosing the **Send and Wait for a Response** operation, you can send a message and pause the workflow execution until a person confirms the action or provides more information.

### Response Type[#](#response-type "Permanent link")

You can choose between the following types of waiting and approval actions:

*   **Approval**: Users can approve or disapprove from within the message.
*   **Free Text**: Users can submit a response with a form.
*   **Custom Form**: Users can submit a response with a custom form.

You can customize the waiting and response behavior depending on which response type you choose. You can configure these options in any of the above response types:

*   **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
*   **Append n8n Attribution**: Whether to mention in the message that it was sent automatically with n8n (turned on) or not (turned off).

### Approval response customization[#](#approval-response-customization "Permanent link")

When using the Approval response type, you can choose whether to present only an approval button or both approval _and_ disapproval buttons.

You can also customize the button labels for the buttons you include.

### Free Text response customization[#](#free-text-response-customization "Permanent link")

When using the Free Text response type, you can customize the message button label, the form title and description, and the response button label.

### Custom Form response customization[#](#custom-form-response-customization "Permanent link")

When using the Custom Form response type, you build a form using the fields and options you want.

You can customize each form element with the settings outlined in the [n8n Form trigger's form elements](../../core-nodes/n8n-nodes-base.formtrigger/#form-elements). To add more fields, select the **Add Form Element** button.

You'll also be able to customize the message button label, the form title and description, and the response button label.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Building Your First WhatsApp Chatbot**

by Jimleuk

[View template details](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)

**Respond to WhatsApp Messages with AI Like a Pro!**

by Jimleuk

[View template details](https://n8n.io/workflows/2466-respond-to-whatsapp-messages-with-ai-like-a-pro/)

**AI-Powered WhatsApp Chatbot 🤖📲 for Text, Voice, Images & PDFs with memory 🧠**

by Davide

[View template details](https://n8n.io/workflows/3586-ai-powered-whatsapp-chatbot-for-text-voice-images-and-pdfs-with-memory/)

[Browse WhatsApp Business Cloud integration templates](https://n8n.io/integrations/whatsapp-business-cloud/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [WhatsApp Business Platform's Cloud API documentation](https://developers.facebook.com/docs/whatsapp/cloud-api) for details about the operations.

## Common issues[#](#common-issues "Permanent link")

For common errors or issues and suggested resolution steps, refer to [Common Issues](common-issues/).

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.