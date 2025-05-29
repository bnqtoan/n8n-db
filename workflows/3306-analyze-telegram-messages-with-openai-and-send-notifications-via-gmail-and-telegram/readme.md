# 🤖 MCP AGENT > Airbnb, FireCrawl $ Brave

## Use cases:

- **AI-Powered Telegram Message Analysis:** Automatically analyze Telegram messages to extract relevant information, like travel inquiries, and respond with AI-driven insights.
- **Cross-Platform Alerting:** Receive notifications about important Telegram messages via both Gmail and Telegram, ensuring timely responses and efficient monitoring.
- **Automated Support System:** Provide instant AI-summarized responses to customer queries received through Telegram, improving response times and customer satisfaction.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a new message is received in a Telegram channel.
2.  **AI-Powered Analysis:** The "Analyze Message with AI" node processes the message using a Large Language Model (LLM) agent. This agent is configured with access to multiple tools like Airbnb Search, Brave Search, and FireCrawl.
3.  **Tool Execution:** Based on the message content, the AI agent selects and executes the appropriate tool to gather information or perform a specific action. For example, if the message is about finding an Airbnb, the Airbnb Search tool is used.
4.  **Notifications:** The agent's output is then sent as notifications via both Gmail and Telegram.

## Services:

-   **Telegram:** For receiving messages and sending alerts.
-   **OpenAI:** For natural language processing and understanding.
-   **Airbnb:** For searching Airbnb listings.
-   **Brave Search:** For general web searches.
-   **FireCrawl:** For scraping web content.
-   **Gmail:** For sending email notifications.

## Hashtags:

#n8n #automation #AI #Telegram #Notifications
