# API Schema Crawler & Extractor

## Use cases:

- Automatically discover and extract API documentation from various online sources for a given service.
- Generate a structured JSON schema representing the API operations, which can be used for documentation, testing, or integration purposes.
- Build a knowledge base of API schemas for different services, enabling efficient API discovery and comparison.

## How it works:

1.  **Trigger & Data Initialization:** The workflow starts with a manual trigger. It then retrieves a list of services and their websites from a Google Sheet, marking them for research, extraction, and output file generation.
2.  **Research Stage (Subworkflow):**
    *   The workflow searches the web for API documentation related to each service using the Apify Google Search Results Scraper.
    *   It scrapes the content of promising web pages using the Apify Web Scraper.
    *   Filters out duplicate search results.
    *   Filters to ensure web scraping successful.
    *   Classifies documents to identify ones containing API Schema documentation.
    *   Embeds the scraped content using Google Gemini Embeddings and stores it in a Qdrant vector store for semantic search.
3.  **Extraction Stage (Subworkflow):**
    *   The workflow queries the Qdrant vector store to identify the service's products, solutions, and offerings.
    *   It performs another query to extract API documentation for those products/solutions.
    *   It leverages Google Gemini Chat Model to extract API operations (endpoints, methods, descriptions) from the documentation.
    *   Extracted API operations are stored in a Google Sheet.
4.  **Generation Stage (Subworkflow):**
    *   Fetch all API operations for each service from Database (Google Sheet).
    *   The workflow combines and groups all extracted API operations for a service and converts them into a custom schema using a Code node.
    *   This custom schema is then uploaded to Google Drive as a JSON file.
5.  **Status Updates:** Throughout the workflow, the status of each stage (research, extraction, generation) is updated in the Google Sheet to track progress.

## Services:

-   Google Sheets: Used as a database to store services, their websites, extraction statuses, and extracted API operations.
-   Apify: Used for web scraping and searching.
-   Google Gemini: Used for LLM tasks of document classification and API extraction.
-   Qdrant: Used as a vector store to store and search document embeddings.
-   Google Drive: Used for storing the generated API schema JSON files.

## Hashtags:

#n8n #automation #API #webscraping #LLM