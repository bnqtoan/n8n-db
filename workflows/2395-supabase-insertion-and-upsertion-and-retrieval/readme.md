# My Workflow

## Use cases:
- **Chatbot for Document Q&A:** Build a chatbot that answers questions based on the content of a document (e.g., a book, a manual, or a set of articles) stored in Google Drive and a Supabase vector database.
- **Upserting existing Document Chunks:** Implement a system to update existing documents in a Supabase vector database by embedding their content using OpenAI embeddings and updating the corresponding records.
- **AI-Powered Document Retrieval:** Create a system that retrieves relevant documents from a Supabase vector database based on a user's query, using OpenAI embeddings for semantic search.

## How it works:
1. **Data Loading and Embedding:** The workflow starts by downloading a file (in this case, an EPUB file) from Google Drive using the "Google Drive" node. The "Default Data Loader" node loads the binary data, and the "Recursive Character Text Splitter1" splits the loaded document into smaller chunks for processing. The "Embeddings OpenAI Insertion" node uses OpenAI's text-embedding-3-small model to generate embeddings for these document chunks.
2. **Data Storage (Upsert or Insertion):** The "Insert Documents" node inserts the document chunks and their embeddings into a Supabase vector database table (named "Kadampa").
3. **Chat Interaction:** The "When chat message received" node acts as a trigger, capturing user queries.
4. **Retrieval and Contextualization:** The "Embeddings OpenAI Retrieval" node uses OpenAI to embed the query from the user. The "Retrieve by Query" node then performs a similarity search in the Supabase vector database using the `match_documents` function to find relevant document chunks.
5. **Question Answering:** The "Vector Store Retriever" retrieves the top 10 most relevant document chunks, passing it to the "Question and Answer Chain" node that combines the user's query with the retrieved document chunks to generate an answer using the "OpenAI Chat Model".
6. **Response Customization:** The "Customize Response" node extracts the text from the `response.text` property and sets it as the `output` value, the node is set to response to the trigger node "When chat message received".

## Services:
- Google Drive
- OpenAI
- Supabase

## Hashtags:
#n8n #automation #chatbot #vectorstore #supabase #openai #knowledgebase
