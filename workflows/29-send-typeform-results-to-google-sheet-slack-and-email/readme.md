# n8n Workflow: Problem Reporting and Escalation

This workflow automates the process of collecting user-reported problems from a Typeform, storing them in a Google Sheet, and notifying relevant channels (Slack and Email) if the reported problem severity is high.

## Use cases:

- **Automated Bug Reporting:**  Streamline the process of collecting bug reports from users via Typeform and automatically escalate critical issues to the development team.
- **Customer Support Ticket Creation:**  Use customer feedback forms to automatically create tickets in a support system for issues exceeding a defined severity threshold.
- **Incident Management:**  Trigger incident response workflows based on user-reported problems, ensuring rapid response to critical issues.

## How it works:

1. **Typeform Trigger:** The workflow starts when a new form is submitted in Typeform ("UXuY0A").
2. **Google Sheets:** The data from the Typeform submission is appended to a Google Sheet ("Problems!A:D" range in spreadsheet "17fzSFl1BZ1njldTfp5lvh8HtS0-pNXH66b7qGZIiGRU"). The columns likely represent Email, Name, Severity, and Problem Description based on the later nodes.
3. **IF Condition:** The workflow checks the "Severity" column in the Google Sheet. If the severity value is greater than 7, it proceeds to the notification steps.  *Note:  It appears the data is pulled from the Google Sheets node, but the data fields (Email, Name, Severity, Problem) are being accessed as if they exist on the IF node.  This will only work if the IF node's input is explicitly configured (likely manually, since a typical IF node doesn't implicitly pass through all input fields).* Assuming the data is somehow made available in the IF node, the workflow proceeds.
4. **Slack Notification:** If the severity is high, a message containing the user's email, name, reported severity, and problem description is sent to a specified Slack channel ("problems").
5. **Send Email:** An email containing the same information as the Slack message is sent to a pre-configured email address (specified in the "toEmail" parameter).

## Services:

- Google Sheets
- Typeform
- Slack
- SMTP (Email)

## Hashtags:

#n8n #automation #bugreporting #customersupport #incidentmanagement
