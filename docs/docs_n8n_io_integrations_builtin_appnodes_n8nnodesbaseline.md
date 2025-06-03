[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.line.md "Edit this page")

# Line node[#](#line-node "Permanent link")

Deprecated: End of service

LINE Notify is discontinuing service as of April 1st 2025 and this node will no longer work after that date. View LINE Notify's [end of service announement](https://notify-bot.line.me/closing-announce) for more information.

Use the Line node to automate work in Line, and integrate Line with other applications. n8n has built-in support for a wide range of Line features, including sending notifications.

On this page, you'll find a list of operations the Line node supports and links to more resources.

Credentials

Refer to [Line credentials](../../credentials/line/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Notification
    *   Sends notifications to users or groups

## Templates and examples[#](#templates-and-examples "Permanent link")

**Customer Support Channel and Ticketing System with Slack and Linear**

by Jimleuk

[View template details](https://n8n.io/workflows/2323-customer-support-channel-and-ticketing-system-with-slack-and-linear/)

**Line Message API : Push Message & Reply**

by darrell\_tw

[View template details](https://n8n.io/workflows/2733-line-message-api-push-message-and-reply/)

**Send daily weather updates via a notification in Line**

by Harshil Agrawal

[View template details](https://n8n.io/workflows/773-send-daily-weather-updates-via-a-notification-in-line/)

[Browse Line integration templates](https://n8n.io/integrations/line/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.