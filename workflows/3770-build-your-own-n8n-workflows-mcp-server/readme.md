# N8N Workflows MCP Server

## Use cases:

- **AI-Powered Workflow Orchestration:** Enables an AI agent (like Claude Desktop) to discover, manage, and execute n8n workflows, allowing it to perform complex tasks by orchestrating multiple automated processes.
- **Centralized Workflow Management:** Provides a central point for managing which workflows are available for an AI agent to use, preventing undesired workflows or duplication.
- **Integration with MCP (Message Control Protocol) Clients:** Allows n8n to act as an MCP server, enabling integration with MCP clients for advanced automation and control.

## How it works:

1.  **MCP Trigger:** The workflow is triggered by an MCP event, which can be initiated by an MCP client or agent.
2.  **Workflow Management:** The workflow manages a list of "available" n8n workflows, stored in Redis.
    *   **AddWorkflow:** Adds a workflow to the "available" list.
    *   **RemoveWorkflow:** Removes a workflow from the "available" list.
    *   **listWorkflows:** Retrieves a list of the "available" workflows.
    *   **searchWorkflows:** Searches for workflows within the n8n instance based on tags (default "mcp") and returns them to the agent.
3.  **Workflow Execution:** When the agent needs to execute a workflow:
    *   It first uses `listWorkflows` to see which workflows are active.
    *   The agent calls the subworkflow using `executeWorkflow` to execute existing workflows.

## Services:

-   **n8n API:** Used to search and retrieve workflows from the n8n instance.
-   **Redis:** Used as a memory store to keep track of "available" workflows.
-   **OpenAI API:** Powers the AI Agent for natural language processing and task orchestration.
-   **MCP (Message Control Protocol):** Enables communication and control between the n8n workflow and MCP clients or agents.

## Hashtags:

#n8n #automation #workflow #MCP #AIagent
