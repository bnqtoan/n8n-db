# Docsify example

## Use cases:

- **Automated Documentation:** Automatically generate and update documentation for n8n workflows, making it easier to understand and maintain complex automations.
- **Centralized Workflow Overview:** Provide a central hub for all n8n workflows in an instance, complete with status indicators, documentation links, and modification history.
- **Live Markdown Editing:** Allow users to edit workflow documentation directly through a web interface with a live preview, enhancing collaboration and knowledge sharing.

## How it works:

This workflow automates the creation, viewing, and editing of documentation for n8n workflows using Docsify, a dynamic documentation generator. Here's a breakdown:

1.  **Webhook Trigger:** The workflow is triggered via two webhooks (`docsify` and `single workflow`). `docsify` responds with the main HTML page, and `single workflow` listens for requests for specific documentation pages or actions (view, edit, save).
2.  **File Handling:**
    *   The workflow checks if the requested documentation file (e.g., `docs_<workflow_id>.md`) exists.
    *   If the file exists, it's loaded. If not, a new documentation file is generated with basic information about the workflow.
3.  **Documentation Generation:**
    *   A Mermaid chart is generated to visually represent the workflow.
    *   An LLM (Language Model) is used to automatically generate a description and node settings for the workflow.
4.  **Markdown Serving:**  The documentation, in Markdown format, is served via the webhook, which Docsify renders into a dynamic webpage.
5.  **Live Editing:** If the "edit" action is triggered, a custom HTML page with a live Markdown editor is presented. The user can edit the documentation and save it back to the server via a POST request.
6.  **Saving Changes:** When the "save" action is called. The workflow then saves the changes made to the Markdown file on the server.

Key nodes:

*   **CONFIG:** Stores environment variables and HTML headers/styles/includes for Docsify.
*   **Webhook (docsify, single workflow):** Triggers the workflow and handles requests for documentation pages.
*   **Read/Write File:** Reads existing documentation files or saves new/edited files.
*   **HTML:** Generates HTML pages for the main Docsify view and the Markdown editor.
*   **Basic LLM Chain:** Generates the description and settings.
*   **Convert to File:** Converts data to text format to be saved in a file.
*   **Respond to Webhook:** Sends the HTML or Markdown content back to the user.

## Services:

*   **n8n API:** Fetches workflow data (name, nodes, connections, etc.) from the n8n instance.
*   **OpenAI API:** (Optional) Used to generate workflow descriptions and settings automatically.
*   **Docsify:** Used to generate dynamic webpage documentation.
*   **Mermaid.js:** Generates workflow chart.

## Hashtags:

#n8n #automation #documentation #workflow #docsify
