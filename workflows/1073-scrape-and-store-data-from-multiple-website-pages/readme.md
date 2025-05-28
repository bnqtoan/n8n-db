# extract_swifts

## Use cases

- **Business Intelligence:** Extracting SWIFT codes associated with different banks, cities, and branches to enrich business intelligence platforms or databases for enhanced financial analysis.
- **Compliance and Regulatory Checks:** Gathering information on financial institutions to assist in compliance checks, KYC (Know Your Customer) processes, and regulatory reporting.
- **Financial Data Aggregation:** Building a comprehensive database of SWIFT codes along with bank details for research purposes or to provide a reference service for other financial applications.

## How it works

This n8n workflow automates the extraction of SWIFT codes and associated information from the website `theswiftcodes.com`. Here's a breakdown:

1.  **Trigger:** The workflow starts with a manual trigger node, allowing users to initiate the extraction process.
2.  **Initial HTTP Request:** It fetches the main country listing page from `https://www.theswiftcodes.com/browse-by-country/`.
3.  **Extract Country URLs:** It parses the HTML content to extract the URLs for each country's SWIFT code directory using the `HTML Extract` node and saves the urls into `countries` array.
4.  **Prepare countries:** Uses a function node to iterate over countries and create an array of object with the country as value.
5.  **Split Into Batches:** The workflow splits the list of country URLs into individual items to handle each country separately.
6.  **Normalize country name:** Uses uProc API to normalize the country name.
7.  **Dynamic Page URL Creation:**
    -   **Set Page to Scrape:** A Function Item node is used to manage pagination. It checks for existing page URLs stored in workflow static data. If none are found, it initializes with the base country URL.
    -   **Set:** Construct the specific URL to scrape based on the current country and page number.
    -   **Generate filename:** create an unique file name to save the content
8.  **Cache Mechanism:** To improve efficiency and avoid redundant requests, the workflow implements a caching mechanism:
    -   **Read Binary File:** Before making an HTTP request, it attempts to read a locally cached HTML file (named based on the URL) for the current page.
    -   **File exists?:** It checks if the file exists and contains valid HTML data. If so, it skips the HTTP request and proceeds directly to data extraction.
    -   **HTTP Request1:** If the cached file doesn't exist or is invalid, an HTTP request is made to fetch the HTML content of the page.
    -   **Write Binary File:** The fetched HTML content is then saved as a binary file in the cache for future use.
    -   **Wait:** The workflow waits a few seconds to avoid DDOS flagging.
9.  **Data Extraction:** The `HTML Extract1` node extracts SWIFT codes, bank names, cities, and branch information from the HTML content. It also looks for the next page URL to handle pagination.
10. **Data Transformation:** The `Prepare Documents` function node transforms the extracted data into a structured format suitable for database insertion. It combines the extracted information with the ISO country code (obtained from uProc), country name, and page number.
11. **Database Insertion:** The `MongoDB1` node inserts the extracted and transformed data into a MongoDB collection named `swifts.meetup`.
12. **Pagination Handling:**
    -   **Set More Pages:** A Function node determines if there is a "next page" link in the scraped content. If a "next page" link exists, it updates the workflow static data with the new page URL and sets a flag `more_pages` to `true`. If no "next page" link is found, it deletes the stored page URL from static data and sets `more_pages` to `false`.
    -   **More Pages:** An If node checks the `more_pages` flag. If `true`, the workflow loops back to the "Set Page to Scrape" node to scrape the next page. If `false`, it proceeds to the next country.
13. **Country Iteration:**
    -   **More Countries:** An If node checks if there are more countries to process. If so, the workflow loops back to the "SplitInBatches" node to process the next country. If not, the workflow completes.
14. **Directory management**:
    -   **Create Directory:** Creates the `scrapper` directory to save the html content if not exists

## Services

-   [theswiftcodes.com](https://www.theswiftcodes.com/): Source website for SWIFT code data.
-   [uProc API](https://uproc.io/): API to get normalized country name.
-   MongoDB: Database to store the extracted SWIFT code data.

## Hashtags

#n8n #automation #swiftcodes #webscraping #financialdata
