# AI Agent with Custom Google Sheets Tool

## Use cases:

- **Customer Support Automation:** An AI agent can answer customer inquiries about their data (e.g., "What is the status of order #123?", "Which is our biggest customer?") by accessing and processing information from a Google Sheet.
- **Data Analysis and Reporting:** The agent can perform simple data analysis tasks, such as identifying the largest customer or listing all customers with a specific attribute, directly from the spreadsheet data.
- **Personalized Customer Interactions:**  The AI agent can retrieve customer-specific details to personalize interactions and provide tailored recommendations.

## How it works:

This workflow sets up an AI agent that interacts with a Google Sheet to answer questions. It consists of two main parts: the main workflow and a sub-workflow.

1. **Main Workflow (AI Agent):**
   - **Chat Trigger:**  The workflow is initiated when a chat message is received (`When chat message received` node).
   - **AI Agent:** An AI agent (`AI Agent` node) is set up using Langchain, using OpenAI's gpt-4o-mini (`OpenAI Chat Model1` node) to process the chat and determine the best course of action. It uses a simple memory component (`Simple Memory`) to store chat history.
   - **Custom Tools:**  The AI agent has access to three custom tools, powered by sub-workflows. These tools allow the agent to query the Google Sheet:
     - `list_columns` Lists the column names in the Google Sheet.
     - `column_values` Get all values for a specific column from the Google Sheet.
     - `get_customer` Returns all data for a specific customer, identified by row number.

2. **Sub-workflow (Custom Tool):**
   - **Trigger:** This workflow is triggered when called by another workflow (`When Executed by Another Workflow` node). It expects two input parameters: `operation` (specifying which action to perform) and `query` (the search term or row number).
   - **Google Sheet Interaction:** The workflow first sets the Google Sheet URL (`Set Google Sheet URL` node) and then retrieves data from the specified sheet (`Get Google sheet contents` node).
   - **Operation Handling:** A `Switch` node (`Check operation`) routes the workflow based on the `operation` parameter:
     - **Column Names:**  If `operation` is `column_names`, it extracts and returns the column names (`Get column names` node).
     - **Column Values:** If `operation` is `column_values`, it extracts specified column value for all customers (`Prepare column data` node).
     - **Rows:** If `operation` is `row`, it filters the rows based on the provided query (`Filter` node), which should contain the target row number.
   - **Output:** Finally, prepares and returns the requested data as the workflow's output (`Prepare output` node).

## Services:

- Google Sheets
- OpenAI API (via Langchain)

## Hashtags:

#n8n #AIagent #GoogleSheets #Automation #Langchain
