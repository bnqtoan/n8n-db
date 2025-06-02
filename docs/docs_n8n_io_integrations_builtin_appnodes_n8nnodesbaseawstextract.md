[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.awstextract.md "Edit this page")

# AWS Textract node[#](#aws-textract-node "Permanent link")

Use the AWS Textract node to automate work in AWS Textract, and integrate AWS Textract with other applications. n8n has built-in support for a wide range of AWS Textract features, including analyzing invoices.

On this page, you'll find a list of operations the AWS Textract node supports and links to more resources.

Credentials

Refer to [AWS Textract credentials](../../credentials/aws/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Analyze Receipt or Invoice

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse AWS Textract integration templates](https://n8n.io/integrations/aws-textract/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.