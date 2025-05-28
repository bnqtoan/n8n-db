# 💡🌐 Essential Multipage Website Scraper with Jina.ai

## Use cases:

- **Website Content Archiving:**  Automatically save the content of specific pages or sections of a website to Google Drive for backup or record-keeping purposes.
- **Competitor Analysis:**  Monitor and extract content from competitor websites to analyze their strategies and offerings.
- **Documentation Generation:** Scrape documentation websites and save the content as markdown files for offline access or modification.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Set Sitemap URL:**  Sets the URL of the website's sitemap (sitemap.xml). In this case it is `https://ai.pydantic.dev/sitemap.xml`.
3.  **Get List of Website URLs:** Retrieves the XML content of the sitemap.
4.  **Convert to JSON:** Converts the XML content to JSON format.
5.  **Create List of Website URLs:** Extracts individual URLs from the `urlset.url` array within the JSON structure.
6.  **Filter By Topics or Pages:** Filters the URLs based on defined criteria (e.g., containing "agent" or "tool" or matching "https://ai.pydantic.dev/").
7.  **Limit:** Limits the number of URLs to process (20 in this case).
8.  **Loop Over Items:** Loops through each of the filtered website URLs.
9.  **Jina.ai Web Scraper:**  Uses the Jina.ai web scraper to extract content from each URL. No API key is required.
10. **Extract Title & Markdown Content:** Extracts the title and markdown content from the scraped data using regular expressions.
11. **Save Webpage Contents to Google Drive:** Saves the extracted title and markdown content to Google Drive as a text file.
12. **Wait:** A wait node to prevent overloading the server.

## Services:

*   Google Drive
*   Jina.ai

## Hashtags:

#n8n #automation #webscraping #googledrive #jinaai
