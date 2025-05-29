# Complete RAG from PDF with Mistral OCR

## Use cases:

- **Document Understanding:** Enables users to ask questions and receive answers based on the content of PDF documents, like research papers, legal contracts, or technical manuals, by using Mistral OCR for text extraction and Gemini AI for question answering.
- **Automated Information Retrieval:** Automatically extract, store, and retrieve information from a large number of PDF documents, making it easier to find relevant information without manually searching each document.
- **Chatbot Knowledge Base:** Build a chatbot that can answer questions based on a collection of PDF documents, providing users with a convenient way to access information.

## How it works:

1. **Initialization:**
   - Optionally creates a Qdrant collection to store vector embeddings of the PDF content.
   - Clears the existing Qdrant collection.
2. **PDF Processing:**
   - Retrieves a list of PDF files from a specified Google Drive folder.
   - For each PDF file:
     - Downloads the PDF file from Google Drive.
     - Uploads the PDF to Mistral AI for OCR processing.
     - Gets a signed URL to access the OCR'd PDF.
     - Triggers Mistral DOC OCR to extract text content from the PDF using OCR.
     - Parses the OCR response to extract the markdown content.
3. **Vector Embedding and Storage:**
   - Splits the extracted text into chunks.
   - Generates vector embeddings for each chunk using OpenAI.
   - Stores the embeddings and corresponding text in a Qdrant vector database.
4. **Question Answering (RAG):**
   - When a chat message is received:
     - Retrieves relevant text chunks from the Qdrant vector database based on the user's query.
     - Uses the retrieved text chunks and the user's query to generate an answer using Google Gemini AI.

## Services:

- **Google Drive:** Used to retrieve PDF files.
- **Mistral AI:** Used for OCR (Optical Character Recognition) to extract text from PDFs.
- **OpenAI:** Used for generating text embeddings.
- **Qdrant:** A vector database used for storing and retrieving text embeddings.
- **Google Gemini AI:** Used for question answering and text summarization.

## Hashtags:

#n8n #automation #RAG #OCR #Qdrant #GeminiAI
