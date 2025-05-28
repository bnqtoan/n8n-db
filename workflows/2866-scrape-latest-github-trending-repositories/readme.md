# Scrape Today's Github Trend 13 Top Repositories

## Use cases:

-   **Track Trending Repositories:** Automatically collect and store information about today's trending repositories on GitHub for personal analysis or reporting.
-   **Content Creation:** Generate content for a blog or social media about the top trending repositories, providing insights and summaries.
-   **Learning and Discovery:** Identify new and popular projects to learn from, contribute to, or simply stay informed about the latest developments in software development.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Request to Github Trend:** An HTTP Request node fetches the HTML content of the GitHub trending page (`https://github.com/trending`).
3.  **Extract Box:** Extracts the `div.Box` HTML content from the trending page.
4.  **Extract all repositories:** Extracts all repositories' HTML content from the `article.Box-row` elements inside the extracted box.
5.  **Turn to a list:** Splits the extracted repositories to handle each repository individually.
6.  **Extract repository data:** Extracts specific data points for each repository, including the repository name (`a.Link`), programming language (`span.d-inline-block`), and description (`p`).
7.  **Set Result Variables:** Creates a new output with the extracted data and sets variables like author, title, repository, URL, created\_at (current timestamp), and description. These variables are derived from the extracted data using expressions.

## Services:

-   GitHub (via HTTP Request)

## Hashtags:

#n8n #GitHub #WebScraping #Automation #TrendingRepositories
