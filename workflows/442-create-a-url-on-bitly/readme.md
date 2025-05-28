## n8n Workflow: URL Shortening with Bitly

### Use cases:

*   **Shorten long URLs for social media:** Automatically create shorter, more shareable links for posting on platforms like Twitter or Facebook.
*   **Simplify URLs for email marketing:** Use shorter, cleaner links in email campaigns to improve click-through rates and readability.
*   **Track link clicks:**  Bitly provides analytics on shortened links, allowing you to monitor traffic and engagement.

### How it works:

This workflow is triggered manually. When executed, it takes a pre-defined long URL (in this case, a USC event calendar link) and uses the Bitly service to generate a shortened version of that URL.  The workflow consists of two nodes:

1.  **On clicking 'execute' (Manual Trigger):** This node initiates the workflow execution.  It doesn't require any configuration.
2.  **Bitly:** This node receives the long URL and sends it to the Bitly API, which shortens it.  The `longUrl` parameter is hardcoded in this example. A Bitly API credential must be configured for this node to work. The shortened URL is then outputted by the node.

### Services:

*   Bitly (URL shortening service)

### Hashtags:

#n8n #automation #URLshortener #Bitly #linkmanagement
