## Workflow: Create and Write JSON to Binary File

This workflow automates the process of creating a JSON object, converting it to a binary format (Base64 encoded), and writing it to a file.

### Use cases:

*   **Configuration File Generation:** Automatically creates configuration files (e.g., `test.json`) with predefined settings.
*   **Data Serialization and Storage:** Serializes JSON data into a binary format suitable for storage or transmission.
*   **Testing and Prototyping:**  Quickly generates test data in JSON format and saves it as a binary file for use in other applications or workflows.

### How it works:

1.  **Create Example Data:** The `Create Example Data` Function node generates a simple JSON object containing a text field ("text") and a number field ("number").
2.  **Make Binary:** The `Make Binary` Function node takes the JSON object from the previous node, converts it into a Base64 encoded string, and stores it within a binary data structure inside the n8n item.
3.  **Write Binary File:** The `Write Binary File` node takes the binary data from the previous node and writes it to a file named "test.json". The content of the file will be the Base64 encoded representation of the JSON object.

### Services:

*   None (This workflow uses n8n's internal functions and file system.)

### Hashtags:

#n8n #automation #JSON #binary #filehandling
