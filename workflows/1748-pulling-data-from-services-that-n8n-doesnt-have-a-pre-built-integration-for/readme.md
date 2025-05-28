# HTTP Request Examples Workflow

## Use cases:

- **Data Extraction and Transformation**: Fetch data from various HTTP endpoints, split it into manageable items, and extract specific information for further processing.
- **Web Scraping**: Scrape data from websites by fetching HTML content and extracting specific elements based on CSS selectors.
- **API Pagination**: Retrieve complete datasets from paginated APIs by looping through pages and aggregating the results.

## How it works:

This workflow demonstrates common use cases of the HTTP Request node. It includes examples for data splitting, web scraping, and handling pagination.

1.  **Trigger:** The workflow is initiated manually using the "On clicking 'execute'" node.
2.  **Initialization**: The "Set" node initializes variables like GitHub username, page number, and items per page for the pagination example.
3.  **Data Splitting**: The "HTTP Request - Get Mock Albums" node fetches album data from a mock API and the "Item Lists - Create Items from Body" node splits the response body into individual items.
4.  **Web Scraping**: The "HTTP Request - Get Wikipedia Page" node fetches a random Wikipedia page. The "HTML Extract - Extract Article Title" node extracts the article title using a CSS selector.
5.  **API Pagination**:
    - The "HTTP Request - Get my Stars" node fetches starred repositories for a given GitHub user using the GitHub API.
    - The "Item Lists - Fetch Body" node retrieves the response body.
    - The "If - Are we finished?" node checks if the response body is empty, indicating the last page.
    - If more pages exist, the "Set - Increment Page" node increments the page number.
    - The loop continues until all pages are processed.

## Services:

-   JSONPlaceholder (mock API)
-   Wikipedia
-   GitHub API

## Hashtags:

#n8n #HTTP #API #WebScraping #Pagination
