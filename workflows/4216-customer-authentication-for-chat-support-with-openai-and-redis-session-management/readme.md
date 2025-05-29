# Customer Authentication via Chat Agents

## Use cases:

- **Customer Support Chatbot:** Allow users to interact with a customer support chatbot that can provide general information to guests and access customer-specific data (e.g., order history, account details) after authentication.
- **Personalized Recommendations:** Offer personalized product recommendations or tailored services to customers who have authenticated their identity within a chat session.
- **Account Management:** Enable customers to manage their accounts (e.g., update profile information, change passwords) directly through a chat interface after logging in.

## How it works:

1.  **Chat Trigger:** The workflow starts when a chat message is received (`When chat message received` node).
2.  **Session Retrieval:** It attempts to retrieve session data from Redis using the session ID (`Get Session` node). This session data determines if the user is a guest or an authenticated customer.
3.  **Customer Support Agent (LLM):** An LLM-powered agent (`Customer Support Agent` node) processes the chat message. The agent's behavior is influenced by the system prompt, which instructs it to:
    *   Provide general support for guests.
    *   Offer access to account-specific information for authenticated customers.
    *   Generate a login URL for guests who request access to customer-specific data or functionalities, using the "Get Auth URL" tool.
4.  **Login URL Generation (Tool):** If authentication is required, the LLM uses the `Get Auth URL` tool which triggers a sub-workflow (`When Executed by Another Workflow` node) to generate a unique login URL. This URL redirects the user to a form.
5.  **Authentication Form:** The user is redirected to a form (`Login Form` node) requesting username, password and sessionId to authenticate.
6.  **Authentication Logic:** The "Replace Me!" node is a placeholder for authentication logic that validates the user's credentials against a database or other authentication system.
7.  **Customer Profile Retrieval:** Upon successful authentication (simulated in this workflow by the `Get Customer Profile` node), the user's customer profile is retrieved.
8.  **Session Update:** The customer profile is stored in Redis, associated with the session ID, using the `Update Session` node.
9.  **Confirmation:** The user is redirected to a completion screen (`Confirm Login Success` node) to acknowledge login was successful.
10. When the user sends their next message on the chat, the flow will retrieve the user's customer profile using the session id, and the agent will have the required information to work with the customer.

## Services:

*   OpenAI (for LLM)
*   Redis (for session management)

## Hashtags:

#n8n #automation #workflow #chatbot #customerexperience
