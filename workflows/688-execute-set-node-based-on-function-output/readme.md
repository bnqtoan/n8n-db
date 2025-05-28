# My Workflow

## Use cases

*   **Conditional Data Routing:** This workflow can be used to route data to different processing paths based on a specific ID. For example, an e-commerce platform could use this to route customer orders to different fulfillment centers based on product ID.
*   **A/B Testing:** This workflow simulates A/B testing by assigning different configurations or parameters to different data entries. This allows you to experiment with various configurations and measure their performance.
*   **Dynamic Configuration:** This workflow can dynamically set configurations or parameters based on certain conditions. For example, a marketing campaign might use this to adjust the message or target audience based on user demographics.

## How it works

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Generate Data:** The "Function" node creates three data entries, each with a unique "id" (0, 1, and 2).
3.  **Conditional Routing:** The "Switch" node evaluates the "id" of each data entry and routes it to a different "Set" node based on its value.
    *   If the "id" is 0, the data is routed to the "Set" node, which sets the "name" to "n8n".
    *   If the "id" is 1, the data is routed to the "Set1" node, which sets the "name" to "nodemation".
    *   If the "id" is 2, the data is routed to the "Set2" node, which sets the "name" to "nathan".
    *   If the "id" does not match any of the conditions, the data is routed to the "NoOp" node, which does nothing.
4.  **Set Value:** the "Set" nodes will each assign a static value to the 'name' variable, depending on the ID.
5. **Termination:** The "NoOp" node serves as a placeholder, essentially ending the workflow branch without performing any action.

## Services

*   No external services are used in this workflow.

## Hashtags

*   #n8n
*   #automation
*   #workflow
*   #conditional
*   #dataRouting
