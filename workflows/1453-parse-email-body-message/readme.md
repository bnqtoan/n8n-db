# Email Body Parser by aprenden8n.com

## Use cases:

- **Lead Capture and Management:** Automatically extract contact information (name, email) and message details from incoming emails to populate a CRM or lead management system.
- **Support Ticket Creation:** Parse support emails to identify key details like subject, user information, and problem description, then automatically create tickets in a helpdesk system.
- **Order Processing:** Extract order details (name, email, items, and address) from order confirmation emails and automatically input them into a database or order management system.

## How it works:

1.  **Trigger:** The workflow is manually triggered by clicking the "Execute" button in n8n.
2.  **Set Values:** A "Set" node defines a sample email body and a comma-separated list of labels to extract. The "body" field contains the sample email content, and the "labels" field specifies the fields to extract from the email body (Name, Email, Subject, Message).
3.  **Email Parser Snippet:** A "Function Item" node contains JavaScript code that parses the email body based on the provided labels. It uses regular expressions to find the values associated with each label in the email body. The extracted data is then returned as an object.

## Services:

-   None. This workflow parses a static email body and does not interact with any external services.

## Hashtags:

#n8n #emailparsing #automation #workflow #dataprocessing
