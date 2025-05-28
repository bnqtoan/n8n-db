# My workflow

## Use cases:

- **Automated Certificate Delivery:** Automatically generates and sends certificates to participants upon course completion based on data in a CSV file.
- **Personalized Email Campaigns:** Dynamically creates and sends personalized emails with unique attachments (e.g., certificates) to recipients listed in a spreadsheet.
- **Batch Processing of Email Attachments:** Processes a CSV file containing recipient information, generates personalized certificates, and sends them in batches to avoid overwhelming the email server.

## How it works:

1.  **Trigger:** The workflow starts when you manually click the "Execute" button in n8n.
2.  **Read CSV Data:** The "Read Binary File" node reads data from a specified CSV file (`/home/shashikanth/Documents/Cert-Gen-Test/data.csv`) and stores it as a binary property named "csv".
3.  **Convert to Spreadsheet Data:** The "Spreadsheet File" node converts the CSV binary data into a structured spreadsheet format, interpreting the first row as headers.
4.  **Split into Batches:** The "SplitInBatches" node divides the spreadsheet data into smaller batches of 5 items each. This is useful for processing large datasets in manageable chunks.
5.  **Read Certificate Image:** For each item (representing a recipient) in the batch, the "Read Binary File1" node reads a dynamically named PNG image file. The file path is generated based on the recipient's name from the CSV data (`/home/shashikanth/Documents/Cert-Gen-Test/generator-output/{{$json[\"name\"]}}.png`).  This assumes a certificate image exists for each recipient and is named accordingly.
6.  **Send Email:** The "Send Email" node sends an email to each recipient.  The recipient's email address is extracted from the "SplitInBatches" node's JSON data (`{{$node[\"SplitInBatches\"].json[\"email\"]}}`). The email includes a subject "Certificate For Course", a specified sender email (`bhavabhuthi@riseup.net`), and the certificate image as an attachment.

## Services:

-   **SMTP Server:** Used for sending emails (configured via SMTP account credentials).

## Hashtags:

#n8n #automation #email #certificate #workflow
