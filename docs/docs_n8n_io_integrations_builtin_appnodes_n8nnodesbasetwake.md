[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.twake.md "Edit this page")

# Twake node[#](#twake-node "Permanent link")

Use the Twake node to automate work in Twake, and integrate Twake with other applications. n8n supports sending messages with Twake.

On this page, you'll find a list of operations the Twake node supports and links to more resources.

Credentials

Refer to [Twake credentials](../../credentials/twake/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Message
    *   Send a message

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Twake integration templates](https://n8n.io/integrations/twake/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.