[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.rocketchat.md "Edit this page")

# Rocket.Chat node[#](#rocketchat-node "Permanent link")

Use the Rocket.Chat node to automate work in Rocket.Chat, and integrate Rocket.Chat with other applications. n8n supports posting messages to channels, and sending direct messages, with Rocket.Chat.

On this page, you'll find a list of operations the Rocket.Chat node supports and links to more resources.

Credentials

Refer to [Rocket.Chat credentials](../../credentials/rocketchat/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Chat
    *   Post a message to a channel or a direct message

## Templates and examples[#](#templates-and-examples "Permanent link")

**Post latest Twitter mentions to Slack**

by Nisarag

[View template details](https://n8n.io/workflows/617-post-latest-twitter-mentions-to-slack/)

**Post a message to a channel in RocketChat**

by tanaypant

[View template details](https://n8n.io/workflows/462-post-a-message-to-a-channel-in-rocketchat/)

**Render custom text over images**

by tanaypant

[View template details](https://n8n.io/workflows/365-render-custom-text-over-images/)

[Browse Rocket.Chat integration templates](https://n8n.io/integrations/rocketchat/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.