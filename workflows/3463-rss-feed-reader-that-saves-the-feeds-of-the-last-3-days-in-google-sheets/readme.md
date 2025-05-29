# Scheduled RSS Feed to Google Sheets Management

## Use cases:

*   **Aggregating News from Multiple Sources:** Automatically collect and store news articles from various RSS feeds into a single Google Sheets document for centralized access and analysis.
*   **Archiving News Articles:**  Regularly archive news articles from specific RSS feeds, allowing for historical tracking and analysis of trends over time.  The workflow automatically removes older entries based on a configurable age (3 days in this case).
*   **Content Curation:** Curate content from different RSS feeds, filter relevant articles, and save them to a Google Sheet for easy sharing and collaboration within a team.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a predefined schedule (configured in the "Schedule Trigger" node) - but the specifics aren't defined in the config.
2.  **Read Links:** Retrieves a list of RSS feed URLs from a Google Sheet named "RSS-Links".
3.  **Loop Over Items1:** Iterates through each RSS feed URL obtained from the Google Sheet.
4.  **RSS:** Fetches the RSS feed content from each URL.
5.  **Edit Fields:** Extracts relevant information from each RSS feed item, such as the `id`, `title`, `content`, `publication date` (`pubDate`), and `categories` (tags), and renames them for easier use in subsequent nodes.
6.  **Code:** Filters the RSS feed items to only include articles published within the last 3 days.
7.  **Loop Over Items:** Iterates through each filtered news article.
8.  **Wait2:** Pause workflow for 1 minute.
9.  **Markdown:** Converts the HTML content of each article to Markdown.
10. **Save News:** Appends or updates the news article information (id, title, output (markdown formatted content), pubDate, category) to another Google Sheet named "RSS-Feeds".
11. **Wait:** Pause workflow for 2.5 seconds to avoid rate limiting issues with Google Sheets API.
12. **Read News:**  Reads all entries in Google Sheet "RSS-Feeds"
13. **Code1:** Retrieves row numbers from Google Sheet, and filter the items to only include articles older than 3 days.
14. **Loop Over Items2:** Iterates through each news article older than 3 days.
15. **Delete News:** Deletes articles older than 3 days to another Google Sheet named "RSS-Feeds".
16. **Wait1:** Pause workflow for 25 seconds to avoid rate limiting issues with Google Sheets API.

## Services:

*   Google Sheets
*   RSS Feeds

## Hashtags:

#n8n #automation #RSS #GoogleSheets #contentCuration
