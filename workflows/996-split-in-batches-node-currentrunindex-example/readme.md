# Looping Workflow with Conditional Logic

## Use cases:

- **Testing API Rate Limits:** Simulate multiple API calls in batches to test how an API handles rate limits.
- **Processing Large Datasets:** Break down a large dataset into smaller chunks for processing to avoid memory issues or service limitations.
- **Conditional Task Execution:** Perform a specific action (e.g., sending a notification) only after a certain number of iterations in a loop.

## How it works:

1.  **Trigger:** The workflow starts when manually triggered using the "On clicking 'execute'" node.
2.  **Generate Data:** The "Function" node creates an array of 10 items, each containing a JSON object with an index `i`.
3.  **Split into Batches:** The "SplitInBatches" node divides the array into individual batches of size 1. This effectively creates a loop that iterates 10 times.
4.  **Conditional Check:** The "IF" node checks if the current loop index (using the SplitInBatches node context `currentRunIndex`) is equal to 5.
5.  **Conditional Execution:**
    -   **If True (Index is 5):** The workflow executes the "Set" node, which sets a variable named "Message" to "Loop Ended." The other iterations return to the SplitInBatches.
    -   **If False (Index is not 5):** The workflow continues iterating in the SplitInBatches node.

## Services:

-   None (This workflow primarily uses n8n's built-in nodes.)

## Hashtags:

#n8n #automation #looping #conditionalLogic #batchProcessing
