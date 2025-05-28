# AI-Powered Email Support and Document Indexing Workflow

## Use cases:

1.  **Automated Customer Support:** Automatically classify incoming emails, generate personalized responses for customer support inquiries, and draft emails for review, improving response times and efficiency.
2.  **Document Indexing and Retrieval:** When files are created or updated in Google Drive, automatically index their content in a Supabase vector store, enabling efficient semantic search and retrieval of information.
3.  **Knowledge Base Augmentation:** Continuously update a knowledge base stored in Supabase with new documents from Google Drive, ensuring the AI support agent has access to the latest information for generating responses.

## How it works:

This workflow automates email handling and document indexing using AI and several services.

1.  **Email Monitoring:** The workflow starts with the "Email Monitor" node, which listens for new emails in a specified Gmail inbox.
2.  **AI Email Classification:** Incoming emails are passed to the "AI Email Classifier" node, which uses a Large Language Model (LLM) via OpenAI to classify whether the email is a customer support inquiry or not.
3.  **Email Routing:** Based on the classification, the "Route Email" node directs support inquiries to the AI-powered response generation path.
4.  **AI Response Generation:** The "AI Response Generator" node leverages an LLM to generate a personalized response to the customer support email, using tools like a vector store to find relevant information.
5.  **Draft Creation:** The "Create Draft" node then drafts the email response in Gmail, ready for review and sending.
6.  **Google Drive Monitoring:** Separately, the workflow monitors Google Drive for "File Created" or "File Updated" events using Google Drive Trigger nodes.
7.  **File Identification:** The "Set File ID" node extracts the file ID from the triggering event.
8.  **Existing Data Handling**: "Delete Old Doc Rows" node deletes older versions of the file in Supabase.
9.  **File Downloading:** The "Download File" node downloads the relevant file from Google Drive.
10. **Text Extraction:** The "Extract Document Text" node extracts the text content from the downloaded file.
11. **Text Splitting:** The "Recursive Character Text Splitter" node splits the document to chunks.
12. **Data Loading:** The "Default Data Loader" node prepares data to be passed to the Vector Store.
13. **Vector Store Insertion:** The "Insert into Supabase Vectorstore" and "Embeddings OpenAI" nodes then convert the document content into vector embeddings and store them in a Supabase vector store for semantic search.
14. **Vector Store Tool Preparation:** Other nodes prepare a tool to access Supabase for the Email Responder node.

## Services:

*   Gmail
*   Google Drive
*   OpenAI
*   Supabase

## Hashtags:

#n8n #automation #AI #customersupport #documentindexing
