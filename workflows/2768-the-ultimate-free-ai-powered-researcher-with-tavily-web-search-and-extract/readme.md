# 🔍🛠️ Tavily Search & Extract - Template

## Use cases:

- **AI-Powered Research Assistant:** Automate research by using a chat trigger to input a topic, then searching Tavily for relevant information, extracting the content from top results, and summarizing it using OpenAI, providing concise insights.
- **Data Enrichment for Customer Profiles:** Search for information about a company or individual based on specific criteria and extract relevant details from the top search results to enrich customer profiles in a CRM system.
- **Content Aggregation and Summarization:** Regularly search for news or articles on a particular topic, extract the content, and generate summaries for a newsletter or internal knowledge base, keeping stakeholders informed with minimal manual effort.

## How it works:

This workflow automates the process of searching for information using the Tavily API, extracting content from the top search result, and summarizing it using OpenAI's language model.

1.  **Chat Trigger:** The workflow starts with a "Provide search topic via Chat window" node, which is a Chat Trigger that waits for a topic to be entered.
2.  **Tavily API Key:** The provided API key is then passed on for use with Tavily.
3.  **Tavily Search Topic:** The "Tavily Search Topic" node takes the search query from the chat trigger and uses the Tavily API to search for relevant information.  It is configured to perform a basic search and include images.
4.  **Filter > 90%:** The "Filter > 90%" node filters the search results, selecting only those with a score greater than 0.8.
5.  **Get Top Result:** Extracts the first result from the filtered search results array.
6.  **Tavily Extract Top Search:** The "Tavily Extract Top Search" node uses the Tavily API to extract the content from the URL of the top search result.
7.  **Summarize Web Page Content:** An OpenAI Chat Model is used to summarize the raw content extracted from the web page using an LLM Chain node.
8.  **OpenAI Chat Model:** The OpenAI Chat Model node facilitates the summarization based on the content extracted by the previous node.

## Services:

-   Tavily API (Search and Extract)
-   OpenAI API

## Hashtags:

#n8n #automation #websearch #AISummarization #TavilyAPI
