[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.clockify.md "Edit this page")

# Clockify node[#](#clockify-node "Permanent link")

Use the Clockify node to automate work in Clockify, and integrate Clockify with other applications. n8n has built-in support for a wide range of Clockify features, including creating, updating, getting, and deleting tasks, time entries, projects, and tags.

On this page, you'll find a list of operations the Clockify node supports and links to more resources.

Credentials

Refer to [Clockify credentials](../../credentials/clockify/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Project
    *   Create a project
    *   Delete a project
    *   Get a project
    *   Get all projects
    *   Update a project
*   Tag
    *   Create a tag
    *   Delete a tag
    *   Get all tags
    *   Update a tag
*   Task
    *   Create a task
    *   Delete a task
    *   Get a task
    *   Get all tasks
    *   Update a task
*   Time Entry
    *   Create a time entry
    *   Delete a time entry
    *   Get time entry
    *   Update a time entry

## Templates and examples[#](#templates-and-examples "Permanent link")

**Time logging on Clockify using Slack**

by Blockia Labs

[View template details](https://n8n.io/workflows/2604-time-logging-on-clockify-using-slack/)

**Manage projects in Clockify**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/701-manage-projects-in-clockify/)

**Update time-tracking projects based on Syncro status changes**

by Jonathan

[View template details](https://n8n.io/workflows/1492-update-time-tracking-projects-based-on-syncro-status-changes/)

[Browse Clockify integration templates](https://n8n.io/integrations/clockify/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.