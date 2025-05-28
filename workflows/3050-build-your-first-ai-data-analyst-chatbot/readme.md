# AI Data Analyst with Google Sheets

## Use cases:

- **Chatbot for Business Insights:**  Allows users to ask questions about their business data stored in Google Sheets and receive answers powered by AI. For example, "What were the total sales for Widget A in January?"
- **Automated Report Generation:**  Enables the AI to generate reports based on specific date ranges or transaction statuses, providing insights into key performance indicators.
- **Data Exploration and Analysis:**  Facilitates exploring data for trends and patterns.  For instance, "What is the most frequent reason for refunds?" or "How many successful sales did we have in January 2025 and what was the final income of those?".

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received through the "When chat message received" node.
2.  **AI Agent:** The "AI Agent" node receives the chat message and uses an OpenAI Chat Model to understand the user's request. It leverages a Buffer Memory to remember past interactions.
3.  **Tool Selection:** The AI Agent can select from several tools:
    *   **Get transactions by product name:** Fetches transactions based on the product name from Google Sheets.
    *   **Get transactions by status:** Retrieves transactions based on their status (e.g., Refund, Completed, Error) from Google Sheets.
    *   **Get all transactions:** Retrieves ALL transaction, it is recommended to use it as a last resort.
    *   **Records by date:** Calls a sub-workflow to filter records by date range and optionally by status.
    *   **Calculator:** For numeric calculation.
4.  **Sub-workflow (Records by date):** If the AI Agent chooses the "Records by date" tool:
    *   It triggers the "When Executed by Another Workflow" node.
    *   The workflow filters data from Google Sheets based on the provided date range and status.
    *   The “Google Sheets request” Node uses a Google Sheets API request to filter data.
    *   A "Code" node transforms the JSON response into a readable format.
    *   A "Filter by status" node filters transactions based on the provided status from the main workflow.
    *   An "Aggregate" node aggregates all the items into a single item.
5.  **Data Aggregation:** All data fetched from Google Sheets tools or from the sub-workflow are sent back to the "AI Agent" node.
6.  **AI Response:** The AI Agent processes the data and generates a response to the user's initial question.

## Services:

-   **Google Sheets:** Used as the data source.
-   **OpenAI API:** Powers the AI Agent for natural language understanding and response generation.

## Hashtags:

#n8n #automation #AI #GoogleSheets #DataAnalysis
