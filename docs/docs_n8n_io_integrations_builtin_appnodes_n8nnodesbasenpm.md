[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.npm.md "Edit this page")

# npm node[#](#npm-node "Permanent link")

Use the npm node to automate work in npm, and integrate npm with other applications.

On this page, you'll find a list of operations the npm node supports and links to more resources.

Credentials

Refer to [npm credentials](../../credentials/npm/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Package
    *   Get Package Metadata
    *   Get Package Versions
    *   Search for Packages
*   Distribution Tag
    *   Get All Tags
    *   Update a Tag

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse npm integration templates](https://n8n.io/integrations/npm/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [npm's documentation](https://docs.npmjs.com/) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.