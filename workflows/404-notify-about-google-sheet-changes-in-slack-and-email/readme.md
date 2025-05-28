# n8n Workflow: Problem Reporting and Escalation

## Use Cases:

- **Automated Problem Reporting:** Automatically capture user-submitted problem reports from a Typeform and store them in a Google Sheet for tracking.
- **Severity-Based Escalation:**  Escalate critical issues (severity level above a threshold) to relevant personnel via Slack and email for immediate attention.
- **Centralized Issue Logging:** Maintain a comprehensive log of all reported problems in a Google Sheet, regardless of severity, for analysis and future improvements.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new form is submitted in Typeform (specifically, the form with ID "UXuY0A").
2.  **Google Sheets:** The data from the Typeform submission is appended as a new row to a Google Sheet named "Problems" within the spreadsheet identified by ID "17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU".  The specific columns used are A:D.
3.  **IF:** An "IF" node checks the "Severity" column from the "Google Sheets" data (using `{{$node["Google Sheets"].data["Severity"]}}`) and compares it to the value 7. If the severity is larger than 7, the workflow proceeds to the next steps.
4.  **Slack:** If the severity is high, a message containing the user's email, name, severity, and problem description is sent to the "problems" channel in Slack.
5.  **Send Email:** Concurrently, an email with the same information is sent to a predefined email address. Note:  The "toEmail" and "fromEmail" parameters in the "Send Email" node are empty, meaning the workflow as defined will likely fail unless those are filled in.  Also, the `{{$node["IF"].data["Email"]}}` syntax suggests the data comes directly from the "IF" node, which might be incorrect as the data originates from Google Sheets.

## Services:

-   Typeform
-   Google Sheets
-   Slack
-   SMTP (Email)

## Hashtags:

#n8n #automation #problemreporting #escalation #googlesheets
