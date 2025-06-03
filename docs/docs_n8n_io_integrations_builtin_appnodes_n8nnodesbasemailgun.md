[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.mailgun.md "Edit this page")

# Mailgun node[#](#mailgun-node "Permanent link")

Use the Mailgun node to automate work in Mailgun, and integrate Mailgun with other applications. n8n has built-in support for sending emails with Mailgun.

On this page, you'll find a list of operations the Mailgun node supports and links to more resources.

Credentials

Refer to [Mailgun credentials](../../credentials/mailgun/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Send an email

## Templates and examples[#](#templates-and-examples "Permanent link")

**Handle errors from a different workflow**

by Jan Oberhauser

[View template details](https://n8n.io/workflows/8-handle-errors-from-a-different-workflow/)

**Report phishing websites to Steam and CloudFlare**

by chaufnet

[View template details](https://n8n.io/workflows/122-report-phishing-websites-to-steam-and-cloudflare/)

**Send an email using Mailgun**

by amudhan

[View template details](https://n8n.io/workflows/522-send-an-email-using-mailgun/)

[Browse Mailgun integration templates](https://n8n.io/integrations/mailgun/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.