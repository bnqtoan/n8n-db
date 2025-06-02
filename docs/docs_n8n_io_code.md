[](https://github.com/n8n-io/n8n-docs/edit/main/docs/code/index.md "Edit this page")

# Code in n8n[#](#code-in-n8n "Permanent link")

n8n is a low-code tool. This means you can do a lot without code, then add code when needed.

## Code in your workflows[#](#code-in-your-workflows "Permanent link")

There are two places in your workflows where you can use code:

*   **Expressions**
    
    Use [expressions](../glossary/#expression-n8n) to transform [data](../data/) in your nodes. You can use JavaScript in expressions, as well as n8n's [Built-in methods and variables](builtin/overview/) and [Data transformation functions](builtin/data-transformation-functions/).
    
    [Expressions](expressions/)
    
*   **Code node**
    
    Use the Code node to add JavaScript or Python to your workflow.
    
    [Code node](code-node/)
    

## Other technical resources[#](#other-technical-resources "Permanent link")

These are features that are relevant to technical users.

### Technical nodes[#](#technical-nodes "Permanent link")

n8n provides core nodes, which simplify adding key functionality such as API requests, webhooks, scheduling, and file handling.

*   **Write a backend**
    
    The [HTTP Request](../integrations/builtin/core-nodes/n8n-nodes-base.httprequest/), [Webhook](../integrations/builtin/core-nodes/n8n-nodes-base.webhook/), and [Code](code-node/) nodes help you make API calls, respond to webhooks, and write any JavaScript in your workflow.
    
    Use this do things like [Create an API endpoint](https://n8n.io/workflows/1750-creating-an-api-endpoint/).
    
    [Core nodes](../integrations/builtin/core-nodes/)
    
*   **Represent complex logic**
    
    You can build complex flows, using nodes like [If](../integrations/builtin/core-nodes/n8n-nodes-base.if/), [Switch](../integrations/builtin/core-nodes/n8n-nodes-base.switch/), and [Merge](../integrations/builtin/core-nodes/n8n-nodes-base.merge/) nodes.
    
    [Flow logic](../flow-logic/)
    

### Other developer resources[#](#other-developer-resources "Permanent link")

*   **The n8n API**
    
    n8n provides an API, where you can programmatically perform many of the same tasks as you can in the GUI. There's an [n8n API node](../integrations/builtin/core-nodes/n8n-nodes-base.n8n/) to access the API in your workflows.
    
    [API](../api/)
    
*   **Self-host**
    
    You can self-host n8n. This keeps your data on your own infrastructure.
    
    [Hosting](../hosting/)
    
*   **Build your own nodes**
    
    You can build custom nodes, install them on your n8n instance, and publish them to [npm](https://www.npmjs.com/).
    
    [Creating nodes](../integrations/creating-nodes/overview/)