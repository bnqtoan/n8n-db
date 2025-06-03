[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.lonescale.md "Edit this page")

# LoneScale node[#](#lonescale-node "Permanent link")

Use the LoneScale node to automate work in LoneScale and integrate LoneScale with other applications. n8n has built-in support for managing Lists and Items in LoneScale.

On this page, you'll find a list of operations the LoneScale node supports, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/lonescale/).

## Operations[#](#operations "Permanent link")

*   List
    *   Create
*   Item
    *   Create

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse LoneScale integration templates](https://n8n.io/integrations/lonescale/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [LoneScales documentation](https://help-center.lonescale.com/en/articles/6454360-lonescale-public-api) for more information about the service.

n8n provides a trigger node for LoneScale. You can find the trigger node docs [here](../../trigger-nodes/n8n-nodes-base.lonescaletrigger/).

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.