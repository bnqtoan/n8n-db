# Pipedrive MCP

## Use Cases

- **AI-Powered CRM Interaction:** Enables sales teams to interact with their Pipedrive CRM using natural language through a Telegram bot, streamlining data retrieval, updates, and insertions.
- **Automated Sales Task Management:** Simplifies routine sales tasks like creating deals, leads, and updating customer information based on natural language commands.
- **Real-Time Sales Insights:** Provides quick access to crucial sales data, such as deal status, lead details, and organization information, through conversational interactions, allowing for faster decision-making.

## How it works

1.  **Telegram Trigger:** The workflow starts when a new message is received by a Telegram bot (`On new message` node).
2.  **AI Agent:** The message is then passed to an AI Agent (`AI Agent` node), which uses a Google Gemini Chat Model (`Google Gemini Chat Model` node) for natural language processing. A simple memory buffer (`Simple Memory` node) is used to keep track of the conversation.
3.  **MCP (Multi-Connector Protocol) Client:** The AI Agent interacts with an MCP Client (`MCP Client` node), which acts as a tool to communicate with an MCP Server. The MCP Server Trigger (`MCP Server Trigger` node) receives requests from the AI Agent based on the user's message.
4.  **Pipedrive Integration:** The workflow utilizes the Pipedrive tool to perform actions in Pipedrive based on the AI Agent's processing of the Telegram message. These actions include:
    *   Creating organization/person deals and leads (`Create Organization Deal`, `Create Person Deal`, `Create Organization Lead`, `Create Person Lead` nodes).
    *   Getting deal/lead/person/organization data (`Get Deal`, `Get Lead`, `Get Person`, `Get Organization Data` nodes).
    *   Updating deals/leads/persons/organizations (`Update Deal`, `Update Lead`, `Update Person`, `Update an Organization` nodes).
    *   Searching for deals/persons/organizations, and returning leads (`Search & Return Deals`, `Search Person`, `Search & Return Organizations`, `Return Many Leads` nodes).
    *   Creating a person (`Create Person` node).
5.  **Email Summary:** Finally, the AI Agent sends a summary of the executed actions via email (`Send summary` node) using Gmail.

## Services

-   **Telegram:** For receiving user input and commands via a bot.
-   **Google Gemini (PaLM) API:** For natural language processing and understanding user requests.
-   **Pipedrive:** A sales CRM used to manage deals, leads, persons, and organizations.
-   **Gmail:** For sending execution summaries via email.
-   **MCP Server:** Serves as intermediary between n8n and pipedrive endpoints.

## Hashtags

#n8n #automation #workflow #Pipedrive #AIagent
