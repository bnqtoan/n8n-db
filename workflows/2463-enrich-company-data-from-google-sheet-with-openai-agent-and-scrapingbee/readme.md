# Enrich Company Data from Google Sheet with OpenAI Agent and Scraper Tool

## Use cases:

- **Sales and Marketing Enrichment:** Automatically enrich leads or prospect data in a CRM system by extracting key information from company websites, such as business area, products/services, value proposition, and ideal customer profile.
- **Market Research and Analysis:**  Gather insights on a list of companies within a specific industry to identify trends, analyze business models, and understand competitive landscapes.
- **Investment Due Diligence:** Streamline the initial assessment of potential investment targets by automatically extracting and summarizing critical company information from their websites.

## How it works:

This workflow automates the process of extracting and structuring data from company websites and updating a Google Sheet with the enriched information.

1.  **Get rows from Google Sheet:** Reads a list of companies and their websites from a Google Sheet.  It expects columns named "Company" and "Website" at a minimum.
2.  **Loop Over Items:** Iterates over each company record retrieved from the Google Sheet.
3.  **AI Agent:** Uses an OpenAI agent to analyze the content of the scraped website and extract structured data.
    *   **OpenAI Chat Model:**  Uses the `gpt-4o-mini` model to generate insights.
    *   **Call n8n workflow : Scrape companies homepage content:** Calls a sub-workflow to scrape the target company's website.  The sub-workflow receives the company's website URL as input.
    *   **Structured Output Parser:** Parses the OpenAI agent's output into a structured format, as defined in the node configuration.  This includes fields such as Business Area, Offers or Product, Value Proposition, Business Model, Ideal Customer Profile, and Additional Information.
4.  **Update Company's Row on Google Sheet:** Updates the original Google Sheet with the extracted and structured data for each company.

**Scrape companies homepage content Sub-Workflow:**

1.  **Tool called from Agent:**  Trigger to start the scraping sub-workflow when called by the AI Agent.  Receives the company website as input.
2.  **Set company url:** Renames the "website" field to "url" for ScrapingBee.
3.  **ScrapingBee : Scrape company's homepage data:** Scrapes the HTML content of the provided URL using the ScrapingBee service.  Requires an ScrapingBee API key.
4.  **HTML to Markdown:** Converts the scraped HTML content to Markdown format for efficient processing by the OpenAI agent.

## Services:

-   **Google Sheets:** Used as the data source and destination for company information.
-   **OpenAI:**  Used for analyzing website content and extracting structured data.
-   **ScrapingBee:**  Used to scrape the HTML content from company websites.

## Hashtags:

#n8n #automation #datascience #enrichment #openai
