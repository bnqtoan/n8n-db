[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.sendgrid.md "Edit this page")

# SendGrid node[#](#sendgrid-node "Permanent link")

Use the SendGrid node to automate work in SendGrid, and integrate SendGrid with other applications. n8n has built-in support for a wide range of SendGrid features, including creating, updating, deleting, and getting contacts, and lists, as well as sending emails.

On this page, you'll find a list of operations the SendGrid node supports and links to more resources.

Credentials

Refer to [SendGrid credentials](../../credentials/sendgrid/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Contact
    *   Create/update a contact
    *   Delete a contact
    *   Get a contact by ID
    *   Get all contacts
*   List
    *   Create a list
    *   Delete a list
    *   Get a list
    *   Get all lists
    *   Update a list
*   Mail
    *   Send an email.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Track investments using Baserow and n8n**

by Tom

[View template details](https://n8n.io/workflows/1785-track-investments-using-baserow-and-n8n/)

**Automated Email Optin Form with n8n and Hunter io for verification**

by Keith Rumjahn

[View template details](https://n8n.io/workflows/2709-automated-email-optin-form-with-n8n-and-hunter-io-for-verification/)

**Add contacts to SendGrid automatically**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/901-add-contacts-to-sendgrid-automatically/)

[Browse SendGrid integration templates](https://n8n.io/integrations/sendgrid/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.