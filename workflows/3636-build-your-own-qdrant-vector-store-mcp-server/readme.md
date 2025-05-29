# My Workflow

## Use cases:

- **Extending Qdrant Functionality:** Enhance an existing Qdrant vector database with additional features like facet search, grouped search, and recommendation APIs.
- **Custom Review Management System:** Create a system for managing customer reviews, allowing for inserting new reviews, searching for existing ones, comparing reviews across companies, and generating recommendations based on preferences.
- **Building a Custom MCP Server:** Develop a Media Collaboration Platform (MCP) server that can manage a Qdrant collection via a client like Claude Desktop, enabling agents to interact with and query the review data.

## How it works:

This workflow acts as a custom MCP server for managing a Qdrant vector database containing customer reviews.

1.  **MCP Server Trigger:** The workflow starts with an "Qdrant MCP Server" trigger, waiting for requests from an MCP client like Claude Desktop.
2.  **Tool Workflows:** When a request is received, it's routed to one of the five "Tool Workflow" nodes: "Insert," "Search," "Compare," "Recommend", or "ListCompanies". These nodes act as functions that the MCP client can call.
3.  **Operation Switch:** The "When Executed by Another Workflow" node receives the instruction and routes it to "Operation" switch case node, which directs the flow based on the `operation` parameter ("insert", "search", "compare", "recommend").
4.  **Data Handling (Insert):**
    *   Takes review text and company ID.
    *   Uses OpenAI Embeddings to generate vector embeddings.
    *   Loads the data into the Qdrant vector database using the "Vector Store Qdrant" node.
5.  **Data Handling (Search):**
    *   Takes a search query and optional company IDs.
    *   Uses OpenAI Embeddings to generate vector embeddings.
    *   Searches the Qdrant vector database for similar reviews using the "Vector Store Qdrant" node.
6.  **Data Handling (Compare):**
    *   Takes a search query and two or more company IDs.
    *   Uses OpenAI Embeddings to generate vector embeddings.
    *   Uses the "Group Search API" to the group search across multiple companies.
    *   Filters and aggregates the results for comparison.
7.  **Data Handling (Recommend):**
    *   Takes preferences to include and preferences to avoid, as well as optional company IDs.
    *   Uses OpenAI Embeddings to generate vector embeddings for both positive and negative preferences.
    *   Uses the "Recommend API" to generate recommendations.
8.  **Data Handling (ListCompanies):**
    *   Uses the "List by Facet API" to list the available company IDs.
9.  **Response:** Returns the search results to the MCP client.

## Services:

*   **Qdrant:** A vector database used to store and search the customer reviews.
*   **OpenAI:** Used for generating vector embeddings from text.
*   **MCP Client (e.g., Claude Desktop):** An application that interacts with the MCP server.

## Hashtags:

#n8n #automation #workflow #Qdrant #MCPserver