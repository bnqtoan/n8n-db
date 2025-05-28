# Peekalink URL Availability Checker and Metadata Extractor

## Use cases:

*   **Monitor Website Availability:** Automatically check if a specific URL is available and trigger actions based on its status (e.g., send a notification if a website goes down).
*   **Enrich Link Data:** Extract metadata (title, description, images) from URLs if they are available, for use in content creation or social media management.
*   **Content Moderation:** Verify the availability of links posted by users and take action if a link is broken or unavailable.

## How it works:

1.  **Trigger:** The workflow starts manually when the "On clicking 'execute'" node is activated.
2.  **Check URL Availability:** The "Peekalink" node checks if the URL `https://n8n1.io` is available using the Peekalink API.
3.  **Conditional Branching:** The "IF" node evaluates the `isAvailable` property returned by the Peekalink node.
    *   **If Available:** If the URL is available ( `isAvailable` is `true`), the workflow proceeds to the "Peekalink1" node.
    *   **If Not Available:** If the URL is not available, the workflow proceeds to the "NoOp" node, which does nothing (you could add error handling or notifications here).
4.  **Extract Metadata (If Available):** The "Peekalink1" node extracts metadata from the same URL (`https://n8n1.io`) using the Peekalink API.
5.  **No Operation (If Not Available):** The "NoOp" node does nothing if the URL is not available.

## Services:

*   **Peekalink API:** Used to check URL availability and extract metadata.

## Hashtags:

#n8n #automation #peekalink #urlmonitoring #metadataextraction
