# Create, update and get a product from WooCommerce

## Use cases

*   **Automated Product Management:** Streamline the process of adding, updating, and retrieving product information in your WooCommerce store.
*   **Inventory Synchronization:** Automatically update product stock levels based on external data sources or internal processes.
*   **On-Demand Product Information:** Quickly retrieve product details for reporting, analysis, or integration with other systems.

## How it works

1.  The workflow starts with a **Manual Trigger** node, which is activated manually.
2.  The **WooCommerce** node creates a new product named "n8n Sweatshirt" with a description and a regular price of 30.  It also sets up empty image and metadata fields.
3.  The **WooCommerce1** node updates the product created in the previous step, setting the stock quantity to 100.
4.  The **WooCommerce2** node retrieves the updated product information from WooCommerce.

## Services

*   WooCommerce

## Hashtags

#n8n #woocommerce #automation #ecommerce #productmanagement
