# My workflow 3

## Use cases:

- **Automated Document Analysis and Summarization:**  A user submits documents through a web form. The workflow automatically analyzes the document, translates it if necessary, extracts key information, and provides a summarized analysis. This can be used to quickly understand the contents of legal documents, research papers, or financial reports.
- **Chatbot for Document Q&A:** The workflow allows users to upload documents and then interact with a chatbot to ask questions about the document's content. The system leverages vector embeddings and a retrieval-based question answering chain to provide relevant answers.
- **Enhanced Document Processing Pipeline:** Automatically process documents submitted via a form, leveraging AI to translate, analyze, and extract key information, and then store this data in a vector database for later retrieval via a chatbot.

## How it works:

1. **Form Submission:** The workflow is triggered when a user submits a form (`On form submission4`) with file attachments.
2. **File Splitting:** The attached files are split into individual binary items (`split the binary item`).
3. **Document Parsing:** Each file is sent to the LlamaIndex API for parsing (`Parsing the document`) to extract the text content.
4. **Parsing Status Check:** The workflow checks the status of the parsing job (`Check the parsing status`).
5. **Conditional Branching:** If the parsing is successful (`If2`), the workflow proceeds to retrieve the parsed markdown content (`Provide the markdown`). Otherwise, it loops back to check the status again.
6. **Translation & Analysis:** The markdown content is then translated to english language and send it to another agent to analyze (Translator Agent)
7. **Content Analysis & Vector Embedding:** The translated and the analyzed text is extracted and stored into the vector store (Pinecone Vector Store)
8. **Chatbot Interaction (Separate Flow):**
    - A separate flow is triggered when a user sends a message to the chatbot (`When chat message received`).
    - The message is used to query the Pinecone vector store (`Pinecone Vector Store1`) to retrieve relevant document chunks.
    - A question answering chain (`Question and Answer Chain`) uses the retrieved context to generate a response.
    - The response is then rephrased by an AI Agent and displayed to the user.
9. **Formatted Output and Email Notification:** The analyzed document is formatted to text content  and sent to the provided mail ID (Gmail)

## Services:

- **LlamaIndex API:** Used for parsing documents and extracting text content.
- **Google Gemini Chat Model:** Used as the language model for the chat agent to understand the document provided.
- **Pinecone:** A vector database used for storing document embeddings and enabling semantic search.
- **Mistral Cloud API:** Used for generating embeddings.
- **Gmail:** Used to send the analyzed document through mail to the user

## Hashtags:

#n8n #automation #documentanalysis #chatbot #langchain
