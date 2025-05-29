# Using Bitly With Ollama Chat Model and Open Chat

## Use cases:

*   **Smart URL Shortening for Chatbots:** Automatically shorten URLs provided by an AI chatbot, making them easier to share and track. Imagine a chatbot recommending resources; this workflow would shorten the links before sending them to the user.
*   **Enhanced Link Management in AI-Driven Conversations:** Use Bitly to track clicks and engagement on links shared by an AI agent, gaining insights into user preferences and the effectiveness of different recommendations.
*   **Streamlined Resource Sharing from AI Models:** If an AI model generates a list of relevant resources (e.g., in response to a query), this workflow can automatically shorten those URLs via Bitly, making them presentable for sharing on social media or other platforms.

## How it works:

This workflow integrates an AI chat model (Ollama), an AI agent, and a URL shortening service (Bitly) to intelligently manage and shorten URLs within a conversational context.

1.  **Open Chat:** The workflow begins with a trigger, likely an Open Chat node.
2.  **AI Agent:** The AI Agent node is the core of the workflow, processing incoming messages or requests.
3.  **Ollama Chat Model:** The Ollama Chat Model node probably integrates a local LLM, to process and create an answer to the user's prompt.
4.  **Create Link (Bitly):** The AI Agent can trigger the "Create Link" (Bitly) node. This node takes a long URL and creates a shortened Bitly link. The AI Agent is likely configured to detect URLs within the chat conversation and pass them to the Bitly node.

## Services:

*   **Bitly:** A URL shortening and link management platform.
*   **Ollama:** Local LLM framework

## Hashtags:

#n8n #automation #AI #Bitly #URLShortener
