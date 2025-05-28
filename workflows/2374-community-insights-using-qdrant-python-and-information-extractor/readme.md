# HN Story Comment Insights

## Use cases:

-   **Community Feedback Analysis:** Analyze Hacker News comments on a specific story to understand community sentiment, identify popular opinions, and discover potential pain points.
-   **Content Improvement:** Use insights from the comment analysis to refine or improve the original content, addressing concerns or expanding on popular topics.
-   **Market Research:** Gather insights on user reactions to new products, announcements, or industry trends discussed on Hacker News.

## How it works:

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" node.
2.  **Set Story ID:** A specific Hacker News story ID is set in the "Set Variables" node. **🚨 Important:** You need to manually update the `story_id` in this node before running the workflow.
3.  **Clear Existing Comments:** Clears existing records in the Qdrant vector store for the specified HN story using Qdrant's delete points API.
4.  **Fetch Comments:** Retrieves comments for the specified story ID from the Hacker News API ("Hacker News" node). The comment tree is flattened, treating replies as top-level comments.
5.  **Store Comments in Qdrant:** Processes each comment by:
    -   Splitting out each record from "Get Comments".
    -   Embedding the comment text using OpenAI's embedding model ("Embeddings OpenAI" node).
    -   Loading default data with metadata in "Default Data Loader".
    -   Splitting document in "Recursive Character Text Splitter".
    -   Storing the embedded comment and its metadata in a Qdrant vector store ("Qdrant Vector Store" node). This allows for similarity searches later.
6.  **Trigger Insights Subworkflow:** Initiates a sub-workflow ("Trigger Insights" node) passing the story ID.
7.  **Find Relevant Comments:** Finds the comment records in Qdrant vector store associated with the story ID.
8.  **Apply Clustering Algorithm:** Applies a K-means clustering algorithm ("Apply K-means Clustering Algorithm" node) to group similar comments based on their vector embeddings.
9.  **Fetch Comment Contents by Cluster:** Retrieves the actual comment text for each cluster using "Get Payload of Points" node.
10. **Generate Insights:** Uses an OpenAI Chat Model ("OpenAI Chat Model" node) to summarize the grouped comments within each cluster and determine the overall sentiment in "Information Extractor".
11. **Export to Google Sheets:** Exports the generated insights, including the summary, sentiment, and raw comment data, to a Google Sheet ("Export To Sheets" node).

## Services:

-   Hacker News API
-   Qdrant Vector Database
-   OpenAI API
-   Google Sheets

## Hashtags:

#n8n #automation #hackernews #datascience #llm #qdrant #openai #googlesheets #textclustering #kmeans
