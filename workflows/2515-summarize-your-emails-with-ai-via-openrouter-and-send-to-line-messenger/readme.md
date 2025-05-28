# Gmail to Line

## Use cases:

- **Prioritized Email Notifications:**  Receive instant summaries of important emails in a Line message, ensuring you don't miss critical action items, deadlines, or urgent requests.
- **Email Triage for Busy Individuals:** Automatically filter out unimportant emails like newsletters and promotions, focusing only on essential communications in your Line notifications.
- **Team Collaboration (modified):** You can adapt this workflow for team in a Line group by changing the "to" parameter to Line Group ID and providing a summary of important emails, keeping members informed of critical updates.

## How it works:

1.  **Read emails (IMAP):** Fetches emails from your Gmail account using IMAP protocol.  The workflow is configured to perform no post-processing actions on the emails.
2.  **Basic LLM Chain:** An email analyzer that take the from, subject and body of the email. It determines whether an email requires attention based on predefined criteria (deadlines, action items, payments, etc.). It is also connected to an output parser and openrouter chat model.
3.  **OpenRouter Chat Model:** uses google/gemini-2.5-flash-preview-05-20 A.I. model to work.
4.  **Structured Output Parser:** Parses the output of the LLM Chain into a structured JSON format. It defines "isImportant" (boolean) and "summary" (string) properties.
5.  **If:** A conditional node that checks the "isImportant" property from the parsed JSON output. If "isImportant" is true, the workflow proceeds.
6.  **Send summarized content to messenger:** Sends a Line message using the Line Messaging API. The message contains a summary of the email extracted from the previous steps. It's set up to send a message to a specific Line user ID.

## Services:

*   Gmail (via IMAP)
*   Line Messaging API
*   OpenRouter.ai

## Hashtags:

#n8n #automation #email #line #llm
