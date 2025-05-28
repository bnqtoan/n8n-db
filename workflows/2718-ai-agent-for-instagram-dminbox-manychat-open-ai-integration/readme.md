# InstaTest

## Use cases:

- **Automated Customer Support for Instagram:** This workflow can be used to automatically respond to customer inquiries received via Instagram messages, providing instant support and freeing up human agents for more complex issues.
- **Instagram Influencer Engagement:** An influencer can use this workflow to automatically respond to followers' messages, improving engagement and building stronger relationships with their audience.
- **Personalized Product Recommendations:** Based on user messages, the workflow can provide tailored product recommendations to Instagram followers, potentially increasing sales and customer satisfaction.

## How it works:

This workflow automates responses to Instagram messages received via ManyChat. Here's a breakdown:

1.  **Getting message from Instagram:** The workflow starts with a "Webhook" node that listens for incoming POST requests from ManyChat, which relays messages from Instagram.
2.  **Set your system promt for AI:** The "Set" node defines the system prompt for the AI model, configuring its persona (Instagram influencer), context (subscriber messages), and task (answering questions in a specific writing style). It also extracts `sessionId` and `chatInput` from the incoming webhook data.
3.  **AI Agent, ChatGPT Model and Local n8n memory:** The "AI Agent" leverages a "ChatGPT model" node for generating responses and  "Local n8n memory" for saving chat history. The AI Agent  takes the user's message (`chatInput`) and the system prompt, and uses the configured ChatGPT model to formulate a response. Memory node stores context to provide more relavant answers.
4.  **Send respond:** The "Respond to Webhook" node sends the AI-generated response back to ManyChat, which then delivers it to the user on Instagram.

## Services:

-   **ManyChat:** Used for receiving messages from Instagram and sending responses back.
-   **OpenAI API (ChatGPT):** Used to generate the automated responses.

## Hashtags:

#n8n #automation #instagram #chatGPT #manychat
