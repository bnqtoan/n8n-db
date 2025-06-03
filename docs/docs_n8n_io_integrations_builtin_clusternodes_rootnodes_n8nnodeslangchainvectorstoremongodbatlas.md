[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoremongodbatlas.md "Edit this page")

# MongoDB Atlas Vector Store node[#](#mongodb-atlas-vector-store-node "Permanent link")

MongoDB Atlas Vector Search is a feature of MongoDB Atlas that enables users to store and query vector embeddings. Use this node to interact with Vector Search indexes in your MongoDB Atlas collections. You can insert documents, retrieve documents, and use the vector store in chains or as a tool for agents.

On this page, you'll find the node parameters for the MongoDB Atlas Vector Store node, and links to more resources.

Credentials

You can find authentication information for this node [here](../../../credentials/mongodb/).

Parameter resolution in sub-nodes

Sub-nodes behave differently to other nodes when processing multiple items using an expression.

Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Prerequisites[#](#prerequisites "Permanent link")

Before using this node, create a [Vector Search index](https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-type/) in your MongoDB Atlas collection. Follow these steps to create one:

1.  Log in to the [MongoDB Atlas dashboard](https://cloud.mongodb.com/).
    
2.  Select your organization and project.
    
3.  Find "Search & Vector Search" section.
4.  Select your cluster and click "Go to search".
5.  Click "Create Search Index".
6.  Choose "Vector Search" mode and use the visual or JSON editors. For example:
    
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    
    `{   "fields": [     {       "type": "vector",       "path": "<field-name>",       "numDimensions": 1536, // any other value       "similarity": "<similarity-function>"     }   ] }`
    
7.  Adjust the "dimensions" value according to your embedding model (For example, `1536` for OpenAI's `text-embedding-small-3`).
    
8.  Name your index and create.

Make sure to note the following values which are required when configuring the node:

*   Collection name
*   Vector index name
*   Field names for embeddings and metadata

## Node usage patterns[#](#node-usage-patterns "Permanent link")

You can use the MongoDB Atlas Vector Store node in the following patterns:

### Use as a regular node to insert and retrieve documents[#](#use-as-a-regular-node-to-insert-and-retrieve-documents "Permanent link")

You can use the MongoDB Atlas Vector Store as a regular node to insert or get documents. This pattern places the MongoDB Atlas Vector Store in the regular connection flow without using an agent.

You can see an example of this in scenario 1 of [this template](https://n8n.io/workflows/2621-ai-agent-to-chat-with-files-in-supabase-storage/) (the template uses the Supabase Vector Store, but the pattern is the same).

### Connect directly to an AI agent as a tool[#](#connect-directly-to-an-ai-agent-as-a-tool "Permanent link")

You can connect the MongoDB Atlas Vector Store node directly to the tool connector of an [AI agent](../n8n-nodes-langchain.agent/) to use the vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> MongoDB Atlas Vector Store node.

### Use a retriever to fetch documents[#](#use-a-retriever-to-fetch-documents "Permanent link")

You can use the [Vector Store Retriever](../../sub-nodes/n8n-nodes-langchain.retrievervectorstore/) node with the MongoDB Atlas Vector Store node to fetch documents from the MongoDB Atlas Vector Store node. This is often used with the [Question and Answer Chain](../n8n-nodes-langchain.chainretrievalqa/) node to fetch documents from the vector store that match the given chat input.

An [example of the connection flow](https://n8n.io/workflows/1960-ask-questions-about-a-pdf-using-ai/) (the linked example uses Pinecone, but the pattern is the same) would be: Question and Answer Chain (Retriever connector) -> Vector Store Retriever (Vector Store connector) -> MongoDB Atlas Vector Store.

### Use the Vector Store Question Answer Tool to answer questions[#](#use-the-vector-store-question-answer-tool-to-answer-questions "Permanent link")

Another pattern uses the [Vector Store Question Answer Tool](../../sub-nodes/n8n-nodes-langchain.toolvectorstore/) to summarize results and answer questions from the MongoDB Atlas Vector Store node. Rather than connecting the MongoDB Atlas Vector Store directly as a tool, this pattern uses a tool specifically designed to summarize data in the vector store.

The [connections flow](https://n8n.io/workflows/2465-building-your-first-whatsapp-chatbot/) (the linked example uses the In-Memory Vector Store, but the pattern is the same) in this case would look like this: AI agent (tools connector) -> Vector Store Question Answer Tool (Vector Store connector) -> In-Memory Vector store.

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

*   **Mongo Collection**: Enter the name of the MongoDB collection to use.
*   **Vector Index Name**: Enter the name of the Vector Search index in your MongoDB Atlas collection.
*   **Embedding Field**: Enter the field name in your documents that contains the vector embeddings.
*   **Metadata Field**: Enter the field name in your documents that contains the text metadata.

### Insert Documents parameters[#](#insert-documents-parameters "Permanent link")

*   **Mongo Collection**: Enter the name of the MongoDB collection to use.
*   **Vector Index Name**: Enter the name of the Vector Search index in your MongoDB Atlas collection.
*   **Embedding Field**: Enter the field name in your documents that contains the vector embeddings.
*   **Metadata Field**: Enter the field name in your documents that contains the text metadata.

### Retrieve Documents parameters (As Vector Store for Chain/Tool)[#](#retrieve-documents-parameters-as-vector-store-for-chaintool "Permanent link")

*   **Mongo Collection**: Enter the name of the MongoDB collection to use.
*   **Vector Index Name**: Enter the name of the Vector Search index in your MongoDB Atlas collection.
*   **Embedding Field**: Enter the field name in your documents that contains the vector embeddings.
*   **Metadata Field**: Enter the field name in your documents that contains the text metadata.

### Retrieve Documents (As Tool for AI Agent) parameters[#](#retrieve-documents-as-tool-for-ai-agent-parameters "Permanent link")

*   **Name**: The name of the vector store.
*   **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
*   **Mongo Collection**: Enter the name of the MongoDB collection to use.
*   **Vector Index Name**: Enter the name of the Vector Search index in your MongoDB Atlas collection.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

## Node options[#](#node-options "Permanent link")

### Options[#](#options "Permanent link")

*   **Metadata Filter**: Filters results based on metadata.

## Templates and examples[#](#templates-and-examples "Permanent link")

[Browse MongoDB Atlas Vector Store integration templates](https://n8n.io/integrations/mongodb-atlas-vector-store/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to:

*   [LangChain's MongoDB Atlas Vector Search documentation](https://js.langchain.com/docs/integrations/vectorstores/mongodb_atlas) for more information about the service.
*   [MongoDB Atlas Vector Search documentation](https://www.mongodb.com/docs/atlas/atlas-vector-search/) for more information about MongoDB Atlas Vector Search.

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

## Self-hosted AI Starter Kit[#](#self-hosted-ai-starter-kit "Permanent link")

New to working with AI and using self-hosted n8n? Try n8n's [self-hosted AI Starter Kit](../../../../../hosting/starter-kits/ai-starter-kit/) to get started with a proof-of-concept or demo playground using Ollama, Qdrant, and PostgreSQL.