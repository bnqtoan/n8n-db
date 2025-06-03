[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreinmemory.md "Edit this page")

# Simple Vector Store node[#](#simple-vector-store-node "Permanent link")

Use the Simple Vector Store node to store and retrieve [embeddings](../../../../../glossary/#ai-embedding) in n8n's in-app memory.

On this page, you'll find the node parameters for the Simple Vector Store node, and links to more resources.

Parameter resolution in sub-nodes

Sub-nodes behave differently to other nodes when processing multiple items using an expression.

Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

This node is different from AI memory nodes

The simple vector storage described here is different to the AI memory nodes such as [Simple Memory](../../sub-nodes/n8n-nodes-langchain.memorybufferwindow/).

This node creates a [vector database](../../../../../glossary/#ai-vector-store) in the app memory.

## Data safety limitations[#](#data-safety-limitations "Permanent link")

Before using the Simple Vector Store node, it's important to understand its limitations and how it works.

Warning

n8n recommends using Simple Vector store for development use only.

### Vector store data isn't persistent[#](#vector-store-data-isnt-persistent "Permanent link")

This node stores data in memory only. All data is lost when n8n restarts and may also be purged in low-memory conditions.

### All instance users can access vector store data[#](#all-instance-users-can-access-vector-store-data "Permanent link")

Memory keys for the Simple Vector Store node are global, not scoped to individual workflows.

This means that all users of the instance can access vector store data by adding a Simple Vector Store node and selecting the memory key, regardless of the access controls set for the original workflow. Take care not to expose sensitive information when ingesting data with the Simple Vector Store node.

## Node usage patterns[#](#node-usage-patterns "Permanent link")

You can use the Simple Vector Store node in the following patterns.

### Use as a regular node to insert and retrieve documents[#](#use-as-a-regular-node-to-insert-and-retrieve-documents "Permanent link")

You can use the Simple Vector Store as a regular node to insert or get documents. This pattern places the Simple Vector Store in the regular connection flow without using an agent.

You can see an example of in step 2 of [this template](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/).

### Connect directly to an AI agent as a tool[#](#connect-directly-to-an-ai-agent-as-a-tool "Permanent link")

You can connect the Simple Vector Store node directly to the [tool](../../../../../glossary/#ai-tool) connector of an [AI agent](../n8n-nodes-langchain.agent/) to use a vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> Simple Vector Store node.

### Use a retriever to fetch documents[#](#use-a-retriever-to-fetch-documents "Permanent link")

You can use the [Vector Store Retriever](../../sub-nodes/n8n-nodes-langchain.retrievervectorstore/) node with the Simple Vector Store node to fetch documents from the Simple Vector Store node. This is often used with the [Question and Answer Chain](../n8n-nodes-langchain.chainretrievalqa/) node to fetch documents from the vector store that match the given chat input.

An [example of the connection flow](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/) (the linked example uses Pinecone, but the pattern is the same) would be: Question and Answer Chain (Retriever connector) -> Vector Store Retriever (Vector Store connector) -> Simple Vector Store.

### Use the Vector Store Question Answer Tool to answer questions[#](#use-the-vector-store-question-answer-tool-to-answer-questions "Permanent link")

Another pattern uses the [Vector Store Question Answer Tool](../../sub-nodes/n8n-nodes-langchain.toolvectorstore/) to summarize results and answer questions from the Simple Vector Store node. Rather than connecting the Simple Vector Store directly as a tool, this pattern uses a tool specifically designed to summarizes data in the vector store.

The [connections flow](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/) in this case would look like this: AI agent (tools connector) -> Vector Store Question Answer Tool (Vector Store connector) -> Simple Vector store.

## Memory Management[#](#memory-management "Permanent link")

The Simple Vector Store implements memory management to prevent excessive memory usage:

*   Automatically cleans up old vector stores when memory pressure increases
*   Removes inactive stores that haven't been accessed for a configurable amount of time

### Configuration Options[#](#configuration-options "Permanent link")

You can control memory usage with these environment variables:

Variable

Type

Default

Description

`N8N_VECTOR_STORE_MAX_MEMORY`

Number

\-1

Maximum memory in MB allowed for all vector stores combined (-1 to disable limits).

`N8N_VECTOR_STORE_TTL_HOURS`

Number

\-1

Hours of inactivity after which a store gets removed (-1 to disable TTL).

On n8n Cloud, these values are preset to 100MB (about 8,000 documents, depending on document size and metadata) and 7 days respectively. For self-hosted instances, both values default to -1(no memory limits or time-based cleanup).

## Node parameters[#](#node-parameters "Permanent link")

### Operation Mode[#](#operation-mode "Permanent link")

This Vector Store node has four modes: **Get Many**, **Insert Documents**, **Retrieve Documents (As Vector Store for Chain/Tool)**, and **Retrieve Documents (As Tool for AI Agent)**. The mode you select determines the operations you can perform with the node and what inputs and outputs are available.

#### Get Many[#](#get-many "Permanent link")

In this mode, you can retrieve multiple documents from your vector database by providing a prompt. The prompt will be embedded and used for similarity search. The node will return the documents that are most similar to the prompt with their similarity score. This is useful if you want to retrieve a list of similar documents and pass them to an agent as additional context.

#### Insert Documents[#](#insert-documents "Permanent link")

Use Insert Documents mode to insert new documents into your vector database.

#### Retrieve Documents (As Vector Store for Chain/Tool)[#](#retrieve-documents-as-vector-store-for-chaintool "Permanent link")

Use Retrieve Documents (As Vector Store for Chain/Tool) mode with a vector-store retriever to retrieve documents from a vector database and provide them to the retriever connected to a chain. In this mode you must connect the node to a retriever node or root node.

#### Retrieve Documents (As Tool for AI Agent)[#](#retrieve-documents-as-tool-for-ai-agent "Permanent link")

Use Retrieve Documents (As Tool for AI Agent) mode to use the vector store as a tool resource when answering queries. When formulating responses, the agent uses the vector store when the vector store name and description match the question details.

### Get Many parameters[#](#get-many-parameters "Permanent link")

*   **Memory Key**: Select or create the key containing the vector memory you want to query.
*   **Prompt**: Enter the search query.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

### Insert Documents parameters[#](#insert-documents-parameters "Permanent link")

*   **Memory Key**: Select or create the key you want to store the vector memory as.
*   **Clear Store**: Use this parameter to control whether to wipe the vector store for the given memory key for this workflow before inserting data (turned on).

### Retrieve Documents (As Vector Store for Chain/Tool) parameters[#](#retrieve-documents-as-vector-store-for-chaintool-parameters "Permanent link")

*   **Memory Key**: Select or create the key containing the vector memory you want to query.

### Retrieve Documents (As Tool for AI Agent) parameters[#](#retrieve-documents-as-tool-for-ai-agent-parameters "Permanent link")

*   **Name**: The name of the vector store.
*   **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
*   **Memory Key**: Select or create the key containing the vector memory you want to query.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Building Your First WhatsApp Chatbot**

by Jimleuk

[View template details](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/)

**RAG Chatbot for Company Documents using Google Drive and Gemini**

by Mihai Farcas

[View template details](https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/)

**🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant**

by Joseph LePage

[View template details](https://n8n.io/workflows/2982-ai-powered-rag-chatbot-for-your-docs-google-drive-gemini-qdrant/)

[Browse Simple Vector Store integration templates](https://n8n.io/integrations/in-memory-vector-store/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [LangChains's Memory Vector Store documentation](https://js.langchain.com/docs/integrations/vectorstores/memory/) for more information about the service.

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

## AI glossary[#](#ai-glossary "Permanent link")

*   **completion**: Completions are the responses generated by a model like GPT.
*   **hallucinations**: Hallucination in AI is when an LLM (large language model) mistakenly perceives patterns or objects that don't exist.
*   **vector database**: A vector database stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
*   **vector store**: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.