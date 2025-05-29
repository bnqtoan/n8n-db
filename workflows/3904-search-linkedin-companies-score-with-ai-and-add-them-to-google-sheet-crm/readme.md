# Search LinkedIn companies, Score with AI and add them to Google Sheet CRM

## Use cases:

- **Lead Generation:** Automatically search for potential leads on LinkedIn based on specific criteria (e.g., industry, company size, location) and store them in a Google Sheet for further outreach.
- **Lead Qualification:** Use AI to score potential leads based on their likelihood of being interested in your product or service, allowing sales teams to prioritize high-potential prospects.
- **CRM Enrichment:** Enhance your existing CRM data by automatically pulling company information from LinkedIn and adding it to your Google Sheet CRM.

## How it works:

1.  **Search LinkedIn Companies:** The workflow starts by searching for companies on LinkedIn using the Ghost Genius API based on search terms, location, and company size specified in the "Set Variables" node.
2.  **Extract and Process Company Data:** The extracted company data is then processed in batches. The workflow retrieves detailed company information from the Ghost Genius API based on the LinkedIn URL.
3.  **Filter Valid Companies:** It filters companies based on the number of followers and the existence of a website on their LinkedIn page.
4.  **Check for Existing Company:** The workflow checks if a company with the same ID already exists in the Google Sheet CRM to avoid duplicates.
5.  **AI-Powered Scoring:** New companies are then passed to an OpenAI node, which scores the company based on the provided company data, target criteria and positive/negative indicators defined in the "Set Variables" node.
6.  **Add to Google Sheet CRM:** Finally, the company's information, including its AI score, is added to a Google Sheet CRM.  A wait node is implemented to respect Google Sheet's rate limits.

## Services:

-   **Ghost Genius API:** Used for searching companies on LinkedIn and retrieving company information.
-   **Google Sheets:** Used as a CRM to store and manage the extracted and scored company data.
-   **OpenAI API:** Used for scoring the companies based on likelihood of being a good lead.

## Hashtags:

#n8n #automation #linkedin #leadgeneration #crm
