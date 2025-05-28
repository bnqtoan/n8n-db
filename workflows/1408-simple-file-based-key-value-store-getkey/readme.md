# Storage: GetKey

## Use Cases

*   **Configuration Management:** Retrieve specific configuration settings from a JSON file stored locally. This allows applications to dynamically load settings without hardcoding them.
*   **Data Extraction:** Extract a specific value from a JSON file based on a provided key, providing a default value if the key is not found. Useful for parsing data files and accessing specific information.
*   **Conditional Value Retrieval:** Get a value from a configuration file, falling back to a default if the value is missing or the file is inaccessible.

## How it works

1.  **On clicking 'execute'**: This node triggers the workflow manually.
2.  **Config**: This Function Item node prepares the file path, key, and default value for retrieving the data. It expects the input item to contain `file`, `key`, and `default` properties.
3.  **Read Binary File**: Reads the binary content of a JSON file from the file path defined in the `Config` node. If the file reading fails, the workflow continues.
4.  **BinaryToJSON**: Parses the binary data from the file into JSON format.
5.  **ReturnValue**: This Function Item node extracts the value associated with the provided key from the JSON data. If the key is not found, it returns the default value specified in the `Config` node.

## Services

*   Local File System (for reading the JSON file)

## Hashtags

#n8n #automation #configuration #JSON #filehandling
