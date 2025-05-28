# My Workflow

## Use cases:

*   **Generating Test Data:** Create a series of test entries for systems or APIs that require multiple inputs.
*   **Batch Processing:** Divide a set of operations into smaller, manageable batches for efficient processing.
*   **Looping Until Completion:** Perform actions repeatedly until a specific condition is met (e.g., all items in a list are processed).

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it.
2.  **Function:** A Function node creates an array of 10 items, each containing a JSON object with an `i` property. This creates a simple dataset of numbers 0-9.
3.  **Split In Batches:** The SplitInBatches node divides the incoming data (the array created by the Function node) into individual batches of size 1.
4.  **IF:** The IF node checks the `noItemsLeft` context variable from the SplitInBatches node. This variable indicates whether there are more items left to process.
    *   **If `noItemsLeft` is TRUE:** Meaning the loop is finished, the workflow proceeds to the Set node.
    *   **If `noItemsLeft` is FALSE:** Meaning there are more items, the workflow loops back to SplitInBatches node to process next item.
5.  **Set:** If the loop is finished the set node will create an item with the message 'No Items Left'

## Services:

*   None (This workflow uses only internal n8n nodes and does not interact with external services).

## Hashtags:

#n8n #automation #batchprocessing #looping #datahandling
