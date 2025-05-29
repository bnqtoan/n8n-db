# My Workflow

## Use cases:

- **Knowledge Base for WordPress Site:** Create a searchable knowledge base by indexing the content of WordPress posts, pages, categories, and tags into a Pinecone vector store. This enables efficient semantic search and retrieval of relevant content.
- **Enhanced Search Functionality:** Improve the search functionality of a WordPress site by using the indexed content in Pinecone to provide more accurate and contextually relevant search results.
- **AI-Powered Content Summarization:** Feed content from WordPress into an AI model (via embeddings) to automatically generate summaries or identify key topics.

## How it works:

This workflow automates the process of extracting content from a WordPress site and indexing it into a Pinecone vector store using OpenAI embeddings. Here's a breakdown:

1.  **Trigger:** A "Schedule Trigger" initiates the workflow on a defined schedule.
2.  **Fetch WordPress Data:**
    *   "Site URL" Sets the site's URL for easy usage
    *   "[WP] GET TAGS" and "[WP] GET CATEGORIES": Retrieves tags and categories from the WordPress site using HTTP requests.
    *   "[WP] EXPORT POSTS" and "[WP] EXPORT PAGES": Retrieves posts and pages from the WordPress site using HTTP requests.
3.  **Transform Data:**
    *   "Tags-> JSON" and "Categories -> JSON": Converts the tag and category data into a usable JSON format.
    *   "Posts -> clear JSON formatted for vector store insertion" and "Pages-> clear JSON formatted for vector store insertion": Cleans and formats the post and page content for insertion into the vector store.
4.  **Aggregate and Merge:**
    *   "Aggregate" and "Aggregate1": Combines the data from categories and tags.
    *   "Merge": Merges the aggregated category and tag data.
    *   "Aggregate2": Combines the merged category and tag data with the posts and pages data.
    *   "Merge1": Merges the posts and pages to a single stream
5.  **Embeddings and Vector Store:**
    *   "Embeddings OpenAI": Generates embeddings for the extracted text using OpenAI's embeddings API.
    *   "Token Splitter": Splits the text into smaller chunks based on tokens to optimize for embedding and vector store size.
    *   "Default Data Loader": loads the data from the splitter
    *   "Pinecone Vector Store": Stores the generated embeddings in a Pinecone vector store for efficient similarity search.

## Services:

-   WordPress (via HTTP requests to its REST API)
-   OpenAI (for embeddings)
-   Pinecone (vector database)

## Hashtags:

#n8n #automation #workflow #wordpress #pinecone #openai #vectorstore
