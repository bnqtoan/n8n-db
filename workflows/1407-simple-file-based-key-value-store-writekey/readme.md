# Storage: WriteKey

## Use cases

*   **Configuration Management:** Store and update application configurations in a file. This is useful for managing settings that need to be persisted and easily modified without redeploying the application.
*   **Data Persistence:** Persist small data sets, like user preferences or session data, to a local file for simple storage and retrieval.
*   **Key-Value Storage:** Implement a basic key-value store using a local file. Useful for scenarios where a lightweight data store is needed without the overhead of a full database.

## How it works

This workflow enables you to write key-value pairs to a binary file. Here's a breakdown of the process:

1.  **Trigger:** The workflow starts with a manual trigger ("On clicking 'execute'").
2.  **Splitting Data:** The "SplitInBatches" node splits the incoming data into individual items, processing one key-value pair at a time, which enables the writing of multiple key-value pairs.
3.  **Configuration:** The "Config" node sets the `file` property to indicate where the key/value pair will be stored by concatenating to '/home/node/.n8n/local-files', also grabs the `key` and `value` for later use.
4.  **Read Binary Files:** The "Read Binary Files" node attempts to read an existing binary file based on the file path provided in the `file` parameter. If the file doesn't exist, this node continues because `continueOnFail` is true.
5.  **Binary to JSON:** The "BinaryToJSON" node converts the binary data read from the file into JSON format.
6.  **Set Key Value:** "SetKeyValue" node updates the data with the key/value pair defined in the incoming item from "Config" node.
7.  **JSON to Binary:** The "JSONToBinary" node converts the JSON data back into binary format.
8.  **Write Binary File:** The "Write Binary File" node writes the binary data to the file specified.
9.  **Repeat:** the "Repeat" node determines if the workflow should loop again through the SplitInBatches node or stop based on if there are still items left in the batch.
10. **Done:** Once all key-value pairs are written, the "Done" node executes, logging "Done!" to the console.

## Services

*   None (This workflow uses the local file system.  No external services are directly used).

## Hashtags

#n8n #workflow #automation #keyvaluestore #filemanagement
