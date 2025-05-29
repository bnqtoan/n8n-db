# AI PDF Summarizer Workflow

## Use cases:

- **Automatic document summarization:** Automatically generate summaries of uploaded PDF documents for quick information consumption.
- **Content analysis and topic extraction:** Extract key topics and insights from PDFs, useful for research, content curation, or knowledge management.
- **Streamlined document processing:** Integrate PDF summarization into automated document workflows, such as processing reports, articles, or legal documents.

## How it works:

1.  **Webhook trigger (POST /ai\_pdf\_summariser):** The workflow starts when a POST request is sent to the `/ai_pdf_summariser` webhook endpoint with a PDF file.
2.  **File Reference (File Ref):** Receives the PDF file sent via the webhook.
3.  **File Size Check (Get Filesize):** Extracts file size.
4.  **File Validation (Is Valid File?):** Validates the PDF based on filesize (<=10MB) and page count (<=20).
    *   If the file is invalid, a 400 error is returned to the user (400 Error).
5.  **PDF Text Extraction (Extract from File):** Extracts text from the valid PDF file.
6.  **Information Extractor:** Uses the Gemini API to breakdown the PDF into topics and provide insights for each.
7.  **Format Response:** Formats the extracted information into a Markdown-formatted summary.
8.  **Success Response (Success1):** Returns a 200 OK response containing the formatted summary.
9.  **Error Handling:** if there is an issue with the Information Extractor or Open AI Chat Model. a 500 error is returned to the user (500 Error).

## Services:

-   **Google Gemini API**
-   **OpenAI API**

## Hashtags:

#n8n #automation #PDFsummarization #documentprocessing #AI
