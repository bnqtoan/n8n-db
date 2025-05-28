# YouTube Video Summarizer

## Use cases:

- **Content Repurposing:** Automatically generate summaries of your YouTube videos to create blog posts, social media updates, or email newsletters.
- **Research and Information Gathering:** Quickly understand the content of long YouTube videos without watching them entirely, saving time for research or staying informed.
- **Educational Purposes:** Provide students or learners with concise summaries of educational videos for better comprehension and retention.

## How it works:

1.  **YouTube Video URL (Form Trigger):** The workflow starts when you input a YouTube video URL via a form.
2.  **Request YouTube Transcript (HTTP Request):** The URL is sent to Apify to extract the transcript of the YouTube video.
3.  **Summarization of a YouTube script (Langchain Chain Summarization):** The extracted transcript is then passed to a summarization node. This node uses Langchain's chain summarization capabilities to automatically generate a concise summary of the video.
4.  **No Operation, do nothing:** An optional node to stop the workflow.
5. **Summarization Engine (Langchain LM Chat OpenAI):** The summarize output is sent to OpenAI to be more concise.

## Services:

-   Apify
-   OpenAI

## Hashtags:

#n8n #automation #youtube #summarization #langchain
