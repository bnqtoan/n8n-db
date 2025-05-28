# My Workflow

## Use cases:

1.  **Document Q\&A System:**  This workflow can be used to create a question-answering system based on a document stored in Google Drive. Users can ask questions via a webhook, and the workflow will retrieve relevant information from the document and provide an answer.
2.  **Company-Specific Knowledge Base:**  By customizing the `qdrantCollection` parameter with the company name the workflow can connect to different collection and answer question regarding a specific company.
3.  **AI-Powered Support Chatbot:** The workflow can serve as the backend for a support chatbot. It can retrieve information from relevant documentation, enabling the bot to answer user questions accurately.

## How it works:

1.  **Data Ingestion (Step 1):**
    *   The workflow is manually triggered or by a chat message.
    *   A PDF document is downloaded from Google Drive.
    *   The PDF content is split into chunks using a Recursive Character Text Splitter.
    *   The chunks are converted into embeddings using OpenAI Embeddings.
    *   The embeddings and text chunks are stored in a Qdrant Vector Store (named "crowd") for efficient retrieval.

2.  **Question Answering (Step 2):**
    *   A webhook receives a user's question.
    *   OpenAI Embeddings are used to convert the incoming message into a vector embedding.
    *   The Vector Store Retriever uses the embeddings to query the Qdrant Vector Store.
    *   The Retrieval QA Chain uses an OpenAI Chat Model to generate an answer based on the retrieved information and the user's question.
    *   The answer is sent back to the user via the Respond to Webhook node.

## Services:

*   Google Drive
*   Qdrant
*   OpenAI

## Hashtags:

#n8n #automation #langchain #questionanswering #chatbot
