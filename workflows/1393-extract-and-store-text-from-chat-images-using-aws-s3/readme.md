# Receipt Data Extraction and Storage Workflow

## Use cases:

- **Automated Expense Tracking:** Automatically extract data from receipts sent via Telegram and store it in Airtable for expense tracking and reporting.
- **Digital Archiving of Receipts:** Store receipt images in AWS S3 for secure and long-term archiving while simultaneously processing the receipt data.
- **Streamlined Data Entry:** Eliminate manual data entry from receipts by automating the extraction process and populating an Airtable database.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to a Telegram bot. The trigger is configured to listen for all updates and download any attached images at a medium size.
2.  **AWS S3:** The image received from Telegram is uploaded to an AWS S3 bucket named "textract-demodata". The file name is dynamically set based on the name of the binary data being passed.
3.  **AWS Textract:** The image is sent to AWS Textract, which analyzes the receipt and extracts relevant data (e.g., amounts, dates, vendor names).
4.  **Airtable:** The extracted data from AWS Textract is appended as a new record to an Airtable table named "receipts" within the "qwertz" application. The workflow automatically handles adding all the extracted fields to the Airtable record.

## Services:

-   Telegram
-   AWS S3
-   AWS Textract
-   Airtable

## Hashtags:

#n8n #automation #receipts #textract #airtable
