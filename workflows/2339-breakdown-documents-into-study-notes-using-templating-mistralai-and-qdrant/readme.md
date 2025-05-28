# AI-Powered Document Note Generator

## Use cases:

- **Automated Study Guide Creation:** Automatically generate study guides with quizzes, essay questions, and glossaries from lecture notes or textbooks.
- **Rapid Briefing Document Generation:** Quickly create briefing documents outlining the key facts and insights from research papers or news articles for efficient information consumption.
- **Timeline Creation from Historical Texts:** Generate timelines with key events and character summaries from historical documents, aiding in understanding chronological relationships.

## How it works:

1.  **File Monitoring:** The workflow starts with the "Local File Trigger" node, which monitors a specified folder for new files. When a new file is added, it triggers the workflow.
2.  **File Processing:** The "Import File" node reads the file's content, and the "Get FileType" node determines the file type (PDF, DOCX, or TEXT). An appropriate "Extract from" node extracts the content.
3.  **Content Preparation:** The "Prep Incoming Doc" node formats the extracted text and saves it into a data variable.
4.  **Summarization and Vectorization:** The "Summarization Chain" node generates a summary of the document, and the "Qdrant Vector Store" node stores the document content as embeddings in a vector database for later retrieval.
5.  **Template-Based Generation:** The "Get Doc Types" node provides a list of document templates (Study Guide, Briefing Doc, Timeline). The workflow then loops through each template.
6.  **AI-Powered Content Generation:** For each document type, an AI agent (defined by a chain of "Mistral Cloud Chat Model", "Interview", "Vector Store Retriever", "ChainRetrievalQa" and "Generate" nodes) generates relevant content using the document summary and the vector database for context. The Interview node askes questions based on the context. The "ChainRetrievalQa" node generates the template.
7.  **Output:** The generated content is then converted to a binary file using the "To Binary" node and saved to a specified folder using the "Export to Folder" node.

## Services:

-   **Mistral Cloud API:** Used for text summarization, question generation, and document generation.
-   **Qdrant:** A vector database used for storing and retrieving document embeddings.

## Hashtags:

#n8n #automation #AI #documentgeneration #langchain
