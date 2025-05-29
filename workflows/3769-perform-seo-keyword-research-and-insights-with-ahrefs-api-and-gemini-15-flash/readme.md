# Ahrefs Keyword Research Workflow

## Use Cases

*   **Automated Keyword Research:** Automatically fetch keyword data and related keywords based on user input from a chat message, streamlining the SEO research process.
*   **SEO Content Planning:** Extract and format keyword data for content planning, enabling users to quickly identify high-potential keywords for their SEO strategy.
*   **Chatbot Integration for SEO:** Integrate keyword research into a chatbot, allowing users to get keyword suggestions and data directly within a messaging platform.

## How it works

1.  **Trigger:** The workflow starts when a chat message is received via the "When chat message received" trigger node. This could be from platforms like Telegram, WhatsApp, or a custom webhook.
2.  **Keyword Extraction & Cleaning:** The "Keyword Query Extraction & Cleaning Agent" uses an AI agent to extract the SEO keyword from the user's message and corrects any misspellings.
3.  **Ahrefs API Request:** The "Ahrefs Keyword API Request" node sends a request to the Ahrefs Keyword Tool API with the extracted keyword.  It fetches global volume data and requires a RapidAPI key.
4.  **Data Extraction:** The "Extract Main Keyword & 10 related Keyword data" node parses the API response to extract the main keyword data and the top 10 related keywords, including metrics like average monthly searches, competition, and CPC.
5.  **Data Aggregation:** The "Aggregate Keyword Data" node aggregates the extracted keyword data into a single item for easier formatting.
6.  **Response Formatting:** The "Keyword Data Response Formatter" node uses an AI agent to format the keyword data (main keyword and related keywords) into a readable text format. The system message defines how the output should look.
7.  **Chatbot Reponse :** The "Google Gemini Chat Model1" sends the well formatted output back to the chatbot.

## Services

*   **Ahrefs Keyword Tool API:** Used for fetching keyword data (requires RapidAPI subscription).
*   **Google Gemini (PaLM) API:** Used for query exctraction & cleaning and response formatting.

## Hashtags

#n8n #automation #SEO #keywordresearch #Ahrefs #gemini #langchain
