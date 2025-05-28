# AI Email Analyzer: Process PDFs, Images

## Use Cases

- **Automated Information Extraction:** Automatically extract and summarize key information from emails and their attachments (PDFs and images), saving time and improving efficiency.
- **Centralized Knowledge Base:** Store summaries of important emails and attachments in a Google Sheet, creating a searchable and accessible knowledge base for future reference.
- **Efficient Email Triage:** Quickly understand the content of emails with attachments without having to manually open and read each file, enabling faster prioritization and response times.

## How it Works

1.  **Email Trigger (IMAP):** The workflow starts by monitoring a specified email inbox for new emails. When a new email arrives, it triggers the workflow.
2.  **Contain attachments?:** Conditional to check if the email has attachments.
3.  **Get PDF and images attachments:** If attachments are present, it extracts them (supports PDFs and images).
4.  **Switch:** Categorize attachments based on file type (PDF or image).
5.  **PDF analysis:**
    *   **Upload attachments:** Saves the attachment to Google Drive.
    *   **Extract from PDF:** Extracts text from PDF attachments.
    *   **PDF Analyzer:** Uses a Large Language Model (LLM) to summarize the extracted PDF text.
    *   **Structured Output Parser:** Parses output to be in JSON format
    *   **Save summary PDF:** Saves the PDF summary to a Google Sheet.
6.  **Image analysis:**
    *   **Upload attachments:** Saves the attachment to Google Drive.
    *   **Analyze image:** Uses a Large Language Model (LLM) to analyze the image and generate a description.
    *   **Map image summaries:** map the content to the correct format
    *   **Save summary image:** Saves the image description to a Google Sheet.
7.  **Text analysis:**
    *   **Convert text:** Convert from HTML to Text
    *   **Email Summarization Chain:** Uses a Large Language Model (LLM) to summarize the body of the email.
    *   **Save summary text:** Saves the email summary to a Google Sheet.
8.  **Aggregate:** Combines the summaries of the email, PDFs, and images into a single data structure.
9.  **Parsing:** Parsing the output to be in JSON format
10. **Create final summary:** create the final summary
11. **Send final summary:** Sends the final summary to a Telegram Bot

## Services

*   **IMAP:** Used to access and monitor the configured email inbox.
*   **Google Sheets:** Used to store the summaries of emails, PDFs, and images.
*   **Google Drive:** Used to store the attachments
*   **OpenRouter:** Used to access LLM models for text summarization.
*   **Telegram:** Used to send the final summaries
*   **OpenAI:** Used to analyze images

## Hashtags

\#n8n \#automation \#emailanalysis \#pdfextraction \#imagesummary
