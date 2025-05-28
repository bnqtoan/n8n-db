# Expense Tracker App

## Use cases:

- **Automated Expense Logging:** Automatically extract expense details from receipts uploaded through a Typeform and store them in Airtable, eliminating manual data entry.
- **Real-time Expense Tracking:** Track expenses as they occur by submitting receipts via a Typeform, enabling immediate analysis and budget monitoring.
- **Digital Record Keeping:** Create a digital repository of expense receipts and associated data in Airtable, making it easier to search, filter, and analyze spending patterns.

## How it works:

1.  **Get Receipt (Typeform Trigger):** The workflow starts when a new submission is received via a Typeform. It's configured to listen for submissions to a specific form ID.  The URL of the uploaded receipt image is captured from the Typeform response.
2.  **Get Image (HTTP Request):** An HTTP Request node retrieves the receipt image from the URL obtained in the previous step. The response is configured to return the image file.
3.  **Extract Information (Mindee):** The Mindee node extracts information (amount, merchant, date, time, and category) from the receipt image using the Mindee Receipt API.
4.  **Set Information (Set):** This node structures the extracted information from Mindee, along with the original receipt URL from Typeform, into a standardized format for storage.
5.  **Store Information (Airtable):** The structured expense data is then appended as a new record to an Airtable table called "Expenses".

## Services:

-   Typeform
-   Mindee Receipt API
-   Airtable

## Hashtags:

#n8n #automation #expensetracking #receiptprocessing #airtable
