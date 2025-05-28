# Extract data from PDF with Claude 3.5 Sonnet or Gemini 2.0 Flash

## Use cases:

- **Invoice Data Extraction**: Automatically extract VAT numbers from a batch of invoices stored in Google Drive for accounting purposes.
- **Legal Document Analysis**: Quickly identify and extract specific clauses or data points from legal documents or contracts stored as PDFs in Google Drive.
- **Research Paper Summarization**: Extract key findings, methodologies, or data points from scientific research papers in PDF format to accelerate research.

## How it works:

1.  **Trigger**: The workflow is manually triggered using the "When clicking 'Test workflow'" node.
2.  **Define Prompt**: Sets the prompt for extracting information from the PDF. The prompt specifies what data should be extracted (e.g., VAT numbers for each country).
3.  **Google Drive**: Downloads a PDF file from Google Drive using the provided file ID. The Google Drive node requires authentication.
4.  **Extract from File**: Converts the downloaded PDF file into a base64 encoded string. This is necessary for sending the PDF content to Claude and Gemini API.
5.  **Call Claude 3.5 Sonnet with PDF Capabilities**: Sends the base64 encoded PDF content and the defined prompt to the Anthropic Claude 3.5 Sonnet API to extract the information.
6.  **Call Gemini 2.0 Flash with PDF Capabilities**: Sends the base64 encoded PDF content and the defined prompt to the Google Gemini 2.0 Flash API to extract the information.

## Services:

*   **Google Drive**: For storing and retrieving PDF documents.
*   **Anthropic Claude API**: For extracting information from PDF documents using natural language processing.
*   **Google Gemini API**: For extracting information from PDF documents using natural language processing.

## Hashtags:

#n8n #automation #pdfextraction #llm #googledrive
