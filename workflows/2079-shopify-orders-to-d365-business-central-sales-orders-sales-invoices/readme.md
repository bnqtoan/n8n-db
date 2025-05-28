# [n8n] - Shopify Orders to D365 Business Central Sales Orders / Sales Invoices

## Use cases:

- **Automated Order Synchronization:** Automatically create sales orders or sales invoices in Dynamics 365 Business Central whenever a new order is placed and paid in Shopify, eliminating manual data entry.
- **Multi-Channel Sales Management:** Integrate Shopify POS (Point of Sale) orders as Sales Invoices and web orders as Sales Orders in Business Central, providing a unified view of sales across different channels.
- **Customer Data Integration:** Automatically create new customer records or update existing ones in Business Central based on Shopify order information, ensuring consistent customer data across systems.

## How it works:

1.  **Schedule Trigger:** The workflow starts based on a defined schedule (e.g., every few minutes).
2.  **Shopify Integration:** It fetches Shopify orders created or updated in the last 24 hours using the Shopify node.
3.  **Order Filtering:** Filters the Shopify orders based on whether their financial status is "paid".
4.  **Fulfillment Orders Retrieval:** Retrieves fulfillment orders associated with each Shopify order to determine location information.
5.  **Data Selection:** Selects specific fields from the Shopify order data required for Business Central.
6.  **Order Preprocessing:** Processes the order data, associating line items with location IDs, and adds tax and discount line items if configured.
7.  **Customer Lookup:** Searches for existing customers in Business Central based on the customer's email from the Shopify order.
8.  **Customer Creation (If Necessary):** If no matching customer is found in Business Central, a new customer record is created using the Shopify order's customer information.
9.  **Business Central Customer ID Assignment:** Assigns the appropriate Business Central customer ID to the order data, whether it's an existing customer or a newly created one.
10. **POS Order Differentiation:** Determines if the Shopify order originated from POS (Point of Sale).
11. **Sales Order/Invoice Lookup:** Checks if a Sales Order/Invoice already exists in Business Central with the same external document number (Shopify Order ID).
12. **Sales Order/Invoice Creation (If Necessary):** Creates a Sales Order (for web orders) or a Sales Invoice (for POS orders) in Business Central if one doesn't already exist.  If the document exist already it skips the creation.
13. **Sales Order/Invoice Data Mapping:** Maps the Shopify order data to the required fields for creating a Sales Order or Sales Invoice in Business Central.
14. **Line Item Processing:** Loops through the line items in the Shopify order and creates corresponding Sales Order/Invoice Lines in Business Central.
15. **Deletion of Sales Order/Invoice on Line Item Failure:** If creating line items results in an error, the workflow deletes the newly created Sales Order or Invoice to maintain data integrity.

## Services:

-   Shopify
-   Microsoft Dynamics 365 Business Central

## Hashtags:

#n8n #automation #shopify #businesscentral #integration
