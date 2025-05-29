# Generate Invoices

## Use cases:

-   Automatically generate and send invoices to customers upon receiving order details from a web form or e-commerce platform.
-   Create invoices from data stored in a database or spreadsheet, ensuring accurate and timely billing.
-   Schedule invoice generation for recurring billing cycles, such as monthly subscriptions, reducing manual effort.

## How it works:

1.  **Webhook Simulator:** Receives customer and order data via a simulated webhook. This would typically be triggered by a real webhook from an e-commerce platform.
2.  **Generate Invoice ID:** Generates a unique invoice ID in the format "INV-XXXXXX" using a JavaScript code node.
3.  **Check if ID Already Exists:** Checks if the generated invoice ID already exists in a Google Sheets document named "Uppfy Shop Invoices".
4.  **If Does not Exist:** If the invoice ID does not exist, the workflow proceeds; otherwise, it loops back to generate a new ID.
5.  **Set Fields:** Takes the data from the "Webhook Simulator" node and sets values for customer name, email, products, and total. Also uses the invoice id generated in step 2.
6.  **Create Invoice HTML:** Takes the data from the "Set Fields" node and transforms it into a well-formatted HTML invoice using a JavaScript code node.
7.  **HTML to PDF:** Converts the HTML invoice to a PDF using the html2pdf2.p.rapidapi.com API.
8.  **Download PDF from API:** Downloads the PDF from rhodium-tecnologia-html2pdf.s3.amazonaws.com
9.  **Upload PDF to GDrive:** Uploads the generated PDF invoice to a specified folder in Google Drive, naming it using the order ID and customer name.
10. **Email Invoice to Customer:** Sends the invoice as an email to the customer. The email includes a formatted message with a "Pay Now" button (link needs to be configured).
11. **Append Details to Invoices Sheet:** Appends the invoice details (ID, URL, amount, customer information, and status) to the "Uppfy Shop Invoices" Google Sheets document.

## Services:

-   Google Sheets
-   Google Drive
-   SMTP (for sending emails)
-   html2pdf2.p.rapidapi.com

## Hashtags:

#n8n #automation #invoice #googleSheets #googleDrive
