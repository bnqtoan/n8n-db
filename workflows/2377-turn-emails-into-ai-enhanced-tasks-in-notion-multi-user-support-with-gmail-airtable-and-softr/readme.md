# mails2notion V2

## Use cases:

- **Automated Task Management:** Automatically create tasks in Notion from emails, ensuring important action items are never missed.
- **Email Summarization and Archiving:** Summarize lengthy email threads and archive them in a structured format in Notion for future reference.
- **Centralized Information Hub:** Consolidate email content, sender information, and dates into a Notion database, creating a centralized hub for email-related information.

## How it works:

1.  **Gmail Trigger:** The workflow starts by monitoring a Gmail inbox for new emails every minute.
2.  **Filter for Unprocessed Mails:** Filters out emails that have already been processed or marked with an error label to prevent duplication.
3.  **Extract Route ID:** Extracts a unique identifier (route) from the email address using a regular expression. This ID is used to fetch configuration data from Airtable.
4.  **Get Route by ID:** Retrieves configuration details from an Airtable database using the extracted route ID. This includes the Notion database ID and authentication token.
5.  **Active Routes Only:** Checks if the retrieved route is currently active (based on a boolean field in Airtable). Only active routes proceed further.
6.  **AI-Powered Content Processing:**
    *   **Generate Actionable Task:** Utilizes the OpenAI Chat Model to generate an actionable task from the email content, including a title, description, and optional bullet points.
    *   **Get Summary & Meta Data:** Uses the OpenAI Chat Model to create a detailed summary of the email and extract metadata like sender, subject, and date.
7. **Format Notion Page Blocks:** Formats the extracted data and actionable task into Notion-compatible blocks (paragraphs, bullet points, dividers).
8.  **Create Notion Page:** Creates a new page in the specified Notion database using the formatted content and the authentication token from Airtable.
9.  **Add Label "Processed":** Adds a "Processed" label to the email in Gmail to mark it as completed.
10. **Error Handling:**
    *   If the Notion page creation fails, an "Error" label is added to the email. The route in Airtable is deactivated to prevent further errors.
    *   A notification email is sent to the sender about the error and deactivation.
    *   If no active route is found for the email alias, an email is sent to the sender informing them.

## Services:

-   Gmail
-   Airtable
-   OpenAI
-   Notion

## Hashtags:

#n8n #automation #email #notion #airtable
