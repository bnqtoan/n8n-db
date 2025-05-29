# My Workflow

## Use cases:

- **Content Aggregation and Summarization:** Automatically collect the latest posts from Hacker News, filter them based on specified features, and use an AI agent to summarize the key information for each post. This summarized content can then be compiled and outputted to a Google Sheet for easy review.
- **Market Research and Trend Analysis:** Monitor Hacker News for trending topics and technologies. The workflow can extract specific fields, filter relevant posts, and leverage AI to identify emerging themes or sentiment, which can be valuable for market research and strategic planning.
- **Personalized News Feed:** Tailor a news feed from Hacker News based on your interests. The workflow can filter posts using specific criteria, use AI to categorize and summarize them, and then output the refined content to a Google Sheet or other preferred format.

## How it works:

1.  **Trigger:** The workflow starts with a "When clicking ‘Test workflow’" Manual Trigger node, initiating the data retrieval process.
2.  **Data Retrieval:** A "Hacker News" node fetches the latest posts from Hacker News.
3.  **Feature Filtering:** The "Filter Posts By Features" node filters the posts based on predefined criteria (the configuration of the filter is not defined in the provided JSON).
4.  **Field Selection:** The "Select Key Fields" node extracts specific fields from the filtered posts, preparing the data for further processing.
5.  **Data Looping:** The "Loop Over Items" node splits the incoming data into individual items for iterative processing.
6.  **AI-Powered Analysis:** An "AI Agent" node processes each Hacker News Post to determine a topic:
    *   **Language Model:** Uses "OpenRouter Chat Model" to generate responses.
    *   **HTTP Request Tool:** Uses HTTP Request tool.
    *   **Output Parser:** Uses "Structured Output Parser" to ensures that responses are received in a usable format.
7.  **Topic Filtering:** The "If Topic1" node filters the AI output, only posts about a certain topic are allowed through.
8.  **Sheet Headers and Merging:** The "Assign Sheet Headers" node defines the headers for the Google Sheet. A "Merge Input" node then combines the processed Hacker News data with these headers.
9.  **Output to Google Sheets:** Finally, the "Output The Results" node writes the combined data to a Google Sheet.

## Services:

*   Hacker News API
*   Google Sheets
*   OpenRouter
*   AI Agent

## Hashtags:

#n8n #automation #HackerNews #AISummarization #GoogleSheets
