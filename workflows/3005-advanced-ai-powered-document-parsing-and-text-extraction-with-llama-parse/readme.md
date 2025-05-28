# ✨🔪 Advanced AI Powered Document Parsing & Text Extraction with Llama Parse

## Use cases:

- **Automated Invoice Processing:** Automatically extract data from invoices received via email, store them in Google Sheets, and send summary notifications to a Telegram channel.
- **Document Summarization and Archiving:** Summarize lengthy documents and store both the original document and its summary in Google Drive for easy access and reference.
- **Smart Document Routing:** Classify documents (e.g., invoices vs. other document types) and trigger different processing paths based on their type.

## How it works:

1. **Email Monitoring:** The workflow starts by monitoring a specified Gmail inbox for new emails with attachments.
2. **Attachment Extraction and File Type Validation:** It extracts the attachments and checks if the file extension is supported by LlamaParse using the `HTTP Request` node to query LlamaParse's supported file extensions endpoint.
3. **LlamaParse Document Parsing:** The document is sent to LlamaParse for parsing. The `Parse Document with LlamaParse` node uploads the file to the LlamaParse API, specifying a webhook URL to receive the parsed content.
4. **Document Classification and Summarization:** The parsed document (in Markdown format) is received via a `Webhook`. It is then classified using the `Classify Parsed Document` node. Depending on the document type:
   - Invoices are routed to `Extract Invoice Details as JSON` node which extracts invoice details and saves them to Google Sheets and sends notifications to Telegram.
   - Other documents are routed to a summarization node and then saved to Google Drive and Telegram.
5. **Data Storage and Notification:** The extracted data and summaries are saved to Google Sheets and Google Drive.  Summaries and key details are also sent to a Telegram channel for quick review.
6. **Error Handling:** The workflow includes error handling, sending Telegram notifications if summarization or invoice extraction fails.

## Services:

- **Gmail:** For receiving emails with attachments.
- **LlamaParse:** For parsing documents and extracting text.
- **Google Sheets:** For storing extracted data in a structured format.
- **Google Drive:** For archiving original documents and summaries.
- **Telegram:** For sending notifications and summaries.
- **OpenAI:** For summarization and JSON extraction tasks.

## Hashtags:

#n8n #automation #documentparsing #llm #invoiceprocessing #workflow
