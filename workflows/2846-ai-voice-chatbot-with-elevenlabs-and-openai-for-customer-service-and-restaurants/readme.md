# Voice RAG Chatbot with ElevenLabs and OpenAI

## Use cases:

- **Customer Service Chatbot:**  Allows businesses to create a voice-based chatbot that answers customer inquiries using information retrieved from a knowledge base (Google Drive documents), providing instant support and reducing the workload on human agents.

- **Interactive Voice Assistant for Internal Knowledge:**  Enables employees to ask questions about internal documentation and policies stored in Google Drive, facilitating quick access to information and improving employee productivity.

- **Voice-Enabled FAQ System:** Creates a voice interface for frequently asked questions, allowing users to get answers to common queries hands-free.

## How it works:

This workflow builds a Retrieval-Augmented Generation (RAG) chatbot that can be integrated with ElevenLabs to provide voice responses. Here's a breakdown:

1. **Initialization:**  The workflow is manually triggered by clicking 'Test workflow'. It then creates (or attempts to create) a collection in Qdrant, a vector database and clears the existing collection.

2. **Document Loading and Vectorization:**
   - Documents (e.g., company information, FAQs) are stored in a specified Google Drive folder.
   - The workflow retrieves these documents.
   - The documents are downloaded, converted to text, and then split into smaller chunks using a Token Splitter.
   - The text chunks are embedded using OpenAI's Embeddings API, creating vector representations of the text.
   - These vectors, along with the original text, are stored in the Qdrant vector database.

3. **Voice Input via ElevenLabs:**
   - An agent in ElevenLabs sends a POST request to the n8n webhook when a user asks a question to the voice agent.
   - The 'Listen' webhook node receives the question.

4. **Question Processing and Retrieval:**
   - The AI Agent node receives the question text from the webhook and uses the vector store tool.
   - The `Vector Store Tool` node searches the Qdrant vector database for the most relevant documents based on the question.

5. **Response Generation:**
   - The OpenAI Chat Model receives the question and the retrieved documents from the vector store.
   - It generates a concise and informative answer based on the retrieved information.

6. **Voice Output via ElevenLabs:**
   - The response is sent back to ElevenLabs via the "Respond to ElevenLabs" node.
   - ElevenLabs converts the text response into speech, delivering the answer to the user.

## Services:

- **ElevenLabs:** Voice generation and agent platform.
- **OpenAI:** Language model and embeddings API.
- **Qdrant:** Vector database for storing and retrieving document embeddings.
- **Google Drive:** Document storage.

## Hashtags:

#n8n #RAG #chatbot #voicebot #automation #ElevenLabs #OpenAI #Qdrant #GoogleDrive
