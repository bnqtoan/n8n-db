# PDF Toolkit Workflow

## Use cases:

*   **Convert HTML content to a compressed PDF:** Automate the process of converting HTML snippets (e.g., from a website or database) into PDF documents and compress them for efficient storage or sharing.
*   **Compress existing PDFs:**  Reduce the file size of PDFs hosted online to optimize bandwidth usage and improve download speeds.
*   **Batch PDF Processing:** This workflow can be easily expanded to process multiple HTML snippets or PDF URLs in a batch, automating PDF creation and compression tasks for large volumes of documents.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" trigger node.
2.  **HTML to PDF Conversion (branch 1):** The "HTML to PDF" node takes HTML content (in this case, "<h1>Hello World</h1>") and converts it into a PDF file.
3.  **PDF Compression (branch 1):** The "Compress PDF file" node receives the PDF data from the previous step and compresses it.
4.  **Set PDF URL (branch 2):** The "Set PDF URL" node sets a PDF URL path
5.  **PDF Compression (branch 2):** The "Compress PDF file1" node receives the PDF data from the previous step and compresses it.

## Services:

*   CustomJS API (PDF Toolkit)
*   PDF URL

## Hashtags:

#n8n #PDF #automation #HTMLtoPDF #PDFCompression
