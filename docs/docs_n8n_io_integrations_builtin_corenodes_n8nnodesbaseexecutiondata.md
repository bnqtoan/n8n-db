[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/core-nodes/n8n-nodes-base.executiondata.md "Edit this page")

# Execution Data[#](#execution-data "Permanent link")

Use this node to save metadata for workflow executions. You can then search by this data in the **Executions** list.

You can retrieve custom execution data during workflow execution using the Code node. Refer to [Custom executions data](../../../../workflows/executions/custom-executions-data/) for more information.

Feature availability

Available on Pro and Enterprise plans.

## Operations[#](#operations "Permanent link")

*   Save Execution Data for Search

## Data to Save[#](#data-to-save "Permanent link")

Add a **Saved Field** for each key/value pair of metadata you'd like to save.

## Limitations[#](#limitations "Permanent link")

The Execution Data node has the following restrictions when storing execution metadata:

*   `key`: limited to 50 characters
*   `value`: limited to 512 characters

If either the `key` or `value` exceed the above limitations, n8n truncates to their maximum length and outputs a log entry.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Host Your Own AI Deep Research Agent with n8n, Apify and OpenAI o3**

by Jimleuk

[View template details](https://n8n.io/workflows/2878-host-your-own-ai-deep-research-agent-with-n8n-apify-and-openai-o3/)

**API Schema Extractor**

by Polina Medvedieva

[View template details](https://n8n.io/workflows/2658-api-schema-extractor/)

**Realtime Notion Todoist 2-way Sync with Redis**

by Mario

[View template details](https://n8n.io/workflows/2772-realtime-notion-todoist-2-way-sync-with-redis/)

[Browse Execution Data integration templates](https://n8n.io/integrations/execution-data/), or [search all templates](https://n8n.io/workflows/)