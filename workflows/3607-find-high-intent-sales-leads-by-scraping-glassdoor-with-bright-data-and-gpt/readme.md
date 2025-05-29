# Glassdoor Job Listings Scraper for Prospecting with Bright Data and LLMs

## Use cases:

- **Automated Lead Generation:** Automatically identify companies hiring for specific roles (e.g., marketing, content creation) and generate personalized icebreaker messages to initiate contact.
- **Targeted Content Outreach:** Discover companies that could benefit from content repurposing services based on their job postings and create custom pitches.
- **Competitor Analysis:** Monitor the hiring trends of competitors by tracking their Glassdoor job postings and gathering insights into their organizational structure and needs.

## How it works:

1.  **Form Submission:** The workflow starts with a form where you input the desired job location, keywords, and country for the search.
2.  **Bright Data Trigger:** The form data is sent to Bright Data's API to initiate a job scraping task on Glassdoor based on the specified criteria. The workflow sends a POST request to the Bright Data API, which triggers a new dataset snapshot.
3.  **Polling Bright Data:** The workflow then enters a loop, periodically checking the status of the Bright Data snapshot.
4.  **Snapshot Progress Check:** An HTTP Request node polls the Bright Data API to determine if the data snapshot is ready.  The `If` node checks the status; if it's "running," the workflow waits for a specified time (e.g., minutes) and checks again.
5.  **Data Retrieval:** Once the snapshot is complete, the workflow retrieves the scraped job data from Bright Data using an HTTP Request node, fetching the data in JSON format.
6.  **Data Storage:** The retrieved job data is appended to a Google Sheet for further processing and analysis.
7.  **Data Processing:** The workflow splits the data for each job post into individual items.
8.  **LLM-Powered Pitch Generation:** For each job posting, the workflow uses a LLM to analyze the job description, company name, and job title. If the role is related to marketing, content creation, or audience engagement, the LLM generates 1-2 concise icebreaker sentences tailored to the company and job context. If not, the response is skipped.
9.  **Pitch Update:** The generated pitch is updated to the initial Google sheet, for further usage and outreach.

## Services:

-   **Bright Data:** A data collection platform used to scrape job listings from Glassdoor.
-   **Google Sheets:** A spreadsheet program used to store the scraped job data and generated pitches.
-   **OpenAI:** An artificial intelligence research and deployment company.

## Hashtags:

#n8n #automation #webscraping #leadgeneration #LLM
