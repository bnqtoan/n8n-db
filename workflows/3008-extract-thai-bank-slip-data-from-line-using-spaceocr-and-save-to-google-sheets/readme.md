# LINE BOT - Google Sheets Record Receipt

## Use Cases

*   **Automated Receipt Logging:** Automatically extracts data from transaction receipts sent via LINE and records them in a Google Sheet for expense tracking or bookkeeping.
*   **Business Expense Management:** Enables businesses to streamline expense reporting by allowing employees to submit receipt images via LINE, which are then automatically processed and added to a central expense tracking sheet.
*   **Personal Finance Tracking:** Individuals can effortlessly keep track of their transactions by forwarding receipt images to the LINE Bot, which automatically populates their personal finance tracking sheet.

## How it Works

1.  **LINE Webhook Trigger:** The workflow is triggered when a user sends an image to the LINE Chat Bot via a webhook.
2.  **Image URL Extraction:** Extracts the image URL from the incoming LINE message.
3.  **Get Image to Binary:** The workflow retrieves the image from the extracted URL and converts it into binary data.
4.  **Upload to Google Drive:** Uploads the received image to a specified folder in Google Drive and give it a unique name.
5.  **OCR with Space OCR:** Sends the URL of the uploaded image to the Space OCR API for text extraction. This extracts the text content from the receipt image.
6.  **Extract Transaction Details:** The extracted text is parsed using a JavaScript code node to identify key transaction details like transaction type, date & time, sender and receiver names, sender and receiver bank information, sender and receiver account, transaction ID, amount, and fees.
7.  **Record in Google Sheets:**  Finally, the extracted transaction details are appended as a new row in a specified Google Sheet.

## Services

*   **LINE:** Used as the communication platform for receiving receipt images via a webhook.
*   **Google Drive:** Used for storing the receipt images.
*   **Space OCR API:** Used to perform Optical Character Recognition (OCR) on the receipt images to extract text.
*   **Google Sheets:** Used as the database to store the extracted transaction information.

## Hashtags

#n8n #automation #LINEBot #GoogleSheets #OCR #receipt #expenseTracking
