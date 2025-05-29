# My Workflow

## Use cases:

- **Automated PDF to Image Conversion:** Convert HTML content or PDFs from URLs into PNG images for archiving, displaying on websites, or integrating into other applications.
- **Document Preview Generation:** Create thumbnail previews of documents stored online or generated from HTML for a document management system.
- **Content Extraction for Visual Representation:** Extract visual representations of specific content from PDFs for presentations or reports.

## How it works:

This workflow automates the process of converting HTML content or existing PDFs into PNG images. Here's a breakdown:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **HTML to PDF Conversion (Optional):** The "HTML to PDF" node converts the provided HTML (`<h1>Hello World</h1>`) into a PDF document. This step can be skipped if starting from an existing PDF.
3.  **PDF from URL:** The "Set PDF URL" node hardcodes and sets the URL for a PDF resource and adds it to the workflow under the name *path*.
4.  **PDF to PNG Conversion:**
    *   The "Convert PDF into PNG" node takes the PDF generated from the HTML and converts it into a PNG image.
    *   The "Convert PDF into PNG1" node takes the PDF provided from the URL and converts it into a PNG image.
5.  **Output:** The resulting PNG image(s) are then available for further processing or storage (not shown in this workflow).

## Services:

-   **CustomJS API:** A custom JavaScript API is used within the PDF Toolkit nodes to handle the HTML to PDF and PDF to PNG conversions. The workflow use the 'customJsApi' called 'CustomJS account' to connect to the custom js instance.
    * PDF Toolkit

## Hashtags:

#n8n #automation #PDF #HTML #ImageConversion
