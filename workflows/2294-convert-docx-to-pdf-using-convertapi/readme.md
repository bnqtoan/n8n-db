# Document Conversion to PDF

## Use cases:

- **Automated Document Archiving:** Automatically convert incoming Word documents (docx) to PDF format for long-term storage and easier sharing.
- **Standardized Reporting:** Convert reports generated in docx format to PDF before distributing them to stakeholders, ensuring consistent formatting across different devices.
- **Content Processing Pipeline:** Integrate with other systems to automatically convert documents to PDF as part of a broader content management or processing workflow.

## How it works:

1.  **Manual Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Download File:** The "Download File" node downloads a sample DOCX file from a specified URL.
3.  **File Conversion:** The "File conversion" node sends the downloaded DOCX file to ConvertAPI for conversion to PDF. Authentication is handled via an HTTP Query Auth credential named "Convertapi token".
4.  **Write Result File to Disk:** The "Write Result File to Disk" node saves the converted PDF file to the local disk with the name "document.pdf".

## Services:

-   **ConvertAPI:** A service used for converting files from one format to another. In this case, DOCX to PDF.

## Hashtags:

#n8n #automation #documentconversion #pdf #convertapi
