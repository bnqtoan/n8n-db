# RAG: Context-Aware Chunking | Google Drive to Pinecone via OpenRouter & Gemini

## Use cases:

- **Enhanced Document Search:** Improve the accuracy and relevance of search results in large documents by providing context-aware chunks to a vector database. This allows for semantic search that understands the meaning behind the query.
- **Contextual Content Recommendation:** Suggest related sections or topics within a document based on the current content being viewed, improving user engagement and knowledge discovery.
- **Building a Knowledge Base:** Automatically extract and index information from Google Drive documents into a Pinecone vector database, enabling efficient retrieval of information for question-answering systems or chatbots.

## How it works:

This workflow automates the process of extracting text from a Google Drive document, splitting it into meaningful sections, enriching those sections with contextual information using an AI agent, and then converting them into vectors for storage in a Pinecone database.

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" trigger node.
2.  **Download Document:** The "Get Document From Google Drive" node downloads a Google Docs file from Google Drive and converts it into plain text.
3.  **Extract Text:** The "Extract Text Data From Google Document" node pulls the plain text from the downloaded file.
4.  **Split Into Sections:** The "Split Document Text Into Sections" node splits the document's text into smaller, more manageable sections, based on a custom separator.
5.  **Prepare for Looping:** The "Prepare Sections For Looping" node restructures the split data to be processed in a loop.
6.  **Loop Through Sections:** The "Loop Over Items" node iterates through each section of the document.
7.  **AI Agent - Prepare Context:** The "AI Agent - Prepare Context" node uses a Large Language Model (LLM) via OpenRouter to generate a short contextual summary for each section, based on the entire document content.
8.  **Concatenate the context and section text:** The "Concatenate the context and section text" node merges the context from the AI agent with the original text section, creating a context-rich chunk.
9.  **Vectorize and Store:** The "Pinecone Vector Store" node takes the combined context and section text and converts it into a vector embedding using Google Gemini. The embedding is then stored in a Pinecone vector database.
10.  **Recursive Character Text Splitter -> Default Data Loader:** This splits the text into smaller chunks to fit into the vector store.

## Services:

-   **Google Drive:** For accessing and downloading document files.
-   **OpenRouter:** For utilizing various Large Language Models (LLMs) through a unified API.
-   **Google Gemini (PaLM) API:** For generating text embeddings (vector representations) and context.
-   **Pinecone:** For storing and querying vector embeddings.

## Hashtags:

#n8n #RAG #VectorDatabase #Pinecone #GoogleDrive #Automation #LLM
