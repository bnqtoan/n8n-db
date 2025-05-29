# Page2Image: Convert PDF to PNG Workflow (Multi-Page Support)

## Use cases:

1.  **Automated PDF to PNG Conversion:** Automatically convert PDF documents (including multi-page PDFs) to PNG images for archiving, previewing, or embedding in web applications.
2.  **Document Processing Pipeline:** Integrate this workflow into a larger document processing pipeline to extract images from PDFs for further analysis or manipulation.
3.  **Thumbnail Generation:** Generate thumbnails of PDF pages for use in document management systems or online libraries.

## How it works:

This workflow automates the conversion of PDF files to PNG images, with support for multi-page PDFs. Here's a step-by-step breakdown:

1.  **Trigger:** The workflow is initiated manually via "When clicking ‘Test workflow’" or by another trigger
2.  **Get PDF URLs:** It retrieves PDF file URLs using an HTTP Request node, parses them with the HTML Extract node, and then splits them into individual items using the Split Out node.
3.  **Download PDF Files:** Relevant PDF examples are then downloaded using the HTTP Request node
4.  **Get Presigned URL:** Retrieves a presigned URL from PDF.co for secure file upload.
5.  **Upload to Presigned URL:** Uploads the PDF file to the presigned URL
6.  **Split multipage PDF files:** This node allows to split multipage files
7.  **Convert to PNG:** Uses the PDF.co API (via HTTP Request) to convert the PDF to PNG images.
8.  **Download PNGs:** Downloads the converted PNG images from PDF.co using another HTTP Request node.
9.  **Combine Binaries:** Aggregates all downloaded PNG images into a single collection.
10. **Compress to zip file:** Compresses the images into one zip file
11. **Output:** The workflow outputs the converted PNG images or a zip file containing them.

## Services:

*   **PDF.co:** Used for obtaining presigned URLs and converting PDFs to PNGs.

## Hashtags:

#n8n #automation #PDFtoPNG #documentprocessing #PDFco
