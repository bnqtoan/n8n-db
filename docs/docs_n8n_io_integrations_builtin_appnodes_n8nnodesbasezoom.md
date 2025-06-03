[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.zoom.md "Edit this page")

# Zoom node[#](#zoom-node "Permanent link")

Use the Zoom node to automate work in Zoom, and integrate Zoom with other applications. n8n has built-in support for a wide range of Zoom features, including creating, retrieving, deleting, and updating meetings.

On this page, you'll find a list of operations the Zoom node supports and links to more resources.

Credentials

Refer to [Zoom credentials](../../credentials/zoom/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Meeting
    *   Create a meeting
    *   Delete a meeting
    *   Retrieve a meeting
    *   Retrieve all meetings
    *   Update a meeting

## Templates and examples[#](#templates-and-examples "Permanent link")

**Zoom AI Meeting Assistant creates mail summary, ClickUp tasks and follow-up call**

by Friedemann Schuetz

[View template details](https://n8n.io/workflows/2800-zoom-ai-meeting-assistant-creates-mail-summary-clickup-tasks-and-follow-up-call/)

**Streamline Your Zoom Meetings with Secure, Automated Stripe Payments**

by Emmanuel Bernard

[View template details](https://n8n.io/workflows/2192-streamline-your-zoom-meetings-with-secure-automated-stripe-payments/)

**Create Zoom meeting link from Google Calendar invite**

by Jason Foster

[View template details](https://n8n.io/workflows/1340-create-zoom-meeting-link-from-google-calendar-invite/)

[Browse Zoom integration templates](https://n8n.io/integrations/zoom/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.