# Google Drive Document Summarization Workflow

## Use cases:

- **Summarize lengthy Google Docs:** Quickly generate summaries of long documents stored in Google Drive, such as reports, articles, or meeting notes.
- **Content extraction for research:** Extract key information from large documents for research purposes, saving time and effort in manual reading.
- **Meeting note summarization:** Automatically summarize meeting transcripts or notes stored in Google Drive to identify key action items and decisions.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it.
2.  **Google Drive:** Downloads a document from Google Drive based on the provided file ID.
3.  **Summarization Chain:** Uses the Langchain summarization chain to generate a summary of the document. It leverages an OpenAI Chat model, a default data loader, and a token splitter for efficient document processing.
4. **OpenAI Chat Model:** Uses the `gpt-4o-mini` model to generate the summery.
5. **Default Data Loader:** Converts the binary data to text understandable by the AI
6. **Token Splitter:** Splits the text to tokens to be process by the model

## Services:

*   Google Drive
*   OpenAI

## Hashtags:

#n8n #automation #googledrive #openai #summarization
