# My Workflow

## Use Cases

1.  **Long-Term Memory Storage and Retrieval for AI Agents:** This workflow allows an AI agent to store and retrieve information from a long-term memory store, such as Google Docs. This enables the agent to maintain context and improve its responses over time.
2.  **Discord Bot with Memory Capabilities:** The workflow can be integrated into a Discord bot to provide it with memory. Users can interact with the bot, and it can store and retrieve information related to those interactions, enhancing the bot's conversational abilities.
3. **Personalized Responses Based on Past Interactions:** The workflow stores the interactions and retrieves them. The agent can personalize the response, creating a more relevant response.

## How it Works

1.  **Trigger:** The workflow is triggered either by another n8n workflow ("When Executed by Another Workflow") or by an MCP (likely a custom trigger) ("MCP Server Trigger").
2.  **Initial Data Handling:** If triggered by another workflow, the "Edit Fields" node likely prepares the input data.
3.  **Memory Tool Router:** The "Memory Tool Router" node directs the flow based on the desired action (save, retrieve, or retrieve to Discord).
4.  **Memory Operations:**
    *   **Save Memories:** Save memories through the "Save Memories" node that triggers an AI tool.
    *   **Retrieve Memories:** Retrieve memories through the "Retrieve Memories" node that triggers an AI tool.
    *   **Retrieve Memories for Discord:** Retrieves memories from "Google Docs" through "Retrieve Long Term Memories Discord".
5.  **Google Docs Integration:** "Save Long Term Memories", "Retrieve Long Term Memories" and "Retrieve Long Term Memories Discord" nodes interact with Google Docs to store and retrieve the information
6.  **AI Agent Integration:** Retrieves memories from "Retrieve Long Term Memories Discord" and passes it through an "AI Agent" and then responds through a Discord message to a channel or direct message to a user
7.  **Final Response:** The "Respond with long term memories" node and "Saved Response" prepare data to send in response. The responses are sent to Discord via "DM User" or "Send to Channel"

## Services

*   Google Docs
*   Discord
*   Langchain
*   OpenAI

## Hashtags

#n8n #automation #workflow #AIagent #DiscordBot
