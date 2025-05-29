# Add new incoming emails to a Google Sheets spreadsheet as a new row.

## Use cases:

- **Email Archiving:** Automatically create a backup of important emails in a structured format for long-term storage and easy searching.
- **Lead Tracking:** Capture contact information and subject lines from incoming emails into a spreadsheet for sales or marketing teams to follow up on leads.
- **Customer Support Logging:** Record customer inquiries received via email in a spreadsheet to track response times, issue types, and resolution status.

## How it works:

1.  The workflow starts with the **Gmail Trigger** node, which monitors a specified Gmail inbox for new emails.
2.  When a new email arrives, the trigger activates the workflow.
3.  The trigger node extracts the **sender's email address (From), subject (Subject), and a snippet of the email body (snippet)** from the incoming email.
4.  The **Google Sheets** node then appends a new row to a specified Google Sheets spreadsheet.
5.  The extracted email details are inserted into the corresponding columns of the new row: "Sender Email", "Subject", and "body".

## Services:

-   Gmail
-   Google Sheets

## Hashtags:

#n8n #automation #gmail #googlesheets #emailtracking
