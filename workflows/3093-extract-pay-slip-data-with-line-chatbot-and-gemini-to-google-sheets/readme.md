# Line Chatbot: Extract Text from Pay Slip with Gemini

## Use cases:

- **Automated Expense Tracking:** Employees can submit their pay slips via Line, and the chatbot automatically extracts key information (like date, amount, and sender) to populate an expense tracking spreadsheet.
- **Simplified Payroll Verification:**  Employees can quickly verify the details of their pay slip by sending an image to the chatbot and receiving a structured summary of the data.
- **Document Digitization:** Convert paper-based pay slips into structured digital data for archival and analysis.

## How it works:

1.  **Line Messaging API (Webhook):** The workflow is triggered when a user sends a message (text or image) to the Line chatbot.
2.  **Message Type Classification:** The workflow determines whether the incoming message is text or an image.
3.  **Text Message Processing (if text):**
    *   The text message is sent to **Google Gemini** for processing.
    *   The **Langchain Agent** processes the text, and the extracted information is sent back to the user via Line.
4.  **Image Message Processing (if image):**
    *   The workflow retrieves the image from the Line server using the **Line: Get Image** node.
    *   **Google Gemini** analyzes the image of the pay slip.
    *   **Langchain ChainLLM** extracts structured data (Status, From, To, Date, Amount) from the analyzed image.
    *   The extracted data is formatted as JSON.
    *   **Google Sheets:** The extracted data is appended to a specified Google Sheet.
    *   **Line: Response to User:** The extracted information is sent back to the user via a Line message and also saved into Google Sheet.

## Services:

-   Line Messaging API
-   Google Gemini
-   Google Sheets
-   Langchain

## Hashtags:

#n8n #automation #chatbot #line #gemini #ocr #payslip #googlesheets
