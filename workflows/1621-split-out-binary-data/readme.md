# Process Decompressed Files from URL

## Use cases:

- Automatically process multiple files compressed in a ZIP archive from a URL.
- Extract individual files from a downloaded ZIP archive for separate processing or storage.
- Handle data processing of ZIP files retrieved from an external source.

## How it works:

1.  **On clicking 'execute'**: This node triggers the workflow execution manually.
2.  **Download Example Data**: Downloads a ZIP file from the specified URL (`https://static.thomasmartens.eu/n8n/three_more_files.zip`). The response format is set to "file", meaning the ZIP archive is saved as a binary file.
3.  **Decompress Example Data**: Extracts the contents of the downloaded ZIP archive. Each file within the archive becomes a separate item in the n8n workflow.
4.  **Split Up Binary Data**: A Function node that transforms the data. It iterates through each file (item) extracted from the ZIP archive. For each file, it creates a new item with:
    *   `json.fileName`: The name of the file.
    *   `binary.data`: The binary data (content) of the file.

## Services:

*   **HTTP Request**: Used to download the ZIP archive from a URL.

## Hashtags:

#n8n #automation #fileprocessing #zip #decompression
