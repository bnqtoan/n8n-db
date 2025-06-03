[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.microsoftteams.md "Edit this page")

# Microsoft Teams node[#](#microsoft-teams-node "Permanent link")

Use the Microsoft Teams node to automate work in Microsoft Teams, and integrate Microsoft Teams with other applications. n8n has built-in support for a wide range of Microsoft Teams features, including creating and deleting, channels, messages, and tasks.

On this page, you'll find a list of operations the Microsoft Teams node supports and links to more resources.

Credentials

Refer to [Microsoft credentials](../../credentials/microsoft/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Channel
    *   Create
    *   Delete
    *   Get
    *   Get Many
    *   Update
*   Channel Message
    *   Create
    *   Get Many
*   Chat Message
    *   Create
    *   Get
    *   Get Many
    *   Send and Wait for Response
*   Task
    *   Create
    *   Delete
    *   Get
    *   Get Many
    *   Update

## Waiting for a response[#](#waiting-for-a-response "Permanent link")

By choosing the **Send and Wait for a Response** operation, you can send a message and pause the workflow execution until a person confirms the action or provides more information.

### Response Type[#](#response-type "Permanent link")

You can choose between the following types of waiting and approval actions:

*   **Approval**: Users can approve or disapprove from within the message.
*   **Free Text**: Users can submit a response with a form.
*   **Custom Form**: Users can submit a response with a custom form.

You can customize the waiting and response behavior depending on which response type you choose. You can configure these options in any of the above response types:

*   **Limit Wait Time**: Whether the workflow will automatically resume execution after a specified time limit. This can be an interval or a specific wall time.
*   **Append n8n Attribution**: Whether to mention in the message that it was sent automatically with n8n (turned on) or not (turned off).

### Approval response customization[#](#approval-response-customization "Permanent link")

When using the Approval response type, you can choose whether to present only an approval button or both approval _and_ disapproval buttons.

You can also customize the button labels for the buttons you include.

### Free Text response customization[#](#free-text-response-customization "Permanent link")

When using the Free Text response type, you can customize the message button label, the form title and description, and the response button label.

### Custom Form response customization[#](#custom-form-response-customization "Permanent link")

When using the Custom Form response type, you build a form using the fields and options you want.

You can customize each form element with the settings outlined in the [n8n Form trigger's form elements](../../core-nodes/n8n-nodes-base.formtrigger/#form-elements). To add more fields, select the **Add Form Element** button.

You'll also be able to customize the message button label, the form title and description, and the response button label.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Create, update and send a message to a channel in Microsoft Teams**

by amudhan

[View template details](https://n8n.io/workflows/680-create-update-and-send-a-message-to-a-channel-in-microsoft-teams/)

**Meraki Packet Loss and Latency Alerts to Microsoft Teams**

by Gavin

[View template details](https://n8n.io/workflows/2054-meraki-packet-loss-and-latency-alerts-to-microsoft-teams/)

**Create Teams Notifications for new Tickets in ConnectWise with Redis**

by Gavin

[View template details](https://n8n.io/workflows/2352-create-teams-notifications-for-new-tickets-in-connectwise-with-redis/)

[Browse Microsoft Teams integration templates](https://n8n.io/integrations/microsoft-teams/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [Microsoft Teams' API documentation](https://learn.microsoft.com/en-us/graph/api/overview?view=graph-rest-1.0) for more information about the service.

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.