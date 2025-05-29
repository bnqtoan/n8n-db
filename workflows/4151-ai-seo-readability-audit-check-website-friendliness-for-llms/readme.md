# AI SEO Readability Audit: Check Website Friendliness for LLMs

## Use cases:

- **Optimize websites for AI search engines:**  Help website owners assess and improve their site's accessibility and readability for LLM-based search engines like ChatGPT, Perplexity, and Google AI Overviews, leading to better visibility in AI-driven search results.
- **Identify JavaScript dependency issues:**  Quickly determine if a website relies heavily on JavaScript for content rendering, which can hinder LLMs from properly indexing and understanding the site's content.
- **Provide actionable SEO recommendations:**  Generate customized suggestions for improving a website's structure, content, and metadata to enhance its AI-friendliness, including checking the `robots.txt` file for bot exclusions.

## How it works:

1.  **Chat Trigger:** The workflow starts when a user submits a website URL via a chat interface.
2.  **Sanitize URL:** The submitted URL is formatted to ensure it is a valid and accessible web address (adds `https://` if missing).
3.  **Fetch HTML:** The workflow retrieves the raw HTML content of the website using an HTTP Request node, mimicking how LLMs crawl pages without executing JavaScript.  A custom User-Agent is set to simulate Googlebot.
4.  **Extract HTML Features:**  Relevant SEO features are extracted from the HTML, including visible text length, a preview of the text, presence of headings (H1, H2, H3), meta description, Open Graph tags, structured data (JSON-LD), and `<noscript>` tags. It also checks for JavaScript-blocking warnings.
5.  **AI SEO Analysis:** The extracted features are passed to an LLM (OpenAI) with a specific prompt instructing it to evaluate the AI readability of the website. The LLM generates an AI Readability Score, a summary of the site's AI-friendliness, and actionable recommendations.  The prompt also reminds the user to check their `robots.txt` file.
6. **OpenAI Chat Model:** This node makes the call to OpenAI.
7.  **Return Result:** The LLM's analysis is sent back to the user via the chat interface.

## Services:

-   **OpenAI:** Used for AI-powered SEO analysis and readability assessment.

## Hashtags:

#n8n #automation #SEO #AI #LLM #Chatbot
