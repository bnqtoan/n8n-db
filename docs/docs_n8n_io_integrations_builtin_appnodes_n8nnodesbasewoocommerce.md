[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.woocommerce.md "Edit this page")

# WooCommerce node[#](#woocommerce-node "Permanent link")

Use the WooCommerce node to automate work in WooCommerce, and integrate WooCommerce with other applications. n8n has built-in support for a wide range of WooCommerce features, including creating and deleting customers, orders, and products.

On this page, you'll find a list of operations the WooCommerce node supports and links to more resources.

Credentials

Refer to [WooCommerce credentials](../../credentials/woocommerce/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Customer
    *   Create a customer
    *   Delete a customer
    *   Retrieve a customer
    *   Retrieve all customers
    *   Update a customer
*   Order
    *   Create a order
    *   Delete a order
    *   Get a order
    *   Get all orders
    *   Update an order
*   Product
    *   Create a product
    *   Delete a product
    *   Get a product
    *   Get all products
    *   Update a product

## Templates and examples[#](#templates-and-examples "Permanent link")

**AI-powered WooCommerce Support-Agent**

by Jan Oberhauser

[View template details](https://n8n.io/workflows/2161-ai-powered-woocommerce-support-agent/)

**Personal Shopper Chatbot for WooCommerce with RAG using Google Drive and openAI**

by Davide

[View template details](https://n8n.io/workflows/2784-personal-shopper-chatbot-for-woocommerce-with-rag-using-google-drive-and-openai/)

**Create, update and get a product from WooCommerce**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/847-create-update-and-get-a-product-from-woocommerce/)

[Browse WooCommerce integration templates](https://n8n.io/integrations/woocommerce/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.