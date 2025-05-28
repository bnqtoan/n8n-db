# Pipedrive to Stripe Product Sync

## Use cases:

- Automatically create products in Stripe whenever a new product is added in Pipedrive, saving time and ensuring data consistency across platforms.
- Keep product information synchronized between Pipedrive and Stripe, including product name, description, and pricing details.
- Streamline the product management process by automating the creation of Stripe products and their associated prices based on Pipedrive data.

## How it works:

1.  **On product created (Pipedrive Trigger):** The workflow starts when a new product is added in Pipedrive. This node listens for the `product.added` event.
2.  **Set item to only current product data (Function Item):** This node takes the data received from Pipedrive and extracts only the `current` product data, filtering out unnecessary information.
3.  **Create product in Stripe (HTTP Request):** This node sends a POST request to the Stripe API to create a new product. It uses the product name and description from Pipedrive as parameters, mapping the Pipedrive product name to the Stripe `name` and the Pipedrive description to Stripe `description`.
4.  **Keep only productId of created product (Set):** It then extracts the newly created Stripe product ID from the Stripe API response and stores it in a variable named `StripeCreatedProductId`.
5.  **Add created product Id to data (Merge):** This node merges the original Pipedrive product data with the `StripeCreatedProductId` from the previous Set node. This combines the original data with the Stripe ID for later use.
6.  **Split prices to seperate items (Item Lists):** It splits the product prices into separate items for each price tier, if multiple prices are defined in Pipedrive. Also includes the `StripeCreatedProductId` in each new item.
7.  **Create price records in Stripe (HTTP Request):** For each price provided for the product, it creates a price record in Stripe, using the `StripeCreatedProductId`, currency, and price information.

## Services:

-   Pipedrive
-   Stripe

## Hashtags:

#n8n #automation #Pipedrive #Stripe #ProductSync
