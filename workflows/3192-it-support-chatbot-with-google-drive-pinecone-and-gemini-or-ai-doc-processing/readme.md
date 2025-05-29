# Google Drive Automation Workflow

A RAG-powered workflow that automates document processing from Google Drive and enables AI-powered query responses using Pinecone vector storage and Gemini embeddings.

## Use Cases

1. **Automated Document Knowledge Base**  
   Continuously ingest and index new PDF documents uploaded to a Google Drive folder, enabling instant searchability through semantic queries without manual processing.

2. **Customer Support Enhancement**  
   Provide customer service teams with AI-generated answers based on up-to-date documentation by automatically incorporating new policy PDFs into the response system.

3. **Research Paper Analysis**  
   Process academic papers deposited in a shared Drive folder to enable researchers to query technical content using natural language questions.

## How It Works

**Document Ingestion Pipeline:**
1. Triggers on new Google Drive file uploads in specified folder
2. Downloads and extracts text from PDF files
3. Cleans text (removes line breaks/special characters)
4. Splits content into 3,000-character chunks with 300-character overlaps
5. Generates embeddings using Google Gemini
6. Stores vectors in Pinecone for semantic search

**Query Processing Flow:**
1. User submits chat query via message trigger
2. Generates query embeddings with Gemini
3. Retrieves 3 most relevant document chunks from Pinecone
4. Constructs context-aware prompt with retrieved documents
5. Routes prompt to OpenRouter's Gemini 2.0 Flash model
6. Returns formatted markdown response using LangChain agent

## Services

- **Google Drive** (File storage & triggers)
- **Google Gemini** (Text embeddings)
- **Pinecone** (Vector storage)
- **OpenRouter** (LLM inference via Gemini Flash)

## Hashtags

#n8n #automation #RAG #AI #GoogleDrive
