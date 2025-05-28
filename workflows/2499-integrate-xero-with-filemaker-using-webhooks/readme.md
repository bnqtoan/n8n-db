# Xero Webhook Verification and Processing

## Use cases:

- **Automated Xero Data Synchronization:** Automatically receive and process data updates from Xero (e.g., new invoices, updated contacts) and store them in a database (FileMaker).
- **Real-time Xero Event Handling:** Trigger specific actions or workflows in response to events happening in Xero, ensuring timely responses to critical business updates.
- **Secure Webhook Validation:**  Ensure that incoming webhooks are genuinely from Xero, preventing malicious or unauthorized data injection.

## How it works:

1.  **Xero Webhook Trigger (`Xero Webhook`):** Listens for incoming HTTP POST requests from a Xero webhook configured with the path `4cf50a61-b550-4ee6-984d-ad8c94e2b5c2`.  It retrieves the raw request body.
2.  **Move Binary Data (`Move Binary Data`):** Moves the raw data to a field called `raw_data`.
3.  **Set (`Set`):** Copies the `raw_data` content into a new field named `source_data`. It will keep only the `source_data` field.
4.  **Crypto (`Crypto`):** Generates an HMAC SHA256 hash of the `source_data` using a secret key. The hashed value is base64 encoded and stored in `target_data`.  The secret key should be the same one configured in the Xero webhook settings.
5.  **IF (`IF`):** Compares the generated hash (`target_data`) with the `x-xero-signature` header received from the Xero webhook request.
6.  **Success/Unauthorised (`Success`, `Unauthorised`):**
    *   If the signatures match, it responds with a 200 OK status to Xero. If they do not match, it returns a 401 Unauthorized status.
7.  **Create webhook record (`Create webhook record`):** Creates a new record in a FileMaker layout named "Webhooks". The value of the `source_data` is saved in a `json` field.
8.  **Perform processWebhook script (`Perform processWebhook script`):** Performs a script in FileMaker called "processWebhook", passing the record ID of the newly created webhook record as a script parameter.

## Services:

*   Xero
*   FileMaker

## Hashtags:

#n8n #Xero #Webhook #Automation #FileMaker
