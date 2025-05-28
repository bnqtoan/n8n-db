# New WooCommerce Product to Twitter and Telegram

## Use cases:

*   **Automated Product Announcements:** Automatically announce new products on Twitter and Telegram as soon as they are added to your WooCommerce store, keeping your audience informed in real-time.
*   **Enhanced Marketing Reach:** Expand the reach of your new product launches by instantly sharing them on multiple social media platforms, driving traffic to your store.
*   **Improved Customer Engagement:** Notify customers about new product arrivals, creating excitement and encouraging immediate purchases.

## How it works:

1.  **WooCommerce Trigger:** The workflow starts with a "WooCommerce Trigger" node that listens for the `product.created` event. This means that whenever a new product is added to your WooCommerce store, the workflow is automatically activated.
2.  **Data Extraction:** The trigger captures the data of the newly created product, including its name and permalink (URL).
3.  **Twitter Post:** The captured product data is sent to the "Twitter" node. This node formats a tweet with the product's name and link, then posts it to your Twitter account.
4.  **Telegram Message:** Simultaneously, the same product data is sent to the "Telegram" node. This node formats a message with the product's name and link, and sends it to the specified Telegram chat ID.

## Services:

*   WooCommerce
*   Twitter
*   Telegram

## Hashtags:

#n8n #WooCommerce #Automation #SocialMedia #eCommerce
