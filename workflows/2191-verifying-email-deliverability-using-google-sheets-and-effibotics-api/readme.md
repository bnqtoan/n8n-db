# Email Validation from Google Sheets

## Use cases:

- **Lead Enrichment:** Automatically validate email addresses collected in a Google Sheet to ensure deliverability before launching a marketing campaign.
- **Data Cleaning:** Regularly clean and update a Google Sheet containing customer or subscriber data by verifying the validity of email addresses.
- **Real-time Validation:** Validate email addresses added to a Google Sheet in real-time, ensuring that only valid emails are used for important communications.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts when a new row is added or updated in a specified Google Sheet. The workflow is triggered every minute.
2.  **If Email Exists:** The workflow filters out rows that already have a value in the "Status" column, and thus email deliverability has already been validated.
3.  **Remove Duplicates:** The workflow removes duplicate entries based on the "Email" field to avoid redundant validations.
4.  **Verify your emails:** The workflow makes an HTTP POST request to Effibotics to validate email, using the email address from the Google Sheet.
5.  **Update data to google sheets:** Updates the original Google Sheet with deliverability status from Effibotics.

## Services:

-   Google Sheets
-   Effibotics Email Validation API ([https://email.effibotics.com/api](https://email.effibotics.com/api))

## Hashtags:

#n8n #automation #emailvalidation #googlesheets #datacleaning
