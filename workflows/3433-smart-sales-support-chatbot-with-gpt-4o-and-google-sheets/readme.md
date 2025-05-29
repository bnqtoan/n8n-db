# Customer and Sales Support

## Use Cases

- **Automated Customer Support:** Handles customer inquiries about Apple Case products, such as availability, pricing, and order placement, through a chat interface.
- **Order Management:** Streamlines the order process by automatically taking customer orders and updating inventory levels.
- **Inventory Tracking:** Provides real-time updates on the stock levels of different Apple Case models based on customer orders.

## How it Works

1.  **Chat Trigger:** The workflow starts when a customer sends a message via the "When chat message received" trigger. This simulates a customer initiating a conversation through a chat interface.
2.  **Memory Management:** The "Simple Memory" node stores the conversation history, allowing the AI assistant to remember previous interactions.
3.  **AI-Powered Support Agent:** The "Support Agent" node, configured with a system message, acts as the customer support representative. It uses the OpenAI to understand the customer's request, retrieve information about product stock via the “GetStock” tool, takes orders using the “Place order” tool, and update the stock via the “Update Stock” tool.
4.  **Get Stock:** The “GetStock” tool searches the Google Sheet for the case information and the available quantity.
5.  **Place Order:** The “Place order” tool writes a new row in Google Sheet, representing an order placement.
6.  **Update Stock:** The “Update Stock” tool updates the inventory information in Google Sheet, substracting the sold cases.
7.  **OpenAI Chat Model:** The "OpenAI Chat Model" node uses the GPT-4 model to generate responses to the customer, based on the information processed by the "Support Agent" and the conversation history.
8.  **Google Sheets Integration:** The workflow integrates with Google Sheets to fetch inventory data ("GetStock"), record new orders ("Place order"), and update stock levels ("Update Stock").

## Services

-   **Google Sheets:** Used to store and manage product inventory and customer order information.
-   **OpenAI API:** Powers the AI-driven customer support agent, enabling natural language understanding and response generation.

## Hashtags

#n8n #automation #customersupport #AI #googlesheets
