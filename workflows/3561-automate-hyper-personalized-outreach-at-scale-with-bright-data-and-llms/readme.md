# LinkedIn Enrichment & Ice Breaker Generator

## Use cases:

- **Personalized Outreach:** Generate unique icebreakers for LinkedIn connections to improve engagement and response rates.
- **Sales Prospecting:** Enrich lead data with LinkedIn profile information and craft tailored messages for sales teams.
- **Automated Research:** Automatically collect and store LinkedIn profile data for market research or competitor analysis.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger or a scheduled trigger.
2.  **Get Data from Google Sheets:** It retrieves LinkedIn URLs and row numbers from a specified Google Sheet.
3.  **Loop Through Prospects:** The workflow iterates through each LinkedIn URL in the Google Sheet.
4.  **Bright Data API Call (Post Request):** It sends a POST request to the Bright Data API to initiate a snapshot of the LinkedIn profile associated with the URL.
5.  **Wait for API Results:** The workflow pauses and waits for a specified duration to allow Bright Data to process the snapshot request.
6.  **API Call - Snapshot Progress:** It checks the progress of the Bright Data snapshot using the snapshot ID.
7.  **Conditional Check:** If the snapshot status is "running," it loops back to wait again. If the snapshot is completed successfully, the workflow proceeds to retrieve the data.
8.  **Bright Data API Call (Get LinkedIn Data):** It retrieves the enriched LinkedIn profile data from Bright Data using the snapshot ID.
9.  **Update Google Sheets with Personal Data:** The workflow updates the Google Sheet with personal data extracted from the LinkedIn profile such as name, city, about, and current company.
10. **Generate Ice Breaker:** An AI model generates an ice breaker based on the LinkedIn profile data, including recent posts and "About" section.
11. **Update Google Sheets with Ice Breaker:** The generated ice breaker is added to the Google Sheet.
12. **Loop to next Prospect:** The workflow continues to loop through remaining prospects in the Google Sheet

## Services:

*   **Google Sheets:** Used for storing LinkedIn URLs, profile data, and generated icebreakers.
*   **Bright Data Dataset API:** Used to scrape and enrich LinkedIn profile data.
*   **Anthropic Claude (via LangChain):** Used to generate personalized ice breakers using AI.

## Hashtags:

#n8n #automation #linkedin #icebreaker #brightdata
