# AI Powered Legal Assistant for Tax Codes

## Use Cases
- **Instant Tax Code Information:** Quickly answer user questions about Texas tax code legislation by querying a vector database.
- **Targeted Section Retrieval:** Directly search for specific sections of the tax code, using section number or chapter name.
- **AI-Powered Legal Chatbot:** Automate basic legal inquiries related to tax codes, providing chapter and section references in responses.

## How it works
1. **Download Tax Code PDF:** The workflow starts by downloading a ZIP file containing Texas tax code PDFs from a specified URL using the "HTTP Request" node.
2. **Extract and Partition:** The "Compression" node extracts the PDF files from the downloaded ZIP archive. The workflow then iterates through each PDF file. "Extract From File" node to extract text from each PDF. The extracted text is then parsed to identify and separate tax code sections.
3. **Data Chunking:** The content is split into smaller chunks using the "Content Chunking" node.
4. **Embedding & Vectorstore:** The "Embeddings Mistral Cloud" node generates embeddings using the Mistral.ai API. "Qdrant Vector Store" node stores the embeddings and corresponding text chunks in a Qdrant vector database for efficient similarity searches.
5. **Chatbot Interaction:** The "When chat message received" trigger starts the chatbot interaction. The "AI Agent" node uses the stored knowledge to answer user questions. It uses two custom tools, "Ask Tool" and "Search Tool", implemented as sub-workflows that use the Qdrant API.
6. **Qdrant API Tools:**
    - **Ask Tool:** Generates embeddings for the user's question using Mistral.ai and then queries the Qdrant collection using the "Qdrant Search API" to find relevant documents.
    - **Search Tool:** Uses the "Qdrant Scroll API" to filter the Qdrant collection based on a specified section number or chapter name.
7. **Response Generation:** Finally, the AI Agent formulates a response based on the retrieved tax code information and provides references to the specific chapter and section numbers.

## Services
- Mistral AI: Used for generating embeddings.
- Qdrant: A vector database used to store and search tax code sections based on semantic similarity.
- OpenAI: The AI Chat Model to make requests.
- Texas Statutes Website: Source of the TX.pdf.zip file.

## Hashtags
#n8n #automation #legaltech #chatbot #vectorstore
