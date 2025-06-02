[](https://github.com/n8n-io/n8n-docs/edit/main/docs/advanced-ai/index.md "Edit this page")

# Advanced AI[#](#advanced-ai "Permanent link")

Build AI functionality using n8n: from creating your own chat bot, to using AI to process documents and data from other sources.

Feature availability

This feature is available on Cloud and self-hosted n8n, in version 1.19.4 and above.

*   **Get started**
    
    Work through the short tutorial to learn the basics of building AI workflows in n8n.
    
    [Tutorial](intro-tutorial/)
    
*   **Use a Starter Kit**
    
    Try n8n's Self-hosted AI Starter Kit to quickly start building AI workflows.
    
    [Self-hosted AI Starter Kit](../hosting/starter-kits/ai-starter-kit/)
    
*   **Explore examples and concepts**
    
    Browse examples and workflow templates to help you build. Includes explanations of important AI concepts.
    
    [Examples](examples/introduction/)
    
*   **How n8n uses LangChain**
    
    Learn more about how n8n builds on LangChain.
    
    [LangChain in n8n](langchain/overview/)
    
*   **Browse AI templates**
    
    Explore a wide range of AI workflow templates on the n8n website.
    
    [AI workflows on n8n.io](https://n8n.io/workflows/?categories=25)
    

## Related resources[#](#related-resources "Permanent link")

Related documentation and tools.

### Node types[#](#node-types "Permanent link")

This feature uses [Cluster nodes](../integrations/builtin/cluster-nodes/): groups of [root](../integrations/builtin/cluster-nodes/root-nodes/) and [sub](../integrations/builtin/cluster-nodes/sub-nodes/) nodes that work together.

[Cluster nodes](../glossary/#cluster-node-n8n) are node groups that work together to provide functionality in an n8n workflow. Instead of using a single node, you use a [root node](../glossary/#root-node-n8n) and one or more [sub-nodes](../glossary/#sub-node-n8n) that extend the functionality of the node.

[![Screenshot of a workflow with a root node and two sub-nodes](../_images/integrations/builtin/cluster-nodes/root-sub-nodes.png)](https://docs.n8n.io/_images/integrations/builtin/cluster-nodes/root-sub-nodes.png)

### Workflow templates[#](#workflow-templates "Permanent link")

You can browse [workflow templates](../glossary/#template-n8n) in-app or on the n8n website [Workflows](https://n8n.io/workflows/?categories=25,26) page.

Refer to [Templates](../workflows/templates/) for information on accessing templates in-app.

### Chat trigger[#](#chat-trigger "Permanent link")

Use the [n8n Chat Trigger](../integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/) to trigger a workflow based on chat interactions.

### Chatbot widget[#](#chatbot-widget "Permanent link")

n8n provides a chatbot widget that you can use as a frontend for AI-powered chat workflows. Refer to the [@n8n/chat npm page](https://www.npmjs.com/package/@n8n/chat) for usage information.