# WooCommerce Order Tool

## Use cases:

- **Customer Support Automation:** Allows customers to inquire about their WooCommerce order status and tracking information through a chat interface.
- **Order Tracking Integration:** Automatically retrieves and displays DHL tracking information for shipped orders.
- **Personalized Customer Experience:** Provides an AI-powered agent that remembers past interactions to streamline support and provide relevant information.

## How it works:

1.  **Chat Trigger:** The workflow is initiated by a chat message, which contains customer data, notably the encrypted email address.
2.  **Decrypt Email:** The encrypted email address is decrypted for secure customer identification.
3.  **WooCommerce Integration:**
    *   **Get User:** The workflow retrieves the WooCommerce user ID associated with the decrypted email address.
    *   **Get Orders:** It then fetches the user's order history from WooCommerce.
4.  **DHL Tracking:** If DHL tracking information is available in the order data, the workflow extracts the tracking ID and queries the DHL API for the latest shipment status.
5.  **Data Aggregation:** Order details and tracking information are merged to provide a comprehensive overview.
6.  **AI Agent Interaction:** An AI agent, leveraging OpenAI's chat model, interprets the customer's query and provides relevant information based on the gathered data. It uses the WooCommerce tool to fetch all required informations. The whole conversation gets stored in a buffer memory.
7.  **Response:** The final response, containing order details and tracking information, is sent back to the customer through the chat interface.

## Services:

*   WooCommerce
*   DHL API
*   OpenAI

## Hashtags:

#n8n #woocommerce #automation #ecommerce #customerservice
