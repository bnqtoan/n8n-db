[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.mindee.md "Edit this page")

# Mindee node[#](#mindee-node "Permanent link")

Use the Mindee node to automate work in Mindee, and integrate Mindee with other applications. n8n has built-in support for a wide range of Mindee features, including predicting invoices.

On this page, you'll find a list of operations the Mindee node supports and links to more resources.

Credentials

Refer to [Mindee credentials](../../credentials/mindee/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   **Invoice**
    *   Predict
*   **Receipt**
    *   Predict

## Templates and examples[#](#templates-and-examples "Permanent link")

**Extract expenses from emails and add to Google Sheets**

by Jonathan

[View template details](https://n8n.io/workflows/1466-extract-expenses-from-emails-and-add-to-google-sheets/)

**Notify on new emails with invoices in Slack**

by Jonathan

[View template details](https://n8n.io/workflows/1467-notify-on-new-emails-with-invoices-in-slack/)

**Extract information from an image of a receipt**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/702-extract-information-from-an-image-of-a-receipt/)

[Browse Mindee integration templates](https://n8n.io/integrations/mindee/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.