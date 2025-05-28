# Typeform to Airtable and Slack Notification Workflow

## Use cases:

- Automatically collect form submissions from Typeform and store them in an Airtable database.
- Send real-time notifications to a Slack channel whenever a new form submission is received.
- Streamline data collection and notification processes for surveys, feedback forms, or registration forms.

## How it works:

1.  **Typeform Trigger:** This node listens for new submissions to a specified Typeform form (identified by its ID). When a new submission is received, it triggers the workflow.
2.  **Set:** This node extracts the "Name" and "Email" fields from the Typeform submission data and stores them in a structured format. It uses the answers from the questions "Let's start with your name." and "What's your email address?". The "keepOnlySet" option ensures that only the specified fields are passed on to the next node.
3.  **Airtable:** This node appends the extracted "Name" and "Email" data as a new row to a specified table ("Table 1") in an Airtable base.
4.  **Slack:** This node sends a message to a specified Slack channel ("general") whenever a new row is added to the Airtable base. The message includes the "Name" and "Email" from the submission, formatted as a notification.

## Services:

-   Typeform
-   Airtable
-   Slack

## Hashtags:

#n8n #automation #typeform #airtable #slack
