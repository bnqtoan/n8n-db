[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.gotowebinar.md "Edit this page")

# GoToWebinar node[#](#gotowebinar-node "Permanent link")

Use the GoToWebinar node to automate work in GoToWebinar, and integrate GoToWebinar with other applications. n8n has built-in support for a wide range of GoToWebinar features, including creating, getting, and deleting attendees, organizers, and registrants.

On this page, you'll find a list of operations the GoToWebinar node supports and links to more resources.

Credentials

Refer to [GoToWebinar credentials](../../credentials/gotowebinar/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Attendee
    *   Get
    *   Get All
    *   Get Details
*   Co-Organizer
    *   Create
    *   Delete
    *   Get All
    *   Re-invite
*   Panelist
    *   Create
    *   Delete
    *   Get All
    *   Re-invite
*   Registrant
    *   Create
    *   Delete
    *   Get
    *   Get All
*   Session
    *   Get
    *   Get All
    *   Get Details
*   Webinar
    *   Create
    *   Get
    *   Get All
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse GoToWebinar integration templates](https://n8n.io/integrations/gotowebinar/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.