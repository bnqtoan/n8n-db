# Find contact information for linkedin profile URLs stored in a Google Sheet

## Use cases:

- **Lead Generation:** Automatically enrich lead data in a Google Sheet by fetching contact information (email, job title, location, etc.) from LinkedIn profiles, streamlining the sales and marketing process.
- **Data Enrichment:** Enhance existing data in a Google Sheet with up-to-date information from LinkedIn profiles, ensuring accuracy and completeness for recruitment or research purposes.
- **Contact Discovery:** Schedule regular updates to a Google Sheet containing LinkedIn profile URLs to continuously discover and append new contact information.

## How it works:

1.  **Schedule Trigger:** The workflow is initiated by a Schedule Trigger node, which runs at specified intervals (e.g., every minute).
2.  **Get links from Google Sheet:** Reads a Google Sheet to find a list of LinkedIn profile URLs.
3.  **Conditional Check:** Verifies if the Name, Gender, Job Title, and Summery columns are empty and that the Linkden URL column is not empty.
4.  **HTTP Request - Utilize Prospeo.io LinkedIn Email Finder API:** Uses the Prospeo.io LinkedIn Email Finder API to retrieve contact details from the LinkedIn URL.
5.  **Data Merge:** Combines the initial data from Google Sheet with the data fetched from the API.
6.  **Field Editing:**  Extracts and sets specific fields from the API response, like Name, Gender, Email, Summary, Education, Skills, Picture, Job Title, Location, and LinkedIn URL, preparing the data for updating the Google Sheet.
7.  **Update the sheet with information:** Updates a Google Sheet with the new contact information obtained from the API.

## Services:

-   Google Sheets
-   Prospeo.io LinkedIn Email Finder API

## Hashtags:

#n8n #automation #googlesheets #linkedin #leadgeneration
