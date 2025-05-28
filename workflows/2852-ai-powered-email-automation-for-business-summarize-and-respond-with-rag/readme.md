# Email AI Auto-responder. Summerize and send email

## Use cases:

- **Automated Customer Support:** Automatically respond to customer inquiries received via email, providing quick answers and relevant information.
- **Lead Qualification:** Classify incoming emails to identify potential leads and prioritize responses accordingly, ensuring timely follow-up.
- **Internal Knowledge Base Integration:** Use a vector database to provide more accurate responses using internal documentation to answer the email.

## How it works:

1.  **Email Trigger (IMAP):** Listens for new emails arriving in a specified inbox (`info@n3witalia.com`).
2.  **Markdown:** Converts the HTML email body to markdown for better processing by the LLM.
3.  **Email Summarization Chain:** Generates a concise summary of the email content.
4.  **Email Classifier:** Classifies the email based on pre-defined categories (e.g., "Company info request").
5.  **Qdrant Vector Store:** Uses Qdrant (a vector database) to retrieve relevant information based on the email summary.
6.  **Write email:** Based on the request and the data retrieved from the Vector Store it generates an email reply.
7.  **Review email:** A model that reviews the response email and makes improvements.
8.  **Send Email:** Sends the generated email response to the sender of the original email.

Additionally, the workflow has a segment which vectorizes and stores data from google drive in Qdrant:

1.  **When clicking ‘Test workflow’**: Manually triggers the data vectorization flow.
2.  **Create collection**: Creates a new collection in Qdrant (you need to specify QDRANTURL and COLLECTION).
3.  **Refresh collection**: Deletes all vectors from the Qdrant collection to insert new ones.
4.  **Get folder**: Retrieves files from a google drive folder (You have to set it up).
5.  **Download Files**: Downloads the files that will be stored as vectors.
6.  **Default Data Loader**: Loads the document as binary data
7.  **Token Splitter**: Splits the text into smaller chunks.
8.  **Embeddings OpenAI**: Creates embeddings based on the splitted text.
9.  **Qdrant Vector Store1**: Stores the embeddings in Qdrant.

## Services:

-   **IMAP:** Email retrieval (using `info@n3witalia.com`).
-   **SMTP:** Email sending (using `info@n3witalia.com`).
-   **OpenAI / DeepSeek:** Language models for summarization, classification, review and generating email responses.
-   **Qdrant:** Vector database for storing and retrieving information.
-   **Google Drive:** For the knowledge base.

## Hashtags:

#n8n #automation #email #ai #autoresponder
