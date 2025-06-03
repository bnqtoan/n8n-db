[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.zohocrm.md "Edit this page")

# Zoho CRM node[#](#zoho-crm-node "Permanent link")

Use the Zoho CRM node to automate work in Zoho CRM, and integrate Zoho CRM with other applications. n8n has built-in support for a wide range of Zoho CRM features, including creating and deleting accounts, contacts, and deals.

On this page, you'll find a list of operations the Zoho CRM node supports and links to more resources.

Credentials

Refer to [Zoho CRM credentials](../../credentials/zoho/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Account
    *   Create an account
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete an account
    *   Get an account
    *   Get all accounts
    *   Update an account
*   Contact
    *   Create a contact
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a contact
    *   Get a contact
    *   Get all contacts
    *   Update a contact
*   Deal
    *   Create a deal
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a contact
    *   Get a contact
    *   Get all contacts
    *   Update a contact
*   Invoice
    *   Create an invoice
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete an invoice
    *   Get an invoice
    *   Get all invoices
    *   Update an invoice
*   Lead
    *   Create a lead
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a lead
    *   Get a lead
    *   Get all leads
    *   Get lead fields
    *   Update a lead
*   Product
    *   Create a product
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a product
    *   Get a product
    *   Get all products
    *   Update a product
*   Purchase Order
    *   Create a purchase order
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a purchase order
    *   Get a purchase order
    *   Get all purchase orders
    *   Update a purchase order
*   Quote
    *   Create a quote
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a quote
    *   Get a quote
    *   Get all quotes
    *   Update a quote
*   Sales Order
    *   Create a sales order
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a sales order
    *   Get a sales order
    *   Get all sales orders
    *   Update a sales order
*   Vendor
    *   Create a vendor
    *   Create a new record, or update the current one if it already exists (upsert)
    *   Delete a vendor
    *   Get a vendor
    *   Get all vendors
    *   Update a vendor

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Zoho CRM integration templates](https://n8n.io/integrations/zoho-crm/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.