[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.getresponse.md "Edit this page")

# GetResponse node[#](#getresponse-node "Permanent link")

Use the GetResponse node to automate work in GetResponse, and integrate GetResponse with other applications. n8n has built-in support for a wide range of GetResponse features, including creating, updating, deleting, and getting contacts.

On this page, you'll find a list of operations the GetResponse node supports and links to more resources.

Credentials

Refer to [GetResponse credentials](../../credentials/getresponse/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Contact
    *   Create a new contact
    *   Delete a contact
    *   Get a contact
    *   Get all contacts
    *   Update contact properties

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse GetResponse integration templates](https://n8n.io/integrations/getresponse/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.