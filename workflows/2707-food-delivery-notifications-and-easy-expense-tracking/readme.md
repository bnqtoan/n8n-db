# 外送記帳 (Delivery Accounting)

## Use cases:

- **Automated Expense Tracking:** Automatically extract delivery order details from Gmail and create records in a personal finance app (Moze) to track spending habits on food delivery services.
- **Real-time Order Notifications:** Receive instant notifications in a Slack channel whenever a new Uber Eats order confirmation email arrives, keeping team members or family informed.
- **Streamlined Budgeting:** Aggregate delivery expenses over time and gain insights into spending patterns for better budgeting and financial planning.

## How it works:

1.  **Email Trigger/Retrieval:** The workflow starts either with a manual trigger ("Click to Test Flow") or by automatically monitoring a Gmail inbox for new emails matching the subject "透過 Uber Eats 系統送出的訂單" ("Receive certain keyword Gmail Trigger" and "Get emails from Gmail with certain subject").
2.  **Looping through Emails:** The "Loop Over Items" node iterates through each email found.
3.  **Data Extraction:** The "Extract Price, Shop, Date, TIme" node uses regular expressions to extract key information such as the price, shop name, order date, and time from the email body.
4.  **Slack Notification:** The "Send to Slack with Block" node sends a formatted message to a specified Slack channel. The message includes the extracted order details and a button with a URL to directly add the expense to the Moze app with pre-filled information (amount, account, subcategory, store, and date).

## Services:

-   **Gmail:** Used to monitor and retrieve Uber Eats order confirmation emails.
-   **Slack:** Used to send order notifications and provide a quick link to add the expense to Moze.
-   **Moze:** (Inferred) A personal finance/expense tracking application that uses a custom URL scheme ("moze3://") to pre-populate expense details.

## Hashtags:

#n8n #automation #ubereats #expenseTracking #slack
