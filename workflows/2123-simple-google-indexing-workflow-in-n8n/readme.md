# Simple indexing workflow using the Google Indexing API

## Use cases:

- **Automatically submit website URLs to Google Indexing API:** When content is updated or created on a website, this workflow automatically submits the URLs to Google for indexing, ensuring search results stay up-to-date.
- **Scheduled re-indexing of website content:** Schedule regular submissions of website URLs to Google Indexing API, ensuring that even infrequently updated content is regularly re-indexed.
- **Troubleshooting Indexing Issues:** Quickly re-index URLs that may have been dropped from the Google index or are not appearing in search results as expected.

## How it works:

1.  **Trigger:** The workflow starts either manually ("When clicking \"Execute Workflow\"") or on a schedule ("Schedule Trigger").
2.  **Fetch Sitemap:** An HTTP Request node ("sitemap_set") retrieves the website's sitemap XML file from `https://bushidogym.fr/sitemap.xml`.
3.  **Convert XML to JSON:** An XML node ("sitemap_convert") parses the XML content of the sitemap and converts it into a JSON format.  The options ensure the output is clean and easily processed.
4.  **Parse URLs:** A Split Out node ("sitemap_parse") extracts individual URLs from the `urlset.url` array within the parsed sitemap JSON.
5.  **Set URL:** The extracted URL is set in the correct format in the "url_set" node.
6.  **Loop through URLs:** A Split In Batches node ("loop") processes each URL individually.
7.  **Submit URL to Google Indexing API:** An HTTP Request node ("url_index") submits the URL to the Google Indexing API, requesting an update (`URL_UPDATED`).  It uses pre-defined Google API credentials.
8.  **Check Index Status:** The "index_check" node verifies if the response from the Google Indexing API confirms that the URL was updated
9.  **Wait:** A Wait node ("wait") pauses the workflow for 2 seconds before processing the next URL.
10. **Error Handling:** An If node ("index_check") checks the response from the Google Indexing API. If the URL was not updated, the workflow continues. If the API limit is reached, a Stop and Error node ("Stop and Error") halts the workflow and displays an error message.

## Services:

-   Google Indexing API
-   `https://bushidogym.fr/sitemap.xml`

## Hashtags:

#n8n #automation #googleindexingapi #sitemap #indexing
