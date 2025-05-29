# Automated Resume Job Matching Engine with Bright Data & OpenAI 4o mini

## Use cases:

- **Automated Job Application Screening:**  HR departments can automatically screen job applications by comparing resumes against job descriptions, identifying the most suitable candidates, and ranking them based on skill match scores.
- **Personalized Job Recommendations:** Job seekers can use this workflow to identify job opportunities that closely match their skills and experience, receiving a match score and recommendations for improving their resume.
- **Talent Acquisition:** Recruiters can quickly identify potential candidates by extracting job descriptions from LinkedIn, comparing them against a database of resumes, and identifying candidates with the best skill alignment.

## How it works:

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" node.
2.  **List Bright Data Tools:** A list of all the tools available in Bright Data will be shown.
3.  **Set Input Fields:** The workflow sets the input parameters such as resume text, keywords for job search, location, and the base URL for LinkedIn job searches.
4.  **Extract Job Listings:** The "Bright Data MCP Client For Jobs Extraction" node uses Bright Data to scrape job listings from LinkedIn based on the provided keywords and location.
5.  **Extract Paginated Data:** The OpenAI model will automatically extract the paginated job data.
6.  **Split Job Links:** The "Split Out" node divides the extracted data containing multiple job listing URLs into individual items.
7.  **Loop Through Job Links:** The "Loop Over Items" node iterates over each job listing URL extracted in the previous step.
8.  **Scrape Job Description:** For each job URL, the "Bright Data MCP Client For Jobs Extraction within a Loop" node scrapes the job description from the individual job posting page.
9.  **Extract Job Description (Textual):** The "Job Desc Information Extractor" node uses an OpenAI model to extract the job description in a textual format from the scraped HTML content.
10. **AI Job Match:** The "AI Job Match" node employs an OpenAI model to analyze the resume (from the "Set the Input fields" node) and the extracted job description to generate a job matching score and analysis.
11. **Parse Output:** The job matching analysis is structured using an output parser.
12. **Prepare Data for Output:** The "Create a binary data for AI Job Match" node converts the AI job match results into a binary data format.
13. **Webhook Notification:** The "Webhook Notification for AI Job Match" node sends the job match response to a specified webhook URL.
14. **Store Data on Disk:** The workflow saves the job matched response in a file on disk with a unique name.

## Services:

-   Bright Data: Used for web scraping of job listings and job descriptions.
-   OpenAI: Used for extracting job descriptions and generating the job match analysis and score.
-   Webhook (Generic): Used for sending job match notifications.

## Hashtags:

#n8n #automation #jobMatching #AI #HR
