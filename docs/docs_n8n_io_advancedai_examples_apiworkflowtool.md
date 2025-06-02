[](https://github.com/n8n-io/n8n-docs/edit/main/docs/advanced-ai/examples/api-workflow-tool.md "Edit this page")

# Call an API to fetch data[#](#call-an-api-to-fetch-data "Permanent link")

Use n8n to bring data from any [API](../../../glossary/#api) to your AI. This workflow uses the [Chat Trigger](../../../integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/) to provide the chat interface, and the [Call n8n Workflow Tool](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/) to call a second workflow that calls the API. The second workflow uses AI functionality to refine the API request based on the user's query.

[View workflow file](/_workflows/advanced-ai/examples/let_your_ai_call_an_api.json)

## Key features[#](#key-features "Permanent link")

This workflow uses:

*   [Chat Trigger](../../../integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/): start your workflow and respond to user chat interactions. The node provides a customizable chat interface.
*   [Agent](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/): the key piece of the AI workflow. The Agent interacts with other components of the workflow and makes decisions about what tools to use.
*   [Call n8n Workflow Tool](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/): plug in n8n workflows as custom tools. In AI, a tool is an interface the AI can use to interact with the world (in this case, the data provided by your workflow). The AI model uses the tool to access information beyond its built-in dataset.
*   A [Basic LLM Chain](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/) with an [Auto-fixing Output Parser](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserautofixing/) and [Structured Output Parser](../../../integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.outputparserstructured/) to read the user's query and set parameters for the API call based on the user input.

## Using the example[#](#using-the-example "Permanent link")

To load the template into your n8n instance:

1.  Download the workflow JSON file.
2.  Open a new workflow in your n8n instance.
3.  Copy in the JSON, or select **Workflow menu** ![Workflow menu icon](../../../_images/common-icons/three-dots-horizontal.png) > **Import from file...**.

The example workflows use Sticky Notes to guide you:

*   Yellow: notes and information.
*   Green: instructions to run the workflow.
*   Orange: you need to change something to make the workflow work.
*   Blue: draws attention to a key feature of the example.