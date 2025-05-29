# n8n Workflow Deployer

## Use cases:

- **Automated Workflow Deployment:** Automatically deploy new n8n workflows to your n8n instance whenever a JSON file is added to a specific Google Drive folder.
- **Version Control and Staging:** Use Google Drive folders as staging environments.  Move workflow JSON files through different folders (e.g., "ToDeploy," "Deployed") to manage workflow versions and deployments.
- **Centralized Workflow Repository:**  Maintain a centralized repository of n8n workflows in Google Drive, allowing for easy sharing and deployment across different n8n instances.

## How it works:

1. **Google Drive Trigger:** The workflow starts when a new JSON file is created in a designated "ToDeploy" Google Drive folder ("Google Drive Trigger -ToDeploy folder").
2. **Set Variables:** Sets the n8n instance URL and the workflow tag ID using the "Set n8n API URL & Tag ID variables" node.  These values are used to communicate with the n8n API.
3. **Download JSON File:** The JSON file containing the n8n workflow definition is downloaded from Google Drive ("Download n8n JSON File").
4. **Extract and Clean JSON:** The JSON data is extracted and cleaned to remove any unwanted or disallowed settings ("Extract JSON object from File" and "Clean JSON file ready for import").
5. **Create Workflow in n8n:**  An HTTP request is made to the n8n API to create a new workflow using the cleaned JSON data ("Create n8n Workflow").
6. **Set Workflow Tag:**  If the workflow creation is successful, another HTTP request is made to assign a specific tag to the newly created workflow ("Set Workflow Tag").
7. **Move to Deployed Folder:** After the workflow is successfully created and tagged, the JSON file is moved to a "Deployed" folder in Google Drive ("Move JSON file to Deployed folder").
8. **Error Handling:** if the workflow creation fails, it captures the workflow name and the error message ("Capture Name If Fails To Create Workflow").

## Services:

- **Google Drive:** Used for storing and triggering the workflow deployment process.
- **n8n API:** Used to create and tag workflows within the n8n instance.

## Hashtags:

#n8n #automation #workflow #deploy #googleDrive
