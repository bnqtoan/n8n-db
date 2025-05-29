# OpenAI e-mail classification - application

## Use cases:

- **Automated Job Application Sorting:** Automatically classify incoming emails with resumes, extract key information, and route them to the appropriate HR channels, streamlining the hiring process.
- **Lead Qualification:** Identify potential sales leads from inbound emails by classifying them and extracting relevant contact details for further engagement by the sales team.
- **Automated Invoice Processing:** Categorize incoming invoices, extract key data like invoice number and amount due, and trigger automated payment workflows.

## How it works:

1.  **Email Trigger:** The workflow starts when a new email arrives in a specified IMAP inbox. It fetches the email content and any attachments.
2.  **Extract Data from Attachment:** If the email has an attachment (assumed to be a PDF), this node extracts the text content from the attachment. If there is an error, the workflow continues.
3.  **Classify email:** Classifies the emails into categories such as job_application, inbound_lead, invoice, or other, based on the email's content and attachment data. The AI model categorizes the email,
4.  **Extract variables - email & attachment:** Extracts key information from the email body and resume attachment, such as the applicant's first name, last name, age, residence, study, work experience, and personal characteristics.
5.  **Workflow Routing:** Based on the classification, the workflow can trigger other workflows to deal with the different kinds of emails, for example: Job applications, sales inquiries, invoices, etc.

## Services:

-   IMAP (for receiving emails)
-   OpenAI (for email classification and information extraction)

## Hashtags:

#n8n #automation #emailClassification #openai #jobapplications
