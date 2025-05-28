# Chatbot AI

## Use cases:

- **Mental Health Support:** Provides users with CBT-based therapeutic conversations via a Line chatbot for immediate support and guidance.
- **Answering FAQs:** Using an AI Agent, this workflow can analyze user queries and provide instant answers based on defined knowledge or context.
- **Customer Service Automation:** Automates customer support interactions through the Line messaging platform, offering personalized responses and assistance.

## How it works:

1.  **Line Chatbot (Webhook):** Listens for incoming messages from users on the Line messaging platform via a webhook.
2.  **Loading Animation:** Immediately sends a "loading" indicator back to the user on Line, providing feedback that their message is being processed.
3.  **Check Message Type IsText?:** Checks if the incoming message is text-based. If yes, proceeds to the AI Agent. If not, it sends a "Not supported" message.
4.  **AI Agent:** The AI agent receives the user's text message.
5.  **Azure OpenAI Chat Model:** Passes the user's prompt to Azure OpenAI's language model to generate an appropriate response based on the CBT therapy context.
6.  **Format Reply:** Formats the response from the language model into a plain text.
7.  **ReplyMessage - Line:** Sends the formatted response back to the user on Line via the Line Messaging API.

## Services:

-   Line Messaging API
-   Azure OpenAI

## Hashtags:

#n8n #automation #chatbot #line #openai
