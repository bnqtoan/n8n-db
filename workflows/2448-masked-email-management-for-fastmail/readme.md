# Fastmail Masked Email Management

## Use cases:

- **Simplified Masked Email Management:** Provides a user-friendly interface to create, disable, and delete Fastmail masked email addresses, streamlining the process compared to using the Fastmail web interface directly.
- **Automated Masked Email Provisioning:** Integrates with other systems via webhooks to automatically create masked email addresses based on specific triggers or events, such as user sign-ups or form submissions.
- **Customizable Email Filtering:** Allows filtering masked emails based on their state (pending, enabled, disabled, deleted), enabling users to focus on specific subsets of their email addresses.

## How it works:

1.  **Webhook Trigger:** The workflow starts with a Webhook node that listens for incoming HTTP requests to a specific path (`/MaskedEmail`). It requires Basic Authentication for security.
2.  **Fastmail Session:** Upon receiving a request, the workflow fetches a Fastmail API session using the `Session` node. This node authenticates with the Fastmail API using an HTTP Header Auth credential.
3.  **State-Based Routing:** The `Switch` node routes the workflow based on the `state` parameter included in the webhook request (`pending`, `enabled`, `disabled`, or `deleted`).
4.  **Fastmail API Interactions:**
    -   **Create:** The `create random masked email` node creates a new masked email address via the Fastmail API.
    -   **Delete:** The `delete` node deletes a masked email address.
    -   **Disable:** The `disabled` node disables a masked email address.
    -   **Get all masked emails:** the `get all masked emails` get the current list of masked emails from Fastmail.
    All these nodes make POST requests to the Fastmail API, using the same HTTP Header Auth credential as the `Session` node.
5.  **Data Aggregation:** The `gather masked email list` node takes the output from the "get all masked emails" node and transform into an array.
6.  **HTML Generation:** The `create html template` node generates an HTML table containing the list of masked email addresses and their properties.
7.  **Webhook Response:** Finally, the `Respond to Webhook` node sends the generated HTML table back as the response to the initial webhook request.

## Services:

-   Fastmail API

## Hashtags:

#n8n #automation #fastmail #maskedemail #emailmanagement
