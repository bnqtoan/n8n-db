# BillBot

## Use cases:

- **Automated Expense Tracking:** Automatically extract data from receipts sent via Telegram, categorize them, and record them in a Google Sheet for easy expense tracking.
- **Real-time Expense Notifications:**  Receive instant SMS notifications when a new receipt is processed and added to the expense spreadsheet.  This is useful for budget monitoring and awareness.
- **Team Expense Management:** Enables a team to submit receipts via Telegram, automatically parsing the data and adding it to a central expense sheet, simplifying collaborative expense management.

## How it works:

1.  **Get receipts from bot (Telegram Trigger):** The workflow starts when a user sends a message (containing a receipt image) to a Telegram bot. The bot is configured to download the file.
2.  **Parse details from receipt (HTTP Request):** The image is sent to the Mindee API (expense_receipts/v2/predict) to extract information such as the merchant, date, time, amount, and category.
3.  **Set relevant data (Set):** This node takes the data parsed from the receipt and sets variables for use in subsequent nodes. This includes extracting the category, date, merchant, time, amount, currency, and submitter's name from the Telegram message.
4.  **Add to expense record (Google Sheets):**  The extracted data (category, date, merchant, time, amount, currency, and submitter) is appended as a new row to a specified Google Sheet.
5.  **Send confirmation (Telegram):** A confirmation message is sent back to the user on Telegram, confirming that the bill has been added, along with key details like amount, merchant, date, time and category.
6.  **Send SMS notification (Twilio):** An SMS notification is sent to a predefined number, indicating that a new receipt has been submitted, including the amount, currency, submitter's name, and a link to the Google Sheet.

## Services:

*   **Telegram:** For receiving receipt images and sending confirmation messages.
*   **Mindee API:** For parsing receipt data (merchant, date, amount, etc.).
*   **Google Sheets:** For storing and organizing the extracted expense data.
*   **Twilio:** For sending SMS notifications.

## Hashtags:

#n8n #automation #expenseTracking #receiptParsing #TelegramBot
