# Extract Domain from Email

## Use cases:

*   **Lead Enrichment:** Automatically extract the domain name from a lead's email address to gather company information and improve lead scoring.
*   **Email Categorization:** Categorize emails based on the domain to prioritize communication or route emails to the appropriate team.

## How it works:

1.  The workflow starts with a "Manual Trigger" node, which initiates the workflow execution.
2.  The "Sample email" node sets a sample email address ("email@domain2.com") into the workflow data.
3.  The "Extract domain name" Function node takes the email address from the previous node and extracts the domain name using JavaScript code. It identifies the position of the "@" symbol, then isolates the domain part of the string.
4.  The extracted domain name is then outputted as a JSON object.

## Services:

*   None. This workflow utilizes n8n's built-in nodes and JavaScript functions.

## Hashtags:

#n8n #automation #email #domainextraction #workflow
