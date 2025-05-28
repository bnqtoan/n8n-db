# Updating Shopify tags on Onfleet events

## Use cases:

*   **Automated Tagging for Delayed Orders:** Automatically tag orders in Shopify when a corresponding Onfleet task (delivery, pickup, etc.) is delayed. This allows for easy identification and management of potentially problematic orders.
*   **Proactive Customer Service:** Use the tags to trigger notifications to customer service teams when delays occur, allowing them to proactively reach out to customers.
*   **Reporting and Analysis:** Track the frequency of delays by analyzing Shopify orders with the specific delay tag, providing valuable insights into logistical performance.

## How it works:

This workflow automates the process of updating Shopify order tags based on Onfleet task delays.

1.  **Onfleet Trigger:** The workflow starts when an event is triggered within Onfleet, specifically when a task is delayed (using the "taskDelayed" trigger).
2.  **Shopify:** The Shopify node receives the information about the delayed Onfleet task. It then updates the corresponding order in Shopify by adding a new tag to the `tags` field indicating the delay. The content of the tag added is derived (or configured) from the Onfleet Trigger.

## Services:

*   Onfleet
*   Shopify

## Hashtags:

#n8n #automation #shopify #onfleet #ecommerce
