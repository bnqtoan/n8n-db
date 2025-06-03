[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.code.md "Edit this page")

# LangChain Code node[#](#langchain-code-node "Permanent link")

Use the LangChain Code node to import LangChain. This means if there is functionality you need that n8n hasn't created a node for, you can still use it. By configuring the LangChain Code node connectors you can use it as a normal node, root node or sub-node.

On this page, you'll find the node parameters, guidance on configuring the node, and links to more resources.

Not available on Cloud

This node is only available on self-hosted n8n.

## Node parameters[#](#node-parameters "Permanent link")

### Add Code[#](#add-code "Permanent link")

Add your custom code. Choose either **Execute** or **Supply Data** mode. You can only use one mode.

Unlike the [Code node](../../../core-nodes/n8n-nodes-base.code/), the LangChain Code node doesn't support Python.

*   **Execute**: use the LangChain Code node like n8n's own Code node. This takes input data from the workflow, processes it, and returns it as the node output. This mode requires a main input and output. You must create these connections in **Inputs** and **Outputs**.
*   **Supply Data**: use the LangChain Code node as a sub-node, sending data to a root node. This uses an output other than main.

By default, you can't load built-in or external modules in this node. Self-hosted users can [enable built-in and external modules](../../../../../hosting/configuration/configuration-methods/).

### Inputs[#](#inputs "Permanent link")

Choose the input types.

The main input is the normal connector found in all n8n workflows. If you have a main input and output set in the node, **Execute** code is required.

### Outputs[#](#outputs "Permanent link")

Choose the output types.

The main output is the normal connector found in all n8n workflows. If you have a main input and output set in the node, **Execute** code is required.

## Node inputs and outputs configuration[#](#node-inputs-and-outputs-configuration "Permanent link")

By configuring the LangChain Code node connectors (inputs and outputs) you can use it as an app node, root node or sub-node.

[![Screenshot of a workflow with four LangChain nodes, configured as different node types](../../../../../_images/integrations/builtin/cluster-nodes/langchaincode/create-node-types.png)](https://docs.n8n.io/_images/integrations/builtin/cluster-nodes/langchaincode/create-node-types.png)

Node type

Inputs

Outputs

Code mode

App node. Similar to the [Code node](../../../core-nodes/n8n-nodes-base.code/).

Main

Main

Execute

Root node

Main; at least one other type

Main

Execute

Sub-node

\-

A type other than main. Must match the input type you want to connect to.

Supply Data

Sub-node with sub-nodes

A type other than main

A type other than main. Must match the input type you want to connect to.

Supply Data

## Built-in methods[#](#built-in-methods "Permanent link")

n8n provides these methods to make it easier to perform common tasks in the LangChain Code node.

Method

Description

`this.addInputData(inputName, data)`

Populate the data of a specified non-main input. Useful for mocking data.

*   `inputName` is the input connection type, and must be one of: `ai_agent`, `ai_chain`, `ai_document`, `ai_embedding`, `ai_languageModel`, `ai_memory`, `ai_outputParser`, `ai_retriever`, `ai_textSplitter`, `ai_tool`, `ai_vectorRetriever`, `ai_vectorStore`
*   `data` contains the data you want to add. Refer to [Data structure](../../../../../data/data-structure/) for information on the data structure expected by n8n.

`this.addOutputData(outputName, data)`

Populate the data of a specified non-main output. Useful for mocking data.

*   `outputName` is the input connection type, and must be one of: `ai_agent`, `ai_chain`, `ai_document`, `ai_embedding`, `ai_languageModel`, `ai_memory`, `ai_outputParser`, `ai_retriever`, `ai_textSplitter`, `ai_tool`, `ai_vectorRetriever`, `ai_vectorStore`
*   `data` contains the data you want to add. Refer to [Data structure](../../../../../data/data-structure/) for information on the data structure expected by n8n.

`this.getInputConnectionData(inputName, itemIndex, inputIndex?)`

Get data from a specified non-main input.

*   `inputName` is the input connection type, and must be one of: `ai_agent`, `ai_chain`, `ai_document`, `ai_embedding`, `ai_languageModel`, `ai_memory`, `ai_outputParser`, `ai_retriever`, `ai_textSplitter`, `ai_tool`, `ai_vectorRetriever`, `ai_vectorStore`
*   `itemIndex` should always be `0` (this parameter will be used in upcoming functionality)
*   Use `inputIndex` if there is more than one node connected to the specified input.

`this.getInputData(inputIndex?, inputName?)`

Get data from the main input.

`this.getNode()`

Get the current node.

`this.getNodeOutputs()`

Get the outputs of the current node.

`this.getExecutionCancelSignal()`

Use this to stop the execution of a function when the workflow stops. In most cases n8n handles this, but you may need to use it if building your own chains or agents. It replaces the [Cancelling a running LLMChain](https://js.langchain.com/docs/modules/chains/foundational/llm_chain#cancelling-a-running-llmchain) code that you'd use if building a LangChain application normally.

## Templates and examples[#](#templates-and-examples "Permanent link")

**🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant**

by Joseph LePage

[View template details](https://n8n.io/workflows/2982-ai-powered-rag-chatbot-for-your-docs-google-drive-gemini-qdrant/)

**Custom LangChain agent written in JavaScript**

by n8n Team

[View template details](https://n8n.io/workflows/1955-custom-langchain-agent-written-in-javascript/)

**Use any LangChain module in n8n (with the LangChain code node)**

by David Roberts

[View template details](https://n8n.io/workflows/2082-use-any-langchain-module-in-n8n-with-the-langchain-code-node/)

[Browse LangChain Code integration templates](https://n8n.io/integrations/langchain-code/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

## AI glossary[#](#ai-glossary "Permanent link")

*   **completion**: Completions are the responses generated by a model like GPT.
*   **hallucinations**: Hallucination in AI is when an LLM (large language model) mistakenly perceives patterns or objects that don't exist.
*   **vector database**: A vector database stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
*   **vector store**: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.