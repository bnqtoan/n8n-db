# N8N Video Search Frontend using Web UI

## Use cases:

-   **Internal Knowledge Base:** Create a searchable archive of internal training videos or webinars for employees.
-   **Research Tool:** Quickly find specific information within a large collection of YouTube videos related to a particular topic or industry.
-   **Customer Support:** Help customer support teams quickly find answers to common questions within product demo videos or tutorials.

## How it works:

This workflow automates the process of creating a search engine for YouTube videos using n8n, Apify, Qdrant, and OpenAI.

1.  **Fetch Latest Videos:** Fetches the latest videos from the official n8n YouTube channel using the Apify YouTube Scraper.
2.  **Remove Duplicates:** Ensures that only new videos are processed by comparing their IDs against previously processed videos.
3.  **Get Video Transcript:** For each new video, a sub-workflow is triggered to extract the video's subtitles using Apify's YouTube Scraper.
4.  **Chunk Subtitles:** The extracted subtitles are split into smaller chunks.
5.  **Vectorize Subtitles:** The subtitle chunks are converted into embeddings using OpenAI's embeddings model.
6.  **Store in Qdrant:** The embeddings, along with relevant metadata (video ID, title, channel ID, URL, type), are stored in a Qdrant vector store.
7.  **Search API:** A webhook is created to serve as the search API, which receives user queries.
8.  **Rate Limiting:** A Redis counter is used to limit the number of search requests per minute to prevent abuse.
9.  **Get Query Embeddings:** The user's query is converted into an embedding using OpenAI.
10. **Search Qdrant Vector Store:** The query embedding is used to search the Qdrant vector store for relevant subtitle chunks.
11. **Extract Results:** The relevant parts of the transcript with timestamps which answer our user's query using OpenAI's Information Extractor.
12. **Generate Results HTML Template:** The extracted transcript parts are re-grouped and build the results list HTML to be rendered back to the user.
13. **Summarise Results to Generate Answer:** An answer for the user's query based on the search results.
14. **Web UI:** A webhook serves a simple web app, allowing users to search the video transcripts.
15. **Display Results:** The search results are displayed in the web UI, with links to the relevant timestamps in the corresponding YouTube videos.

## Services:

-   **Apify:** Used for scraping YouTube videos and downloading subtitles.
-   **Qdrant:** Used as a vector store to store and search video transcript embeddings.
-   **OpenAI:** Used for generating embeddings and extracting answers from the transcripts.
-   **Redis:** Used for rate limiting the search API.

## Hashtags:

\#n8n \#automation \#workflow \#youtube \#rag
