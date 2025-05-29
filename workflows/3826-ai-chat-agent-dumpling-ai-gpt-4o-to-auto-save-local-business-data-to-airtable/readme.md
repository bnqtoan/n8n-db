# AI Chat Agent: Dumpling AI + GPT-4o to Auto-Save Local Business Data to Airtable

## Use Cases

1.  **Local Business Information Retrieval:** A user can ask the chat agent to find local restaurants, shops, or services, and the agent will retrieve the information using Dumpling AI and store it in Airtable.
2.  **News Summarization and Storage:** Users can request news on a specific topic. The agent will fetch the news and store key details in Airtable for later review or analysis.
3.  **Interactive Business Data Collection:** Use the chat agent as an interface for collecting and organizing business data, allowing for quick saving and updating of information in a structured Airtable format.

## How it Works

This workflow creates an AI chat agent that interacts with users, leveraging GPT-4o, Dumpling AI, and Airtable. Here's a breakdown:

1.  **Chat Trigger:** The workflow starts when a chat message is received via a configured webhook.
2.  **Process Input with GPT-4o Mini:** The user's input is processed by the GPT-4o Mini language model to understand the intent and extract relevant information.
3.  **Track Last 10 Messages:** A memory buffer keeps track of the last 10 messages in the conversation to maintain context.
4.  **Route AI Tasks with Dumpling + GPT + Memory:** The core node that acts as the AI agent, connecting the language model, memory, and external tools (Dumpling AI's agents).  It uses a system message to define its role and available tools: `Local Business Finder Agent`, `News Agent`, and `Create and update Airtable`.
5.  **DumplingAI Agents (News Agent & Local Business Finder Agent):** Based on the user's input, the agent uses the appropriate Dumpling AI agent via HTTP request.  The `News Agent` is used for fetching news, and the `Local Business Finder Agent` is used for retrieving local business information. The `agentId` in the Dumpling AI request needs to be configured. The `parseJson` parameter is configured as `True` for the `News Agent` and `False` for the `Local Business Finder Agent`.
6.  **Save Business Results:** The data returned by the Local Business Finder Agent is then saved (or updated) in an Airtable base. The workflow maps fields such as Name, Rating, Address, Website, Category, and Phone Number to corresponding columns in the "Local business" table.

## Services

*   **Dumpling AI:** Used to fetch information via its News Agent and Local Business Finder Agent.
*   **OpenAI (GPT-4o Mini):** Processes user input and drives the AI agent's decision-making.
*   **Airtable:** Stores and organizes the business data retrieved by the workflow.

## Hashtags

#n8n #automation #AIagent #GPT4o #Airtable
