# Telegram Email Agent Workflow

## Use cases:

*   **Automated Email Response:** Forward specific inquiries received on Telegram to an AI agent, which then crafts and sends an appropriate email response using Gmail.
*   **Telegram-Based Email Assistant:**  A user can interact with an AI agent via Telegram to compose and send emails on their behalf, effectively using Telegram as an interface for Gmail.
*   **Customer Service Automation:** Integrate with a customer service Telegram channel to automatically respond to email-related queries, forwarding more complex issues to human agents.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a new message is received on Telegram.
2.  **AI Agent:** The received message text is fed into an AI Agent, which uses an OpenAI Chat Model and Simple Memory to process the request. The agent is configured to use a prompt and interact with an email tool.
3.  **OpenAI Chat Model:** The OpenAI Chat Model provides the language model capabilities for the AI agent.
4.  **Simple Memory:** It allows the AI agent to remember previous interactions in the current Telegram chat session.
5.  **Gmail:** The agent formulates an email (To, Subject, Message) using the user's Telegram input and sends it via Gmail.
6.  **Telegram:** A output response from the AI agent is sent back to the user on Telegram in the same chat.

## Services:

*   Telegram
*   OpenAI
*   Gmail

## Hashtags:

#n8n #automation #telegram #email #ai #agent
