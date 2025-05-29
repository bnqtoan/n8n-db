# Create AI-Ready Vector Datasets for LLMs with Bright Data, Gemini & Pinecone

## Use Cases:

- **Automated Content Summarization and Indexing:** Automatically extract content from web pages, summarize it, and create vector embeddings for use in search and retrieval systems powered by LLMs. For example, create a knowledge base from Hacker News articles.
- **Intelligent Web Monitoring and Alerting:** Monitor specific websites for relevant information, format the data, and store it in a vector database. Use the extracted and processed data to trigger alerts or notifications based on semantic similarity to predefined topics.
- **Building a Custom Q&A System:** Scrape data from various online sources, convert them into vector embeddings, and store them in Pinecone. Use the vector data to answer questions from users by performing similarity searches.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" trigger node.
2.  **Set URL and Webhook:** A "Set Fields - URL and Webhook URL" node defines the target website URL and the webhook URL to send results.  The default URL points to Hacker News with Bright Data parameters, and a sample webhook is set.
3.  **Web Scraping with Bright Data:** An "Make a web request" node uses Bright Data's Web Unlocker API to scrape the content of the specified URL. It sends a POST request with the URL and zone parameters and is authenticated using HTTP Header Authentication.
4.  **Data Formatting (Structured JSON Data Formatter):** Uses a "Structured JSON Data Formatter" to turn the unformatted data into a structured data which will follow a format to be displayed correctly.
5.  **Information Extraction with AI Agent:** This is a crucial step. The "Information Extractor with Data Formatter" extracts relevant information (search results) from the scraped HTML content using an AI agent and formats it as a collection of items, following a user-defined system prompt.
6.  **AI Agent Processing:** The "AI Agent" node takes the extracted information and formats the search results based on a prompt and then extracts specific fields like ID, title, summary, keywords, and topics.
7. **Output Parsing:** The "Structured Output Parser" node uses a predefined JSON schema to parse the formatted data from the AI Agent, ensuring a consistent and structured output.
8. **Vector Embedding Generation:** An "Embeddings Google Gemini" node generates vector embeddings from the processed data.
9. **Text Splitting and Document Loading:** The "Recursive Character Text Splitter" and "Default Data Loader" nodes split the extracted content into smaller chunks and load them as documents.
10. **Pinecone Integration:** Finally, the "Pinecone Vector Store" node stores the generated vector embeddings in a Pinecone vector database. The credentials for Pinecone are handled through a Pinecone API credential.
11. **Webhook Notification:** Sends data to webhook URLs. This will be sent through a "Webhook for structured data" node to send the formatted data. Also a "Webhook for structured AI agent response" node to send an AI agent response.

## Services:

-   **Bright Data:** Used for web scraping and data extraction.
-   **Google Gemini (PaLM) API:** Used for AI-powered content extraction, summarization and embedding.
-   **Pinecone:** Used as a vector database to store and query vector embeddings.
-   **Webhook.site:** A tool to mock webhook responses and to debug HTTP requests.

## Hashtags:

#n8n #automation #AI #webscraping #vectorstore
