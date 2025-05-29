# AI Chat Agent with Bright Data MCP Tool Integration

## Use cases:

*   **Intelligent Web Data Extraction:** Enables users to ask questions about web data, and the agent intelligently selects and executes the appropriate Bright Data MCP tool (e.g., `search_engine`, `web_data_amazon_product`) to retrieve and provide the answer.
*   **Automated Data Gathering from Multiple Sources:** Allows for the creation of a conversational interface to query and combine data from various web sources (e.g., Amazon, LinkedIn, Instagram) using Bright Data's MCP tools, abstracting away the complexity of interacting with individual APIs.
*   **Customer Support Chatbot Enhanced with Web Data:** Integrates into customer support systems, enabling the chatbot to answer questions about products, company profiles, or other web-accessible information by dynamically querying the web using Bright Data's tools.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  **AI Agent Interaction:** The message is passed to the "AI Agent," which manages the overall conversation flow.
3.  **Language Model & Memory:** The AI Agent uses an "OpenAI Chat Model" (e.g., gpt-4.1-nano) for natural language processing and "Simple Memory" to remember previous interactions within the session.
4.  **Tool Selection:** The agent determines if a tool is required to answer the user's query and calls the "Bright Data MCP - List tools" node to retrieve available tools and their schemas.
5.  **Query Classification and Tool Matching:** The agent uses "OpenAI" again to classify the user's query and match it with the appropriate Bright Data MCP tool. The tool's name and parameters are extracted.
6.  **Tool Execution:** If a matching tool is found (checked by the "If" node), the "Bright Data MCP - Execute a tool" node executes the selected tool with the extracted parameters.  If no tool is found, a "No matching tool" message is generated. If some additional information is needed from the user, the agent will ask for that information.
7.  **Data Delivery:** The result from the MCP tool is stored into memory and used to reply to the user. The result of the tool execution is then sent back to the AI Agent.
8.  **Response to User:** The AI Agent formulates a response based on the tool's output and the conversation history.

## Services:

*   **OpenAI:** Used for natural language understanding, classification, and response generation.
*   **Bright Data MCP (Managed Cloud Proxy):** Provides a suite of web scraping and data extraction tools accessible via API.

## Hashtags:

#n8n #automation #AIagent #webscraping #dataextraction
