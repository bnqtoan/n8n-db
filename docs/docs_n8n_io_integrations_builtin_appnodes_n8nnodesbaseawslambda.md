[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.awslambda.md "Edit this page")

# AWS Lambda node[#](#aws-lambda-node "Permanent link")

Use the AWS Lambda node to automate work in AWS Lambda, and integrate AWS Lambda with other applications. n8n has built-in support for a wide range of AWS Lambda features, including invoking functions.

On this page, you'll find a list of operations the AWS Lambda node supports and links to more resources.

Credentials

Refer to [AWS Lambda credentials](../../credentials/aws/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Invoke a function

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse AWS Lambda integration templates](https://n8n.io/integrations/aws-lambda/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.