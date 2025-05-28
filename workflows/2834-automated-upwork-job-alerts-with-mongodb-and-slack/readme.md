# Upwork Job Scraper and Notifier

## Use cases:

- **Job Search Automation:** Automatically search Upwork for jobs matching specific keywords (e.g., "python", "java") and receive notifications for new postings.
- **Targeted Job Alerts:** Filter job postings based on budget, skills, and other criteria, and only receive alerts for jobs that meet your specific requirements.
- **Market Research:** Track job postings over time to understand trends in demand for specific skills and technologies.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule (every 10 minutes in this case).
2.  **If Working Hours:** Checks if the current hour falls within a specified range (between 2 and 15). This is used to limit notifications to working hours.
3.  **Assign parameters:** Defines the `startUrls` (the Upwork search URLs for "python" and "java" jobs) and `proxyCountryCode` (set to "FR").
4.  **Query For Upwork Job Posts:** Sends a POST request to the Apify Upwork Scraper actor with the `startUrls` and `proxyCountryCode` as parameters. It retrieves a list of job postings from Upwork.
5.  **Find Existing Entries:** Queries a MongoDB database to check if a job posting with the same title and budget already exists.
6.  **Output New Entries:** Merges the results from the Apify scraper and the MongoDB query. Only new job postings that are not already in the database are passed on.
7.  **Add New Entries To MongoDB:** Inserts the new job postings into the MongoDB database.
8.  **Send message in #general:** Sends a message to a specified Slack channel (`#general`) with details of the new job posting, including the title, published date, link, payment type, budget, skills, and bio.

## Services:

-   **Upwork:** Job posting platform.
-   **Apify:** Web scraping and automation platform (using the `upwork-scraper-with-fresh-job-posts` actor).
-   **MongoDB:** Database to store job postings and prevent duplicate notifications.
-   **Slack:** Messaging platform for notifications.

## Hashtags:

#n8n #automation #upwork #jobsearch #webscraping
