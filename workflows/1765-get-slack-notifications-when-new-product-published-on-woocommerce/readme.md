# Woocommerce to slack: notify new product created

## Use cases:

*   **Real-time Sales Notifications:** Notify a Slack channel immediately when a new product is created in your WooCommerce store, allowing your team to quickly review and promote the new item.
*   **Inventory Management Alerts:** Use the notification as a trigger for your inventory management team to update stock levels or prepare for increased demand.
*   **Marketing Campaign Activation:**  Inform your marketing team in real-time about the new product so they can kick off promotion campaigns without delay.

## How it works:

This workflow automates the process of sending Slack notifications whenever a new product is created in your WooCommerce store.

1.  **WooCommerce Trigger ("On product creation"):** This node monitors your WooCommerce store for the `product.created` event. When a new product is created, it triggers the workflow.
2.  **Conditional Check ("If URL has /product/")**: This node checks if the product's permalink starts with your store's URL. This makes sure that the product is actually of your store.
3.  **Send Slack Message ("Send message to slack"):** If the condition in the previous step is met, this node sends a message to a specified Slack channel. The message includes:
    *   A notification indicating a new product.
    *   The product's name, regular price, sale price, and a link to the product page.
    *   The date the product was created.
    *   The message is sent to the `newproducts` channel of your Slack workspace.

## Services:

*   WooCommerce
*   Slack

## Hashtags:

#n8n #WooCommerce #Slack #Automation #eCommerce
