# Credentials Transfer

## Use cases:

- **Migrating Credentials Between n8n Instances:** When setting up a new n8n instance or migrating from one environment to another (e.g., development to production), this workflow automates the process of transferring credentials, saving time and reducing manual errors.
- **Centralized Credential Management:** For organizations managing multiple n8n instances, this workflow can facilitate the distribution of credentials from a central "template" instance to other instances, ensuring consistency and simplifying updates.
- **Backup and Restore:** Use this workflow to create a backup of your credentials on one instance and quickly restore them to another in case of a disaster or accidental deletion.

## How it works:

1.  **Initialization (On form submission):** The workflow starts with a form that triggers the credential transfer process.  This form, secured potentially by Basic Auth, initiates the workflow.
2.  **Settings:** Retrieves the configuration settings including the remote n8n instances details such as name, apiKey and baseUrl.
3.  **Get Instance Names:** Extracts a list of instance names from the settings and provides the extraction to **Choose Instance** node.
4.  **Choose Instance:** The **Choose Instance** node presents a form with a dropdown menu populated with available n8n instances (defined in the "Settings" node).
5.  **Export Credentials:** The `n8n export:credentials` command exports all credentials into a temporary file `/tmp/cred`.
6.  **Get Credentials Data:** The workflow reads the content of the file generated in the previous step.
7.  **Binary to JSON:** Converts the data from the file from binary to JSON format.
8.  **Get Credential Names:** Extracts a list of credential names from the JSON data and provides it to **Choose Credential** node.
9.  **Choose Credential:** The **Choose Credential** node presents a form with a dropdown menu containing the names of available credentials.
10. **Prepare Request Data:**  Combines the selected destination instance and the credential that should be copied.
11. **Create Credential:**  Makes an HTTP POST request to the destination n8n instance to create the credential using its API. The request includes the credential data and the API key of the destination instance.
12. **Success/Error:** Displays a success or error message in the n8n UI based on the result of the credential creation attempt.

## Services:

-   n8n API (for credential creation)
-   n8n CLI (for credential export)

## Hashtags:

#n8n #automation #credentials #transfer #migration
