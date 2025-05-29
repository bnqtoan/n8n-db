# AI-Powered Newsletter with Web Scraping

## Use cases:

1.  **Daily News Digest:** Automatically collect and summarize news from various sources to create a daily newsletter delivered via email.
2.  **Industry-Specific Updates:**  Gather news and articles related to a specific industry from targeted websites and send a curated newsletter to stakeholders.
3.  **Personalized News Aggregation:** Allow users to input their preferred news sources and keywords, then automatically generate and send a personalized newsletter tailored to their interests.

## How it works:

This workflow automates the process of collecting news from various sources, summarizing it using AI, and sending it as a newsletter via email. Here's a breakdown:

1.  **Trigger:** The workflow starts either with a scheduled trigger ("Schedule Trigger") or when a chat message is received ("When chat message received"). The schedule trigger is set to 9 am.
2.  **AI News Prompt Injection:** An AI news collection prompt is injected to give the AI an input using the "AI news collection prompt" node. This includes initial instructions for the AI agent and a list of sources to scrape for headlines.
3.  **AI Agent:** The "AI Agent" node is the core of the workflow. It uses an OpenAI Chat Model ("OpenAI Chat Model") with memory ("Simple Memory") to process the news prompt and interact with the web scraping tools.
4.  **Web Scraping Tools:** The "AI Agent" utilizes three tools, 'List MCP Tools', "Scrape SERP Results" and "Scrape Webpage", to collect data. These tools interact with Bright Data's Web Unlocker API (as specified in the AI agent's system message) to scrape data from web pages and search engines.
5.  **Newsletter Creation and Sending:** The final output from the AI agent, containing the summarized news, is sent as an HTML email using the "Send the custom newsletter via email" node. The email is sent to a specified recipient with a defined subject and sender email.

## Services:

*   **OpenAI:** Used for AI-powered summarization and content generation.
*   **Bright Data's Web Unlocker API:** Accessed via the "List MCP Tools", "Scrape SERP Results", and "Scrape Webpage" nodes for web scraping.
*   **Email (SMTP):** Used to send the generated newsletter via email.

## Hashtags:

#n8n #automation #newsletter #webscraping #AI
