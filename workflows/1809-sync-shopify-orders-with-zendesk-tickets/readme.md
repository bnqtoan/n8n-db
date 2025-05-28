# Shopify Order Updates to Zendesk Ticket Management

## Use cases

*   **Automated Ticket Creation:** Automatically creates a new Zendesk ticket when a new order is created in Shopify, ensuring no order is missed.
*   **Order Status Tracking:** Keeps Zendesk tickets updated with the latest information from Shopify orders, providing real-time visibility into order status and customer details.
*   **Efficient Customer Support:** By linking Shopify orders to Zendesk tickets, customer support agents can quickly access order details and provide faster, more informed assistance.

## How it works

1.  **Shopify Trigger:** The workflow starts with the "On order updated" node, which is triggered whenever an order is updated in Shopify.
2.  **Find Existing Zendesk Ticket:** The "Find if order already has a ticket in Zendesk" node searches Zendesk for an existing ticket associated with the Shopify order using the `external_id` field (populated with the order number).
3.  **Extract Zendesk Ticket ID:** The "Keep only ticket Id" node extracts the external ID and Zendesk ticket ID from the search results.
4.  **Merge Order Data:** The "Add ticket info to order data" node merges the Zendesk ticket information with the original Shopify order data using the order number as the key.
5.  **Check if Ticket Exists:** The "Order exists in Zendesk" node verifies whether a Zendesk ticket ID was found in the previous steps.  If the ticket exists, the workflow ends.
6.  **Create Zendesk Ticket:** If no ticket exists, the "Create new ticket for new orders" node creates a new Zendesk ticket.  The ticket description includes the order number, the number of items, customer name, email, and order status. The `externalId` is set to the Shopify order number.

## Services

*   Shopify
*   Zendesk

## Hashtags

#n8n #shopify #zendesk #automation #ecommerce
