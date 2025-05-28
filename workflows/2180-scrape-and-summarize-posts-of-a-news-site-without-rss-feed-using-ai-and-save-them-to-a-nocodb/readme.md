# News Extraction

## Use cases:

- **Automated News Monitoring:** Track news from websites without RSS feeds, delivering summaries and keywords directly to a database or notification system.
- **Competitive Intelligence:** Monitor competitor news releases, identifying key technologies and strategic initiatives.
- **Content Curation:** Automatically generate summaries and extract keywords from industry-specific news articles for newsletters or internal briefings.

## How it works:

This workflow scrapes a news website, extracts recent posts, summarizes them using OpenAI, and stores the results in a NocoDB database.

1.  **Schedule Trigger each week:** The workflow is initiated on a weekly schedule.
2.  **Retrieve the web page for further processing:** Downloads the HTML content of the news page (`https://www.colt.net/resources/type/news/`).
3.  **Extract the HTML with the right CSS class:** Extracts the URLs of the news posts from the HTML using CSS selectors.
4.  **Extract date:** Extracts the dates of the news posts from the HTML using CSS selectors.
5.  **Create single link items**: Transform the array of extracted links into individual items for further processing.
6.  **Create single date items**: Transform the array of extracted dates into individual items.
7.  **Merge date & links**: Combines the extracted URLs and dates into a single data structure.
8.  **Select posts of last 7 days:** Filters the news posts to include only those published within the last 70 days.
9.  **HTTP Request1:** For each filtered URL, the workflow downloads the HTML content of the individual news post.
10. **Extract individual posts:** Extracts the title and content of each news post using CSS selectors.
11. **Merge Content with Date & Link:** Combines the title and content with the original URL and date.
12. **Summary:** Uses OpenAI's GPT-4 model to generate a summary of the news post content in less than 70 words.
13. **Keywords:** Uses OpenAI's GPT-4 model to extract the three most important technical keywords from the news post content.
14. **Rename Summary:** Renames the field containing the summary to `summary`.
15. **Rename keywords:** Renames the field containing the keywords to `keywords`.
16. **Merge:** Merges the summary and keywords into a single item.
17. **Merge ChatGPT output with Date & Link:** Combines the summary and keywords with the title, URL, and date.
18. **NocoDB news database:** Stores the extracted data (title, date, URL, summary, and keywords) into a NocoDB database.

## Services:

-   **OpenAI:** For generating summaries and extracting keywords.
-   **NocoDB:** As a database to store the extracted news data.
-   **Colt News Site:** The target website for scraping news articles.

## Hashtags:

#n8n #automation #webscraping #openai #nocodb
