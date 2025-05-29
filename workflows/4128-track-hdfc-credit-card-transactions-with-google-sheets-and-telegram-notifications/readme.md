# Credit Card Usage

## Use cases:

*   **Personal Finance Tracking:** Automatically track credit card transactions and receive instant notifications for every transaction, helping users monitor spending and identify potential fraud.
*   **Budgeting and Expense Management:** Log credit card transactions into a Google Sheet for categorization and analysis, aiding in budgeting and expense tracking.
*   **Real-time Fraud Detection:** Get immediate alerts for unusual transactions, enabling prompt action to prevent fraudulent activity.

## How it works:

1.  **Gmail Trigger:** The workflow starts by monitoring a specified Gmail inbox (HDFC Bank InstaAlerts) for new emails with updates and category updates.
2.  **Loop Over Items:** The workflow splits the Gmail inbox into individual items to be further analyzed in the workflow.
3.  **Google Sheets:** Reads the existing transaction data from a specified Google Sheet ("UPI Usage").
4.  **Map Used Article IDs:** Extracts all the Gmail IDs from the existing data stored in the Google Sheets.
5.  **Filter Only Unused IDs:** Filters the Gmail IDs from the trigger, that aren't already stored in the Google Sheet.
6.  **Extract the required data from mail:** Extracts key details such as the amount, recipient, date, and UPI reference number from the email body using regex.
7.  **Send notification to Telegram (Krishna & Pavi):** Sends a formatted Telegram message to two users (Krishna and Pavi) with the extracted transaction details.
8.  **Update Usage in Sheet Row:** Appends extracted details to the Google Sheets.

## Services:

*   Gmail
*   Google Sheets
*   Telegram

## Hashtags:

#n8n #automation #creditcard #transactiontracking #telegrambot
