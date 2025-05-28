# LinkedIn Profile Enrichment Workflow

## Use cases:

-   **Lead Generation:** Automatically enrich LinkedIn profiles with contact information and company details to identify and qualify potential leads.
-   **Talent Sourcing:** Gather detailed information about potential candidates, including skills, experience, and company affiliations, to streamline the recruitment process.
-   **Market Research:** Collect comprehensive data on professionals and companies within a specific industry or region to analyze market trends and competitive landscapes.

## How it works:

1.  **Trigger:** The workflow starts manually when you click "Test workflow".
2.  **Fetch LinkedIn URLs:** Reads a list of LinkedIn profile URLs from a specified Google Sheet. Each row in the sheet should contain a `linkedin_url` column.
3.  **Filter Already Enriched:** Checks if a profile has already been enriched by verifying if the `about` field is empty and the `linkedin_url` field is not empty.
4.  **Encode URI:** Encodes the LinkedIn profile URL to ensure it's properly formatted for the API request.
5.  **Call Rapid API:** Sends a request to the RapidAPI "Fresh LinkedIn Profile Data" API to retrieve detailed information about the LinkedIn profile. The API requires an `x-rapidapi-key` and `x-rapidapi-host` in the headers, and the encoded LinkedIn URL as a query parameter.
6.  **Filter out all arrays:** Removes all arrays from the result of the API request
7.  **Update Google Sheet:** Appends or updates the original Google Sheet with the enriched profile data obtained from the API, matching rows based on the `linkedin_url` column.

## Services:

-   **Google Sheets:** Used as both the data source (LinkedIn profile URLs) and the destination for enriched data.
-   **RapidAPI (Fresh LinkedIn Profile Data):** A third-party API used to extract detailed information from LinkedIn profiles.

## Hashtags:

#n8n #automation #linkedin #datascraping #googlesheets
