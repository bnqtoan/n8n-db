[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-langchain.mcptrigger.md "Edit this page")

# MCP Server Trigger node[#](#mcp-server-trigger-node "Permanent link")

Use the MCP Server Trigger node to allow n8n to act as a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server, making n8n tools and workflows available to MCP clients.

Credentials

You can find authentication information for this node [here](../../credentials/httprequest/).

## How the MCP Server Trigger node works[#](#how-the-mcp-server-trigger-node-works "Permanent link")

The MCP Server Trigger node acts as an entry point into n8n for MCP clients. It operates by exposing a URL that MCP clients can interact with to access n8n tools.

Unlike conventional [trigger nodes](../../../../glossary/#trigger-node-n8n), which respond to events and pass their output to the next [connected node](../../../../workflows/components/connections/), the MCP Server Trigger node only connects to and executes [tool](../../../../advanced-ai/examples/understand-tools/) nodes. Clients can list the available tools and call individual tools to perform work.

You can expose n8n workflows to clients by attaching them with the [Custom n8n Workflow Tool](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/) node.

Server-Sent Events (SSE) support

The MCP Server Trigger node supports [Server-Sent Events (SSE)](https://modelcontextprotocol.io/docs/concepts/transports#server-sent-events-sse), a long-lived transport built on top of HTTP, for connections between clients and the server. It currently doesn't support [standard input/output (stdio)](https://modelcontextprotocol.io/docs/concepts/transports#standard-input%2Foutput-stdio) transport.

## Node parameters[#](#node-parameters "Permanent link")

Use these parameters to configure your node.

### MCP URL[#](#mcp-url "Permanent link")

The MCP Server Trigger node has two **MCP URLs**: test and production. n8n displays the URLs at the top of the node panel.

Select **Test URL** or **Production URL** to toggle which URL n8n displays.

*   **Test**: n8n registers a test MCP URL when you select **Listen for Test Event** or **Execute workflow**, if the workflow isn't active. When you call the MCP URL, n8n displays the data in the workflow.
*   **Production**: n8n registers a production MCP URL when you activate the workflow. When using the production URL, n8n doesn't display the data in the workflow. You can still view workflow data for a production execution: select the **Executions** tab in the workflow, then select the workflow execution you want to view.

### Authentication[#](#authentication "Permanent link")

You can require authentication for clients connecting to your MCP URL. Choose from these authentication methods:

*   Bearer auth
*   Header auth

Refer to the [HTTP request credentials](../../credentials/httprequest/) for more information on setting up each credential type.

### Path[#](#path "Permanent link")

By default, this field contains a randomly generated MCP URL path, to avoid conflicts with other MCP Server Trigger nodes.

You can manually specify a URL path, including adding route parameters. For example, you may need to do this if you use n8n to prototype an API and want consistent endpoint URLs.

The **Path** field can take the following formats:

*   `/:variable`
*   `/path/:variable`
*   `/:variable/path`
*   `/:variable1/path/:variable2`
*   `/:variable1/:variable2`

## Templates and examples[#](#templates-and-examples "Permanent link")

**Build an MCP Server with Google Calendar and Custom Functions**

by Solomon

[View template details](https://n8n.io/workflows/3514-build-an-mcp-server-with-google-calendar-and-custom-functions/)

**Build your own N8N Workflows MCP Server**

by Jimleuk

[View template details](https://n8n.io/workflows/3770-build-your-own-n8n-workflows-mcp-server/)

**AI-Powered Telegram Task Manager with MCP Server**

by Francis Njenga

[View template details](https://n8n.io/workflows/3656-ai-powered-telegram-task-manager-with-mcp-server/)

[Browse MCP Server Trigger integration templates](https://n8n.io/integrations/mcp-server-trigger/), or [search all templates](https://n8n.io/workflows/)

### Integrating with Claude Desktop[#](#integrating-with-claude-desktop "Permanent link")

You can connect to the MCP Server Trigger node from [Claude Desktop](https://claude.ai/download) by running a gateway to proxy SSE messages to stdio-based servers.

To do so, add the following to your Claude Desktop configuration:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11
12
13
14
15
16

`{   "mcpServers": {     "n8n": {       "command": "npx",       "args": [         "mcp-remote",         "<MCP_URL>",         "--header",         "Authorization: Bearer ${AUTH_TOKEN}"       ], 	  "env": { 	    "AUTH_TOKEN": "<MCP_BEARER_TOKEN>" 	  }     }   } }`

Be sure to replace the `<MCP_URL>` and `<MCP_BEARER_TOKEN>` placeholders with the values from your MCP Server Trigger node parameters and credentials.

## Limitations[#](#limitations "Permanent link")

### Configuring the MCP Server Trigger node with webhook replicas[#](#configuring-the-mcp-server-trigger-node-with-webhook-replicas "Permanent link")

The MCP Server Trigger node relies on Server-Sent Events (SSE), which require the same server instance to handle persistent connections. This can cause problems when running n8n in [queue mode](../../../../hosting/scaling/queue-mode/) depending on your [webhook processor](../../../../hosting/scaling/queue-mode/#webhook-processors) configuration:

*   If you use queue mode with a **single webhook replica**, the MCP Server Trigger node works as expected.
*   If you run **multiple webhook replicas**, you need to route all `/mcp*` requests to a single, dedicated webhook replica. Create a separate replica set with one webhook container for MCP requests. Afterward, update your ingress or load balancer configuration to direct all `/mcp*` traffic to that instance.

Caution when running with multiple webhook replicas

If you run an MCP Server Trigger node with multiple webhook replicas and don't route all `/mcp*` requests to a single, dedicated webhook replica, your SSE connections will frequently break or fail to reliably deliver events.

## Related resources[#](#related-resources "Permanent link")

n8n also provides an [MCP Client Tool](../../cluster-nodes/sub-nodes/n8n-nodes-langchain.toolmcp/) node that allows you to connect your n8n AI agents to external tools.

Refer to the [MCP documentation](https://modelcontextprotocol.io/introduction) and [MCP specification](https://modelcontextprotocol.io/specification/) for more details about the protocol, servers, and clients.

## Common issues[#](#common-issues "Permanent link")

Here are some common errors and issues with the MCP Server Trigger node and steps to resolve or troubleshoot them.

### Running the MCP Server Trigger node with a reverse proxy[#](#running-the-mcp-server-trigger-node-with-a-reverse-proxy "Permanent link")

When running n8n behind a reverse proxy like nginx, you may experience problems if the MCP endpoint isn't configured for SSE.

Specifically, you need to disable proxy buffering for the endpoint. Other items you might want to adjust include disabling gzip compression (n8n handles this itself), disabling chunked transfer encoding, and setting the `Connection` to an empty string to remove it from the forwarded headers. Explicitly disabling these in the MCP endpoint ensures they're not inherited from other places in your nginx configuration.

An example nginx location block for serving MCP traffic with these settings may look like this:

 1
 2
 3
 4
 5
 6
 7
 8
 9
10
11

`location /mcp/ {     proxy_http_version          1.1;     proxy_buffering             off;     gzip                        off;     chunked_transfer_encoding   off;      proxy_set_header            Connection '';      # The rest of your proxy headers and settings     # . . . }`