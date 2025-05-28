# HN Who is Hiring Scrape

## Use cases:

- **Job Aggregation:** Automatically collect job postings from Hacker News' "Who is Hiring?" threads and store them in a structured format for easy browsing.
- **Targeted Job Search:** Filter and analyze job postings based on specific criteria (e.g., keywords, location, job type) to find relevant opportunities.
- **Market Analysis:** Track hiring trends and company activity based on the data extracted from the "Who is Hiring?" threads over time.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger, initiating the job scraping process.
2.  **Search Hacker News:** It uses the Algolia API to search for "Ask HN: Who is hiring?" posts, sorted by date.
3.  **Split Posts:** Splits the search results to process each individual post separately.
4.  **Extract Relevant Data:** Extracts key information from each post, such as the title, creation date, update date, and story ID.
5.  **Filter Recent Posts:** Filters the posts to only include the ones created in the last 30 days.
6.  **Get Main Post Content:** Uses the Hacker News API to retrieve the content of the main "Who is Hiring?" post using the `storyId`.
7.  **Split Job Postings:** Splits the main post content into individual job postings based on the `kids` (comments/replies).
8.  **Get Job Post Details:** Uses the Hacker News API to fetch the details of each individual job posting.
9.  **Extract Text from job postings:** Extracts the raw text from each job posting.
10. **Clean job postings:** Cleans up the raw text by removing HTML tags, special characters, and extra whitespace.
11. **Limit for Testing:** Limit the items to process for testing purpose
12. **Transform data to structured format:** Uses an OpenAI Chat Model to extract relevant information from the job description text and transform it to a structured format (company, title, location, job type, etc.).
13. **Store data in Airtable:** Writes the extracted and structured data to an Airtable base and table.

## Services:

-   Hacker News API (Firebase)
-   Algolia API
-   OpenAI
-   Airtable

## Hashtags:

#n8n #automation #webscraping #jobsearch #hackernews
