[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.adalo.md "Edit this page")

# Adalo node[#](#adalo-node "Permanent link")

Use the Adalo node to automate work in Adalo, and integrate Adalo with other applications. n8n has built-in support for a wide range of Adalo features, including like creating, getting, updating and deleting databases, records, and collections.

On this page, you'll find a list of operations the Adalo node supports and links to more resources.

Credentials

Refer to [Adalo credentials](../../credentials/adalo/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Collection
    *   Create
    *   Delete
    *   Get
    *   Get Many
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Adalo integration templates](https://n8n.io/integrations/adalo/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Adalo's documentation](https://help.adalo.com/) for more information on using Adalo. Their [External Collections with APIs](https://help.adalo.com/integrations/external-collections-with-apis) page gives more detail about what you can do with Adalo collections.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.