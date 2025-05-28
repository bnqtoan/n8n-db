# n8n-rocks Folder Creation in Box

## Use cases:

*   **Automated Project Setup:** Automatically create a new folder in Box when a new project is initiated, ensuring a structured file storage system from the start.
*   **Client Onboarding:**  Generate a dedicated Box folder for each new client, providing a secure and organized space for sharing documents and project updates.

## How it works:

This workflow is triggered manually. Upon execution, it uses the Box node to create a new folder named "n8n-rocks" in your Box account.  It authenticates with Box using your configured Box OAuth2 API credentials.

1.  **On clicking 'execute':** This node triggers the workflow when you manually click the "Execute Workflow" button in n8n.
2.  **Box:**  This node creates a new folder named "n8n-rocks" within your Box account. The "resource" parameter is set to "folder," and the required OAuth2 credentials are used to authenticate with Box.

## Services:

*   Box

## Hashtags:

#n8n #automation #Box #foldercreation #workflow
