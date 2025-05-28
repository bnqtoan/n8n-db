# Extract expenses from emails and add to Google Sheet

## Use cases:

- **Automated Expense Tracking:** Automatically extract expense data from email receipts and log them into a Google Sheet for easy tracking and reporting.
- **Simplified Bookkeeping:** Streamline the bookkeeping process by automatically capturing and organizing expense information from various sources.
- **Real-time Budget Monitoring:** Keep a real-time record of expenses as they occur, enabling better budget monitoring and financial management.

## How it works:

1.  **Check for new emails:** The workflow starts by checking for new emails in the specified Gmail inbox using the "Check for new emails" node with credentials for a Gmail account.
2.  **Setup Variables:** A "Setup Variables" node defines a regular expression pattern (`(expenses|reciept)`) to search for in the email subject.
3.  **Check subject:** An "IF" node checks if the email subject matches the predefined regular expression pattern using the "regex" operation. This ensures only relevant emails are processed.
4.  **Read Receipts:** If the subject matches, the attached receipt (assuming it's the first attachment `attachment_0`) is sent to the "Read Receipts" node. This node uses the Mindee API to extract data from the receipt.
5.  **Set column data:** The "Set column data" node then extracts specific fields from the Mindee API response, such as Date, Category, Currency, and Amount. It also extracts the description from the email subject.
6.  **Add to Google Sheet:** Finally, the extracted data is appended as a new row to a specified Google Sheet using the "Add to Google Sheet" node.

## Services:

-   **Gmail (IMAP):** For accessing and reading emails.
-   **Mindee:** For extracting data from receipts.
-   **Google Sheets:** For storing and organizing expense data.

## Hashtags:

#n8n #automation #expenses #googlesheets #mindee
