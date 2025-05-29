# Onboarding Email Generator from Google Sheets

## Use cases:

- **Automated Client Onboarding:** Automatically send personalized welcome emails to new clients as soon as they are added to a Google Sheet.
- **Efficient Communication:** Streamline the onboarding process by generating customized emails with checklists and relevant client information.
- **Error Handling:** Capture errors during the onboarding process for immediate notification.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts when a new row is added to a specified Google Sheet ("Onboarding").
2.  **Client Data:** Extracts client information (Name, Email, Company, Services Needed, Other Info) from the newly added row in the Google Sheet and formats it.
3.  **Client Checklist:** Defines a standard onboarding checklist.
4.  **Basic LLM Chain:** Uses a Large Language Model (LLM) via Langchain to generate a personalized onboarding email. The LLM uses the extracted client data and the predefined checklist to create the email body. The email includes information as the client name, their company, and the services they need. The LLM receive instruction not to generate extra text like "Okay, here's an email template ..." and start and end on new lines with a specific greeting and ending.
5.  **Google Gemini Chat Model:** This node feed Google Gemini with data.
6.  **Gmail:** Sends the generated email to the client's email address (extracted from the Google Sheet). The subject line includes a personalized welcome message.
7.  **Execution Completed:** Marks the successful completion of the workflow.
8.  **Error Handler:** Catches any errors that occur during the process.
9.  **Execution Failure:** Marks when the workflow fails.

## Services:

-   Google Sheets
-   Gmail
-   Google Gemini (via Langchain)

## Hashtags:

#n8n #automation #googlesheets #gmail #onboarding #llm #langchain
