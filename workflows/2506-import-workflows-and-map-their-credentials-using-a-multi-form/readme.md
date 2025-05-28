# Workflow Importer

## Use cases:

- Import n8n workflows from a file or from another n8n instance.
- Migrate workflows between n8n instances, even if they have different credentials.
- Centralize workflow management by exporting and importing workflows between different teams or environments.

## How it works:

1.  **Trigger**: A form is presented to the user, asking to select the source of the workflow (File Upload or Remote Instance).
2.  **Source Determination**: Based on the selection:
    -   **File Upload**: The workflow JSON file is uploaded and extracted.
    -   **Remote Instance**:
        -   A list of configured n8n instances is displayed in a dropdown.
        -   The user selects the source instance.
        -   The workflow retrieves a list of available workflows from the selected instance using the n8n API.
        -   The workflow displays the workflows from the selected instance.
3.  **Credential Mapping**:
    -   The workflow analyzes the selected workflow to identify credentials.
    -   The workflow presents a form to map the original credentials to existing credentials in the destination n8n instance or create new ones.
4.  **Credential Replacement**: The workflow replaces the credentials of the workflow with the selections from credential mapping.
5.  **Workflow Creation**: The updated workflow is created in the destination n8n instance.
6.  **Completion**: A form is displayed to inform the user of the import status, including whether new credentials were created and need to be configured.

## Services:

-   n8n API (for retrieving and creating workflows and credentials).

## Hashtags:

#n8n #automation #workflow #migration #import #export
