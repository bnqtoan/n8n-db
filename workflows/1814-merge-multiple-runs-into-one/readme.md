# Merge multiple runs into one

## Use cases:

- **Aggregating Data from Multiple API Calls:** When retrieving large datasets from an API with pagination, this workflow can merge the results from each page into a single dataset.
- **Combining Data from Iterative Processes:** If you have a process that runs multiple times and produces individual data chunks, this workflow combines these chunks into a consolidated result.
- **Collecting Customer Data:** Collecting a set of customer's data and merging them into one file.

## How it works:

1.  **Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered.
2.  **Get Customer Data:** The "Customer Datastore" node retrieves all customer data using the "getAllPeople" operation.
3.  **Loop Over Items:** The "Loop Over Items" node splits the data into batches for processing.
4.  **Wait:** The "Wait" node pauses execution for a specified time (configured in seconds).
5.  **NoOp:** The "NoOp" node essentially does nothing and passes the input data.
6.  **Done Looping?**: The "Done looping?" node checks if there are items left in the "Loop Over Items" node. If there are no more items, it proceeds to the next step. Otherwise, it loops back to the "Loop Over Items" node.
7.  **Merge loop items:** The "Merge loop items" node uses a JavaScript code node to aggregate the data from all iterations of the loop. It retrieves the results from the "NoOp" node of each loop and combines them into a single array.

## Services:

-   Customer Datastore (Likely a custom n8n node or integration simulating a database)

## Hashtags:

#n8n #automation #workflow #dataaggregation #mergingdata
