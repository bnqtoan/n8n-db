# AI Competitor Review Analyzer with Dumpling AI + GPT-4o + Google Sheets

## Use cases:

- **Market Research:** Automatically analyze customer reviews of competitors to identify their strengths and weaknesses, helping businesses to refine their own offerings and marketing strategies.
- **Product Improvement:** Identify recurring complaints or suggestions from customer reviews to pinpoint areas for product or service improvement.
- **Reputation Management:** Quickly understand the overall sentiment towards competitors, enabling proactive reputation management and competitive positioning.

## How it works:

1.  **Google Sheets Trigger – New Business Added:** The workflow starts when a new row is added to a specified Google Sheet. This row should contain the name of the business you want to analyze.
2.  **Fetch Google Reviews from Dumpling AI:** The business name from the Google Sheet is sent to Dumpling AI, which fetches the 20 newest Google reviews for that business. Note: this requires an active Dumpling AI agent with review scraping capabilities.
3.  **Split Out Reviews List:** The list of reviews from Dumpling AI is split into individual review items.
4.  **Aggregate Review Text:** All individual review texts are combined into a single text block. This text block will be used as input for the AI analysis.
5.  **GPT-4o: Extract Insights from Reviews:** The aggregated review text is sent to GPT-4o with a prompt instructing it to identify:
    *   Recurring challenges or complaints mentioned in the reviews.
    *   Things customers love or speak highly about.
    The GPT-4o node returns a structured summary of these insights.
6.  **Save Summary to Google Sheets:** The summary generated by GPT-4o, along with the business name, is appended to the original Google Sheet. This allows for easy tracking and analysis of competitor reviews over time.

## Services:

-   **Google Sheets:** Used as a trigger to start the workflow and to store the final summarized insights.
-   **Dumpling AI:** Used to scrape and retrieve Google reviews for a specified business.
-   **GPT-4o:** Used to analyze the aggregated review text and extract key insights.

## Hashtags:

#n8n #automation #workflow #competitorAnalysis #AISummary #googleSheets #dumplingAI #GPT4o
