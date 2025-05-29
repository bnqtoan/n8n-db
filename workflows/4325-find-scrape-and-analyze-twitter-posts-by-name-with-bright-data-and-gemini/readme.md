# Find Twitter Profile by Name, Scrape Posts & Analyze Content with AI, save in Google Sheets.

## Use cases:

- **Market Research**: Analyze the social media activity of key individuals in a specific industry to understand their interests, sentiments, and influence.
- **Reputation Management**: Monitor the online presence of a public figure or brand by scraping and analyzing their posts for sentiment and key topics.
- **Lead Generation**: Identify potential leads by analyzing the Twitter activity of individuals matching a specific profile or interest.

## How it works:

1.  **Form Submission**: The workflow starts when a user submits a form with the name of the person to analyze, along with the start and end dates for post analysis.
2.  **Google Search URL Creation**: Creates a Google search URL to find the X (formerly Twitter) profile of the specified person, using the `site:x.com` operator for targeted search.
3.  **Bright Data Web Scraper**: Uses Bright Data to scrape the Google search results page.
4.  **Extract Body and Title from Website**: Extracts the title and body from the scraped webpage (Google Search Result).
5.  **Parse X Url**: Uses a Google Gemini Chat Model to parse the scraped body, extracting the Twitter profile URL.
6.  **X Profile Verification**: Checks if a Twitter profile URL was found. If not, it responds to the user with "Profile Not Found".
7.  **Snapshot Request (Bright Data)**: If a profile is found, it requests a snapshot of X posts from Bright Data within the specified date range.
8.  **Polling**: Repeatedly checks the status of the Bright Data snapshot.
9.  **Snapshot Content Extraction**: Once the snapshot is ready, the data of Twitter Posts is extracted.
10. **Error Checking**: Checks for errors in Bright Data Snapshot Content
11. **Data Transformation**: The code node transforms the extracted post data into a structured format.
12. **AI-Powered Analysis**: Uses a Google Gemini Chat Model to analyze the extracted posts, identifying interests, sentiments, and common topics, and returning a summary.
13. **Google Sheets Integration**: Appends the analyzed data, including the person's name, Twitter URL, post data, analysis summary, and date range, to a specified Google Sheet.

## Services:

-   **Google Sheets**: For storing the analyzed data.
-   **Bright Data**: For web scraping and data extraction.
-   **Google Gemini Chat Model**: For parsing and content analysis.

## Hashtags:

#n8n #automation #twitter #datascience #socialmediaanalysis
