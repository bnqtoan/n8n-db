# Convert HTML to PDF and Save

## Use cases

1.  **Generate PDF reports from HTML templates:** Automatically convert HTML reports into PDF format for archiving or distribution.
2.  **Create PDF documents from web content:** Capture and convert web pages or dynamically generated HTML content into PDF files.
3.  **Automated document conversion:** Trigger the workflow to convert HTML content into PDF files upon specific events, such as form submissions or data updates.

## How it works

1.  **Manual Trigger:** The workflow starts when you manually click the "Test workflow" button.
2.  **Create HTML:** An HTML document is created using the Set node, defining the structure and content of the document.
3.  **Convert HTML to File:** The HTML data is converted into a binary file format. The 'Convert HTML to File' Code node takes the HTML data, encodes it, and prepares it as a binary file.
4.  **Convert File to PDF:**  The binary HTML file is sent to ConvertAPI's endpoint to convert the file to PDF using a POST request with multipart form data, authenticated using HTTP Query parameters. The 'Convert File to PDF' HTTP Request node sends the binary data to ConvertAPI.
5.  **Write Result File to Disk:** The resulting PDF file is saved to disk with the name "document.pdf."

## Services

*   **ConvertAPI:** Used for converting the HTML file to PDF format.
*   **n8n file system:** Used for saving the file to disk.

## Hashtags

#n8n #automation #HTMLtoPDF #ConvertAPI #documentgeneration
