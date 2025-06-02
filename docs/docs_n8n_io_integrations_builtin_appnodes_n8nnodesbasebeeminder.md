[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.beeminder.md "Edit this page")

# Beeminder node[#](#beeminder-node "Permanent link")

Use the Beeminder node to automate work in Beeminder, and integrate Beeminder with other applications. n8n has built-in support for a wide range of Beeminder features, including creating, deleting, and updating data points.

On this page, you'll find a list of operations the Beeminder node supports and links to more resources.

Credentials

Refer to [Beeminder credentials](../../credentials/beeminder/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

**data point** - Create data point for a goal - Delete a data point - Get all data points for a goal - Update a data point

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Beeminder integration templates](https://n8n.io/integrations/beeminder/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.