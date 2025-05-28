# Extract spend details (template)

## Use cases:
- Automatically extract transaction details from Gmail emails (invoices and payment notifications) and save them to a Google Sheet for expense tracking and bookkeeping.
- Categorize and analyze spending habits by automatically parsing transaction data from multiple sources like credit card statements and online payment platforms.
- Consolidate financial information from various email sources into a single Google Sheet for easier financial management and reporting.

## How it works:

1.  **Get invoice/payment:** The workflow starts by monitoring two Gmail labels ("Label\_7885838942566773656" for invoices and "Label\_371722915607774622" for payments) for new emails every minute. It downloads attachments from the emails.
2.  **Extract invoice/payment:** Extracts data from PDF attachments contained in the incoming emails.
3.  **Invoice/Payment data:** Set the data to standardize the data, to include html, subject, date, text, label, and from email.
4.  **Switch:** The workflow uses a "Switch" node to route emails based on the sender address.  It checks if the sender is "service@pxbillrc01.cathaybk.com.tw" (Multiple payment info), "noreply@messaging.hsbc.com.tw" or "hello@crypto.com" or "taipeifubon.com.tw"(One payment info) or others (Invoices).
5.  **HTML:** If the email contains multiple payment info, it extracts the HTML content.
6.  **Split Out:** Splits the data into multiple items to process them separately.
7.  **Set data:** Assigns the email date, subject, content, and type to variables for each scenario.
8.  **Merge:** Merge those data to extract spend details.
9.  **Extract details:** Uses Language Model chains with Google Gemini or Groq to analyze the email content and extract relevant transaction details.
10. **Structured Output Parser:** Parses the language model output into a structured format based on a defined schema (date, service, details, amount, category, currency, card).
11. **Send:** Appends the extracted and parsed data to a specified Google Sheet.

## Services:

-   Gmail
-   Google Sheets
-   Google Gemini
-   Groq

## Hashtags:

#n8n #automation #finance #expenses #googlesheets
