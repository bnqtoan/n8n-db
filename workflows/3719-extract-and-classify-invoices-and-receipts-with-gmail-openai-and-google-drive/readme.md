# Gmail PDF Invoice/Receipt Classifier & Google Drive Uploader

## Use cases:

-   **Automated Expense Tracking:** Automatically extract receipts and invoices from Gmail, classify them, and upload them to a designated Google Drive folder for easy expense tracking and reporting.
-   **Streamlined Tax Preparation:** Collect all relevant financial documents (receipts, invoices) from a specific period and store them in an organized manner, simplifying the tax preparation process.
-   **Document Archiving:** Archive specific types of documents (e.g., contracts, purchase orders) received via email in a structured folder system on Google Drive.

## How it works:

1.  The workflow starts with a **Webhook** node, triggered by an external request containing a start date, end date, and a flag indicating whether to send an email with the collected documents. The webhook should contain the start date and end date for filtering emails.
2.  A **Create folder** node dynamically creates a folder in Google Drive with the name format `invoices_YYYY-MM-DD`, where the date range is extracted from the webhook data.
3.  A **Get emails with attachments** node fetches emails from Gmail within the specified date range and filters for those with attachments.
4.  An **Optional filter for emails** node enables filtering emails with specific parameters.
5.  The **Iterate over email attachments** node loops through each email and extracts the attachments.
6.  An **Is attachment a PDF?** node checks if the attachment is a PDF file. If not, it skips the attachment.
7.  The **Read PDF email attachments** node extracts the text content from the PDF attachment.  If it fails, it continues to the next PDF.
8.  An **Is text within token limit?** node verifies if the PDF text content length is within the defined token limit to avoid errors and high OpenAI costs.
9.  The **OpenAI** node uses the GPT-4.1-MINI model to determine if the PDF content and filename match the defined criteria (e.g., "receipt or invoice").  The prompt sent to OpenAI includes the filename and text content, and expects "true" or "false" as a response.
10. The **Merge** node takes 2 inputs (the original PDF data and the OpenAI result) and merges them.
11. An **Is matched** node checks the response from OpenAI. If it is "true", the workflow proceeds to upload the file.
12. The **Upload file to folder** node uploads the PDF file to the Google Drive folder created in step 2.
13. A **Send email with invoices?** node verifies if the initial webhook request included the flag to send an email.
14. An **Aggregate attachments** node merges all matched PDF binary data into a single item to be sent as attachments.
15. Finally, the **Send to my accountant** node sends an email with the matched PDF attachments to the specified email address.

## Services:

-   Gmail
-   Google Drive
-   OpenAI

## Hashtags:

#n8n #automation #gmail #googleDrive #openai #invoiceProcessing
