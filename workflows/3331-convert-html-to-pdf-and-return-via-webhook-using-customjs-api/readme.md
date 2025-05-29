# HTML to PDF Converter via Webhook

## Use Cases

*   **Automated Document Generation:** Generate PDF reports or invoices automatically when a webhook is triggered (e.g., from a form submission or e-commerce platform).
*   **On-Demand Content Conversion:** Allow users to convert HTML content to PDF by sending a request to a webhook URL.
*   **Customized PDF Creation:** Create PDFs with dynamically generated content using HTML templates and data from various sources.

## How it works

1.  **Webhook Trigger:** The workflow starts when a request is sent to the specified webhook URL (defined in the "Webhook" node).
2.  **HTML to PDF Conversion:** The "HTML to PDF" node receives the request and converts the provided HTML content into a PDF file. The HTML content is statically defined in the node.
3.  **Respond to Webhook:** The "Respond to Webhook" node sends the generated PDF file back as a response to the original webhook request.

## Services

*   [CustomJS PDF Toolkit](https://customjs.com/pdf-toolkit/)

## Hashtags

#n8n #automation #PDF #webhook #HTMLtoPDF
