# Email Validation and Domain Extraction Workflow

## Use cases:

- **Data cleansing:** Verify the validity of email addresses in a dataset and extract domain names for categorization or analysis.
- **Lead qualification:**  Confirm the legitimacy of email addresses submitted through lead generation forms, and get their domain
- **Email marketing:** Validate email addresses before sending marketing campaigns to reduce bounce rates and improve deliverability.

## How it works:

This workflow validates if an email address is valid and extracts the domain name using n8n's built-in functions.

1.  **Manual Trigger:** The workflow starts when you manually click "Test workflow".
2.  **Generate random data:** Generates a random email, replace this node with your actual data to validate real data.
3.  **Set these fields to extract domain:** It uses the *isEmail()* function to confirm if the email is valid, and the *extractDomain()* function to extract the domain of the validated email.

## Services:

-   No external services. It uses native n8n function

## Hashtags:

#n8n #emailvalidation #dataquality #automation #domainextraction
