# Website scraper

## Use cases:

-   **Content Aggregation**: Automatically gather content from multiple pages within a website for research or analysis.
-   **Website Sitemap Generation**: Crawl a website to create a comprehensive list of all internal links, aiding in SEO and website structure analysis.
-   **Lead Generation**: Extract specific information (e.g., contact details, product listings) from a website and its linked pages for sales or marketing purposes.

## How it works:

1.  **Trigger**: The workflow starts when a form is submitted or is executed by another workflow, taking "Seed URL," "Links must contain," and "Depth" as input parameters.
2.  **Create Spreadsheet**: A new Google Sheet is created to store the scraped URLs and a flag to indicate if the page has been scraped.
3.  **Initial URL Load**: The initial "Seed URL" is added to the Google Sheet.
4.  **Scrape Webpage**: Using the Airtop node, the workflow scrapes the content of the URL from the Google Sheet.
5.  **Create Google Docs**: A Google Doc is created to store the scraped content.
6.  **Write Scraped Content**: The scraped content is written to the Google Doc.
7.  **Recursive Scraping Check**: An "If" node checks if the scraping depth has been reached. If not, it continues to the next step.
8.  **Retrieve links to scrape**: Retrieve the list of internal links from the current URL using Airtop.
9.  **Filter links to insert to Sheets**: Only insert the links that contains a user specified string, and deduplicate between scraped links on the spreadsheet.
10. **Insert new links**: New links are extracted and written back to the Google Sheet.
11. **Update with new scraped content**: Update Google Docs with new content.
12. **Flag scraped link**: The "Scraped" column in the Google Sheet is updated to mark the URL as scraped.
13. **Loop**: The workflow loops back to scrape the next URL from the Google Sheet, repeating until the specified depth is reached.

## Services:

-   Google Sheets
-   Google Docs
-   Airtop

## Hashtags:

#n8n #webscraping #automation #googlesheets #airtop
