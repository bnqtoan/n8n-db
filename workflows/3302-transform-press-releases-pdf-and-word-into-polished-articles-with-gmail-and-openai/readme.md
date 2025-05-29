# "E-Mail to article/blog post" - converter

## Use cases:

- Automatically converts emails with attachments (PDFs, Word documents) into blog posts or articles, streamlining content creation for magazines or online platforms.
- Assists editors in quickly repurposing content received via email into a standardized article format for publication.
- Creates an automated workflow to handle incoming press releases or news submissions by converting them into ready-to-publish article drafts.

## How it works:

1.  **Gmail Trigger:** The workflow starts by monitoring a specified Gmail inbox for new emails from `*@somedia.ch`.
2.  **Code: delete all but pdf and word:** A code node filters the attachments, keeping only PDF and Word files.
3.  **has attachment?:** Checks if the email has attachments. If not, trigger `AI Article Writer 3`.
4.  **PDF or WORD?:** If an attachment exists, the workflow determines if it is a PDF or Word document.
5.  **PDF Extraction:** If the attachment is a PDF, the "Extrahiere aus PDF1" node extracts text from the PDF.
6.  **Google Drive:** If the attachment is a Word document, it uploads the file to Google Drive.
7.  **HTTP Request2:** It then creates a copy of the Google Drive file as a Google Docs document using the Google Drive API.
8.  **HTTP Request3:** Exports the Google Docs document to plain text.
9.  **AI Article Writer 1/2/3:** Uses a Large Language Model (LLM) via the "AI Article Writer 1/2/3" nodes to generate an article draft based on the extracted text or email body, following specific guidelines for the "Terra Grischuna" magazine, including Swiss spelling and a structured format.
10. **OpenAI self assesment/OpenAI self-assesment2:** The workflow uses an OpenAI model to self-assess the quality and completeness of the generated article by comparing it to the original input.
11. **reply to sender (pdf/word/no attachment):** Finally, the workflow replies to the original sender with the drafted article, the self-assessment, and the original message.

## Services:

-   Gmail
-   Google Drive
-   Google Docs API
-   Anthropic API (Claude 3.5 Sonnet)
-   OpenAI API

## Hashtags:

#n8n #automation #email #contentcreation #AI
