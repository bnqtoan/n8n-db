[](https://github.com/n8n-io/n8n-docs/edit/main/docs/advanced-ai/examples/agent-chain-comparison.md "Edit this page")

# Demonstration of key differences between agents and chains[#](#demonstration-of-key-differences-between-agents-and-chains "Permanent link")

In this workflow you can choose whether your chat query goes to an [agent](../../../glossary/#ai-agent) or [chain](../../../glossary/#ai-chain). It shows some of the ways that agents are more powerful than chains.

[View workflow file](/_workflows/advanced-ai/examples/agents_vs_chains.json)

## Key features[#](#key-features "Permanent link")

This workflow uses:

*   [Chat Trigger](../../../integrations/builtin/core-nodes/n8n-nodes-langchain.chattrigger/): start your workflow and respond to user chat interactions. The node provides a customizable chat interface.
*   [Switch node](../../../integrations/builtin/core-nodes/n8n-nodes-base.switch/): directs your query to either the agent or chain, depending on which you specify in your query. If you say "agent" it sends it to the agent. If you say "chain" it sends it to the chain.
*   [Agent](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/): the Agent node interacts with other components of the workflow and makes decisions about what [tools](../../../glossary/#ai-tool) to use.
*   [Basic LLM Chain](../../../integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.chainllm/): the Basic LLM Chain node supports chatting with a connected LLM, but doesn't support [memory](../../../glossary/#ai-memory) or tools.

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