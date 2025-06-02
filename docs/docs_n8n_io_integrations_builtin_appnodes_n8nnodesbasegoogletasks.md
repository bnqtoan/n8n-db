[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.googletasks.md "Edit this page")

# Google Tasks node[#](#google-tasks-node "Permanent link")

Use the Google Tasks node to automate work in Google Tasks, and integrate Google Tasks with other applications. n8n has built-in support for a wide range of Google Tasks features, including adding, updating, and retrieving contacts.

On this page, you'll find a list of operations the Google Tasks node supports and links to more resources.

Credentials

Refer to [Google Tasks credentials](../../credentials/google/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Task
    *   Add a task to task list
    *   Delete a task
    *   Retrieve a task
    *   Retrieve all tasks from a task list
    *   Update a task

## Templates and examples[#](#templates-and-examples "Permanent link")

**Automate Image Validation Tasks using AI Vision**

by Jimleuk

[View template details](https://n8n.io/workflows/2420-automate-image-validation-tasks-using-ai-vision/)

**Sync Google Calendar tasks to Trello every day**

by Angel Menendez

[View template details](https://n8n.io/workflows/1118-sync-google-calendar-tasks-to-trello-every-day/)

**Add a task to Google Tasks**

by sshaligr

[View template details](https://n8n.io/workflows/428-add-a-task-to-google-tasks/)

[Browse Google Tasks integration templates](https://n8n.io/integrations/google-tasks/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.