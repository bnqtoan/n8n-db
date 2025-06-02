[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.brevo.md "Edit this page")

# Brevo node[#](#brevo-node "Permanent link")

Use the Brevo node to automate work in Brevo, and integrate Brevo with other applications. n8n has built-in support for a wide range of Brevo features, including creating, updating, deleting, and getting contacts, attributes, as well as sending emails.

On this page, you'll find a list of operations the Brevo node supports and links to more resources.

Credentials

Refer to [Brevo credentials](../../credentials/brevo/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Contact
    *   Create
    *   Create or Update
    *   Delete
    *   Get
    *   Get All
    *   Update
*   Contact Attribute
    *   Create
    *   Delete
    *   Get All
    *   Update
*   Email
    *   Send
    *   Send Template
*   Sender
    *   Create
    *   Delete
    *   Get All

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Brevo integration templates](https://n8n.io/integrations/brevo/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.