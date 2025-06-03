[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstorepinecone.md "Edit this page")

# Pinecone Vector Store node[#](#pinecone-vector-store-node "Permanent link")

Use the Pinecone node to interact with your Pinecone database as [vector store](../../../../../glossary/#ai-vector-store). You can insert documents into a vector database, get documents from a vector database, retrieve documents to provide them to a retriever connected to a [chain](../../../../../glossary/#ai-chain), or connect directly to an [agent](../../../../../glossary/#ai-agent) as a [tool](../../../../../glossary/#ai-tool).

On this page, you'll find the node parameters for the Pinecone node, and links to more resources.

Credentials

You can find authentication information for this node [here](../../../credentials/pinecone/).

Parameter resolution in sub-nodes

Sub-nodes behave differently to other nodes when processing multiple items using an expression.

Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node usage patterns[#](#node-usage-patterns "Permanent link")

You can use the Pinecone Vector Store node in the following patterns.

### Use as a regular node to insert, update, and retrieve documents[#](#use-as-a-regular-node-to-insert-update-and-retrieve-documents "Permanent link")

You can use the Pinecone Vector Store as a regular node to insert, update, or get documents. This pattern places the Pinecone Vector Store in the regular connection flow without using an agent.

You can see an example of this in scenario 1 of [this template](https://n8n.io/workflows/2165-chat-with-pdf-docs-using-ai-quoting-sources/).

### Connect directly to an AI agent as a tool[#](#connect-directly-to-an-ai-agent-as-a-tool "Permanent link")

You can connect the Pinecone Vector Store node directly to the tool connector of an [AI agent](../n8n-nodes-langchain.agent/) to use a vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> Pinecone Vector Store node.

### Use a retriever to fetch documents[#](#use-a-retriever-to-fetch-documents "Permanent link")

You can use the [Vector Store Retriever](../../sub-nodes/n8n-nodes-langchain.retrievervectorstore/) node with the Pinecone Vector Store node to fetch documents from the Pinecone Vector Store node. This is often used with the [Question and Answer Chain](../n8n-nodes-langchain.chainretrievalqa/) node to fetch documents from the vector store that match the given chat input.

An [example of the connection flow](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/) would be: Question and Answer Chain (Retriever connector) -> Vector Store Retriever (Vector Store connector) -> Pinecone Vector Store.

### Use the Vector Store Question Answer Tool to answer questions[#](#use-the-vector-store-question-answer-tool-to-answer-questions "Permanent link")

Another pattern uses the [Vector Store Question Answer Tool](../../sub-nodes/n8n-nodes-langchain.toolvectorstore/) to summarize results and answer questions from the Pinecone Vector Store node. Rather than connecting the Pinecone Vector Store directly as a tool, this pattern uses a tool specifically designed to summarizes data in the vector store.

The [connections flow](https://n8n.io/workflows/2705-chat-with-github-api-documentation-rag-powered-chatbot-with-pinecone-and-openai/) in this case would look like this: AI agent (tools connector) -> Vector Store Question Answer Tool (Vector Store connector) -> Pinecone Vector store.

## Node parameters[#](#node-parameters "Permanent link")

### Operation Mode[#](#operation-mode "Permanent link")

This Vector Store node has five modes: **Get Many**, **Insert Documents**, **Retrieve Documents (As Vector Store for Chain/Tool)**, **Retrieve Documents (As Tool for AI Agent)**, and **Update Documents**. The mode you select determines the operations you can perform with the node and what inputs and outputs are available.

#### Get Many[#](#get-many "Permanent link")

In this mode, you can retrieve multiple documents from your vector database by providing a prompt. The prompt will be embedded and used for similarity search. The node will return the documents that are most similar to the prompt with their similarity score. This is useful if you want to retrieve a list of similar documents and pass them to an agent as additional context.

#### Insert Documents[#](#insert-documents "Permanent link")

Use Insert Documents mode to insert new documents into your vector database.

#### Retrieve Documents (As Vector Store for Chain/Tool)[#](#retrieve-documents-as-vector-store-for-chaintool "Permanent link")

Use Retrieve Documents (As Vector Store for Chain/Tool) mode with a vector-store retriever to retrieve documents from a vector database and provide them to the retriever connected to a chain. In this mode you must connect the node to a retriever node or root node.

#### Retrieve Documents (As Tool for AI Agent)[#](#retrieve-documents-as-tool-for-ai-agent "Permanent link")

Use Retrieve Documents (As Tool for AI Agent) mode to use the vector store as a tool resource when answering queries. When formulating responses, the agent uses the vector store when the vector store name and description match the question details.

#### Update Documents[#](#update-documents "Permanent link")

Use Update Documents mode to update documents in a vector database by ID. Fill in the **ID** with the ID of the embedding entry to update.

### Get Many parameters[#](#get-many-parameters "Permanent link")

*   **Pinecone Index**: Select or enter the Pinecone Index to use.
*   **Prompt**: Enter your search query.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

### Insert Documents parameters[#](#insert-documents-parameters "Permanent link")

*   **Pinecone Index**: Select or enter the Pinecone Index to use.

### Retrieve Documents (As Vector Store for Chain/Tool) parameters[#](#retrieve-documents-as-vector-store-for-chaintool-parameters "Permanent link")

*   **Pinecone Index**: Select or enter the Pinecone Index to use.

### Retrieve Documents (As Tool for AI Agent) parameters[#](#retrieve-documents-as-tool-for-ai-agent-parameters "Permanent link")

*   **Name**: The name of the vector store.
*   **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
*   **Pinecone Index**: Select or enter the Pinecone Index to use.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

## Node options[#](#node-options "Permanent link")

### Pinecone Namespace[#](#pinecone-namespace "Permanent link")

Another segregation option for how to store your data within the index.

### Metadata Filter[#](#metadata-filter "Permanent link")

Available in **Get Many** mode. When searching for data, use this to match with metadata associated with the document.

This is an `AND` query. If you specify more than one metadata filter field, all of them must match.

When inserting data, the metadata is set using the document loader. Refer to [Default Data Loader](../../sub-nodes/n8n-nodes-langchain.documentdefaultdataloader/) for more information on loading documents.

### Clear Namespace[#](#clear-namespace "Permanent link")

Available in **Insert Documents** mode. Deletes all data from the namespace before inserting the new data.

## Templates and examples[#](#templates-and-examples "Permanent link")

**Ask questions about a PDF using AI**

by David Roberts

[View template details](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/)

**Chat with PDF docs using AI (quoting sources)**

by David Roberts

[View template details](https://n8n.io/workflows/2165-chat-with-pdf-docs-using-ai-quoting-sources/)

**RAG Chatbot for Company Documents using Google Drive and Gemini**

by Mihai Farcas

[View template details](https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/)

[Browse Pinecone Vector Store integration templates](https://n8n.io/integrations/pinecone-vector-store/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [LangChain's Pinecone documentation](https://js.langchain.com/docs/integrations/vectorstores/pinecone/) for more information about the service.

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

### Find your Pinecone index and namespace[#](#find-your-pinecone-index-and-namespace "Permanent link")

Your Pinecone index and namespace are available in your Pinecone account.

[![Screenshot of a Pinecone account, with the Pinecone index labelled](../../../../../_images/integrations/builtin/cluster-nodes/vectorstorepinecone/pinecone-index-namespace.png)](https://docs.n8n.io/_images/integrations/builtin/cluster-nodes/vectorstorepinecone/pinecone-index-namespace.png)

## AI glossary[#](#ai-glossary "Permanent link")

*   **completion**: Completions are the responses generated by a model like GPT.
*   **hallucinations**: Hallucination in AI is when an LLM (large language model) mistakenly perceives patterns or objects that don't exist.
*   **vector database**: A vector database stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
*   **vector store**: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.