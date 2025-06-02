[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.box.md "Edit this page")

# Box node[#](#box-node "Permanent link")

Use the Box node to automate work in Box, and integrate Box with other applications. n8n has built-in support for a wide range of Box features, including creating, copying, deleting, searching, uploading, and downloading files and folders.

On this page, you'll find a list of operations the Box node supports and links to more resources.

Credentials

Refer to [Box credentials](../../credentials/box/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   File
    *   Copy a file
    *   Delete a file
    *   Download a file
    *   Get a file
    *   Search files
    *   Share a file
    *   Upload a file
*   Folder
    *   Create a folder
    *   Get a folder
    *   Delete a folder
    *   Search files
    *   Share a folder
    *   Update folder

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Box integration templates](https://n8n.io/integrations/box/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.