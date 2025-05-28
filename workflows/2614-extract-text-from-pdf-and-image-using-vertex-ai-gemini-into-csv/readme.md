# Extract text from PDF and image using Vertex AI (Gemini) into CSV

## Use cases:

- **Automated Bank Statement Processing:** Automatically extract transaction data from bank statements (PDF or image) and categorize transactions for expense tracking or reconciliation.
- **Receipt Data Extraction:** Process receipts (images or PDFs) to extract key information like date, amount, vendor, and categorize expenses for accounting purposes.
- **Invoice Automation:** Automatically extract data from invoices to populate accounting systems or create reports.

## How it works:

1.  **Get PDF or Images:** Triggers when a new PDF or image file is uploaded to a specific folder in Google Drive.
2.  **Route based on PDF or Image:** Determines if the uploaded file is a PDF or an image based on its MIME type.
3.  **Download PDF / Download Image:** Downloads the file from Google Drive.
4.  **Extract data from PDF:** Extracts text from the PDF file using the built-in "Extract from File" node.
5.  **Vertex A.I. extract text:** Extracts the data from the image using Vertex A.I. (Gemini)
6.  **Send data to A.I.:** Sends the extracted data to OpenRouter, using the `meta-llama/llama-3.1-70b-instruct:free` model, with a prompt to read the content, extract transaction details, categorize them, and return the result as CSV data.
7.  **Convert to CSV / Convert to CSV2:** Converts the AI-processed data into a CSV file format.
8.  **Upload to Google Drive / Upload to Google Drive1:** Uploads the generated CSV file to a designated folder in Google Drive.

## Services:

*   Google Drive
*   OpenRouter
*   Vertex AI (Gemini)

## Hashtags:

#n8n #automation #OCR #PDF #ImageRecognition #CSV #VertexAI #Gemini #OpenRouter #GoogleDrive
