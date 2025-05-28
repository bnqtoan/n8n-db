# ProspectLens Company Research

## Use cases:

- **Automated Lead Enrichment:** Automatically enrich lead data in Google Sheets with company information like funding, employee count, and industry details from ProspectLens.
- **Market Research Automation:**  Quickly gather key information about companies in a target market to analyze trends, identify potential investment opportunities, or competitive landscapes.
- **Data Augmentation for CRM:** Enhance existing CRM data with up-to-date company profiles, improving sales and marketing efforts.

## How it works:

1.  **Trigger:** The workflow starts when you manually click 'Test workflow'.
2.  **Get Data from Google Sheets:** Retrieves all rows from a specified Google Sheet.
3.  **Filter Rows:** Filters the retrieved data, processing only rows where the `processed_at` column is empty (meaning the company hasn't been researched yet).
4.  **Loop Over Items:** Processes the filtered rows one by one to avoid overwhelming the ProspectLens API. This keeps concurrency low (1 thread).
5.  **ProspectLens API Call:** Makes a request to the ProspectLens API for each company domain from the Google Sheet.
6.  **Save to Google Sheets:** Saves the data received from ProspectLens back into the Google Sheet, including company name, description, funding, traffic, location, and other relevant information. It also updates the `processed_at` column with the current timestamp.
7. **Error Handling:** The workflow is set up to `continueErrorOutput`, which means that is an API call fails it will continue with the next entry from the google sheets.

## Services:

-   **Google Sheets:** Used as the data source and destination for company information.
-   **ProspectLens API:** Provides company data based on domain name.

## Hashtags:

#n8n #automation #leadgeneration #dataintegration #prospectlens
