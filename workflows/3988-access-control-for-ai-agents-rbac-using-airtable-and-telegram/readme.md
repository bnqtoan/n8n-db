# Agent Access Control Template

## Use cases:

- **Personal Assistant with Role-Based Access:** An organization can use this workflow to provide a Telegram-based personal assistant to its members. The assistant's capabilities (tools) are determined by the user's role defined in Airtable, ensuring that users only have access to the tools they are authorized to use.
- **Secure Data Retrieval:** This workflow can be implemented to provide employees with access to sensitive data such as weather and location information, ensuring that only those with the appropriate roles and permissions can retrieve this information.
- **AI Agent Permissioning System:** By integrating with Airtable, the workflow ensures that only authorized users have access to specific AI tools, enhancing security and control over AI-driven processes within an organization.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message to the Telegram bot.
2.  **Get User Permissions:** The workflow retrieves the user's permissions (roles and allowed tools) from an Airtable base using the Telegram username.
3.  **Unknown User Check:** If the user is not found in Airtable, a message is sent back to the user informing them to contact their supervisor.
4.  **Set Input:** If the user is found, their roles and allowed tools, along with their name, are stored in variables for usage in the main agent.
5.  **Main Agent:** Based on the prompt and the current user, the agent uses the configured OpenAI Chat Model to process the user's request.
6.  **Simple Memory:** The Simple Memory node stores the conversation history to enable contextual conversations with the agent, where each Telegram user's conversation is stored separately.
7.  **Check permissions:** Uses the list of allowed tools gathered from Airtable to check for permissions and replaces denied tools with a fixed instruction to return a message to the user.
8.  **Weather Agent:** This is the sub-agent with a specific role to handle weather information. It also has instructions to strictly only use the connected tools.
9.  **Reply with results:** The agent's response is sent back to the user via Telegram.

## Services:

*   Telegram API
*   Airtable
*   OpenAI API
*   Open Meteo API

## Hashtags:

#n8n #automation #langchain #accesscontrol #AIagent
