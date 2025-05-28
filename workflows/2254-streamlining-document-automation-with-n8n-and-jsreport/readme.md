# Get PDF with JSReport

## Use cases:

- **Automated Invoice Generation:** Automatically generate invoices in PDF format based on data submitted through a form. Ideal for businesses that need to quickly create and send invoices to clients.
- **Custom Report Creation:** Create custom reports (e.g., sales reports, performance summaries) by combining data from various sources and using JSReport to generate visually appealing PDFs.
- **On-Demand Document Generation:** Allow users to request documents like contracts or agreements, populate them with specific data via a form, and generate a PDF for immediate download or sharing.

## How it works:

1.  **Form Submission:** The workflow starts with a "Form Invoice" node, which presents a web form to the user. This form collects invoice details such as buyer information, item names, and prices.
2.  **Data Transfer:** Upon form submission, the collected data is passed to the "Get PDF From JSReport" node.
3.  **PDF Generation:** This node sends a POST request to a JSReport API endpoint, including the form data within the request body. The request tells JSReport to generate a PDF based on the provided data and a predefined template ("invoice-main"). JSReport then returns the generated PDF as a binary file in the response.
4.  **Email Sending:** The resulting PDF is then passed to the "Send invoice" node. This node uses the GMail node to send an email with the PDF attached. The email is sent to a predefined recipient with a subject and body message.

## Services:

*   **JSReport:** A document generation service used to create PDFs from templates and data.
*   **Gmail:** An email service used to send the generated invoices.

## Hashtags:

#n8n #automation #PDF #JSReport #invoice
