# Analyzes YouTube comments using AI to detect sentiment automatically

## Use cases:

- **Content Creator Feedback Analysis:** Automatically analyze sentiment of YouTube comments to gauge audience reaction to videos and identify areas for improvement.
- **Brand Monitoring:** Track public sentiment towards a brand or product mentioned in YouTube comments to manage reputation and identify potential issues.
- **Market Research:** Collect and analyze comments from YouTube videos related to specific products or services to understand consumer opinions and preferences.

## How it works:

The workflow starts with a manual trigger. Then retrieves YouTube comments. The workflow fetches YouTube comments using the YouTube API (via HTTP Request), splits the comments for individual processing, and saves them to a Google Sheet. It then loops through each comment, uses an AI model (Google Gemini) for sentiment analysis, and updates the sentiment score in the Google Sheet. The workflow also handles pagination to retrieve all comments, even if there are multiple pages of results.

**Key nodes:**

- **When clicking ‘Test workflow’:** Manually starts the workflow.
- **Get comments:** Retrieves parameters to connect with Google Sheets.
- **ID Video:** Set node to set the video ID.
- **Get API Comments:**  Fetches comments from the YouTube API based on a video ID.
- **Multipage?:** Checks if there are more pages of comments.
- **nextPageToken:** Set node to set the next page token for pagination.
- **Comments:**  Formats the data before split the comments.
- **Split comments:** Splits the array of comments into individual items.
- **Save comments:** Saves the initial comments into a Google Sheets.
- **Loop Over Comments:** Iterates over each individual comment.
- **Google Gemini:** Determines the sentiment of each comment using an AI language model.
- **Sentiment Analysis:** Performs sentiment analysis on the YouTube comments.
- **Update sentiment:** Updates the sentiment for each comment in a Google Sheets.

## Services:

- YouTube API
- Google Sheets
- Google Gemini API

## Hashtags:

#n8n #automation #YouTube #SentimentAnalysis #GoogleSheets
