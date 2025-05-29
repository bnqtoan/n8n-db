# LinkedIn Job Data Scraper to Google Sheets

## Use cases:
- **Job Hunting:** Automatically scrape and filter fresh job postings from LinkedIn based on your criteria (location, keywords, job type, etc.) and save them to Google Sheets for easy tracking and application.
- **Sales Prospecting:** Identify companies that are currently hiring, indicating potential growth and need for services, and store the data in Google Sheets to enrich lead lists.
- **Market Research:** Monitor hiring trends for specific roles or industries to gain insights into market demand and skills in demand, leveraging the data within Google Sheets for analysis.

## How it works:
1.  **Form Submission:** The workflow starts when a user submits a form specifying job search criteria (location, keywords, country).
2.  **Bright Data API Trigger:**  The workflow uses an HTTP Request node to trigger a snapshot in Bright Data's Dataset API, passing the user's search parameters. This initiates the job scraping process on Bright Data.
3.  **Polling for Data Readiness:** A Wait node, combined with an HTTP Request node that checks the snapshot progress, creates a loop to poll Bright Data until the job data is ready.
4.  **Data Retrieval:** Once the snapshot is complete, another HTTP Request node retrieves the scraped data from Bright Data.
5.  **Data Cleaning:** A Code node cleans and transforms the data.  It flattens nested fields (e.g., `job_poster`, `base_salary`) and removes HTML tags from job descriptions for better readability.
6.  **Google Sheets Integration:** The cleaned job data is then appended to a specified Google Sheet, with each job posting populating a new row.

## Services:
-   **Bright Data:** Used for scraping job postings from LinkedIn.
-   **Google Sheets:** Used for storing and organizing the scraped job data.

## Hashtags:
#n8n #automation #linkedin #jobs #scraping
