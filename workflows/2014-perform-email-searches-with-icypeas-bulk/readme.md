# Email Search with Icypeas (Bulk Search)

## Use cases:

- **Lead Generation:** Find email addresses for potential clients by providing their first name, last name, and company.
- **Sales Prospecting:** Enrich contact lists with verified email addresses to improve the efficiency of sales outreach.
- **Data Enrichment:** Add email addresses to existing databases of contacts to enhance marketing efforts and personalize communication.

## How it works:

This workflow automates the process of finding email addresses using the Icypeas bulk search API.

1.  **Trigger:** The workflow starts when you manually click "Execute Workflow".
2.  **Read Google Sheet:** It reads data (first name, last name, company) from a specified Google Sheet.  You need to configure the Google Sheets node with your sheet's ID and credentials.
3.  **Authentication with Icypeas:** The workflow prepares the data and generates the necessary authentication headers (API Key and Signature) for the Icypeas API. The code node takes your API Key, API secret, and User ID and prepares the request. **Important**: You *must* replace the placeholder values in the code node with your actual Icypeas credentials.
4.  **Run Bulk Search:**  An HTTP Request node sends a POST request to the Icypeas API with the data from the Google Sheet and the generated authentication headers.  The workflow also creates credentials for Header Auth.
5.  **Result Retrieval**: The results are downloadable and will be available in the Icypeas application. You will also receive the search results via email from no-reply@icypeas.com.

## Services:

-   Google Sheets
-   Icypeas API ([https://icypeas.com](https://icypeas.com))

## Hashtags:

#n8n #automation #emailsearch #icypeas #leadgeneration
