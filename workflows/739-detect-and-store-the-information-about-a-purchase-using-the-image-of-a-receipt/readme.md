# Expense Receipt to Airtable Workflow

## Use cases:

- **Automated Expense Tracking:** Automatically extract data from expense receipts (e.g., restaurant bills, store purchases) and store it in an Airtable database for easy tracking and analysis.
- **Real-time Budget Monitoring:** Monitor spending habits by automatically updating an Airtable database with each expense, allowing for real-time budget tracking.
- **Simplified Expense Reporting:** Streamline expense reporting by automatically populating an Airtable database with receipt data, which can then be used to generate reports and summaries.

## How it works:

1.  **Webhook:** The workflow starts when a POST request is sent to a specific webhook URL. The webhook is configured to receive binary data.
2.  **Mindee:** The Mindee node receives the binary receipt data from the Webhook. It uses the Mindee API to parse the receipt and extract relevant information such as the category, date, currency, locale, merchant, time, and total amount. The Mindee API requires the use of credentials.
3.  **Airtable:** The Airtable node receives the extracted data from Mindee and appends it as a new record to a specified table in an Airtable base. The Airtable node requires credentials and is configured to send the category, date, currency, locale, merchant, time, and total.
4.  **Set:** The Set node receives data from Airtable and creates a customized message of the inserted expense.

## Services:

-   **Mindee API:** Used for parsing and extracting data from receipt images.
-   **Airtable:** Used as a database to store and manage the extracted receipt data.

## Hashtags:

#n8n #automation #expenseTracking #receiptScanning #airtable
