# Confirmation-Based Data Transfer to Grist

## Use cases:

*   **Manual Data Approval:**  This workflow allows for a manual confirmation step before transferring data from a source (e.g., another application or database) into a Grist table. This is useful when you need a human-in-the-loop to verify the accuracy or relevance of the data.
*   **Selective Data Migration:** Instead of automatically syncing all data, this workflow provides a mechanism to selectively migrate data based on a "Confirmed" flag. This helps maintain a clean and relevant dataset in Grist.
*   **Auditing and Quality Control:** The "Confirmed" flag can serve as an audit trail, indicating which data points have been reviewed and approved before being added to the Grist table.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a `Webhook` node, listening for incoming POST requests at a specified path (`/03e24572-a381-455e-a5b8-ae697647f7d4`). This node receives the data from the source.
2.  **Confirmation Check:** An `If` node ("Confirmed?") checks the `Confirmed` boolean field within the received JSON data (`$json.body[0].Confirmed`). The workflow proceeds only if the value is `true`.
3.  **Check for Existing Entry:** A `Grist` node ("get existing") searches the destination Grist table for an existing entry with the same `Source` ID (`$json.body[0].id`).
4.  **Verify if Exists:** An `If` node ("has existing?") verifies if result from the "get existing" node is empty or not. If the "get existing" node does not return data (meaning the entry doesn't exist), it follows the next step. If the "get existing" node returns data, it stops the workflow.
5.  **Create Row in Grist:** If no existing entry is found, a `Grist` node ("Create Row") creates a new row in the specified Grist table, using the `id` from the webhook payload as the `Source` field.

## Services:

*   **Grist:**  A collaborative data workspace.

## Hashtags:

#n8n #automation #Grist #webhook #dataTransfer
