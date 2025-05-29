# Google Drive MCP Server for File Search and Content Extraction

## Use Cases:

- **Intelligent Document Retrieval:** Enable AI agents (like Claude) to search and retrieve specific information from documents stored in Google Drive using natural language queries (e.g., "What does the company policy document say about cancellations and refunds?").
- **Automated Report Summarization:** Automatically extract and summarize key information from various file formats (PDF, CSV, images, audio) in Google Drive for reporting purposes.
- **Context-Aware Information Access:** Allow AI agents to access and process Google Drive files based on context, enabling more informed decision-making and automated workflows.

## How it Works:

This workflow acts as an MCP (Model Context Protocol) server, allowing AI agents to interact with Google Drive.

1.  **Trigger:** The workflow is triggered by an MCP Server Trigger or when executed by another workflow. It expects inputs like `operation`, `folderId`, and `fileId`. The "When Executed by Another Workflow" allows it to be also used as a sub-workflow, and takes the same input as the Google Drive MCP trigger.
2.  **File Search (Optional):** The Google Drive tool searches for files within a specified folder based on a user-provided search query.
3.  **Operation Choice:** Then operation is chosen based on input.
4.  **File Download:** The Google Drive node downloads the specified file based on the file ID. It also allows conversion of google docs or slides to other formats.
5.  **File Type Detection:** The Switch node determines the file type based on the MIME type.
6.  **Content Extraction:**
    *   **PDF & CSV:** The `Extract from PDF` and `Extract from CSV` nodes extract the text content from the respective file types.
    *   **Image:** The `Analyse Image` node uses an OpenAI model to analyze the image and generate a textual description.
    *   **Audio:** The `Transcribe Audio` node uses an OpenAI model to transcribe the audio file to text.
7.  **Response Formatting:** The extracted content is formatted into a text string and returned to the MCP client.

## Services:

*   Google Drive
*   OpenAI

## Hashtags:

#n8n #automation #GoogleDrive #MCP #AI #Workflow
