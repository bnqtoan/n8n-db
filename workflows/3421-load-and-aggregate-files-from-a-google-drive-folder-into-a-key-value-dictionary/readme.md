# Google Drive Files Loader

## Use cases:

- **Document Archiving:** Automatically extract text content from all Google Docs in a specified Google Drive folder and store it for archival or backup purposes.
- **Content Aggregation:** Gather the content from multiple Google Docs into a single data structure for analysis, reporting, or further processing.
- **Knowledge Base Creation:** Build a knowledge base by extracting information from various Google Docs and storing it in a structured format for easy retrieval.

## How it works:

1.  **Trigger:** The workflow starts when triggered by another n8n workflow. It's configured to accept JSON input, although the example JSON is empty.
2.  **Get Files from Folder:** The `Google Drive` node retrieves a list of files from a specified Google Drive folder (defaulting to the root folder).
3.  **Download Google Docs:** For each file identified as a Google Doc, the `Google Docs` node downloads the document content.  If you have other file types, you'll need to modify this node or add additional branches to handle them appropriately.
4.  **Mapping:**  The `Set` node (Mapping) creates a key-value pair for each file, using the filename as the key and the document content as the value.
5.  **Code:** The `Code` node aggregates the key-value pairs from all files into a single JSON object, where keys are filenames and values are file contents. It also replaces multiple consecutive newline characters with single newlines. The final result is a single item with the aggregated dictionary in its `json` property.

## Services:

-   Google Drive
-   Google Docs

## Hashtags:

#n8n #googleDrive #googleDocs #automation #contentExtraction
