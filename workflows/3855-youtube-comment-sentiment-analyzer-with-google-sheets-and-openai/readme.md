# YouTube Comment Sentiment Analyzer

## Use cases:

- **Brand Monitoring:** Track public sentiment towards your YouTube content to understand audience perception and identify potential PR issues.
- **Content Optimization:** Analyze comments to gain insights into what viewers like or dislike, and use this feedback to improve future video content.
- **Customer Support:** Identify negative comments that may require a response from your customer support team, addressing concerns and improving customer satisfaction.

## How it works:

1.  **Trigger:** The workflow starts manually by clicking "Execute Workflow".
2.  **Get Video URLs from Google Sheets:** It retrieves a list of YouTube video URLs, `last_fetched_time`, and `next_fetch_time` from a specified Google Sheet.
3.  **Check Fetch Time:**
    *   The workflow checks if `next_fetch_time` column is empty. if the column is empty proceed with fetching youtube comments.
    *   It verifies if the `next_fetch_time` is before the current time. If it is, the workflow proceeds. Otherwise, it stops.
4.  **Get Comments for Video URLs:** The workflow extracts the video ID from each URL and uses the YouTube Data API v3 to fetch comments for that video.  It retrieves a maximum of 100 comments per page and handles pagination to get all comments using the `nextPageToken` from the YouTube API response.
5.  **Check Success Response:** Check if the youtube API give 200 as a response.
6.  **Split Out:** It splits the list of comments into individual items for sentiment analysis.
7.  **Analyze Sentiment of Every Comment:** Each comment is sent to OpenAI to determine its sentiment (Positive, Neutral, or Negative).  A system prompt instructs OpenAI to categorize the sentiment and format the output as JSON.
8.  **Format Fields as Required to Save in Google Sheet:** It formats each comment's data, including the comment ID, video URL, comment text, author name, number of likes, number of replies, sentiment, and publish date.
9.  **Insert and Update Comment in Google Sheet:** This formatted data is then appended or updated to another Google Sheet (Sheet1), using the comment ID as the matching column to prevent duplicates.
10. **Update last fetched time and next_fetch_time:** Finally, the workflow updates the `last_fetched_time` and `next_fetch_time` in the Google Sheet (Sheet2) with current and future time.

## Services:

-   Google Sheets
-   YouTube Data API v3
-   OpenAI API

## Hashtags:

#n8n #automation #sentimentanalysis #youtube #googlesheets
