# 🎦🚀 YouTube Video Comment Analysis Agent

## Use cases:

- **Content Strategy Optimization:** Analyze viewer comments to understand audience preferences and identify topics for future YouTube videos, leading to increased engagement and viewership.
- **Sentiment Monitoring and Brand Management:** Automatically assess the sentiment expressed in YouTube comments to gauge public perception of a video or brand, enabling proactive reputation management.
- **Feedback Integration:** Gather and process feedback from video comments to improve content quality, address viewer concerns, and foster a stronger sense of community.

## How it works:

1.  **Trigger**: The workflow is triggered manually or by another workflow and takes a YouTube video ID as input.
2.  **Variables**: Stores the YouTube Video ID and Google API Key. The Google API key is used to get data from YouTube API.
3.  **YouTube Video Details**: Constructs a YouTube API URL to retrieve video details (title, description, views, etc.) using the provided video ID and API key.
4.  **YouTube Video Comments**: Constructs a YouTube API URL to retrieve video comments using the provided video ID and API key, with pagination to handle a larger number of comments.
5.  **Data Merging**: The video details and comments are combined into a single JSON object.
6.  **AI-Powered Analysis**: The combined data is then passed to a Large Language Model (LLM) `gpt-4o-mini` via a Langchain Agent, which analyzes the video details and comments, generating a detailed report. The agent uses a prompt with instructions to generate a comprehensive report.
7.  **Report Formatting**: The report is formatted into HTML using a Markdown to HTML converter node.
8.  **Report Delivery**: The HTML report is sent via email using the Gmail node and saved to a Google Drive folder.

## Services:

*   YouTube API: Used to retrieve video details and comments.
*   Google Sheets: Used to save the report to Google Drive
*   Gmail: Used to email the report.
*   LangChain/OpenAI: Used for sentiment analysis and report generation.

## Hashtags:

#n8n #youtube #automation #commentsAnalysis #contentStrategy
