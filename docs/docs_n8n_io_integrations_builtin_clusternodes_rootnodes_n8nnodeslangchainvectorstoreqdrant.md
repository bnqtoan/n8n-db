[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.vectorstoreqdrant.md "Edit this page")

# Qdrant Vector Store node[#](#qdrant-vector-store-node "Permanent link")

Use the Qdrant node to interact with your Qdrant collection as a [vector store](../../../../../glossary/#ai-vector-store). You can insert documents into a vector database, get documents from a vector database, retrieve documents to provide them to a retriever connected to a [chain](../../../../../glossary/#ai-chain) or connect it directly to an [agent](../../../../../glossary/#ai-agent) to use as a [tool](../../../../../glossary/#ai-tool).

On this page, you'll find the node parameters for the Qdrant node, and links to more resources.

Credentials

You can find authentication information for this node [here](../../../credentials/qdrant/).

Parameter resolution in sub-nodes

Sub-nodes behave differently to other nodes when processing multiple items using an expression.

Most nodes, including root nodes, take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five `name` values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five `name` values, the expression `{{ $json.name }}` always resolves to the first name.

## Node usage patterns[#](#node-usage-patterns "Permanent link")

You can use the Qdrant Vector Store node in the following patterns.

### Use as a regular node to insert and retrieve documents[#](#use-as-a-regular-node-to-insert-and-retrieve-documents "Permanent link")

You can use the Qdrant Vector Store as a regular node to insert or get documents. This pattern places the Qdrant Vector Store in the regular connection flow without using an agent.

You can see an example of this in the first part of [this template](https://n8n.io/workflows/2440-building-rag-chatbot-for-movie-recommendations-with-qdrant-and-open-ai/).

### Connect directly to an AI agent as a tool[#](#connect-directly-to-an-ai-agent-as-a-tool "Permanent link")

You can connect the Qdrant Vector Store node directly to the tool connector of an [AI agent](../n8n-nodes-langchain.agent/) to use a vector store as a resource when answering queries.

Here, the connection would be: AI agent (tools connector) -> Qdrant Vector Store node.

### Use a retriever to fetch documents[#](#use-a-retriever-to-fetch-documents "Permanent link")

You can use the [Vector Store Retriever](../../sub-nodes/n8n-nodes-langchain.retrievervectorstore/) node with the Qdrant Vector Store node to fetch documents from the Qdrant Vector Store node. This is often used with the [Question and Answer Chain](../n8n-nodes-langchain.chainretrievalqa/) node to fetch documents from the vector store that match the given chat input.

An [example of the connection flow](https://n8n.io/workflows/2183-ai-crew-to-automate-fundamental-stock-analysis-qanda-workflow/) would be: Question and Answer Chain (Retriever connector) -> Vector Store Retriever (Vector Store connector) -> Qdrant Vector Store.

### Use the Vector Store Question Answer Tool to answer questions[#](#use-the-vector-store-question-answer-tool-to-answer-questions "Permanent link")

Another pattern uses the [Vector Store Question Answer Tool](../../sub-nodes/n8n-nodes-langchain.toolvectorstore/) to summarize results and answer questions from the Qdrant Vector Store node. Rather than connecting the Qdrant Vector Store directly as a tool, this pattern uses a tool specifically designed to summarizes data in the vector store.

The [connections flow](https://n8n.io/workflows/2464-scale-deal-flow-with-a-pitch-deck-ai-vision-chatbot-and-qdrant-vector-store/) in this case would look like this: AI agent (tools connector) -> Vector Store Question Answer Tool (Vector Store connector) -> Qdrant Vector store.

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

*   **Qdrant collection name**: Enter the name of the Qdrant collection to use.
*   **Prompt**: Enter the search query.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

This Operation Mode includes one **Node option**, the [Metadata Filter](#metadata-filter).

### Insert Documents parameters[#](#insert-documents-parameters "Permanent link")

*   **Qdrant collection name**: Enter the name of the Qdrant collection to use.

This Operation Mode includes one **Node option**:

*   **Collection Config**: Enter JSON options for creating a Qdrant collection creation configuration. Refer to the Qdrant [Collections](https://qdrant.tech/documentation/concepts/collections/) documentation for more information.

### Retrieve Documents (As Vector Store for Chain/Tool) parameters[#](#retrieve-documents-as-vector-store-for-chaintool-parameters "Permanent link")

*   **Qdrant Collection**: Enter the name of the Qdrant collection to use.

This Operation Mode includes one **Node option**, the [Metadata Filter](#metadata-filter).

### Retrieve Documents (As Tool for AI Agent) parameters[#](#retrieve-documents-as-tool-for-ai-agent-parameters "Permanent link")

*   **Name**: The name of the vector store.
*   **Description**: Explain to the LLM what this tool does. A good, specific description allows LLMs to produce expected results more often.
*   **Qdrant Collection**: Enter the name of the Qdrant collection to use.
*   **Limit**: Enter how many results to retrieve from the vector store. For example, set this to `10` to get the ten best results.

## Node options[#](#node-options "Permanent link")

### Metadata Filter[#](#metadata-filter "Permanent link")

Available in **Get Many** mode. When searching for data, use this to match with metadata associated with the document.

This is an `AND` query. If you specify more than one metadata filter field, all of them must match.

When inserting data, the metadata is set using the document loader. Refer to [Default Data Loader](../../sub-nodes/n8n-nodes-langchain.documentdefaultdataloader/) for more information on loading documents.

## Templates and examples[#](#templates-and-examples "Permanent link")

**🤖 AI Powered RAG Chatbot for Your Docs + Google Drive + Gemini + Qdrant**

by Joseph LePage

[View template details](https://n8n.io/workflows/2982-ai-powered-rag-chatbot-for-your-docs-google-drive-gemini-qdrant/)

**AI Voice Chatbot with ElevenLabs & OpenAI for Customer Service and Restaurants**

by Davide

[View template details](https://n8n.io/workflows/2846-ai-voice-chatbot-with-elevenlabs-and-openai-for-customer-service-and-restaurants/)

**Complete business WhatsApp AI-Powered RAG Chatbot using OpenAI**

by Davide

[View template details](https://n8n.io/workflows/2845-complete-business-whatsapp-ai-powered-rag-chatbot-using-openai/)

[Browse Qdrant Vector Store integration templates](https://n8n.io/integrations/qdrant-vector-store/), or [search all templates](https://n8n.io/workflows/)

## Related resources[#](#related-resources "Permanent link")

Refer to [LangChain's Qdrant documentation](https://js.langchain.com/docs/integrations/vectorstores/qdrant) for more information about the service.

View n8n's [Advanced AI](../../../../../advanced-ai/) documentation.

## Self-hosted AI Starter Kit[#](#self-hosted-ai-starter-kit "Permanent link")

New to working with AI and using self-hosted n8n? Try n8n's [self-hosted AI Starter Kit](../../../../../hosting/starter-kits/ai-starter-kit/) to get started with a proof-of-concept or demo playground using Ollama, Qdrant, and PostgreSQL.