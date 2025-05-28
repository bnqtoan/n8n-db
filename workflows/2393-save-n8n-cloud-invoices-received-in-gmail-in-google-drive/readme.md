# Automate Paddle Invoice Processing and Storage in Google Drive

## Use cases:

- **Automated Invoice Management:** Automatically download and store invoices from Paddle in a designated Google Drive folder.
- **Paperless Accounting:** Eliminate manual downloading and filing of invoices, promoting a paperless office environment.
- **Simplified Financial Tracking:** Keep all Paddle invoices organized and easily accessible in Google Drive for accounting and bookkeeping purposes.

## How it works:

1.  **Gmail Trigger:** The workflow starts by monitoring a specified Gmail inbox for new emails.
2.  **Setup:**  The workflow starts by setting up the API key of **pdflayer** to download the invoice as PDF, and the URL of the Google Drive folder that will store the PDFs.
3.  **Filter for Paddle Invoices:** It filters emails to identify those specifically from "help@paddle.com" with the subject "Your invoice," ensuring only relevant emails are processed.
4.  **Extract "a-tags" from email:** Extracts all the a-tags of the email, where the invoice URL is located.
5.  **Split Out:** Splits the "link" field into multiple items.
6.  **Filter Invoice Link:** Filters the links to keep only the link that contains "/receipt/".
7.  **Download Invoice PDF from URL:** Downloads the invoice PDF from the extracted URL using the pdflayer API.
8.  **Upload PDF to Drive:** Uploads the downloaded PDF to Google Drive.
9.  **Rename file:** Renames the file using the format: `n8n_cloud_invoice_{yyyy-MM-dd}.pdf`
10. **Move to the correct folder:** Moves the renamed file to the Google Drive folder you specified.

## Services:

-   Gmail
-   Google Drive
-   pdflayer API ([https://pdflayer.com/](https://pdflayer.com/))

## Hashtags:

#n8n #automation #googleDrive #gmail #invoice #paddle
