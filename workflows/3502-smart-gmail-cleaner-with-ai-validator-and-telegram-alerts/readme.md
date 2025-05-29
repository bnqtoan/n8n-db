# Automated Email Classification and Management with AI

## Use cases:

- **Automated Spam Filtering:** Automatically identifies and deletes spam or unwanted marketing emails from a Gmail account based on AI-powered confidence scores, reducing manual effort and decluttering the inbox.
- **Smart Email Prioritization:** Classifies emails into categories (wanted vs. unwanted) with confidence scores, allowing users to focus on important emails and postpone dealing with less critical ones.
- **Email Archiving based on Relevance:** Automatically labels emails deemed less important and archives them, freeing up inbox space while retaining the data for future reference.

## How it works:

1.  **Trigger:** The workflow starts when manually triggered using the "When clicking ‘Test workflow’" node, and initializes a loop counter.
2.  **Email Retrieval (Gmail Get Email):** Retrieves emails from a Gmail account within a specified date range, excluding those already labeled as "n8n-skipped." The date range is calculated dynamically using the loop counter to process emails in batches.
3.  **AI-Powered Classification (AI Check Email):** Uses an AI agent (Langchain Agent) to classify each email based on its content. The AI assigns confidence scores (0-1) for "isUnwanted," "isMarketing," and "isSpam," along with a brief explanation. This classification uses the Google Gemini Chat Model.
4.  **Output Parsing (Unwanted Email Output Parser):** Parses the output from the AI agent, extracting key information such as the email ID, confidence scores, classification reason, and sender's email address.
5.  **Conditional Check (If Unwanted Marketing or Spam):** Evaluates the confidence scores. If any of the "isUnwanted," "isMarketing," or "isSpam" scores exceed a threshold of 0.5, the email is considered unwanted.
6.  **Email Deletion/Labeling (GmailDeleteEmail, Gmail):**
    *   If the email is classified as unwanted, it's deleted from Gmail.
    *   If the email is classified as wanted, it's labeled on Gmail.
7.  **Notifications (Telegram Sent Email Deleted Notification, Telegram Sent Email Not Deleted Notification, Telegram Sent AI Error Notification, Telegram Sent Delete Email Failed Notification):** Sends Telegram notifications to a specified chat ID, informing the user about:
    *   Successfully deleted emails (sender and reason).
    *   Emails skipped (sender and reason).
    *   Errors during AI classification.
    *   Failures during email deletion.
8. **Looping:** The workflow increments a "page" variable to process emails in batches by date range. The loop continues until no more emails are found within the defined timeframe.
9. **Aggregation (Aggregate):** Aggregate all item data.
10. **Forwarding page number:** Forwarding the page number to initialize again.

## Services:

*   Gmail
*   Google Gemini (via Langchain)
*   Telegram

## Hashtags:

#n8n #automation #emailManagement #AI #gmail