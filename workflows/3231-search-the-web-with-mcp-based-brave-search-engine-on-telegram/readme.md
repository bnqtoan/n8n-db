# MCP Client with Brave and Telegram

## Use cases
1. **Telegram-Powered Search Assistant** - Allow users to perform Brave searches directly in Telegram by sending commands like `/brave best productivity tools`, returning instant results in the chat.
2. **Team Information Retrieval** - Enable team members to quickly access web research in group chats by integrating Brave search capabilities into collaboration workflows.
3. **Customer Support Enhancement** - Implement automated response system that fetches updated information from Brave Search API for common customer queries received via Telegram.

## How it works
The workflow processes Telegram messages containing `/brave` commands through 6 key steps:

1. **Telegram Trigger**: Starts when new messages are received
2. **Command Check**: Uses an IF node to verify if messages start with `/brave `
3. **Query Cleaning**: Removes the `/brave ` prefix from the message text
4. **Brave Tools Setup**: Lists available Brave search tools via MCP Client
5. **Search Execution**: Runs the cleaned query through Brave's search API
6. **Result Delivery**: Sends formatted search results back to the Telegram chat

## Services
- Brave Search API (via MCP Client custom node)
- Telegram Bot API

## Hashtags
#TelegramAutomation #BraveSearch #n8n #WorkflowAutomation #ChatCommands
