# AI-Powered News to Video Generator with Heygen & GPT4o

## Use cases:

- **Automated Content Creation:**  Transforms news articles from RSS feeds into engaging videos for social media or YouTube, saving content creators time and effort.
- **Marketing and Social Media:**  Automatically generate video content based on trending news to attract viewers and increase brand awareness.
- **Personalized News Digests:** Create personalized video news summaries based on specific topics or RSS feeds for individual users.

## How it works:

This workflow automates the process of turning news articles into videos using AI. Here's a breakdown:

1. **Trigger:** The workflow is triggered manually using the "When clicking ‘Test workflow’" node.
2. **Fetch News:** The "RSS Read" node fetches news articles from a specified RSS feed.
3. **Limit Articles:** The "Limit1" node limits the number of articles processed.
4. **Log to Google Sheet:** The "log news to sheets" node logs the title to Google Sheet.
5. **AI Agent** An AI agent that processes the articles using other language models and tools.
6. **Caption Generation**: The "parse caption" node processes the output from the AI Agent, likely extracting or formatting a suitable caption for the video.
7. **Heygen Setup**: The "Setup Heygen" node configures the Heygen service, likely setting API keys and other necessary parameters.
8. **Create Avatar Video**: The "Create Avatar Video" node sends a request to Heygen to create a video using a specified avatar and the generated script.
9. **Wait:** The "Wait" node pauses the workflow execution until the video is processed by Heygen.
10. **Get Avatar Video**: The "Get Avatar Video" node retrieves the video from Heygen using an HTTP request.
11. **Download Video**: The "Download video" node downloads the video from Heygen.
12. **Google Drive**: The "Google Drive" node (currently disabled) would likely upload the downloaded video to Google Drive.
13. **Log to Google Sheet:** The "Log video url and title to sheets" node logs the title and video URL to Google Sheets for tracking and reporting.

## Services:

- **Heygen:**  AI video generation platform for creating videos with avatars.
- **GPT4o:** OpenAI language model to help with script writing
- **Google Sheets:**  Spreadsheet service for logging news and video information.
- **Google Drive:**  Cloud storage service (intended use) for storing the generated videos.
- **RSS Feed:** Retrieving data from RSS Feed.

## Hashtags:

#n8n #automation #videoGenerator #heygen #contentCreation #AI
