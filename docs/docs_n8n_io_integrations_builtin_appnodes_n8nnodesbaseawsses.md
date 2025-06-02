[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.awsses.md "Edit this page")

# AWS SES node[#](#aws-ses-node "Permanent link")

Use the AWS SES node to automate work in AWS SES, and integrate AWS SES with other applications. n8n has built-in support for a wide range of AWS SES features, including creating, getting, deleting, sending, updating, and adding templates and emails.

On this page, you'll find a list of operations the AWS SES node supports and links to more resources.

Credentials

Refer to [AWS SES credentials](../../credentials/aws/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Custom Verification Email
    *   Create a new custom verification email template
    *   Delete an existing custom verification email template
    *   Get the custom email verification template
    *   Get all the existing custom verification email templates for your account
    *   Add an email address to the list of identities
    *   Update an existing custom verification email template.
*   Email
    *   Send
    *   Send Template
*   Template
    *   Create a template
    *   Delete a template
    *   Get a template
    *   Get all templates
    *   Update a template

## Templates and examples[#](#templates-and-examples "Permanent link")

**Create screenshots with uProc, save to Dropbox and send by email**

by Miquel Colomer

[View template details](https://n8n.io/workflows/857-create-screenshots-with-uproc-save-to-dropbox-and-send-by-email/)

**Send an email using AWS SES**

by amudhan

[View template details](https://n8n.io/workflows/507-send-an-email-using-aws-ses/)

**Auto-Notify on New Major n8n Releases via RSS, Email & Telegram**

by Miquel Colomer

[View template details](https://n8n.io/workflows/736-auto-notify-on-new-major-n8n-releases-via-rss-email-and-telegram/)

[Browse AWS SES integration templates](https://n8n.io/integrations/aws-ses/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.