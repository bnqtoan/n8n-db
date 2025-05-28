# New WooCommerce product to Slack

## Use cases:

*   **Real-time Notifications:** Instantly inform your team on Slack when a new product is added to your WooCommerce store. This helps keep everyone updated on inventory changes and new offerings.
*   **Sales and Marketing Updates:** Automatically post new product announcements in a dedicated Slack channel for sales and marketing teams to track and promote.
*   **Monitoring New Products:** Keep track of newly created products for quality control and approval processes by notifying relevant personnel on Slack.

## How it works:

This workflow listens for new product creation events in your WooCommerce store and sends a notification to a specified Slack channel.

1.  **Product Created (WooCommerce Trigger):** This node monitors your WooCommerce store for the `product.created` event. When a new product is created, it triggers the workflow.  It requires a WooCommerce API credential to access your store.
2.  **Send to Slack (Slack):** This node receives the product data from the WooCommerce trigger and sends a formatted message to a Slack channel. The message includes the product name, regular price, sale price, a link to the product, and the creation date.  It formats the message with a title, and includes fields with product information in an attachment. It requires a Slack API credential for authorization.

## Services:

*   WooCommerce
*   Slack

## Hashtags:

#n8n #WooCommerce #Slack #Automation #eCommerce
