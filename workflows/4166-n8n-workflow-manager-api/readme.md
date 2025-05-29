# My Workflow

## Use cases:

- **Remote Workflow Execution:** Trigger n8n workflows from external applications or services by sending a POST request with the target workflow ID and input data.
- **Workflow Status Monitoring:** Use GET requests to retrieve the status (active/inactive) and details (full or summary) of n8n workflows, enabling monitoring and management.
- **Raycast Integration:** As the creator mentioned, use this as a backend for a Raycast extension to search and execute n8n workflows directly from Raycast.

## How it works:

This workflow acts as a central "Workflow Manager" accessible via a webhook. It handles both `POST` (execute workflow) and `GET` (retrieve workflow info) requests.

**POST Request (Execute Workflow):**

1.  The `Webhook` node receives a `POST` request containing the `workflowId` (as a query parameter) of the workflow to execute and the input data (in the request body). Authentication is done via HTTP Header Auth.
2.  The `Map webhook request to fields` node extracts the `workflowId` and the request body into variables.
3.  The `Execute Workflow` node executes the specified workflow using its ID, passing the data from the POST request as input. It waits for the sub-workflow to complete.
4.  If the execution is successful, `return succes message` sends a success response. If not, `return problem executing workflow` returns an error.
5.  If there are any errors in the mapping, it returns `Return problem handling request`.

**GET Request (Retrieve Workflow Info):**

1.  The `Webhook` node receives a `GET` request, expecting `workflowId` and/or `includedWorkflows` and `mode` as query parameters. Authentication is done via HTTP Header Auth.
2.  The `map parameters` node retrieves the query parameters.
3.  The `Does workflowId Exist` node checks if `workflowId` exists.
4. If it exists, then `Get specific workflowid` node is triggered. The `Get specific workflowid` node uses the n8n API to get the workflow by its `workflowId`.
5. If it doesn't exists, then `Included Workflows` node is triggered. The `Included Workflows` node is a switch based on the value of `includedWorkflows` where each case then triggers a n8n node that uses the n8n API to get `all`, `active`, or `inactive` workflows.
6. `full mode` node then determines if the response mode is full or not
7. If it's `full` then returns `return all workflow info`, else it triggers `Map key workflow info` and returns `return summarized workflow info`.

## Services:

-   n8n API: Used to retrieve workflow information.
-   Any service or application that can send HTTP requests.

## Hashtags:

#n8n #workflowautomation #webhook #apiautomation #workflowmanagement