[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.quickbooks.md "Edit this page")

# QuickBooks Online node[#](#quickbooks-online-node "Permanent link")

Use the QuickBooks node to automate work in QuickBooks, and integrate QuickBooks with other applications. n8n has built-in support for a wide range of QuickBooks features, including creating, updating, deleting, and getting bills, customers, employees, estimates, and invoices.

On this page, you'll find a list of operations the QuickBooks node supports and links to more resources.

Credentials

Refer to [QuickBooks credentials](../../credentials/quickbooks/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Bill
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update
*   Customer
    *   Create
    *   Get
    *   Get All
    *   Update
*   Employee
    *   Create
    *   Get
    *   Get All
    *   Update
*   Estimate
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Send
    *   Update
*   Invoice
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Send
    *   Update
    *   Void
*   Item
    *   Get
    *   Get All
*   Payment
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Send
    *   Update
    *   Void
*   Purchase
    *   Get
    *   Get All
*   Transaction
    *   Get Report
*   Vendor
    *   Create
    *   Get
    *   Get All
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

**Create a customer and send the invoice automatically**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/949-create-a-customer-and-send-the-invoice-automatically/)

**Create QuickBooks Online Customers With Sales Receipts For New Stripe Payments**

by Artur

[View template details](https://n8n.io/workflows/2807-create-quickbooks-online-customers-with-sales-receipts-for-new-stripe-payments/)

**Create a QuickBooks invoice on a new Onfleet Task creation**

by James Li

[View template details](https://n8n.io/workflows/1546-create-a-quickbooks-invoice-on-a-new-onfleet-task-creation/)

[Browse QuickBooks Online integration templates](https://n8n.io/integrations/quickbooks-online/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.