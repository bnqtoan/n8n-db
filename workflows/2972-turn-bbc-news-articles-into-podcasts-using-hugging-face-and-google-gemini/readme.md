# BBC News to Podcast Script Generator

## Use cases:

- **Automated Podcast Production:** Automatically convert current news articles from BBC into a podcast script, which reduces manual work in preparing content for audio format.
- **Content Repurposing:** This workflow allows for easily repurposing existing news content into a new engaging format, reaching a broader audience.
- **Real-time News Podcast:** Creating a podcast with the latest news automatically.

## How it works:

1.  **Trigger:** The workflow starts with a manual trigger.
2.  **Fetch BBC News Page:** Retrieves the main BBC News page using an HTTP Request.
3.  **Extract News Block:** Extracts HTML content to get individual news article blocks with `newsTitle`.
4.  **Split Out:** Split the `newsTitle` array into individual items.
5.  **Extract News Content:** Extracts the title, link, and description from each news article block.
6.  **Limit 10 Items:** Limits the number of processed news articles to 10.
7.  **News Classifier:** Classifies the news title and description to determine if it's suitable for a podcast using Gemini LLM.
8.  **Fetch BBC News Detail:** Retrieves the full content of news articles deemed suitable by the News Classifier using the extracted link.
9.  **Extract Detail:** Extracts the detailed content of the news article.
10. **Filter Empty Detail:** Removes any articles where the detail extraction failed (empty `newsDetail`).
11. **Aggregate:** Combines the details of multiple news articles.
12. **Basic Podcast LLM Chain:** Uses a Gemini LLM Chain to convert the aggregated news articles into a podcast script in JSON format.
13. **If script exists:** This node checks if the podcast script was generated successfully.
14. **Hugging Face Text-to-Speech:** Converts the podcast script into speech using the Hugging Face text-to-speech model and access token.

## Services:

*   BBC
*   Google Gemini (PaLM) API
*   Hugging Face

## Hashtags:

#n8n #automation #podcast #news #llm
