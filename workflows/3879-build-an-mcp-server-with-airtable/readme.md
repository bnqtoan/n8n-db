# Build an MCP server with Airtable

## Use cases:

- **AI-Powered Airtable Management:** Allows users to interact with and manage their Airtable data (create, read, update, delete records) using natural language commands via a chat interface.
- **Automated Content Creation Workflow:** Streamlines the process of creating social media content from articles, where the AI agent generates copy for different platforms and updates the Airtable records accordingly.
- **Customer Support Automation:** Integrates with a chat platform to enable AI-driven customer support, where the AI agent retrieves information from Airtable and updates customer records based on the interaction.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger.
2.  **AI Agent:** The message is passed to an "AI Agent" that uses an OpenAI Chat Model and Simple Memory.
3.  **MCP Client:** The "AI Agent" uses the "Airtable MCP Client" tool to interact with Airtable based on the chat message and instructions. The Airtable MCP Client needs an SSE endpoint URL to work.
4.  **Airtable Operations:** The workflow allows you to do the following operation on Airtable:
    *   `Get`: Retrieves a record from Airtable.
    *   `Search`: Searches records in Airtable.
    *   `Update`: Updates a record in Airtable.
    *   `Delete`: Deletes a record from Airtable.
    *   `Create`: Creates a new record in Airtable.
5.  **MCP Server Trigger:** The "MCP Server Trigger" node will trigger the operations on the Airtable node based on the AI input, on a specified path.

## Services:

*   Airtable
*   OpenAI

## Hashtags:

#n8n #automation #Airtable #AI #MCP
