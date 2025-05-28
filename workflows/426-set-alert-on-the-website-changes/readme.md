## Website Stock Checker Workflow

### Use cases:

*   **Monitor Product Availability:** Automatically check a website for product stock levels and receive notifications when items are out of stock.
*   **Competitor Monitoring:** Track competitor websites for changes in product availability or pricing.
*   **Restock Alerting:** Get notified when a previously out-of-stock item becomes available for purchase.

### How it works:

1.  **Cron Trigger:** The workflow starts automatically based on an hourly schedule defined in the `Cron` node.
2.  **HTTP Request:** An `HTTP Request` node sends a GET request to a specified URL. The URL needs to be manually configured in the node's settings.
3.  **IF Condition:** The `IF` node checks the response from the `HTTP Request`.  It searches for the phrase "Out Of Stock" within the response data.
4.  **Discord Notification (Out of Stock):** If the `IF` condition finds "Out Of Stock", a `Discord` node sends a message to a configured Discord webhook URL, indicating that the item is out of stock. The webhook URL needs to be manually configured.
5.  **Discord Notification (In Stock/Available):** If the `IF` condition *doesn't* find "Out Of Stock", another `Discord` node sends a different message to a configured Discord webhook URL, indicating that the item is *not* out of stock, meaning it is likely in stock or available. The webhook URL needs to be manually configured.

### Services:

*   Discord (via Webhooks)

### Hashtags:

#n8n #automation #websitemonitoring #stockcheck #discord
