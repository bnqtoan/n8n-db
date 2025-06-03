[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.rundeck.md "Edit this page")

# Rundeck node[#](#rundeck-node "Permanent link")

Use the Rundeck node to automate work in Rundeck, and integrate Rundeck with other applications. n8n has built-in support for executing jobs and getting metadata.

On this page, you'll find a list of operations the Rundeck node supports and links to more resources.

Credentials

Refer to [Rundeck credentials](../../credentials/rundeck/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   **Job**
    *   Execute a job
    *   Get metadata of a job

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Rundeck integration templates](https://n8n.io/integrations/rundeck/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

## Find the job ID[#](#find-the-job-id "Permanent link")

1.  Access your Rundeck dashboard.
2.  Open the project that contains the job you want to use with n8n.
3.  In the sidebar, select **JOBS**.
4.  Under **All Jobs**, select the name of the job you want to use with n8n.
5.  In the top left corner, under the name of the job, copy the string that's displayed in smaller font below the job name. This is your job ID.
6.  Paste this job ID in the **Job Id** field in n8n.