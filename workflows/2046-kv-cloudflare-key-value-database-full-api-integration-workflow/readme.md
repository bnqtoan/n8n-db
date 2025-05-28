# Cloudflare Key-Value Full API integration Workflow

## Use cases:

1.  **Dynamic Configuration:** Store application configurations in Cloudflare KV and update them in real-time without redeploying code. For example, feature flags, API endpoint URLs, or rate-limiting rules.
2.  **A/B Testing:** Implement A/B testing by storing different content variations in KV and serving them based on user segments or other criteria.
3.  **Session Management:** Use Cloudflare KV to store user session data for serverless applications, enabling scalable and performant session management.

## How it works:

This workflow provides a comprehensive set of tools for interacting with Cloudflare's Key-Value (KV) storage. It includes functionalities for:

1.  **Namespace Management:**
    *   Creating new KV namespaces using the "Create KV-NM" node, which sends a POST request to the Cloudflare API.
    *   Renaming existing namespaces using the "Delete KV1" node, which sends a PUT request to the Cloudflare API.
    *   Deleting namespaces using the "Delete KV" node, which sends a DELETE request to the Cloudflare API.
2.  **Key-Value Pair Management:**
    *   Writing single key-value pairs to a namespace using the "Write V & MD of KV In NM" node, including the option to add metadata.
    *   Reading the value of a key in a namespace using the "Read Value Of KV In NM" node.
    *   Reading the metadata associated with a key using the "Read MD from Key" node.
    *   Deleting a specific key-value pair from a namespace using the "Delete KV inside NM" node.
    *   Writing multiple key-value pairs in bulk to a namespace using the "Write KVs inside NM" node.
    *   Deleting multiple key-value pairs in bulk from a namespace using the "Delete KVs inside NM" node.
    *   Listing all keys inside a namespace using the "-Get Keys inside NM" node.
3.  **Account Configuration:**
    *   The "Account Path" node sets the Cloudflare account identifier, which is required for all API requests.
4.  **Authentication:**
    *   The workflow uses the "cloudflareApi" credential type for authentication, which must be pre-configured in n8n.

**Key Nodes:**

*   **Account Path:** Sets the Cloudflare account ID. This is essential for all requests.
*   **Create KV-NM:** Creates a new KV namespace.
*   **List KV-NMs (1-10):** Retrieves a list of existing KV namespaces. Used to dynamically select the correct namespace ID for other operations.
*   **Set KV-NM Name (1-8):**  Sets the namespace name and key name.
*   **Write V & MD of KV In NM:** Writes a key-value pair with metadata.
*   **Read Value Of KV In NM:** Reads the value of a key.
*   **Delete KV inside NM:** Deletes a specific key.
*   **Delete KVs inside NM:** Deletes multiple keys in bulk.
*   **Write KVs inside NM:** Writes multiple key-value pairs in bulk.

## Services:

*   Cloudflare KV

## Hashtags:

#n8n #cloudflare #kvstorage #automation #serverless
