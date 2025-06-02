[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.awssqs.md "Edit this page")

# AWS SQS node[#](#aws-sqs-node "Permanent link")

Use the AWS SQS node to automate work in AWS SNS, and integrate AWS SQS with other applications. n8n has built-in support for a wide range of AWS SQS features, including sending messages.

On this page, you'll find a list of operations the AWS SQS node supports and links to more resources.

Credentials

Refer to [AWS SQS credentials](../../credentials/aws/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Send a message to a queue.

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse AWS SQS integration templates](https://n8n.io/integrations/aws-sqs/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.