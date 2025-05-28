# Low Stock & Sold Out Watcher for Shopify

## Use cases:
- **Real-time Inventory Alerts:** Notifies store owners immediately when product stock is low or completely sold out, preventing lost sales due to unavailability.
- **Proactive Stock Management:** Helps in planning timely reorders by providing early warnings about dwindling stock levels.
- **Automated Customer Communication:** Triggers automated messages to customers about product availability, keeping them informed and engaged.

## How it works:
1. **Shopify Webhook:** The workflow starts with a Webhook node that listens for "Inventory Level Update" events from Shopify. (Webhook URL needs to be configured in Shopify).
2. **Inventory Check (Code Node):** A Code node processes the data received from the webhook, extracting the available inventory and inventory item ID.  It determines if the inventory is low (less than 4) or out of stock (equal to 0).
3. **Condition Check (If Nodes):** Two "If" nodes check the status from the Code Node: one checks if `low_inventory` is true, and the other checks if `out_of_stock` is true.
4. **Shopify Data Fetch (GraphQL Nodes):** Based on the inventory status, a GraphQL node queries the Shopify API to retrieve product details, including variant information, inventory quantity, and product image URL. It gets the `inventory_tem` value from the Code node.
5. **Discord Notification (HTTP Request Nodes):**  Depending on the "If" node result, an HTTP Request node sends a message to a Discord channel. The message includes the product title, remaining inventory, variant details, and product image.  There are two HTTP Request nodes: one for low stock and another for out-of-stock situations. The node uses the data collected from the previous graphql node.

## Services:
- Shopify
- Discord

## Hashtags:
#n8n #automation #shopify #inventorymanagement #discord
