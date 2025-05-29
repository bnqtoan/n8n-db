# Extract Recipe Using Tesseract

## Use cases:

- **Automated Expense Tracking:** Users can send photos of receipts to a Telegram bot, and the workflow automatically extracts the relevant information (store, date, items, total) to categorize and track expenses.
- **Digital Recipe Management:** Capture recipes from cookbooks or handwritten notes by taking a photo, then have the workflow extract the ingredients and instructions.
- **Data Extraction from Scanned Documents:** Automate the extraction of data from images of invoices, bills, or other documents received via Telegram to streamline accounting or record-keeping processes.

## How it works:

1.  **Telegram Trigger:** The workflow starts when a user sends a message (either text or a photo) to a Telegram bot.
2.  **Check for Image:** The workflow checks if the message contains an image (photo of a receipt).
    *   If an image is present:
        *   **Get Telegram File:** Retrieves the file ID of the image from Telegram.
        *   **Download Image:** Downloads the image from Telegram.
        *   **Extract Value From Image:** Extracts the text from the image using Tesseract OCR.
    *   If only text is present:
        *   **Extract Text Input:** Extracts the text from the Telegram message.
3.  **AI Categorizer:** Uses an AI model to categorize the input (either extracted from the image or directly from the text message) into categories like income or expenses. It also attempts to extract expense category and total amount.
4.  **AI Analyzer:** Uses an AI model to extract structured data from the categorized input.
5.  **Receipt Parser:** Parses the AI output into a structured JSON format, including store details, transaction information, item details, and summary information.
6.  **Format Summary Message:** Formats the extracted information into a human-readable message.
7.  **Check Invalid Input:** Checks if the extracted total amount is zero, likely indicating an error.
    *   If the input is invalid:
        *   **Send Error Message:** Sends an error message back to the user via Telegram.
    *   If the input is valid:
        *   **Send Expense Summary:** Sends a summary of the extracted expense information to the user via Telegram.

## Services:

-   Telegram API
-   OpenRouter API
-   Tesseract OCR

## Hashtags:

#n8n #automation #Telegram #OCR #ExpenseTracker
