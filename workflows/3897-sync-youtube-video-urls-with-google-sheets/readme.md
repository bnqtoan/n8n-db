# Sync Youtube Video Urls with Google Sheets

## Use cases:

*   **Content Aggregation:** Automatically collect and store YouTube video URLs from specific channels in a Google Sheet for content curation or archival purposes.
*   **Competitor Analysis:** Track video uploads from competitor YouTube channels and monitor their content strategy.
*   **Personal Learning:** Gather videos from educational YouTube channels to create a personalized learning resource in a Google Sheet.

## How it works:

1.  **Manual Trigger:** The workflow starts with a manual trigger, allowing you to initiate the process with a click.
2.  **Get Youtube Channel Ids from Google Sheet:** Reads YouTube channel IDs from a specified Google Sheet (`Sheet3` in the "Youtube Videos Comments" document).
3.  **Get Youtube Video Urls form specific channel:** Uses the YouTube Data API to fetch video URLs for each channel ID retrieved in the previous step. It retrieves the `snippet` which contains the title, and published date. The `channelId` and the `nextPageToken` is required for pagination.
4.  **Split Out:** Splits the output of the YouTube API call (which contains an array of video items) into individual items for processing.
5.  **Format fields as required to save in google sheet:** Formats the data extracted from the YouTube API response. It creates fields for `Title`, `video_urls`, and `published_at`.
6.  **Insert & Update Youtube Urls in Google Sheet:** Appends or updates the video URLs, titles, and publish dates into another specified Google Sheet (`Sheet2` in the "Youtube Videos Comments" document). It matches existing entries based on the `video_urls` column.

## Services:

*   Google Sheets
*   YouTube Data API

## Hashtags:

#n8n #youtube #googlesheets #automation #datacollection
