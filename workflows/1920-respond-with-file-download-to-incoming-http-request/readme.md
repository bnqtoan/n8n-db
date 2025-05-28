# Download PDF via Webhook

## Use cases:

- **Generate and serve daily reports:** Automatically serve a PDF report (e.g., sales data, website analytics) via a webhook endpoint, with the filename including the current date.
- **Provide on-demand access to documents:** Offer a downloadable PDF document via a specific URL, ensuring the latest version is always served.
- **Integrate with external services:** Allow other applications or services to trigger the download of a specific PDF document through a simple webhook request.

## How it works:

1.  **On GET request:** The workflow starts when a GET request is made to the `/download-pdf` webhook endpoint.
2.  **Fetch binary file:** The `Fetch binary file` node retrieves a PDF file from a specified URL (`https://www.deutschebahn.com/resource/blob/8813300/bdf106f07186f66e4448f95aca02bd4a/Faktenblatt-ICE-L_Mai23-data.pdf`). It's configured to handle the response as a file.
3.  **Respond with attachment:** The `Respond with attachment` node sends the fetched PDF file back as a response to the webhook request. It sets the `content-disposition` header to `attachment; filename="my_document_{{ $now.toFormat('yyyy-MM-dd') }}.pdf"`, which forces the browser to download the file with a filename that includes the current date in `YYYY-MM-DD` format.

## Services:

-   Deutsche Bahn (for fetching the PDF from their server).

## Hashtags:

#n8n #automation #webhook #PDF #download
