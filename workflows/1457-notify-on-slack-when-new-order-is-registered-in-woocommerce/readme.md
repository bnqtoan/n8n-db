# New WooCommerce order to Slack

## Use cases:

*   **Real-time Order Notifications:** Get instant Slack notifications for every new order placed on your WooCommerce store, ensuring timely order processing and customer service.
*   **High-Value Order Alerts:** Filter and specifically notify your team about orders exceeding a certain value (e.g., $100) for prioritized handling.
*   **Order Tracking and Monitoring:** Easily monitor order status and details directly within a dedicated Slack channel for improved team collaboration and visibility.

## How it works:

1.  **Order Created (WooCommerce Trigger):** This node listens for the `order.created` event in your WooCommerce store. When a new order is placed, it triggers the workflow.
2.  **Price over 100 (IF Node):** This node checks if the total order value is greater than or equal to 100.
3.  **Send to Slack (Slack Node):** If the order value is greater than or equal to 100, this node sends a formatted message to a specified Slack channel. The message includes order details like ID, status, total amount (including currency symbol), and a direct link to the order in WooCommerce. It also contains information of the date the order was created and the transaction ID. If the order value is less than 100, nothing will be sent to the Slack channel.

## Services:

*   WooCommerce
*   Slack

## Hashtags:

#n8n #WooCommerce #Slack #Automation #eCommerce
