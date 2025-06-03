[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.pushover.md "Edit this page")

# Pushover node[#](#pushover-node "Permanent link")

Use the Pushover node to automate work in Pushover, and integrate Pushover with other applications. n8n supports sending push notifications with Pushover.

On this page, you'll find a list of operations the Pushover node supports and links to more resources.

Credentials

Refer to [Pushover credentials](../../credentials/pushover/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Message
    *   Push

## Templates and examples[#](#templates-and-examples "Permanent link")

**Weekly reminder on your notion tasks with a deadline**

by David

[View template details](https://n8n.io/workflows/2409-weekly-reminder-on-your-notion-tasks-with-a-deadline/)

**Send daily weather updates via push notification**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/740-send-daily-weather-updates-via-push-notification/)

**Error Handling System with PostgreSQL Logging and Rate-Limited Notifications**

by Davi Saranszky Mesquita

[View template details](https://n8n.io/workflows/3882-error-handling-system-with-postgresql-logging-and-rate-limited-notifications/)

[Browse Pushover integration templates](https://n8n.io/integrations/pushover/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.