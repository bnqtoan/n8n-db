[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.magento2.md "Edit this page")

# Magento 2 node[#](#magento-2-node "Permanent link")

Use the Magento 2 node to automate work in Magento 2, and integrate Magento 2 with other applications. n8n has built-in support for a wide range of Magento 2 features, including creating, updating, deleting, and getting customers, invoices, orders, and projects.

On this page, you'll find a list of operations the Magento 2 node supports and links to more resources.

Credentials

Refer to [Magento 2 credentials](../../credentials/magento2/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Customer
    *   Create a new customer
    *   Delete a customer
    *   Get a customer
    *   Get all customers
    *   Update a customer
*   Invoice
    *   Create an invoice
*   Order
    *   Cancel an order
    *   Get an order
    *   Get all orders
    *   Ship an order
*   Product
    *   Create a product
    *   Delete a product
    *   Get a product
    *   Get all products
    *   Update a product

## Templates and examples[#](#templates-and-examples "Permanent link")

**Vector Database as a Big Data Analysis Tool for AI Agents \[2/3 - anomaly\]**

by Jenny

[View template details](https://n8n.io/workflows/2655-vector-database-as-a-big-data-analysis-tool-for-ai-agents-23-anomaly/)

**Travel Planning Agent with Couchbase Vector Search, Gemini 2.0 Flash and OpenAI**

by Elliot Scribner

[View template details](https://n8n.io/workflows/3881-travel-planning-agent-with-couchbase-vector-search-gemini-20-flash-and-openai/)

**AI Chatbot Call Center: Demo Call Center (Production-Ready, Part 2)**

by ChatPayLabs

[View template details](https://n8n.io/workflows/4045-ai-chatbot-call-center-demo-call-center-production-ready-part-2/)

[Browse Magento 2 integration templates](https://n8n.io/integrations/magento-2/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.