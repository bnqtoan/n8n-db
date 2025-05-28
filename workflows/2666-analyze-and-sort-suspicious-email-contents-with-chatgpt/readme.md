# Automated Phishing Email Detection and Jira Ticket Creation

## Use Cases

*   **Automated Security Monitoring:** Automatically analyze incoming emails for potential phishing attempts, reducing the workload on security teams.
*   **Proactive Threat Response:** Create Jira tickets for potentially malicious emails, enabling faster investigation and response to security threats.
*   **Improved Incident Management:** Enrich Jira tickets with detailed email analysis, screenshots, and text body attachments for comprehensive incident documentation.

## How it Works

This workflow automates the process of detecting potential phishing emails and creating corresponding Jira tickets.

1.  **Email Trigger:** The workflow starts with either a **Gmail Trigger** or a **Microsoft Outlook Trigger** which monitors a specified email account for new messages.
2.  **Data Extraction:** Upon receiving a new email, relevant data such as the subject, recipient, HTML body, and headers are extracted and stored in variables using **Set Email Variables** nodes.  Different **Set Email Variables** nodes are used depending on whether the email is from Gmail or Outlook since the data structure will be different.  For Outlook emails, the workflow will first grab the headers through the Microsoft Graph API (**Retrieve Headers of Email**).  These headers are then parsed into a more usable format (**Format Headers**).
3.  **Email Body Processing:** The HTML and text bodies of the email are extracted. The text body is converted to a file using the **Convert Email Body to File** node.
4.  **Screenshot Generation:** A screenshot of the HTML email body is generated using the **Screenshot HTML** node, which uses the hcti.io API. The screenshot is then retrieved via the **Retrieve Screenshot** node.
5.  **AI Analysis:** The email's HTML body and headers are sent to the **Analyze Email with ChatGPT** node for analysis. ChatGPT determines if the email is potentially malicious and provides a summary of its findings in JSON format.
6.  **Conditional Branching:** The **Check if Malicious** node evaluates the "malicious" flag from the ChatGPT output.
7.  **Jira Ticket Creation:** Based on the AI analysis, either a "Potentially Malicious" or "Potentially Benign" Jira ticket is created using the corresponding **Create Potentially Malicious Ticket** or **Create Potentially Benign Ticket** node.
8.  **Attachment Upload:** The workflow renames and uploads the email body as a `.txt` file and the screenshot of the email to the created Jira ticket. This provides visual context and detailed content for security teams. The **Set Jira ID** ensures the new Jira ID is set for the attachments.

## Services

*   Gmail API
*   Microsoft Graph API (Outlook)
*   hcti.io API (HTML to Image Conversion)
*   OpenAI API (ChatGPT)
*   Jira API

## Hashtags

#n8n #automation #workflow #phishing #security #Jira #OpenAI #EmailAnalysis
