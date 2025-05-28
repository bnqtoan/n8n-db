# Save New Sales Opportunities

## Use cases:

- Automatically create sales opportunities in Odoo when a new email matching specific criteria (e.g., labeled as "Sales") arrives in Gmail.
- Streamline the sales process by automatically summarizing email inquiries and creating corresponding opportunities in your CRM.
- Improve lead management by capturing potential sales leads from emails and ensuring they are promptly entered into your Odoo system.

## How it works:

1.  **Received Emails with Sales Label:** The workflow starts when a new email arrives in your Gmail inbox and has a specific label (Label_8035866011660570111, which is assumed to be your "Sales" label).  The workflow is triggered every hour.
2.  **Summarize Email Content:** The email's content is extracted and passed to a summarization chain, which uses a Large Language Model to create a concise summary of the sales inquiry, including key details like project budget, timelines, industry, and a general overview.
3.  **Odoo - Create Opportunity:** The workflow creates a new sales opportunity in Odoo using the subject of the email as the opportunity name. It also populates the opportunity with the sender's email address and the summary of the email content generated in the previous step as the description.

## Services:

-   Gmail
-   OpenAI
-   Odoo

## Hashtags:

#n8n #automation #sales #odoo #gmail
