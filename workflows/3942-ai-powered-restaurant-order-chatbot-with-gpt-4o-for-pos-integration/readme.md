# Restaurant POS Workflow

## Use cases:

*   **Automated Order Logging:** Automatically log restaurant orders from a chat interface into a Google Sheet for record-keeping and analysis.
*   **Chatbot-Driven Order Processing:**  Integrate a chatbot with a Point of Sale (POS) system by extracting order details and logging into system via google sheet to manage the kitchen.
*   **Real-time Order Monitoring:** Use the Google Sheet as a live dashboard to monitor incoming orders, track quantities, and manage table assignments in real-time.

## How it works:

1.  **Chat Trigger:** The workflow is initiated when a chat message is received ("When chat message received" node).
2.  **AI Agent Interaction:** The "AI Agent" node uses a large language model (LLM) to understand the customer's order, clarify any missing information, and confirm the order details. It uses a system message to instruct the LLM to behave as a polite restaurant assistant.
3.  **Call n8n Workflow Tool:** The confirmed message send the data to another workflow for further processing in our case the main workflow.
4.  **Information Extraction:** The "Information Extractor" node extracts key order details (item names, quantities, and table number) from the AI Agent's output.
5.  **Conditional Branching:** The "If" node checks if the extraction was successful. If not, it branches to a "No Operation" node.
6.  **Data Transformation:** The "Code" node parses the extracted data and transforms it into a structured JSON format.
7.  **Looping:** The "Loop Over Items" node splits the JSON data into individual items.
8.  **Google Sheets Integration:** The "Google Sheets" node appends each order item as a new row in a specified Google Sheet, including the item name, quantity, table number, and a timestamp.

## Services:

*   Google Sheets
*   OpenAI API (for the AI Agent and Language Models)

## Hashtags:

#n8n #automation #workflow #restaurant #chatbot #POS #orderManagement
