# React to PDFMonkey Callback

## Use cases:

*   **Automated Document Archiving:** Automatically download and store generated PDF documents in a designated cloud storage location upon successful PDFMonkey generation.
*   **Real-time Notification System:** Send a notification (e.g., via Slack or email) with a link to the generated PDF document once the PDFMonkey generation process completes successfully.
*   **Dynamic Content Management:** Update a content management system (CMS) with the URL of the newly generated PDF document for seamless integration into web applications.

## How it works:

1.  **PDFMonkey Callback:** The workflow starts with a "Webhook" node configured to listen for POST requests from PDFMonkey. This webhook is triggered when a PDF generation process in PDFMonkey concludes.
2.  **Check Generation Status:** An "IF" node evaluates the `document.status` field in the received JSON data from PDFMonkey. It checks if the status is equal to "success".
3.  **Download PDF (On Success):** If the generation was successful (status is "success"), an "HTTP Request" node is triggered. This node uses the `document.download_url` from the PDFMonkey webhook payload to download the generated PDF file. The downloaded PDF can then be further processed or stored.

## Services:

*   PDFMonkey

## Hashtags:

#n8n #PDFMonkey #automation #webhook #PDFgeneration
