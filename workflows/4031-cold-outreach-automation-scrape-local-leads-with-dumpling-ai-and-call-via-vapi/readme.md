# Cold Outreach Automation: Scrape Local Leads with Dumpling AI & Call via Vapi

## Use cases:

- **Generate leads for sales teams:** Automatically find and contact potential clients in specific geographical areas or industries, saving time and resources on manual lead generation.
- **Automated appointment scheduling:** Use the AI-powered phone calls to qualify leads and schedule appointments directly with interested prospects.
- **Market research and data collection:** Gather business information and validate contact details for market analysis or database enrichment.

## How it works:

1.  The workflow starts manually and retrieves a list of Google Maps search queries (e.g., "best restaurants in New York") from a Google Sheets document.
2.  These queries are sent to the Dumpling AI `search-maps` endpoint, which scrapes business listings from Google Maps.
3.  The results are split into individual business entries, and the business name, phone number, and website are extracted.
4.  The workflow filters out entries without valid phone numbers.
5.  The phone number is formatted to include the international dialing code (+1 for the US).
6.  The Vapi AI assistant initiates a phone call to the business, using the business name in the call script.
7.  Finally, the business name, formatted phone number, and website address are logged to a Google Sheet for tracking and follow-up.

## Services:

-   **Google Sheets:** Used to store search keywords and log call results.
-   **Dumpling AI:** Provides the `search-maps` API to scrape business data from Google Maps.
-   **Vapi AI:** Powers the automated phone calls to businesses using AI assistant.

## Hashtags:

#n8n #automation #leadgeneration #coldoutreach #AI
