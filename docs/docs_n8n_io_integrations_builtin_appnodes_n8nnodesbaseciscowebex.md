[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.ciscowebex.md "Edit this page")

# Webex by Cisco node[#](#webex-by-cisco-node "Permanent link")

Use the Webex by Cisco node to automate work in Webex, and integrate Webex with other applications. n8n has built-in support for a wide range of Webex features, including creating, getting, updating, and deleting meetings and messages.

On this page, you'll find a list of operations the Webex node supports and links to more resources.

Credentials

Refer to [Webex credentials](../../credentials/ciscowebex/) for guidance on setting up authentication.

Examples and Templates

For usage examples and templates to help you get started, take a look at n8n's [Webex integrations](https://n8n.io/integrations/webex-by-cisco/) list.

## Operations[#](#operations "Permanent link")

*   Meeting
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   Message
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Webex by Cisco integration templates](https://n8n.io/integrations/webex-by-cisco/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.