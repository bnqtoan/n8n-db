[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremilvus.md "Edit this page")

# Milvus Vector Store node[#](#milvus-vector-store-node "Permanent link")

Use the Milvus node to interact with your Milvus database as [vector store](../../../../../glossary/#ai-vector-store). You can insert documents into a vector database, get documents from a vector database, retrieve documents to provide them to a retriever connected to a [chain](../../../../../glossary/#ai-chain), or connect directly to an [agent](../../../../../glossary/#ai-agent) as a [tool](../../../../../glossary/#ai-tool).

On this page, you'll find the node parameters for the Milvus node, and links to more resources.

Credentials

You can find authentication information for this node [here](../../../credentials/milvus/).

Parameter resolution in sub-nodes

Sub-nodes behave differently to other nodes when processing multiple items using an expression.

Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node usage patterns[#](#node-usage-patterns "Permanent link")

You can use the Milvus Vector Store node in the following patterns.

### Use as a regular node to insert and retrieve documents[#](#use-as-a-regular-node-to-insert-and-retrieve-documents "Permanent link")

You can use the Milvus Vector Store as a regular node to insert, or get documents. This pattern places the Milvus Vector Store in the regular connection flow without using an agent.

See this [example template](https://n8n.io/workflows/3573-create-a-rag-system-with-paul-essays-milvus-and-openai-for-cited-answers/) for how to build a system that stores documents in Milvus and retrieves them to support cited, chat-based answers.

### Connect directly to an AI agent as a tool[#](#connect-directly-to-an-ai-agent-as-a-tool "Permanent link")

You can connect the Milvus Vector Store node directly to the tool connector of an [AI agent](../n8n-nodes-langchain.agent/) to use a vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> Milvus Vector Store node. See this [example template](https://n8n.io/workflows/3576-paul-graham-essay-search-and-chat-with-milvus-vector-database/) where data is embedded and indexed in Milvus, and the AI Agent uses the vector store as a knowledge tool for question-answering.

### Use a retriever to fetch documents[#](#use-a-retriever-to-fetch-documents "Permanent link")

You can use the [Vector Store Retriever](../../sub-nodes/n8n-nodes-langchain.retrievervectorstore/) node with the Milvus Vector Store node to fetch documents from the Milvus Vector Store node. This is often used with the [Question and Answer Chain](../n8n-nodes-langchain.chainretrievalqa/) node to fetch documents from the vector store that match the given chat input.

A typical node connection flow looks like this: Question and Answer Chain (Retriever connector) -> Vector Store Retriever (Vector Store connector) -> Milvus Vector Store.

Check out this [workflow example](https://n8n.io/workflows/3574-create-a-paul-graham-essay-qanda-system-with-openai-and-milvus-vector-database/) to see how to ingest external data into Milvus and build a chat-based semantic Q&A system.

### Use the Vector Store Question Answer Tool to answer questions[#](#use-the-vector-store-question-answer-tool-to-answer-questions "Permanent link")

Another pattern uses the [Vector Store Question Answer Tool](../../sub-nodes/n8n-nodes-langchain.toolvectorstore/) to summarize results and answer questions from the Milvus Vector Store node. Rather than connecting the Milvus Vector Store directly as a tool, this pattern uses a tool specifically designed to summarizes data in the vector store.

The connections flow would look like this: AI agent (tools connector) -> Vector Store Question Answer Tool (Vector Store connector) -> Milvus Vector store.

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

*   **Milvus Collection**: Select or enter the Milvus Collection to use.
*   **Prompt**: Enter your search query.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

### Insert Documents parameters[#](#insert-documents-parameters "Permanent link")

*   **Milvus Collection**: Select or enter the Milvus Collection to use.
*   **Clear Collection**: Specify whether to clear the collection before inserting new documents.

### Retrieve Documents (As Vector Store for Chain/Tool) parameters[#](#retrieve-documents-as-vector-store-for-chaintool-parameters "Permanent link")

*   **Milvus collection**: Select or enter the Milvus Collection to use.

### Retrieve Documents (As Tool for AI Agent) parameters[#](#retrieve-documents-as-tool-for-ai-agent-parameters "Permanent link")

*   **Name**: The name of the vector store.
*   **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
*   **Milvus Collection**: Select or enter the Milvus Collection to use.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

## Node options[#](#node-options "Permanent link")

### Metadata Filter[#](#metadata-filter "Permanent link")

Available in **Get Many** mode. When searching for data, use this to match with metadata associated with the document.

This is an `AND` query. If you specify more than one metadata filter field, all of them must match.

When inserting data, the metadata is set using the document loader. Refer to [Default Data Loader](../../sub-nodes/n8n-nodes-langchain.documentdefaultdataloader/) for more information on loading documents.

### Clear Collection[#](#clear-collection "Permanent link")

Available in **Insert Documents** mode. Deletes all data from the collection before inserting the new data.

## Related resources[#](#related-resources "Permanent link")

Refer to [LangChain's Milvus documentation](https://js.langchain.com/docs/integrations/vectorstores/milvus/) for more information about the service.

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.