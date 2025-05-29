# HN Jobs Update

## Use Cases:

- **Job Board Aggregation:** Automatically collect job postings from Hacker News' "Who is Hiring" threads and store them in a structured format for easy browsing.
- **Targeted Job Search:** Filter and extract job opportunities based on specific criteria (e.g., keywords, location, salary) to deliver personalized job recommendations.
- **Data Analysis on Hiring Trends:** Gather and analyze data from "Who is Hiring" posts over time to identify trends in demanded skills, salary ranges, and popular companies.

## How it works:

1.  **Schedule Trigger:** The workflow starts with a Schedule Trigger, which periodically initiates the process (e.g., every 2 minutes).
2.  **Search for Who is hiring posts:** The workflow then searches the Algolia API for Hacker News posts with the title "Ask HN: Who is hiring".
3.  **Split Out:** Splits the `hits` array from the HTTP Request node's JSON response into individual items for processing.
4.  **Get relevant data:** Extracts the `title`, `createdAt`, `updatedAt`, and `storyId` from the job posting.
5.  **Get latest post:** Filters the posts to only include job postings created in the last 30 days.
6.  **HN API: Get Main Post:** Retrieves the main Hacker News post based on the `storyId`.
7.  **Split out children (jobs):** Splits the `kids` array (containing the IDs of individual job postings/comments) into individual items for further processing.
8.  **HI API: Get the individual job post:** Retrieves each individual job posting's content by calling the Hacker News API using the `kids` values.
9.  **Extract text:** Extracts the `text` field from the JSON response of each job post.
10. **Clean text:** Cleans the extracted text by removing HTML tags, special characters, and excessive whitespace.
11. **Limit for testing (optional):** Limits the number of processed items for testing purposes (e.g., to 5 items).
12. **Trun into structured data:** Uses a Large Language Model (LLM) Chain to extract the job post data.
13. **Google Gemini Chat Model:** Uses the Google Gemini Chat Model for AI processing.
14. **Structured Output Parser:** Parses the LLM response into a structured JSON format based on a predefined schema (company, title, location, type, work\_location, salary, description, apply\_url, company\_url).
15. **Code:** Optional JavaScript code node used for additional data transformation or processing; in this case, it converts the salary range to number.
16. **Write results to airtable:** Writes the structured job posting data to an Airtable base.

## Services:

-   **Hacker News API:** Used to fetch job postings and comments.
-   **Algolia API:** Used to search for "Who is Hiring" posts on Hacker News.
-   **Google Gemini (PaLM) API:** Used for language model tasks, like extracting data and creating structured output.
-   **Airtable:** Used to store the extracted and structured job posting data.

## Hashtags:

#n8n #automation #jobsearch #hackernews #airtable
