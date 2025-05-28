# Send a message on Mattermost when an order is created in WooCommerce

## Use cases:

*   **Real-time Sales Notifications:** Get instant alerts in a Mattermost channel whenever a new order is placed in your WooCommerce store.
*   **Team Collaboration:** Keep your sales or support team informed about new purchases, allowing them to quickly follow up or address any issues.
*   **Order Tracking:** Use the notifications to track order frequency and sales trends, helping you to optimize your business strategy.

## How it works:

This workflow triggers when a new order is created in WooCommerce. Specifically, the "WooCommerce Trigger" node listens for the `order.created` event. Once triggered, the "Mattermost" node sends a message to a specified channel. The message includes the customer's first name and the name of the first item they purchased (from `line_items`).

1.  **WooCommerce Trigger:** Listens for the `order.created` event in WooCommerce.
2.  **Mattermost:** Sends a message to the specified Mattermost channel with information about the order, including the customer's first name and the name of the first item they purchased.

## Services:

*   WooCommerce
*   Mattermost

## Hashtags:

#n8n #WooCommerce #Mattermost #Automation #eCommerce
