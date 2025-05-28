# Pitch Deck Analysis and Q&A Chatbot

## Use cases:

- **Automated Pitch Deck Analysis:** Automatically extract key information from pitch decks (e.g., funding stage, investors, business model) and store it in a structured format (e.g., Airtable) for easy comparison and reporting.
- **AI-Powered Pitch Deck Q&A:** Create a chatbot that allows internal teams or external stakeholders to ask questions about specific pitch decks, leveraging a vector store for efficient information retrieval.
- **Venture Capitalist Deal Sourcing:** Streamline the process of sourcing and evaluating potential investments by automatically analyzing pitch decks and identifying promising startups based on pre-defined criteria.

## How it works:

1.  **Airtable Trigger:** The workflow starts when a new pitch deck PDF is uploaded to a specified Airtable base and table, specifically in the "File" column, if the "Executive Summary" column is empty.
2.  **Download Deck:** The PDF file is downloaded from the URL stored in the Airtable record.
3.  **PDF to Images:** The PDF is converted into individual images using Stirling PDF webservice. This service returns a ZIP file containing the images.
4.  **Extract & Sort Images:** The ZIP file is extracted, and the images are sorted by filename.
5.  **Transcribe to Markdown:** An AI vision model (OpenAI) transcribes each image into Markdown.
6.  **Combine Pages:** The Markdown content from all pages is combined into a single text.
7.  **Generate Report:** An Information Extractor node (Langchain) extracts key data points from the combined Markdown text based on a predefined schema and system prompt for a venture capitalist persona.
8.  **Update Airtable:** The extracted data is used to update the corresponding Airtable record with the extracted information.
9. **Vector Store Creation:** The transcribed pages are used to build a vector store in Qdrant, allowing for semantic search and Q&A capabilities. The documents are first split into chunks using a recursive character text splitter, then embedded using OpenAI embeddings.
10. **AI Chatbot:** When a chat message is received, the workflow identifies the company/startup mentioned in the message.  It queries the Qdrant vector store to find relevant information about that company's pitch deck and formulates an answer using OpenAI.

## Services:

-   **Airtable:** Used for storing and tracking pitch deck information, as well as triggering the workflow.
-   **Stirling PDF:** Used for converting PDF files into images.
-   **OpenAI:** Used for transcribing the PDF images to markdown and for the chatbot functionality.
-   **Qdrant:** Used as a vector store for semantic search and Q&A.

## Hashtags:

#n8n #automation #pitchdeck #AI #venturecapital
