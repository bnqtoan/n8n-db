# Pipedrive Company & People Enrichment with Datagma

## Use cases:

- **Automated Lead Enrichment:** When a new company is created in Pipedrive, automatically enrich the company data with information from Datagma, such as total funding amount, website traffic, industry, and employee details.
- **Targeted Lead Generation:** Identify and add key people (e.g., Head of Sales, Director of Business Development) from enriched companies in Pipedrive, ensuring sales teams have the contact information of relevant decision-makers.
- **Data-Driven Sales Prioritization:** Score potential leads based on company and employee data (e.g., company size, job title) to prioritize outreach efforts and focus on ideal customer profiles (ICPs).

## How it works:

1.  **Pipedrive Trigger - New Company Created:** The workflow starts when a new organization is added to Pipedrive.
2.  **Datagma - Enrich Company:** The workflow uses the company name from Pipedrive to query Datagma, enriching the company data with details such as funding information, website traffic, industry, LinkedIn URL, website, company size, and address. The workflow is configured to extract company premium data, full company data and employee details.
3.  **Pipedrive - Enrich Organization:** Updates the newly created Pipedrive organization with all the details coming from Datagma.
4.  **List People:** Extracts individual employee entries to be processed separately, specifically for roles like "Head of Sales" or "Director of Business Development".
5.  **If lead is Ideal Buyer:** Filters leads based on their "employeeCompanyScore" (greater than 0.1) and if their "jobTitle" contains "sales"
6.  **Datagma - Find Emails:** Searches for the email address of the lead, using their full name and company name.
7.  **Prepare Data Before Merge:** Save the lead linkedInUrl and email.
8.  **Merge:** Merges the data from the company enrichment and the employee data enrichment.
9.  **Pipedrive - Add Person:** Adds the enriched person as a contact to Pipedrive, linking them to the newly created organization and including their job title and LinkedIn URL.

## Services:

*   Pipedrive: CRM platform used to manage sales pipelines and customer relationships.
*   Datagma: A data enrichment service providing company and contact information.

## Hashtags:

#n8n #automation #Pipedrive #Datagma #leadgeneration
