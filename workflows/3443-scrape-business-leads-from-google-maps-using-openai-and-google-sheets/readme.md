# Google Maps FULL

## Use cases:
- **Lead Generation:** Automatically gather business contact information (name, address, phone, website, email) from Google Maps for targeted marketing campaigns.
- **Market Research:** Collect data on businesses within a specific industry and location to analyze market trends and competitive landscapes.
- **Data Enrichment:** Enhance existing business datasets with up-to-date information scraped from Google Maps and company websites.

## How it works:
1. **Trigger:** The workflow is initiated when a user sends a message via the "Trigger - When User Sends Message" node, or when triggered by `Trigger - On Subworkflow Start` which starts when the subworkflow is executed,
2. **AI Agent Interaction:** The "AI Agent - Lead Collection" node utilizes a large language model (LLM) to understand the user's request for lead generation, city, and business type. The LLM is configured with a detailed prompt to extract relevant information, determine the appropriate tools to use, and format the output. The agent also accesses a Google sheet to check if information already exists to avoid running a new scrape.
3. **Data Extraction:** The AI agent then leverages either of these two tools:
    - **Google Maps Scraper:** Based on the location, type of business, and country code received from the AI Agent, the data is scraped from Google Maps using the "Tool - Scrape Google Maps Business Data" node (which triggers the Google Maps Extractor Subworkflow). The Scrape Google Maps (via Apify) posts the job to Apify and then saves that data to Google sheets with the `Save Extracted Data to Google Sheets` node, before aggregating into one single item at `Aggregate Business Listings`.
    - **Website Content Crawler:** If the AI agent is passed a URL with `Tool - Crawl Business Website`, the website content crawler subworkflow extracts data from the provided URL. The `Scrape Website Content` node posts the job to Apify and `Save Website Data to Google Sheets` saves the data, before it is aggregated into one single item at the `Aggregate Website Content` node.
4. **Fallback Mechanism:** If the scraping fails or returns incomplete data, the "Fallback - Enrich with Google Search" node uses the SerpAPI to supplement the information.
5. **Data Storage:** The extracted data, including business names, addresses, phone numbers, websites, and email addresses, is saved to a specified Google Sheets document.

## Services:
- Google Maps (via Apify)
- Apify
- Google Sheets
- OpenAI API
- SerpAPI

## Hashtags:
#n8n #automation #leadgeneration #webscraping #googlemaps
