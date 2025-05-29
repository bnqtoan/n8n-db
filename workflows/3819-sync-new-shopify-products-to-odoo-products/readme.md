# Sync New Shopify Products to Odoo Product

## Use cases:

- **Automated Product Catalog Synchronization:** Automatically add new products from your Shopify store to your Odoo inventory, ensuring that your product catalog is always up-to-date across both platforms.
- **Real-time Inventory Management:** Keep your Odoo inventory accurately reflecting your Shopify product listings, preventing overselling and improving order fulfillment efficiency.
- **Streamlined E-commerce Operations:** Reduce manual data entry and eliminate discrepancies between your online store and your enterprise resource planning system.

## How it works:

1.  **Shopify Trigger:** The workflow starts when a new product is created in your Shopify store.  This is triggered by the "Shopify Trigger" node.
2.  **Odoo6:** The "Odoo6" node receives the new product data from Shopify and likely retrieves or prepares relevant product information that needs to be updated in Odoo. The parameters for this node are missing, but it likely connects to an Odoo instance.
3.  **Code:** The "Code" node transforms the product data from the format provided by Shopify and Odoo6 node to match the format required by the Odoo7 node. The exact transformation depends on the logic implemented within the Code node, but it likely involves mapping fields, handling data types, and potentially applying custom business rules.
4.  **Filter2:** The "Filter2" node checks if the transformed product data meets certain criteria before proceeding to update Odoo. This could involve checking if the product is active, if certain fields are populated, or if the product already exists in Odoo.  The parameters for this node are also missing.
5.  **Odoo7:** If the product data passes the filter, the "Odoo7" node updates or creates the corresponding product in Odoo. This node likely uses the transformed data from the Code node to populate the relevant fields in the Odoo product record.

## Services:

-   Shopify
-   Odoo

## Hashtags:

#n8n #Shopify #Odoo #eCommerce #Automation
