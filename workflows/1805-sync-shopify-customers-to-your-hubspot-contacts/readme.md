# Shopify Order to HubSpot Deal

## Use cases:

- **Automatically create deals in HubSpot when new orders are placed in Shopify:** This ensures that all sales are tracked in HubSpot for reporting and analysis.
- **Associate Shopify orders with existing HubSpot contacts:** If a customer already exists in HubSpot, the workflow will link the order to their contact record.
- **Update HubSpot contacts with customer information from Shopify orders:** Keep contact information current with the latest order details, such as address and name.

## How it works:

1.  **Shopify Trigger ("On order updated"):** This node listens for updates to orders in Shopify. When an order is updated (or initially created), the workflow is triggered.
2.  **Create or update contact ("Create or update contact"):** This node creates a new contact or updates an existing contact in HubSpot using the customer's email, first name, last name, city, and country from the Shopify order data.
3.  **Keep only userId ("Keep only userId"):** Extracts the `vid` (HubSpot User ID) from the Shopify order data and stores it in a field called `userId`.
4.  **Merge ("Add Hubspot userId to data"):** Merges the original Shopify order data with the `userId` obtained from the previous step. This combined data is passed to the next node.
5.  **Find if order already exists as deal ("Find if order already exists as deal"):** Searches HubSpot for an existing deal with a name matching the Shopify order's name.
6.  **If ("New Order, deal not found"):** Checks if a deal was found in the previous step.
    *   If **no deal is found** (the search result is empty), the workflow proceeds to create a new deal in HubSpot.
    *   If **a deal is found**, the workflow does nothing ("Do Nothing").
7.  **HubSpot ("Create new deal"):** Creates a new deal in HubSpot. Sets the stage to "closedwon", pulls the amount, deal name, close date, and associated vids from the data passed from previous nodes.
8.  **No Operation ("Do Nothing"):** A placeholder node that does nothing.

## Services:

-   Shopify
-   HubSpot

## Hashtags:

#n8n #shopify #hubspot #automation #ecommerce
