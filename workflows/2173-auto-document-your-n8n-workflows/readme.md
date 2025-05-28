# Workflow Documenter

## Use cases:

-   **Automated Documentation:** Automatically generate documentation for n8n workflows to improve understanding and maintainability.
-   **Template Creation:** Quickly create documentation when submitting n8n workflow templates.
-   **Collaboration:** Streamline collaboration by providing clear, concise documentation to team members.

## How it works:

1.  **n8n Form Trigger:** This node triggers the workflow when a form is submitted with a workflow title and JSON content.
2.  **Edit Fields:** Adds a pre-defined prompt to the workflow to guide documentation generation by OpenAI.
3.  **Create input to open ai:** Combines the workflow title, the workflow JSON, and the pre-defined prompt into a single string to provide context to OpenAI.
4.  **OpenAI:** Uses the OpenAI node to generate documentation based on the provided prompt and workflow JSON. The prompt instructs OpenAI to analyze the JSON and create documentation with specific sections (Use Cases, How it Works, Services, Hashtags).
5.  **Respond to Webhook:** Sends the generated documentation as an HTML response, displaying it in a user-friendly format.

## Services:

-   OpenAI
-   n8n Form

## Hashtags:

#n8n #automation #documentation #workflow #OpenAI
