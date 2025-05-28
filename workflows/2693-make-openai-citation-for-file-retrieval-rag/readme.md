# Make OpenAI Citation for File Retrieval RAG

## Use cases:

- **Automated Document Analysis:**  Automatically generate citations and sources for information extracted from documents stored in a vector store when using an OpenAI Assistant. This is useful for research, report generation, or content creation.
- **Improved Chatbot Accuracy:** Enhance chatbot responses by providing clear citations to the documents used to generate the response, increasing user trust and enabling verification of information.
- **Dynamic Knowledge Base Updates:** As new documents are added to the vector store, the workflow automatically incorporates them into the citation process, ensuring the information remains current.

## How it works:

1.  **Trigger:** The workflow is initiated by a "Chat Trigger" node, simulating a user interaction via a chat button within n8n.
2.  **OpenAI Assistant:** The workflow calls an OpenAI Assistant configured with file retrieval capabilities and a vector store containing the necessary documents.
3.  **Get Thread Content:** The workflow retrieves the thread content from OpenAI to access citations.
4.  **Split:** The workflow proceeds to split the data in differents nodes in order to iterate each citation text and filenames.
5.  **Retrieve File Information:** It then retrieves the file name from a file ID via the OpenAI API.
6.  **Regularize Output:** The workflow will then parse the id, the filename and the text that will be replaced.
7.  **Aggregate** all the information.
8.  **Format Output:** A code node then find the texts that must be replaced with the corresponding filenames and then apply Markdown tags.
9.  **Optional Markdown to HTML:** An optional step converts the markdown output to HTML
10. **Result:** The final output includes the assistant's response with correctly formatted citations linked to the source files.

## Services:

*   OpenAI API (for Assistants, File Retrieval, and Vector Store interaction)

## Hashtags:

#n8n #OpenAI #RAG #Citation #Automation
