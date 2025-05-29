# 📨 Send AI summaries of incoming emails from Gmail to Telegram

## Use cases:

*   **Stay updated on important emails without reading them all:** Get concise summaries of your Gmail inbox directly in Telegram, saving you time and effort.
*   **Filter and prioritize emails:** Quickly identify critical information in emails (like dates, prices, or discounts) to focus on what matters most.
*   **Receive email summaries in your preferred language:** Automatically translate and summarize emails in your chosen language for better understanding.

## How it works:

1.  **Gmail Trigger:** The workflow starts when a new email arrives in your Gmail inbox ("When a new email arrives" node).
2.  **Set summary language:** Assigns a default language (English) for the summary ("Set summary language" node).
3.  **Prepare fields for agent:** This node prepares the email data for the summarization agent. It extracts the sender, subject, and message body and sets the summary language ("Prepare fields for agent" node).
4.  **Summary generation agent:** The email content is passed to a Langchain agent, which uses a prompt to summarize the email in a short, natural, and informal way in the specified language ("Summary generation agent" node).
5.  **OpenAI Model:** Uses the OpenAI Model node for processing the summarize generation request.
6.  **Send summary to Telegram:** The generated summary is sent to your Telegram chat ("Send summary to Telegram" node). You need to configure your Telegram Chat ID in this node.

## Services:

*   Gmail
*   Telegram
*   OpenAI

## Hashtags:

#n8n #automation #emailSummary #gmail #telegram #openai
