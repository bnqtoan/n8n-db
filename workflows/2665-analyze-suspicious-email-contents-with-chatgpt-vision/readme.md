# Automated Phishing Email Reporting to Jira

## Use cases:
- Automatically create Jira tickets for potential phishing emails detected in Gmail or Outlook inboxes.
- Provide security teams with detailed reports, including a screenshot of the email, its headers, and an AI-powered analysis of the email's content, all attached to the Jira ticket.
- Streamline the incident response process by automating the initial triage and documentation of potential phishing attacks.

## How it works:

1.  **Email Trigger (Gmail or Outlook):** The workflow starts by monitoring either a Gmail or Microsoft Outlook inbox for new emails. It checks every minute. *Note: the Outlook trigger is disabled in this configuration.*
2.  **Retrieve Email Content:** Once a new email is detected, the workflow retrieves the email's body content and headers.  For Outlook emails, the "Retrieve Headers of Email" node retrieves detailed headers from the Microsoft Graph API and converts outlook's body content type to text format. The "Format Headers" node then transforms them into a more readable format.
3.  **Set Email Variables:** The workflow sets key email details (HTML body, headers, subject, recipient, text body) into variables for later use.
4.  **Screenshot Generation (hcti.io):** The workflow uses the hcti.io API to generate a screenshot of the email's HTML content.
5.  **Retrieve Screenshot:** Fetches the image URL to be passed to the next step.
6.  **AI Analysis (ChatGPT):** The screenshot and headers are sent to ChatGPT, which analyzes the email and determines if it's a potential phishing attempt.  The prompt instructs ChatGPT to format its analysis for Jira's wiki-style renderer.
7.  **Create Jira Ticket:** A new Jira ticket is created with the subject of the email and details including the recipient, email body, and the AI analysis.
8.  **Rename Screenshot:** The screenshot's filename is changed to "emailScreenshot.png".
9.  **Upload Screenshot to Jira:**  The screenshot is attached to the newly created Jira ticket.

## Services:

*   Gmail API
*   Microsoft Graph API
*   hcti.io API (for screenshot generation)
*   OpenAI API (ChatGPT)
*   Jira API

## Hashtags:

#n8n #automation #phishing #Jira #emailsecurity
