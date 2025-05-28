# Send Telegram Alerts for New WooCommerce Orders

## Use cases:

- **Real-time Order Notifications:** Get instantly notified on Telegram when a new WooCommerce order is placed and its status is updated to "Processing," allowing for immediate action.
- **Improved Customer Service:** Quickly access order details to address customer inquiries or issues related to processing orders.
- **Efficient Order Management:** Stay on top of order fulfillment by receiving immediate notifications, ensuring timely processing and shipping.

## How it works:

1.  **Receive WooCommerce Order:** The workflow starts with a Webhook node that listens for POST requests from WooCommerce whenever an order is updated.  The webhook is triggered when the order status is updated.
2.  **Check if Order Status is Processing:** An If node checks if the order status is "processing." This ensures that the Telegram notification is only sent when the order is ready for fulfillment.
3.  **Design Message Template:** A Code node extracts and formats relevant order information (Order ID, Customer Name, Amount, Date, City, Phone, Order Notes and product list) into a readable message for Telegram. The code constructs the message including the order details.
4.  **Telegram:** The Telegram node sends the formatted message to a specified Telegram chat ID, providing the user with a notification of the new order and its details.

## Services:

-   WooCommerce
-   Telegram

## Hashtags:

#n8n #automation #woocommerce #telegram #ecommerce
