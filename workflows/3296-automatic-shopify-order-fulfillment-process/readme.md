# Shopify Fulfillment Automation

## Use cases:

- **Automated Fulfillment for Digital Products:** Automatically fulfill orders for digital downloads or gift cards as soon as they are placed, without manual intervention.
- **Streamlined Fulfillment with Third-Party Services:** If you use a fulfillment service, this workflow can automatically retrieve fulfillment order IDs and create fulfillment requests, saving time and reducing errors.
- **Delayed Fulfillment Based on Time:** Filter orders created more than 24 hours ago to ensure fulfillment processes start only after a specific delay, accommodating potential order modifications or cancellations.

## How it works:

1.  **Trigger:** The workflow can be triggered manually (When clicking ‘Test workflow’) or scheduled to run at regular intervals (Schedule Trigger).
2.  **Set Global Store ID:** The `Set Global` node sets your Shopify store ID, which is used in subsequent API calls.  **Important:** You need to replace `{store-id}` with your actual store ID in the `Set Global` node.
3.  **Get Unfulfilled Orders:** The `Get all Unfulfilled orders` node retrieves all unfulfilled orders from your Shopify store using the Shopify API.
4.  **Filter Orders:** The `Filter Orders` node filters orders created more than 24 hours ago. This is done using an expression that calculates the time difference between the order's creation date and the current time.
5.  **Loop Over Items:** The `Loop Over Items` node iterates over each filtered order.
6.  **Get Fulfillment Orders:** For each order, the `Get Fulfillment Orders` node retrieves the fulfillment order ID using the Shopify API.
7.  **Mark as Fulfilled:** The `Mark fulfillment orders as fulfilled` node uses the fulfillment order ID to create a fulfillment request via the Shopify API, marking the order as fulfilled and notifying the customer.

## Services:

-   Shopify API

## Hashtags:

#n8n #Shopify #FulfillmentAutomation #eCommerce #Automation
