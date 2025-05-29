# Google Forms to NotionCRM

## Use cases:

*   **Automated CRM Entry:** Automatically create new entries in your Notion CRM database whenever a new Google Forms submission is received. This eliminates manual data entry and ensures timely follow-up.
*   **Instant Notifications:** Send email notifications via Gmail whenever a new entry is added to the Notion CRM, keeping you informed about new leads or submissions.
*   **Lead Management:** Streamline your lead management process by capturing information from Google Forms, storing it in Notion for organization, and receiving email alerts for immediate action.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts with the "Google Sheets Trigger" node, which listens for new submissions in a specified Google Sheet (likely populated by a Google Form).
2.  **Notion:** When a new submission is detected, the data is passed to the "Notion" node. This node likely creates a new page in a Notion database, using the data from the Google Sheet.
3.  **Gmail:** After creating the Notion page, the workflow proceeds to the "Gmail" node. This node sends an email notification, possibly containing details of the new submission, to a predefined recipient.
4.  **Sticky Note:** there is a sticky note with no information

## Services:

*   Google Sheets (likely linked to Google Forms)
*   Notion
*   Gmail

## Hashtags:

#n8n #automation #googleforms #notion #crm
