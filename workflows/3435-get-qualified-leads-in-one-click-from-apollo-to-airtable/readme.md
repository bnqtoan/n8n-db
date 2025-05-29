# Lead Generation System (Template)

## Use cases:

- **Automated Lead Enrichment:**  Automatically enrich lead data (first name, last name, email, LinkedIn URL, etc.) scraped from various sources.
- **Database Population:**  Populate an Airtable database with qualified leads, ready for sales or marketing outreach.
- **Targeted Lead Filtering:**  Filter out leads without email addresses to focus on high-potential contacts.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger node ("When clicking ‘Test workflow’"), allowing you to initiate the process.
2.  **Lead Scraping:** The "Scrape Leads" node (HTTP Request) sends a request to a specified URL to scrape lead data.  It's configured to extract personal and work emails and scrape up to 500 records. The URL is to be specified in the configurations, as well as the getPersonalEmails and getWorkEmails options
3.  **Filter Leads:** The "Filter leads without email" node checks if an email address exists for each scraped lead. Leads without emails are filtered out.
4.  **Edit Fields:** The "Edit Fields" node takes the output from the "Filter Leads" node and assigns data points to be the value of different fields
5.  **Save to Airtable:** The "Save Leads in database" node (Airtable) creates a new record in your Airtable base, saving the enriched lead information in designated columns. The connection with Airtable is made via your Airtable API key.

## Services:

-   **Airtable:**  A cloud-based spreadsheet and database hybrid used to store and manage the generated leads.
-   **HTTP Request:** An integration from any website (configured in the "Scrape Leads" node)

## Hashtags:

#n8n #leadgeneration #automation #airtable #datascraping
