# AI Agent to Chat with Airtable and Analyze Data

## Use cases:

- **Conversational Data Retrieval**: Allow users to ask questions about their Airtable data in natural language, such as "What were the sales figures for last quarter?" or "List all projects due next week."
- **Data Analysis and Aggregation**: Enable users to perform quick data analysis tasks like "What is the average order value?" or "How many customers signed up this month?" without needing to manually create formulas or queries in Airtable.
- **Dynamic Report Generation**: Automate the creation of reports and summaries based on user-defined criteria, such as "Generate a report of all overdue tasks" or "Create a summary of customer feedback from the past month."

## How it works:

1. **Chat Trigger:** The workflow is initiated when a chat message is received (`When chat message received`). This message contains the user's question or request.
2. **AI Agent**: The `AI Agent` node, powered by OpenAI, processes the chat input and determines the appropriate course of action. It uses a system message to guide its behavior as an Airtable assistant.
3. **Memory Management**: `Window Buffer Memory` node provides the AI Agent with short-term memory of the conversation by storing session key so the agent retains context during conversations.
4. **Tool Selection**: Based on the user's request, the AI Agent selects the necessary tools. It can choose from tools like:
    - **Get list of bases:** Fetches a list of available Airtable bases.
    - **Get base schema:** Retrieves the schema of a specific Airtable base, including tables and fields.
    - **Search records:** Searches for records in a specific Airtable base and table based on user-provided criteria, filter descriptions, and sorting options.
    - **Process data with code:** Executes code to perform mathematical functions (count, sum, average, etc.) or generate images (graphs) based on the data.
    - **Create map image:** Generates an image link for a map graph based on provided latitude and longitude data.
5. **Data Retrieval and Processing:** The selected tools interact with Airtable to retrieve and process the necessary data. For example, the `Search records` tool queries Airtable based on user-defined filters and fields.  If a filter description is provided, the workflow can optionally use OpenAI to generate a structured filter formula.
6. **Response Generation:** The AI Agent formulates a response based on the retrieved data and the original user request.
7. **Airtable interaction**: Depending on the selected `command`, the workflow uses dedicated Airtable nodes to retrieve lists of bases or the schema of a base.
8. **File Upload (Optional):** If the OpenAI response contains file attachments, the workflow downloads the file and uploads it to a temporary file hosting service (`tmpfiles.org`) to generate a shareable link.
9. **Response Delivery:** The final response is sent back to the user.

## Services:

- **Airtable**: Used for storing and managing data.
- **OpenAI**: Used for natural language processing, generating search filters, and generating responses via the AI Agent.
- **tmpfiles.org**: Used as a temporary file storage service for file sharing (optional).
- **Mapbox**: Used to generate map images

## Hashtags:

#n8n #automation #Airtable #OpenAI #DataAnalysis
