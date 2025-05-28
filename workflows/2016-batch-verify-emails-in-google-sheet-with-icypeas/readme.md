# Email Verification with Icypeas

## Use cases:

- **Lead Qualification:** Verify email addresses in a list of leads before reaching out, improving deliverability and avoiding spam traps.
- **Data Cleansing:** Clean up existing customer databases by identifying and removing invalid or inactive email addresses.
- **Marketing Campaign Optimization:** Ensure that email marketing campaigns are sent to valid addresses, reducing bounce rates and improving sender reputation.

## How it works:

This workflow automates the process of bulk email verification using the Icypeas service. Here's a breakdown:

1.  **Trigger:** The workflow starts when you manually click "Execute Workflow".
2.  **Read Google Sheet:** Reads email addresses from a specified Google Sheet. The sheet should have a column named "email" in the first column.
3.  **Authenticate to Icypeas:** This step constructs the necessary authentication headers for the Icypeas API using your API Key, API Secret, and User ID.  It generates a signature for the API request using the `crypto` module (important: enable this module in n8n settings if self-hosted).
4.  **Run bulk search (email-verif):** Sends a POST request to the Icypeas API, including the email addresses extracted from the Google Sheet, along with the authentication headers. This triggers the email verification process on the Icypeas platform. You need to configure in the credential for Header Auth,  “Authorization”: expression {{ $json.api.key + ':' + $json.api.signature }}.
5.  **Retrieving Results:** The email verification results are available for download in the Icypeas dashboard and will be emailed from no-reply@icypeas.com.

## Services:

-   **Google Sheets:** Used as the data source for email addresses.
-   **Icypeas:** A service for performing email verification. (https://icypeas.com)

## Hashtags:

#n8n #automation #emailverification #icypeas #bulkemails
