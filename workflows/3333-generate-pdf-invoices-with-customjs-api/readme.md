# Invoice Generator Workflow

## Use cases:

- **Automated Invoice Generation:** Automatically generate invoices based on data received from a webhook, such as completed orders or service requests.
- **Customizable Invoice Format:** Create invoices with a specific layout and styling using HTML templates and dynamic data.
- **On-Demand Invoice Creation:** Allow users to trigger invoice generation via a webhook and receive the PDF invoice in response.

## How it works:

1. **Webhook Trigger:** The workflow starts when a webhook receives data at a specified path.
2. **Set Data:** Sets static data for testing purposes.
3. **Preprocess Data:** The "Preprocess" node extracts and transforms data from the webhook payload to be used in the HTML template. It parses the bill-to and from addresses, calculates the total price and organizes the details into an HTML format suitable for the invoice table.
4. **HTML to PDF:** The "HTML to PDF" node takes an HTML template and converts it into a PDF document. It uses data from the "Preprocess" node to populate the invoice with dynamic information such as the invoice number, billing address, line items, and total amount.
5. **Respond to Webhook:** The generated PDF is sent back as a response to the webhook request, allowing the user to download the invoice.

## Services:

- **Custom JS PDF Toolkit** Used to render the pdf.

## Hashtags:

#n8n #automation #invoice #PDF #webhook
