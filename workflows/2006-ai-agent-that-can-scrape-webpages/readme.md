# Webpage Content Fetcher for AI Agent

## Use cases:

- **AI-Powered Web Research:** Enables an AI agent to fetch and process content from webpages to answer user queries or gather information.
- **Content Summarization:** Retrieves webpage content, simplifies it, and converts it to Markdown for easy summarization by an AI.
- **Automated Data Extraction:** Extracts specific data from websites based on query parameters provided by the AI agent.

## How it works:

1.  **Trigger:** The workflow is triggered either by a chat message or by another n8n workflow, typically an AI agent.
2.  **Parse Query Parameters:** The `QUERY_PARAMS` node parses the query string from the input, extracting parameters like URL and method.
3.  **Configuration:** The `CONFIG` node sets a default value for the `maxlimit` query parameter if it is not provided.
4.  **HTTP Request:** The `HTTP Request` node fetches the content from the specified URL. It's configured to allow unauthorized certificates and prevent errors from stopping the workflow.
5.  **Error Handling:** The `Is error?` node checks for HTTP errors. If an error occurred:
    -   The `Stringify error message` node creates an error message to be sent back to the AI agent. This message includes instructions if the query parameters were invalid.
6.  **Content Processing (if no error):**
    -   The `Exctract HTML Body` node extracts the content within the `<BODY>` tags of the HTML.
    -   The `Remove extra tags` node removes `<script>`, `<style>`, `<noscript>`, `<iframe>`, `<object>`, `<embed>`, `<video>`, `<audio>`, `<svg>` tags and HTML comments from the content.
    -   The `Simplify?` node checks if the `method` parameter is set to "simplified." If so, the `Simplify output` node replaces URLs and image sources with "NOURL" and "NOIMG" respectively.
    -   The `Convert to Markdown` node converts the HTML content to Markdown format.
    -   The `Send Page Content` node checks the length of the Markdown content. If it exceeds the `maxlimit`, it returns an "ERROR: PAGE CONTENT TOO LONG" message; otherwise, it returns the Markdown content and its length.
7.  **AI Agent Integration:** The `HTTP_Request_Tool` node is configured as a custom tool for an AI agent and sends the `page_content` back to the agent.

## Services:

-   **Websites via HTTP/HTTPS:** The workflow fetches content from any website accessible via HTTP or HTTPS.
-   **OpenAI:** Used for chat model and the AI agent (implicitly through the Langchain nodes).

## Hashtags:

#n8n #automation #webscraping #AIagent #contentextraction
