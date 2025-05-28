# Public Webhook Relay

## Use cases:

- **Forwarding Public Webhooks to Local Development Environments:**  Ideal for testing and debugging webhooks from third-party services (e.g., payment gateways, CRM systems) directly on your local machine without exposing your local server to the internet.
- **Creating a Redundant Webhook Receiver:**  If you need to ensure that webhook data is reliably received, even if your primary server is temporarily unavailable, this workflow can act as a backup, forwarding webhooks to a local n8n instance.
- **Processing Webhooks Behind a Firewall:**  When your n8n instance is behind a firewall and cannot directly receive webhooks from external services, this workflow can use a publicly accessible service like webhook.site to receive the webhooks and relay them to your internal n8n instance.

## How it works:

This workflow acts as a relay for public webhooks, forwarding them to a local n8n instance. Here's a breakdown:

1.  **Schedule Trigger:** The workflow is triggered periodically based on a defined interval (default: every 10 seconds).
2.  **Local Webhook Address:** Get the destination URL of the local n8n workflow to which the relayed webhooks will be sent.
3. **Retrieve Auth Token:** Check if the auth token is present in the key-value store.
4.  **If Auth Token Exists:** if the key is not found, the workflow calls for an auth token, if the key is found, the workflow calls for the latest requests.
5.  **Get Auth Token:** Retrieves a new auth token from webhook.site to the key-value store (if one doesn't already exist) using an HTTP request. The auth token is stored using the key-value store node for future use.
6.  **Store Auth Token:** After getting the auth token, stores the auth token in the key-value store node, to allow further usage.
7.  **Retrieve Last Processed:** Gets the timestamp of the last processed webhook request from the key-value store.
8.  **Get Latest Requests:** Retrieves all webhook requests associated with the auth token from webhook.site.
9.  **Merge:** Combines the results from "Retrieve Last Processed" and "Get Latest Requests" nodes to be able to compare the timestamps.
10. **Unprocessed Requests:** Filters the retrieved webhook requests to identify only those that arrived after the `last_processed` timestamp. This ensures that only new requests are processed.
11. **Latest Update Time:** Extracts the latest timestamp from the current batch of requests for usage as the last processed time on the next run.
12. **Store Last Processed:** Saves the timestamp of the most recent webhook request to the key-value store, so it can use this data on the next run.
13. **POST to n8n:** Forwards the content of each new webhook request to the specified local n8n workflow using an HTTP POST request.
14. **Auth Token KV, Last Time Processed KV:** Persists the "auth\_token" and "last\_processed"  between runs using the Key Value Storage nodes to keep track of what's been processed.

## Services:

-   **webhook.site:**  A service that provides temporary HTTP endpoints for testing webhooks.
-   **Key Value Storage**: Used to store the auth token and last processed time.

## Hashtags:

#n8n #automation #webhook #relay #development
