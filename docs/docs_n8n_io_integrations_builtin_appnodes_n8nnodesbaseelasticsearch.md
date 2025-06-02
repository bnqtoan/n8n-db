[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.elasticsearch.md "Edit this page")

# Elasticsearch node[#](#elasticsearch-node "Permanent link")

Use the Elasticsearch node to automate work in Elasticsearch, and integrate Elasticsearch with other applications. n8n has built-in support for a wide range of Elasticsearch features, including creating, updating, deleting, and getting documents and indexes.

On this page, you'll find a list of operations the Elasticsearch node supports and links to more resources.

Credentials

Refer to [Elasticsearch credentials](../../credentials/elasticsearch/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Document
    *   Create a document
    *   Delete a document
    *   Get a document
    *   Get all documents
    *   Update a document
*   Index
    *   Create
    *   Delete
    *   Get
    *   Get All

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse Elasticsearch integration templates](https://n8n.io/integrations/elasticsearch/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.