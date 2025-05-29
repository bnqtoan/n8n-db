# Automate Etsy Data Mining with Bright Data Scrape & Google Gemini

## Use cases:

1.  **Market Research**: Automatically gather data on Etsy products (e.g., wall art) to analyze trends, pricing, and popular items. This helps identify potential market gaps and opportunities for new product offerings.
2.  **Competitor Analysis**: Monitor competitor product listings on Etsy, tracking changes in pricing, descriptions, and reviews. This information can inform competitive strategies and pricing adjustments.
3.  **Lead Generation**: Extract seller information from Etsy to identify potential partners or suppliers. This can be useful for businesses looking to expand their product sourcing network.

## How it works:

1.  **Trigger:** The workflow starts when you manually click ‘Test workflow’.
2.  **Set Etsy Search Query:** Sets the initial Etsy search query URL and the Bright Data zone. The URL includes the search term ("wall art for mum"), sorting by date, and pagination details.
3.  **Perform Etsy Web Request:** Sends a POST request to Bright Data's Web Unlocker API to scrape the Etsy search results page. It passes the URL and zone information.
4.  **Extract Paginated Resultset (Google Gemini):** Uses Google Gemini to analyze the scraped HTML content and extract URLs and page numbers for pagination, creating a result set of URLs to follow.
5.  **Split Out:** Splits the extracted pagination URLs into individual items.
6.  **Loop Over Items:** Loops through the extracted pagination URLs.
7.  **Perform Etsy web request over the loop:** Inside the loop, the workflow sends another POST request to Bright Data’s Web Unlocker to scrape the individual product listing pages.
8.  **Extract Item List with the Product Info:** Uses the n8n AI capabilities via Google Gemini to extract product information from the scraped HTML of each product page, formatted as JSON. The extracted information includes image URL, product name, URL, brand, and offer details.
9.  **Initiate a Webhook Notification for the extracted data:** Sends the extracted product information to a specified webhook URL (e.g., Webhook.site) for notification.
10. **Create a binary data:** create a binary object for writing the file.
11. **Write the scraped content to disk:** Writes the scraped data to a JSON file on disk, naming the file based on the current page number.
12. **Optional Open AI Extraction**: This is an alternative workflow that uses Open AI to perform the data extraction (disabled)

## Services:

*   Etsy
*   Bright Data Web Unlocker API
*   Google Gemini API
*   Webhook.site (or any webhook URL)

## Hashtags:

#n8n #automation #webscraping #etsy #datamining
