# Stripe Invoices to S3 Bucket

## Use cases

- **Automated Invoice Archiving:** Automatically back up your Stripe invoices to an S3 bucket for long-term storage and compliance.
- **Organized Invoice Management:** Store invoices in a structured folder hierarchy (year/month) within your S3 bucket for easy retrieval.
- **Scheduled Backups:**  Schedule automatic monthly backups of invoices generated after a specific date to S3, ensuring you never miss an invoice.

## How it works

This workflow automates the process of downloading invoice PDFs from Stripe and uploading them to an AWS S3 bucket. Here's a breakdown of the key steps:

1.  **Trigger:** The workflow starts either manually ("When clicking ‘Test workflow’") or automatically on the first day of every month ("Every Month the First Day of the Month").
2.  **Environment Variables (ENV\*)**: Sets default values for the year, month, S3 bucket name, and subfolder. The year and month are dynamically calculated to target the previous month's invoices by default.
3.  **Clean and Escape ENV:** Trims whitespace and escapes special characters from the environment variables, ensuring the bucket name and subfolder are valid.
4.  **Get all Invoices\*:** Retrieves a list of invoices from Stripe's API created after the first day of the defined month. It uses a Stripe API credential.
5.  **List Invoices:** Splits the array of invoice objects into individual items.
6.  **We do only Invoice Objects:** Filters the list of objects, to download only Invoice type objects. If the object type is not an invoice, the workflow stops with an error.
7.  **Download Invoice PDF from Stripe:** Downloads the PDF file of each invoice from Stripe using the `invoice_pdf` URL provided in the invoice data.
8.  **Inject s3 Subpath:** Dynamically generates S3 subpaths based on the year, month, and subfolder variables.
9.  **Set-Subpath:** Constructs the complete S3 path, including the file name.
10. **Upload to S3 Bucket\*:** Uploads the downloaded invoice PDF to the specified S3 bucket using the generated path.  It also sets the storage class to "intelligentTiering".

## Services

-   Stripe API: Used to retrieve invoice data and download PDF files.
-   AWS S3: Used for storing the downloaded invoice PDFs.

## Hashtags

#n8n #automation #stripe #aws #s3 #invoice #backup
