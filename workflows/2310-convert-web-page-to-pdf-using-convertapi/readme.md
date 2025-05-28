# Convert Web Page to PDF and Save to Disk

## Use cases:

- **Automated Archiving:** Automatically convert and save important web pages as PDFs for record-keeping and compliance.
- **Offline Access:** Create PDF versions of online content for users who need to access information offline.
- **Content Backup:** Regularly back up website content by converting it to PDF format and saving it to a local disk.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it by clicking "Test workflow" in n8n.
2.  **Convert Web Page to PDF:** The "Convert web page to PDF" node uses the ConvertAPI to convert a specified web page to a PDF file.
    *   It sends a POST request to the ConvertAPI endpoint with the URL of the web page to convert (default: `https://n8n.io`).
    *   Authentication is handled via HTTP Query parameters using the "Query Auth account" credential.  Ensure that your ConvertAPI secret is correctly set up in the credential.
    *   The response format is set to "file", indicating that the API will return the PDF file data directly.
3.  **Read/Write Files from Disk:** The "Read/Write Files from Disk" node receives the PDF file data from the previous node and writes it to a local file named "document.pdf".

## Services:

-   **ConvertAPI:** A service for converting various file formats, in this case, converting a web page to PDF.

## Hashtags:

#n8n #automation #PDF #webpage #convertapi
