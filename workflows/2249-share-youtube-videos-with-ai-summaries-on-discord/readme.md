# YouTube Videos with AI Summaries on Discord

## Use cases:

- **Content Promotion:** Automatically post summaries of new YouTube videos to a Discord server to notify members and entice them to watch the full video.
- **Community Engagement:** Keep Discord communities updated on channel content without manual posting, fostering discussions around key video takeaways.
- **Content Archival:** Create a searchable archive of video summaries within a Discord channel for quick reference and knowledge sharing.

## How it works:

1.  **YouTube Video Trigger:** The workflow starts by monitoring a specified YouTube channel for new video uploads using the RSS feed.  It checks every minute.
2.  **Retrieve Caption Data:** Once a new video is detected, the workflow uses the YouTube API to retrieve the caption data, specifically searching for caption tracks associated with the video.
3.  **Find English Captions:** Filters the caption data to find the English caption file.
4.  **Download Captions:** Downloads the content of the English caption file from YouTube.
5.  **Caption File Conversion:** Extracts the text content from the downloaded caption file.
6.  **Caption Summary with ChatGPT:**  The extracted transcript is then sent to ChatGPT (using the OpenAI API) to generate a concise summary in three bullet points highlighting the video's main points and its value proposition.
7.  **Post to Discord:** Finally, the generated summary, along with the video title and a direct link to the video, is posted to a designated Discord channel via a webhook.

## Services:

-   YouTube API
-   OpenAI API (ChatGPT)
-   Discord

## Hashtags:

#n8n #YouTube #Discord #AISummary #Automation
