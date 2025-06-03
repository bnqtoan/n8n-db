[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftgraphsecurity.md "Edit this page")

# Microsoft Graph Security node[#](#microsoft-graph-security-node "Permanent link")

Use the Microsoft Graph Security node to automate work in Microsoft Graph Security, and integrate Microsoft Graph Security with other applications. n8n has built-in support for a wide range of Microsoft Graph Security features, including getting, and updating scores, and profiles.

On this page, you'll find a list of operations the Microsoft Graph Security node supports and links to more resources.

Credentials

Refer to [Microsoft credentials](../../credentials/microsoft/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Secure Score
    *   Get
    *   Get All
*   Secure Score Control Profile
    *   Get
    *   Get All
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Microsoft Graph Security integration templates](https://n8n.io/integrations/microsoft-graph-security/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.