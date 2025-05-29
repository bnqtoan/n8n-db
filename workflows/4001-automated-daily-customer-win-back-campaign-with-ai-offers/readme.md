# Daily Churn Check and Win-Back Offer Automation

## Use cases:

- **Proactive Customer Retention:** Automatically identifies customers at high risk of churn and sends them personalized win-back offers to encourage continued engagement.
- **Targeted Marketing Campaigns:**  Creates focused marketing initiatives by segmenting customers based on their predicted churn score and preferred product categories, allowing for customized offers and messaging.
- **Improved Customer Lifetime Value:**  Increases the likelihood of retaining valuable customers by proactively addressing potential churn, leading to increased revenue and customer loyalty.

## How it works:

1.  **Scheduled Trigger:** The workflow starts automatically every day based on a defined schedule.
2.  **Fetch Customer Data:** It retrieves customer data from a specified Google Sheets document, using the "Customer Data" sheet.
3.  **Filter High Churn Risk Customers:** The workflow filters the data to identify customers who:
    *   Have a `predicted_churn_score` greater than 0.7.
4.  **Check for Eligible Customers:** The workflow verifies if any customers matched the filter criteria. If no customers are found, it logs a "NOT\_FOUND" status in the system log and stops.
5.  **Process Each Eligible Customer (Loop):** If eligible customers are found, the workflow processes each customer individually using the "Split In Batches" node:
    *   **Generate Win-Back Offer (Gemini):** Uses Google Gemini (via Langchain) to generate a personalized win-back offer based on the customer's `predicted_churn_score` and `preferred_categories`. The offer can be an informational message, bonus points, or a discount on the "Books" category.
    *   **Log Sent Offer:**  Records the generated offer details (customer ID, action taken, offer type, value, title, details, and timestamp) in the "SYSTEM\_LOG" Google Sheet.
    *   **Send Win-Back Offer via Email:** Sends an email to the customer's `user_mail` containing the generated offer title and details.
6.  **Handle No Eligible Customers:**If no customers are found, the workflow logs a 'NOT_FOUND' status along with the current timestamp in the 'SYSTEM_LOG' Google Sheet.

## Services:

*   Google Sheets
*   Gmail
*   Google Gemini (PaLM) API

## Hashtags:

#n8n #automation #workflow #customerretention #churnprevention
