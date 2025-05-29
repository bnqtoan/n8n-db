# My Workflow

## Use cases:
- **Personal Email Archiving**: Back up or export emails from a specific sender (e.g., invoices, reports).
- **Audit Logs**: Save conversations for compliance.
- **Team Reports**: Aggregate project emails into a central file store.

## How it works:

1.  The workflow is initiated manually by the "Start Workflow" node.
2.  The "Gmail" node fetches emails from a specific sender (`akhilgadiraju@gmail.com`).
3.  The "Parse Data" node extracts the `id`, `subject`, `message`, and `time` from each email.
4.  The "Convert Time Field" node reformats the `time` field to a more readable format, specifically setting the timezone to 'Asia/Kolkata'.
5.  The "Convert to File" node converts the extracted data into a CSV file format.
6.  The "Google Drive" node uploads the generated CSV file to a specified folder (root by default) in Google Drive, with a filename based on the current timestamp.
7.  The workflow ends with the "End Workflow" node.

## Services:

*   Gmail
*   Google Drive

## Hashtags:

#n8n #automation #email #google #workflow
