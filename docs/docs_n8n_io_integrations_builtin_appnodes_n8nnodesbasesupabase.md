[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.supabase/index.md "Edit this page")

# Supabase node[#](#supabase-node "Permanent link")

Use the Supabase node to automate work in Supabase, and integrate Supabase with other applications. n8n has built-in support for a wide range of Supabase features, including creating, deleting, and getting rows.

On this page, you'll find a list of operations the Supabase node supports and links to more resources.

Credentials

Refer to [Supabase credentials](../../credentials/supabase/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Row
    *   Create a new row
    *   Delete a row
    *   Get a row
    *   Get all rows
    *   Update a row

## Templates and examples[#](#templates-and-examples "Permanent link")

**AI Agent To Chat With Files In Supabase Storage**

by Mark Shcherbakov

[View template details](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/)

**Autonomous AI crawler**

by Oskar

[View template details](https://n8n.io/workflows/2315-autonomous-ai-crawler/)

**Supabase Insertion & Upsertion & Retrieval**

by Ria

[View template details](https://n8n.io/workflows/2395-supabase-insertion-and-upsertion-and-retrieval/)

[Browse Supabase integration templates](https://n8n.io/integrations/supabase/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.

## Common issues[#](#common-issues "Permanent link")

For common errors or issues and suggested resolution steps, refer to [Common issues](common-issues/).