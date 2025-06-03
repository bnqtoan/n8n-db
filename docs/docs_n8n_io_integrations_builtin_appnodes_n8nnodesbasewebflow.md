[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.webflow.md "Edit this page")

# Webflow node[#](#webflow-node "Permanent link")

Use the Webflow node to automate work in Webflow, and integrate Webflow with other applications. n8n has built-in support for a wide range of Webflow features, including creating, updating, deleting, and getting items.

On this page, you'll find a list of operations the Webflow node supports and links to more resources.

Credentials

Refer to [Webflow credentials](../../credentials/webflow/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Item
    *   Create
    *   Delete
    *   Get
    *   Get All
    *   Update

## Templates and examples[#](#templates-and-examples "Permanent link")

**Enrich FAQ sections on your website pages at scale with AI**

by Polina Medvedieva

[View template details](https://n8n.io/workflows/2434-enrich-faq-sections-on-your-website-pages-at-scale-with-ai/)

**Sync blog posts from Notion to Webflow**

by Giovanni Ruggieri

[View template details](https://n8n.io/workflows/2293-sync-blog-posts-from-notion-to-webflow/)

**Real-time lead routing in Webflow**

by Lucas Perret

[View template details](https://n8n.io/workflows/2033-real-time-lead-routing-in-webflow/)

[Browse Webflow integration templates](https://n8n.io/integrations/webflow/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.