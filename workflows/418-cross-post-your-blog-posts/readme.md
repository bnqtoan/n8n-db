# n8n Workflow: Cross-Post from Strapi to Dev.to and Medium

## Use cases:

*   **Content Syndication:** Automatically publish content created in Strapi to both Dev.to and Medium, expanding your reach and saving time.
*   **Centralized Content Management:** Manage content creation and editing in Strapi, and then distribute it to multiple platforms with a single workflow.
*   **Automated Blogging:** Streamline the blogging process by automatically posting articles from Strapi to your chosen platforms.

## How it works:

1.  **Webhook Trigger (Webhook):** This workflow starts when a POST request is sent to a specific webhook URL. It expects the incoming data to be from Strapi, triggered when a new entry is created or updated. The `Strapi Webhook Credentials` handles the authentication of the incoming webhook request.
2.  **Post to Dev.to (HTTP Request):** The workflow takes the `Title`, `PostContent`, and `Tag` fields from the Strapi entry's body and uses them to create a new article on Dev.to via their API. It formats the data into JSON and sends a POST request to the Dev.to API endpoint (`https://dev.to/api/articles`).  Authentication is handled via `Dev.to Credentials`.
3.  **Post to Medium (Medium):**  Simultaneously, the workflow extracts the same `Title` and `PostContent` from the Strapi entry and uses them to create a new post on Medium. The content is formatted as Markdown. Authentication is handled via `Medium Credentials`.

## Services:

*   Strapi (Content Management System - assumed based on Webhook trigger and data structure)
*   Dev.to (Blogging Platform)
*   Medium (Blogging Platform)

## Hashtags:

#n8n #automation #contentmarketing #strapi #devto #medium
