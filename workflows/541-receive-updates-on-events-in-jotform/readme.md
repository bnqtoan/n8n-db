# JotForm Trigger Workflow

## Use cases:

*   **Lead Capture and Notification:** Automatically capture new leads submitted through a JotForm form and send a notification to a sales team via email or Slack.
*   **Data Synchronization:** Sync form submissions to a database or CRM for centralized data management and reporting.
*   **Automated Task Creation:** Create tasks in a project management tool (e.g., Asana, Trello) based on form submissions, streamlining task assignment and tracking.

## How it works:

This workflow is triggered when a new submission is made on the specified JotForm form.

1.  **JotForm Trigger:** The workflow starts with the "JotForm Trigger" node. It listens for new submissions on the JotForm form with ID "202012795501445". When a new submission is received, it triggers the workflow. This node use the `jotform_creds` to authenticate against Jotform API.

## Services:

*   JotForm

## Hashtags:

#n8n #JotForm #automation #formsubmission #webhook
