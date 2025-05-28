# HN Lookback - Analyze Hacker News Headlines Across Years

## Use cases:

- **Track Tech Trends:** Identify recurring themes and emerging trends in technology news over the years based on Hacker News front page headlines for a specific date.
- **Historical Analysis:** Analyze how specific topics or technologies have evolved in public discourse and interest over time.
- **Content Creation:** Generate insightful content or social media posts by summarizing and categorizing key headlines from Hacker News on a particular day across multiple years.

## How it works:

This workflow automates the process of fetching, analyzing, and summarizing Hacker News front page headlines from multiple years for a specific date.

1.  **Schedule Trigger:** Triggers the workflow execution based on a defined schedule (daily at 9 PM in this case).
2.  **CreateYearsList:** Generates a list of dates (YYYY-MM-DD format) from the current year down to 2007 (starting from Feb 19th, 2007), based on current date.
3.  **CleanUpYearList:** Assigns the generated list of dates to the `datesToFetch` variable.
4.  **SplitOutYearList:** Splits the `datesToFetch` array into individual items for processing.
5.  **GetFrontPage:** Makes an HTTP request to the Hacker News front page for each date in the `datesToFetch` list, using the date as a query parameter (`day`). The request has a batch size of 1 and interval of 3 seconds to avoid overloading the server.
6.  **ExtractDetails:** Extracts the headlines and date from the HTML content of the Hacker News front page using CSS selectors.
7.  **GetHeadlines:** Assigns headlines into a variable.
8.  **GetDate:** Assigns Date into a variable.
9.  **MergeHeadlinesDate:** Combines the headlines and dates from each year.
10. **SingleJson:** Aggregates all the extracted headlines and dates from different years into a single JSON structure.
11. **Basic LLM Chain:** Uses a Language Model Chain with Google Gemini to analyze the aggregated headlines, categorize them into themes, and generate a Markdown-formatted summary including links to the original articles. It follows the given instruction to generate well formatted output.
12. **Telegram:** Sends the generated Markdown summary to a specified Telegram channel (`@OnThisDayHN`).

## Services:

-   Hacker News (via HTTP Request)
-   Google Gemini (via n8n Langchain integration)
-   Telegram (via Telegram API)

## Hashtags:

#n8n #automation #hackernews #llm #datanalysis
