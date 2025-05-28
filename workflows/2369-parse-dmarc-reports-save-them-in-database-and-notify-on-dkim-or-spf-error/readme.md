# Parse DMARC reports

## Use cases:

- Automatically monitor a dedicated email inbox for incoming DMARC reports.
- Parse DMARC reports to extract key information about email authentication (SPF, DKIM) and policy enforcement, storing the data in a database for auditing and analysis.
- Receive real-time notifications via Slack or email when DMARC reports indicate authentication failures or policy violations.

## How it works:

1.  The workflow starts with an "Email Trigger (IMAP)" node, which monitors a specified email inbox for new messages.
2.  When a new email arrives, the "Unzip File" node extracts the attached DMARC report (assumed to be a ZIP file).
3.  The "Extract XML data" node extracts the XML data from the DMARC report file.
4.  The "Parse XML data to JSON" node converts the XML data into a JSON format that can be easily processed by n8n.
5.  The "If multiple records to parse" node checks if the DMARC report contains multiple records. It continues down one path is that is true and another if false.
6.  The "Split Out For Separate Entries" and "Rename Keys" nodes handles multiple DMARC records
7.  The "Rename column for consistency" node renames a column
8.  The "Map fields for DB input and parse" node maps the extracted data to specific fields for database input.
9.  The "Begin format date" and "End date format" nodes convert timestamp data to a `YYYY-MM-DD hh:mm:ss` format
10. The "Input into database" node inserts the processed data into a MySQL database table named `dmarc`.
11. The "If issue with DKIM or SPF" node checks if the SPF or DKIM authentication failed for any emails reported in the DMARC report.
12. If authentication failures are detected, the "Slack Post Message On Channel" node sends a notification to a specified Slack channel and the "Send Error Notification Email" node sends a notification email.

## Services:

-   IMAP (for email retrieval)
-   MySQL/MariaDB (for storing parsed DMARC data)
-   Slack (for sending notifications)

## Hashtags:

#n8n #DMARC #emailauthentication #automation #security
