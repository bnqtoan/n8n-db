# ⚡📽️ Ultimate AI-Powered Chatbot for YouTube Summarization & Analysis

## Use cases:

- **Content Analysis**: Quickly analyze long YouTube videos by querying specific sections or extracting summaries.
- **Research and Learning**: Use the AI agent to gain insights from educational videos or tutorials without watching them in full.
- **Content Creation**: Repurpose YouTube transcripts into blogs, social media posts, or other content formats.

## How it works:

This workflow automates the process of extracting information from YouTube videos and enabling conversational interaction with an AI agent about the video content.

1.  **Trigger**: The workflow is triggered either by a chat message or by another workflow passing a YouTube video ID.
2.  **Variables Setup**: It sets up the `VIDEO_ID` and `GOOGLE_API_KEY` from the trigger input or predefined values.
3.  **YouTube API URL Creation**: It constructs a YouTube Data API URL to fetch video details using the video ID and API key.
4.  **Video Details Retrieval**: It retrieves video details (title, description, etc.) from the YouTube API using an HTTP Request node.
5.  **Transcript Retrieval**: It fetches the transcript of the YouTube video using the `youtube-transcript` package within a Code node.
6.  **Transcript Processing**: The transcript is split into segments and then combined into a single text.
7.  **Data Merging**: Video details and the transcript are merged.
8.  **AI Agent Interaction**:  The YouTube video ID is extracted from the user's input. The video details and transcript are then passed to an AI Agent (Langchain Agent node). The AI Agent is configured with a system message to analyze the video transcript, answer user questions, and provide structured summaries.  The AI Agent uses the "youtube\_video\_analyzer" tool (another n8n workflow) to retrieve the video details and transcript.
9. **Chat History Memory:** The conversation history is maintained using a Buffer Window Memory node.
10. **Response:** The AI agent processes the user query and sends back a contextual and accurate response based on the video data.

## Services:

- YouTube Data API
- OpenAI API (or DeepSeek API)

## Hashtags:

#n8n #automation #workflow #youtube #ai #chatbot #langchain
