# Image to PDF Conversion Workflow

## Use cases:

*   **Automated Document Archiving:** Automatically convert images stored in cloud services or databases into PDF format for long-term archiving.
*   **Receipt Processing:** Convert scanned receipts (typically images) into PDF documents for expense reporting.
*   **Content Aggregation:** Convert multiple images into a single PDF document for easy sharing or distribution.

## How it works:

This workflow automates the process of converting an image (in this case, a JPG image) to a PDF file and saving it to disk.

1.  **Manual Trigger:** The workflow starts when you manually trigger it using the "When clicking ‘Test workflow’" node.
2.  **Download Image:** An HTTP Request node downloads a sample JPG image from a specified URL (`https://cdn.convertapi.com/public/files/demo.jpg`). The node is configured to handle the response as a file.
3.  **File Conversion to PDF:** Another HTTP Request node sends the downloaded image to the ConvertAPI service to convert it to PDF. The request is authenticated using a generic credential. The downloaded image is sent as binary data within the request.
4.  **Write Result File to Disk:** The resulting PDF file is then written to disk using the "Write Result File to Disk" node. The filename is set to `document.pdf`.

## Services:

*   **ConvertAPI:** Used for converting the JPG image to a PDF file.

## Hashtags:

#n8n #automation #PDF #imageConversion #ConvertAPI
