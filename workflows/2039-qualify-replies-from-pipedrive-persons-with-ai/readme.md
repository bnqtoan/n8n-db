# Cold Email Qualification and CRM Deal Creation

## Use cases:

*   **Automated Lead Qualification:** Automatically identify and qualify leads responding to cold email campaigns based on their interest level.
*   **CRM Deal Creation:** Streamline the sales process by automatically creating deals in Pipedrive for qualified leads.
*   **Improved Sales Efficiency:** Save time for sales teams by automating the initial qualification process, allowing them to focus on high-potential leads.

## How it works:

1.  **Email Trigger (Gmail Trigger):** The workflow starts by monitoring one or more Gmail inboxes for new emails. It triggers whenever a new email arrives.
2.  **Get email (Set):** Extracts the email text from the trigger.
3.  **Search Person in CRM (Pipedrive):** Searches for the person in Pipedrive using the sender's email address (extracted from the email).
4.  **Get person from CRM (Pipedrive):** Retrieves the complete person details from Pipedrive using the ID obtained from the search.
5.  **In campaign? (IF):** Checks if the person is flagged as being in a campaign in Pipedrive.
6.  **Is interested? (OpenAI):** Uses OpenAI's GPT-4 model to analyze the email content and determine the lead's interest level.
7.  **Get response (Code):** Parses the JSON response from OpenAI to extract the `interested` flag and the `reason` for the determination.
8.  **IF interested (IF):** Checks if the `interested` flag is "yes."
9.  **Create deal in CRM (Pipedrive):** If the lead is interested, a new deal is created in Pipedrive, using the person's name.

## Services:

*   Gmail
*   Pipedrive
*   OpenAI

## Hashtags:

#n8n #automation #sales #crm #leadgeneration
