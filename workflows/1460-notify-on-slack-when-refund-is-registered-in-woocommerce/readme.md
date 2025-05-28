# New WooCommerce refund to Slack

## Use cases:

*   **Real-time Refund Notifications:**  Immediately notify a designated Slack channel when a WooCommerce order is refunded and the refund amount is significant (e.g., over $100). This allows for prompt attention to customer issues.
*   **Fraud Detection:**  Track large refunds to identify potential fraudulent activities or unusual order patterns.
*   **Customer Service Monitoring:**  Keep customer service teams informed about refunds issued, enabling them to proactively follow up with customers and address any concerns.

## How it works:

1.  **Order Updated (WooCommerce Trigger):**  This node monitors WooCommerce for order updates, specifically the `order.updated` event.
2.  **If Refund and Over 100 (IF Node):** It checks if the order's status is "refunded" AND if the total refund amount is greater than or equal to 100 (presumably USD or the currency set in WooCommerce).
3.  **Send to Slack (Slack Node):** If both conditions are met, a message is sent to a specified Slack channel (woo-commerce). The message includes a notification that a refund has been issued, along with details like the Order ID, Status, Total amount, and the modification date.  The message is formatted with color-coding for visibility.

## Services:

*   WooCommerce
*   Slack

## Hashtags:

#n8n #WooCommerce #Slack #Automation #RefundNotification
