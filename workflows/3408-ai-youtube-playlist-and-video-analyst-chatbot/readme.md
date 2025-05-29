# ⚡AI-Powered YouTube Playlist & Video Summarization and Analysis v2

## Use cases:

- **Content Summarization:** Quickly generate summaries of YouTube playlists or individual videos to understand their content without watching them.
- **Knowledge Base Creation:** Build an interactive knowledge base from YouTube content, allowing users to ask questions and receive answers based on the video transcripts.
- **Learning and Research:** Efficiently extract key information from educational videos or tutorials for study or research purposes.

## How it works:

1.  The workflow starts with a user providing a YouTube playlist or video URL through a chat interface.
2.  The workflow determines the user's intent (playlist or video) and retrieves the relevant video or playlist data.
3.  Transcripts are fetched for each video in the playlist or for the single video provided.
4.  The transcripts are summarized using AI models.
5.  The summarized information, along with video metadata, is stored as embeddings in a Qdrant vector store.
6.  The workflow uses a conversational AI agent to answer user questions based on the stored embeddings, providing summaries and insights from the video content.
7.  Redis is used to keep track of the process so that the conversation can continue until all videos are processed.

## Services:

-   YouTube
-   Google Gemini API
-   Qdrant
-   Redis

## Hashtags:

#n8n #automation #workflow #youtube #AI #summarization #langchain
