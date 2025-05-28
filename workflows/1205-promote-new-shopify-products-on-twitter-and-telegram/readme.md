# New Product Announcement on Twitter and Telegram

## Use cases:

*   **Automated Social Media Promotion:** Automatically announce new product listings on Twitter, driving traffic to your online store.
*   **Instant Telegram Notifications:** Receive immediate notifications in a Telegram channel or group when a new product is created, keeping your team informed.
*   **Cross-Platform Marketing:** Simultaneously update both Twitter and Telegram channels, ensuring consistent messaging across different platforms.

## How it works:

This workflow is triggered when a new product is created in your Shopify store. Here's a breakdown of the process:

1.  **Shopify Trigger (product created):** This node listens for the `products/create` webhook from your Shopify store. When a new product is added, the workflow is initiated.
2.  **Twitter:** This node formats a tweet using the product details (vendor, title, and product type) from the Shopify data. The tweet is then posted to your connected Twitter account.
3.  **Telegram:** This node sends a Telegram message using the product details (vendor, title, and product type) from the Shopify data to specified chat ID.

## Services:

*   Shopify
*   Twitter
*   Telegram

## Hashtags:

#n8n #automation #shopify #twitter #telegram #ecommerce #marketing
