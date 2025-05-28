# n8n Workflow: Problem Reporting and Alerting

## Use cases:

1.  **Automated Incident Reporting:** When users submit problem reports via Typeform, this workflow automatically logs the issue in a Google Sheet and triggers alerts for high-severity incidents.
2.  **Prioritized Support Notifications:**  The workflow prioritizes notifications based on severity, sending immediate Slack messages for critical issues while also logging all reports in a Google Sheet for tracking and analysis.
3.  **Simplified Issue Tracking:**  Instead of manually compiling data, the workflow automatically populates a Google Sheet with Typeform submission data, ensuring a centralized and up-to-date record of all reported problems.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new form is submitted in Typeform ("Typeform Trigger" node). The specific form is identified by its ID ("UXuY0A").
2.  **Google Sheets Logging:**  The data from the Typeform submission is appended to a Google Sheet ("Google Sheets" node). The sheet is specified by its ID ("17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU"), and the data is added to the "Problems!A:D" range.
3.  **Severity Check:**  The workflow checks the "Severity" value from the Google Sheet data ("IF" node). If the severity is greater than 7, it proceeds to send alerts.
4.  **Slack Notification:** If the severity is high, a message is sent to a specified Slack channel ("Slack" node). The message includes the user's email, name, severity, and the problem description.
5.  **Email Alert:** In Addition to Slack, an email is sent with the user's data if the severity is high ("Send Email" node).

## Services:

*   Typeform
*   Google Sheets
*   Slack
*   SMTP (for sending emails)

## Hashtags:

#n8n #automation #Typeform #GoogleSheets #Slack #IssueTracking
