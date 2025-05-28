# BuildandQueryRAGOnTheFly

## Use Cases:

- **Real-time Question Answering via Telegram:** Users can send questions to a Telegram bot, and the workflow will query a knowledge base (RAG - Retrieval Augmented Generation) built on-the-fly from various data sources to provide relevant answers.
- **Dynamic Knowledge Base Updates:** Automatically update a vector database with new content from Google Docs on a scheduled basis, ensuring the RAG system stays current.
- **Multi-modal Content Processing:** Process text, audio, and image inputs from Telegram to generate context-aware responses using an AI agent and RAG.

## How it works:

1.  **Telegram Trigger:** The workflow is initiated by a message received via a Telegram bot (`Telegram Trigger` node).
2.  **Content Type Switch:** The `Switch` node determines the type of content received (text, audio, or image) and routes the flow accordingly.
3.  **Content Processing:**
    *   **Text:**  For text messages, the workflow proceeds directly to query the RAG system using AI Agent.
    *   **Audio:** Audio is sent to OpenAI for transciption, and is sent to AI Agent for processing.
    *   **Image:** Images are sent to OpenAI for image captioning and description, which is fed into AI Agent for processing.
4.  **AI Agent:** An `AI Agent` node takes the processed query and interacts with various tools:
    *   **Pinecone Vector Store:** Queries a Pinecone vector database to retrieve relevant documents.
    *   **Google Docs:**  Uses Google Docs as an additional tool for the AI agent.
    *   **Memory:** Uses the window buffer memory to hold data.
5.  **Scheduled Document Updates:**
    *   A `Schedule Trigger` node initiates a scheduled process.
    *   `Google Docs1` retrieves document content from Google Docs.
    *   `Edit Fields` sets additional context.
    *   `Pinecone Vector Store1` creates a vector embedding of document in pinecone.
    *   `Google Docs2` retrieves document.
    *   `Default Data Loader` loads data for vector store.
    *   `Recursive Character Text Splitter` splits the text into smaller chunks.
6.  **Response via Telegram:** Finally, the `Telegram` node sends the AI Agent's response back to the user via Telegram.

## Services:

*   Telegram
*   OpenAI
*   Pinecone
*   Google Docs

## Hashtags:

#n8n #RAG #AI #TelegramBot #Automation
