# My Workflow

## Use cases:
- **Automated Document Summarization and Indexing:** Automatically summarizes and indexes new documents added to a specified folder for easy retrieval and knowledge management.
- **Kaggle Competition Assistant:** Helps data scientists in Kaggle competitions by researching, answering questions, and generating code based on competition requirements from chat input.
- **Chatbot with Contextual Awareness:** Creates a chatbot that can answer questions based on ingested documents and past conversations, providing a more informed and personalized experience.

## How it works:
1. **File Monitoring:** The workflow starts with a "Local File Trigger" node, which monitors a specified folder for new files.
2. **File Processing:**
   - When a new file is detected, the "Settings" node extracts the file path and filename.
   - The "Import File" node reads the content of the new file.
   - The "Get FileType" and "Extract from TEXT" node reads the document content and detects its file type.
   - The "Markdown" node converts HTML content into Markdown (if applicable).
   - The "Summarization Chain" node generates a summary of the document using the "refine" summarization method and then is passed to the "Merge" node.
3. **Document Embedding:** The "Recursive Character Text Splitter" splits the document into smaller chunks. Then, the "Default Data Loader" node prepares the data for further processing. The "Embeddings Ollama" node generates embeddings for each document chunk using the `mxbai-embed-large:latest` model.
4. **Vector Store Insertion:** The "Qdrant Vector Store" node stores the document embeddings along with the document content in a Qdrant collection named `test_rag`.
5. **Chat Interaction:**
   - A "When chat message received" node triggers the chat functionality with a specified webhook.
   - The "Vector Store Tool" node retrieves relevant documents from the Qdrant vector store based on the user's chat input.
   - The "Window Buffer Memory" node stores the conversation history.
   - The "AI Agent" node uses the retrieved documents, conversation history, and a system message to generate a response using Ollama language models. The agent is configured as a helpful and exacting data science LLM model and master Kaggle python programmer.
   - The "Ollama Chat Model3" (qwen3:8b) and "Ollama Chat Model4" (qwen3:8b) nodes are used to generate responses based on the context provided.

## Services:
- Qdrant (Vector Database)
- Ollama (Language Model)

## Hashtags:
#n8n #automation #langchain #RAG #chatbot
