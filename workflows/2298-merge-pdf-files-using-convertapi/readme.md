# Merge

## Use cases:

*   **Combine multiple PDF reports:** Automatically merge daily or weekly reports generated as PDFs into a single comprehensive document.
*   **Create a single document from multiple sources:** Merge different sections of a document, such as terms and conditions, privacy policy, and user agreement, into a unified PDF.
*   **Archive and consolidate documents:** Periodically merge sets of related PDF documents for archiving or easier distribution.

## How it works:

1.  **Trigger:** The workflow is triggered manually using the "When clicking ‘Test workflow’" node.
2.  **Download PDF Files:** It downloads two PDF files ("demo.pdf" and "demo2.pdf") from ConvertAPI's CDN using the "Download first remote PDF File" and "Download second PDF File" HTTP Request nodes. These nodes are configured to retrieve the files and store their content in binary format into `data1` and `data2` properties.
3.  **Merge PDFs:** The "PDF merge API HTTP Request" node sends a POST request to the ConvertAPI's merge endpoint, including the downloaded PDF files as binary data in a multipart-form-data request. The `files[0]` and `files[1]` parameters within the `bodyParameters` settings map the `data1` and `data2` properties (containing the binary PDF file contents) to the request. It uses an HTTP Query Auth credential for authentication with ConvertAPI, and retrieves the merged PDF file.
4.  **Write to Disk:** Finally, the "Write Result File to Disk" node saves the merged PDF file (obtained from the API response and stored in the `data` property) to disk as "document.pdf".

## Services:

*   ConvertAPI ([https://www.convertapi.com/](https://www.convertapi.com/)): Used for merging the PDF files.

## Hashtags:

#n8n #PDF #Automation #Merge #ConvertAPI
