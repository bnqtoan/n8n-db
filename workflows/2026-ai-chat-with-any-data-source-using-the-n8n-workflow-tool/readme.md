# AI Agent with Custom Hacker News Tool

## Use cases:

- **Answering specific questions about Hacker News popular posts:** Users can ask questions like "What is the 5th most popular post ever on Hacker News?" and receive a direct answer.
- **Integrating Hacker News data into AI-driven applications:** This workflow can be used to provide AI agents with real-time information about trending topics on Hacker News.
- **Building a custom chatbot for Hacker News enthusiasts:** This workflow can be used as the backend for a chatbot that answers questions about top posts on Hacker News.

## How it works:

1.  **Trigger:** The workflow starts when a chat message is received via the "When chat message received" node.
2.  **AI Agent:** The "AI Agent" node processes the message and uses the defined tools to respond to user queries.
3.  **Custom Tool:** The "Custom tool to call the wf below1" node references another workflow (the "Sub-workflow: Custom tool"). When the agent needs information about popular Hacker News posts, it calls this tool.
4.  **Hacker News Data:** The "When Executed by Another Workflow" trigger activates the sub-workflow. This triggers the "Hacker News" node to fetch the top 50 posts from Hacker News.
5.  **Data Cleaning:** The "Clean up data" node extracts relevant information (title, points, URL, creation date, author) from the Hacker News data.
6.  **Stringify:** The "Stringify" node transforms the cleaned data into a JSON string.
7.  **AI Chat Model:** The "OpenAI Chat Model" is configured to use the gpt-4o-mini and communicate with the AI Agent.
8.  **Response:** The AI Agent uses the information from the custom tool to formulate a response to the user's query and sends it back to the chat.

## Services:

-   Hacker News API
-   OpenAI API

## Hashtags:

#n8n #AIagent #Hackernews #Automation #Chatbot
