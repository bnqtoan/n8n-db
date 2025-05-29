# Shopify To Odoo With Contact,Product & Order

## Use cases:

- Automatically create or update customer contacts in Odoo when a new customer is created in Shopify.
- Synchronize product information from Shopify to Odoo, ensuring consistent inventory and product details across both platforms.
- Automatically create sales orders in Odoo when a new order is placed in Shopify. This includes transferring order details, customer information, and line items.

## How it works:

This workflow automates the synchronization of customer, product, and order data from Shopify to Odoo.

1.  **Shopify Trigger:** This node listens for specific events in Shopify, such as new orders or customer creation.
2.  **Odoo (Create/Update Contact):** This node search for existing contacts in Odoo first, create it if don't exist.
3.  **Odoo (Create/Update Product):** This node create or update product details like name, price, and description in Odoo based on information from Shopify.
4.  **Odoo (Create Sale Order):** Create the sale order with customer and product information.
5.  **Other Node:** Code, Split Out and Filter nodes are used to transform data and controle the flow execution.

## Services:

-   Shopify
-   Odoo

## Hashtags:

#n8n #automation #Shopify #Odoo #eCommerce
