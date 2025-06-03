[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/app-nodes/n8n-nodes-base.wordpress.md "Edit this page")

# WordPress node[#](#wordpress-node "Permanent link")

Use the WordPress node to automate work in WordPress, and integrate WordPress with other applications. n8n has built-in support for a wide range of WordPress features, including creating, updating, and getting posts and users.

On this page, you'll find a list of operations the WordPress node supports and links to more resources.

Credentials

Refer to [WordPress credentials](../../credentials/wordpress/) for guidance on setting up authentication.

This node can be used as an AI tool

This node can be used to enhance the capabilities of an AI agent. When used in this way, many parameters can be set automatically, or with information directed by AI - find out more in the [AI tool parameters documentation](../../../../advanced-ai/examples/using-the-fromai-function/).

## Operations[#](#operations "Permanent link")

*   Post
    *   Create a post
    *   Get a post
    *   Get all posts
    *   Update a post
*   Pages
    *   Create a page
    *   Get a page
    *   Get all pages
    *   Update a page
*   User
    *   Create a user
    *   Get a user
    *   Get all users
    *   Update a user

## Templates and examples[#](#templates-and-examples "Permanent link")

**Write a WordPress post with AI (starting from a few keywords)**

by Giulio

[View template details](https://n8n.io/workflows/2187-write-a-wordpress-post-with-ai-starting-from-a-few-keywords/)

**Automate Content Generator for WordPress with DeepSeek R1**

by Davide

[View template details](https://n8n.io/workflows/2813-automate-content-generator-for-wordpress-with-deepseek-r1/)

**🔍🛠️Generate SEO-Optimized WordPress Content with AI Powered Perplexity Research**

by Joseph LePage

[View template details](https://n8n.io/workflows/3291-generate-seo-optimized-wordpress-content-with-ai-powered-perplexity-research/)

[Browse WordPress integration templates](https://n8n.io/integrations/wordpress/), or [search all templates](https://n8n.io/workflows/)

## What to do if your operation isn't supported[#](#what-to-do-if-your-operation-isnt-supported "Permanent link")

If this node doesn't support the operation you want to do, you can use the [HTTP Request node](../../core-nodes/n8n-nodes-base.httprequest/) to call the service's API.

You can use the credential you created for this service in the HTTP Request node:

1.  In the HTTP Request node, select **Authentication** > **Predefined Credential Type**.
2.  Select the service you want to connect to.
3.  Select your credential.

Refer to [Custom API operations](../../../custom-operations/) for more information.