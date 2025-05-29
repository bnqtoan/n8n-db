# Kubernetes Assistant Chatbot

## Use Cases

- **Troubleshooting Kubernetes Deployments:** A user can ask the chatbot to investigate issues within their Kubernetes cluster, such as "Why are my pods in namespace X crashing?". The bot will fetch relevant events, pod logs, and resource details to identify the root cause.
- **Resource Monitoring:** Users can monitor the resource usage of specific nodes or pods by asking questions like "What is the CPU usage of pod Y in namespace Z?" or "Show me the memory usage of node A." The bot retrieves and presents the requested metrics.
- **Managing Kubernetes Resources:** While exercising caution, users can create or update resources using YAML definitions provided to the bot. For example, a user can ask the bot to "Create a deployment using this YAML manifest in namespace Q." after the bot confirm the user want to make destructive operations.

## How it works

1.  **Chat Trigger:** The workflow starts when a message is received via the "When chat message received" trigger.
2.  **AI Agent Orchestration:** The core of the workflow is the "AI Agent" node. It uses a system message to define its role as a Kubernetes assistant connected to an MCP (Model Context Protocol) Server. The agent has access to several tools:
    *   `getEvents`: Retrieves events from a specified namespace.
    *   `getPodsLogs`: Fetches logs for a given pod in a namespace.
    *   `getResource`: Gets details of a specific resource (e.g., Pod, Deployment, Service) by name, kind, and namespace.
    *   `createOrUpdateResource`: Creates or updates a Kubernetes resource using a YAML manifest.
    *   `getNodeMetrics`: Retrieves CPU and memory usage for a node.
    *   `getPodMetrics`: Retrieves CPU and memory usage for a pod.
    *   `describeResource`: Provides a detailed description of a Kubernetes resource.
        *   `listResources`: Lists all resources of a given kind in a namespace.
    *   `getAPIResources`: Lists all supported resource kinds in the cluster.
3.  **Memory Management:** The "Simple Memory" node stores conversation history, allowing the AI Agent to maintain context across multiple turns.
4.  **Tool Execution via MCP Client:**
    *   The AI Agent determines which tool is most appropriate to answer the user's query and calls it.
    *   Nodes like "getEvents", "getPodsLogs", "getResource" and others represent calls to the MCP (Model Context Protocol) server to interact with the Kubernetes cluster.
    *   The `n8n-nodes-mcp.mcpClientTool` nodes use the provided credentials (mcpClientSseApi) to authenticate with the MCP server.
    *   Before executing the tools, the workflow will ask the user for confirmation using `$fromAI()` function to dynamically populate the required parameters (namespace, pod name, resource kind, etc.) based on the AI Agent's assessment.
5.  **OpenAI Integration:** The "OpenAI Chat Model" node utilizes the GPT-4o-mini model (or another specified OpenAI model) to process the user's input and generate responses.
6.  **Data Flow:** The workflow takes the chat message, leverages the AI Agent to determine the appropriate actions (including tool calls), executes those actions via the MCP client, and then presents the results back to the user through the chat interface (implicitly handled by the "When chat message received" trigger node).

## Services

-   Kubernetes (via MCP - Model Context Protocol)
-   OpenAI (for natural language processing and reasoning)

## Hashtags

#n8n #kubernetes #automation #chatbot #aiagent
