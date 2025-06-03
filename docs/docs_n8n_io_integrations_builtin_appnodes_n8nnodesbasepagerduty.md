[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.pagerduty.md "Edit this page")

# PagerDuty node[#](#pagerduty-node "Permanent link")

Use the PagerDuty node to automate work in PagerDuty, and integrate PagerDuty with other applications. n8n has built-in support for a wide range of PagerDuty features, including creating incident notes, as well as updating, and getting all log entries and users.

On this page, you'll find a list of operations the PagerDuty node supports and links to more resources.

Credentials

Refer to [PagerDuty credentials](../../credentials/pagerduty/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Incident
    *   Create an incident
    *   Get an incident
    *   Get all incidents
    *   Update an incident
*   Incident Note
    *   Create an incident note
    *   Get all incident's notes
*   Log Entry
    *   Get a log entry
    *   Get all log entries
*   User
    *   Get a user

## Templates and examples[#](#templates-and-examples "Permanent link")

**Manage custom incident response in PagerDuty and Jira**

by tanaypant

[View template details](https://n8n.io/workflows/353-manage-custom-incident-response-in-pagerduty-and-jira/)

**Incident Response Workflow - Part 3**

by tanaypant

[View template details](https://n8n.io/workflows/355-incident-response-workflow-part-3/)

**Incident Response Workflow - Part 2**

by tanaypant

[View template details](https://n8n.io/workflows/354-incident-response-workflow-part-2/)

[Browse PagerDuty integration templates](https://n8n.io/integrations/pagerduty/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.