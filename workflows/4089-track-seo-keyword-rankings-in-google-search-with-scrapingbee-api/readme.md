# My workflow

## Use cases:

*   **Automated SEO Reporting:** Automatically generate and email SEO reports based on Google SERP data. This eliminates the need for manual data collection and report creation.
*   **Competitor Analysis:** Track competitor rankings on specific keywords and receive regular reports on their performance.
*   **Keyword Monitoring:** Monitor keyword rankings over time and identify trends or potential issues.

## How it works:

1.  **Start:** The workflow is triggered by a "Form Trigger" node. This could be a webhook activated by a form submission or any other event.
2.  **Assign Valid Values:** The "Assign Valid Values" code node likely prepares data received from the trigger node to be used in the HTTP request.
3.  **Scrape Google SERPs:** The "Scrape Google SERPs" node sends an HTTP request to Google Search to scrape search engine results pages (SERPs) based on input parameters. This node's parameters are not defined in the provided json.
4.  **Build HTML Data Tables:** The "Build HTML Data Tables" code node processes the data extracted from the Google SERPs and transforms it into an HTML table format.
5.  **Build CSV Data Tables:** The "Build CSV Data Tables" code node processes the data extracted from the Google SERPs and transforms it into a CSV table format.
6.  **Mail SEO Report:** The "Mail SEO Report" node sends an email with the generated HTML table (likely including the scraped SERP data) using the Mailjet service.
7.  **Download SEO Report:** The "Download SEO Report" node converts the data from the "Build CSV Data Tables" node into a downloadable CSV file.

## Services:

*   **Google Search (via HTTP Request):** Used for scraping search engine results pages.
*   **Mailjet:** Used for sending email reports.

## Hashtags:

#n8n #SEO #Automation #SERP #Reporting
