# n8napi-check-workflow-which-model-is-using

## Use cases:

*   **AI Model Governance:** Track which n8n workflows are utilizing specific AI models (identified by `modelId`). This helps maintain oversight and control over AI model usage within the organization.
*   **Dependency Analysis:** Identify all workflows that depend on a particular AI model before updating or decommissioning it. This minimizes disruption and ensures smooth transitions.
*   **Cost Optimization:** Analyze the usage of different AI models across workflows to identify potential cost-saving opportunities by consolidating or optimizing model usage.

## How it works:

1.  **Trigger:** The workflow is manually triggered by clicking "Test workflow."
2.  **Get All Workflows:** It retrieves all workflows from your n8n instance using the "n8n-get all workflow" node.
3.  **Filter Workflows:** It filters the workflows to only include those that contain "modelId" in their node configurations and are not the current workflow itself.
4.  **Loop Over Items:** The workflow iterates through each of the filtered workflows.
5.  **Split Out Nodes:** For each workflow, the "Split Out-nodes" node splits the `nodes` array into individual node items.
6.  **Filter Nodes:** It filters the individual nodes to identify those that contain either `modelId` or `model` parameters.
7.  **Edit Fields - set_model_data:** Creates new fields with data about node and workflow: node_name, model, workflow_name, workflow_id, workflow_url
8.  **Google Sheets - Save node and workflow data:** Saves the relevant information (workflow name, ID, node name, and model ID) to a Google Sheet. The Google Sheet is first cleared of any existing data.
9.  **Loop back:** Loops back to process the next workflow, ensuring each workflow using specified models is recorded.

## Services:

*   n8n API: Used to retrieve all workflows from the n8n instance.
*   Google Sheets: Used to store the extracted data about workflow and model usage.

## Hashtags:

#n8n #automation #AIModelTracking #workflow #GoogleSheets
