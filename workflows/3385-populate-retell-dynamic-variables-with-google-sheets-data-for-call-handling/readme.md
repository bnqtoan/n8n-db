# Retell Dynamic Variables with Google Sheets

## Use cases:

- **Personalized Voice Agent Greetings:** A Retell AI voice agent can greet callers by name and reference specific account details retrieved from a Google Sheet, creating a more personalized and engaging experience.
- **Context-Aware Call Routing:** Based on information in the Google Sheet (e.g., VIP status, preferred language), the workflow can dynamically set variables to influence call routing within the Retell agent.
- **Real-Time Data Updates During Calls:** Update dynamic variables during a call to reflect real-time changes in the Google Sheet, such as order status or appointment confirmations.

## How it works:

1.  **Webhook Trigger:** The workflow is initiated by a POST request from Retell AI's Inbound Call Webhook when a call is received by a Retell-enabled phone number. The workflow only accepts requests from Retell's IP address.
2.  **Fetch User Data:** The "Get user in DB by Phone Number" node extracts the caller's phone number from the webhook payload. It then queries a Google Sheet to find a matching phone number and retrieves the associated user data (First Name, Last Name, Email, User Variable 1, User Variable 2).
3.  **Respond to Retell:** The "Respond to Webhook" node formats the retrieved user data into a JSON response, mapping specific fields from the Google Sheet to Retell's dynamic variable names (first_name, last_name, email, variable_1, variable_2). This response is then sent back to Retell. Retell then uses this information to populate dynamic variables in the agent's prompt and conversational flows.

## Services:

-   Retell AI: A platform for building voice agents.
-   Google Sheets: Used as a user database to store caller information.

## Hashtags:

#n8n #automation #workflow #RetellAI #voiceagents
