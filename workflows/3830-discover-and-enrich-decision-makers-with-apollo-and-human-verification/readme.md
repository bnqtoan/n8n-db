# Company Decision Maker Discovery Workflow

## Use cases:

*   **Lead Generation**: Automatically discover and collect contact information for decision-makers within target companies, enriching your sales pipeline.
*   **Market Research**: Identify key personnel in specific industries or companies to gather insights and conduct targeted surveys.
*   **Sales Automation**: Streamline the process of identifying and contacting potential customers by automating data collection and contact enrichment.

## How it works:

1.  **Trigger**: The workflow starts when a new company is added or an existing one is updated in a Google Sheet ("Companies" tab). This sheet should contain at least the company name and optionally the website.
2.  **Website Verification (Human-in-the-Loop)**: If the "Domain" field in the Google Sheet is empty, the workflow uses the Apollo Organization Search API to find the company's website based on the company name. A Slack message is then sent to a designated channel, asking for human verification of the retrieved website. This ensures data accuracy.
3.  **Company Enrichment**: Once the website is verified (or if it was already present in the sheet), the Apollo Organization Enrichment API is called to retrieve detailed information about the company (e.g., industry, size, revenue, description). An OpenAI call summarizes the company's core business. This information is then added back to the "Companies" tab in the Google Sheet.
4.  **Decision Maker Discovery**: The workflow then uses the Apollo People Search API to find decision-makers (e.g., CEO, VP, Director) within the company. The search is optimized to find senior-level contacts. Due to Apollo API limitations, the company domains are sent in batches of 1,000.
5.  **Contact Enrichment and Department Classification**: The workflow splits the batched decision maker response and the job title is fed into an OpenAI prompt to determine the contact's department within the company. All information (name, job title, company, location, LinkedIn profile) is appended to the "Contacts" tab in the Google Sheet.
6.  **Contact Enrichment (Email and Phone)**: The workflow then enriches those contacts to retrieve their professional emails and phone numbers (if available in Apollo) using the Bulk People Enrichment Apollo API. Due to Apollo API limitations, enrichment is performed in batches of 10. Finally, that information is written into the Google Sheet "Contacts" tab.
7.  **Weekly Reporting**: A scheduled trigger runs weekly and retrieves the number of new leads with verified emails discovered over the past week. It then sends a summary message to a Slack channel.

## Services:

*   Google Sheets
*   Apollo.io API
*   Slack
*   OpenAI

## Hashtags:

`#n8n` `#automation` `#leadgeneration` `#salesautomation` `#ApolloAPI`
