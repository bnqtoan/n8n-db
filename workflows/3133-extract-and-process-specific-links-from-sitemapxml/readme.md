# Read sitemap and filter URLs

## Use cases:

- **Extracting specific file types from a website:** You can use this workflow to automatically identify and extract URLs of specific file types (e.g., PDFs, DOCs, images) from a website's sitemap for archiving, analysis, or other purposes.
- **Monitoring website content changes:** By scheduling this workflow to run periodically, you can track changes in a website's content by comparing the list of URLs extracted from the sitemap over time.
- **Building a list of resources for a specific topic:**  If you are researching a specific topic, you can use this workflow to extract a list of relevant URLs from a website's sitemap that contain information related to your research.

## How it works:

1.  **Trigger:** The workflow is manually triggered to start the process.
2.  **Set Sitemap URL:** The `Set sitemap URL` node defines the URL of the sitemap.xml file that will be processed.  This URL is configurable and should be updated to the target website's sitemap.
3.  **Get Sitemap:** The `Get Sitemap` node fetches the content of the sitemap.xml file from the specified URL using an HTTP request.
4.  **Convert Sitemap to JSON:** The `Convert Sitemap to JSON` node transforms the XML content of the sitemap into a JSON format, making it easier to work with.
5.  **Split Out:** The `Split Out` node splits the `urlset.url` array in multiple items.
6.  **Filter URLs:** The `Filter URLs` node filters the URLs based on a defined criteria. By default, it filters URLs that end with ".pdf". This filter can be customized to match different file types or URL patterns.
7.  **Output:** The workflow outputs a list of URLs that match the specified filter criteria.

## Services:

-   DuckDuckGo (or any website with a sitemap.xml)

## Hashtags:

#n8n #automation #sitemap #webscraping #urlfiltering
