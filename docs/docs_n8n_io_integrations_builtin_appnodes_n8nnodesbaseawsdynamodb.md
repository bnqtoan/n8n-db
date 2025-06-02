[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.awsdynamodb.md "Edit this page")

# AWS DynamoDB node[#](#aws-dynamodb-node "Permanent link")

Use the AWS DynamoDB node to automate work in AWS DynamoDB, and integrate AWS DynamoDB with other applications. n8n has built-in support for a wide range of AWS DynamoDB features, including creating, reading, updating, deleting items, and records on a database.

On this page, you'll find a list of operations the AWS DynamoDB node supports and links to more resources.

Credentials

Refer to [AWS credentials](../../credentials/aws/) for guidance on setting up authentication.

## Operations[#](#operations "Permanent link")

*   Item
*   Create a new record, or update the current one if it already exists (upsert/put)
*   Delete an item
*   Get an item
*   Get all items

## Templates and examples[#](#templates-and-examples "Permanent link")

**Transcribe audio files from Cloud Storage**

by Lorena

[View template details](https://n8n.io/workflows/1394-transcribe-audio-files-from-cloud-storage/)

**Extract and store text from chat images using AWS S3**

by Lorena

[View template details](https://n8n.io/workflows/1393-extract-and-store-text-from-chat-images-using-aws-s3/)

**Sync data between Google Drive and AWS S3**

by Lorena

[View template details](https://n8n.io/workflows/1396-sync-data-between-google-drive-and-aws-s3/)

[Browse AWS DynamoDB integration templates](https://n8n.io/integrations/aws-dynamodb/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.