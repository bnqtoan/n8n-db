[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.pushbullet.md "Edit this page")

# Pushbullet node[#](#pushbullet-node "Permanent link")

Use the Pushbullet node to automate work in Pushbullet, and integrate Pushbullet with other applications. n8n has built-in support for a wide range of Pushbullet features, including creating, updating, deleting, and getting a push.

On this page, you'll find a list of operations the Pushbullet node supports and links to more resources.

Credentials

Refer to [Pushbullet credentials](../../credentials/pushbullet/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Push
    *   Create a push
    *   Delete a push
    *   Get all pushes
    *   Update a push

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Pushbullet integration templates](https://n8n.io/integrations/pushbullet/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.