# Gmail to Vector Embeddings with PGVector and Ollama

## Use cases:

*   **Build a knowledge base from your Gmail:** Index all your emails to create a searchable repository of information, leveraging semantic search to find relevant emails based on their content, not just keywords.
*   **Improve Customer Support Efficiency:** Automatically analyze customer support emails, identify recurring issues, and suggest relevant solutions based on email content similarity.
*   **Personalized Information Retrieval:** Search your email archive for specific topics or projects, retrieving emails related to those topics based on the semantic meaning of the query.

## How it works:

1.  **Trigger:** The workflow can be manually triggered to perform an initial bulk import or automatically triggered every minute to process new emails in your Gmail inbox using the "Gmail Trigger" node.
2.  **Initial Setup (Manual Trigger):** If manually triggered, the workflow creates a table named `emails_metadata` in a PostgreSQL database to store structured email metadata.
3.  **Date Range Generation (Manual Trigger):** If manually triggered, the workflow calculates the date range from the Gmail account creation date until now, split by week intervals.
4.  **Email Extraction:** The workflow retrieves emails from Gmail within defined date ranges.
5.  **Email Data Extraction:** The "Extract email fields" node parses the email content, extracting key information like sender, recipient, subject, body, attachments, and IDs.
6.  **Data Storage:**
    *   The extracted email metadata is stored in the `emails_metadata` table in the PostgreSQL database using the "Store structured" node.
    *   The email text is then converted into vector embeddings using the `Embeddings Ollama` node with the `nomic-embed-text:latest` model, and stored in a table named `emails_embeddings` in a PostgreSQL database via the "Store vectorized" node.
7.  **Looping (Manual Trigger):**  The workflow loops over each week's interval to fetch and process the relevant batch of emails.
8.  **Conditional Execution:** After processing all emails, the workflow checks if it was manually triggered.  If so, it does nothing ("No Operation, do nothing" node); otherwise, it continues looping to check for new emails via the "Gmail Trigger".

## Services:

*   Gmail API
*   PostgreSQL with PGVector extension
*   Ollama

## Hashtags:

#n8n #automation #gmail #vectorembeddings #pgvector #ollama
