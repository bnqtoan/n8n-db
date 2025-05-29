# LinkedIn Web Scraping with Bright Data MCP Server & Google Gemini

## Use cases:

- **Lead Generation:** Automatically extract information from LinkedIn profiles and company pages to identify potential leads for sales and marketing teams.
- **Market Research:** Gather data on companies, industries, and professionals to analyze market trends, competitor activities, and talent pools.
- **Content Creation:** Generate blog posts, articles, or reports based on scraped company information, leveraging AI to create engaging narratives.

## How it works:

This workflow scrapes LinkedIn profiles and company pages, extracts key information, and processes it using AI to generate insights. Here's a breakdown:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Configuration:** "Set the URLs" node sets the LinkedIn profile URL to be scraped and the webhook URL where results will be sent. "Set the LinkedIn Company URL" node sets the LinkedIn company page URL to be scraped and the webhook URL where results will be sent.
3.  **Web Scraping (Person):** The "Bright Data MCP Client For LinkedIn Person" node uses Bright Data's MCP (Managed Content Platform) to scrape the specified LinkedIn profile.
4.  **Web Scraping (Company):** The "Bright Data MCP Client For LinkedIn Company" node uses Bright Data's MCP (Managed Content Platform) to scrape the specified LinkedIn company page.
5.  **Response parsing (Company):** The "Code" node parses the JSON response from the Bright Data scraper and extracts the relevant content.
6.  **AI processing (Company):**
    -   The "LinkedIn Data Extractor" node utilizes a Large language model to create a company story based on the scraped LinkedIn info.
    -   The "Google Gemini Chat Model" node utilizes Google Gemini to enhance the generated company story.
7.  **Data Aggregation:** The "Merge" node merges the extracted data from LinkedIn Company Web Scraper and LinkedIn Person Web Scraper
8.  **Data Aggregation:** The "Aggregate" node aggregates the scraped data from "About" and "output.company_story".
9.  **Webhook Integration (Company):** The "Webhook for LinkedIn Company Web Scraper" node sends the scraped and processed data to a specified webhook URL.
10. **Data Storage:**
    -  The "Create a binary data for LinkedIn person info extract" node converts the scraped person info into binary data.
    -  The "Write the LinkedIn person info to disk" node writes the LinkedIn person info to a local JSON file.
    -  The "Create a binary data for LinkedIn company info extract" node converts the scraped company info into binary data.
    -  The "Write the LinkedIn company info to disk" node writes the LinkedIn company info to a local JSON file.
11. **Webhook Integration (Person):** The "Webhook for LinkedIn Person Web Scraper" node sends the scraped data to a specified webhook URL.

## Services:

-   **Bright Data MCP:**  A web scraping platform providing infrastructure and tools for data extraction.
-   **Google Gemini:** A language model to create a detailed story of the provided company information in JSON.
-   **Webhook.site:** A service for inspecting and debugging HTTP requests.

## Hashtags:

#n8n #webscraping #linkedin #automation #leadgeneration
