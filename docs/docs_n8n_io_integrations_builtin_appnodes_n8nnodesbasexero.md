[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.xero.md "Edit this page")

# Xero node[#](#xero-node "Permanent link")

Use the Xero node to automate work in Xero, and integrate Xero with other applications. n8n has built-in support for a wide range of Xero features, including creating, updating, and getting contacts and invoices.

On this page, you'll find a list of operations the Xero node supports and links to more resources.

Credentials

Refer to [Xero credentials](../../credentials/xero/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Contact
    *   Create a contact
    *   Get a contact
    *   Get all contacts
    *   Update a contact
*   Invoice
    *   Create a invoice
    *   Get a invoice
    *   Get all invoices
    *   Update a invoice

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Xero integration templates](https://n8n.io/integrations/xero/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Xero's API documentation](https://developer.xero.com/documentation/api/accounting/overview) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.