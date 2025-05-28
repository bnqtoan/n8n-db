# Create Fastmail Masked Email via Webhook

## Use cases

*   **Privacy-focused email generation:** Automatically create a new, masked email address for each signup to a website or service, protecting your primary email address from spam and potential breaches.
*   **Testing and Development:** Generate temporary email addresses for testing user registration flows, form submissions, or email delivery verification in your applications.
*   **Disposable Email Addresses:** Provide users with an easy way to create temporary email addresses for situations where they don't want to disclose their real email.

## How it works

This workflow creates a new masked email address in Fastmail when it receives a POST request via a webhook.

1.  **Webhook Trigger:** The workflow starts when a POST request is sent to the `/createMaskedEmail` webhook endpoint. The request body can optionally include `state` and `description` fields to customize the masked email. If these fields are not provided, default values ("pending" for `state` and "Test via N8n" for `description`) are used.
2.  **Session Retrieval:** An HTTP Request node fetches the Fastmail session information using the Fastmail API. This session data is required for authenticating subsequent API calls.
3.  **Create Masked Email:**  The workflow then sends a POST request to the Fastmail JMAP API to create the masked email address. It uses the session information from the previous step, along with the `state` and `description` values obtained from the webhook payload (or their default values).
4.  **Prepare output:** The newly created masked email address and its description are retrieved from the Fastmail API response and set as variables for output.
5.  **Respond to Webhook:** Finally, the workflow sends a response to the original webhook request, including the newly created masked email address and description in the response body.

## Services

*   Fastmail API (JMAP)

## Hashtags

#n8n #automation #fastmail #maskedemail #emailprivacy
