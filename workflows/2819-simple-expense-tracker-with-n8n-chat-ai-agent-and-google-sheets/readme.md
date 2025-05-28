# AI agent: expense tracker in Google Sheets and n8n chat

## Use cases:

*   **Personal Expense Tracking:** Automatically log expenses into a Google Sheet by simply sending a chat message describing the transaction (e.g., "coffee, $3.50, today").
*   **Business Expense Reporting:** Enable employees to quickly report expenses through a chat interface, streamlining the expense reporting process.
*   **Budget Monitoring:** Use the collected expense data in Google Sheets to create charts and reports for tracking spending against a budget.

## How it works:

1.  **Chat Message Trigger:** The workflow starts when a chat message is received by n8n via the "When chat message received" trigger.
2.  **AI Agent for Expense Handling:** An AI Agent is invoked to handle and route the incoming chat message.
3.  **Parse msg and save to Sheets sub-workflow:** This tool executes a sub-workflow to parse the message and save into the Google Sheets.
4.  **Expense Text to JSON Parser:** The message is passed to "Expense text to JSON parser", which leverages an OpenAI Chat Model to extract key information like cost, description, and date, converting it into a JSON format.
5.  **Save to Google Sheets:** The extracted JSON data is then appended as a new row to a designated Google Sheet. The Google Sheets node pulls data from the "Workflow Input Trigger" node as well as from the output of the "Expense Text to JSON parser" node to populate the columns.
6.  **Memory Buffer:** The "Window Buffer Memory" node stores previous interactions to help the AI Agent maintain context in ongoing conversations.

## Services:

*   **Google Sheets:** Used for storing and organizing expense data.
*   **OpenAI:** Provides the language model for parsing expense descriptions and extracting relevant information.

## Hashtags:

#n8n #automation #expenseTracker #googleSheets #AIagent
