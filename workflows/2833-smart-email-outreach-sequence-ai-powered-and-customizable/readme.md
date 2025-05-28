# My Workflow

## Use cases:

- **Automated Lead Engagement:** This workflow can automatically engage leads by reading their contact information from a Google Sheet, extracting website details, generating personalized email content using OpenAI, and sending emails via Gmail. It handles initial contact and follow-ups.
- **Personalized Email Marketing:** By using a list of leads, extracting information about their websites, and leveraging OpenAI to create unique email content, this workflow facilitates personalized marketing campaigns.
- **Drip Email Campaign:** Schedule a series of emails to be sent to leads over time, with content tailored to each lead's website and OpenAI to make it more relevant.

## How it works:

1.  **Trigger:** The workflow starts manually with the "When clicking Test workflow1" trigger node.
2.  **Read Leads:** The "Read List of Leads" node fetches a list of leads from a Google Sheet.
3.  **Email Validation:** The "Is it an Email ?" node check if the value from google sheet is an email.
4.  **Looping:** The "Loop Over Emails" node iterates over the list of leads.
5.  **Extract Domain:** The "Extract Domain Name" node extracts the domain name from the lead's email.
6.  **Get Website Content:** The "Get website with Jina.ai" node retrieves the website content associated with the domain name using an HTTP Request.
7.  **Conditional Branching:** The "If" node is used for conditional branching based on the website content.
8.  **Limit Markdown :** The "Limit Markdown" node is used to limit the content extracted from the website.
9.  **Product link:** Add a default product link
10. **Generate Email Content:** The "Generate Email content" node uses OpenAI to generate personalized email content.
11. **Send Email:** The "Gmail" node sends the generated email to the lead.
12. **Follow-up emails:** There are 2 more equivalent flows like the one described to create email follow-ups

## Services:

-   Google Sheets
-   Gmail
-   OpenAI

## Hashtags:

#n8n #automation #emailmarketing #leadgeneration #openai
