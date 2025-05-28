# Notion Knowledge Base Assistant

## Use cases:

- **Internal Knowledge Base:** Allow employees to quickly find answers to common questions about company policies, procedures, or product information stored in a Notion database.
- **Customer Support:** Enable customer support agents to access a knowledge base of FAQs and troubleshooting steps to resolve customer issues more efficiently.
- **Personal Knowledge Management:** Use it as a personal assistant to quickly retrieve information from your own Notion database of notes, articles, and research.

## How it works:

1.  **Chat Trigger:** The workflow is initiated when a chat message is received via the "When chat message received" trigger node.
2.  **Get Database Details:** The "Get database details" node retrieves information about a specified Notion database, including its ID, name, and available tags. This ID is crucial for subsequent searches.
3.  **Format Schema:** The "Format schema" node structures the data received from the trigger and the database details into a format suitable for the AI Agent. This includes setting the sessionId, action, chatInput, the Notion database ID, its name, and available tags.
4.  **AI Agent:** This is the core of the workflow. It uses an OpenAI Chat Model to understand the user's query and interact with the Notion database. It is configured with a system message that defines its role, behavior, error handling, and output format.
5.  **Search Notion Database:** The agent utilizes a tool to search the Notion database based on keywords and tags extracted from the user's query. It uses the Notion API to query the database, filtering records based on whether the question contains the keyword or the tags contain a certain tag.
6.  **Search inside database record:** The agent utilizes a tool to retrieve Notion page content using the page ID from the results of the "Search notion database"
7.  **Window Buffer Memory:** A memory node is used to provide context from previous conversations to the AI agent.

## Services:

*   Notion API
*   OpenAI API

## Hashtags:

#n8n #automation #notion #openai #knowledgebase
