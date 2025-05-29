# Scrape TikTok Profile & Transcript with Dumpling AI and Save to Google Sheets

## Use cases:

- **Social Media Monitoring:** Track the performance of TikTok creators by automatically extracting profile statistics and video transcripts for analysis.
- **Content Analysis:** Analyze TikTok video content at scale by collecting transcripts and identifying trends or keywords.
- **Lead Generation:** Identify popular TikTok creators in a specific niche and gather their profile data for potential collaborations or marketing opportunities.

## How it works:

This workflow automates the process of scraping TikTok profile data and video transcripts using Dumpling AI and storing the information in a Google Sheet.

1.  **Watch for New TikTok Links in Sheet:** The workflow starts by monitoring a specified Google Sheet for new rows containing TikTok video URLs.
2.  **Extract Username from TikTok URL:** Once a new URL is detected, the workflow extracts the TikTok username from the URL using a regular expression.
3.  **Get TikTok Profile Data using Dumpling AI:** The extracted username is then used to query the Dumpling AI API to retrieve the creator's profile statistics, such as follower count, following count, video count, and heart count.
4.  **Get TikTok Video Transcript using Dumpling AI:** The workflow utilizes the TikTok video URL to call the Dumpling AI API and retrieve the video's transcript.
5.  **Save Profile Stats and Transcript to Google Sheet:** Finally, the workflow appends the extracted username, profile statistics, video URL, and transcript to a Google Sheet for easy access and analysis.

## Services:

-   **Google Sheets:** Used as a trigger and data storage.
-   **Dumpling AI:** Provides TikTok profile data and video transcripts via its API.

## Hashtags:

#n8n #automation #TikTok #dataScraping #GoogleSheets
