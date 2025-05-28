# Email verification with Icypeas (single)

## Use cases:

- **Lead Qualification:** Automatically verify email addresses submitted through a lead generation form to ensure validity and reduce bounce rates.
- **Account Sign-Up Validation:** Integrate email verification into user registration processes to prevent fake accounts and improve data quality.
- **Data cleansing:** Verify a list of emails present in a database.

## How it works:

1.  The workflow is triggered manually using the "When clicking \"Execute Workflow\"" node.
2.  The "Authenticates to your Icypeas account" Code node generates the necessary authentication headers for the Icypeas API using your API key, API secret, and User ID. It constructs a timestamp and signature for the request.
3.  The "Run email verification (single)" HTTP Request node sends a POST request to the Icypeas API with the email address you want to verify. The API URL and authentication headers are dynamically generated based on the information from the previous node.

## Services:

-   Icypeas API (for email verification)

## Hashtags:

#n8n #automation #emailverification #Icypeas #API
