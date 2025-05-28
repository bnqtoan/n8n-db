# YouTube Video Summarizer with LangChain

## Use cases:

- **Content Summarization:** Quickly generate summaries of YouTube videos for research, learning, or quick overviews.
- **Podcast Digest:** Condense long podcast transcripts into concise summaries with example questions for comprehension.
- **Automated Note-Taking:** Automatically create notes from video content to improve knowledge retention.

## How it works:

1.  **Trigger:** The workflow starts when you manually execute it ("When clicking "Execute Workflow" node).
2.  **Set Video ID:** The "Set YouTube video ID" node sets the `videoId` to "OsMVtuuwOXc".
3.  **LangChain Code:** The "LangChain Code" node is the core of the workflow. It uses LangChain to:
    *   Fetch the transcript of the YouTube video using the SearchApiLoader (requires a SearchApi.io API key).
    *   Split the transcript into smaller chunks.
    *   Utilize an AI Language Model (specified in the "OpenAI Chat Model" node) to generate a summary and example questions. It relies on two prompt templates `SUMMARY_PROMPT` and `SUMMARY_REFINE_PROMPT` for generating the summary and the questions.
4.  **OpenAI Chat Model:** The "OpenAI Chat Model" node defines the AI model (gpt-4o-mini) and credentials ("OpenAi account") used by the LangChain code to summarize the video.

## Services:

-   **YouTube (via SearchApi.io):** Used to retrieve video transcripts.
-   **OpenAI:** Provides the language model for summarization.

## Hashtags:

#n8n #langchain #youtube #summarization #automation
