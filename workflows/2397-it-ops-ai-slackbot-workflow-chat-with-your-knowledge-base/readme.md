# My Workflow

## Use cases:

- **Automated IT Support:** An employee asks a question in a dedicated Slack channel. The workflow automatically responds with relevant information gathered from a knowledge base (e.g., Confluence) using AI.
- **Onboarding Assistance:** New employees can ask common onboarding questions via Slack. The AI Agent provides answers by querying the knowledge base, reducing the IT department's workload.
- **Troubleshooting Guide:** When users encounter technical issues, they can describe the problem in Slack. The workflow uses the AI to provide step-by-step troubleshooting instructions based on the knowledge base content.

## How it works:

1.  **Receive DMs:** Listens for new messages in a specified Slack channel via a webhook.
2.  **Verify Webhook:** Responds to Slack's challenge request to ensure the webhook remains active.
3.  **Check if Bot:** Verifies that the message sender is a human user, preventing the workflow from processing bot messages.
4.  **Send Initial Message:** Sends an immediate acknowledgement message to the user in Slack confirming the message was received.
5.  **AI Agent:** This node orchestrates the response generation using the following:
    *   **OpenAI Chat Model:** Uses the GPT-4o model to understand the user's query and generate a response.
    *   **Window Buffer Memory:** Maintains a conversation history for each user to provide context to the AI Agent. The conversation history is stored per channel ID.
    *   **Call Confluence Workflow Tool:**  Searches a Confluence knowledge base using keywords extracted from the user's query.  A separate n8n workflow (ID: Pxzc65WaCPn2yB5I) handles the Confluence search.
6.  **Delete Initial Message:** Removes the initial acknowledgment message to reduce clutter in the Slack channel.
7.  **Send Message:** Sends the final AI-generated response to the user in the Slack channel, formatted with Slack markdown.

## Services:

*   Slack
*   OpenAI
*   Confluence (via a separate n8n workflow using the HTTP Request node)

## Hashtags:

#n8n #automation #slack #openai #itsupport
