# Google Site Index - sitemap.xml example

## Use cases:

- **Automated Indexing of Website Updates:** Automatically submit updated URLs to Google's Indexing API whenever content on a website is modified, ensuring search engines have the most current version.
- **Prioritized Indexing for Time-Sensitive Content:** For news websites or blogs, this workflow can prioritize the indexing of newly published articles, increasing their visibility in search results.
- **Regular Sitemap Submission:** Schedule daily or hourly submissions of your sitemap to Google, ensuring all pages are crawled.

## How it works:

1.  **Trigger:** The workflow starts either manually or on a schedule (e.g., daily).
2.  **Get sitemap.xml:** Retrieves the sitemap XML file from a specified URL (e.g., `https://wordpress.org/sitemap.xml`).
3.  **Convert sitemap to JSON:** Converts the XML content of the sitemap into a JSON format for easier data manipulation.
4.  **Get content-specific sitemaps:** Extracts URLs of individual content sitemaps.
5.  **Get content of each sitemap:** For each sitemap from previous node, retrievs the content.
6.  **convert page data to JSON:** Converts the XML content of each sitemap into a JSON format for easier data manipulation.
7.  **Force urlset.url to array:** Converts the `urlset.url` field to an array.
8.  **Split Out:** Splits the array of URLs into individual items for processing.
9.  **Sort:** Sorts the URLs by last modified date in descending order (newest first).
10. **Assign mandatiry sitemap fields:** Assigns and validates the `lastmod` (last modified date) and `loc` (URL) fields, ensuring they conform to the sitemap protocol.
11. **Loop Over Items:** Iterates through each URL extracted from the sitemap.
12. **Check status:** Check URL metadata against the Indexing API.
13. **is new?:** Compares the `lastmod` date from the sitemap with the last indexing time. If the sitemap date is newer it goes to step 14, otherwise, waits before re-checking.
14. **URL Updated:** Submits the URL to Google's Indexing API, notifying it of the updated content.
15. **Wait:** Pauses the workflow execution for a short, randomized period to avoid overloading the API.

## Services:

-   Google Indexing API
-   Any website with sitemap.xml (e.g. Wordpress)

## Hashtags:

#n8n #GoogleIndexingAPI #SEO #Sitemap #Automation
