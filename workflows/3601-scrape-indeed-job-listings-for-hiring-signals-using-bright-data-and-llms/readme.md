# Indeed Job Scraping for Hiring Signals with Bright Data and LLMs

## Use cases:

- **Automated Job Search:** Automatically search Indeed for job postings based on specific criteria (location, keywords, country) and store the results in a Google Sheet.
- **Personalized Job Fit Assessment:** Use an LLM to analyze job descriptions and determine if they align with your skills and career goals, flagging potentially relevant opportunities.
- **Competitor Monitoring:** Track job postings from specific companies to gain insights into their hiring needs and potential growth areas.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form with job search criteria: location, keywords, and country.
2.  **Bright Data API Call:** The form data is sent to the Bright Data API to trigger a job scraping task on Indeed.
3.  **Polling Bright Data:** The workflow waits and periodically checks the status of the Bright Data snapshot until the data is ready.
4.  **Data Retrieval:** Once the snapshot is complete, the scraped job postings are retrieved from Bright Data.
5.  **Google Sheets Integration:** The retrieved job postings are added to a Google Sheet.
6.  **Splitting Data:** Split the data and send each company to the LLM.
7.  **LLM-Powered Fit Assessment:** Each job posting is sent to an LLM (e.g., GPT-4) to determine if the job is a good fit based on the user's specified criteria.
8.  **Google Sheets Update:** The Google Sheet is updated with the LLM's assessment ("YES" or "NO") for each job posting.

## Services:

-   **Bright Data:** Used for web scraping of Indeed job postings.
-   **Google Sheets:** Used to store and manage the scraped job data and LLM assessments.
-   **OpenAI:** Used for analyzing job descriptions and determining job fit.

## Hashtags:

#n8n #automation #jobsearch #webscraping #LLM
