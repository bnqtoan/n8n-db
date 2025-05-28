# PDF to PDFA Conversion Workflow

## Use cases:

- **Archiving Documents:** Convert regular PDF documents to the PDFA format for long-term preservation, ensuring they remain accessible and readable in the future.
- **Compliance Requirements:** Ensure that PDF documents meet specific compliance standards (e.g., for legal or regulatory purposes) that require the PDFA format.
- **Standardizing Document Formats:** Automatically convert incoming PDFs to PDFA to maintain a consistent format across a document management system.

## How it works:

1.  **Manual Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Download PDF File:** A PDF file is downloaded from a specified URL (`https://cdn.convertapi.com/public/files/demo.pdf`) using an HTTP Request node. The response is configured to return the file.
3.  **File conversion to PDFA:** The downloaded PDF file is then sent to the ConvertAPI service to be converted into PDFA format. This step uses an HTTP Request node to make a POST request to the ConvertAPI endpoint (`https://v2.convertapi.com/convert/pdf/to/pdfa`). The request includes the PDF file (`data`) and the desired PDFA version (`pdfa`) as form data. Authentication is handled via HTTP Query parameters.
4.  **Write Result File to Disk:** Finally, the converted PDFA file is written to disk with the filename "document.pdf" using the "Write Result File to Disk" node.

## Services:

-   **ConvertAPI:** Used for converting the PDF file to PDFA format.

## Hashtags:

#n8n #PDF #PDFA #FileConversion #Automation
