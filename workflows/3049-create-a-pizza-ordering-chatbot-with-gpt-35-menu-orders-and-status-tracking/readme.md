# POC - Chatbot Order by Sheet Data

## Use cases:

*   **Automated Pizza Ordering:** Customers can place pizza orders through a chatbot interface, specifying their name, pizza type, and quantity.
*   **Order Status Tracking:** Customers can inquire about the status of their existing pizza orders, receiving details such as order date, pizza type, and quantity.
*   **Product Information:** Customers can request information about the available pizzas on the menu.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received via the "When chat message received" node (likely a webhook). The chatbot introduces itself as Pizzaro and provides basic information.
2.  **AI Agent:** The "AI Agent" node processes the incoming chat message using a Large Language Model (LLM) to understand the user's intent. The AI Agent uses a defined prompt and a system message which defines the bot's name and role is Pizzaro, a pizza order assistant.
3.  **Memory Handling:** The "Window Buffer Memory" node provides the AI Agent with short term memory of past interactions.
4.  **Tool Selection:** Based on the user's request, the AI Agent can use one of the following tools:
    *   **Get Products:** Retrieves product information from `https://n8n.io/webhook/get-products`.
    *   **Order Product:** Places an order by sending a POST request to `https://n8n.io/webhook/order-product` with the user's message as the order details.
    *   **Get Order:** Retrieves the status of an order from `https://n8n.io/webhook/get-orders`.
    *   **Calculator:** A general purpose calculator, likely for handling order quantites or prices.
5.  **Chat OpenAI:** The `Chat OpenAI` node provides the language model capabilities for understanding the user and responding appropriately.
6.  **Response:** The AI Agent formulates a response based on the selected tool and the data received and sends it back to the user (though the final output node is not visible in this workflow definition).

## Services:

*   **OpenAI API:** Used for natural language understanding and response generation.
*   **n8n Webhooks:** Used to simulate interaction with a product menu and to place/retrieve orders.

## Hashtags:

#n8n #automation #chatbot #pizza #orderautomation
