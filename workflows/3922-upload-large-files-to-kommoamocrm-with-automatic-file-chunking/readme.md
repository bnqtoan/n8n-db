# My Workflow

## Use cases:

- **Large File Upload Automation:** Automatically split large files into smaller chunks, upload them to a server, and then reassemble them. This is useful for overcoming file size limits or improving upload reliability.
- **Conditional File Processing:** Checks the size of a file. If the file size exceeds a defined maximum, it splits the file into chunks, otherwise uploads the file directly.
- **Automated File Backup:** Used to automatically get file from URL, split the file into chunks (if needed) and upload the file to an external service.

## How it works:

1.  **Trigger:** The workflow is triggered manually.
2.  **Get File:** Retrieves a file from a specified URL.
3.  **Convert file to base64 string:** Converts the file to base64 string.
4.  **Upload file:** Upload the file to an external service.
5.  **Check file:** The workflow starts by receiving a file as input and checks if a file exists.
6.  **Get File Size:** Determines the size of the input file in bytes.
7.  **Create Session:** Starts a session with an external server using HTTP Request
8.  **Conditional Chunking:** Checks if the file size is greater than the maximum allowed size.
    *   If True: It splits the file into smaller chunks using "SplitFileToChunks" and Convert parts to file.
    *   If False: No free disk space Error.
9.  **File Upload:** Loads the file or file chunks to external services.
10. **Loop Over File Chunks:** Split the items into batches.
11. **Get URL:** Get URL from an external service with HTTP Request node.

## Services:

-   HTTP Request (Potentially interacting with external APIs for file storage or processing)

## Hashtags:

#n8n #filemanagement #automation #fileupload #fileprocessing
