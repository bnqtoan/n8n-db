# Leadfeeder to Google Sheets Automation

## Use cases:

- **Automated Lead Qualification:** Automatically identify and save high-potential leads from Leadfeeder to a Google Sheet for further sales and marketing action.
- **Enriched Lead Data:** Enrich leads with company information (e.g., employee count, industry, social media profiles) using Clearbit before saving them to Google Sheets, giving sales teams more context.
- **Daily Lead Generation Report:** Get a daily report of qualified leads that meet specific engagement and company criteria, directly in a Google Sheet.

## How it works:

1.  **Schedule Trigger:** The workflow starts automatically every day at 7 AM based on the "Schedule Trigger" node.
2.  **Setup:** The `Setup` node defines global variables, specifically the Leadfeeder account names to be processed and the URL of the Google Sheet to be used.
3.  **Get all Leedfeeder accounts:** Retrieves all Leadfeeder accounts using the Leadfeeder API.
4.  **Split out accounts:** Iterates through each Leadfeeder account.
5.  **Only for wanted accounts:** Filters the accounts based on the names defined in the `Setup` node to include only the specified accounts.
6.  **Get Leads:** For each included account, retrieves the leads from Leadfeeder API for the previous day.
7.  **Split Out Leads:** Iterates through the leads.
8.  **Filter leads by engagement:** Filters leads based on engagement metrics (number of visits) specified in the node configuration.
9.  **Enrich company:** Enrich company data using `Clearbit` node for each lead to gather company information based on the website URL of the lead.
10. **Filter Leads by company criteria:** Filters companies with more than 100 employees.
11. **Save leads to Google Sheets:** Appends or updates the filtered and enriched lead information to a specified Google Sheet, including company name, domain, visits, quality, social media profiles, employee count, and description.

## Services:

-   Leadfeeder API
-   Clearbit API
-   Google Sheets API

## Hashtags:

#n8n #automation #leadgeneration #googlesheets #leadfeeder
