# Bank Statement to Markdown and Data Extraction

## Use cases:

*   **Automated Bank Statement Processing:** Converts bank statements from PDF (including scanned images) to Markdown format, enabling easier parsing and analysis of financial data.
*   **Data Extraction for Financial Analysis:** Extracts specific data points (e.g., deposit amounts, dates, descriptions) from bank statements for automated reporting, budgeting, or reconciliation purposes.
*   **Digital Archiving and Search:** Creates searchable Markdown versions of bank statements for efficient storage and retrieval of financial records.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger ("When clicking ‘Test workflow’").
2.  **Download Bank Statement:** Downloads a bank statement PDF from Google Drive using the "Get Bank Statement" node.
3.  **Split PDF into Images:** Converts the PDF into individual images using the Stirling PDF webservice via an HTTP Request. This is necessary because the vision model used later can't directly process PDFs.
4.  **Extract Zip File:** Unzips the images.
5.  **Images to List:** Converts the images into a list.
6.  **Sort Pages:** Sorts the images.
7.  **Resize Images for AI:** Resizes the images to a smaller size to optimize processing time and token usage for the vision model.
8.  **Transcribe to Markdown:** The "Transcribe to Markdown" node sends each image to the Google Gemini Chat Model, prompting it to transcribe the image into Markdown format, preserving table structures and text formatting.
9.  **Combine All Pages:** Combines the Markdown transcriptions from all pages into a single text.
10. **Extract All Deposit Table Rows:**  Uses the  Google Gemini Chat Model again with a structured prompt to extract deposit information.
11. **Output:** The workflow outputs a JSON array containing deposit details (date, description, amount).

## Services:

*   **Google Drive:** For retrieving the bank statement PDF.
*   **Stirling PDF:** A third-party webservice to convert PDFs to images.
*   **Google Gemini Chat Model:**  A multimodal model (Vision Language Model) to transcribe images to markdown and extract information.

## Hashtags:

#n8n #automation #workflow #bankstatement #pdf #markdown #googleDrive #gemini #llm #dataextraction
