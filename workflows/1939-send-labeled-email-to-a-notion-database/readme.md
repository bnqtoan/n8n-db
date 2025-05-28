# Gmail to Notion Task Manager

## Use cases:

- **Automatic Task Creation:** Automatically create tasks in Notion from important emails labeled in Gmail, ensuring no critical items are missed.
- **Email Archiving and Tracking:** Use Notion as an archive for specific email threads, with a direct link back to the original email in Gmail, promoting better organization.
- **Progress Tracking:** Remove labels from Gmail emails once corresponding Notion tasks are completed, indicating progress and preventing repeated processing.

## How it works:

1.  **Scheduled Trigger:** The workflow starts on a defined schedule (e.g., every minute).
2.  **Gmail Retrieval:** Retrieves emails from Gmail with a specific label (e.g., "Notion").
3.  **Notion Database Check:** For each email, the workflow checks if a corresponding page already exists in a Notion database based on the email's thread ID.
4.  **Conditional Branching:**
    *   **If Page Exists:** Does nothing.
    *   **If Page Doesn't Exist:** Creates a new page in Notion. The email subject becomes the page title, the email snippet becomes the content, and a link to the original email is added as a property. The user's email address is retrieved using the Gmail API.
5.  **Task Completion Handling:** Monitors the Notion database for page updates. When a task's "Complete" property is checked, the workflow removes the corresponding label from the original email in Gmail.

## Services:

*   Gmail API
*   Notion API

## Hashtags:

#n8n #automation #gmail #notion #taskmanagement
