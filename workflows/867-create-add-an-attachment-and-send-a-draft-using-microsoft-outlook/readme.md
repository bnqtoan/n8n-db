# Create, add an attachment, and send a draft using the Microsoft Outlook node

## Use cases:

- **Automated Email Marketing Campaigns:**  Create personalized draft emails with attachments (e.g., promotional material, invoices) and send them to specific recipients.
- **Internal Communication Automation:** Automatically generate and send draft emails with attachments (e.g., reports, documents) to team members based on triggers or schedules.
- **Automated Notification System:** Create draft email notifications (e.g., system alerts, task reminders) with relevant attachments and send them to the appropriate stakeholders.

## How it works:

This workflow automates the process of creating, adding an attachment to, and sending a draft email using Microsoft Outlook.

1.  **On clicking 'execute':** This trigger node starts the workflow execution manually.
2.  **Microsoft Outlook:** Creates a new draft email with the subject "Hello from n8n!", HTML body content, and saves it in the Outlook drafts folder.
3.  **HTTP Request:** Downloads the n8n logo image from a specified URL.
4.  **Microsoft Outlook1:** Attaches the downloaded image (n8n logo) to the draft email created in the previous step.  The message ID is dynamically retrieved from the first Microsoft Outlook node's output.
5.  **Microsoft Outlook2:** Sends the draft email (with the attached image) using the message ID obtained from the first Microsoft Outlook node to "abc@example.com".

## Services:

-   Microsoft Outlook
-   n8n.io (for retrieving the logo)

## Hashtags:

#n8n #Outlook #EmailAutomation #Microsoft #WorkflowAutomation
