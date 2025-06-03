[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.gmail/index.md "Edit this page")

# Gmail node[#](#gmail-node "Permanent link")

Use the Gmail node to automate work in Gmail, and integrate Gmail with other applications. n8n has built-in support for a wide range of Gmail features, including creating, updating, deleting, and getting drafts, messages, labels, thread.

On this page, you'll find a list of operations the Gmail node supports and links to more resources.

Credentials

Refer to [Google credentials](../../credentials/google/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   **Draft**
    *   [**Create**](draft-operations/#create-a-draft) a draft
    *   [**Delete**](draft-operations/#delete-a-draft) a draft
    *   [**Get**](draft-operations/#get-a-draft) a draft
    *   [**Get Many**](draft-operations/#get-many-drafts) drafts
*   **Label**
    *   [**Create**](label-operations/#create-a-label) a label
    *   [**Delete**](label-operations/#delete-a-label) a label
    *   [**Get**](label-operations/#get-a-label) a label
    *   [**Get Many**](label-operations/#get-many-labels) labels
*   **Message**
    *   [**Add Label**](message-operations/#add-label-to-a-message) to a message
    *   [**Delete**](message-operations/#delete-a-message) a message
    *   [**Get**](message-operations/#get-a-message) a message
    *   [**Get Many**](message-operations/#get-many-messages) messages
    *   [**Mark as Read**](message-operations/#mark-as-read)
    *   [**Mark as Unread**](message-operations/#mark-as-unread)
    *   [**Remove Label**](message-operations/#remove-label-from-a-message) from a message
    *   [**Reply**](message-operations/#reply-to-a-message) to a message
    *   [**Send**](message-operations/#send-a-message) a message
*   **Thread**
    *   [**Add Label**](thread-operations/#add-label-to-a-thread) to a thread
    *   [**Delete**](thread-operations/#delete-a-thread) a thread
    *   [**Get**](thread-operations/#get-a-thread) a thread
    *   [**Get Many**](thread-operations/#get-many-threads) threads
    *   [**Remove Label**](thread-operations/#remove-label-from-a-thread) from thread
    *   [**Reply**](thread-operations/#reply-to-a-message) to a message
    *   [**Trash**](thread-operations/#trash-a-thread) a thread
    *   [**Untrash**](thread-operations/#untrash-a-thread) a thread

## Templates and examples[#](#templates-and-examples "Permanent link")

**✨🤖Automate Multi-Platform Social Media Content Creation with AI**

by Joseph LePage

[View template details](https://n8n.io/workflows/3066-automate-multi-platform-social-media-content-creation-with-ai/)

**Automated Web Scraping: email a CSV, save to Google Sheets & Microsoft Excel**

by Mihai Farcas

[View template details](https://n8n.io/workflows/2275-automated-web-scraping-email-a-csv-save-to-google-sheets-and-microsoft-excel/)

**Suggest meeting slots using AI**

by n8n Team

[View template details](https://n8n.io/workflows/1953-suggest-meeting-slots-using-ai/)

[Browse Gmail integration templates](https://n8n.io/integrations/gmail/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to Google's [Gmail API documentation](https://developers.google.com/gmail/api) for detailed information about the API that this node integrates with.

n8n provides a trigger node for Gmail. You can find the trigger node docs [here](../../trigger-nodes/n8n-nodes-base.gmailtrigger/).

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

## Common issues[#](#common-issues "Permanent link")

For common errors or issues and suggested resolution steps, refer to [Common Issues](common-issues/).