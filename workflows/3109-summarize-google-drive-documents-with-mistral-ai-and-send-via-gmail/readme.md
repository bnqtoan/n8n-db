# Summarize Google Drive Documents with Mistral AI and Send via Gmail

## Use cases:

- **Quick Document Understanding:** Automatically summarize lengthy documents stored in Google Drive to quickly grasp their content without reading the entire file.
- **Information Archiving:** Generate concise summaries of documents for easier archiving and retrieval of information.
- **Automated Reporting:** Automatically summarize reports and send them via Gmail to stakeholders, saving time and effort in manual report creation.

## How it works:

1.  The workflow is triggered manually using the "When clicking ‘Test workflow’" node.
2.  The "Download uploaded File from Google Drive" node downloads a specific file from Google Drive, using the provided file ID.
3.  The "Summarization Chain to summarize a file" node takes the downloaded file (binary data) and uses a summarization chain to create a summary of the document. The `chunkSize` is set to 800, and `chunkOverlap` to 0.
4.  The "Mistral Cloud Chat Model" node is not connected to the main flow so is not being used.
5.  The "Send Summarized text to Gmail" node sends an email via Gmail to a specified recipient (`swot.ai25@gmail.com`). The email body includes the summarized text, dynamically inserted using the expression `{{ $json['response']['text'].replace(\"\\n\", \"<br>\") }}`.

## Services:

-   Google Drive
-   Mistral AI
-   Gmail

## Hashtags:

#n8n #automation #googledrive #mistralai #gmail
