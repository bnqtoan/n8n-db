# Create Atlassian Confluence page from template

## Use cases

- **Automated Report Generation:** Automatically create daily, weekly, or monthly reports in Confluence using a predefined template populated with data fetched from other systems (e.g., databases, monitoring tools).
- **Project Documentation:** Generate new project documentation pages in Confluence based on a template when a new project is initiated, automatically filling in project-specific details.
- **Incident Post-Mortem:** Streamline the creation of post-mortem documents in Confluence after an incident, automatically inserting incident details, timelines, and resolutions into a standardized template.

## How it works

1.  **Webhook Trigger:** The workflow is initiated by a `Webhook` node, listening for incoming HTTP POST requests. This allows external systems or applications to trigger the page creation process.
2.  **Set Parameters:** The `Set parameters` node defines key configuration values such as the Confluence base URL, template ID, target space key, and target parent page ID. These parameters are essential for interacting with Confluence and specifying where to create the new page.
3.  **Get Template Content:** The `Confluence: Get template content` node retrieves the content of a specified Confluence template using the Confluence REST API. It uses an HTTP Request node configured with basic authentication (API Key).
4.  **Replace Placeholders:** The `Replace placeholders in template body and title` node uses a JavaScript code node to replace placeholders in the template's title and body with data received from the webhook. It identifies placeholders using a regular expression and dynamically inserts the corresponding values.
5.  **Create Page:** The `Confluence: Create page from template` node creates a new page in Confluence using the Confluence REST API. It sends a POST request with the page's title, space, body (with "storage" representation), and parent page ID. It uses basic authentication (API Key) for authorization.

## Services

-   **Atlassian Confluence:** The workflow creates pages and fetches templates.

## Hashtags

#n8n #Confluence #Automation #Workflow #Atlassian
