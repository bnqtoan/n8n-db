[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.raindrop.md "Edit this page")

# Raindrop node[#](#raindrop-node "Permanent link")

Use the Raindrop node to automate work in Raindrop, and integrate Raindrop with other applications. n8n has built-in support for a wide range of Raindrop features, including getting users, deleting tags, and creating, updating, deleting and getting collections and bookmarks.

On this page, you'll find a list of operations the Raindrop node supports and links to more resources.

Credentials

Refer to [Raindrop credentials](../../credentials/raindrop/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Bookmark
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   Collection
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   Tag
    *   Delete
    *   Get All
*   User
    *   Get

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Raindrop integration templates](https://n8n.io/integrations/raindrop/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.