# YT RAG Agent Backend Transcript-format-pineconeUpsert

## Use cases:

- **YouTube Content Analysis and Knowledge Base Creation:** Automatically process YouTube video transcripts to create a searchable knowledge base within Pinecone for RAG (Retrieval Augmented Generation) applications.
- **Building a Q&A System for YouTube Channels:** Develop a system that allows users to ask questions about YouTube video content, retrieving relevant information from the Pinecone vector store created from the transcripts.
- **Content Summarization and Topic Extraction:** Summarize long YouTube videos or extract key topics by analyzing the transcript and leveraging the Pinecone vector store for semantic search.

## How it works:

This workflow automates the process of extracting, formatting, and storing YouTube video transcripts into a Pinecone vector store for use in RAG applications.

1.  **Data Retrieval from Airtable (Airtable):** The workflow starts by fetching YouTube video metadata and related information from an Airtable database.
2.  **Looping through Items (Loop Over Items):** The workflow iterates through each item retrieved from Airtable, processing them individually.
3.  **Fetching Data from Apify NinjaPost (Apify NinjaPost):** It uses the Apify NinjaPost to extract transcript data.
4.  **Waiting Period (Wait):** A "Wait" node introduces a delay, likely to avoid rate limits or ensure data availability before proceeding.
5.  **Fetching the JSON TS (Get JSON TS):** Extracts the JSON from the Transcript.
6.  **Converting JSON to String (JSON Stringifier):** Transforms the JSON data into a string format.
7.  **Editing Fields (Edit Fields):** The Edit Fields node transforms and prepares the data for Airtable.
8.  **Pushing Data back to Airtable (Airtable1):** The workflow updates Airtable with the new data.
9.  **Fetching Data from Airtable (Airtable2):** Fetches data from Airtable to start pushing data to Pinecone.
10. **Formatting transcript data (Transcript Processor):** Formats the transcript data for use in the vectorstore.
11. **Storing Vectors in Pinecone (Pinecone Vector Store):** The extracted text is then embedded using OpenAI and stored in a Pinecone vector store.
12. **Loading Data (Default Data Loader):** Uses Langchain's Default Data Loader.
13. **Splitting Text (Recursive Character Text Splitter1):** Recursively splits the data to fit into vectordb.
14. **Embedding Text with OpenAI (Embeddings OpenAI):** Embeddings creates vector embeddings to be pushed to Pinecone.

## Services:

-   Airtable
-   Apify NinjaPost
-   Pinecone
-   OpenAI

## Hashtags:

#n8n #automation #RAG #Pinecone #YouTube #Airtable
