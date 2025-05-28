# Extract Data from YAPE Receipts via Telegram OCR and Store in Google Sheets

## Use Cases

1.  **Automated Expense Tracking:** Automatically extract transaction details (amount, date, vendor) from YAPE receipts sent via Telegram and store them in a Google Sheet for expense tracking and budgeting.
2.  **Business Receipt Management:**  Businesses can automate the process of collecting and organizing receipts from employees using YAPE. The workflow extracts data from the receipts and saves it to a shared Google Sheet for accounting purposes.
3.  **Personal Finance Management:** Individuals can easily track their spending habits by forwarding their YAPE receipts to a Telegram bot. The workflow automatically extracts and categorizes the data for easy analysis.

## How it Works

This workflow automates the process of extracting data from YAPE receipts sent via Telegram, using OCR and AI to process the information, and then storing it in a Google Sheet.

1.  **Telegram Listener (🛎️Telegram Listener):** Listens for incoming messages in a Telegram bot.
2.  **Message Classifier (🔀 Message Classifier):** Determines the type of message received. It checks if the message is a command or a receipt image.
3.  **Start Command Handle (🔀 Start Command Handle):** If the message is a `/start` command, it triggers the Send Welcome Message node.
4.  **Send Welcome Message (✉️ Send Welcome Message):** Sends a welcome message to the user via Telegram.
5.  **Select Best Quality Image (🗂️Select Best Quality Image):** Selects the best quality image from the received Telegram message (if multiple images are present).
6.  **Download High-Quality Image (🖼️Download High-Quality Image):** Downloads the image attachment from Telegram.
7.  **Retrieve Image Attachment (🖼️Retrieve Image Attachment):** Retrieves the image attachment from Telegram if not using the select best quality image
8.  **Extract Text with OCR (📄 Extract Text with OCR):** Uses OCR (Optical Character Recognition) via an OpenAI integration to extract text from the image.
9.  **AI Data Processor (🤖 AI Data Processor):** Processes the extracted text using an AI agent, with a model configured in the AI Model for Processing node, to identify relevant information (date, amount, vendor, etc.) from the receipt.
10. **AI Model for Processing (🧠 AI Model for Processing):** Is used to process the AI Data Processor to find relevant information from the receipt.
11. **Find Google Sheet in Drive (🔍 Find Google Sheet in Drive):** Finds the specified Google Sheet in Google Drive.
12. **Prepare Data for Insertion (🔄 Prepare Data for Insertion):** Formats the extracted data into the required format for insertion into the Google Sheet.
13. **Insert Data into Google Sheets (📑 Insert Data into Google Sheets):** Inserts the processed data into the specified Google Sheet.
14. **Send Analysis Result to User (✉️ Send Analysis Result to User):** Sends a confirmation message to the user via Telegram, indicating that the data has been successfully extracted and stored in the Google Sheet.

## Services

*   Telegram
*   Google Sheets
*   Google Drive
*   OpenAI

## Hashtags

#n8n #automation #OCR #Telegram #GoogleSheets #YAPE #Receipts #AI
