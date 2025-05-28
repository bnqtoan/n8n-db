# Image Search Workflow with Google Drive, OpenAI, and Vector Store

## Use Cases

- **Image organization and retrieval:**  A user can upload images to Google Drive and automatically generate searchable metadata (keywords, color information) to easily find images based on content or characteristics.
- **Content moderation:** Automatically analyze images for specific content (e.g., using keywords) and take action based on the results.
- **Enhanced image understanding:**  Combine color data and semantic keywords to create richer representations of images for various AI applications.

## How it works

1. **Trigger:** The workflow is manually triggered using the "When clicking \"Test workflow\"" node.
2. **Image Retrieval:** A specific image is downloaded from Google Drive using the "Google Drive" node, based on its File ID.
3. **Image Processing:**
    - The "Get Color Information" node extracts color channel statistics from the image.
    - The "Resize Image" node resize the image to 512x512 pixels, only if it's larger.
4. **Keyword Generation:**
    - The "Get Image Keywords" node uses OpenAI's vision model to analyze the resized image and extract relevant keywords. It leverages the `gpt-4o` model to extract all semantic keywords describing the image including objects, lighting, mood, color, and techniques used.
5. **Data Combination:** The "Combine Image Analysis" node merges the color information and keywords.
6. **Document Creation:** The "Document for Embedding" node creates a structured document containing the extracted keywords, color channel information, and metadata (format, background color, source file name) for embedding.
7. **Vector Embedding:**
   - The "Default Data Loader" node prepares the document for embedding by setting metadata.
   - The "In-Memory Vector Store" node inserts the document into an in-memory vector store, using OpenAI Embeddings to generate vector representations of the image data and enables similarity searches.
8. **Search Image:**
    - The "Embeddings OpenAI1" node generates embeddings for search queries.
    - The "Search for Image" node performs a similarity search on the vector store based on text query.
## Services

- Google Drive
- OpenAI
- n8n In-Memory Vector Store

## Hashtags

#n8n #automation #imageprocessing #openai #vectorstore
