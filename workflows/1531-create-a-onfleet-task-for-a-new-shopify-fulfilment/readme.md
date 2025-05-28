# Creating an Onfleet Task for a new Shopify Fulfillment

## Use Cases:

- Automatically create an Onfleet task when a new fulfillment is created in Shopify, streamlining delivery operations.
- Trigger an Onfleet delivery request whenever a Shopify order is marked for fulfillment.
- Integrate Shopify order fulfillment with Onfleet's delivery management platform for efficient dispatching and tracking.

## How it Works:

This workflow starts with a "Shopify Trigger" node that listens for the `fulfillments/create` event in your Shopify store.  When a new fulfillment is created in Shopify (meaning an order is being prepared for shipment), the trigger activates. The data from the Shopify fulfillment is then passed to the "Onfleet" node. The Onfleet node, configured to perform a "create" operation, uses the received data to create a new task in Onfleet. This task can then be assigned to a driver, tracked, and managed within the Onfleet platform.  Currently, no data from the Shopify Fulfillment is being used to generate the Onfleet Task.

## Services:

- Shopify
- Onfleet

## Hashtags:

#n8n #Shopify #Onfleet #Automation #DeliveryManagement
