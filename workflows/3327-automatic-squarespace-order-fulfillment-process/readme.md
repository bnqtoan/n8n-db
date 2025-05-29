# Squarespace Fulfillment Automation

## Use cases:

1.  **Automated Fulfillment for Digital Products:** Automatically mark orders as fulfilled when they consist solely of digital downloads or gift cards, streamlining the process and improving customer experience.
2.  **Integration with Fulfillment Services:** If you use a fulfillment service for all your products, this workflow automates the process of marking orders as fulfilled once the service confirms shipment, reducing manual work.
3.  **Time-Based Fulfillment:** Automatically fulfills orders that are older than 24 hours (or any specified time) after they are created.

## How it works:

1.  **Trigger:** The workflow can be triggered manually ("On clicking 'execute'") or on a schedule ("Schedule Trigger").
2.  **Globals:** Sets global variables like API version, date ranges for order modification, cursor for pagination, default fulfillment status and maximum pages to fetch, which are used in subsequent nodes.  Pay attention to this node and edit it to set up properly.
3.  **Query pending Orders:** Fetches orders from the Squarespace Commerce API based on the global parameters set earlier (API version, modified dates, cursor, and fulfillment status). Uses pagination to handle large order lists.
4.  **Split Out Order:** Splits the order array obtained into individual order items.
5.  **Filter Orders:** Filters the orders based on a condition. Currently, it checks if an order was created more than 24 hours ago.
6.  **Loop Over Items:** Iterates through the filtered orders.
7.  **Fulfill Order:** Marks each order as fulfilled in Squarespace using the Squarespace Commerce API. It also sends a notification to the customer.

## Services:

*   Squarespace Commerce API

## Hashtags:

#n8n #automation #squarespace #ecommerce #fulfillment
